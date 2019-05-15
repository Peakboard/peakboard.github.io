---
layout: article
title: Key Input Script Example
menu_title: Key Input Script Example
description: Key Input Script Example
lang: en
weight: 1100
ref: scr-11
---
This scripting example explains how to use keyboard commands to control the Peakboard Box.


![image_1](/assets/images/scripting/Scripting_Beispiele/KeyInputs.png)

In general, keystrokes can be processed via KeyPressed.
The script behind it is executed every time a key is clicked on the keyboard.

```lua
data.KeyInputs[0].Text = 'vkeys.' .. string.tostring(e.key)

```

In my example, a line in the table is to be filled with the text transmitted by the key pressed.
For this I use the e.key command which contains the text of the pressed key.
This must then only be converted to a string and can then be entered in the table.

This example can be found in the Peakboard Designer under Templates -> Scripting, or can be downloaded via this [Link](https://github.com/Peakboard/CoolStuff/raw/master/Scripts/Key%20Inputs/KeyInputs.pbmx).