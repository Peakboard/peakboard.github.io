---
layout: article
title: External Data Sources Using XML Data Source Example
menu_title: External Data Sources Using XML Data Source Example
description: External Data Sources Using XML Data Source Example
lang: en
ref: tut-03
redirect_from:
  - /tutorials/03-en-xml-daten.html
---
In the two introductory tutorials, only static content was used in the visualization. But all this only becomes really exciting when the design displays dynamic data. Basically, Peakboard distinguishes between two main concepts for embedding dynamic content:

1. The data comes from an external source and needs only to be integrated into a panel. This is the case, for example, if you integrate an external website completely or in parts. Or use a BI tool such as Power BI, QlikView, Tableau or similar and leave the preparation of the data to this BI tool. Peakboard then functions as a kind of display program and the respective pre-system takes care of the visual processing.

2. The data comes as raw data from an external source. Such sources can be XML, JSon, a database or a social media feed, for example. Here, only the pure data is transported and the visualization takes place directly on Peakboard. For this purpose, visual controls are available to display the data nicely, e. g. charts, tables, etc.

This tutorial only deals with the second option. Basis shall be an XML data source. Have a look at the following XML file. It contains all current departures from Stuttgart main station in real time and is provided by Deutsche Bahn:

[https://open-api.bahn.de/bin/rest.exe/departureBoard?authKey=DBhackFrankfurt0316&lang=de&id=008000096](https://open-api.bahn.de/bin/rest.exe/departureBoard?authKey=DBhackFrankfurt0316&lang=de&id=008000096)

Now go to the Peakboard-Designer, create a new board and click with the right mouse button in the upper left corner on the data node of the Package-Explorer. From the menu, select XML as the data source.

![image_1](/assets/images/Tutorial/XML/TutorialExterneDatenquelle01.png)

In the mask for configuring the XML data source, you must first assign a unique name for the data source (for example, Abfahrt), then use Copy & Paste to copy the URL from above as the URL and click Load. Peakboard analyzes the structure of the XML file and displays the tree of XML elements. Depending on which element you have selected, all attributes that are at or below the selected element are displayed below. We do not need certain elements later on. Here you can remove the check mark, then they do not even appear in the further process. Especially with very complex XML files it is advisable to omit all elements for which you have no use early on.

![image_1](/assets/images/Tutorial/XML/TutorialExterneDatenquelle02.png)

A click on OK will transfer all values to the main screen. The correct configuration can be checked by clicking on Preview. The plausibility of the data can also be checked briefly here.

![image_1](/assets/images/Tutorial/XML/TutorialExterneDatenquelle03.png)

Back on the Designer’s main window we can now take care of the visualization. The data should simply be displayed in a table. To do this, drag a table grid control from the toolbox onto the panel and adjust the size of the table element using the guidelines so that it fills the entire panel to a proper distance from the edge.

![image_1](/assets/images/Tutorial/XML/TutorialExterneDatenquelle04.png)

Next we have to connect the table element to the data source. For this purpose, there is the property “Source” in the attribute window at the bottom right. A click on the three points brings us to the dialog for selecting the data source. There is currently only one data source, our XML file called Abfahrt. We select them and confirm with OK.

![image_1](/assets/images/Tutorial/XML/TutorialExterneDatenquelle05.png)

The table element already shows all columns on the panel that our data source has. But not very nice, so we open the following configuration dialog by double-clicking on the table. All columns of the data source are listed there. In the Caption column, please enter better descriptive names for the respective columns, e. g. “Zugtyp” instead of “type” or “Zeit” instead of “time” etc. By default, the column Width contains an asterisk. Asterisk means that the total available width of a table is distributed evenly across all asterisk columns. You could write a fixed number (e. g. 50 for a fixed width of 50 pixels) or the keyword “Auto”. This means that the column is rendered as wide as the widest data element, that is, an optimal width.

![image_1](/assets/images/Tutorial/XML/TutorialExterneDatenquelle06.png)

Back in the Designer please click on Preview. The result should look like the following screenshot. The table is filled dynamically and refreshed every 90 seconds according to the specifications in the data source.

![image_1](/assets/images/Tutorial/XML/TutorialExterneDatenquelle07.png)
