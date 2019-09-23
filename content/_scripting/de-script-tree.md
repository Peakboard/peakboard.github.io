---
layout: article
title: Der Peakboard-Skript-Baum
menu_title: Der Peakboard-Skript-Baum
description: Informatinon über den Peakboard-Skript-Baum
lang: de
weight: 102
ref: scr-102
redirect_from:
---

Der Skript-Baum soll das Arbeiten mit Skripten erleichtern. Hierzu finden sich dort bereits vordefinierte Funktionen und Beispiele, welche einfach per Doppelklick an der Stelle des Cursors eingesetzt werden können.

![image01](/assets/images/scripting/tree/tree01.png)

## Data

Hier finden sich alle im Explorer angelegten Datenquellen, sowie die dafür charakteristischen Funktionen.

Beispielsweise enthält eine Zeitdatenquelle Funktionen wie “Format” oder “Lua Date”. Über “Format” kann so das Datum analog zur Format-Funktion eines Controls, wie [hier](/data_sources/de-datum-und-uhrzeit.html) beschrieben, geändert werden.

## Variable

Hier finden sich alle im Explorer angelegten Variablen und Listen, sowie die dafür charakteristischen Funktionen. 

Beispielsweise für eine Variable vom Typ Number die entsprechende “to String”-Funktion.

## Dataflows

Hier finden sich alle im Explorer angelegten Dataflows, sowie die dafür charakteristischen Funktionen.

Beispielsweise kann hier die zuvor [aggregierte Spalte eines Dataflows](/dataflows/de-daten-aggregerien.html) aufgerufen werden.

## Screens

Hier finden sich alle auf dem Screen angelegten Controls, die einen Control-Namen erhalten haben, sowie die für das Control charakteristischen Funktionen

## Resources

Hier finden sich alle im Explorer angelegten Ressourcen, sowie die dafür charakteristischen Funktionen

## Timer (nur Timer-Skript)

Hier finden sich für den Timer relevante Funktionen

## Types

Hier finden sich Funktionen zur Sichtbarkeit oder zum Färben von Controls

## Runtime
Funktionen für die Peakboard Runtime.

## Funktionen

Im Skript-Editor enthaltene Standardfunktionen. Mit Hilfe des Skripts [Globale Funktionen](/scripting/de-function.html) können jederzeit eigene Funktionen angelegt werden.

* Peakboard
Ermöglicht beispielsweise mittels peakboard.log() die Ausgabe in den Log der Peakboard Runtime
* Control
Enthält eine vereinfachte Funktion um ein Control sichtbar oder unsichtbar zu schalten
* Date
Hier finden sich gängige Funktionen um mit einem Datum oder einer Uhrzeit zu arbeiten. Die Funktionen ersetzen jedoch NICHT die Zeit-Datenquelle. Vielmehr erweitern Sie das Spektrum der vorkonfigurierten Funktionen zur Zeit-Manipulation. 
* String
Diese Funktionen finden meist dann Anwendung, wenn es darum geht innerhalb eines [Dataflows bestimmte Textwerte zu filtern](/dataflows/de-daten-filtern.html).
* Math
Enthält einige Funktionen zum Umgang mit Zahlen. Beispielsweise kann über die “To number”-Funktion eine Zahl vom Datentyp String in den Datentyp Number überführt werden.
* SQL
Die hier aufgeführten Funktionen finden hauptsächlich beim Schreiben nach SQL Verwendung. 
* SAP
Die hier aufgeführten Funktionen finden hauptsächlich beim Schreiben nach SAP Verwendung. 
* Mail
Hier finden sich vorkonfigurierte Funktionen zum Versand von E-Mails über das Peakboard.
* Brush
Funktion um etwas anhand eines Hex-Codes zu färben. 