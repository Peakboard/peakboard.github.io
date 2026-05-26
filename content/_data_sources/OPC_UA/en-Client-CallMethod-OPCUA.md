---
layout: article
title: Calling OPC UA methods
menu_title: Call OPC UA methods
description: Call OPC UA methods exposed by an object node with the Call method and Call method with return value Building Blocks – with and without a return value
lang: en
weight: 1920
ref: dat-1920
redirect_from: 
 - /misc/en-Client-CallMethod-OPCUA.html
 - /data_sources/OPCUA/en-Client-CallMethod-OPCUA.html
---

Besides reading values and [writing to OPC UA](/data_sources/OPC_UA/en-Client-Write-OPCUA.html), Peakboard can also call OPC UA methods that a server exposes through its object nodes. Two Building Blocks are available for this: **Call method** calls a method without reusing its result, and **Call method with return value** calls a method and returns its result so you can keep working with it in the script.

<div class="box-warning" markdown="1">
**Attention**

This requires at least one previously created [OPC UA data source](/data_sources/OPC_UA/en-opc-ua.html). The Building Block calls the method in the context of that connection.
</div>

## Find the OPC UA blocks

Open the Building Blocks editor for any script (for example a [Button] click, a Timer or a Global event) and make sure [Block Mode] is active. Use the block search (1) to filter for `OPC UA`. The blocks live under **FUNCTIONS → Publish to external systems → OPC UA** (2).

![OPC UA Building Blocks in the block palette](/assets/images/data-sources/call-opc-ua-method/call-opc-ua-method-01-blocks-palette.png)

* **Set variable** (3): writes a value to a writable OPC UA variable (see [Writing to OPC UA](/data_sources/OPC_UA/en-Client-Write-OPCUA.html)).
* **Call method** (4): calls an OPC UA method exposed by an object node on the server, without using a return value.
* **Call method with return value** (5): calls an OPC UA method and returns its result, so you can reuse the returned value — for example to store it in a variable.

## Add the Call method block

Double-click **Call method** (or drag it onto the canvas). The block starts in a minimal state with only the connection row.

![The Call method block before a method is selected](/assets/images/data-sources/call-opc-ua-method/call-opc-ua-method-02-empty-block.png)

* **for connection** (1): the OPC UA data source in whose context the method is called. Pick the connection from the dropdown.
* **Reset / select method** (2): the refresh icon opens the node browser so you can choose the object node and the method.
* As long as no method is selected, the generated code (3) shows the hint `-- !!! Please reset the connection and select any Objects with methods !!!`.

## Choose the method

The refresh icon opens the [Select OPC UA nodes] dialog — the same node browser used by the data source. It shows the address space of the connected server.

![Selecting a method in the node browser](/assets/images/data-sources/call-opc-ua-method/call-opc-ua-method-03-select-method.png)

* **Pick a method** (1): expand the tree and tick the checkbox of the method you want to call. Methods sit under the object node that exposes them — standard methods, for example, live under the **Server** node.
* **Attributes** (2): use the attributes pane to confirm you picked the right node. A callable method has `NodeClass` = **Method** and `Executable` = **True**.
* **Select** (3): confirm the choice and return to the editor.

## The block adapts

Once a method is selected, the **Call method** block rebuilds itself: it now shows the method and — if the method expects input arguments — one typed input socket per argument.

![The Call method block after it adapted to the chosen method](/assets/images/data-sources/call-opc-ua-method/call-opc-ua-method-04-call-method-block.png)

* **for connection** (1): the OPC UA connection used to call the method.
* **method** (2): the method that was picked, shown with its NodeID and name. Use the dropdown to switch to another method of the same connection.
* **Arguments** (3): for every input argument of the method (in the example `SubscriptionId`) the block exposes a typed socket. Plug a value, a [Get value] block or any matching expression into it.
* **Generated code** (4): the block produces the matching `callmethod` call automatically, for example `connections.getfromid('…').callmethod('i=2253', 'i=11492', '')`. The first argument is the NodeID of the object node, the second the NodeID of the method, followed by the method arguments.

## Call method with return value

The **Call method with return value** block works exactly like **Call method** — connection, method and arguments are selected the same way. The difference: it returns the method's result.

![The Call method with return value block with its return-value output](/assets/images/data-sources/call-opc-ua-method/call-opc-ua-method-05-return-value-block.png)

* **Return-value output** (1): the socket at the top left of the block emits the method's result. Connect it for example to a **Set value** block to store the returned value in a variable.
* **Connection, method and arguments** (2): are selected just like in the **Call method** block.
* **Generated code** (3): the generated code now starts with `local _ = …`, meaning the result of the `callmethod` call is captured and can be reused.

## Calling from a script

The same call is also available directly in script code, which is useful for advanced scenarios:

```lua
-- without a return value
connections.getfromid('EncodedConnectionKey').callmethod('ObjectNodeId', 'MethodNodeId', 'Arguments')

-- with a return value
local result = connections.getfromid('EncodedConnectionKey').callmethod('ObjectNodeId', 'MethodNodeId', 'Arguments')
```

You can find the NodeIDs of the object node and the method in the "NodeID" field of the browse dialog of the [OPC UA data source](/data_sources/OPC_UA/en-opc-ua.html). A method is identifiable by `NodeClass` = **Method**.

<div class="box-tip" markdown="1">
**Note**

The NodeID can also be determined using [UaExpert](https://opcfoundation.org/products/view/uaexpert) or a similar tool.
</div>

For the [Peakboard Script Engine](/scripting/en-script-engine.html) all numbers are equivalent and processed as "double". When you pass numeric arguments to a method, convert them with the matching functions (`toint32()`, `toint16()`, …) to the OPC UA data type the server expects. The **Call method** Building Block handles this conversion for you through its typed input sockets.
