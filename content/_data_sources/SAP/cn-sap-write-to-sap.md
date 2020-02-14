---
layout: article
title: SAP功能模块数据写入
menu_title: Writing to an SAP function module
description: 向SAP功能模块写入数据
lang: cn
weight: 20101
ref: dat-20101
---

SAP系统中的任何功能模块都可通过Peakboard调用，但需要启用功能模块的远程访问选项，这一点非常重要。 您可以使用Peakboard调用功能模块(Z_Function_Module)，并将其导出参数传输给Peakboard。随后，您就可以在SAP端的功能模块中进一步处理这些导出参数。

首先需要在Peakboard Designer (YourSAPDatasource)中创建SAP数据源。随后，就可以用它显示SAP系统中的数据，并进行写回操作。

导出参数可从不同的数据源中获取，例如，Peakboard (PeakboardVariable)中创建的变量。

``lua
local con = data.YourSAPDatasource.getconnection()
-- Connect to SAP system
con.open()
-- Execute XtractQL statements 
local res = sap.execute(con, "EXECUTE FUNCTION 'Z_Function_Module' EXPORTS YourColumn = '" .. data.PeakboardVariable ... "'")
-- Disconnect from SAP system
con.close()
```

|YourSAPDatasource |= 创建的SAP连接名称
|Z_Function_Module |= 配置用于写回SAP的功能模块
|YourColumn |= 写入数据的功能模块列
|PeakboardVariable |= Peakboard创建的变量，指向数据本身
