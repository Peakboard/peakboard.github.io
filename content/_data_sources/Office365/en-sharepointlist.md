---
layout: article
title: Office 365 Sharepoint List
menu_title: Office 365 Sharepoint List
description: Connect a SharePoint Lists data source (Microsoft 365) in the Peakboard Designer, including multi-tenant and single-tenant authorization.
lang: en
weight: 1180
ref: dat-2500
permalink: /data_sources/en-sharepointlist.html
redirect_from:
---

The [SharePoint Lists] data source connects Peakboard to lists from Microsoft 365 / SharePoint Online. Sign-in uses modern Microsoft authentication (Microsoft Entra ID, OAuth). You can choose between two authorization methods: a **multi-tenant** and a **single-tenant** application (see [Office 365 connection](/data_sources/en-office365-connection.html)).

For a general walkthrough of how to configure external data sources and link them to Peakboard elements, see:

[Getting started with external data sources using an XML data source as an example](/tutorials/03-en-xml-data.html)

## Add the data source

Right-click [Data] or click the [...] button and choose [Add data source]. Switch to the [Office 365] category (1) and select the [SharePoint Lists] data source (2).

![Add SharePoint Lists data source](/assets/images/data-sources/sharepointlist/sharepointlist-01-add.png)

## Configure the connection

Give the data source a name, then set up the [Connection]. Picking the authorization method, signing in with [Authorize] and reusing an existing connection work the same for all Office 365 data sources and are described once here: [Office 365 connection](/data_sources/en-office365-connection.html).

## Specify details

After signing in successfully, click [Retrieve SharePoint sites] to load the available SharePoint sites. Then pick the desired site under [SharePoint site (collection)] (1) and the list under [SharePoint Lists] (2).

The [Show user display name] checkbox returns the display names instead of the internal user IDs for person columns. Use the row limit to define how many rows are loaded at most, and the [Sort] section to set the sort column and direction.

![SharePoint Lists – pick site and list with data preview](/assets/images/data-sources/sharepointlist/sharepointlist-05-preview.png)

## Load data

Click [Load data] to generate a preview of the list data – on the right of the dialog you see the loaded rows with the list's columns (in the example above `id`, `Title`, `Description` and `Priority`). Besides the actual payload, meta columns are also delivered (e.g. creation date, creator, date of the last change), which you can use depending on your scenario.

Click [OK] to create the data source. It then appears in the Explorer under [Data] and can be linked to controls like any other data source.
