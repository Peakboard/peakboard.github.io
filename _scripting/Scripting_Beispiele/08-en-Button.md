---
layout: article
title: Button Script Example
menu_title: Button Script Example
description: Button Script Example
lang: en
ref: scr-08
---
Under the sub-menu item Input you will find controls that allow you to interact with the Peakboard Box.
Among them also the button Control, this can execute a script by a simple click.

![image_1](/assets/images/scripting/Scripting_Beispiele/Controls_Input.png)

In the following a script is explained, which writes a text into a text field after a button has been clicked:

```lua
screens['Screen1'].Text.text = 'Hello World'

```

It can be seen that the text field "Text" on the "Screen1" is addressed after clicking the button and by which.text at the end defines that the text should be changed.
The text in the quotation marks is then entered in the text field.

![image_1](/assets/images/scripting/Scripting_Beispiele/ButtonSkript.png)

This example can be found in the Peakboard Designer under Templates -> Scripting, or can be downloaded via this[Link](https://github.com/Peakboard/CoolStuff/raw/master/Scripts/ButtonScriptExample/ButtonScriptExample.pbmx).