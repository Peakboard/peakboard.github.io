---
layout: article
title: 动态查询
menu_title: 动态查询
description: 动态查询
lang: cn
ref: scr-07
---
根据特定的上下文，对数据源的查询通常必须动态设计。示例：一名最终用户通过文本字段输入一个日期，数据源将向主机系统发送请求，以满足用户的要求。为此，将创建包含最终用户所需日期的动态SQL语句。本文展示了设计这种动态查询的标准过程。

中心元素是一个滑块。最终用户可以使用滑块设置要在SAP中检索的数据记录的数量。每次操作控制器时，数据请求都以此为基础。下图展示了该设计。除了滑块，我们还需要一个标量数据元素（名为“行总数”）、SAP源和一个表格来显示来自SAP源的数据。

![image_1](/assets/images/scripting/queries/misc_dynamische_Abfrage_01.png)

滑块会提供一个“值更改”事件，每次滑块的值改变时都会调用该事件。我们存储了一个简单的脚本，该脚本将控制器的值写入静态变量“行总数”，然后触发SAP源的重新加载。这里显示了脚本和一个屏幕截图：

```lua
data.RowCount = screen.Slider.value
data.MAKT.reloadasync()
```

![image_1](/assets/images/scripting/queries/misc_dynamische_Abfrage_02.png)

最后一块马赛克瓷砖表示真正的动态化。下图显示了设计视图中的SAP源。但是，XQL语句包含一个占位符，占位符反过来在决定性的点上从全局“行总数”变量中提取值。占位符的工作原理是 #[MyVariable]#。以下是XQL语句和一个屏幕截图

`SELECT TOP #[RowCount]# * FROM MAKT;`

![image_1](/assets/images/scripting/queries/misc_dynamische_Abfrage_03.png)
