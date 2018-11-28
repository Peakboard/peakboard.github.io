---
layout: article
title: Azure SQL
menu_title: Azure SQL
description: Peakboard中有关Azure SQL数据的信息
lang: cn
ref: dat-12
---
本页解释了从Peakboard访问Azure SQL数据源时的各个功能。在下方的链接下，您会发现一个关于外部数据源如何配置和链接到Peakboard元素的教程：

[开始通过外部数据源使用XML数据源的示例](/tutorials/03-en-xml-data.html)

Azure SQL数据源用于将SQL服务器实例与Azure上运行的Peakboard连接起来。请注意：Peakboard的查询不是直接放在数据库上，而是通过Peakboard.io提供的服务进行查询。用户数据和访问数据都不通过Peakboard.IO服务进行存储。整个路径上的通信都是加密的。

Azure SQL源需要一个唯一的名称。如需访问数据库，必须输入服务器名称、用户名和密码以及数据库名称。Azure门户中提供了所有信息。然后，您可以在相应的文本字段中输入SQL命令，或者在组合框中选择一个表格或视图（如本例所示）。重要注意事项：最好的做法是为数据创建一个视图，以您希望的后续显示方式进行格式化和聚合数据。这样，在设计可视化时可以减少大量返工。

![Add Azure SQL Data](/assets/images/data-sources/azure/add-azure-sql-data.png)

点击加载列按钮生成元数据并列出。通过调用预览来检查您的条目。

![Azure SQL Settings](/assets/images/data-sources/azure/azure-sql-settings.png)


![Azure Preview](/assets/images/data-sources/azure/azure-preview.png)
