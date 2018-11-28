---
layout: article
title: 表格网格 
menu_title: 表格网格
description: Peakboard Designer表格网格控件相关信息。
lang: cn
ref: con-04
---

控件表格网格用于以表格形式显示数据。除了简单的文本块，它是最常用的控件。请注意以下一般信息和控件的重复操作模式：

[一般属性](/controls/01-en-general-properties.html)

[使用字体管理器管理字体格式](/misc/05-en-custom-fonts.html)

[动态属性中的脚本](/scripting/02-en-dynamic-properties.html)

[格式化值](/misc/03-en-formating-values.html)

将表格网格从工具箱拖放到屏幕右上角后，它将使用“源”属性连接到表格数据源。这将自动在表格控件中创建对应于原始数据源的列，且这些列易于修改。双击控件将打开列对话框。在这里，您可以配置单独的列，例如，它们的位置带有小箭头键、说明文字或宽度。宽度以像素为单位。“自动”可以自动定义宽度，使其始终与最宽内容一样宽。带*宽度为动态值。整个可用空间只需在所有列中平均分配即可。因此，带*值也是所有列的默认设定值。

![image_1](/assets/images/Controls/Table-Grid/ControlsTableGrid01.png)

“编辑”按钮后面隐藏使用频率较低的列属性，例如值格式化功能。

![image_1](/assets/images/Controls/Table-Grid/ControlsTableGrid02.png)

以下是所有尚未在上述链接下讨论过的属性列表。

| 属性 |	描述 |
|-------------|---------------|
| Active Cell |	 如果在触摸屏上使用表格，则定义选定单元格的颜色。|
| Active Row |	 定义在触摸屏上使用表格时用于显示选定行的颜色。|
| Scrollable |	 如果内容大于表格，则定义表格是否应该有滚动条。当然，这个功能只有在触摸屏上才有用。|
| Border Color |	边框颜色|
| Border Size |	边缘厚度，以像素为单位|
| Dynamic Height |	定义表格是否应该显示为未定义的大小。当您想拥有高度与内容本身一样高的表格时，通常会用到此选项。|
| Show Header |	定义是否显示数据列标题。|
| Show Row Grid Lines |	定义是否显示行之间的行。|

>实际上，根据数据内容格式化单元格或行非常常见。关于这一要求有一篇文章，您可以在[这里]找到。(/scripting/05-en-formating-table-grid.html)
