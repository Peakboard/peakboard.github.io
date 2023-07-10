---
layout: article
title: Version History
product: hub
menu_title: Version History
description: Version History
lang: de
weight: 800
ref: hub-800
---

{% assign sorted_version_history_entries = site.data[page.lang].hub_version_history | sort %}
{% for version_entry_hash in sorted_version_history_entries reversed %}
  {% assign version_entry = version_entry_hash[1][0] %}
  {% include tabs.html data=version_entry %}
{% endfor %}

{% include tabs-script.html %}

{% include collapsible-new.html archive=false %}
