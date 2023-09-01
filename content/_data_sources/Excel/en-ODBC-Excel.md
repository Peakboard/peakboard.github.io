---
layout: article
title: Integrating Excel via ODBC
menu_title: Integrating Excel via ODBC
description: Integrating Excel via ODBC
lang: en
weight: 1510
ref: dat-1510
redirect_from:
  - /data_sources/31-en-ODBC-Excel.html
---

The following screenshot shows the ODBC data source dialog.

<div class="box-tip" markdown="1">
**Note**.
The ODBC connection to Excel is only possible with installed 64-bit ODBC driver or 64-bit Microsoft Office package!
</div>

![ODBC dialog](/assets/images/data-sources/odbc-excel/en_odbc-excel-01.png)

First give the data source a name (1).
To connect to an Exel file via ODBC you have to enter a connection string (2). You can find an overview on [connectionstrings.com](https://www.connectionstrings.com/excel/).

If you want to be able to change data within Excel, the addition [ReadOnly = 0] in the connection string is necessary.

```
Driver={Microsoft Excel Driver (*.xls, *.xlsx, *.xlsm, *.xlsb)};DBQ=C:\MyExcel.xlsx;ReadOnly = 0;
```

Before you can load the data you have to formulate a suitable loading statement (3). With Excel the reference to the corresponding spreadsheet is done via [MyTable$] and has the following form based on SQL:

```sql
SELECT [Table Column 1], [Table Column 2] FROM [MyTable$]
```

You can then specify a reload interval (4) and preview the data via [Load data] (5).

The Excel file is now connected via the ODBC interface and can be used like any other data source.
