---
layout: article
title: 条件式属性调整
menu_title: 条件式属性调整
description: 条件式属性调整
lang: cn
weight: 101
ref: con-101
redirect_from:
---
![img00](/assets/images/Controls/ConditionalFormatting/img00.png)

“条件式属性调整”能让您无需使用复杂的脚本，凭借定义事件即可修改控件的不同属性。

如需为控件设置“条件式属性调整”，首先将目标控件（此处使用长方形）拖拽至设计面板(1)，
随后可在“外观”中找到“条件式属性调整”(2)。

![img01](/assets/images/Controls/ConditionalFormatting/img01.png)

该功能主要包含四个部分。
文本部分显示该控件是否创建以及创建了多少条规则；
“垃圾箱”按钮用于删除所有规则；
复制图标能帮您轻松地复制规则，并将其应用到其他控件，而无需对其重新定义。
第四个，即最后一个图标可打开“条件式属性调整”的规则编辑器。

![img02](/assets/images/Controls/ConditionalFormatting/img02.png)

“新规则”按钮用于创建新的规则。
您可以在此输入规则名称，以便更好地对其进行区分(1)。
规则编辑器本身是基于简单的if-then语句。
IF语句决定该规则何时执行(2)，而THEN部分定义相应的行为(3)。
根据控件类型，可调整不同的控件属性。
 
 {% include styled_table.html %}
| 文本控件 | 形状控件 |
|---------------|---------------|
| 文本 | 背景 |
| 字幕 | 边框颜色 |
| 背景 | 边框大小 |
| 阴影深度 | 动画 |
| 动画 | 宽度 |
| 宽度 | 高度 |
| 高度 | 顶部 |
| 顶部 | 左 |
| 左 | 可见 |
| 可见 ||


您可以点击“添加新规则”为控件定义其他规则(4)。

![img03](/assets/images/Controls/ConditionalFormatting/img03.png)

定义IF语句中的条件时，需要一个能在随后触发THEN事件的数据源或变量。
我们在此创建了一个“数字”类型的ProdKPI1 (1)变量，用于反映（例如）日产量。
在示例中，如果日产量达到100，长方形框应变成绿色。
首先，使用“AND条件”按钮定义目标条件。
为此，利用“+”符号选择变量， 然后设定满足条件所需的运算符（等于“=”，大于“>”， 小于“<”， 不等于“<>”）。
IF语句的第三栏包含相比较的值，它可以是一个定义的常量或者同样可以为变量或来自于数据源中的值(2)。
如果需要，还可以定义其他的AND或者OR条件(3)。

THEN语句设定对应的事件，它会在满足(2)中的条件时执行。
在本示例，背景应该变成绿色(4)。

您还可以点击“其他属性调整”，定义其他满足条件时应执行的事件。

![img04](/assets/images/Controls/ConditionalFormatting/img04.png)

您可以在预览中看到这一功能的效果。
只有在预览或使用Peakboard Box时，“条件式属性调整”才会触发！
在设计区域，长方形框则不会由白色变为绿色！

![img05](/assets/images/Controls/ConditionalFormatting/img05.png)
