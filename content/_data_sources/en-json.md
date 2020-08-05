---
layout: article
title: JSON
menu_title: JSON
description: Information about JSON Data  in Peakboard
lang: en
weight: 600
ref: dat-600
redirect_from:
  - /data_sources/06-en-json.html
---
This page explains the individual features when accessing JSon data sources from Peakboard. Under the following link you will find a tutorial on how to configure external data sources in general and how to connect them to Peakboard elements:


[First steps with external data sources using the example of an XML data source](/tutorials/03-en-xml-daten.html)

If you don't have a URL to a JSon data source at hand, but just want to give it a try, please use the following example URL:



[http://mysafeinfo.com/api/data?list=presidents&format=json](http://mysafeinfo.com/api/data?list=presidents&format=json)


JSon is a hierarchical format. However, since peakboard data sources are always tabular, a section of the JSon file may have to be selected. Within the JSon source, it is possible to reference either an array or a complex object. In the case of an array, the target table in Peakboard has any number, in the case of the object exactly one row with all elements of the object as columns. To configure the JSon data source, give it a name and specify the URL to the source (e.g. the URL from above) If you want to use only part of the JSon content, formulate a JPath statement in the JPath text field that points to the start element. An empty JPath takes the root element as start. User and password fields must be filled in if the source requires authentication.

The field *Max. Rows* limits the number of rows to a certain value. *Reload Interval* specifies the number of seconds after which the data source should be refreshed. Adjust these values as appropriate for your application.

To make the data known within Peakboard, click on *Load Data*. 

Under Preview you will now see the loaded data.
Here you have the possibility to change the data type of the respective columns.

![JSON Add Data Dialog](/assets/images/data-sources/json/json-add-data-dialog.png)

