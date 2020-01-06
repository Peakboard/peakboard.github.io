---
layout: article
title: 复古翻转信息块
menu_title: 复古翻转信息块
description: Peakboard Designer复古翻转信息块控件相关信息。
lang: cn
weight: 850
ref: con-850
redirect_from:
---

复古翻转信息块主要用于再现经典的记分牌。
它让人们联想起机场或火车站的显示板。
该控件与文本栏的使用方式非常相似。
您可以用数字以及字母填充信息块。
可用字符数量可事先在对应信息块控件的属性中设置。
您还可以在属性中设定文本变换时字符翻转的速度。

字符会从左往右输入。
对于字符长度不确定的元素，例如计数器或倒计时显示，您可以使用脚本人为地加长字符，直至设定的长度值。
为此，字符开头的零可以添加到与控件关联的变量。

```Lua
-- 将计数器转换为字符串，并在起始位置添加零，直到其达到三位。
data.ticker = string.addleadingcharacters(string.tostring(data.Count),'0',3)
```

![image_1](/assets/images/Controls/RetroFlipper/retro01.png)
