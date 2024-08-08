---
layout: article
title: Changing Values in a Rockwell Controller
menu_title: Changing Values in a Rockwell Controller
description: Describes how values in a Rockwell controller can be written using a script.
lang: de
weight: 177
ref: scr-177    
redirect_from:
---

<div class="box-tip" markdown="1">
**Note:**

If a shared Rockwell connection already exists, the next step can be skipped and the existing connection used.
</div>

Changing values via a Rockwell connection is implemented through a script. First, a [Rockwell data source must be created](/data_sources/de-rockwell.html). The connection of this data source is then used, for example, to establish a connection with the control system and change the values.

## Changing Values
The following script shows how values can be changed via a Rockwell connection. It is assumed that the data source has already been created.

In the block, the data source to be used for communication is first selected. Then, the `Program` in which the value to be changed is located is selected. The `tag` marks the value that should be changed. Finally, the `value` is given.

The block can be found under `Publish to external systems` -> `Rockwell` -> `Write tag`.

![Changing Values in a Rockwell Controller](/assets/images/scripting/Scripting_Beispiele/rockwell/en-script-change-rockwell-values.png)

If the modification is to be made in script mode, the following script can be used:

```lua
connections.getfromid('exAyTzOahV0aDY14IFm65FoZTVY=').writetag('MainProgram', 'Int', 100)
```