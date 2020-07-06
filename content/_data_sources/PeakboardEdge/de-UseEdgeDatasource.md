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

![img01](/assets/images/data-sources/peakboard-edge/use01.png)

Wird die Peakboard Edge Datenquelle auf die Design Oberfläche gezogen, erhält man eine Tabelle mit allen hinterlegten Edge Geräten und den dazugehörigen Informationen (in dieser Ansicht nur Platzhalterinformationen). Dabei entspricht jede Reihe der Tabelle einem Peakboard Edge. Die Spalten entsprechen den Informationen auf welche das jeweilige Peakboard Edge Zugriff hat. 

Die weitere Verarbeitung innerhalb der Visualisierung erfolgt analog zu jeder anderen Datenquelle innerhalb Peakboards (Bindungen an Controls, Scripte, Datenflüsse,… ). Dabei kann auf die einzelnen Edge entweder über ihren Index in der Edge Datenquelle (Sichtbar in der Oberfläche zum Verwalten der Edge Datenquelle, beginnend bei 0) oder den angegebenen Namen, im obigen Beispiel “EdgeName”, zugegriffen werden.


### Bindung an Controls
Um den Inhalt eines Controls (z.B. eines Textfeldes) an ein Feld aus der Edge Datenquelle zu binden (z.B. den Edge Namen, oder den Text-Wert des Edge) ist nur der Zugriff über den Index möglich. Dazu folgendes Beispiel. Hier soll der Name des Edge in einem Textfeld dargestellt werden. Dazu wird als Datenquelle “Edge” ausgewählt. Weiterhing wird innerhalb der Datenquelle die Spalte “Name” ausgewählt. Anschließend bestimmt die “Zeile in Datenquelle” (“Source Row”) von welchem Edge der Name genutzt wird.

![img02](/assets/images/data-sources/peakboard-edge/use02.png)

### Script Zugriff
In Scripten können einzelne PB Edge über ihren Namen angesprochen werden. Konkret heißt das:
data.Edge.<Name> greift auf das PB Edge mit dem Namen <Name> zu. 
Die einzelnen Spalten des Edge können über data.Edge.<Name>.<Spalte> gelesen werden.

Zudem gibt es zwei Funktionen:

Play Sound (data.Edge.<Name>.PlaySound(<NR>))

Set Output pins (data.Edge.<Name>.SetOutputPin(<NR>, <Wert>)

Über die PlaySound Funktion kann der Sound mit der Nummer <NR> auf dem Edge abgespielt werden (hierfür gilt wieder, dass ein USB-Lautsprecher angeschlossen sein muss).

Über die SetOutputPins Funktion können die Relais für die entsprechenden Pins geschaltet werden. Hierbei wird das Relais mit der Nummer <NR> (0-3) auf den Wert <Wert> (true/false) gesetzt.

Die Script Zugriffe sind auch aus dem Script Baum, welcher sich im Script Editor auf der rechten Seite befindet und im nachfolgenden Bild dargestellt ist, ersichtlich. 

![img03](/assets/images/data-sources/peakboard-edge/use03.png)