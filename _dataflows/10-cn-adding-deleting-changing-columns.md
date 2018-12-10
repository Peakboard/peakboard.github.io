---
layout: article
title: 添加、删除和更改列
menu_title: 添加、删除和更改列
description: 添加、删除和更改列
lang: cn
ref: flow-10
---
本节将介绍创建新列、删除和更改元数据（例如数据类型）的步骤。

##添加列-添加一个新列

“添加列”即添加一个新列。写入文本字段的Lua表达式决定了新列的具体填充内容。任何有效的Lua表达式都必须返回带有*返回*的值。例如，对于固定值，只需返回“您好”。以下示例中，创建了一个名为*主要客户*的新列。判断销售列中的数据是否包含大于10的值，如果包含，则表达式返回“是”，否则返回“否”。

![Add Column](/assets/images/dataflows/dataflows-add-column01.png)

使用验证按钮检查脚本的有效性。预览中应立即显示新列。也可以直接执行创建逻辑。

![Add Column](/assets/images/dataflows/dataflows-add-column02.png)

请注意，Lua表达式可能变得非常复杂。脚本中可以使用所有其他数据工件，例如其他数据源或变量。

##添加查找列 - 添加可以引用到另一个数据源的新列

添加查找列，即根据另一个数据源添加新列。下面示例显示原理。基准值为*客户*列，其中包含客户名称。配置查找，即比较基准值与另一数据源的列的差异（查找数据源和查找目标列）。如果找到合适的行，将返回“查找返回列”的内容。

![Add Lookup Columns](/assets/images/dataflows/dataflows-add-lookup-column01.png)

下图显示了相关结果。对于交易表中的每个客户，将从数据源“客户”中选择城市。请注意，如果找不到相关条目值，则该列将保持为空。通过这种方式，可以很容易地实现这一要求，即查找在其他数据源中没有任何等效项的数据。然后，只需筛选掉这些相关列中新生成列为空的所有行。

![Add Lookup Columns](/assets/images/dataflows/dataflows-add-lookup-column02.png)

##移除列 - 删除列

这一步不需要做过多解释。即将删除所有选定的列，不再显示。建议所有用户删除所有不需要的列。这可以使得数据流和整个板变得更加精简。

![Remove Columns](/assets/images/dataflows/dataflows-remove-column01.png)

##重命名列

该项操作无需加以说明。使用此步骤尽可能精确地描述列的内容。这些列通常填充有来自数据源（例如，来自SAP）的一些糟糕名称。请勿使用下划线，因为它们很难看。最好使用经典的驼峰式大小写表示法，例如：MaxCustomerRevenue、MinCustomerRevenue等...

![Reorder Columns](/assets/images/dataflows/dataflows-rename-column01.png)

##重新排序列

您可以使用此步骤更改列的顺序，改善明晰度。使用此功能可以区分重要和不重要项。对话框的操作相当简单。

![Reorder Columns](/assets/images/dataflows/dataflows-reorder-column01.png)

##更改数据类型

您可以使用此步骤更改列的数据类型。这一过程的典型方案是以字符串形式导入数字，但这些数字均已经转换成实数数字类型，以便可以用于聚合或图表中。

![Change Data Type](/assets/images/dataflows/dataflows-change-datatype01.png)

##列排序

您可以使用此步骤更改数据行的顺序。可以按多列进行排序。此处不再就对话进行其他解释。

![Reorder Columns](/assets/images/dataflows/dataflows-sort-column01.png)
