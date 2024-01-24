---
layout: article
title: The first application  
menu_title: The first application   
description: The first application 
homepage: true
homepage_icon: /assets/images/homepage/get-started-low-code-software-vector.svg
lang: en
weight: 150
ref: start-150
redirect_from:
---

Now that you know the Peakboard Designer, it's time to create your first application.
First, drag and drop a [Text] control and define various settings in the attributes as well as the appearance of this control.
For example, select the desired font, the alignment, and a text to be displayed. This text will later be replaced by a data set.
Add a [Circular gauge diagram] from the [Diagram] group as your second control and adjust attributes such as bar width, value alignment or value font in the [Appearance] area here as well (1).

![Peakboard Designer - Controls](/assets/images/get_started/Visualization_controls_en.png)

### 1.1 Use resources and images

Use different file types in your application such as image files (JPG or PNG), PDFs or attach Excel files.
For example, drag your logo as an image file to the explorer or go to the folder menu of the resources folder and add a local resource.
Then you can drag and drop the file from the explorer to a free area of the workspace and specify size and position.
For other data formats, the process works very similarly.

![Peakboard Designer - Drag&Drop](/assets/images/get_started/Visualization_resources_en.gif)

### 1.2 Connect data source

Easily connect a wide variety of data sources with Peakboard.
From data formats like CSV, JSON and XML, databases and SAP to social media and machine, conveyor and sensor information like Siemens S7 and OPC UA.
You can find an overview of the different data sources [here](https://peakboard.com/en/interfaces/?utm_source=HelpCenter&utm_medium=Link&utm_campaign=GetStarted_Article).

In this example we use a Microsoft Excel file and load it directly into the project.
The Excel file contains four products with five properties: title, product number, stock quantity, minimum stock and stock capacity.
[Download our example file](/assets/files/examples/Peakboard_Example_Date.xlsx) and drag and drop it, just like the image before.
Now the file is a resource in the explorer (1). If you later want to include Excel files from other locations, you can find out how to do this [here](/data_sources/Excel/en-excel.html).

![Peakboard Designer - Excel resource](/assets/images/get_started/Visualization_excel-01_en.png)

Now add the resource as a data source.
To do this, right-click on the [Data] folder on the left or click on [...] and select [Add data source] and [Excel] (1) from the menu.

![Peakboard Designer - Excel data source](/assets/images/get_started/Visualization_excel-02_en.png)

Now enter a name for the data source, e.g. [Excel_File] (1) and select the uploaded Excel file in the [Connection] area by clicking on the three dots behind the [File] input field (2).
After clicking on [Load Worksheets] (3), define at [Specify Details] which worksheet should be used and if there are headings in the first row like in this example.
With [Load data] (4) you can check the data for plausibility.

![Peakboard Designer - Excel data source](/assets/images/get_started/Visualization_excel-03_en.png)

For the next steps you change the last three columns of the table from [String] to [Number] (1) in the preview area. Then you save with [OK] (2).
Voilà, you have just connected your first data source.

![Peakboard Designer - Excel data source](/assets/images/get_started/Visualization_excel-04_en.png)

### 1.3 Connect data and control

The last step is to connect the data source to a control.
Select a control in the explorer or by clicking on the workspace, in this case the text field.
On the right side in the attributes you will find the attribute [Text].
Click on the brackets symbol (1) in this line.

![Peakboard Designer - Text data source](/assets/images/get_started/Visualization_excel-05_en.png)

Now select the data source and the desired column (Title) and row (1), in this case row 0 and column [Title] for the heading.
Note that in information technology counting starts at 0, so row 0 is the first row.
The row with the headings is ignored.
Confirm with [OK] (2), then the content of this cell of your data source will be displayed inside the textbox.

![Peakboard Designer - Text data source settings](/assets/images/get_started/Visualization_excel-06_en.png)

Now connect the data source with the gauge diagram.
To do this, click on the brackets symbol in the respective row in the attributes (1) and select the Excel data source in each case.
Define for the field [Data / Value] (2) the column [Stock_Quantity], for the field [Minimum] (3) the column [Min_Quantity] and for [Maximum] (4) the column [Storage_Capacity].

![Peakboard Designer - Gauge diagram](/assets/images/get_started/Visualization_excel-07_en.png)

### 1.4. Preview

You did it!
Your first application with Peakboard is ready.
Click on [Preview] (1) in the menu bar to view it.

![Peakboard Designer - Preview button](/assets/images/get_started/Visualization_excel-08_en.png)

A new dialog will open showing you the result. This application can now be transferred to your Peakboard box.

### 1.5 Project colors

If you do not like the color of the finished application or if changed working conditions require a different color scheme, for example, you can easily and centrally adjust the colors in the project color management.
To do this, click on the Project Colors button in the menu bar and then select a new, suitable theme. Alternatively, you can also change only individual aspects of your application centrally.

![Peakboard Designer – Project colors](/assets/images/get_started/Visualization_projectcolors_en.gif)

## 2. Next step

If you already have a Peakboard Box, the article [The Peakboard Box](https://help.peakboard.com/get_started/de-peakboard-box.html) will help you with your next steps.

If you have problems with the Peakboard Designer, don't hesitate to [contact](mailto:support@peakboard.com) us.
We wish you a lot of fun and success with Peakboard!
