---
layout: article
title: Peakboard Bridge
menu_title: Peakboard Bridge
description: Information about Peakboard Bridge Data in Peakboard
lang: en
ref: dat-14
---
One of the most important concepts of Peakboard is that the Peakboard-Box is to be regarded as self-sufficient and, in contrast to other visualization concepts without servers or other middleware, communicates directly with all connected upstream systems. In certain cases, this is not entirely sustainable. In the case of Oracle and general ODBC accesses, Peakboard needs the so-called Peakboard Bridge. This is a lean Windows service that is usually installed on a server with minimal resource requirements. The Peakboard Box then accesses the bridge and this accesses the database. As of spring 2018 we are working hard to abolish the Bridge as a necessity in further development. Until then, however, it is still needed.

Details of how to install the Bridge can be found [here](/administration/01-en-install.html).

The following screenshot shows the Bridge data source. For the address, the URI of the Bridge server must be entered. Usually this is in the form `tcp: //<MyBridgeServer>: 2501` The port must only be specified if it differs from the default value 2501.

In the Data Source Type selection box, specify whether you want to access Oracle directly or using any (non-Oracle)ODBC driver (e. g. for MySQL, Informix, etc.). The connection string must be adjusted accordingly. The screenshot shows a typical Oracle connection string. If you don’t know exactly how the connection string is formed, click on the small button with the three dots to get input help.

You can formulate the SQL statement in such a way that it is understood by the target system. Execute the statement with “Load” to retrieve the metadata (columns and their data type). After that, the data source is available as usual.

![Bridge Data Dialog](/assets/images/Data_Sources/Peakboard_Bridge/DataSourceBridge01.png)
