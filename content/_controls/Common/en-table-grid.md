---
layout: article
title: Table   
menu_title: Table
description: Information about Peakboard Designer Table Grid Control.
lang: en
weight: 210
ref: con-210
redirect_from:
  - /controls/04-en-table-grid.html
  - /controls/en-table-grid.html
---

The Table control is an interactive element that allows you to present structured data in a classic column and row view. It is the ideal tool for displaying inventory lists, production plans, or key figures from databases (SQL, SAP, Excel), where clarity and comparability are the main focus.
You can find the Table control in the Peakboard Designer in the Lists & Tiles group (1).

![image_1](/assets/images/Controls/Table-Grid/tablegrid_01.png)

# Configuration and Properties
## 1 Connection and Column Management
### 1.1 Data Source
The table requires a data source to display its options and content. To do this, add a data source in the Designer Explorer on the left side—for example, an Excel list with names.

![image_2](/assets/images/Controls/Table-Grid/tablegrid_02.png)

The table is almost always fed dynamically. Drag and drop the icon onto your workspace, or double-click the icon to link the data source you have already added to the Designer under "Data" with the control (1).

![image_3](/assets/images/Controls/Table-Grid/tablegrid_03.png)

### 1.2 Column Manager
Under Data in the properties on the right side, you can determine which columns of your data source should be displayed (1). You can rename, hide, or change the order of columns.
Edit table columns: Within the table, you can define the column header, column width, alignment, content format, and font to prepare information visually. You can change the order of the columns using drag-and-drop (2).

![image_4](/assets/images/Controls/Table-Grid/tablegrid_04.png)

## 2 Properties and Conditional Formatting
In the attributes on the right side, you control the visual behavior:
*   General: Define the dimensions of the table. Here you can also assign a title or a heading to it.
### Appearance
1. Background, Shadow & Corner Radius (Appearance): Style the background color of the table, set the shadow intensity the table casts on the design, and adjust the corners of the table (1).
2. Outline (Appearance): Customize the visual representation of the lines in the table by activating the border, horizontal, and vertical lines, and determining the line color and thickness (2).
3. Table Header (Appearance): Specify whether the column headers should be visible and set the background color and font of the header (3).
4. Table Body (Appearance): Set the color and font for the rows or cells and determine the maximum number of displayed rows (4).
### Logic
5. Use in scripts (Logic): Give the control a unique name so that you can easily identify it later in scripting (5).
6. Conditional Formatting (Logic): Create rules to color cells or entire rows based on values (e.g., background color "Red" if a value falls below a threshold) (6).

![image_5](/assets/images/Controls/Table-Grid/tablegrid_05.png)

## Scripting
The table allows you to react to user interactions, such as selecting a row.

### Example: Read row data on click
Often, when a row is clicked, a detail value should be written to a variable or a log entry should be created. In this example, we will write the selected row number to the log by clicking on a row's content.
Steps in the Script Editor:
1. Open the script editor under Logic -> Cell Clicked or Selection Changed.
2. Use the "Write to log" block (1).
3. Access the "Get row" block (2).
4. Combine this with the "Write to log" block (3).
5. Save the script by clicking "Save and Close" (4).

![image_6](/assets/images/Controls/Table-Grid/tablegrid_06.png)

Start the preview and check the Log (1) to see if the return value is correctly displayed depending on the selected row of the table. Select different rows to expand the log.

![image_7](/assets/images/Controls/Table-Grid/tablegrid_07.png)
