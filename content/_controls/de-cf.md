---
layout: article
title: Bedingte Formatierung
menu_title: Bedingte Formatierung
description: Bedingte Formatierung
lang: de
weight: 101
ref: con-101
redirect_from:
---

Die bedingte Formatierung erlaubt es, unterschiedliche Eigenschaften eines Controls aufgrund eines definierten Ereignisses zu verändern, ohne dabei auf komplexe Skripte zurückzugreifen müssen.

Um für ein Control eine bedingte Formatierung festzulegen wird zunächst das gewünschte Control, hier ein Rechteck, auf die Oberfläche gezogen (1).
Unter der Rubrik Aussehen findet sich nun die Eigenschaft "Bedingte Formatierung" (2)

![img01](/assets/images/Controls/ConditionalFormatting/img01.png)

Diese besteht im Wesentlichen aus vier Elementen.
Das Textfeld zeigt an, ob und wie viele Regeln für dieses Element angelegt wurden.
Der Mülleimer erlaubt es alle Regeln zu löschen.
Mit Hilfe des Kopiersymbols können Regeln einfach kopiert und auf andere Controls angewendet werden, ohne neu definiert zu werden müssen.
Das vierte und letzte Symbol in der Zeile öffnet den Regeleditor für die bedingte Formatierung.

![img02](/assets/images/Controls/ConditionalFormatting/img02.png)

Über die Schaltfläche "New Rule" wird eine neue Regel angelegt.
Hier kann zunächst ein Name für die Regel zur einfacheren Identifikation vergeben werden (1).
Der Regeleditor selbst beruht auf einem simplen Wenn-Dann Konzept.
Im IF-Statement wird definiert, wann die Regel ausgeführt werden soll (2), während im THEN-Statement die entsprechende Aktion festgelegt wird (3).
Je nach Control-Typ können control-spezifische Eigenschaften verändert werden.
 
 {% include styled_table.html %}
| Text Control 	| Formen        |
|---------------|---------------|
| Text         	| Hintergrund	|
| Untertitel	| Randfarbe 	|
| Hintergrund  	| Randgröße 	|
| Schattentiefe | Animation 	|
| Animation  	| Breite 		|
| Breite  		| Höhe 			|
| Höhe 			| Oben 			|
| Oben  		| Links 		|
| Links  		| Sichtbar 		|
| Sichtbar  	|  			 	|


Über die Schaltfläche "Add new rule" lassen sich für das Control weitere Regeln festlegen (4).

![img03](/assets/images/Controls/ConditionalFormatting/img03.png)

Damit im IF-Statement eine Bedingung definiert werden kann, benötigt es eine Datenquelle oder Variable, welche später das THEN-Ereignis auslöst.
Hier wurde eine Variable ProdKPI1 (1) vom Typ Number angelegt, welche beispielsweise die Tagesproduktion wiederspiegelt.
Im Beispiel, soll wenn eine Tagesproduktion von 100 erreicht ist, das Rechteck grün eingefärbt werden.
Zunächst wird über die Schaltfläche AND-Condition die gewünschte Bedingung festgelegt.
Dazu wird einmal die Variable über das Verkettungssymbol ausgewählt und anschließend der für die Erfüllung der Bedingung notwendige Operator (gleich =, größer >, kleiner <, ungleich <>) festgelegt.
Im dritten Feld des IF-Statements steht die Vergleichsgröße.
Dies kann wie hier ein fest definierter Wert oder ebenfalls eine Variable oder Wert aus einer Datenquelle sein (2).

Bei Bedarf können weitere AND beziehungsweise OR Bedingungen definiert werden (3).

Im THEN-Statement wird festgelegt nun die Aktion festgelegt, welche bei Erfüllung von (2) ausgeführt werden soll.
In diesem Fall soll der Hintergrund grün eingefärbt werden (4).

Über die Schaltfläche "Add formatting" können zusätzliche Aktionen festgelegt werden, welche bei Erfüllung der Bedingung ausgeführt werden sollen.

![img04](/assets/images/Controls/ConditionalFormatting/img04.png)

In der Vorschau lässt sich das Ergebnis der bedingten Formatierung betrachten.
Die bedingte Formatierung wird erst in der Preview oder auf der Peakboard Box ausgeführt!
Auf der Zeichenfläche erfolgt keine Veränderung des Rechtecks von weiß nach grün!

![img05](/assets/images/Controls/ConditionalFormatting/img05.png)
