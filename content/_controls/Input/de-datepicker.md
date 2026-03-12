---
layout: article
title: Date Picker
menu_title: Date Picker
description: Information über Peakboard Designer Date Picker Control
lang: de
weight: 754
ref: con-754
redirect_from:
---

Das Date Picker-Control ist ein interaktives Eingabeelement, das es ermöglicht, ein Datum bequem über einen Kalender-Dialog auszuwählen. Dies ist besonders nützlich für Anwendungen, bei denen Daten gefiltert werden müssen (z. B. Schichtberichte oder Logistikdaten) oder bei denen Zeitstempel für manuelle Buchungen gesetzt werden sollen.
Du findest den Date Picker im Peakboard Designer in der Gruppe Interaktiv (1). Ziehe das Icon per Drag-and-drop in deinen Designer oder platziere es mit einem Doppelklick auf deine Arbeitsfläche.

![image_1](/assets/images/Controls/Datepicker/datepicker_01.png)

# Konfiguration und Eigenschaften
## 1 Datenquelle und Auswahl
Ein Date Picker benötigt in der Regel einen vordefinierten Startwert und kann optional in seinem wählbaren Bereich eingeschränkt werden. Klicke das Control doppelt an, um den Konfigurationsdialog zu öffnen:
* Daten/Wert eingeben: Lege fest, welches Datum beim Start der Visualisierung standardmäßig angezeigt werden soll. Du kannst hier ein festes Datum wählen (z. B. das aktuelle Tagesdatum) oder den Wert dynamisch  an eine Datenquelle anbinden (1).
* Minimales/Maximales Datum: Begrenze den Zeitraum, den der Anwender auswählen kann, um Fehleingaben zu vermeiden (z. B. nur Daten in der Vergangenheit oder nur im aktuellen Jahr). Gebe dazu das Mindest-, also das früheste, und das Maximaldatum, also das späteste Datum an (2).
* Datenformat/Anzeigenformat: Bestimme, in welchem Format das Datum im Eingabefeld dargestellt wird (z. B. ddMMyyyy für Deutschland oder MMddyyyy für den internationalen Gebrauch) (3).
* Diese Angabe kann ebenfalls in den Eigenschaften des Controls auf der rechten Seite angegeben werden (4).

![image_2](/assets/images/Controls/Datepicker/datepicker_02.png)

## 2 Aussehen und Steuerung
In den Eigenschaften auf der rechten Seite kannst du das Verhalten und die optische Darstellung präzise steuern:
1. Control-Positionierung (Allgemeines): Lege die Ausrichtung des Elements auf der Arbeitsfläche fest. Mit den ersten acht Symbolen kann das Control schnell an Ecken oder Seitenmitten platziert werden, während das neunte Symbol die gesamte verfügbare Fläche füllt. Das letzte Icon zentriert das Element mittig, wobei die Größe vorab über die manuellen Eingabefelder definiert werden kann (1).
2. Abstand (Allgemeines): Über die Felder Breite, Höhe, Links und Oben kannst du das Eingabefeld präzise positionieren. Darunter definierst du einen inneren Abstand (Padding) für den Text innerhalb des Rahmens (2).
3. Schriftart (Aussehen): Passe die Schriftgröße und Farbe des Datums an, um eine optimale Lesbarkeit auf dem Display zu gewährleisten (3).
4. In Skripten verwenden (Logik): Gib dem Control einen eindeutigen Namen (z. B. DatePicker_Control), um das ausgewählte Datum später per Skript abzurufen (4, 4b).
5. Bedingte Formatierung (Logik): Nutze die bedingte Formatierung, um beispielsweise die Hintergrundfarbe des Controls zu ändern, wenn ein kritisches Datum überschritten wurde (5)

![image_3](/assets/images/Controls/Datepicker/datepicker_03.png)

# Scripting
Das Date Picker-Control bietet Zugriff auf das ausgewählte Datum, um dieses für Berechnungen oder Änderungen zu nutzen.

## Beispiel: Ausgewähltes Datum im Log speichern
In diesem Beispiel nutzen wir das "Textänderung"-Tapped Event des Date Pickers, um bei jeder neuen Auswahl ein Label oder eine Datenquelle zu aktualisieren.
### Schritte im Script-Editor:
1. Öffne im Designer den Script-Editor auf der rechten unteren Seite unter "Logik" und "Textänderung". 
2. Wähle den Blockcode "Wert abrufen" im Bereich des Screens und unter der Bezeichnung, die du dem Control vergeben wurde (hier "DatePicker_Control" und setze ihn auf die Skripteditor-Fläche.
3. Verknüpfe diesen Wert mit einem anderen Control (z. B. einem Textfeld) oder schreibe ihn in das Log. Wähle dazu unter der Kategorie "Peakboard Box" den Blockcode "Ins Log schreiben", ziehe diesen auf die Arbeitsfläche, lösche den voreingestellten Inhalt und verknüpfe die beiden Blöcke.
4. Speichere das Skript unter "Speichern und Schließen" ab.

![image_4](/assets/images/Controls/Datepicker/datepicker_04.png)

Starte die Vorschau und überprüfe im **Log** (1), ob der Rückgabewert je nach Inhalt des Controls korrekt zurückgegeben wird. Dieser wird im Numberformat angegeben.

![image_5](/assets/images/Controls/Datepicker/datepicker_05.png)

In diesem Video wird nochmal verdeutlicht, wie das Skript für dieses Beispiel aufgebaut und auf erfolgreiche Funktion geprüft wird:

![image_6](/assets/images/Controls/Datepicker/datepicker_06_gif.gif)
