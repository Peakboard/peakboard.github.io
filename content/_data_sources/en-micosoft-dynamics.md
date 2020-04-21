---
layout: article
title: Microsoft Dynamics NAV
menu_title: Microsoft Dynamics NAV
description: Information about Microsoft Dynamics NAV Data in Peakboard
lang: en
weight: 1800
ref: dat-1800
redirect_from:
  - /data_sources/15-en-microsoft-dynamics.html
---

This page explains the individual features when accessing the Dynamics NAV data source from Peakboard. Under the following link you will find a tutorial on how external data sources are generally configured and linked to Peakboard-Elements:

[Getting Started with External Data Sources Using the Example of an XML Data Source](/tutorials/03-en-xml-data.html)

From a technical point of view, OData is the best protocol for accessing data from Microsoft Dynamics NAV – hereinafter referred to as NAV. First of all, some preparations have to be done on the NAV side. The data query is based on a query that must be created in the NAV development environment. How to do this exactly would break the content of this page. You can find details in the [NAV help.](https://docs.microsoft.com/en-us/previous-versions/dynamicsNAV-2016/hh165526(v=NAV.90))

In the following, we assume that the query is available as shown in the screenshot. It makes strategic sense to design the query in such a way that the data looks as it should look later on. Particularly with regard to the selection of columns, the aggregation level and the filter. The better the query is designed in this respect, the easier it is to integrate it into the visualization.

![Object Designer](/assets/images/data-sources/micosoft-dynamics-nav/datenquellen-nav-01.png)

A web service is now required around the query in order to be able to query it externally. This can be done either in the normal NAV client or as shown in the screenshots in the web client. Click the search box, browse for Web service to open the dialog.

![Microsoft Dynamics NAV Search](/assets/images/data-sources/micosoft-dynamics-nav/datenquellen-nav-02.png)

Create a new entry with object type Query and choose the query that you created previously for Object ID. Finally, give the service a meaningful name and save the whole thing.

![New Web Services](/assets/images/data-sources/micosoft-dynamics-nav/datenquellen-nav-03.png)

Back in the Peakboard-Designer, Add Dynamics NAV Datasource creates a new data source. Next to the name, the most important information is the URL to the OData endpoint. This depends on how the NAV landscape is structured and how many companies work on it. As a rule, it should look like shown in the example screenshot: `http://xxx.myNAVserver:7048/NAV/ODATA/`
The dialog for entering user name and password can be accessed via the small button with the three dots.

![Edit Credentials Dialog](/assets/images/data-sources/micosoft-dynamics-nav/datenquellen-nav-04.png)

A click on the Load button fills the Combo Box with all web services. Once a Web service is selected, the metadata (columns) is displayed in the table below.

![Load Data](/assets/images/data-sources/micosoft-dynamics-nav/datenquellen-nav-05.png)
