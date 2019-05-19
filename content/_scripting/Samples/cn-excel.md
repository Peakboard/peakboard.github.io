---
layout: article
title: Write to Excel
menu_title: Write to Excel
description: Write to Excel
lang: cn
weight: 1200
ref: scr-1200
redirect_from:
  - /scripting/Samples/12-cn-excel.html
---

To enable writing to Excel, the corresponding .xls file must be integrated as a bridge data source via an ODBC request. Instructions can be found [here](/data_sources/31-cn-ODBC-Excel.html).

The following script example allows to write values to Excel. With the help of a Reload() command, an immediate reload of the linked data source is triggered.

```lua
Data.MyOdbcExcelDatasource.ExecuteNonQuery('INSERT INTO [MyTable$] (Col1, [Col 2], [Col 3]) VALUES (15, 25, 35)')
Data.MyOdbcExcelDatasource.Reload()
```
This example can be found in the Peakboard Designer under Templates -> Scripting, or can be downloaded via this [Link](https://github.com/Peakboard/CoolStuff/raw/master/Scripts/WritetoExcel/WritetoExcel.pbmx).