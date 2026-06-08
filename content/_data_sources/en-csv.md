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

This article explains how to use the data source for data in CSV format. The exact specification and further information about CSV can be found [here.](https://en.wikipedia.org/wiki/Comma-separated_values)

A nice example of CSV data can be found at this URL: [https://mysafeinfo.com/api/data?list=presidents&format=csv](https://mysafeinfo.com/api/data?list=presidents&format=csv). It lists all American presidents.

## Add the data source

Right-click on [Data] and choose [Add data source]. In the following dialog, select the data source [CSV] (1).

![Add CSV data source](/assets/images/data-sources/csv/csv-01-add.png)

## Configure the CSV data source

In addition to the connection via URL, CSV files can also be included as a file via a network drive. A network share can be accessed directly specifying the desired domain user and password. In addition, CSV files can also be stored as a resource directly in the project. This can be useful, for example, if you simply want to "play" with the data offline at the beginning of a project, or if you don't want to decide on the concrete access method yet.

Set the property [Source type] to the desired access type (1). In the case of access via a URL, the classic web authentication methods can be used to gain access to protected files. Use the property [Authentication Type] to select the desired method (2).

Normally, columns in CSV are separated by a comma. If a different separator is required, set the property [Delimiter] accordingly (3). To use the tabulator as a separator, enter `\t` in the field.

[Skip rows] (4) lets you skip a certain number of rows at the beginning of the file (for example because the file has a header to be ignored). [Max rows] (5) limits the number of rows that are read.

Finally, click on [Load data] on the right to call up a preview and display the metadata.

You cannot change the data type of a column inside the CSV dialog – CSV data is always read in as a string first. If you want to convert a column to a numeric type, for example, create a [Dataflow](/dataflows/en-edit-columns.html) and use the [Change column data type] step there.

![Configure the CSV data source](/assets/images/data-sources/csv/csv-02-config.png)
