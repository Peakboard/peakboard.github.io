---
layout: article
title: CSV
menu_title: CSV
description: Information about CSV Data  in Peakboard
lang: en
weight: 500
ref: dat-500
redirect_from:
  - /data_sources/05-en-csv.html
---

This article explains how to use the data source for data in CSV format. 
The exact specification and further information about CSV can be found [here.](https://de.wikipedia.org/wiki/CSV_(file format))

A nice example of CSV data can be found at this URL: [http://mysafeinfo.com/api/data?list=presidents&format=csv](http://mysafeinfo.com/api/data?list=presidents&format=csv). 
It lists all American presidents.
In addition to the connection via URL, CSV files can also be included as a file via a network drive. A network share can be accessed either directly (specifying the desired domain user and password) or via the Peakboard Bridge. 
In addition, CSV files can also be stored as a resource directly in the packet. 
This can be useful, for example, if you simply want to "play" with the data offline at the beginning of a project, or if you don't want to decide on the concrete access method yet. 
Set the property **Source Type** to the correspondingly desired access type.

In the case of access via a URL, the classic web authentication methods can be used to gain access to protected files. 
Use property **Authentication** to select the desired method.

Normally, columns are separated by a comma in CSV. 
If a different separator is desired, set the **Delimter** accordingly.
 **Skip Rows** allows to skip a certain number of rows at the beginning of the file (e.g. because the file has a header to be ignored). 
 **Max Rows** limits the number of rows.

Finally, click on **Load Data** to call up a preview and display the metadata. 
If desired, the datatype of each column can be changed (e.g. from String to Number for numeric numbers).

![CSV Data Dialog](/assets/images/data-sources/csv/csv-add-data-dialog.png)
