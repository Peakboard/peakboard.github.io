---
layout: article
title: Manipulating Table Data
menu_title: Manipulating Table Data
description: Manipulating Table Data
lang: en
ref: scr-4
---
Peakboard-Scripting often uses tabular objects. This can be either data from a data source or a table-like variable. The following is a list of all the standard activities that you can perform with tables to manipulate the data. In the examples, a static table with customer data is used:
![image_1](/assets/images/scripting/table-2/ScriptingTabellendatenManipulieren.png)

## Modify data
The following example shows a loop that runs over the data and corrects a value if a certain condition is fulfilled:

```lua
for i = 0, Data.myKunden.Count - 1 do

if Data.myKunden[i].KundenNr == "4712" then
 Data.myKunden[i].KundenName = "Wohlfarth"
 end

end
```
## Add data
The typical pattern when adding a record is to first create a new row, then fill this row with data and then add it to the table:

```lua
local item = Data.myKunden.newRow()
item.KundenNr = "4755"
item.KundenName = "Bächle"
Data.myKunden.add(item)
```
## Clear data
Deleting data according to a certain criterion is unfortunately a bit tricky. You cannot loop through the found set and delete rows in the loop. This would practically pull the loop pointer’s objects away from underneath the butt, like sawing off the branch you’re sitting on. For this reason, all lines to be deleted are first identified in a loop and stored in a temporary table called ItemsToRemove. In the second step, the temporary table is looped and then deleted.

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
