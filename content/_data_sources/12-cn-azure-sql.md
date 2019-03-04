---
layout: article
title: Azure SQL
menu_title: Azure SQL
description: Peakboard中Azure SQL数据的相关信息
lang: cn
ref: dat-12
---
本页解释了从Peakboard访问Azure SQL数据源时的各个功能。在下面链接中可以找到关于通常如何配置外部数据源并链接到Peakboard元素的教程：

[使用XML数据源的外部数据源示例](/tutorials/03-cn-xml-data.html)

Azure SQL数据源用于将SQL Server实例与Azure上运行的Peakboard连接起来。请注意：Peakboard查询不是直接放在数据库上，而是通过Peakboard.io提供的服务进行查询。Peakboard.IO服务不存储用户数据和访问数据。整个路径上的通信都是加密的。

Azure SQL源需要一个唯一的名称。如需访问数据库，必须输入服务器名称、用户名和密码以及数据库名称。Azure门户中提供了所有信息。然后，您可以在相应的文本字段中输入SQL命令，或者在组合框中选择一个表格或视图（如本例所示）。重要注意事项：最好的做法是为数据创建一个视图，以您希望的后续显示方式进行格式化和聚合数据。这样，在设计可视化时可以减少大量返工。

![Add Azure SQL Data](/assets/images/data-sources/azure/add-azure-sql-data.png)

点击“加载列”按钮生成元数据并列出。通过调用“预览”来检查您的条目。

![Azure SQL Settings](/assets/images/data-sources/azure/azure-sql-settings.png)


![Azure Preview](/assets/images/data-sources/azure/azure-preview.png)
