#!/usr/bin/env python3
"""
update-llms-txt-helpsite.py

Regenerates the snapshot block in llms-full.txt for help.peakboard.com from
the live sitemap.xml. Replaces only the content between
<!-- AUTOGEN:START --> and <!-- AUTOGEN:END --> markers, leaving the rest
of llms-full.txt untouched.

This script lists all documentation pages flat, alphabetically sorted by URL
path. German (de-) and English (en/) variants are kept separate so users see
both languages without one drowning out the other.

Usage:
    python update-llms-txt-helpsite.py                    # uses defaults
    python update-llms-txt-helpsite.py --dry-run          # prints diff without writing
    python update-llms-txt-helpsite.py --llms path/to/llms-full.txt --sitemap https://...
"""

import argparse
import re
import sys
import urllib.request
from datetime import date
from pathlib import Path
from xml.etree import ElementTree as ET

DEFAULT_SITEMAP = "https://help.peakboard.com/sitemap.xml"
DEFAULT_LLMS_PATH = "llms-full.txt"
SITE_BASE = "https://help.peakboard.com"

MARKER_START = "<!-- AUTOGEN:START — content between the AUTOGEN markers is regenerated from sitemap.xml; do not edit by hand -->"
MARKER_END = "<!-- AUTOGEN:END -->"

# Paths/path-substrings that are NOT documentation pages and should be skipped.
# Add patterns here if the sitemap contains login pages, search results, etc.
SKIP_PATTERNS = (
    "/sitemap",
    "/robots",
    "/404",
    "/search",
    "/privacy",
    "/imprint",
    "/impressum",
    "/datenschutz",
    "/cookie",
    "/claude.html",  # internal/test page, not part of public documentation
)

# Substrings in the filename that indicate index/landing pages, not real
# documentation. These get filtered separately because they're never useful
# to link to directly — users should reach those via the navigation, not
# via a flat URL inventory.
SKIP_FILENAME_SUFFIXES = (
    "-index.html",  # e.g. /administration/en-index.html
)


def fetch_sitemap(url: str) -> str:
    """Download the sitemap and return its raw XML."""
    with urllib.request.urlopen(url, timeout=30) as response:
        return response.read().decode("utf-8")


def parse_urls(xml_text: str):
    """Extract all documentation URLs from the sitemap.

    Returns two sorted lists (german, english), each containing tuples
    of (path, full_url). Sorting is alphabetical by path.
    """
    ns = {"sm": "http://www.sitemaps.org/schemas/sitemap/0.9"}
    root = ET.fromstring(xml_text)

    german = []
    english = []

    for url_elem in root.findall("sm:url", ns):
        loc_elem = url_elem.find("sm:loc", ns)
        if loc_elem is None or loc_elem.text is None:
            continue
        url = loc_elem.text.strip()
        # Normalize http→https so we always emit https URLs even if the
        # sitemap is still on http (legacy configuration).
        if url.startswith("http://"):
            url = "https://" + url[len("http://"):]
        if not url.startswith(SITE_BASE):
            continue
        path = url[len(SITE_BASE):]
        # Skip meta pages and section index pages (privacy, search, sitemap,
        # bare folder listings like /administration/, the homepage, etc.)
        lower_path = path.lower()
        if any(p in lower_path for p in SKIP_PATTERNS):
            continue
        if not path.endswith(".html"):
            continue
        # Skip section index / landing pages
        if any(path.lower().endswith(s) for s in SKIP_FILENAME_SUFFIXES):
            continue
        # English vs German: determined primarily by the FILENAME prefix
        # ("en-", "en_", "de-", "de_"), not the folder — both languages live
        # in the same folders. As a secondary signal, anything in /en/ is
        # treated as English.
        fname = path.rsplit("/", 1)[-1].lower()
        if fname.startswith("en-") or fname.startswith("en_"):
            english.append((path, url))
        elif fname.startswith("de-") or fname.startswith("de_"):
            german.append((path, url))
        elif path.startswith("/en/"):
            english.append((path, url))
        else:
            # Pages without any language indicator (e.g. /designer.html) —
            # bucket as German default, since German is the primary language.
            german.append((path, url))

    german.sort(key=lambda p: p[0])
    english.sort(key=lambda p: p[0])
    return german, english


def render_block(german, english) -> str:
    """Render the snapshot block (everything between the markers)."""
    out = []
    out.append(MARKER_START)
    out.append("")

    if german:
        out.append(f"### German documentation pages ({len(german)})")
        out.append("")
        for path, url in german:
            out.append(f"- {path}: {url}")
        out.append("")

    if english:
        out.append(f"### English documentation pages ({len(english)})")
        out.append("")
        for path, url in english:
            out.append(f"- {path}: {url}")
        out.append("")

    out.append(MARKER_END)
    return "\n".join(out)


def update_snapshot_date(content: str, today: str) -> str:
    """Update the 'as of YYYY-MM-DD' (or placeholder) date in the heading."""
    return re.sub(
        r"## Complete URL inventory \(as of [^)]+\)",
        f"## Complete URL inventory (as of {today})",
        content,
    )


def replace_block(content: str, new_block: str) -> str:
    """Replace everything between MARKER_START and MARKER_END (inclusive)."""
    pattern = re.compile(
        re.escape(MARKER_START) + r".*?" + re.escape(MARKER_END),
        re.DOTALL,
    )
    if not pattern.search(content):
        sys.exit(
            f"ERROR: AUTOGEN markers not found in {DEFAULT_LLMS_PATH}.\n"
            f"Expected:\n  {MARKER_START}\n  ...\n  {MARKER_END}"
        )
    return pattern.sub(new_block, content)


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--llms", default=DEFAULT_LLMS_PATH, help="Path to llms-full.txt")
    parser.add_argument("--sitemap", default=DEFAULT_SITEMAP, help="Sitemap URL")
    parser.add_argument("--dry-run", action="store_true", help="Print without writing")
    args = parser.parse_args()

    llms_path = Path(args.llms)
    if not llms_path.exists():
        sys.exit(f"ERROR: {llms_path} not found")

    print(f"Fetching {args.sitemap} ...")
    xml_text = fetch_sitemap(args.sitemap)

    print("Parsing URLs ...")
    german, english = parse_urls(xml_text)
    print(f"  German pages: {len(german)}")
    print(f"  English pages: {len(english)}")
    print(f"  Total: {len(german) + len(english)}")

    today = date.today().isoformat()
    new_block = render_block(german, english)

    original = llms_path.read_text(encoding="utf-8")
    updated = update_snapshot_date(original, today)
    updated = replace_block(updated, new_block)

    if updated == original:
        print("No changes — llms-full.txt already up to date.")
        return

    if args.dry_run:
        print("\n--- DRY RUN: would write the following changes ---\n")
        print(new_block[:500] + "\n... (truncated) ...\n" + new_block[-300:])
        return

    llms_path.write_text(updated, encoding="utf-8")
    print(f"Updated {llms_path} (snapshot date: {today})")


if __name__ == "__main__":
    main()
