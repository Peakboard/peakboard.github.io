---
layout: article
title: Writing to OPC UA
menu_title: Write to OPC UA
description: Writing to OPC UA
lang: en
weight: 1910
ref: dat-1910
redirect_from: 
 - /misc/en-Client-Write-OPCUA.html
 - /data_sources/OPCUA/en-Client-Write-OPCUA.html
---

With the following statement the value of a variable on an OPC UA server may be changed with a script.

```lua
-- datasourcename.writevaule(NodeID, Value)
data.opcua.writevalue('ns=3;s="Data_block_2". "IntegersWords". "int1"', toint16(12))
```

The NodeID can be found in the "NodeID" field of the variable in the browse dialog of the OPC UA data source.

> ## Note
>The NodeID can also be created using [UaExpert](https://opcfoundation.org/products/view/uaexpert) or a similar tool.

For the [Peakboard Script Engine](/scripting/en-script-engine.html) all numbers are equivalent.
Therefore all numbers are processed as "double".
This means that these numbers cannot be stored on an OPC UA server without further ado.

> ## Note
>The [Peakboard Script Engine](/scripting/en-script-engine.html) knows only three data types: bool, number and string!
>Therefore a conversion according to the following table is necessary!

The following table provides an overview of the OPC UA data types and their corresponding conversion functions:

{% include styled_table.html %}
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
