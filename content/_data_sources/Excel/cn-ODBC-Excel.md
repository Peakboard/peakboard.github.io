---
layout: article
title: 通过ODBC集成Excel
menu_title: 通过ODBC集成Excel
description: 通过ODBC集成Excel
lang: en
weight: 1510
ref: dat-1510
redirect_from:
  - /data_sources/31-cn-ODBC-Excel.html
---
The following screenshot shows the ODBC data sources dialog.

> ## Note
> The ODBC connection to Excel is only possible with installed 64-bit ODBC driver or 64-bit Microsoft Office package!

![ODBC login screen](/assets/images/data-sources/odbc-excel/odbc_form.png)

If it should be possible to change data within Excel, the addition [ReadOnly = 0] in the connection string is necessary.

```
Driver={Microsoft Excel Driver (*.xls, *.xlsx, *.xlsm, *.xlsb)};DBQ=C:\MyExcel.xlsx;ReadOnly = 0;
```


Before the data can be loaded, a suitable load command must be formulated. In Excel, the reference to the corresponding table sheet is made via [MyTable$] and has the following form based on SQL:

```
SELECT [Table Column 1], [Table Column 2] FROM [MyTable$]
```

Afterwards a load interval can be assigned and the data can be loaded via Load data. Finally, everything is confirmed with OK.

The Excel file is now connected via the ODBC interface and can be used like any other data source.

How data can be written to Excel with this connection can be found [here](https://templates.peakboard.com/Script-Example-Writing-To-Excel/index).