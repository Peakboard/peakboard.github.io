---
layout: article
title: Excel
menu_title: Excel
description: Information about Excel Data in Peakboard
lang: en
weight: 1500
ref: dat-1500
redirect_from:
  - /en/datasources-excel/
  - /data_sources/13-en-excel.html
  - /data_sources/en-excel.html
---

This page explains the features of accessing an Excel data source from Peakboard.
The following link contains a tutorial on how to configure external data sources in general and how to link them to Peakboard elements:

[Getting started with external data sources using an XML data source as an example](/tutorials/03-en-xml-data.html).

To add the data source, right click on [Data] or alternatively click on the [...] button and then select [Add data source] and [Excel] (1).

 ![Add data source](/assets/images/data-sources/excel/en_excel-01.png)

Give the data source a name (1) and select the source type (2) of your Excel file.
The following source types are supported:

* **URL**
* **Local network** - The file can be mounted directly from a network drive by entering a domain user and password. Note that the UNC drive paths must be used.
* **File** - The Excel file is added to the project as a resource and is part of the .pbmx file.
* **OneDrive** - Microsoft OneDrive (both the free offering, and as part of Office 365).
* **SharePoint**

<div class="box-tip" markdown="1">
**Important**.
Any Excel files you create as **file** will only contain the record that was current when the file was added to the resources. To display real-time data, you should choose one of the other options!
</div>

To connect to OneDrive or Sharepoint, you must first log in using the authorization button.
Then select the desired Excel file via the [...] button (3).
Using the reload interval (4) you can enter the time in seconds in which the data source should check whether new data is available.
In order to select the desired worksheet you have to load the data initially. To do this, click on the corresponding load button (5).
Now you can select the desired worksheet via the [Worksheet] drop-down (6).
By default, the data in the respective worksheet is simply starting from the first cell in the upper left corner and [Select all] (7) is selected. If this is not the case for you, you can enter a [Range] (8) in which Peakboard should search for the data (e.g. from cell B2 to H23, then B2:H23 would be entered here).
[Column names in first row] means that the first row of the Excel file is used for naming the columns.
Otherwise generic column headings are formed (Column0, Column1, etc.).
[Switch rows and columns] allows you to transpose the Excel data with just one click.

Click on [Load data](9) to preview the data.

![Excel Dialog](/assets/images/data-sources/excel/en_excel-02.png)

By default all data is loaded from Excel with the data type [string].
In the preview window you can change the data type (1).

![Change data type](/assets/images/data-sources/excel/en_excel-03.png)
