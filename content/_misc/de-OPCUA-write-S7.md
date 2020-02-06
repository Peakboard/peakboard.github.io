---
layout: article
title: Schreiben von OPC/UA nach S7 
menu_title: Schreiben von OPC/UA nach S7
description: Schreiben von OPC/UA nach S7
lang: de
weight: 1001
ref: misc-1001
redirect_from:
---

Mit folgendem Statement kann in einem Skript von einem  OPC/UA Server beispielsweise auf eine S7 1500 geschrieben werden:

```lua
-- (NodeID, Datatype)
data.opcua.writevalue('ns=3;s="Data_block_2"."IntegersWords"."int1"', toint16(12))
```

Die NodeID findet sich im Dialog der OPC/UA-Datenquelle im Feld NodeID der Variablen. 

> ## Hinweis
>Die NodeID kann auch mit Hilfe von [UaExpert](https://opcfoundation.org/products/view/uaexpert) oder einem ähnlichen Tool erstellt werden.

> ## WARNUNG!
>
>Die [Peakboard Skript Engine](/scripting/de-script-engine.html) kennt lediglich drei Datentypen: bool, number und string!
>Daher ist eine Konvertierung anhand nachfolgender Tabelle notwendig!

Für die [Peakboard Skript Engine](/scripting/de-script-engine.html) sind alle Zahlen gleichwertig. 
Daher werden alle Zahlen als "double" verarbeitet.
Dies führt dazu, dass diese Zahlen nicht ohne weiteres auf einem OPC/UA Server gespeichert werden können.

Mit Hilfe nachfolgender Tabelle liefert eine Übersicht über die OPC/UA Datentypen und deren entsprechende Konvertierunsmethoden:

| OPC UA Datatype | Konvertierungsmethode |
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
