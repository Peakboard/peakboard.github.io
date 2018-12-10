---
layout: article
title: 后处理表格数据
menu_title: 后处理表格数据
description: 后处理表格数据
lang: cn
ref: scr-03
---
大多数Peakboard客户使用某种类型的数据连接到他们的Peakboard，在大多数情况下，数据为表格形式。但经常发生的情况是，原始数据不足以将它们直接绑定到可视元素。本文解释了使用脚本将数据转换成正确形式的最常见用例。即使您不是程序员，也不要因为这里的脚本而气馁。它们基本上不比复杂的Excel公式更复杂。因此，它们处于专业高级用户应该能够应对的水平。但总的来说，有一个基本原则：尽可能多地在数据源中进行筛选、聚合和其他逻辑——无论是数据库、SAP还是其他上游系统。前一个系统中的数据越好，准备就越容易。按脚本格式化只是第二个最佳解决方案。

以下示例的数据基础是对包含一个仓库的交货项目进行的查询。之后，该原始数据的后处理在数据源的刷新事件中进行。下面的截图显示了如何在原始数据上运行循环，这种循环将使局部变量计数器每行增加一个，然后在最后将计数器的值写入屏幕上的文本框。

您不需要手动键入while构造。只需打开左侧的对象/语句树，导航到数据源，双击所需语句即可。


![image_1](/assets/images/scripting/table/ScriptingTabellen01.png)

这里，脚本处于原始版本：

```lua
local counter = 0

for index, item in pairs(Data.tapos) do
 counter = counter + 1
end

Screens[0].MyCounterBox.Text = counter

```
如果您只想计算行数，使用数据源的倒计时属性会更容易：

`Screens[0].MyCounterBox.Text = Data.tapos.Count`

上面的循环构造更适合于仍然与条件相关联的更复杂语句。下一条语句仅在列（队列）具有特定值时对行进行计数：

```lua
for index, item in pairs(Data.tapos) do
 if item.Queue == 'KLEIN' then
 AnzahlTaPosWaKlein = AnzahlTaPosWaKlein + 1
 end
end
```
