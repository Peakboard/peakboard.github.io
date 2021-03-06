---
layout: article
title: 表格网格 
menu_title: 表格网格
description: Peakboard Designer中表格网格控件相关信息。
lang: cn
weight: 210
ref: con-210
redirect_from:
  - /controls/04-cn-table-grid.html
  - /controls/cn-table-grid.html
---

“表格网格”控件用于以表格形式显示数据。除了简单的文本块，它是最常用的控件。请注意以下控件的一般信息和重复操作模式：

[一般属性](/controls/01-cn-general-properties.html)

[使用字体管理器管理字体格式](/misc/05-cn-custom-fonts.html)

[格式化值](/misc/03-cn-formating-values.html)

将表格网格从“工具箱”拖放到屏幕右上角后，它将使用“源”属性连接到表格数据源。这将自动在表格控件中创建对应于原始数据源的列，且这些列易于修改。双击“控件”将打开列对话框。在这里，您可以配置单独的列，例如，它们的位置带有小箭头键、标题或宽度。宽度以像素为单位。“自动”自动定义宽度，使其始终与最宽内容一样宽。宽度中的* 是动态的。完整可用空间会简单地在所有列中平均分配。因此，*也是所有列的默认设定。

![image_1](/assets/images/Controls/Table-Grid/ControlsTableGrid01.png)

“编辑”按钮后面隐藏较少使用的列属性，例如：值格式化功能。

![image_1](/assets/images/Controls/Table-Grid/ControlsTableGrid02.png)

以下是之前链接中尚未讨论过的所有属性列表。

| 属性 |	描述 |
|-------------|---------------|
| 激活单元格 |	 如果在触摸屏上使用表格，定义选定单元格的颜色。|
| 激活行 |	 如果在触摸屏上使用表格，定义选定行的颜色。|
| 滚动 |	 如果内容大于表格，则定义表格是否应该有滚动条。当然，这个功能只有在触摸屏上才有用。|
| 边框颜色 |	边框的颜色。|
| 边框大小 |	边框的厚度，单位为像素。|
| 动态高度 |	定义表格显示为未定义的大小。当希望表格高度适应内容，与内容本身一样高时，通常会用到此选项。|
| 显示标题 |	定义是否显示列标题。|
| 显示行网格线 |	定义是否显示行之间的行。|

>实际上，根据数据内容格式化单元格或行非常常见。关于这一要求有一篇文章，您可以在[此处](/scripting/05-cn-formating-table-grid.html)找到。
