---
layout: article
title: ODBC
menu_title: ODBC
description: Information about ODBC data sources in Peakboard
lang: en
weight: 1400
ref: dat-1400
redirect_from:
---

This page explains the individual features when accessing any ODBC data source. 
Under the following link you will find a tutorial on how to configure external data sources in general and how to connect them to peakboard elements:

[First steps with external data sources using the example of an XML data source](/tutorials/03-en-xml-daten.html)

Before you use the ODBC data source, you must install the ODBC driver of the desired database on both your local computer and on the Peakboard box. 
To install on the box, you can either use a USB mouse and a USB keyboard to sit directly on the box, as if you were installing the driver software on a normal computer, or remotely via powershell.
If the ODBC access is done from many boxes, it makes sense to consider developing an [Extension](https://help.peakboard.com/data_sources/Extension/en-Extension.html) for the desired database. 
This can be faster in individual cases than rolling out the ODBC driver on many boxes.

To access the database via ODBC, the connection string must be formulated.
This can look very different. 
In the screenshot example, all access details are stored in a local DSN. 
This makes the connection string very simple, but requires that the DSN is also maintained on the box.
The SQL statement must be formulated according to the database. 
The button **Load Data** displays test data and loads the columns into the table. 
From now on the data source can be used in the usual way.

![odbc.png](/assets/images/data-sources/odbc/odbc.png)