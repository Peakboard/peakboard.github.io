---
layout: article
title: Formatting Table Data
menu_title: Formatting Table Data
description: Formatting Table Data
lang: en
ref: scr-05
---

Table grids are not surprisingly the most common form of displaying tabular data. The Table Grid allows you to bind data and customize the columns as desired: font, orientation, formatting, headline, etc. However, there are often attributes that should not be set statically, but depend on the data content. It may also make sense to adjust the data content before outputting it in the table to a format that does not support standard formatting. This article deals with both demands in an exemplary manner:

The data basis should come from SAP. Open deliveries are displayed. In addition to the delivery number and customer name, the system also displays the weight of the delivery. The following table shows the raw data. Only the weight specification is formatted with on-board equipment and aligned right-justified. The weight should be displayed in green if it is less than 10kg and with a red background if it is heavier. In addition, the leading zeros in the delivery number are to be truncated.



![image_1](/assets/images/scripting/format-table/Scripting_TableGrid_Formatieren_01.png)



The formatting and change logic is mapped to a script. The script is run for each table row exactly once immediately before it is output in the visualization. You can access the script editor from the event attribute of the table grid element:



![image_1](/assets/images/scripting/format-table/Scripting_TableGrid_Formatieren_02.png)



Within the event, there is the variable e. It represents the current table line.

* e.Data gives access to the raw data (e. g. e.Data.MyColumn).
* e.TextControl allows access to the control representing the text (e. g. e.TextControl.Text = “My new content”) e. TextControl.
* e.CellControl allows access to the cell itself (e. g. e.CellControl. Background = Brushes.Green).

table.getcelltext(e,[Index]) returns the value of the column with the corresponding index. Here 0 corresponds to the first column, 1 to the second,….
This results in the following simple script to implement the requirements from above (font color, cell color, cut off leading zeros):


```lua
if math.tonumber(table.getcelltext(e, 4)) < 10 then
 e.Columns[4].TextControl.Foreground = Brushes.Green
else
 e.Columns[4].CellControl.Background = Brushes.Red
end

e.Columns[0].TextControl.Text = string.sub(table.getcelltext(e, 0), -8)
```


Here is the preview with the corresponding formatting script:



![image_1](/assets/images/scripting/format-table/Scripting_TableGrid_Formatieren_03.png)
