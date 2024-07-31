---
layout: article
title: Changing Values in OPC-UA
menu_title: Changing Values in OPC-UA
description: Describes how to write values in OPC UA via script.
lang: en
weight: 175
ref: scr-175    
redirect_from:
---

# Script for Changing Values in OPC-UA

<div class="box-tip" markdown="1">
**Hint:**

If a shared OPC UA connection already exists, you can skip the next step and use the existing connection.
</div>

Changing values in an OPC-UA connection can be achieved via script. First, an OPC-UA data source must be created. The connection of this data source is then used to establish a connection with the OPC-UA server and change the values.

## Changing Values
The following script demonstrates how to change values via an OPC-UA connection. It assumes that the data source has already been created.

In the block, first select the connection to be used for connecting to the OPC-UA server. Then, specify the `NodeID` of the value to be changed and the new value along with its data type.

The block can be found under `Publish to external systems` -> `OPC-UA` -> `Set variable`.

![Changing Values in OPC-UA](/assets/images/scripting/Scripting_Beispiele/opc-ua/en-script-change-opc-ua-values.png)

If the modification is to be done in script mode, the following script can be used:

```lua
connections.getfromid('oi4AHK7cVuFfTFvjf/okKZLrNBc=').writevalue('ns=2;s=TestData_TestBool', true)
```