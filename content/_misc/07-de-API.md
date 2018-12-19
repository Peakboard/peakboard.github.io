---
layout: article
title: Peakboard API
menu_title: Peakboard API
description: Peakboard API
lang: de
ref: misc-07
---

Um Daten aus einer List Datenquelle über die API abgreifen zu können werden nachfolgende Informationen benötigt.

BoxIP: IP der Peakboard Box im Netzwerk, alternativ auch Name der Box möglich
PeakboardID: ID der Visualisierung, diese findet sich über den Menü Button Settings (1). Anschließend kann die ID (2) aus dem entsprechenden Feld in den Zwischenspeicher kopiert werden.
ListName: Name der List Datenquelle (3)
VarName: Name einer Variablen

![API01](/assets/images/misc/API/API01.png)

Lesen aus einer Liste:
GET: http://[BoxIP]/api/dataread?id=[PeakboardID]&datakey=[ListName]

![API02](/assets/images/misc/API/API02.png)

Schreiben in eine Variable:
POST: http://[BoxIP]/api/datapush?id=[PeakboardID]&datakey=[VarName]

![API03](/assets/images/misc/API/API03.png)