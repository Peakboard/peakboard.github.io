---
layout: article
title: Signal Block
menu_title: Signal Block
description: Information über Peakboard Designer Signal Block Control.
lang: de
weight: 690
ref: con-690
redirect_from:
---


The Signal Block can be placed on the drawing area like all other controls by dragging and dropping.
In addition to the [General Properties](https://help.peakboard.com/controls/en-general-properties.html) further design features can be adjusted in the properties of the Signal Block.


![image_1](/assets/images/Controls/Signal-Block/signalblock1.png)


The real benefit of the Signal Block is the easy to create *Signal Rules*. To do this, the signal block must first be connected to a data source by clicking on the concatenation symbol.

![image_1](/assets/images/Controls/Signal-Block/signalblock2.gif)

Afterwards the *Edit Signals* mask can be opened via the *Signal Rules*. (1)
In it, rules for signal switching can be added and changed.
Besides the color of the signal (2), the basic state of the signal can be defined. There is a choice between On, Off and Flashing. (3) 


![image_1](/assets/images/Controls/Signal-Block/signalblock3.png)

 
A click on the gear wheel (4) opens the mask in which the rules for the respective colour can be set.
The available data are those that were previously selected as data source.  
Depending on the type of data, you must now first select between String, Number and Boolean. (5)
This value can then be compared with your own input and comparison operators. (6)  
Then you have to choose what should happen if the rule applies. Here you can again choose between color on, off and flashing. (7)  
A rule can be deleted or moved in its priority using the trashcan and the arrows. (8)  


![image_1](/assets/images/Controls/Signal-Block/signalblock4.png)


The following figure shows a control circuit for the color red of a traffic light where the color is written into a column via a [Dataflow](https://help.peakboard.com/dataflows/en-getting-started.html) .


![image_1](/assets/images/Controls/Signal-Block/signalblock6.png)


After confirming the rules you will be taken back to the *Edit Signals* mask. Here you can also delete or move single colors.


![image_1](/assets/images/Controls/Signal-Block/signalblock7.png)


The following figure shows the different ways of designing the signal block:


![image_1](/assets/images/Controls/Signal-Block/signalblock5.png)