---
layout: article
title: Button Script Example
menu_title: Button Script Example
description: Button Script Example
lang: en
weight: 800
ref: scr-800
redirect_from:
  - /scripting/Samples/08-en-Button.html
---
Under the Input submenu you will find controls that allow you to interact with the Peakboard Box.
Among them is the [Button Control](/controls/en-button.html). 

This script example explains how you can create an event for the Button Control and change the properties of other controls via events.

![image_1](/assets/images/scripting/Scripting_Beispiele/buttonscript/buttonscript2.png)

The main parts of the visualization are the Button Control and the Text Control. If you click on the Control button, the text in the Text Control is to be changed. 
Therefore it is important that the Text Control has a name, here Text. 

![image_2](/assets/images/scripting/Scripting_Beispiele/buttonscript/buttonscript3.png)

By double-clicking the button control, you can see the script that is executed when the button control event is triggered. 
This is the case if you click on the button control when the visualization is executed.

![image_3](/assets/images/scripting/Scripting_Beispiele/buttonscript/buttonscript1.png)

In this case the text of the Text Control is changed via "screens['Screen1'].Text.text". 
The 'Screen1' in the square brackets stands for the screen on which the control whose properties are to be changed is located. 
Text is the name of the control and .text stands for the property to be changed, here the text. 
Next, we need to define the new text. 
To do this, first enter a = character and then enclose the new text in quotation marks. 
This tells the editor that it is a string and not a command.