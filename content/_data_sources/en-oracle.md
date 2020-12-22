---
layout: article
title: Oracle
menu_title: Oracle
description: Oracle data source in Peakboard
lang: en
weight: 1300
ref: dat-1300
---
The following tutorial describes how you can configure external data sources and link them to peakboard elements:

[First steps with external data sources using the example of an XML data source](/tutorials/en-xml-data.html)

For access to the Oracle database, the classic access parameters are required: 

* **Hostname / IP** - The address of the Oracle server (either as name or IP address) 
* **Port** is the network port under which Oracle can be reached
* **SID** is the Oracle system ID
* **User Name** and **Password** are the credentials for access


In some cases, further information is required in addition to the access parameters described above. 
In this case, please click on the **Custom** tab. 
In the text field an individual connection string can be entered directly. The structure of the connection string can be found in the Oracle help or this [link](https://www.connectionstrings.com/oracle/).

Enter the desired Oracle SQL statement in the **Statement** text field. For the data source to function correctly, the SQL statement must always return a tabular result set.

![Oracle Data Source Dialog](/assets/images/data-sources/oracle/add-oracle-data.png)

Finally click on Load Data. The data is then loaded from the Oracle database as specified and displayed in the preview window. From now on, the source can be used. Please note that the Oracle data types are all converted into the three general Peakboard data types String, Number and Boolean.
