---
layout: article
title: Integrating Excel via ODBC
menu_title: Integrating Excel via ODBC
description: Integrating Excel via ODBC
lang: en
weight: 3100
ref: dat-3100
redirect_from:
  - /data_sources/31-en-ODBC-Excel.html
---

Details on how to install the bridge can be found [here](/administration/01-en-install.html) and further information on the bridge data source [here](/data_sources/14-en-peakboard-bridge.html).

The following screenshot shows the bridge data source. The URI of the bridge server must be entered at the address. Usually this is in the form `tcp://<MyBridgeServer>:2501`. The port only needs to be specified if it differs from the default value 2501.

![ODBC login mask](/assets/images/data-sources/odbc-excel/odbc_form.png)

In the Data Source Type selection box, the connection is selected via an ODBC request.
In order for the ODBC request to be executed, the Excel file must first be created as the ODBC data source. To do this, the ODBC data source administrator is opened in the 32-bit version and a new system data source is created under System DSN, as shown in the screenshot below. The desired .xls Excel file is selected as the workbook and, if the file is to be written back afterwards, the check mark in Read only is removed.

![ODBC Data Source](/assets/images/data-sources/odbc-excel/odbc.png)

Back in Designer, the system DSN name is used as the connection string as follows:

```
DSN=myDsn;Uid=myUsername;Pwd=;
```

In the example, the connection string is, because no password or user was assigned, as follows:

```
DSN=Peakboard Excel Test 32;
```

Before the data can be loaded, a suitable load command must be formulated. In Excel, the reference to the corresponding spreadsheet is made via [MyTable$] and has the following form:

```
SELECT * FROM [MyTable$]
```

Afterwards a charging interval can be assigned and the data can be loaded via Load data. Finally, everything is confirmed with OK.

The Excel file is now connected via the ODBC interface and can be used like any other data source.

How data can be written to Excel with this connection can be found [here](/scripting/Samples/12-de-excel.html).