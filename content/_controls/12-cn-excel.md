---
layout: article
title: 写入Excel
menu_title: 写入Excel
description: 写入Excel
lang: cn
ref: scr-12
---

要启用写入Excel，必须通过ODBC请求将相应的.xls文件集成为Bridge数据源。在[此处](/data_sources/31-cn-ODBC-Excel.html)可以找到说明。

下面的脚本示例可以将值写入Excel。借助Reload()命令，立即重新加载所链接的数据源。

```lua
Data.MyOdbcExcelDatasource.ExecuteNonQuery('INSERT INTO [MyTable$] (Col1, [Col 2], [Col 3]) VALUES (15, 25, 35)')
Data.MyOdbcExcelDatasource.Reload()
```