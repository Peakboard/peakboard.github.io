---
layout: article
title: Formating Values
menu_title: Formating Values
description: Formating Values
lang: en
weight: 20
ref: con-20
redirect_from:
 - /misc/03-en-formating-values.html
 - /misc/en-formating-values.html
---

Usually these are either numbers or dates. Both types of values are characterised by the fact that they are usually to be displayed differently from the purely technical ones. For example, the value “2.96583” should be presented to the user as an amount “2,97 €” or “20170620” as a nicely formatted date “20.06.2017”. There are format properties at various points in the controls that all work according to the same principle. The following screenshot shows the formatting property of a text block:

![image_1](/assets/images/misc/Values/Format01.png)

In the simplest case, you can select the desired format via the drop-down menu. The most common cases are available there: Currency contains a currency symbol, Number is a number without unit, Date is a date. The language abbreviation (EN or DE) tells us something about the details of the formatting and refers to the respective cultural area. DE has a € as currency symbol, a dot as thousand separator and a comma as decimal separator. In the EN culture, decimal separators and thousand separators are exactly the opposite. The same principle applies to the date.

Of course, these standard formats only work if the input data of Peakboard is correctly recognized.

If the standard formatting is not sufficient, or the input data is so unusual that it is not recognized, a custom format must be used. However, this happens very rarely. It can be assumed that 90% of all users will come with the standard formats.

For a custom format, *Customize* can be selected in any existing format and then adjusted accordingly. Output Format is the output format, Output Locale is the culture group for which you want to format. Input formats are, separated by a comma after descending prio, the formats with which the interpretation of the incoming values is to be attempted.

Under the following link you will find a complete list of all format values that can be used:

[https://docs.microsoft.com/en-us/dotnet/standard/base-types/custom-numeric-format-strings](https://docs.microsoft.com/en-us/dotnet/standard/base-types/custom-numeric-format-strings)

![image_1](/assets/images/misc/Values/Format02.png)

In [this article](https://help.peakboard.com/data_sources/en-date-and-time.html) is explained how to format date and time.
