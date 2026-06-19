---
layout: article
title: OData
menu_title: OData
description: Connect Peakboard to an OData service and read its entities as a data source
lang: en
weight: 1700
ref: dat-1700
redirect_from:
  - /data_sources/07-en-odata.html
---

OData is a standardized REST-based protocol for exchanging data. With the OData data source you can connect Peakboard to any OData service and read one of its entities as a table. For a general introduction on how to configure external data sources and bind them to controls, see the following tutorial:

[External dynamic data sources illustrated by an XML data source example](/data_sources/en-xml-data.html).

## Add the data source

Add a new OData data source via a right click on [Data], then [Add data source]. Select the [OData] tile (1) — you will find it in the [Generic] category or through the search box.

![Add OData](/assets/images/data-sources/odata/odata-01-add.png)

If you don't have your own OData service at hand and just want to try things out, you can use Microsoft's public TripPin sample service. It exposes several entities, such as `People`, `Airports` and `Airlines`:

[https://services.odata.org/TripPinRESTierService/](https://services.odata.org/TripPinRESTierService/)

## Configure the connection and entity

First give the data source a name (1). Under [Connection], enter the service address in [Base URL] (2). Peakboard automatically separates the service path into the [URL path] field (3) in the [Request] section. If the service requires authentication, choose the method in [Authentication Type] (4) — for the public sample service this stays on [None].

Click [Load] (5) to read the available entity sets from the service, then pick the one you want in [Entity sets] (6) — in this example [Airlines]. The [Entity properties] drop-down (7) lets you choose which columns to retrieve; here the entity provides `AirlineCode` and `Name`. If you don't want to retrieve all rows, you can enter an OData filter in [Filter string] (8). If you are not sure how an OData filter works, you can find a good introduction [at odata.org](https://www.odata.org/getting-started/basic-tutorial/#queryData).

A click on [Load data] sends a test request to the server and shows a preview on the right — here the airlines returned by the service, each with its `AirlineCode` and `Name`. Confirm with [OK] to add the data source; it then appears in the Explorer under [Data] and can be bound to controls like any other data source.

![Configure the OData connection and load the preview](/assets/images/data-sources/odata/odata-02-configure.png)
