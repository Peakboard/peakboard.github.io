---
layout: article
title: Scripts in Dynamic Properties
menu_title: Scripts in Dynamic Properties
description: Scripts in Dynamic Properties
lang: en
ref: scr-2
---

Some properties have a small button with a C on it in the property grid (bottom right of the Designer) or in the text fields in the detail dialogs. This button opens a script editor. The script that runs there is a function that returns the value of the respective property. To stay with the example that determines the number of rows, this script first determines the number of records and stores it in a local variable, which is then returned by return.



![image_1](/assets/images/scripting/dynamic/dynamic01.png)



This results in the same behaviour as binding the script directly to the data source. However, the execution of the script is not bound to the refresh of the data source. Scripts for dynamic properties are called periodically. This is always done when activating the screen. This means either when a screen appears on a screen change, or – in the case of a board that consists of only one screen – after the duration has expired in seconds. Duration can be set as a property of any screen. The screenshot shows the default value of 10, which means that counting would take place every 10 seconds, regardless of whether the data source has been updated.



![image_1](/assets/images/scripting/dynamic/dynamic02.png)
