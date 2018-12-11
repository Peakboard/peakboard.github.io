---
layout: article
title: 格式化表格数据
menu_title: 格式化表格数据
description: 格式化表格数据
lang: cn
ref: scr-05
---

表格网格是显示表格数据的最常见形式，这一点不足为奇。表格网格允许您绑定数据并根据需要定制列：字体、方向、格式、标题等。但是，通常有些属性不应该静态设置，而是取决于数据内容。在表中将数据内容输出到不支持标准格式化的格式之前调整数据内容也是有意义的。本文以示例的方式处理这两种需求：

数据基础应来自SAP。将显示未确认的交货。除了交货编号和客户名称，系统还显示交货的重量。下表显示了原始数据。只有重量规格用机载设备进行格式化，并右对齐。如果重量小于10公斤，则应以绿色显示，如果较重，则以红色背景显示。此外，交货编号中的前导零将被截断。



![image_1](/assets/images/scripting/format-table/Scripting_TableGrid_Formatieren_01.png)



格式化和更改逻辑被映射到脚本。在可视化中输出每个表格行之前，该脚本将为其运行一次。您可以从表格网格元素的事件属性来访问脚本编辑器：



![image_1](/assets/images/scripting/format-table/Scripting_TableGrid_Formatieren_02.png)



事件中有变量e。它代表当前的表格行。

* e.“数据”准许访问原始数据（例如 e.Data.MyColumn）。
* e.“文本控件”允许访问代表文本的控件（例如 e.TextControl.Text = “My new content”）e. “文本控件”。
* e.“单元格控件”允许访问单元格本身（例如 e.CellControl. Background = Brushes.Green）。

table.getcelltext(e,[Index]) 返回具有相应索引的列的值。这里0对应于第一列，1对应于第二列，…。
这就产生了下面的简单脚本来执行上面的要求（字体颜色、单元格颜色、去掉前导零）：


```lua
if math.tonumber(table.getcelltext(e, 4)) < 10 then
 e.Columns[4].TextControl.Foreground = Brushes.Green
else
 e.Columns[4].CellControl.Background = Brushes.Red
end

e.Columns[0].TextControl.Text = string.sub(table.getcelltext(e, 0), -8)
```


以下是带有相应格式脚本的预览：



![image_1](/assets/images/scripting/format-table/Scripting_TableGrid_Formatieren_03.png)
