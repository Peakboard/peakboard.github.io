---
layout: article
title: Tabellen vereinen
menu_title: Tabellen vereinen
description: Tabellen vereinen
lang: de
weight: 4000
ref: flow-4000
redirect_from:
  - /dataflows/40-de-daten-joinen.html
  - /dataflows/de-daten-joinen.html
  - /dataflows/70-de-Daten-hintereinander-haengen.html
  - /dataflows/de-Daten-hintereinander-haengen.html
---
## Join

Mit diesem Schritt fügst du der Tabelle Spalten aus einer weiteren Tabelle hinzu, vorausgesetzt diese verfügen über mindestens eine sich überschneidende Spalte.

![Join](/assets/images/dataflows/dataflows_join.gif)

Für unterschiedliche Anwendungsfälle stehen verschiedene Join Typen zur Auswahl.

### Inner Join

Das Ergebnis eines Inner Joins enthält genau die Zeilen, bei denen es eine Entsprechung in beiden Tabellen gibt.
Wenn es in der linken oder rechten Tabelle Zeilen gibt, die keine Entsprechung in der jeweils anderen Tabelle haben, gehen diese Zeilen dabei verloren.

![Inner join](/assets/images/dataflows/dataflows_inner-join.png)

### Full Join

Beim Full Join gehen keine Zeilen verloren.
Wenn es in der linken oder rechten Tabelle Zeilen ohne Entsprechung gibt, werden diese Zeilen im Ergebnis leer angeführt.

![Full join](/assets/images/dataflows/dataflows_full-join.png)

### Left Join

Beim Left Join bleiben die Zeilen der linken Tabelle vollständig erhalten.
Die Zeilen der rechten Tabelle finden nur dann ihren Weg in das Ergebnis, wenn sie eine Entsprechung auf der linken Seite haben.

![Left join](/assets/images/dataflows/dataflows_left-join.png)

### Right Join

Beim Right Join bleiben die Zeilen der rechten Tabelle vollständig erhalten.
Die Zeilen der linken Tabelle finden nur dann ihren Weg in das Ergebnis, wenn sie eine Entsprechung auf der rechten Seite haben.

![Right join](/assets/images/dataflows/dataflows_right-join.png)

<div class="box-tip" markdown="1">
**Hinweis**

Du kannst übrigens nicht nur Datenquellen, sondern natürlich auch andere Dataflows auf diese Weise miteinander verbinden.
</div>

## Vereinen

Mit diesem Schritt hängst du der Tabelle Zeilen aus einer weiteren Tabelle an, vorausgesetzt diese verfügt über die gleiche Anzahl an Spalten mit dem gleichen Spaltennamen und Datentyp.

Im Unterschied zum Join Schritt werden die Daten hintereinander und nicht aneinander angehängt. Du musst nur die anzuhängende Tabelle auswählen, dann werden alle Spalten der anzuhängenden Tabelle, bei denen der Name und der Datentyp übereinstimmen an die entsprechende Spalte der Originaltabelle angefügt. Gibt es keine Entsprechung des Spaltennamens oder stimmt der Datentyp nicht überein, wird die Spalte ignoriert. Für den Fall, dass die Spaltennamen oder Datentypen nicht zueinanderpassen, musst du sie zunächst durch Umbenennen oder Umformatieren passend machen.

![Vereinen](/assets/images/dataflows/dataflows_union.gif)

## Lookup-Spalte hinzufügen

Mit diesem Schritt fügst du der Tabelle eine Spalte aus einer weiteren Tabelle hinzu.

Du definierst eine Quellspalte, die als Basis für den Lookup dienen soll, sowie die Lookup-Datenquelle aus der die Daten entnommen werden sollen. Mit der Lookup-Zielspalte gibst du an, mit welcher Spalte aus der Lookup-Datenquelle abgeglichen wird und mit der Lookup-Rückgabespalte, welche Spalte übertragen werden soll.

Die neue Spalte bleibt leer, wenn für einen Eintrag in der Quellspalte keine Entsprechung in der Lookup-Zielspalte gefunden werden kann. So lässt sich die Anforderung realisieren Daten zu finden, die gerade KEINE Entsprechung in einer anderen Datenquelle haben. In diesem Anwendungsfall kannst du dann alle Zeilen filtern, die in der ergänzenden Spalte leer sind.

![Lookup-Spalte](/assets/images/dataflows/dataflows_lookup.gif)
