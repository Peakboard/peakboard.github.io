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
  - /controls/en-tilecontrol.html
---
The tile control is an easy way to display row-based data of a table in a repetitive way.
When looking at the table below, it becomes clear that each production line is assigned one row.

![Production Line Table](/assets/images/Controls/Tile/table.png)

Each of these production lines should get its own tile in a dashboard with the help of the tile control. First the tile was added as an Excel data source, as [here](/data_sources/13-en-excel.html) described.
Then, as shown in the screenshot, the tile control is dragged and dropped onto the interface (1). 
In order to identify the tile, a name, for example Tile1, is first assigned (2) and then the Excel data source is linked via the three dots at Data Source (3).
Under Layout the dimensions can be specified with pixel accuracy (4). 
The property Data Source Index can be used to define to which row of the data source the tile should be linked.
The first row is referenced with the index 0.
Via the three dots next to Data Template the template editor can be reached (5). 

![tile image1](/assets/images/Controls/Tile/tile1.png)

This is similar to the structure of the Designer and limits the drawing surface to the size set in (4).
As known from the Designer, controls such as Text or Linear Gauge are dragged and dropped onto the surface and connected to the respective column of the linked Excel data source via the three known points.
Since the control is permanently linked to a data source and each tile reflects exactly one data row, only the column of the linked data source can be selected when linking the data to a control.


![tile image2](/assets/images/Controls/Tile/tile2.png)

Click Ok to exit the template editor and create the corresponding template. 
It can then be copied for each of the 5 production lines and the data source index can be set to the corresponding line (starting from 0). 
As can be seen in the following screenshot, in addition to the previous steps, further changes such as additional diagrams, frames and shadows have been added to the initial tile control.
These can be transferred to the previously copied tile controls using the middle symbol with the + sign.
In the corresponding dialog, all tile controls to which the changes are to be transferred are selected.

![tile image3](/assets/images/Controls/Tile/tile3.png)

With OK the dialog is closed and the copy process is executed. 
The changes are automatically transferred to the other tile controls and the line and data links are updated accordingly.

![tile image4](/assets/images/Controls/Tile/tile4.png)