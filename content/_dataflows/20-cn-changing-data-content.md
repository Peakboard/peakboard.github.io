---
layout: article
title: 更改数据内容
menu_title: 更改数据内容
description: 更改数据内容
lang: cn
ref: flow-20
---
本节介绍处理列内容的步骤。

##小写列 - 将内容转换为小写字母

此步骤将数据单元的所有大写字母转换为小写字母。

![Lowercase Column](/assets/images/dataflows/dataflows-lowercase01.png)

##大写列 - 将内容转换为大写字母

此步骤将数据单元的所有小写字母转换为大写字母。

![Uppercase Column](/assets/images/dataflows/dataflows-uppercase01.png)

##替换列文本 - 替换文本

此步骤将出现的所有特定文本转换为另一种文本。这也适用于空字符串。在以下示例中，将把所有空列替换为“N/A”。

![Replace Column](/assets/images/dataflows/dataflows-replace-text01.png)

##设置数字格式

此步骤可以将存储为字符串的数字转换为不同的格式。所使用的格式技术与我们在文本字段或网格表中采用的技术相同。更多信息可以点击[此处](https://help.peakboard.com/misc/03-en-formating-values.html)。请注意：在此设置格式纯数字字段（数据类型“Number”）没有任何意义。如需设置，最好在输出期间直接完成（例如在相应的文本字段中）。

![Replace Column](/assets/images/dataflows/dataflows-set-number-format01.png)

##设置日期/时间格式

此步骤用于将日期值转换为另一种格式。所使用的格式技术与我们在文本字段或网格表中采用的技术相同。更多信息可以点击[此处](https://help.peakboard.com/misc/03-en-formating-values.html)。

![Replace Column](/assets/images/dataflows/dataflows-set-date-format01.png)

##更新列 - 更改数据

此步骤用于根据特定逻辑更改数据。对于“创建列”，使用Lua表达式设置所需的逻辑。以下示例显示了对材料列的操作。如果包含“4711”作为值，则将内容设置为“N/A”。可随意复杂化逻辑。当然，与其他数据源或变量一样，其他列也可以成为逻辑的一部分。

![Replace Column](/assets/images/dataflows/dataflows-update-column01.png)
