---
layout: article
title: Sharepoint List
menu_title: Sharepoint List
description: Information about the Sharepoint Lists Data Source in Peakboard
lang: en
weight: 1650
ref: dat-1650
redirect_from:
---

This page explains the individual features when accessing a sharepoint list. 
Under the following link you will find a tutorial on how to configure external data sources in general and how to connect them to peakboard elements:

[First steps with external data sources using the example of an XML data source](/tutorials/03-en-xml-daten.html)

The SharePoint data source can be coupled with both on-premise lists and cloud installations such as Office 365. 
Enter the site URL under **Sharepoint Site** and the technical name of the list under **List**.
**EMail** and **Password** are the usual access data. 
For **Sharepoint Installation**, Peakboard needs a note whether it is an on-premise or online installation.
**Load Data** shows preview data and determines the metadata for the columns. 
Please note that in addition to the pure user data, several metadata columns are also transmitted, e.g. the date of the last access, the name of the creator and many more. 
Depending on the application, these additional columns can be useful.
Once the metadata has been determined, the data source is available for use.

![Sharepoint list](/assets/images/data-sources/sharepointlist/sharepoint.png)