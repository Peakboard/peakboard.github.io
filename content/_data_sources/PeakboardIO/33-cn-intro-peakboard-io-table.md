---
layout: article
title: Peakboard.io表格
menu_title: Peakboard.io表格
description: Peakboard.io表格
lang: cn
weight: 3300
ref: dat-3300
redirect_from:
  - /data_sources/PeakboardIO/33-cn-intro-peakboard-io-table.html
---
在 [Peakboard.io](https://peakboard.io) 门户中，您可以维护表格对象。这些表格可以像其他数据源一样包含在Designer中。请参见[本教程](/data_sources/PeakboardIO/32-cn-intro-peakboard-io.html)中关于使用门户和API密钥访问Peakboard.io对象的信息。

如要使用Peakboard.io表格，请创建相应的数据源（您可能需要先输入用户名和API密钥）。像往常一样，它必须以唯一的名称命名。选择框会显示与指定API密钥（及其帐户）相关联的所有表格。“最大项目数”是可提取的最大行数。“重载间隔”指定检查数据实际情况频率的时间间隔（以秒为单位）。

最后，单击“加载数据”。它会打开“预览”窗口并显示数据。关闭“预览”窗口后，表格将填入列规格，并且可以立即使用数据源。请注意，数据类型（例如字串作为字符串，或整数作为数字）在Peakboard中会转换成相应的数据类型。因此保留了类型信息。

![image_1](/assets/images/peakboard-io/table/datasource_peakboardio_table_01.png)
