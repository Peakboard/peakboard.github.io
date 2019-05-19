---
layout: article
title: Microsoft日历
menu_title: Microsoft日历
description: Peakboard中Microsoft日历集成
lang: cn
weight: 2400
ref: cal-2400
redirect_from:
  - /data_sources/24-cn-microsoft-calendar.html
---
Microsoft日历数据源允许您访问Office 365中存储的日历。目前，仅支持在Office 365或Office.com上存管的Microsoft日历。不支持SharePoint日历或本地Exchange日历。

## 设置数据源

除了数据源的强制性名称之外，Peakboard还必须授权访问日历。点击“授权”按钮，按照一般提示访问账户。请注意，用户名和密码永远不会存储在Peakboard上，而是存储在一个通过Office 365门户重置其有效性的令牌中。

![image_1](/assets/images/data-sources/mscal/calendar-authorize.png)

其余要填写的字段无需加以说明。搜索日历条目的时间段必须以指定的格式表示。日期格式字段包含用于格式化后续表格日期和时间的模式。如果要将日历条目的主要部分（所谓的正文）作为HTML格式而不是纯文本，请单击相应的复选框。


![image_1](/assets/images/data-sources/mscal/calendar-maindialog.png)

结果是一个普通列表，每个日历条目包含一行。现在可以相应地进行处理，就像处理任何其他数据源一样。

![image_1](/assets/images/data-sources/mscal/calendar-entries.png)

在以下链接下，您可以在YouTube视频中找到其他信息（只有德语，抱歉）：

[Darstellung des Microsoft Outlook Kalenders in Peakboard.](https://www.youtube.com/watch?v=0LsEXH9-r7s)


