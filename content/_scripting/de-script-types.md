---
layout: article
title: Die Peakboard-Skript-Typen
menu_title: Die Peakboard-Skript-Typen
description: Informatinon über die Peakboard-Skript-Typen
lang: de
weight: 103
ref: scr-103
redirect_from:
---

Nachfolgende Übersicht beschreibt die mit Peakboard verfügbaren Arten von Skripten.

## Timer
Timer-Skripte kommen immer dann zum Einsatz, wenn eine Aktion in einem gleichbleibenden Rhythmus oder einmalig durchgeführt werden soll.

## Golbale Funktion
Hier lassen sich Funktionen definieren, welche durch unterschiedliche Methoden mehrfach aufgerufen werden sollen.

## Globale Events
Wie auch die globalen Funktionen können globale Events jederzeit durch unterschiedliche Methoden aufgerufen werden.

Hierunter fallen klassische Eingaben über externe Eingabegeräte wie beispielsweise Touchscreen-Monitor, Tastatur, Maus oder [Presenter](/misc/de-presenter.html).

* Swipen
Die Eingabe erfolgt hierbei in der Regel über einen Touchscreen-Monitor. Alternativ kann der Wisch-Effekt auch über eine Maus erzeugt werden.

* Taste gedrückt
Dieses Skript wird immer dann ausgeführt wenn eine Taste an einem Eingabegerät gedrückt wird. Unser [Beispiel zum Wechseln von Screens mit Hilfe eines handelsüblichen Presenters](/misc/de-presenter.html) illustriert sehr deutlich, wie diese Art Skript angewendet wird.

* Tasteneingabe 
* Skriptfehler 
* Aktualisierung der Datenquelle fehlgeschlagen

## Bei Bildschirmaktivierung
Wie der Name schon vermuten lässt wird ein hier definiertes Skript immer genau dann ausgeführt, wenn der entsprechende Bildschirm das erste Mal geladen wird.

## Bei Datenaktualisierung
Dieses Skript wird immer dann ausgeführt, wenn für die Datenquelle neue Daten geladen wurden. 

Ein solches Skript lässt sich anlegen, indem entweder unter Skripte - Bei Datenaktualisierung über Hinzufügen für die entsprechende Datenquelle oder über Rechtsklick auf die Datenquelle ein Aktualisierungsskript hinzugefügt wird.

## Für Controls
Hier finden sich alle Skripte, welche über die Events-Funktion eines Controls erstellt wurden.

Diese Events sind bestimmte Aktionen die mit Hilfe eines Controls ausgelöst werden können.

Nachfolgende Liste enthält alle mit Peakboard möglichen Events sowie die dazugehörigen Controls.

* Tapped (Text, Bild, Rechteck, Excel-Diagramm, Textfeld, Button, Repeat-Button)
Dieses Event wird ausgeführt, wenn das entsprechende Control über Touch, Maus oder ähnliche Eingabe aktiviert wird.

* DataRowLoaded (Tabellenraster)
Dieses Event wird immer dann ausgeführt, wenn eine neue Zeile einer Tabelle geladen wird.

* CellTapped (Tabellenraster)
Dieses Event wird dann ausgeführt, wenn innerhalb der Tabelle eine Zelle über Touch, Maus oder ähnliche Eingabe aktiviert wird.

* TileChanged (Live Tile Box)
* RightTapped (Bild)
* DoubleTapped (Bild)
* TextChanged (Textfeld)
* Checked (Toggle Button, Check Box, Radio Button)
* Unchecked (Toggle Button, Check Box, Radio Button)
* Toggled (Kippschalter)
* SelectionChanged (Dropdown-Liste)
* ValueChanged (Slider)