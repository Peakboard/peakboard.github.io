---
layout: article
title: CSV
menu_title: CSV
description: Information about CSV Data  in Peakboard
lang: en
weight: 300
ref: dat-300
redirect_from:
  - /data_sources/05-en-csv.html
---

This article explains how to use the data source for data in CSV format.
The exact specification and further information about CSV can be found [here.](https://en.wikipedia.org/wiki/Comma-separated_values)

A nice example of CSV data can be found at this URL: [http://mysafeinfo.com/api/data?list=presidents&format=csv](http://mysafeinfo.com/api/data?list=presidents&format=csv). It lists all American presidents.

In addition to the connection via URL, CSV files can also be included as a file via a network drive. A network share can be accessed directly specifying the desired domain user and password.

In addition, CSV files can also be stored as a resource directly in the project.
This can be useful, for example, if you simply want to "play" with the data offline at the beginning of a project, or if you don't want to decide on the concrete access method yet.

Set the property **Source Type** to the correspondingly desired access type (1). In the case of access via a URL, the classic web authentication methods can be used to gain access to protected files. Use property **Authentication Type** to select the desired method (2).

Normally, columns are separated by a comma in CSV.
If a different separator is desired, set the **Delimter** accordingly (3). To use the tabulator as a separator, enter `\t` in the field. **Skip Rows** (4) allows to skip a certain number of rows at the beginning of the file (e.g. because the file has a header to be ignored). **Max. Rows** (5) limits the number of rows.

Finally, click on **Load Data** on the right to call up a preview and display the metadata.
If desired, the datatype of each column can be changed (e.g. from String to Number for numeric numbers).

![CSV Data Dialog](/assets/images/data-sources/csv/csv_add-data-dialog_en.png)
