---
layout: article
title: Table Grid   
menu_title: Table Grid
description: Information about Peakboard Designer Table Grid Control.
lang: en
weight: 210
ref: con-210
redirect_from:
  - /controls/04-en-table-grid.html
  - /controls/en-table-grid.html
---


The Control Table Grid is intended to display data in tabular form. It is the most frequently used control after the simple text block. 
Please first note the following general information and recurring operating patterns for controls:

[General Properties](/controls/en-general-properties.html)

[Managing font formats with Font Manager](/misc/en-fonts.html)

[Formatting Values](/misc/en-formating-values.html)

After a table grid has been dragged and dropped from the toolbox onto the top right-hand side of the screen, it is connected to a tabular data source using the Data Source property. 
This automatically creates columns in the table control that correspond to the original data source and can then be easily modified. 


Double-clicking on the control opens the Columns dialog. Here you can configure the individual columns.  
The following properties are available for this:

* Position: The position of the columns can be adjusted using drag and drop. Moving from top to bottom corresponds to moving from left to right.
* Column header: The column header can be adjusted using *Caption*.
* Width: The width can be adjusted in three different options:
	* Fill automatically defines the width so that it always takes the maximum width. 
	* Cut tries the opposite and minimizes the width as much as possible.
	* Pixel defines a fixed width for each column.
	
* Position of the content: The content of the columns can be determined via *Alignment*.
* Format: If the content is to be displayed in a certain format (e.g. as a percentage), this can be set for the entire column. In [this article](/misc/en-formating-values.html) it is explained how a format can be adjusted.
* Font: Each column can be assigned a font. This must be selected under *Specific Font*.

![image_1](/assets/images/Controls/Table-Grid/ControlsTableGrid01.png)


If the data in the table is to be manipulated, it is worth creating a [dataflow](/dataflows/en-getting-started.html) before creating the table grid control.


Finally, all properties that are specific to the table grid control and therefore were not listed under the link from above are listed below.

{% include styled_table.html %}
| Properties | Description |
|-------------|---------------|
| Active Cell | defines the color with which a selected cell is displayed if the table is used on a touch screen.
| Active Row | defines the color with which a selected row is displayed if the table is used on a touch screen.
| Scrollable | defines whether the table should have a scrollbar if its contents are larger than the table. Of course, this function only makes sense on a touch screen.|
| Border Color | color of the border |
| Border Size | Thickness of the border in pixels |
| Dynamic Height | Defines whether the table should be displayed as if it has no defined size. This option is often used when you want to have a table with height adjusted to the contents that looks as if it is the same height as the contents themselves. |
| Show Header | defines if the column headers should be displayed.
| Show Row Grid Lines | defines whether a line should be displayed between the rows. |


In practice, it happens very often that cells or rows are to be formatted depending on the data content. There is a separate article for this requirement, which you can find [here](/scripting/05-en-formatieren.html)