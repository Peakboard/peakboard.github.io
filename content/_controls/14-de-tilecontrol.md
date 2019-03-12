---
layout: article
title: Tile-Control
menu_title: Tile-Control
description: Tile-Control
lang: de
ref: con-14
---

Das Tile-Control ist eine einfache Möglichkeit, zeilenbasierte Daten einer Tabelle auf repetitive Weise darzustellen. 
Beim Betrachten der nachfolgenden Tabelle wird deutlich, dass jeder Produktionslinie eine Zeile zugewiesen ist.

[!Tabelle_Produktionslinie](/assets/images/Controls/Tile/table.png)

Jede dieser Produktionslinien soll mit Hilfe des Tile-Controls eine eigene Kachel in einem Dashboard bekommen. Zunächst wurde die Tabelle als Excel Datenquelle, wie [hier](/data_sources/13-de-excel.html) beschrieben, hinzugefügt.
Daraufhin wird, wie im Screenshot dargestellt, das Tile-Control per Drag&Drop auf die Oberfläche gezogen (1). Damit das Tile identifizierbar ist wird zunächst ein Name, beispielsweise Tile1 vergeben (2) anschließend wird über die drei Punkte bei Datenquelle, die Excel Datenquelle verknüpft (3). Unter Layout können die Abmessungen pixelgenau angegeben werden (4). 
Über die drei Punkte neben Datenvorlage erreicht wird der Vorlagen-Editor erreicht (5). 

[!tile_image1](/assets/images/Controls/Tile/tile1.png)

Dieser ähnelt dem Aufbau des Designers und beschränkt die Zeichenoberfläche auf die unter (4) eingestellte Größe. Wie aus dem Designer bekannt werden Controls wie Text oder Linear Gauge per Drag&Drop auf die Oberfläche gezogen und über die drei bekannten Punkte mit der jeweiligen Spalte der verknüpften Excel-Datenquelle verbunden.

[!tile_image2](/assets/images/Controls/Tile/tile2.png)

Über Ok wird der Vorlagen-Editor verlassen und das entsprechende Template angelegt. 
Anschließend kann es für jede der 5 Produktionslinien kopiert werden und der Datenquellindex auf die entsprechende Zeile (ausgehend von 0) gesetzt werden.
Wie nachfolgenden Screenshot entnommen werden kann, wurden zusätzlich zu den vorangegangen Schritten weitere Änderungen, wie zusätzche Diagramme, Rahmen und Schatten dem initialen Tile-Control hinzugefügt.
Diese können über mittlere Symbol mit dem + Zeichen auf die zuvor kopierten Tile-Controls übertragen werden.
In dem entsprechenden Dialog werden alle Tile-Controls selektiert auf die die Änderungen übertragen werden sollen.

[!tile_image3](/assets/images/Controls/Tile/tile3.png)

Mit OK wird der Dialog beendet und der Kopierprozess ausgeführt. Die Änderungen werden automatisch auf die anderen Tile-Controls übertragen sowie die Zeilen- und Datenverknüpfungen entsprechend aktualisiert.

[!tile_image4](/assets/images/Controls/Tile/tile4.png)