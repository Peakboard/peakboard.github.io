---
layout: article
title: Variablen schreiben S7
menu_title: Variablen schreiben S7
description: Variablen schreiben S7
lang: de
weight: 174
ref: scr-174
redirect_from:
---


Das Setzen von Werten auf S7-Steuerungen ist per Skript möglich. Dazu gibt es vier Methoden (Datablock, Memory, Input, Output). Diese Methoden sind im Skript-Editor unter [FUNKTIONEN], [In externem System veröffentlichen], [Siemens S7], [In SPS schreiben] zu finden.
Beachte, dass die Variable, welche geschrieben werden soll, nicht in der Datenquelle hinterlegt sein muss.

![Variablen schreiben](/assets/images/scripting/Scripting_Beispiele/publishS7/publishS7.png)

Die Syntax der Methoden ist weitestgehend identisch, wobei stets ausschließlich die essentiellen Informationen der zuschreibenden Variable erforderlich sind.

Anstelle des BuildingBlocks kann auch ein Lua-Befehl mit folgendem Muster verwendet werden:

```lua
connections.getfromid('IDPLCdatasource').setdatablockvar.setvar( [Datenblocknummer], [Offset], [Datentyp], [Wert] )
```

Die Datenblocknummer wird nur benötigt, wenn auf einen Datenbaustein geschrieben werden soll und wird als Ganzzahl angegeben. Die Angabe des Offsets erfolgt wie im Dialog zur Variablenkonfiguration. Gleiches gilt für den Datentyp. Der Wert wird, wie Offset und Datentyp, als Zeichenkette (‘Wert’) angegeben.

#### Datentypen 

Folgende Datentypen werden dabei unterstützt:
Bit
Byte
Word
DWord
UInt
Int
DInt
Real
String
Time

