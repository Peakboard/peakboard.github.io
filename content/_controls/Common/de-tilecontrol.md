---
layout: article
title: Tile-Control
menu_title: Tile-Control
description: Tile-Control
lang: de
weight: 250
ref: con-250
redirect_from:
  - /controls/14-de-tilecontrol.html
  - /controls/de-tilecontrol.html
---

Das Tile-Control ist eine einfache Möglichkeit, zeilenbasierte Daten einer Tabelle auf repetitive Weise darzustellen.
Beim Betrachten der nachfolgenden Tabelle wird deutlich, dass jeder Produktionslinie eine Zeile zugewiesen ist.

![Tabelle Produktionslinie](/assets/images/Controls/Tile/table.png)

Jede dieser Produktionslinien soll mit Hilfe des Tile-Controls eine eigene Kachel in einem Dashboard bekommen. Zunächst wurde die Tabelle als Excel Datenquelle, wie [hier](/data_sources/13-de-excel.html) beschrieben, hinzugefügt.
Daraufhin wird, wie im Screenshot dargestellt, das Tile-Control per Drag&Drop auf die Oberfläche gezogen (1). 
Damit das Tile identifizierbar ist wird zunächst ein Name, beispielsweise Tile1 vergeben (2) und anschließend wird über die drei Punkte bei Datenquelle die Excel Datenquelle verknüpft (3).
Unter Layout können die Abmessungen pixelgenau angegeben werden (4). 
Über die Eigenschaft Datenquellenindex kann definiert werden, mit welcher Zeile der Datenquelle das Tile verknüpft werden soll.
Die erste Zeile wird dabei mit dem Index 0 referenziert.
Über die drei Punkte neben Datenvorlage wird der Vorlagen-Editor erreicht (5). 

![tile image1](/assets/images/Controls/Tile/tile1.png)

Dieser ähnelt dem Aufbau des Designers und beschränkt die Zeichenoberfläche auf die unter (4) eingestellte Größe.
Wie aus dem Designer bekannt werden Controls wie Text oder Linear Gauge per Drag&Drop auf die Oberfläche gezogen und über die drei bekannten Punkte mit der jeweiligen Spalte der verknüpften Excel-Datenquelle verbunden.
Da das Control fest mit einer Datenquelle verkettet ist und jedes Tile genau eine Datenzeile widerspiegelt, kann beim Verknüpfen der Daten mit einem Control nur noch die Spalte der verketteten Datenquelle gewählt werden.


![tile image2](/assets/images/Controls/Tile/tile2.png)

Über Ok wird der Vorlagen-Editor verlassen und das entsprechende Template angelegt. 
Anschließend kann es für jede der 5 Produktionslinien kopiert werden und der Datenquellindex auf die entsprechende Zeile (ausgehend von 0) gesetzt werden. 
Wie nachfolgendem Screenshot entnommen werden kann, wurden zusätzlich zu den vorangegangenen Schritten weitere Änderungen, wie zusätzliche Diagramme, Rahmen und Schatten dem initialen Tile-Control hinzugefügt.
Diese können über das mittlere Symbol mit dem + Zeichen auf die zuvor kopierten Tile-Controls übertragen werden.
In dem entsprechenden Dialog werden alle Tile-Controls selektiert auf die die Änderungen übertragen werden sollen.

![tile image3](/assets/images/Controls/Tile/tile3.png)

Mit OK wird der Dialog beendet und der Kopierprozess ausgeführt. 
Die Änderungen werden automatisch auf die anderen Tile-Controls übertragen sowie die Zeilen- und Datenverknüpfungen entsprechend aktualisiert.

![tile image4](/assets/images/Controls/Tile/tile4.png)