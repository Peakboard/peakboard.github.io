---
layout: article
title: Fehler bei Netzwerkressourcen 
menu_title: Fehler bei Netzwerkressourcen
description: Fehler bei Netzwerkressourcen
lang: en
weight: 1015
ref: misc-1015
---

Wenn Ihnen der Peakboard Designer beim Zugriff auf eine Netzwerkressource wie z.B. eine Excel oder ein Bild folgenden Fehler anzeigt:
´´´
System.ComponentModel.Win32Exception (0x80004005): Mehrfache Verbindungen zu einem Server oder einer freigegebenen Ressource von demselben Benutzer unter Verwendung mehrerer Benutzernamen sind nicht zulässig. Trennen Sie alle früheren Verbindungen zu dem Server bzw. der freigegebenen Ressource, und versuchen Sie es erneut.
´´´

Liegt es an den Eingehenden Regeln der Windows Defender Firewall ihres Computers bzw. Ihrer Domäne. Hier müssen Sie oder ein Administrator lediglich für die Peakboard Runtime die Verbindungen für alle Profile zulassen.