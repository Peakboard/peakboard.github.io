---
layout: article
title: Sharepoint List
menu_title: Sharepoint List
description: Information about the Sharepoint Lists Data Source in Peakboard
lang: en
weight: 2500
ref: dat-2500
redirect_from:
---

This page explains the individual features when accessing a Sharepoint list.
Under the following link you will find a tutorial on how to generally configure external data sources and link them to Peakboard elements:

[Getting started with external data sources using an XML data source as an example](/tutorials/03-en-xml-data.html).

You can pair the Sharepoint data source with lists from on-premise as well as cloud installations like Office 365.

<div class="box-tip" markdown="1">
**Note**.
When using two-factor authentication, you may encounter problems when connecting to the data source.
You can avoid this by using a user without two-factor authentication for the connection.
</div>

To add the data source, right click on [Data] or alternatively click on the [...] button and then select [Add data source] and [Sharepoint list] (1).

![Add Sharepoint list](/assets/images/data-sources/sharepointlist/en_sharepointlist-01.png)

Give the data source a name (1).

In the [Connection] section enter the page URL at [Sharepoint page (collection)] (2).
Email (3) and password (4) are your Sharepoint access data.
With the selection field [Sharepoint installation] (5) you define if it is an on-premise or online installation.

In the area [Specify details] you enter the name of the desired list (6) and define the maximum number of rows to be loaded (7).

By clicking on [Load data] (8) the corresponding data will be displayed as a preview.

Beside the pure data, meta columns are also transmitted, e.g. the date of the last access, the name of the creator and others.
Depending on the application, these additional columns can be useful.
When the metadata is determined, the data source is available for use.

![Configure Sharepoint list](/assets/images/data-sources/sharepointlist/en_sharepointlist-02.png)
