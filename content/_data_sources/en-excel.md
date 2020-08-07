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
---
This page explains the individual features when accessing an Excel data source from Peakboard. 
Under the following link you will find a tutorial on how to configure external data sources in general and how to link them to Peakboard elements:

[First steps with external data sources using the example of an XML data source](/tutorials/03-en-xml-daten.html)

After you click Add Excel Data, a window opens. 
The dialog is divided into three areas - General, Specify and Preview.

Under General you have to give the data source a name and select the location (e.g. dropbox) where your Excel file can be found. 
The following storage locations are currently supported:

* **File** - The Excel file was previously added to the Peakboard Package as a resource and is part of the .pbmx-File
* **Dropbox**
* **GoogleDrive**
* **OneDrive** - Microsoft OneDrive (both the free offer and as part of Office 365)
* **SharePoint** 
* **PeakboardBridge** - The file is dragged from a network drive via the Peakboard Bridge. Further information about the Peakboard-Bridge can be found [here.](/administration/01-en-install.html)
* **LocalNetwork** - Peakboard 2 boxes only - The file can be mounted directly from a network drive by entering a domain user and password. Please note that the UNC drive paths must be used.

> ## IMPORTANT!
>
> Excel files, which were created as **File**, contain only the data set which was current when the file was added to the resources.
> To display real-time data, you should choose one of the other options!

For the cloud connection, you must first log in to the cloud provider via the "Authorize Button" and then select the corresponding Excel file via the ... button under Document.

In the input window "Reload Interval" the time in seconds is entered in which the data source should check if new data is available.

Under "Specify" you select the desired spreadsheet via the drop-down menu.
By default, the data in the respective spreadsheet is simply starting from the first cell in the upper left corner (Select All). 
If this is not the case, you can enter a range in the "Range" field in which Peakboard should search for the data (e.g. from cell B2 to H23, then B2:H23 would have to be entered here).
"Column names in first row" means that the first row of the Excel file will be used for naming the columns.
Otherwise, generic column headings are formed (Column0, Column1, etc.). 
"Switch Rows and Columns" allows you to transpose the Excel data with just one click.
Max. rows" allows you to limit the number of rows loaded.

 ![Add Excel Data Dialog](/assets/images/data-sources/excel/add-excel-data.png)

 Click on the "Load Data" button under Preview. 
 The data is then loaded from the Excel file according to the specifications and displayed in the preview window. 
 By default, all data is loaded from Excel with the data type "String".
 In the preview window you can now change this data type to the desired data type "Number" or "Boolean".