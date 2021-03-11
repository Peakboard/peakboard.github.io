---
layout: article
title: Fehler - Mehrfache Verbindungen bei Netzwerkressourcen
menu_title: Fehler - Mehrfache Verbindungen bei Netzwerkressourcen
description: Fehler - Mehrfache Verbindungen bei Netzwerkressourcen
lang: de
weight: 3100
ref: admin-3100
---

Wenn Ihnen der Peakboard Designer beim Zugriff auf eine Netzwerkressource wie z.B. innerhalb  der [Excel-Datenquelle](/data_sources/Excel/de-excel.html) oder eines [PDF](/controls/Document/de-pdf.html) folgenden Fehler anzeigt:

<div class="box-warning" markdown="1">
**System.ComponentModel.Win32Exception (0x80004005):** 
Mehrfache Verbindungen zu einem Server oder einer freigegebenen Ressource von demselben Benutzer unter Verwendung mehrerer Benutzernamen sind nicht zulässig. 
Trennen Sie alle früheren Verbindungen zu dem Server bzw. der freigegebenen Ressource, und versuchen Sie es erneut.
</div>

Liegt es an den Eingehenden Regeln der Windows Defender Firewall ihres Computers bzw. Ihrer Domäne. 
Hier müssen Sie oder ein Administrator lediglich für die Peakboard Runtime die Verbindungen für alle Profile zulassen.
