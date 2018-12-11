---
layout: article
title: 网页
menu_title: 网页
description: Peakboard中网页数据的相关信息
lang: cn
ref: dat-09
---
本页解释了访问的网页所包含表格的各个功能。在下方的链接下，您会发现一个关于外部数据源如何配置和链接到Peakboard元素的教程：

[开始通过外部数据源使用XML数据源的示例](/tutorials/03-en-xml-data.html)

如果您手头没有合适网站的URL，但又想尝试一下，则请使用以下示例URL。它指的是维基百科上带表格的页面。本文中，我们只对第一个大表感兴趣，该表为永久奖牌表（每个国家在所有奥运会上积累的所有奖牌）。我们对其他更小的表格不感兴趣—在页面的更下方。我们希望筛选掉该等表格。

[https://en.wikipedia.org/wiki/All-time_Olympic_Games_medal_table](https://en.wikipedia.org/wiki/All-time_Olympic_Games_medal_table)

Peakboard在各自的网页中搜索HTML表格。如果HTML的语法正确，则这种方法尤其有效。如果您试图访问一个数据不正确或不完整的网站，请检查HTML语法。

在相应的数据源掩码中，必须指定唯一的名称，最重要的是：URL。提供用户名和密码以防网站需要认证。页面上的所有表格都提供名称或数字。如果页面上有多个表格，提供一个选择对话框可以帮助您识别正确的表格。点击带有三个点的小按钮。所有找到的表格都显示在组合框中。您可以试试哪张表是正确的。如果表格没有HTML标题（`<th>`-Tag），则标题可能在表格的第一行。如果是，激活复选框。然后，Peakboard会在数据确定过程中注意到这一点。按“确定”将条目传送到主屏幕。

![Select Table From Webpage](/assets/images/data-sources/webpage/select-table-from-webpage.png)

像往常一样，也会复制元数据（列及其数据类型）。您仍然可以指定自动刷新数据源的时间（单位秒），如有必要，还可以限制最大行数。如果由于任何原因而改变数据源，则可以使用加载列手动重启元数据检索过程。然后删除并重新确定存储的元数据。

![Webpage Add Data Dialog](/assets/images/data-sources/webpage/webpage-add-data-dialog.png)

点击预览打开数据窗口以检查输入。

![Webpage Preview Data](/assets/images/data-sources/webpage/webpage-preview-data.png)
