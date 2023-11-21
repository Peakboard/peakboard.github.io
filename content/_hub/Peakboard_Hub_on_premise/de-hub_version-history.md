---
layout: article
title: Versionshistorie
product: hub
menu_title: Versionshistorie
description: Versionshistorie
lang: de
weight: 190
ref: hub-190
redirect_from:
  - /hub/de-hub_version-history.html
---

{% assign sorted_version_history_entries = site.data[page.lang].hub_version_history | sort %}
{% for version_entry_hash in sorted_version_history_entries reversed %}
  {% assign version_entry = version_entry_hash[1][0] %}
  {% include tabs.html data=version_entry %}
{% endfor %}

{% include tabs-script.html %}

{% include collapsible-new.html archive=false hub=true %}
