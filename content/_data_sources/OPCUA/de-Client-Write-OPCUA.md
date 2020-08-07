---
layout: article
title: Schreiben nach OPC UA
menu_title: Schreiben nach OPC UA
description: Schreiben nach OPC UA
lang: de
weight: 2410
ref: dat-2410
redirect_from: 
	- /misc/de-Client-Write-OPCUA.html
---

Mit folgendem Statement kann mit einem Skript der Wert einer Variablen auf einem OPC UA Server geändert werden.

```lua
-- Datenquellenname.writevaule(NodeID, Value)
data.opcua.writevalue('ns=3;s="Data_block_2"."IntegersWords"."int1"', toint16(12))
```

Die NodeID findet sich im Durchsuchen-Dialog der OPC UA-Datenquelle im Feld "NodeID" der Variablen. 

> ## Hinweis
>Die NodeID kann auch mit Hilfe von [UaExpert](https://opcfoundation.org/products/view/uaexpert) oder einem ähnlichen Tool erstellt werden.

Für die [Peakboard Skript Engine](/scripting/de-script-engine.html) sind alle Zahlen gleichwertig. 
Daher werden alle Zahlen als "double" verarbeitet.
Dies führt dazu, dass diese Zahlen nicht ohne weiteres auf einem OPC UA Server gespeichert werden können.

> ## Hinweis
>Die [Peakboard Skript Engine](/scripting/de-script-engine.html) kennt lediglich drei Datentypen: bool, number und string!
>Daher ist eine Konvertierung anhand nachfolgender Tabelle notwendig!

Mit Hilfe nachfolgender Tabelle liefert eine Übersicht über die OPC UA Datentypen und deren entsprechende Konvertierunsfunktionen:

{% include styled_table.html %}
| OPC UA Datatype | Konvertierungsfunktion |
|-----------------|----------------------:|
| byte            |              tobyte() |
| sbyte           |             tosbyte() |
| float/single    |  tofloat()/tosingle() |
| int16/short     |   toint16()/toshort() |
| int32           |             toint32() |
| int64/long      |    toint64()/tolong() |
| uint16/ushort   | touint16()/toushort() |
| uint32          |            touint32() |
| uint64/ulong    |  touint64()/toulong() |
| datetime        |          todatetime() |
| guid            |              toguid() |
