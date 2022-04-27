---
layout: article
title: Version History New
menu_title: Version History New
description: Version History New
lang: en
weight: 1
ref: misc-100000
redirect_from:
  - /misc/06-de-versionshistorie.html
footer: 2.15.0.0 (06.04.2022)
draft: true
---

{% assign sorted_version_history_entries = site.data[page.lang].version_history | sort %}
{% for version_entry_hash in sorted_version_history_entries reversed %}
  {% assign version_entry = version_entry_hash[1][0] %}
  {% include tabs.html data=version_entry %}
{% endfor %}

{% include collapsible-new.html %}
