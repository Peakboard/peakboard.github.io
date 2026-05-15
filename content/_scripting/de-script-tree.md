---
layout: article
title: Skript-Baum
menu_title: Skript-Baum
description: Informationen über den Peakboard-Skript-Baum im Skript-Editor
lang: de
weight: 900
ref: scr-900
redirect_from:
---

Der Skript-Baum soll das Arbeiten mit Skripten erleichtern. Er befindet sich auf der rechten Seite des Skript-Editors und enthält bereits vordefinierte Funktionen und Code-Blöcke. Per Doppelklick – oder indem du den Eintrag in den Editor ziehst – wird er an der Stelle des Cursors eingefügt.

![Der Skript-Baum im Skript-Editor](/assets/images/scripting/tree/tree01.png)

Ein paar Dinge helfen dir bei der Orientierung:

* **Script Mode / Block Mode** – der Umschalter oben wechselt den Editor zwischen dem klassischen Lua-[Script Mode] und dem visuellen [Block Mode]. Der Skript-Baum passt sich dem gewählten Modus an; dieser Artikel beschreibt die Einträge so, wie sie im Script Mode erscheinen. Zum visuellen Editor siehe [Building Blocks](/scripting/de-building-blocks.html).
* **Search for block (Strg + B)** – das Suchfeld über dem Baum filtert alle Einträge nach Namen.
* **Datentyp-Anzeige** – die farbigen Punkte neben einem Eintrag zeigen dessen Datentyp (String, Number, Boolean, Color, Lua date), sodass du sofort siehst, was eine Funktion zurückgibt.

Der Baum ist in vier oberste Bereiche gegliedert: **DATA**, **CONTROLS**, **FUNCTIONS** und **BASICS**.

## DATA

Alles, was deine Anwendung mit Daten versorgt.

### Timer

Nur in einem Timer-Skript verfügbar. Enthält Einträge, die sich auf das aktuelle Ereignis beziehen, zum Beispiel „Get name" und „Get current run count".

### Data

Hier findest du jede im Explorer angelegte Datenquelle mit den jeweils charakteristischen Funktionen – zum Beispiel „Get value", „Find value", „Data aggregation" (etwa „Count" oder „Count distinct"), „Is enabled", „Iterate over rows", „Reload" und „Reload and await".

Eine Zeitdatenquelle bietet zusätzlich Funktionen, um mit Datum und Uhrzeit zu arbeiten – analog zur Format-Funktion eines Controls, wie [hier](/data_sources/de-datum-und-uhrzeit.html) beschrieben.

## CONTROLS

Hier findest du den Screen sowie alle darauf platzierten Controls, die einen Control-Namen erhalten haben, zusammen mit den für das jeweilige Control charakteristischen Funktionen (z.B. einen Text oder Wert setzen oder die Sichtbarkeit steuern). Controls ohne Namen werden nicht gelistet – vergib zuvor in den Eigenschaften einen Namen.

## FUNCTIONS

Aktionen, die über das aktuelle Skript hinausreichen.

* **Publish to external system** – Daten in angebundene Systeme zurückschreiben (z.B. per HTTP, MQTT, OPC UA, Mail, SharePoint …).
* **Peakboard Box** – Funktionen, die die Peakboard Box ansprechen, auf der die Anwendung läuft.
* **Application** – Funktionen, die die laufende Anwendung selbst steuern, etwa das Wechseln von Screens.

## BASICS

Die allgemeinen Bausteine jedes Skripts, unabhängig von Datenquellen oder Controls.

* **Logic & Loops** – Steueranweisungen für den Ablauf: „If", „If else", „If elseif", „For", „While" und „Repeat while/until".
* **Math** – Funktionen für den Umgang mit Zahlen, z.B. das Überführen eines Werts vom Datentyp String in den Datentyp Number.
* **Text** – Funktionen für die Arbeit mit Textwerten, oft beim Filtern oder Zusammensetzen von Zeichenketten.
* **Date** – gängige Funktionen, um mit einem Datum oder einer Uhrzeit zu arbeiten. Sie ersetzen NICHT die Zeitdatenquelle, sondern erweitern das Spektrum der vorkonfigurierten Funktionen zur Zeit-Manipulation.
* **Color** – eine Farbe erzeugen oder verändern, z.B. anhand eines Hex-Codes.
* **Metadata / Network** – Informationen über die Umgebung und das Netzwerk.
* **JSON** – JSON-Strukturen parsen und aufbauen.
* **Error handling** – Fehler innerhalb eines Skripts abfangen und darauf reagieren.

Die Standardfunktionen stehen hier immer zur Verfügung. Mit Hilfe des Skripts [Functions] kannst du jederzeit zusätzlich eigene, wiederverwendbare Funktionen anlegen, die dann ebenfalls im Baum erscheinen.
