---
layout: article
title: Auslesen eines Arrays (OPC UA)
menu_title: Auslesen eines Arrays (OPC UA)
description: Auslesen eines Arrays (OPC UA)
lang: de
weight: 1920
ref: dat-1920
redirect_from: 
 - /misc/de-Array-OPCUA.html
 - /data_sources/OPCUA/de-Array-OPCUA.html
---

Um einzelne Elemente eines Arrays von einem OPC UA Server nutzen zu können, muss zunächst das Array als Subscription angelegt werden (1).

Über Edit kann ein Skript angelegt werden, welches immer zusammen mt der Subscription ausgeführt wird (2).

Im Skript wird mit Hilfe einer for-Schleife über die einzelnen Elemente des Arrays iteriert.
Im Screenshot werden die einzelnen Elemente anschließend im Log der Peakboard Box ausgegeben (3).
Um diese Elemente für Berechnungen, KPIs oder Grafiken nutzen zu können, empfiehlt es sich diese beispielsweise in einer Variablen-Liste zu speichern.

![img01](/assets/images/misc/ArrayOPCUA/img01.png)

```lua
for index = 0, message.itemValue.length - 1 do
	peakboard.log(message.itemValue[index])
end
```
