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

### Verbindungsprobleme (PB Box ↔︎ PB Edge)

#### Hat die Verbindung bereits funktioniert und ist ohne weiters abgebrochen?
Ein Neustart des PB Edge, sowie der PB Box können helfen.

#### Konnte noch keine Verbindung zwischen PB Box und PB Edge hergestellt werden oder der Neustart beider Geräte hat nicht geholfen? 
Überprüfen ob beide Geräte (PB Box und PB Edge) mit dem selben Netzwerk verbunden sind. Dazu kann am besten ein Netzwerkadministrator helfen. Falls keiner verfügbar ist, kann alternativ auch getestet werden, ob eine Verbindung zwischen dem Designer und der PB Box, sowie dem Designer und dem PB Edge möglich ist. Sollte dies nicht der Fall sein kann das Problem auf die fehlerhafte Verbindung eingegränzt werden.


### Verbindungsprobleme (Verbindungstester / Preview ↔︎ PB Edge)
Falls die Verbindung Preview ↔︎ PB Edge fehlschlägt, den Verbindungstester im Designer nutzen.

Falls die Verbindung Verbindungstester ↔︎ PB Edge fehlschlägt:

* Edge ID notieren
* Über die Tastenkombination “Win + R” den Windows “Ausführen” Dialog öffnen
* “cmd” eingeben und Enter drücken um ein Kommandozeilenfenster zu öffnen
* in der Kommandozeile den Befehl “ping <Edge ID>” eingeben, wobei <Edge ID> durch die vorher notierte Edge ID erstezt wird
Sollte die Verbindung möglich sein (Der ping wird beantwortet), bitte an den Peakboard Support wenden. 

Sollte die Verbindung nicht möglich sein, befindet sich das Peakboard Edge entweder in einem anderen Netzwerk oder es wird durch interne Netzwerkregeln blockiert. In letzterem Fall kann nur ein IT-Administrator des Unternehmens helfen.