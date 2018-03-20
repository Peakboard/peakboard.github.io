---
layout: article
title: Peakboard Script Engine
menu_title: Peakboard Script Engine
description: Peakboard Script Engine
lang: en
ref: tut-4
---
One of the basic ideas behind Peakboard is that the end user does not have to be a programmer, as is the case with many other solutions. As many functions as possible should be done without using a script. Scripts are usually used when

*  Interactivity is required (e. g. for a touch screen)
*  Data should or must be prepared (e. g. filter or aggregation)
*  Texts should be formatted according to certain rules

The basic scripting language is LUA, and there are numerous documentation and tutorials on the Internet. A very nice documentation can be found on this website. In addition to the standard functionalities of LUA, however, the Peakboard-Designer also offers some extensions of this language. These can be found on the left side of the script editor.

Basically, Peakboard distinguishes between two concepts how scripts are used: Either with certain events or as dynamic property. This article shows exemplary both concepts.

# Scripts for events
We assume a simple data source, as used for example in this article. The aim is to display not only the connected TableGrid-Control with new data, but also the number of data records in a text field for each refresh of the data source (e. g. every 90 seconds, if it is set in this way). To do this, we need a text field on the panel next to the TableGrid-Control. This text field must be given a name, but there is a Name-Property as shown in the following screenshot.

![image_1](/assets/images/Tutorial/Script/TutorialScripting01.png)

The TableGrid-Control is simply bound to the data source, which automatically updates it (as shown in the above-mentioned Article ). So it is nothing to do with TableGrid-Control. To determine the number of records, however, we now need a script that runs every time the data source is updated. Right-click on the data source and select Edit Events to open the Script-Editor.

![image_1](/assets/images/Tutorial/Script/TutorialScripting02.png)

On the left-hand side you will find a list of all possible data elements that can be accessed. This includes, for example, the data sources and all controls that are placed on panels and have a name (without names the controls cannot be controlled via the script). The data source can be controlled by its name Data.Abfahrt. The property for the number of records is Count. The text field must be addressed using the screen specification. The text field has several properties, e. g. the font or the visibility or even the property Text, to set the content. This will result in the code line Screens[0].MeinTextfeld.Text = Data.Abfahrt.Count as shown in the screenshot.

![image_1](/assets/images/Tutorial/Script/TutorialScripting03.png)

This sets the text field each time the data source is updated. The next screenshot shows the preview.

![image_1](/assets/images/Tutorial/Script/TutorialScripting04.png)
