---
layout: article
title: MS SQL服务器
menu_title: MS SQL服务器
description: 关于Peakboard中的MS SQL服务器数据的信息
lang: cn
ref: dat-12.5
---
本文解释了Peakboard对MS SQL服务器的访问过程。无需解释对话。除主机名外，还必须填写用户名、密码和数据库（初始目录）。如果主机有多个SQL Server实例，则只需用反斜杠将所需的实例附加到主机名上。

SQL语句可能根据需要变得复杂。在这一点上，我们建议您在SQL Server的视图中进行非常复杂的查询，并将查询内容从SQL Server读取到视图中。

“加载”按钮执行SQL语句一次，并填充列数据。从那时起，预览也应该可以工作，并且可以在Peakboard中使用数据集进行进一步处理。

![Add SQL Server Data](/assets/images/data-sources/ms-sql/add-sql-server-data.png)
