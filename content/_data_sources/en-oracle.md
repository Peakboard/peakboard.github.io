---
layout: article
title: Oracle
menu_title: Oracle
description: Oracle data source in Peakboard
lang: en
weight: 1300
ref: dat-1300

---
This page explains the individual features when accessing an Oracle data source. Under the following link you will find a tutorial on how to configure external data sources in general and how to link them to peakboard elements:

[First steps with external data sources using the example of an XML data source](/tutorials/03-en-xml-daten.html)

For access to the Oracle database, the classic access parameters are required: 

* **Hostname / IP** - The address of the Oracle server (either as name or IP address) 
* **Port** is the network port under which Oracle can be reached
* **SID** is the Oracle system ID
* **User Name** and **Password** are the credentials for access


In certain cases it may be necessary to send other information to the Oracle driver in addition to the classic parameters described above. In this case, please click on the **Custom** tab. In the text field you can directly enter an individual connection string. You can find the structure of the connection string in the Oracle help or this [link](https://www.connectionstrings.com/oracle/).

Enter the desired Oracle SQL statement in the **Statement** text field. For the data source to function correctly, the SQL statement must always return a tabular result set.

Oracle Data Surce Dialog](/assets/images/data-sources/oracle/add-oracle-data.png)

Finally click on Load Data. The data is then loaded from the Oracle database as specified and displayed in the preview window. In addition, the metadata (that is, the list of columns) is refreshed and displayed in the Columns table. From now on, the source can be used. Please note that the Oracle data types are all converted into the three general Peakboard data types String, Number and Boolean.
