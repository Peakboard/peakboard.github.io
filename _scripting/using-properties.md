---
layout: article
title: Using Properties
menu_title:  Using Properties
description:  Using Properties
lang: en
ref: scr-6
---

This article describes the use of so-called properties. In the broadest sense, these are constant values that are mainly used in scripts. Such constants can be created either for a single visualization, or for the complete Box on which the visualization runs.

A good example of a visualization property would be a daily maximum value, for example the production quantity of 25 pieces. Then this value could be accessed at different places in the script. If it should change once, it only needs to be changed at a single point and not 100 places in the scripts.

A good example of a box property would be the name of the department. In this way, you could simply define a function in the script which ensures that when a visualization runs in a certain department, it behaves somewhat differently than in another department. But it is and remains the same visualization and can be created universally:”If department = ‘south’ then show only south numbers, otherwise show all numbers”.

To set properties of an individual visualization, click on the corresponding button in the menu bar. The values can then be maintained in the table:


![image_1](/assets/images/scripting/properties/Properties_01.png)




To set a property for a particular Box, you access the maintenance screen via the corresponding menu entry in the Manage dialog. Please note that the properties BoxID and License are system properties that should not be changed or deleted.


![image_1](/assets/images/scripting/properties/Properties_02.png)




Within the script, the package properties are specified with

`runtime.packageproperties.<MeinePackageProperty>``

and the Box properties are queried with:

`runtime.properties.<MeineBoxProperty>`

![image_1](/assets/images/scripting/properties/Properties_03.png)
