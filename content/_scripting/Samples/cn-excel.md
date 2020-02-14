---
layout: article
title: Excel数据写入
menu_title: Write to Excel
description: 向Excel文件写入数据
lang: cn
weight: 1200
ref: scr-1200
redirect_from:
  - /scripting/Samples/12-cn-excel.html
---

如需向Excel写入数据，必须通过ODBC请求将相应的.xls文件整合为bridge数据源。详细步骤请参见[此处](/data_sources/31-cn-ODBC-Excel.html)。

您可以使用以下脚本示例将数据写入Excel文件。Reload()指令可触发连接的数据源，使其即时重载。 

```lua
Data.MyOdbcExcelDatasource.ExecuteNonQuery('INSERT INTO [MyTable$] (Col1, [Col 2], [Col 3]) VALUES (15, 25, 35)')
Data.MyOdbcExcelDatasource.Reload()
```
该示例位于Peakboard Designer软件中的“模板”-> “脚本”，或者，您也可以通过该[链接](https://github.com/Peakboard/CoolStuff/raw/master/Scripts/WritetoExcel/WritetoExcel.pbmx)下载。