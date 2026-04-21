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

The Styled Tile is used to visually prepare a specific record (one row) from a data source. To do this, you connect the control to a data source and a row number (index) and then create an individual template. The contents of this row can thus be specifically displayed or processed. In contrast to the Styled Tile Collection, only one row of the data source is displayed at a time. The Styled Tile is particularly suitable for linking the same template to different rows to ensure an identical appearance everywhere.
You can find the Styled Tile in the Peakboard Designer in the Lists & Tiles group (1).

![image_1](/assets/images/Controls/Tile/tile_01.png)

# Configuration and Properties
## 1 General and Data Binding
The Styled Tile control requires a data source, a dataflow, or a variable list to display its content. To do this, add a data source in the Designer Explorer on the left side—for example, an Excel list with names.

![image_2](/assets/images/Controls/Table-Grid/tablegrid_02.png)

Drag and drop the control or place it on your workspace with a double-click. Afterward, the data source that you have already added to the Designer Explorer under "Data" can be linked to the control (1).

![image_3](/assets/images/Controls/Tile/tile_02.png)

* Under "Data" in the properties on the right side, in addition to the separate data binding (1a), the row to be displayed can be selected via the Data source index (1b).
* The view of the respective row of the data source can be edited via the Template (2).

![image_4](/assets/images/Controls/Tile/tile_03.png)

The editor for the template is similar to the functions on the main page, but is limited to the workspace of the control. As you know from the functions on the main page, you can now add various controls to the template from the top menu bar and link them to the columns of the selected data source. Then confirm the creation of the template with OK (1).

![image_6](/assets/images/Controls/Tile/tile_05.png)

## Conditional Templates
With the Styled Tile control, it is possible—analogous to conditional formatting—to use separate templates for displaying rows based on defined rules. Click on the [...] icon (1) in the Conditional Templates section to open the dialog for conditional templates.
Here you can add new templates (2). These automatically adopt the standard template. You can rename (3), edit (4), change their order (5), define rules for display (6), or delete the templates (7).

![image_7](/assets/images/Controls/Tile/tile_06_2.png)
