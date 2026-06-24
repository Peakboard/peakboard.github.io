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

In der Kategorie **Tabellen vereinen** des Auswahldialogs für Dataflow-Schritte findest du die Schritte, mit denen du eine Tabelle mit einer weiteren kombinierst: per Join Spalten aus einer anderen Tabelle hinzufügen oder per Union Zeilen aneinanderhängen. Wie du grundsätzlich einen Dataflow anlegst und Schritte hinzufügst, erfährst du in den [ersten Schritten mit Dataflows](/dataflows/de-erste-schritte.html).

## Join

Mit diesem Schritt fügst du der Tabelle Spalten aus einer weiteren Tabelle hinzu, vorausgesetzt diese verfügen über mindestens eine sich überschneidende Spalte. Wähle im Feld [Join data source] (1) die hinzuzufügende Tabelle und im Feld [Join type] (2) den passenden Join-Typ. Unter [Join columns] (3) legst du fest, über welche Spalten die beiden Tabellen verknüpft werden. Optional kannst du mit [Select columns from joined data source] (4) gezielt einzelne Spalten der hinzugefügten Tabelle übernehmen.

![Join](/assets/images/dataflows/unite-tables/unite-tables-01-join.png)

Für unterschiedliche Anwendungsfälle stehen verschiedene Join-Typen zur Auswahl.

### Inner Join

Das Ergebnis eines Inner Joins enthält genau die Zeilen, bei denen es eine Entsprechung in beiden Tabellen gibt. Wenn es in der linken oder rechten Tabelle Zeilen gibt, die keine Entsprechung in der jeweils anderen Tabelle haben, gehen diese Zeilen dabei verloren.

![Inner join](/assets/images/dataflows/dataflows_inner-join.png)

### Full Join

Beim Full Join gehen keine Zeilen verloren. Wenn es in der linken oder rechten Tabelle Zeilen ohne Entsprechung gibt, werden diese Zeilen im Ergebnis leer angeführt.

![Full join](/assets/images/dataflows/dataflows_full-join.png)

### Left Join

Beim Left Join bleiben die Zeilen der linken Tabelle vollständig erhalten. Die Zeilen der rechten Tabelle finden nur dann ihren Weg in das Ergebnis, wenn sie eine Entsprechung auf der linken Seite haben.

![Left join](/assets/images/dataflows/dataflows_left-join.png)

### Right Join

Beim Right Join bleiben die Zeilen der rechten Tabelle vollständig erhalten. Die Zeilen der linken Tabelle finden nur dann ihren Weg in das Ergebnis, wenn sie eine Entsprechung auf der rechten Seite haben.

![Right join](/assets/images/dataflows/dataflows_right-join.png)

<div class="box-tip" markdown="1">
**Hinweis**

Du kannst übrigens nicht nur Datenquellen, sondern natürlich auch andere Dataflows auf diese Weise miteinander verbinden.
</div>

## Vereinen

Mit diesem Schritt hängst du der Tabelle Zeilen aus einer weiteren Tabelle an, vorausgesetzt diese verfügt über die gleiche Anzahl an Spalten mit dem gleichen Spaltennamen und Datentyp. Wähle dazu im Feld [Other list] (1) die anzuhängende Tabelle.

Im Unterschied zum Join-Schritt werden die Daten hintereinander und nicht aneinander angehängt. Alle Spalten der anzuhängenden Tabelle, bei denen Name und Datentyp übereinstimmen, werden an die entsprechende Spalte der Originaltabelle angefügt. Gibt es keine Entsprechung des Spaltennamens oder stimmt der Datentyp nicht überein, wird die Spalte ignoriert. Für den Fall, dass die Spaltennamen oder Datentypen nicht zueinanderpassen, musst du sie zunächst durch Umbenennen oder Umformatieren passend machen.

![Vereinen](/assets/images/dataflows/unite-tables/unite-tables-02-union.png)
