---
layout: article
title: JSON
menu_title: JSON
description: Information about JSON Data  in Peakboard
lang: en
ref: dat-06

---
This page explains the individual features when accessing JSON data sources from Peakboard. Under the following link you will find a tutorial on how external data sources are generally configured and linked to Peakboard elements:

[External Data Sources Using XML Data Source Example](/tutorials/03-en-xml-data.html)

If you don’t have a URL to a JSON data source at hand, but just want to try it out once, please use the following sample URL:

[http://mysafeinfo.com/api/data?list=presidents&format=json](http://mysafeinfo.com/api/data?list=presidents&format=json)

JSON is a hierarchical format. Since Peakboard data sources are always tabular, a section of the JSon file may have to be selected. It is possible to either reference an array or a complex object within the JSon source. In the case of an array, the target table in Peakboard has any number of columns, in the case of the object, exactly one row with all elements of the object as columns. To configure the JSon data source, give it a name and specify the URL to the source (for example, the URL from above). If you only want to use part of the JSon content, formulate a JPath statement in the JPath text field that points to the start element. An empty JPath starts the root element. User and password fields must be filled in if the source requires authentication.

To publish the metadata within Peakboard, click Load Columns. The table with the target columns is then filled according to the specifications. The Max Items field limits the number of rows to a certain value. Reload Interval specifies the number of seconds after which the data source should be refreshed. Adjust these values according to your application.

![JSON Add Data Dialojso](/assets/images/data-sources/json/json-add-data-dialog.png)

A click on Preview shows the raw data in tabular form. Here you can check the information again.

![JSON Preview Data](/assets/images/data-sources/json/json-preview-data.png)
