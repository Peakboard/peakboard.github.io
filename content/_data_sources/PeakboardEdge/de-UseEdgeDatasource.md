---
layout: article
title: Verwenden der Peakboard Edge Datenquelle
menu_title: Verwenden der Peakboard Edge Datenquelle
description: Information über die Verwendung der Peakboard Edge Datenquelle
lang: de
weight: 2730
ref: dat-2730
redirect_from:
---

![Peakboard Edge Datenquelle](/assets/images/data-sources/peakboard-edge/de_edge-use_01.png)

Ziehst du die Peakboard Edge Datenquelle auf den Arbeitsbereich, erhälst du beispielsweise eine Tabelle (1) mit allen in der Datenquelle hinterlegten Peakboard Edge und den dazugehörigen Informationen (in dieser Ansicht nur Platzhalterinformationen). Dabei entspricht jede Reihe der Tabelle einer Peakboard Edge. Die Spalten entsprechen den Informationen, auf welche die jeweilige Peakboard Edge Zugriff hat. Alternativ erhältst du ein Text Control (2) mit dem Namen der Peakboard Edge als Wert.

Die weitere Verarbeitung innerhalb der Visualisierung erfolgt analog zu jeder anderen Datenquelle innerhalb des Peakboard Designers. Zum Beispiel die Bindung an Controls, Skripte oder Dataflows. Dabei kann auf die einzelnen Peakboard Edge entweder über ihren Index in der Peakboard Edge Datenquelle oder den angegebenen Namen, im obigen Beispiel [EdgeName], zugegriffen werden.

### Bindung an Controls

Um den Inhalt eines Controls, z.B. eines Textfeldes, an ein Feld aus der Peakboard Edge Datenquelle zu binden, z.B. den Peakboard Edge Namen, oder den Text-Wert der Peakboard Edge, ist nur der Zugriff über den Index möglich. Dazu folgendes Beispiel. Hier soll der Name der Peakboard Edge in einem Textfeld dargestellt werden. Dazu wählst du als Datenquelle Peakboard Edge aus (1). Weiterhin wählst du innerhalb der Datenquelle die Spalte [Name] (2) aus. Anschließend bestimmst du mit [Zeile] (3) von welcher Peakboard Edge der Name genutzt wird.

![An Control binden](/assets/images/data-sources/peakboard-edge/de_edge-use_02.png)

### Skript-Zugriff

In Skripten kannst du einzelne Peakboard Edge über ihren Namen ansprechen.

Konkret heißt das:
data.Edge.<Name> greift auf die Peakboard Edge mit dem Namen <Name> zu.
Die einzelnen Spalten der Peakboard Edge kannst du über data.Edge.<Name>.<Spalte> lesen.

Zudem gibt es zwei Funktionen:

Play Sound (data.Edge.<Name>.PlaySound(<NR>))

Set Output pins (data.Edge.<Name>.SetOutputPin(<NR>, <Wert>))

Über die PlaySound Funktion kannst du den Sound mit der Nummer <NR> auf der Peakboard Edge abspielen. Hierfür gilt wieder, dass ein USB-Lautsprecher angeschlossen sein muss.

Über die SetOutputPins Funktion kannst du die Relais für die entsprechenden Pins schalten. Hierbei wird das Relais mit der Nummer <NR> (0-3) auf den Wert <Wert> (true/false) gesetzt.

Die Skript-Zugriffe sind auch aus dem Skript-Baum, welcher sich im Skript-Editor auf der rechten Seite befindet und im nachfolgenden Bild dargestellt ist, ersichtlich.

![Skript-Editor](/assets/images/data-sources/peakboard-edge/de_edge-use_03.png)

Neben dem Zugriff auf die Peakboard Edge Datenquelle ist es häufig sinnvoll ein Refreshed-Skript auf eine Peakboard Edge Datenquelle anzulegen. Also ein Skript, das immer getriggert wird, wenn sich an der Peakboard Edge etwas ändert.

Hier gibt es über den Bereich [Dieses Ereignis] die Möglichkeit, auf die neuen Werte zuzugreifen.
Unter [Peakboard Edge Name] findet sich der Name der Peakboard Edge in der Peakboard Edge Datenquelle, die die Änderung hervorgerufen hat.
In [Data] finden sich die neuen Werte innerhalb der Datenänderung.
In [Wurde der Wert aktualisiert] bekommt man über boolsche Werte die Information, ob dieser Wert die Datenänderung, also das Refreshed-Skript hevorgerufen hat.
