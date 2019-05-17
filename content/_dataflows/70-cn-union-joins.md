---
layout: article
title: 联合连接
menu_title: 联合连接
description: 联合连接
lang: cn
weight: 7000
ref: flow-7000
---
在连接步骤中，我们已经学习了如何将两个表格链接在一起。“联合”步骤亦与链接相关，但是原理不同，因为在“联合”中，数据是**附加的**而不是**链接的**。如下图所示，“联合”步骤相当原始。它只需要指定要附加的表。名称和数据类型匹配的附加表的所有列都附加到原始表的相应列中。如果列名称或数据类型不匹配，则忽略该列。如果列名/类型不完全匹配，则必须首先对其进行重命名或重新设定格式。

![Union Join](/assets/images/dataflows/dataflows-union03.png)
