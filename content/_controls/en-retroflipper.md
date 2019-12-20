---
layout: article
title: Retro Flipper
menu_title: Retro Flipper
description: Information about Peakboard Designer Retro Flipper Control.
lang: en
weight: 666
ref: con-666
redirect_from:
---

The Retro Flipper Control is supposed to recreate an old scoreboard. 
It reminds of the display boards at airports or train stations.
The control behaves very similar to a text field.
The content of the Retro Flipper Control can be numbers as well as letters.
The number of available characters is defined in advance in the properties of the respective Retro Fliper Control. 
There you can also determine the speed with which the characters flip over when changing the text.

The writing is from left to right.
For elements with variable character length, for example a counter or countdown, the character length can be artificially extended to the set value using a script.
For this purpose leading zeros are appended to a variable which is linked to the control.

```Lua
-- Convert counter to string and add leading 0 until length of 3 digits is reached.
data.ticker = string.addleadingcharacters(string.tostring(data.Count),'0',3)
```

![image_1](/assets/images/Controls/RetroFlipper/retro01.png)
