---
layout: article
title: 格式化值
menu_title: 格式化值
description: 格式化值
lang: cn
ref: misc-03
---

通常这些是数字或日期。这两种类型的值的特点是，它们通常与纯技术值显示的不同。例如，值“2.96583”应以金额“2,97€”，或“20170620”应以较格式较好的日期“20.06.2017”呈现给用户。控件都有格式属性，它们都遵循相同的原则。以下截图显示了文本块的格式属性：

![image_1](/assets/images/misc/Values/Format01.png)

在最简单的情况下，您可以通过下拉菜单选择所需的格式。最常见的情况是：“货币”包含货币符号，“数字”是没有单位的数字，“日期”就是日期。语言缩写（EN或DE）告诉我们关于格式的一些细节，并指向各自的文化区域。德语（DE）以“€”作为货币符号，以“.”作为千位分隔符，以“,”作为小数分隔符。在英语（EN）文化中，小数分隔符和千位分隔符完全相反。同样的原则也适用于日期。

当然，只有正确识别Peakboard的输入数据，这些标准格式才有效。

如果标准格式不充足，或者输入数据异常而无法识别，则必须使用自定义格式。然而，这种情况很少发生。可以假设，90%的用户都会使用标准格式。

对于自定义格式，必须在下拉菜单中选择适当的函数。“输出格式”是输出格式，“输出区域设置”是您想要的格式的文化组。“输入格式”在降序优先级后用逗号分隔，是用于尝试解释传入值的格式。

您也可以简单地从现有格式复制输入的内容。以下链接可以找到所有可用的格式化值的完整列表：

[https://docs.microsoft.com/en-us/dotnet/standard/base-types/custom-numeric-format-strings](https://docs.microsoft.com/en-us/dotnet/standard/base-types/custom-numeric-format-strings)

![image_1](/assets/images/misc/Values/Format02.png)
