---
layout: article
title: Peakboard.io表
menu_title: Peakboard.io表
description: Peakboard.io表
lang: cn
ref: io-02
---
在 [Peakboard.io](https://peakboard.io) 门户网站中，您可以维护表格对象。这些表可以像其他数据源一样包含在Designer中。请参见[本教程](/peakboardio//01-en-intro-peakboard-io.html) 中关于使用门户和API键访问Peboard.io对象的信息。

如要使用Peakboard.io表，请创建相应的数据源（您可能需要先输入用户名和API密钥）。像往常一样，它必须以唯一的名称命名。选择框会显示与指定API键（及其帐户）相关联的所有表。最大项目数是可提取的最大行数。“重新加载间隔”指定以秒为单位的时间间隔，用于检查数据的实际情况。

最后，单击“加载数据”。它会打开预览窗口并显示数据。关闭“预览”窗口后，将栏位规格填入表格，并且可以立即使用数据源。请注意，数据类型（例如字串作为字符串或整数作为数字）在Peakboard中会转换成相应的数据类型。因此保留了类型信息。

![image_1](/assets/images/peakboard-io/table/datasource_peakboardio_table_01.png)
