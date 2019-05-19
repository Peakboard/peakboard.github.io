---
layout: article
title: Table Grid   
menu_title: Table Grid
description: Information about Peakboard Designer Table Grid Control.
lang: en
weight: 400
ref: con-400
redirect_from:
  - /controls/04-en-table-grid.html
---

The Control Table Grid is used to display data in tabular form. Besides the simple text block, it is the most frequently used Control. Please note the following general information and recurring operating patterns for controls:

[General Properties](/controls/01-en-general-properties.html)

[Managing font formats with Font Manager](/misc/05-en-custom-fonts.html)

[Formatting Values](/misc/03-en-formating-values.html)

After a table grid has been dragged and dropped from the Toolbox to the top right of the screen, it is connected to a table data source using the Source property. This automatically creates columns in the table control that correspond to the original data source and can then be easily modified. A double-click on the Control opens the column dialog. Here you can configure the individual columns, e. g. their position with the small arrow keys, the caption or the width. The width is defined in pixels. “Auto” automatically defines the width so that it is always as wide as the widest content. A * in the width is dynamic. The complete available space is simply divided evenly among all -columns. Therefore, * is also the default setting for all columns.

![image_1](/assets/images/Controls/Table-Grid/ControlsTableGrid01.png)

Less frequently used column properties are hidden behind the Edit button, e. g. the value formatting function.

![image_1](/assets/images/Controls/Table-Grid/ControlsTableGrid02.png)

Below is a list of all properties that have not already been discussed under the links above.

| Properties  |	Description |
|-------------|---------------|
| Active Cell |	  Defines the color of a selected cell if the table is used on a touch screen. |
| Active Row  |	  Defines the color used to display a selected row if the table is used on a touch screen. |
| Scrollable  |	 Defines whether the table should have a scrollbar if the content is larger than the table. Of course, this function only makes sense on a touch screen. |
| Border Color |	Color of the border |
| Border Size |	Edge thickness in pixels |
| Dynamic Height |	Defines whether the table should be displayed as if it did not have a defined size. This option is often used when you want to have a table with a height adapted to the content that looks as high as the content itself. |
| Show Header |	Defines whether the column headers are to be displayed. |
| Show Row Grid Lines |	Defines whether a line between the lines is to be displayed. |

> In practice, it is very common for cells or rows to be formatted depending on the data content. There is a separate article for this requirement, which you can find [here.](/scripting/05-en-formating-table-grid.html)
