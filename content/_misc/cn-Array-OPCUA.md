---
layout: article
title: 读取数组（OPC UA）
menu_title: 读取数组（OPC UA）
description: 读取数组（OPC UA）
lang: cn
weight: 1002
ref: misc-1002
redirect_from:
---

为使用OPC UA服务器数组中的单个元素，必须首先将数组创建为一个订阅(1)。

您可以通过“编辑”创建脚本，它会始终和订阅一起执行(2)。

脚本使用for循环遍历数组中的单个元素。
如截图所示，元素随后就会输出在Peakboard Box日志(3)。
为了将这些元素用于计算、KPI或图表中，建议您将其储存于变量列表。

![img01](/assets/images/misc/ArrayOPCUA/img01.png)

```lua
for index = 0, message.itemValue.length - 1 do
	peakboard.log(message.itemValue[index])
end
```
