---
layout: article
title: Postprocessing Table Data
menu_title: Postprocessing Table Data
description: Postprocessing Table Data
lang: en
ref: scr-03
---
The majority of Peakboard customers use some kind of data connection to their Boards and in most cases the data is tabular. However, it often happens that the raw data is not sufficient to bind them directly to visual elements. This article explains the most common use cases for using scripts to get data into the right form. Even if you are not a programmer, don’t be discouraged by the scripts here. They are hardly more complicated than a sophisticated Excel formula. So they are at a level that a dedicated power user should be able to cope with. In general, however, there is one basic principle: Do as much filtering, aggregation and other logic as possible in the data source – be it a database, SAP or another upstream system. The better the data comes out of the previous system, the easier it is to prepare. Formatting by script is only the second best solution.

The data basis for the following examples is a query containing delivery items from a warehouse. The post-processing of this raw data then takes place in the refresh event of the data source. The following screenshot shows how to run a loop over the raw data, which increases the local variable counter by one per line and then at the end to write the value of counter into a text box on the screen.

You do not need to type the while construct manually. Simply open the object/statement tree on the left, navigate to the data source and double-click on the desired statement.


![image_1](/assets/images/scripting/table/scriptingtabellen01.png)

Here again the script in its raw version:

```lua
local counter = 0

for index, item in pairs(Data.tapos) do
 counter = counter + 1
end

Screens[0].MyCounterBox.Text = counter

```
In case you just want to count the lines, this would have been easier with the countdown property of the data source:

`Screens[0].MyCounterBox.Text = Data.tapos.Count`

The loop construct from above is more suitable for more complex statements that are still linked to conditions. The next statement only counts the rows if a column (queue) has a certain value:

```lua
for index, item in pairs(Data.tapos) do
 if item.Queue == 'KLEIN' then
   AnzahlTaPosWaKlein = AnzahlTaPosWaKlein + 1
 end
end
```
