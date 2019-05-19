---
layout: article
title: MS SQL Server
menu_title: MS SQL Server
description: Peakboard中的MS SQL Server数据的相关信息
lang: cn
weight: 1250
ref: dat-1250
redirect_from:
  - /data_sources/12-5-cn-ms-sql-server.html
---
本文解释了Peakboard对MS SQL Server的访问过程。无需解释对话框。除主机名外，还必须填写用户名、密码和数据库（“初始目录”）。如果主机有多个SQL Server实例，则只需用反斜杠将所需的实例附加到主机名上。

SQL语句可能根据需要变得复杂。在这一点上，我们建议您在SQL Server的视图中进行非常复杂的查询，并将查询内容从SQL Server读取到视图中。

“加载”按钮执行一次SQL语句，并填充列数据。从那时起，预览也应该可以工作，并且可以在Peakboard中使用数据集进行进一步处理。

![Add SQL Server Data](/assets/images/data-sources/ms-sql/add-sql-server-data.png)
