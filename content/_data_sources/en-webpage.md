---
layout: article
title: Webpage
menu_title: Webpage
description: Information about Webpage Data in Peakboard
lang: en
weight: 2700
ref: dat-2700
redirect_from:
  - /data_sources/09-en-webpage.html
---

This page explains the features of accessing a table contained on a web page. Under the following link you will find a tutorial on how to generally configure external data sources and link them to Peakboard elements:

[Getting started with external data sources using an XML data source as an example](/tutorials/03-en-xml-data.html).

If you don't have a URL to a suitable web page at hand, but just want to try things out, use the following example URL. It points to a web page with a table and some charts. Only the table with the current metal prices is interesting for this article. Other tables should be filtered out.

[https://www.dailymetalprice.com/](https://www.dailymetalprice.com/metalpricewidget.php)

To add the data source for web page tables right click on [Data] or alternatively click on the [...] button and select [Add data source] and [Web page table] (1).

Peakboard will search for HTML tables in the web page in question. This works especially well if the HTML is syntactically correct. If you are trying to access a web page where the data is not found correctly or is incomplete, check the HTML syntax.

Give the data source a unique name (1) and enter the URL (2). If the website requires authentication (3) you can enter it as well.
All tables on the website have either a name or a number. To select the desired table you have to click on the load icon (1), then you can select the different recognized tables in the drop-down (2).
At this point you can try which table is the correct one. In case the table has no HTML headers (`<th>` tag), the headers might be in the first table row. If this is the case, activate the corresponding checkbox (3). With a click on [Load data] (4) you can display the preview of the selected table.

![Configure webpage table](/assets/images/data-sources/webpage/en_webpage-02.png)

The metadata (columns and their data type) will be copied. You can specify the time for automatic refreshing of the data source in seconds and limit the maximum number of rows if needed. If the source changes for some reason, you can restart the metadata retrieval manually by clicking the load icon. The saved metadata will then be deleted and redetermined.
