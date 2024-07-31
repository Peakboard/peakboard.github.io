---
layout: article
title: Publishing variables S7
menu_title: Publishing variables S7
description: Publishing variables S7
lang: en
weight: 174
ref: scr-174
redirect_from:
---


Values can be set on S7 controllers using a script. There are four methods for this (Datablock, Memory, Input, Output). These methods can be found in the script editor under [FUNCTIONS], [Publish to external system], [Siemens S7], [Write to PLC]. Note that the variable to be written does not have to be stored in the data source.

![Publishing variables](/assets/images/scripting/Scripting_Beispiele/publishS7/en-publishS7.png)

The syntax of the methods is largely identical, whereby only the essential information of the attributing variable is required.

Instead of the BuildingBlock, a Lua command with the following pattern can also be used:

```lua
connections.getfromid('IDPLCdatasource').setdatablockvar.setvar( [Data block number], [Offset], [Data type], [Value] )
```

The data block number is only required if a data block is to be written to and is specified as an integer. The offset is specified in the same way as in the variable configuration dialog. The same applies to the data type. Like the offset and data type, the value is specified as a character string ('value').
#### Data types 

The following data types are supported:
* Bit
* Byte
* Word
* DWord
* UInt
* Int
* DInt
* Real
* String
* Time

