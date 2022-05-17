---
layout: article
title: Versionshistorie
menu_title: Versionshistorie
description: Versionshistorie
lang: de
weight: 1
ref: misc-1
redirect_from:
  - /misc/06-de-versionshistorie.html
footer: 2.15.0.0 (06.04.2022)
---

{% assign sorted_version_history_entries = site.data[page.lang].version_history | sort %}
{% for version_entry_hash in sorted_version_history_entries reversed %}
  {% assign version_entry = version_entry_hash[1][0] %}
  {% include tabs.html data=version_entry %}
{% endfor %}

{% include tabs-script.html %}

{% include collapsible-new.html %}
