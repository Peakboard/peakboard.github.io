---
layout: article
title: 网页
menu_title: 网页
description: Peakboard中网页数据的相关信息
lang: cn
ref: dat-09
---
本页解释了访问网页中表格的各个功能。在下面链接中可以找到关于通常如何配置外部数据源并链接到Peakboard元素的教程：

[使用XML数据源的外部数据源示例](/tutorials/03-cn-xml-data.html)

如果您手头没有合适网站的URL，但又想尝试一下，则请使用以下示例URL。它指向一个包含多个表格的维基百科页面。本文中，我们只对第一张大表感兴趣，该表为永久奖牌表（每个国家在所有奥运会上积累的所有奖牌）。我们对页面的更下方的，其他较小的表格不感兴趣。我们要过滤掉它们。

[https://en.wikipedia.org/wiki/All-time_Olympic_Games_medal_table](https://en.wikipedia.org/wiki/All-time_Olympic_Games_medal_table)

Peakboard在相应的网页中搜索HTML表格。如果HTML的语法正确，则这种方法尤其有效。如果您试图访问一个数据不正确或不完整的网站，请检查HTML语法。

在相应的数据源掩码中，必须分配唯一的名称，最重要的是：URL。提供用户名和密码以防网站需要认证。页面上的所有表格都有名称或数字。如果页面上有多个表格，会有一个选择对话框可以帮助您识别正确的表格。单击带有三个点的小按钮。所有找到的表格都显示在组合框中。您可以试试哪张表是正确的。如果表格没有HTML标题（`<th>`标签，则标题可能在表格的第一行。如果是，选中复选框“第一行是标题”。然后，Peakboard会在数据确定过程中考虑此因素。按“确定”将条目传送到主屏幕。

![Select Table From Webpage](/assets/images/data-sources/webpage/select-table-from-webpage.png)

像往常一样，元数据（列及其数据类型）也会被复制。您仍然可以指定自动刷新数据源的时间（单位为秒），如有必要，还可以限制最大行数。如果由于任何原因更改源，则可以使用“加载列”手动重启元数据检索过程。然后存储的元数据将被删除并重新确定。

![Webpage Add Data Dialog](/assets/images/data-sources/webpage/webpage-add-data-dialog.png)

单击“预览”打开数据窗口以检查输入。

![Webpage Preview Data](/assets/images/data-sources/webpage/webpage-preview-data.png)
