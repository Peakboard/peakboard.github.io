---
layout: article
title: Probleme mit Peakboard Edge
menu_title: Probleme mit Peakboard Edge
description: Information über Probleme mit Peakboard Edge
lang: de
weight: 2740
ref: dat-2740
redirect_from:
---

### Verbindungsprobleme (Peakboard Box ↔︎ Peakboard Edge)

#### Hat die Verbindung bereits funktioniert und ist ohne weiteres abgebrochen?

Ein Neustart der Peakboard Edge, sowie der Peakboard Box können helfen.

#### Konnte noch keine Verbindung zwischen Peakboard Box und Peakboard Edge hergestellt werden oder der Neustart beider Geräte hat nicht geholfen?

Überprüfe ob beide Geräte (Peakboard Box und Peakboard Edge) mit dem selben Netzwerk verbunden sind. Dabei kann dir am besten ein Netzwerkadministrator helfen. Falls keiner verfügbar ist, kannst du alternativ auch testen, ob eine Verbindung zwischen dem Peakboard Designer und der Peakboard Box, sowie dem Peakboard Designer und der Peakboard Edge möglich ist. Sollte dies nicht der Fall sein kann das Problem auf die fehlerhafte Verbindung eingegrenzt werden.

### Verbindungsprobleme (Verbindungstester / Preview ↔︎ Peakboard Edge)

Falls die Verbindung Preview ↔︎ Peakboard Edge fehlschlägt, nutze den Verbindungstester im Peakboard Designer.

Falls die Verbindung Verbindungstester ↔︎ Peakboard Edge fehlschlägt:

* Notiere die Peakboard Edge ID
* Öffne über die Tastenkombination [Win + R] den Windows [Ausführen] Dialog
* Gib [cmd] ein und drücke Enter um ein Kommandozeilenfenster zu öffnen
* Gib dann in der Kommandozeile den Befehl [ping <Edge ID>] ein, wobei du <Edge ID> durch die vorher notierte Peakboard Edge ID ersetzt
Sollte die Verbindung möglich sein (Der ping wird beantwortet), bitte an den Peakboard Support wenden.

Sollte die Verbindung nicht möglich sein, befindet sich die Peakboard Edge entweder in einem anderen Netzwerk oder wird durch interne Netzwerkregeln blockiert. In letzterem Fall kann dir nur ein IT-Administrator deines Unternehmens helfen.
