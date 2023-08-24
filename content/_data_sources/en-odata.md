---
layout: article
title: OData
menu_title: OData
description: Information about OData in Peakboard
lang: en
weight: 700
ref: dat-700
redirect_from:
  - /data_sources/07-en-odata.html
---

This page explains the features when accessing OData data sources from Peakboard. Under the following link you will find a tutorial on how to configure external data sources in general and how to couple them to Peakboard elements:

[External dynamic data sources illustrated by an XML data source example](/data_sources/en-xml-data.html).

Add a new OData data source via a right click on [Data], then [Add data source] and [OData] (1).

![Add OData](/assets/images/data-sources/odata/en_odata-01.png)

If you don't have a URL to an OData data source at hand, but just want to try things out, please use the following example URL. It points to the AdventureWorks database. This is a sample database from Microsoft. It contains various entity sets, such as a product catalog or sales figures.

[http://services.odata.org/AdventureWorksV3/AdventureWorks.svc](http://services.odata.org/AdventureWorksV3/AdventureWorks.svc)

![Odata dialog](/assets/images/data-sources/odata/en_odata-02.png)

OData is a standardized data exchange format. The example URL points to a small database whose entity sets you can load into the combo box (1) by clicking [Load] (2) after entering the URL (3). In case the OData request requires authentication, you can select and enter it with the corresponding drop-down (4). Give the data source an appropriate name.

Once you have chosen an entity set, the available entity properties (5) are automatically displayed for selection. In case you don't want to retrieve all data from the source, you can specify an OData filter in the corresponding text field (6). If you don't know exactly how an OData filter works, you can find a good introduction [at odata.org](https://www.odata.org/getting-started/basic-tutorial/#queryData).

With a click on [Load data](7) a test request is sent to the server and the data is prepared according to the specifications.

![OData preview](/assets/images/data-sources/odata/en_odata-03.png)
