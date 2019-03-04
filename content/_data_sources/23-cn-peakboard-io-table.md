---
layout: article
title: Peakboard.io表
menu_title: Peakboard.io表
description: Peakbaord中Peakbaord.io表数据的相关信息
lang: cn
ref: dat-23
---
在[Peakboard.io](https://peakboard.io/myaccountlogin) 门户中，您可以维护表对象。这些表可以像其他数据源一样包含在Designer中。请参见[本教程](/peakboardio/01-cn-intro-peakboard-io.html) 中关于使用门户和API键密钥问Peakboard.io对象的信息。

如要使用Peakboard.io表，请创建相应的数据源（您可能需要先输入用户名和API密钥）。像往常一样，它必须以唯一的名称命名。选择框会显示与指定API密钥（及其帐户）相关联的所有表。“最大项目”是可提取的最大行数。“重载间隔”指定检查数据的实际频率的时间间隔，以秒为单位。

最后，单击“加载数据”。它会打开“预览”窗口并显示数据。关闭“预览”窗口后，将列规格填入表格，则可以立即使用数据源。请注意，数据类型（例如“字符串”为字符串，或“整型”为数字）在Peakboard中会转换成相应的数据类型。因此保留了类型信息。

![Add Peakboard.io Table Data Dialog](/assets/images/data-sources/peakboard-io/datasource-peakboardio-table-01.png)
