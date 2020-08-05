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

Peakboard Edge dient als Schnittstelle zwischen Ein- und Ausgaben und einer Peakboard Box. 

Ein (oder mehrere) Peakboard Edge befinden sich im Netzwerk und kommuniziert mit einer (oder mehreren) Peakboard Enterprise Boxen. Die Box kann Informationen vom Peakboard Edge empfangen oder an dieses senden. Das Peakboard Edge stellt wiederum verschiedene Anschlussmöglichkeiten bereit.

{% include styled_table.html %}
| Anschluss				| Anzahl				     | Info                |
|-----------------------|---------------------------|---------------------|
| RJ45 (Ethernet)       | 1                         | Zum Einbinden des PB Edge in ein Netzwerk |
| USB                   | 2                         | Zum anschließen eines Ein-/Ausgabegerätes oder eines WLAN-Dongles|
|Micro USB				| 1							| Stromversorgung |
|Klemmleiste (IN)		| 4 Stromausgänge a 3,3 V, 4 Eingänge| Sind in Paare aufgeteilt. Edge erkennt den Zustand der Eingänge |
| Klemmleiste (OUT)		| 4 schaltbare Strom Pins (bis 24V), 1 Stromeingang | 4 schaltbare Pins können über das Edge gesteuert werden, sodass der Strom vom Stromeingang an diesen anliegt |


An diese Anschlussmöglichkeiten können Beispielsweise folgende Geräte angeschlossen werden:


### Eingänge

{% include styled_table.html %}
| Eingabegerät 		| Anschluss 		|
|-------------------|-------------------|
| Druckknopf		| Klemmleiste		|
|(Binärer) Sensor	| Klemmleiste		|
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


Über eine Visualisierung auf einer Peakboard Enterprise Box können die Informationen der Eingabegeräte an einem Peakboard Edge auf einem Bildischirm dargestellt oder in einer Datenbank gespeichert werden. Gleichzeitig ist dabei ein Verarbeiten der Informationen möglich. Ebenso können die Ausgabegeräte an einem Peakboard Edge über die Visualisierung gesteuert werden. 

Die Folgenden Schritte bieten einen Überblick, wie Peakboard Edge verwendet werden kann. Es ist dabei möglich Peakboard Edge sowohl in Verbindung mit Peakboard 1, sowie Peakboard 2 zu nutzen.