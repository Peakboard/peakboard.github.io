---
layout: article
title: Peakboard Edge
menu_title: Peakboard Edge 
description: Information über Peakboard Edge
lang: de
weight: 2700
ref: dat-2700
redirect_from:
---

![Peakboard Edge](/assets/images/data-sources/peakboard-edge/peakboard-edge_technical-details_de.png)

Peakboard Edge dient als Schnittstelle zwischen Ein- und Ausgaben und einer Peakboard Box. 

Ein oder mehrere Peakboard Edge befinden sich im Netzwerk und kommunizieren mit einer (oder mehreren) Peakboard Boxen. Die Peakboard Box kann Informationen von Peakboard Edge empfangen oder an diese senden. Das Peakboard Edge stellt wiederum verschiedene Anschlussmöglichkeiten bereit.

{% include styled_table.html %}
| Anschluss				| Anzahl				    | Info                |
|-----------------------|---------------------------|---------------------|
| RJ45 (Ethernet)       | 1                         | Zum Einbinden der Peakboard Edge in ein Netzwerk |
| USB                   | 2                         | Zum anschließen eines Ein-/Ausgabegerätes oder eines WLAN-Dongles|
| Micro USB				| 1							| Stromversorgung |
| Klemmleiste (IN)		| 4 Stromausgänge a 3,3 V, 4 Eingänge | Sind in Paare aufgeteilt. Peakboard Edge erkennt den Zustand der Eingänge |
| Klemmleiste (OUT)		| 4 schaltbare Strom Pins (bis 24V), 1 Stromeingang | 4 schaltbare Pins können über Peakboard Edge gesteuert werden, sodass der Strom vom Stromeingang an diesen anliegt |


An diese Anschlussmöglichkeiten können beispielsweise folgende Geräte angeschlossen werden:


### Eingänge

{% include styled_table.html %}
| Eingabegerät 		| Anschluss 		|
|-------------------|-------------------|
| Druckknopf		| Klemmleiste		|
| (Binärer) Sensor	| Klemmleiste		|
| Tastatur			| USB				|
| Barcodescanner	| USB				|
| RFID-Reader		| USB				|


### Ausgänge

{% include styled_table.html %}
| Ausgabegerät		| Anschluss			|
|-------------------|-------------------|
| Ampel				| Klemmleiste		|
| Signalleuchte		| Klemmleiste		|
| Lautsprecher		| USB				|


Über eine Visualisierung auf einer Peakboard Box können die Informationen der Eingabegeräte an einer Peakboard Edge auf einem Bildschirm dargestellt oder in einer Datenbank gespeichert werden. Gleichzeitig ist dabei ein Verarbeiten der Informationen möglich. Ebenso können die Ausgabegeräte an einer Peakboard Edge über die Visualisierung gesteuert werden. 

Die Folgenden Schritte bieten einen Überblick, wie Peakboard Edge verwendet werden kann.