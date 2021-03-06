---
layout: article
title: 过滤数据
menu_title: 过滤数据
description: 过滤数据
lang: cn
weight: 3000
ref: flow-3000
redirect_from:
  - /dataflows/30-cn-filter-data.html
---
数据流步骤“过滤器”是一个强大的工具，可以根据特定逻辑删除不需要的数据。例如，如果您接收到了来自源系统两个存储位置的仓库交易数据，但希望分别查看这两个区域（例如，将一个关键数字用于其中一个区域，将另一个关键数字用于另一区域），此时通常会创建两个数据流，并在开始时使用过滤器删除另一个区域的数据。这将混合数据源转换为两个单独的数据源。

此逻辑将与Lua表达式一起运行，如“创建列”步骤。只有返回值会改变。如果表达式返回“假”，则删除该行，如果返回“真”，则将该行保留在结果集中。以下示例显示如何删除“城市”列中包含值为“N/A”的所有行。

![Filer Column](/assets/images/dataflows/dataflows-filter01.png)
