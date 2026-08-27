#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""Version-history coverage: which entry of the version history has a help article?

Reads every entry of the English version history (`_data/en/version_history/*.json`
plus the archived releases in `content/_misc/en-version-history-archive.md`) and
matches it against every English article under `content/`.

The result is written to `_docs/version-history-coverage.md` (readable table per
release) and `_docs/version-history-coverage.json` (machine readable, so the next
release can be diffed against this one).

Verdicts
    fix          the entry is a bug fix - a help article describes behaviour, not a
                 defect that no longer exists, so no article is expected
    documented   an article contains the entry's significant terms (>= STRONG)
    review       an article contains some of them (>= WEAK) - human decides
    undocumented no article carries the entry's terms

Usage:  python scripts/version-history-coverage.py [--min-version 4.0]
"""

import io
import json
import math
import glob
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

STRONG = 0.70
WEAK = 0.40

FIX_PATTERNS = [
    r'^fix(ed|es)?\b', r'^fix for\b', r'^hotfix\b', r'^bugfix\b', r'^corrected\b',
    r'^resolved\b', r'\bhas been (fixed|resolved)\b', r'\bis (fixed|resolved)\b',
    r'\bbug (was|has been) (fixed|resolved)\b', r'^solved\b',
]

# words that carry no discriminating meaning inside a changelog line
STOPWORDS = set("""
a an the and or of to in on for with when while from into at by is are was were be been being
it its this that these those there here as if then than so such not no longer now also more most
you your our their his her they them we us can could may might will would should must
added adds add new newly improved improve improvement improvements changed change changes
reworked rework removed remove removes fixed fix fixes issue issues problem problems bug bugs
error errors exception exceptions message messages case cases option options possible possibility
ability able allow allows allowed support supported supports feature features function functions
use used uses using make makes made get gets got set sets setting settings show shows shown
display displays displayed open opens opened close closes closed work works working
several some other others all any each every both which what where who how why
after before during instead within without again still yet only just even much many
does doing done have has had via per out up down over under between about
""".split())

# multi word terms that must survive tokenisation as one unit
PHRASES = [
    'peakboard hub list', 'peakboard hub', 'peakboard box', 'peakboard designer',
    'peakboard runtime', 'peakboard edge', 'building block', 'building blocks',
    'conditional formatting', 'variable list', 'variable lists', 'data source',
    'data sources', 'global function', 'global functions', 'script editor',
    'script tester', 'debug panel', 'property grid', 'template editor',
    'styled list', 'styled tile', 'tile collection', 'hub flow', 'hub flows',
    'opc ua', 'power bi', 'microsoft graph', 'google spreadsheets', 'google drive',
    'web server', 'calendar control', 'video control', 'image control', 'pdf control',
]


def norm(text):
    text = text.lower()
    text = re.sub(r'[^a-z0-9äöüß]+', ' ', text)
    return ' ' + re.sub(r'\s+', ' ', text).strip() + ' '


def significant_terms(entry_text):
    """The words of a changelog line that a help article would have to contain."""
    flat = norm(entry_text)
    terms = []
    for phrase in PHRASES:
        if ' ' + phrase + ' ' in flat:
            terms.append(phrase)
            flat = flat.replace(' ' + phrase + ' ', ' ')
    for token in flat.split():
        if token in STOPWORDS or len(token) < 4 or token.isdigit():
            continue
        terms.append(token)
    seen, out = set(), []
    for term in terms:
        if term not in seen:
            seen.add(term)
            out.append(term)
    return out


def strip_area_prefix(entry_text):
    """`[Charts] - Fix for ...` and `TileView - Fix for ...` name the area first.
    The verb that classifies the entry stands behind that prefix."""
    text = entry_text.strip()
    text = re.sub(r'^\[[^\]]{1,40}\]\s*[-:]?\s*', '', text)
    text = re.sub(r'^[A-Z][A-Za-z0-9 /]{0,25}\s+-\s+', '', text)
    return text.strip()


def is_fix(entry_text):
    low = strip_area_prefix(entry_text).lower()
    return any(re.search(p, low) for p in FIX_PATTERNS)


def contains(haystack, term):
    if ' ' + term + ' ' in haystack:
        return True
    for suffix in ('s', 'es', 'd', 'ed', 'ing'):
        if ' ' + term + suffix + ' ' in haystack:
            return True
    if term.endswith('s') and ' ' + term[:-1] + ' ' in haystack:
        return True
    return False


def load_articles():
    """Every English help article: relative path, title, normalised full text."""
    articles = []
    for path in glob.glob(os.path.join(ROOT, 'content', '**', 'en-*.md'), recursive=True):
        # The version history (and its archive) is the changelog itself, not documentation.
        # Left in the corpus it matches every entry with itself and hides every gap.
        if re.search(r'en-version-history', os.path.basename(path)):
            continue
        raw = io.open(path, encoding='utf-8-sig', errors='replace').read()
        title = ''
        m = re.search(r'^title:\s*(.+)$', raw, re.M)
        if m:
            title = m.group(1).strip()
        rel = os.path.relpath(path, ROOT).replace('\\', '/')
        articles.append({'path': rel, 'title': title, 'text': norm(raw)})
    return articles


def idf(term, articles, cache):
    """How distinctive a term is. A word that stands in half the articles proves
    nothing about coverage - only a rare one does."""
    if term not in cache:
        df = sum(1 for a in articles if contains(a['text'], term))
        cache[term] = math.log(len(articles) / float(1 + df))
    return max(cache[term], 0.0)


def best_match(terms, articles, cache):
    """Best article for an entry, scored by the weight of the terms it carries.

    The score is the share of the entry's *distinctive* weight that the article
    covers, and the single most distinctive term has to be among the hits - an
    article that only carries the filler words is not coverage."""
    if not terms:
        return None, 0.0, [], False
    weights = dict((t, idf(t, articles, cache)) for t in terms)
    total = sum(weights.values())
    if total <= 0:
        return None, 0.0, [], False
    key_term = max(terms, key=lambda t: weights[t])
    best, best_score, best_hits, best_key = None, 0.0, [], False
    for art in articles:
        hits = [t for t in terms if contains(art['text'], t)]
        score = sum(weights[t] for t in hits) / total
        if score > best_score:
            best, best_score, best_hits = art, score, hits
            best_key = key_term in hits
    return best, best_score, best_hits, best_key


def read_version_history():
    """[(version, date, section, text, source)] over the whole version history."""
    entries = []
    pattern = os.path.join(ROOT, '_data', 'en', 'version_history', '*.json')
    for path in sorted(glob.glob(pattern)):
        for release in json.load(io.open(path, encoding='utf-8-sig')):
            version, date = release.get('version', '?'), release.get('date', '')
            for tab in release.get('tabs', []):
                section = tab.get('name', '')
                headline = ''
                for block in tab.get('content', []):
                    kind = block.get('type')
                    if kind == 'headline':
                        headline = block.get('text', '')
                    elif kind == 'list':
                        for item in block.get('list_items', []):
                            entries.append((version, date, headline or section, item, 'json'))
                    elif kind in ('image', 'text'):
                        text = block.get('description') or block.get('text') or ''
                        if text:
                            entries.append((version, date, headline or section, text, 'json'))
    # archived releases (2020-2021) live as markdown, not as data
    archive = os.path.join(ROOT, 'content', '_misc', 'en-version-history-archive.md')
    if os.path.exists(archive):
        version, date = '?', ''
        for line in io.open(archive, encoding='utf-8-sig', errors='replace'):
            head = re.match(r'^##\s*([0-9.]+)[^(]*\(?([0-9.]*)\)?', line)
            if head:
                version, date = head.group(1), head.group(2)
                continue
            item = re.match(r'^\s*[*-]\s+(.*\S)\s*$', line)
            if item and version != '?':
                text = re.sub(r'\[([^\]]+)\]\([^)]+\)', r'\1', item.group(1))
                entries.append((version, date, 'Archive', text, 'archive'))
    return entries


def version_key(version):
    parts = re.findall(r'\d+', version)
    return tuple(int(p) for p in (parts + ['0', '0', '0', '0'])[:4])


def main():
    min_version = None
    if '--min-version' in sys.argv:
        min_version = version_key(sys.argv[sys.argv.index('--min-version') + 1])

    articles = load_articles()
    entries = read_version_history()
    idf_cache = {}
    results = []
    for version, date, section, text, source in entries:
        if min_version and version_key(version) < min_version:
            continue
        if is_fix(text):
            results.append({'version': version, 'date': date, 'section': section,
                            'entry': text, 'source': source, 'verdict': 'fix',
                            'article': None, 'score': 0.0, 'matched': []})
            continue
        terms = significant_terms(text)
        art, score, hits, key_hit = best_match(terms, articles, idf_cache)
        if score >= STRONG and key_hit:
            verdict = 'documented'
        elif score >= WEAK:
            verdict = 'review'
        else:
            verdict = 'undocumented'
        results.append({'version': version, 'date': date, 'section': section,
                        'entry': text, 'source': source, 'verdict': verdict,
                        'article': art['path'] if art and score >= WEAK else None,
                        'score': round(score, 2), 'matched': hits if score >= WEAK else []})

    out_json = os.path.join(ROOT, '_docs', 'version-history-coverage.json')
    payload = {'articles_scanned': len(articles), 'entries': results}
    io.open(out_json, 'w', encoding='utf-8').write(
        json.dumps(payload, indent=1, ensure_ascii=False))

    order = ['undocumented', 'review', 'documented', 'fix']
    by_version = {}
    for r in results:
        by_version.setdefault(r['version'], []).append(r)

    lines = ['# Version history coverage', '',
             'Generated by `scripts/version-history-coverage.py` - do not edit by hand.',
             'It answers, for every entry of the version history, whether the Help site',
             'covers it. Re-run it after every release and work off the `undocumented`',
             'rows.', '',
             '| verdict | meaning |', '|---|---|',
             '| `fix` | bug fix - an article describes behaviour, not a defect that is gone. No article expected. |',
             '| `documented` | an article carries >= %d%% of the entry significant terms |' % int(STRONG * 100),
             '| `review` | an article carries >= %d%% of them - needs a human verdict |' % int(WEAK * 100),
             '| `undocumented` | no article carries them |', '',
             'How to read it: the verdict is evidence, not a decision. The match is made over',
             'words, so an article that documents an entry under a different name reads as',
             '`undocumented` (the release note "AI Generator" against the article "Peakbot"),',
             'and an entry whose words happen to stand in some article reads as `documented`.',
             'Work the `undocumented` rows top-down, check each one against the named article,',
             'and write the article where there really is none.', '',
             '## Totals', '']
    totals = {v: sum(1 for r in results if r['verdict'] == v) for v in order}
    lines.append('| verdict | entries |')
    lines.append('|---|---:|')
    for v in order:
        lines.append('| %s | %d |' % (v, totals[v]))
    lines.append('| **total** | **%d** |' % len(results))
    lines.append('')
    lines.append('%d English articles scanned.' % len(articles))
    lines.append('')

    for version in sorted(by_version, key=version_key, reverse=True):
        rows = by_version[version]
        lines.append('## %s (%s)' % (version, rows[0]['date']))
        lines.append('')
        lines.append('| section | entry | verdict | article |')
        lines.append('|---|---|---|---|')
        for r in sorted(rows, key=lambda x: order.index(x['verdict'])):
            entry = r['entry'].replace('|', '\\|')
            art = r['article'] or ''
            if art:
                art = '`%s` (%.0f%%)' % (art, r['score'] * 100)
            lines.append('| %s | %s | `%s` | %s |' % (r['section'], entry, r['verdict'], art))
        lines.append('')

    out_md = os.path.join(ROOT, '_docs', 'version-history-coverage.md')
    io.open(out_md, 'w', encoding='utf-8').write('\n'.join(lines))
    print('entries: %d' % len(results))
    for v in order:
        print('  %-13s %d' % (v, totals[v]))
    print('written: %s' % out_md)


if __name__ == '__main__':
    main()
