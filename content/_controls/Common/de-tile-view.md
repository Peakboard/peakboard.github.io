---
layout: article
title: Styled Tile
menu_title: Styled Tile
description: Styled Tile
lang: de
weight: 260
ref: con-260
redirect_from:
  - /controls/11-de-tile-view.html
  - /controls/de-tile-view.html
---

Das Styled Tile Collection Control dient dazu, Datensätze aus einer Datenquelle visuell als Kacheln aufzubereiten. Hierzu verbindest du das Control mit einer Datenquelle und erstellst anschließend ein individuelles Template, das mit den bereitgestellten Daten automatisch erweitert wird. Im Gegensatz zum Styled Tile wird nicht nur eine einzelne Zeile, sondern eine Auswahl an Datensätzen visualisiert. Das Styled Tile Collection eignet sich besonders für Dashboards, auf denen Informationen wie bestimmte Statuswerte, Namen oder Kennzahlen aus einer Excelliste in einem individuell gestalteten Layout dargestellt werden sollen.
Du findest das Styled Tile Collection ind der Controls-Menüleiste des Peakboard Designer in der Gruppe Lists & Tiles (1).

![image_1](/assets/images/Controls/TileView/tileview_01.png)

# Konfiguration und Eigenschaften
## 1 Allgemein und Datenanbindung
Das Styled Tile Collection Control nutzt Daten aus einer Datenquelle, einem Dataflow oder einer Variablenliste, um diese visuell darzustellen. Füge dazu eine Datenquelle im Designer Explorer auf der linken Seite ein, beispielsweise eine Excelliste (1).

![image_2](/assets/images/Controls/Table-Grid/tablegrid_02.png)

Ziehe das Control per Drag-and-drop oder platziere es mit einem Doppelklick auf deine Arbeitsfläche. Anschließend kann die Datenquelle, die du bereits im Designer Explorer unter „Daten“ angelegt hast, mit dem Control verknüpft werden (1).
Alternativ kann die angelegte Datenquelle auch per Drag-and-drop auf die Arbeitsfläche gezogen und das Control gewählt werden.

![image_3](/assets/images/Controls/TileView/tileview_03.png)

## 1.1 Templates
1. Unter "Daten" in den Eigenschaften auf der rechten Seite kann die Datenanbindung ebenfalls separat erfolgen (1). Sobald die Datenquelle verknüpft ist, generiert das Control für die vorhandenen Datensätze jeweils eine eigene Kachel.
2. Über das Template kann die visuelle Ansicht der Kacheln definiert und bearbeitet werden (2).
3. Die Funktion "Bedingte Templates" wird weiter unten näher beschrieben (3).
4. Soll die Liste interaktiv bewegt werden, kann das Kästchen "Scrollbar" aktiviert werden, um in der Liste zu scrollen.
5. Wird eine Variablenliste verwendet, können die Kacheln innerhalb derselben Collection ("Innerhalb der Styled List") oder mit den Kacheln anderer Collections ("Mit anderen Styled Lists") verschoben werden (4). Standardmäßig ist diese Funktion deaktiviert.

![image_4](/assets/images/Controls/TileView/tileview_04.png)

Der Editor für das Template ähnelt den Funktionen auf der Hauptseite, beschränkt sich dabei aber auf die Arbeitsfläche einer einzelnen Kachel innerhalb der Collection. Wie aus den Funktionen der Hauptseite bekannt, können aus der oberen Menüleiste verschiedene Controls (Text, Bilder, Buttons) zum Template hinzugefügt werden (1). Unter "Daten" im Template kann die Spalte der Quelle und das anzuzeigende Format der Datensätze bestimmt werden (2). Das hier definierte Design wird automatisch auf das gesamte Tile-Control angewendet. Bestätige die Erstellung des Templates abschließend mit „Ok“ (3).

![image_5](/assets/images/Controls/TileView/tileview_05.png)

### Bedingte Templates
Mit dem Styled Tile Collection Control ist es möglich, analog zur bedingten Formatierung, anhand von definierten Regeln separate Templates zur Darstellung der Collection zu nutzen. Klicke auf das […]-Symbol (1) im Abschnitt "Bedingte Templates", um den Dialog für die bedingten Templates zu öffnen.
Hier kannst du neue Templates hinzufügen (2). Diese übernehmen automatisch das Standard Template. Du kannst die hinzugefügten Templates umbenennen (3), bearbeiten (4), deren Reihenfolge ändern (5), Regeln für die Anzeige definieren (6) oder die Templates wieder löschen (7).

![image_7](/assets/images/Controls/Tile/tile_06_2.png)

Sollten die Daten nicht als umbrechende Kacheln, sondern strikt zeilenweise untereinander dargestellt werden, verwende stattdessen das "Styled List" - Control.
