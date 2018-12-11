---
layout: article
title: 格式化值
menu_title: 格式化值
description: 格式化值
lang: cn
ref: misc-03
---

通常这些是数字或日期。这两种类型的值的特点是，它们通常与纯技术值所显示的内容不同。例如，值“2.96583”应以金额“2,97€”或“20170620”应以良好格式化的日期“20.06.2017”呈现给用户。控件中的各个点都有格式属性，它们都根据相同的原理工作。以下截图显示了文本块的格式化属性：

![image_1](/assets/images/misc/Values/Format01.png)

在最简单的情况下，您可以通过下拉菜单选择所需的格式。最常见的情况是：货币包含货币符号，数字是没有单位的数字，日期就是日期。语言缩写（EN或DE）告诉我们一些关于格式化的细节，并提及各自的文化区域。DE以“€”作为货币符号，以“.”作为千进制分隔符，以“,”作为十进制分隔符。在EN文化中，十进制分隔符和千进制分隔符完全相反。同样的原理也适用于日期。

当然，只有正确识别Peakboard的输入数据，这些标准格式才有效。

如果标准格式不充足，或者输入数据异常而无法识别，则必须使用自定义格式。然而，这种情况很少发生。可以假设，90 %的用户将使用标准格式。

对于自定义格式，必须在下拉菜单中选择适当的函数。输出格式是输出格式，输出语言环境是您想要格式化的文化组。输入格式是在降序prio后用逗号分隔的格式，利用该格式来尝试解释传入值。

您也可以简单地复制以现有格式输入的值。在以下链接，您将找到所有可使用的格式值的完整列表：

[https://docs.microsoft.com/en-us/dotnet/standard/base-types/custom-numeric-format-strings](https://docs.microsoft.com/en-us/dotnet/standard/base-types/custom-numeric-format-strings)

![image_1](/assets/images/misc/Values/Format02.png)
