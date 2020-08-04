---
layout: article
title: XML
menu_title: XML
description: Information about XML Data in Peakboard
lang: en
weight: 800
ref: dat-800
redirect_from:
  - /data_sources/08-en-xml.html
---
This article explains how to use the data source for data in XML format. The exact specification and further information about XML can be found [here](https://de.wikipedia.org/wiki/Extensible_Markup_Language)

A nice example of XML data can be found at [this XML file](http://mysafeinfo.com/api/data?list=presidents&format=xml). 
It contains an example data set about the first 5 US presidents.

Now go to the Peakboard Designer, create a new board, and click on the [...] button (1) under Data in the left-hand side of the Explorer. 
Under "Add Data Source" (2) select XML as data source.

![image_1](/assets/images/data-sources/xml/xml-01.png)

In the mask for the configuration of the XML data source, a unique name for the data source must first be assigned (e.g. Presidents).
As "Source Type" select **URL** and then copy & paste the URL from above from your browser (1). 
The following source systems are currently available here:
* **URL**
**NetworkShareFile**
**NetworkShareFileDirect**
**File**

In this case you do not need authentication and therefore select the type **None** under "Authentication".
The XML data source currently supports the following types for authentication:
* **None**
**Basic**
**Bearer**
**OAuth **

Under "Specify" you can define the path with the [...] button (2).
Peakboard analyses the structure of the XML file and displays the tree of XML elements. 
Depending on which element you have selected, all attributes that are located on or below the selected element are displayed below. 
Some elements we do not need later on. 
Here you can uncheck the box and they will not appear at all. 
Especially with very complex XML files it is advisable to leave out all elements that you don't need (3).

![image_1](/assets/images/data-sources/xml/xml-02.png)

A click on OK transfers all values to the main mask. The correct configuration can be checked by clicking on Preview. Here the plausibility of the data can be checked again briefly and the data type can be changed if necessary.

![image_1](/assets/images/data-sources/xml/xml-03.png)