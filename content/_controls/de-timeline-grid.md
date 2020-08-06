---
layout: article
title: Timeline Grid
menu_title: Timeline Grid
description: Information über Peakboard Designer Timeline Grid Control.
lang: de
weight: 695
ref: con-695
redirect_from:
---

Die Idee des Timeline Grids ist es, eine Art Zeitstrahl darzustellen und verschiedene Zustände in einem Zeitverlauf darzustellen. 
Das könnte zum Beispiel für eine Maschine benutzt werden, die die Zustände *Rüsten*, *Produzieren* und *Fehler* hat. 
Es soll eine Darstellung über die Zeit erfolgen, die die einzelnen Zustände übersichtlich zeigt.
 Bitte beachten Sie zunächst folgende allgemeine Infos und wiederkehrende Bedienpatterns für Steuerelemente:

[Allgemeine Eigenschaften](/controls/01-de-allgemeine-eigenschaften.html)

Im folgenden Beispiel soll als Datengrundlage eine einfache, stationäre Liste gelten. 
Sie enthält einen Timestamp, welche Tätigkeit zu diesem Zeitpunkt begonnen hat und wie lange der Zustand angehalten hat. 
Die Daten, die von der Maschine kommen, sollten idealerweise zunächst in diese Form gebracht und können dann ganz einfach an das Timeline Grid gebunden werden.

![timelinegrid-01](/assets/images/Controls/TimelineGrid/timelinegrid-01.png)

Im nächsten Schritt müssen die Spalten mit den entsprechenden Infos gebunden werden. **Color Column Name** ist die Spalten der Datenquelle, anhand derer die Farbe bestimmt wird. **Duration Column Name** ist die Spalte, die die Breite definiert und **Caption Column Name** ist die Spalte, die die Beschriftung für einen Zeitabschnitt enthält.

![timelinegrid-02](/assets/images/Controls/TimelineGrid/timelinegrid-02.png)

Final muss noch das Mapping zwischen dem Wert der Farbe und der tatsächlich Farbe eingestellt werden. Die Eigenschaft heißt einfach nur **Mapping**. Der folgende Screenshot zeigt, dass der Wert **Preparing** grau sein soll, **Producing** grün und **Error** rot.

![timelinegrid-03](/assets/images/Controls/TimelineGrid/timelinegrid-03.png)

Somit ergibt sich aus den Beispieldaten von oben die folgende Ansicht.

![timelinegrid-04](/assets/images/Controls/TimelineGrid/timelinegrid-04.png)

