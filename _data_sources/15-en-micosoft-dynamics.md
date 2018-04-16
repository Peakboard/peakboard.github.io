---
layout: article
title: Microsoft Dynamics NAV
menu_title: Microsoft Dynamics NAV
description: Information about Microsoft Dynamics NAV Data in Peakboard
lang: en
ref: dat-15
---

This page explains the individual features when accessing the Dynamics NAV data source from Peakboard. Under the following link you will find a tutorial on how external data sources are generally configured and linked to Peakboard-Elements:

Getting Started with External Data Sources Using the Example of an XML Data Source

From a technical point of view, OData is the best protocol for accessing data from Microsoft Dynamics NAV – hereinafter referred to as NAV. First of all, some preparations have to be done on the NAV side. The data query is based on a query that must be created in the NAV development environment. How to do this exactly would break the content of this page. You can find details in the [NAV help.](https://docs.microsoft.com/en-us/previous-versions/dynamicsnav-2016/hh165526(v=nav.90))

In the following, we assume that the query is available as shown in the screenshot. It makes strategic sense to design the query in such a way that the data looks as it should look later on. Particularly with regard to the selection of columns, the aggregation level and the filter. The better the query is designed in this respect, the easier it is to integrate it into the visualization.

![image_1](/assets/images/Data_Sources/Micosoft_Dynamics_NAV/datenquellennav01.png)

A web service is now required around the query in order to be able to query it externally. This can be done either in the normal NAV client or as shown in the screenshots in the web client. Click the search box, browse for Web service to open the dialog.

![image_1](/assets/images/Data_Sources/Micosoft_Dynamics_NAV/datenquellennav02.png)

Create a new entry with object type Query and choose the query that you created previously for Object ID. Finally, give the service a meaningful name and save the whole thing.

![image_1](/assets/images/Data_Sources/Micosoft_Dynamics_NAV/datenquellennav03.png)

Back in the Peakboard-Designer, Add Dynamics NAV Datasource creates a new data source. Next to the name, the most important information is the URL to the OData endpoint. This depends on how the NAV landscape is structured and how many companies work on it. As a rule, it should look like shown in the example screenshot: `http://xxx.mynavserver:7048/NAV/ODATA/`
The dialog for entering user name and password can be accessed via the small button with the three dots.

![image_1](/assets/images/Data_Sources/Micosoft_Dynamics_NAV/datenquellennav04.png)

A click on the Load button fills the Combo Box with all web services. Once a Web service is selected, the metadata (columns) is displayed in the table below.

![image_1](/assets/images/Data_Sources/Micosoft_Dynamics_NAV/datenquellennav05.png)
