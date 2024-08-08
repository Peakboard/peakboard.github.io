---
layout: article
title: Changing Values via Modbus
menu_title: Changing Values via Modbus
description: Describes how to write values via Modbus using a script.
lang: de
weight: 176
ref: scr-176    
redirect_from:
---

<div class="box-tip" markdown="1">
**Note:**

If a shared Modbus connection already exists, the next step can be skipped and the existing connection used.
</div>

Changing values via a Modbus connection is implemented through a script. First, a [Modbus data source must be created](/data_sources/de-modbus.html). The connection of this data source is then used, for example, to establish a connection with the control system and to change the values.

## Changing Values
The following script shows how values can be changed via a Modbus connection. It is assumed that the data source has already been created.

In the block, the data source to be used for the Modbus connection is first selected. The `Start Address` of the value to be changed and the new value can then be specified.

The block can be found under `Publish to external systems` -> `Modbus` -> `Write single coil`.

![Changing Values via Modbus](/assets/images/scripting/Scripting_Beispiele/modbus/en-script-change-modbus-values.png)

If the modification is to be made in script mode, the following script can be used:

```lua
connections.getfromid('J8L9n/gRsYtZHNkrombr0f7oD14=').writesinglecoil(0, true)
```