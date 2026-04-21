---
layout: article
title: Styled Tile
menu_title: Styled Tile
description: Styled Tile
lang: de
weight: 250
ref: con-250
redirect_from:
  - /controls/14-de-tilecontrol.html
  - /controls/de-tilecontrol.html
---

Das Styled Tile dient dazu, einen spezifischen Datensatz (eine Zeile) aus einer Datenquelle visuell aufzubereiten. Hierzu verbindest du das Control mit einer Datenquelle sowie einer Zeilennummer (Index) und erstellst anschließend ein individuelles Template. Die Inhalte dieser Zeile können so gezielt angezeigt oder verarbeitet werden. Im Gegensatz zur [Styled Tile Collection](/controls/11-de-tile-view.html) wird jeweils nur eine Zeile der Datenquelle angezeigt. Das Styled Tile eignet sich besonders dazu, dasselbe Template mit verschiedenen Zeilen zu verknüpfen, um überall ein identisches Erscheinungsbild sicherzustellen.
Du findest das Styled Tile im Peakboard Designer in der Gruppe Lists & Tiles (1).

![image_1](/assets/images/Controls/Tile/tile_01.png)

# Konfiguration und Eigenschaften
## 1 Allgemein und Datenanbindung
Das Styled Tile Control benötigt eine Datenquelle, einen Dataflow, oder eine Variablenliste, um ihre Inhalte anzuzeigen. Füge dazu eine Datenquelle im Designer Explorer auf der linken Seite ein, hier zum Beispiel eine Excelliste mit Namen.

![image_2](/assets/images/Controls/Table-Grid/tablegrid_02.png)

Ziehe das Control per Drag-and-drop oder platziere es mit einem Doppelklick auf deine Arbeitsfläche. Anschließend kann die Datenquelle, die du bereits in den Designer Explorer unter „Daten“ eingefügt hast, mit dem Control verknüpft werden(1).

![image_3](/assets/images/Controls/Tile/tile_02.png)

* Unter "Daten" in den Eigenschaften auf der rechten Seite kann neben der separaten Datenanbindung (1a) die anzuzeigende Zeile über den Datenquellenindex gewählt werden (1b).
* Über das Template kann die Ansicht der jeweiligen Zeile der Datenquelle bearbeitet werden (2).

![image_4](/assets/images/Controls/Tile/tile_03.png)

Der Editor für das Template ähnelt den Funktionen auf der Hauptseite, beschränkt sich dabei aber auf die Arbeitsfläche des Controls. Wie aus den Funktionen der Hauptseite bekannt, kannst du jetzt aus der oberen Menüleiste verschiedene Controls zum Template hinzufügen und diese mit den Spalten der gewählten Datenquelle verknüpfen. Bestätige dann die Erstellung des Templates mit "Ok" (1).

![image_6](/assets/images/Controls/Tile/tile_05.png)

## Bedingte Templates
Mit dem Styled Tile Control ist es möglich, analog zur bedingten Formatierung, anhand von definierten Regeln separate Templates zur Darstellung der Zeilen zu nutzen. Klicke auf das […]-Symbol (1) im Abschnitt "Bedingte Templates", um den Dialog für die bedingten Templates zu öffnen.
Hier kannst du neue Templates hinzufügen (2). Diese übernehmen automatisch das Standard Template. Du kannst die hinzugefügten Templates umbenennen (3), bearbeiten (4), deren Reihenfolge ändern (5), Regeln für die Anzeige definieren (6) oder die Templates wieder löschen (7).

![image_7](/assets/images/Controls/Tile/tile_06_2.png)
