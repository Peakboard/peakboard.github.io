---
layout: article
title: Writing from S7 to OPC/UA
menu_title: Write from S7 to OPC/UA
description: Writing from S7 to OPC/UA
lang: en
weight: 1001
ref: misc-1001
redirect_from:
---

With the following statement you may write in a script from a Siemens S7, for example a S7 1500 to an OPC/UA server.
The OPC/UA server can also be located on the Siemens S7 itself.

```lua
-- datasourcename.writevaule(NodeID, Datatype)
data.opcua.writevalue('ns=3;s="Data_block_2". "IntegersWords". "int1"', toint16(12))
```

The NodeID can be found in the "NodeID" field of the variable in the browse dialog of the OPC/UA data source. 

> ## Note
>The NodeID can also be created using [UaExpert](https://opcfoundation.org/products/view/uaexpert) or a similar tool.

For the [Peakboard Script Engine](/scripting/en-script-engine.html) all numbers are equivalent. 
Therefore all numbers are processed as "double".
This means that these numbers cannot be stored on an OPC/UA server without further ado.

> ## Note
>The [Peakboard Script Engine](/scripting/en-script-engine.html) knows only three data types: bool, number and string!
>Therefore a conversion according to the following table is necessary!

The following table provides an overview of the OPC/UA data types and their corresponding conversion functions:

| OPC UA Datatype | Conversion Function |
|-----------------|----------------------:|
| byte | tobyte() |
| sbyte | tosbyte() |
| float/single | tofloat()/tosingle() |
| int16/short | toint16()/toshort() |
| int32 | toint32() |
| int64/long | toint64()/tolong() |
| uint16/ushort | touint16()/toushort() |
| uint32 | touint32() |
| uint64/ulong | touint64()/toulong() |
| datetime | todatetime()
| guid | toguid() |
