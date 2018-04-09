---
layout: article
title: Scripte in dynamischen Eigenschaften
menu_title: Scripte in dynamischen Eigenschaften
description: Scripte in dynamischen Eigenschaften
lang: de
ref: scr-02
---
Manche Eigenschaften haben im Eigenschaftsgrid (unten rechts im Designer) oder in den Textfeldern in den Detaildialogen einen kleinen Knopf mit einem C drauf. Dieser Knopf öffnet einen Script-Editor. Das Script, das dort abläuft, ist eine Funktion, die den Wert der jeweiligen Eigenschaft zurückgibt. Um bei dem Beispiel zu bleiben, das die Anzahl der Zeilen ermittelt, wird in diesem Script erst die Anzahl der Datensätze ermittelt und in einer lokalen Variable gespeichert, die dann per return zurückgegeben wird.

![image_1](/assets/images/scripting/dynamic/dynamic01.png)

Daraus ergibt sich dasselbe Verhalten wie das Script direkt an die Datenquelle zu binden. Allerdings ist die Ausführung des Scripts nicht an den Refresh der Datenquelle gebunden. Scripte für dynamische Eigenschaften werden periodisch aufgerufen. Und zwar immer bei der Aktivierung des Screens. Also entweder wenn ein Screen bei einem Screenwechsel erscheint, oder – bei einem Board, das aus nur einem Screen besteht – nach Ablauf der Duration in Sekunden. Die Duration kann als Eigenschaft eines jeden Screen gesetzt werden. Der Screenshot zeigt hier den Default-Wert 10. Das Zählen der Datensätze würde so also alle 10 Sekunden stattfinden, unabhängig davon, ob sich die Datenquelle aktualisiert hat.

![image_1](/assets/images/scripting/dynamic/dynamic02.png)
