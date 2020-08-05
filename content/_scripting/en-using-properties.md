---
layout: article
title: Using Peakboard Box Properties
menu_title:  Using Peakboard Box Properties
description:  Using Peakboard Box Properties
lang: en
weight: 600
ref: scr-600
redirect_from:
  - /scripting/06-en-using-properties.html
---
This article describes the use of so-called properties. In the broadest sense, these are constant values that are mainly used in scripts. Such constants can be created for the complete Peakboard Box on which the visualization is running.

A good example for a box property would be the name of the department. So you could simply add a function in the script that makes sure that when a visualization is running in a certain department, it behaves a bit differently than in another department. But it is and remains the same visualization and can be created universally: *"If department = 'South' then show only south numbers, otherwise show all numbers"*.

To set a property for a specific Box, you can access the maintenance screen via the corresponding menu item in the Manage dialog box. 

## Warning
>
> Please note that the properties *BoxID* and *License* are system properties that should not be changed or deleted.


![image_1](/assets/images/scripting/properties/Properties_02.png)

Within the script, the Box properties are defined with

`runtime.properties.<MyBoxProperty>`

is queried:

![image_1](/assets/images/scripting/properties/Properties_03.png)
