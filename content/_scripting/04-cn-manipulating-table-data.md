---
layout: article
title: 操纵表格数据
menu_title: 操纵表格数据
description: 操纵表格数据
lang: cn
ref: scr-04
---
Peakboard-“脚本”通常使用表格对象。这可以是来自数据源的数据，也可以是类似表格的变量。以下是所有标准活动的列表，您可以使用表格来操作数据。在示例中，使用了包含客户数据的静态表：
![image_1](/assets/images/scripting/table-2/ScriptingTabellendatenManipulieren.png)

##修改数据
以下示例显示了一个循环，该循环在数据上运行，并在满足特定条件时校正一个值：

```lua
for i = 0, Data.myKunden.Count - 1 do

if Data.myKunden[i].KundenNr == "4712" then
 Data.myKunden[i].KundenName = "Wohlfarth"
 end

end
```
##添加数据
添加记录时的典型模式是首先创建一个新行，然后用数据填充该行，再将其添加到表中：

```lua
local item = Data.myKunden.newRow()
item.KundenNr = "4755"
item.KundenName = "Bächle"
Data.myKunden.add(item)
```
##清除数据
不幸的是，按照特定标准删除数据有点棘手。您不能通过已建立的设置来建立循环，并删除循环中的行。这实际上会把循环指针的对象从底下下面抽走，就像锯掉您坐的树枝一样。因此，所有要删除的行首先要在循环中进行识别，并存储在名为ItemStoreMove的临时表格中。在第二步中，临时表格得到循环，然后被删除。

```lua
local j = 0
 local itemsToRemove = {}

for i = 0, Data.myKunden.Count - 1 do
 local item = Data.myKunden[i]

 if item.KundenNr == "4755" then
 itemsToRemove[j] = item
 j = j + 1
 end
end

for n = 0, j - 1 do
 Data.myKunden.remove(itemsToRemove[n])
end
```
