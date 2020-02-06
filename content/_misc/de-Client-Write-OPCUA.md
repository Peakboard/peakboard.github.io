---
layout: article
title: Schreiben von S7 auf OPC/UA
menu_title: Schreiben von S7 auf OPC/UA
description: Schreiben von S7 auf OPC/UA
lang: de
weight: 1001
ref: misc-1001
redirect_from:
---

Mit folgendem Statement kann in einem Skript von einer Siemens S7,  beispielsweise einer S7 1500. auf einen OPC/UA Server geschrieben werden.
Der OPC/UA Server kann sich dabei auch auf der Siemens S7 selbst befinden.

```lua
-- Datenquellenname.writevaule(NodeID, Datatype)
data.opcua.writevalue('ns=3;s="Data_block_2"."IntegersWords"."int1"', toint16(12))
```

Die NodeID findet sich im Durchsuchen-Dialog der OPC/UA-Datenquelle im Feld "NodeID" der Variablen. 

> ## Hinweis
>Die NodeID kann auch mit Hilfe von [UaExpert](https://opcfoundation.org/products/view/uaexpert) oder einem ähnlichen Tool erstellt werden.

Für die [Peakboard Skript Engine](/scripting/de-script-engine.html) sind alle Zahlen gleichwertig. 
Daher werden alle Zahlen als "double" verarbeitet.
Dies führt dazu, dass diese Zahlen nicht ohne weiteres auf einem OPC/UA Server gespeichert werden können.

> ## Hinweis
>Die [Peakboard Skript Engine](/scripting/de-script-engine.html) kennt lediglich drei Datentypen: bool, number und string!
>Daher ist eine Konvertierung anhand nachfolgender Tabelle notwendig!

Mit Hilfe nachfolgender Tabelle liefert eine Übersicht über die OPC/UA Datentypen und deren entsprechende Konvertierunsfunktionen:

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
