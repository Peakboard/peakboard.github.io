---
layout: article
title: Writing to OPC UA
menu_title: Write to OPC UA
description: Write values back to an OPC UA server with the Set variable Building Block that adapts dynamically to the chosen variable
lang: en
weight: 1910
ref: dat-1910
redirect_from: 
 - /misc/en-Client-Write-OPCUA.html
 - /data_sources/OPCUA/en-Client-Write-OPCUA.html
---

Besides reading data, the [OPC UA data source](/data_sources/OPC_UA/en-opc-ua.html) can also write values back to the server. The recommended way is the **Set variable** Building Block: you pick the variable you want to change and the block dynamically rebuilds itself to match that variable — including a value input that is already typed correctly.

<div class="box-warning" markdown="1">
**Attention**

This requires at least one previously created [OPC UA data source](/data_sources/OPC_UA/en-opc-ua.html). The Building Block writes in the context of that connection.
</div>

## Find the OPC UA blocks

Open the Building Blocks editor for any script (for example a [Button] click, a Timer or a Global event) and make sure [Block Mode] is active. Use the block search (1) to filter for `OPC UA`. The blocks live under **FUNCTIONS → Publish to external systems → OPC UA** (2).

![OPC UA Building Blocks in the block palette](/assets/images/data-sources/write-to-opc-ua/write-to-opc-ua-01-blocks-palette.png)

* **Set variable** (3): writes a value to a writable OPC UA variable node. This is the block used to push a value from the Peakboard application back to the server.
* **Call method** (4): calls an OPC UA method exposed by an object node on the server, without using a return value.
* **Call method with return value** (5): calls an OPC UA method and returns its result, so you can reuse the returned value — for example to store it in a variable.

## Add the Set variable block

Double-click **Set variable** (or drag it onto the canvas). The block starts in a minimal state with only the connection row.

![The Set variable block before a variable is selected](/assets/images/data-sources/write-to-opc-ua/write-to-opc-ua-02-empty-block.png)

* **for connection** (1): the OPC UA data source the block writes to. Pick the connection from the dropdown.
* **Reset / select variable** (2): the refresh icon opens the node browser so you can choose which variable to write.
* As long as no variable is selected, the generated code (3) shows the hint `-- !!! Please reset the connection and select a variable !!!`.

## Choose the variable to write

The refresh icon opens the [Select OPC UA nodes] dialog — the same node browser used by the data source. It shows the address space of the connected server.

![Selecting the writable variable in the node browser](/assets/images/data-sources/write-to-opc-ua/write-to-opc-ua-03-select-node.png)

* **Pick a writable variable** (1): expand the tree and tick the checkbox of the variable you want to write. Only variable nodes whose `AccessLevel` allows writing can be changed on the server.
* **Select** (2): confirm the choice and return to the editor.

## The block adapts dynamically

Once a variable is selected, the **Set variable** block rebuilds itself: it now exposes a target row and a typed value input.

![The Set variable block after it adapted to the chosen variable](/assets/images/data-sources/write-to-opc-ua/write-to-opc-ua-04-dynamic-block.png)

* **for connection** (1): the OPC UA connection used for the write.
* **write to variable** (2): the node that was picked, shown with its NodeID and browse path. Use the dropdown to switch to another writable variable of the same connection.
* **value** (3): the value to write. Because the block knows the data type of the chosen node, this input is already typed correctly (a Number node expects a number, a Boolean node a boolean, and so on). Plug a value, a [Get value] block or any matching expression into this socket.
* **Generated code** (4): the block produces the matching `writevalue` call automatically, for example `connections.getfromid('…').writevalue('ns=2;s=TemplatesData1_Temperature', 0)`. The block already passes the value in the correct OPC UA data type.

## Writing from a script

The same write operation is also available directly in script code, which is useful for advanced scenarios:

```lua
-- datasourcename.writevalue(NodeID, Value)
data.opcua.writevalue('ns=3;s="Data_block_2"."IntegersWords"."int1"', toint16(12))
```

The NodeID can be found in the "NodeID" field of the variable in the browse dialog of the OPC UA data source.

> ## Note
>The NodeID can also be created using [UaExpert](https://opcfoundation.org/products/view/uaexpert) or a similar tool.

For the [Peakboard Script Engine](/scripting/en-script-engine.html) all numbers are equivalent.
Therefore all numbers are processed as "double".
This means that these numbers cannot be stored on an OPC UA server without further ado.

> ## Note
>The [Peakboard Script Engine](/scripting/en-script-engine.html) knows only three data types: bool, number and string!
>Therefore, when you write from script code, a conversion according to the following table is necessary. The **Set variable** Building Block does this conversion for you.

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
