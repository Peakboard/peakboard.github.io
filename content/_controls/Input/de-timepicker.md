---
layout: article
title: Time Picker
menu_title: Time Picker
description: Information über Peakboard Designer Time Picker Control
lang: de
weight: 756
ref: con-756
redirect_from:
---

Das Time Picker-Control ist ein interaktives Control, das es ermöglicht, eine Uhrzeit bequem über einen Auswahl-Dialog festzulegen. Dies ist besonders nützlich für Anwendungen, bei denen Zeiträume definiert werden müssen (z. B. Startzeit einer Schicht, Buchungszeitpunkte oder Alarm-Einstellungen). Wichtig zur Unterscheidung: Während die DateTime-Datenquelle lediglich die aktuelle Systemzeit als schreibgeschützten Wert darstellt, dient der Time Picker der aktiven Benutzereingabe und ist somit zur Laufzeit veränderbar.
Du findest den Time Picker im Peakboard Designer in der Gruppe Interaktiv (1). Ziehe das Icon per Drag-and-drop in deinen Designer oder platziere es mit einem Doppelklick auf deine Arbeitsfläche.

![image_1](/assets/images/Controls/Timepicker/timepicker_01.png)

# Konfiguration und Eigenschaften
## 1 Datenquelle und Auswahl
Ein Time Picker wird in der Regel mit einer Startzeit initialisiert und kann dynamisch auf Eingaben reagieren. Klicke das Control doppelt an, um den Konfigurationsdialog zu öffnen:
* Daten/Wert eingeben: Lege fest, welche Uhrzeit beim Start der Visualisierung standardmäßig angezeigt werden soll. Du kannst hier eine feste Zeit wählen (z. B. 08:00) oder den Wert dynamisch an eine Datenquelle anbinden (1).
* Datenformat/Anzeigenformat: Bestimme, in welchem Format die Zeit im Eingabefeld dargestellt wird (z. B. HH:mm für Stunden und Minuten oder HH:mm:ss, wenn Sekunden ebenfalls relevant sind) (2).
* Diese Angabe kann ebenfalls in den Eigenschaften des Controls auf der rechten Seite unter „Daten“ angepasst werden (3).

![image_2](/assets/images/Controls/Timepicker/timepicker_02.png)

# Scripting
Das Time Picker-Control bietet Zugriff auf die ausgewählte Zeit, um diese für Logik-Operationen oder Datenaktualisierungen zu nutzen.

## Beispiel: Ausgewählte Zeit im Log ausgeben
In diesem Beispiel nutzen wir das "TextChanged" Event des Time Pickers, um bei jeder Änderung der Zeit eine Meldung im Log zu erzeugen.
## Schritte im Script-Editor:
1. Öffne im Designer den Script-Editor auf der rechten unteren Seite unter Logik und dem Ereignis "TextChanged".
2. Wähle den Building Block „Wert abrufen“ (value) im Bereich deines Screens unter der Bezeichnung des Controls (z. B. TimePicker_Control) und ziehe ihn in den Editor.
3. Verknüpfe diesen Wert mit dem Block „Ins Log schreiben“ aus der Kategorie Peakboard Box.
4. Speichere das Skript über Speichern und Schließen.

Starte die Vorschau und überprüfe im Log (1), ob der Rückgabewert je nach Inhalt des Controls korrekt zurückgegeben wird.

![image_4](/assets/images/Controls/Timepicker/timepicker_04.png)

In diesem Video wird nochmal verdeutlicht, wie das Skript für dieses Beispiel aufgebaut und auf erfolgreiche Funktion geprüft wird:
![image_5_gif](/assets/images/Controls/Timepicker/timepicker_05_gif.gif)
