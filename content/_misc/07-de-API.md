---
layout: article
title: Peakboard API
menu_title: Peakboard API
description: Peakboard API
lang: de
ref: misc-07
---

Um Daten aus einer Variablen oder List Datenquelle über die API abgreifen zu können werden nachfolgende Informationen benötigt. Ebenso werden diese Benötigt um Werte in ein List Element oder eine Variable zu schreiben.

* Authentifizierung: [Basic Authentication](https://de.wikipedia.org/wiki/HTTP-Authentifizierung#Basic_Authentication)
* BoxIP: IP der Peakboard Box im Netzwerk, alternativ auch DNS der Box möglich
* PeakboardID: ID der Visualisierung, diese findet sich über den Menü Button Settings (1). Anschließend kann die ID (2) aus dem entsprechenden Feld in den Zwischenspeicher kopiert werden.
* ListName: Name der List Datenquelle (3)
* VarName: Name einer Variablen

![API01](/assets/images/misc/API/API01.png)

Nachfolgend sind Beispiele für das Lesen und Schreiben über die API gegeben. 

Um Werte aus einem List Element zu lesen kann folgender GET verwendet werden:

```lua
GET: http://[BoxIP]/api/dataread?id=[PeakboardID]&datakey=[ListName]
```

Analog kann der Wert einer Variablen ausgelesen werden, es muss lediglich der Name der Variablen als datakey übergeben werden.

![API02](/assets/images/misc/API/API02.png)

Um Werte in eine Variable zu schreiben kann folgender POST verwendet werden:

```lua
POST: http://[BoxIP]/api/datapush?id=[PeakboardID]&datakey=[VarName]
```

Analog können auch Werte in ein List Element geschrieben werden, indem der Name des List Elements als datakey übergeben wird.

![API03](/assets/images/misc/API/API03.png)