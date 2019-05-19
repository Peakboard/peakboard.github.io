---
layout: article
title: 通过ODBC集成Excel
menu_title: 通过ODBC集成Excel
description: 通过ODBC集成Excel
lang: cn
weight: 3100
ref: dat-3100
redirect_from:
  - /data_sources/31-cn-ODBC-Excel.html
---

请参见[此处](/administration/01-cn-install.html)了解安装Bridge的详细信息，参见[此处](/data_sources/14-en-peakboard-bridge.html)了解有关Bridge数据源的信息。

下面的屏幕截图显示了Bridge数据源。必须在地址处输入Bridge服务器的URI。通常形式为`tcp://<MyBridgeServer>:2501`。如果端口与默认值2501不同，则只需要指定端口。

![ODBC login mask](/assets/images/data-sources/odbc-excel/odbc_form.png)

在“数据源类型”选择框中，通过ODBC请求选择连接。要执行ODBC请求，首先必须将Excel文件创建为ODBC数据源。要这样做，在32位版本中打开ODBC数据源管理员，并在系统DSN下创建新的系统数据源，如下面的屏幕截图所示。选择所需的Excel文件作为工作簿，如果之后要写回文件，去掉“只读”复选标记。

![ODBC Data Source](/assets/images/data-sources/odbc-excel/odbc.png)

回到Designer，系统DSN名称用作连接字符串，如下所示：

```
DSN=myDsn;Uid=myUsername;Pwd=;
```

在示例中，因为没有指定密码或用户，连接字符串如下所示：

```
DSN=Peakboard Excel Test 32;
```

在加载数据之前，必须制定适当的加载命令。在Excel中，引用相应电子表格是通过[MyTable$]进行的，格式如下：

```
SELECT * FROM [MyTable$]
```

然后，指定充电间隔，并且可以通过“加载数据”来加载数据。最后，单击“确定”进行确认。

Excel文件现在通过ODBC接口连接，且可以如任何其他数据源一样使用。可以在[此处](/scripting/Samples/12-cn-excel.html)了解如何使用ODBC连接将数据写入Excel。