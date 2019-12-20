---
layout: article
title: Tile Control
menu_title: Tile Control
description: Tile Control
lang: en
weight: 250
ref: con-250
redirect_from:
  - /controls/14-en-tilecontrol.html
---

Tile control is a simple way to display row-based data of a table in a repetitive manner. 
Looking at the following table, it becomes clear that each production line is assigned a row.

![table production line](/assets/images/Controls/Tile/table.png)

Each of these production lines should get its own tile in a dashboard with the help of the tile control. First the table was added as Excel data source, as described [here](/data_sources/13-en-excel.html).
Then, as shown in the screenshot, the tile control is dragged and dropped onto the surface (1). To make the tile identifiable, a name is first assigned, for example Tile1 (2). Then the Excel data source is linked via the three points at Data source (3). Under Layout, the dimensions can be specified pixel by pixel (4). 
The template editor is reached via the three points next to Data template (5). 

![tile image1](/assets/images/Controls/Tile/tile1.png)

This is similar to the structure of the Designer and limits the drawing surface to the size set under (4). As known from the Designer, controls such as Text or Linear Gauge are dragged and dropped onto the surface and connected to the respective column of the linked Excel data source via the three known points.

![tile image2](/assets/images/Controls/Tile/tile2.png)

Click OK to exit the template editor and create the corresponding template. 
It can then be copied for each of the 5 production lines and the data source index set to the corresponding line (starting from 0).
As can be seen in the following screenshot, in addition to the previous steps, further changes such as additional diagrams, frames and shadows have been added to the initial tile control.
These can be transferred to the previously copied tile controls using the + symbol in the middle.
In the corresponding dialog, all tile controls to which the changes are to be transferred are selected.

![tile image3](/assets/images/Controls/Tile/tile3.png)

Click OK to close the dialog and execute the copy process. The changes are automatically transferred to the other tile controls and the line and data links are updated accordingly.

![tile image4](/assets/images/Controls/Tile/tile4.png)