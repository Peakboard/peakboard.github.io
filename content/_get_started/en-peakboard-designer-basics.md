---
layout: article
title: Introduction to the Peakboard Designer  
menu_title: Introduction to the Peakboard Designer  
description: Introduction to the Peakboard Designer  
lang: en
weight: 100
ref: start-100
redirect_from:
  - /tutorials/01-en-peakboard-designer-basics.html
  - /tutorials/en-peakboard-designer-basics.html
---

The Peakboard Designer is a desktop application for Windows computers, which you can [download here](https://peakboard.com/en/peakboard-designer/?utm_source=HelpCenter&utm_medium=Link&utm_campaign=GetStarted_Article). 
You may need installation permissions from the system administrator to install it. 

In this article we will explain your first steps with the Peakboard Designer and show you how to create your first visualization. 
If needed, please watch our [video tutorials](https://help.peakboard.com/tutorials/en-video-overview.html) for additional help. 

# 1. Welcome to the Peakboard Designer

After opening the Peakboard Designer for the first time, you will find yourself in the start dialog. 
Here you will find useful links to the Peakboard help pages (1) or the video tutorials and some templates (2), which serve as examples and can be used as a basis for your individual visualization. 
The button [Show more...] (3) gives you access to templates for different use cases and sample files that explain how to work with scripts. 
To start your visualization without a template, select [Start from scratch] (4). 

![Peakboard Get Started Dialog](/assets/images/Tutorial/Get_Started/Peakboard_Get_Started_EN_01.png)

# 2. The structure of the Peakboard Designer

Now you have fully arrived inside the Peakboard Designer, which is divided into five main areas. 
First comes the top ribbon bar (1), on the left is the explorer (2), the canvas is in the middle (3), an overview of the various controls is on the right (4) and below that are the attributes (5).

![Peakboard Designer Overview](/assets/images/Tutorial/Get_Started/Peakboard_Get_Started_EN_02.png)

## 2.1 The top ribbon bar

In the top ribbon bar, you will find the basic functions of the Peakboard Designer. 
Open a preview of your visualization (1) and transfer the finished visualization onto your Peakboard Box (2). 
Click [Settings] (3) to choose basic settings for your visualization or to perform a software update. 

![Peakboard Designer Ribbon Bar](/assets/images/Tutorial/Get_Started/Peakboard_Get_Started_EN_03.png)

## 2.2 The explorer

In the explorer to the left, all controls used in your visualization are listed. 
In the explorer's folder structure, all data sources, dataflows, variables, scripts, and resources are displayed. 
Under the last item [Screens] you will find a listing of all existing visual elements on your workspace.
Since you have not added any controls yet, you should start out with empty folders. 

You can perform various actions on the folders with a right click or with a click on the [...]-button. 
For example, open the menu item [Edit Screen Size] with a right click on the [Screens] folder. 
Here you can define the size of the visualization. 
For this example, you can leave it at the values 1920x1080 (Full HD). 
The visualization will automatically scale to the resolution of the connected screen, but the aspect ratio should fit. 

![Peakboard Designer Explorer](/assets/images/Tutorial/Get_Started/Peakboard_Get_Started_EN_04.png)

## 2.3 The controls

Use the predefined elements - also called controls - and customize them to visualize your data. 
You will find everything from simple textboxes, tables, simple charts like bar charts or pie charts, to advanced charts as well as repeatable surface patterns like the list or tile view. 
Either drag and drop the elements onto the canvas or double-click them to add them. 

![Peakboard Designer – Controls](/assets/images/Tutorial/Get_Started/Peakboard_Get_Started_EN_05.gif)

## 2.4 The attributes

Below the controls are the attributes. 
Here, for the currently active control, the respective adjustable parameters and attributes are listed.
These parameters are different for each control.
For example, try adding another screen by right-clicking on [Screens] in the explorer on the left. 
Now click on one of the screens and set the screen duration in the attributes. 
This screen duration defines how long the respective screen remains visible before the following screen is displayed. 

![Peakboard Designer – Attribute](/assets/images/Tutorial/Get_Started/Peakboard_Get_Started_EN_06.png)

# 3. Create your visualization

Now that you know the Peakboard Designer, it is time to create your first visualization. 
First, drag and drop a textbox from the controls on the right and define various settings in the attributes as well as the appearance of this control. 
Also define the desired font, orientation, or background, as well as a text to be displayed. 
This will later be replaced by a data source. 
Add as your second control a Gauge-Diagram from the group [Diagram]. 
Again, you can set various properties such as sizes or color. 

![Peakboard Designer – Controls](/assets/images/Tutorial/Get_Started/Peakboard_Get_Started_EN_05b.gif)

## 3.1 Using resources and images

Use different file types in your visualization such as image files (JPG or PNG), PDFs or connect Excel files.
For example, drag your logo as an image file to the explorer or call up the folder menu of the Resources folder and add a local resource. 
Then you can drag and drop the file from the explorer onto a free space of the canvas and determine size and position. 
For other data formats, the process works very similarly. 

![Peakboard Designer – Drag&Drop](/assets/images/Tutorial/Get_Started/Peakboard_Get_Started_EN_07.gif)

## 3.2 Connect data source

From data formats such as JSON and XML, databases, and SAP via social media to machine, conveyor and sensor information such as Siemens S7 and OPC UA, a wide variety of data can be easily connected and visualized in real time with Peakboard. 
Further information on the data connections can be found [here](https://peakboard.com/en/data-connections/).

In this example we will use a Microsoft Excel file and load it directly into the package. 
The Excel file contains four products with five properties: title, product number, stock quantity, minimum stock, and stock capacity.
[Download our sample file](/assets/files/examples/Peakboard_Example_Date.xlsx) and drag and drop it, just like the image before. 
Now the file is in the package as a resource. 
If you want to add Excel files from other locations later, [read how it is done](/data_sources/Excel/en-excel.html) in this article. 

![Peakboard Designer – Excel Added](/assets/images/Tutorial/Get_Started/Peakboard_Get_Started_EN_08.png)
To add the resource as a data source, right-click on [Data] on the left-hand side or click on […] and select [Add Data Source] and [Excel] in the menu bar. 
Now enter a name for the data source Excel_File and select the uploaded Excel file under [Document]. 

![Peakboard Designer – Add Data Source](/assets/images/Tutorial/Get_Started/Peakboard_Get_Started_EN_09.gif)

## 3.3 Connect data and control

The last step is to connect the data source to a control. On the right side you select a control, in this case the textbox. Below you will find the attribute "Text". Click on the [...] button (1) next to it. 

![Peakboard Designer – Add Data Source](/assets/images/Tutorial/Get_Started/Peakboard_Get_Started_EN_10.png)

Now select the data source and the desired column (Title) and row (1), in this case the row 0 and the column "Title" for the heading. 
Note that in information technology counting starts at 0, so row 0 is the first row. 
The row with the headings is ignored. 
Confirm with [OK] and you should see the contents of this cell of your data source inside the textbox. 

![Peakboard Designer – Add Data Source](/assets/images/Tutorial/Get_Started/Peakboard_Get_Started_EN_11.png)

Now connect the data source to the gauge diagram. 
To do this, click on the [...] button in the attributes of the respective column and select the Excel data source. 
Then define for the field "Data / Value" (1) the column "Stock_Quantity", for the field "Minimum" (2) the column "Min_Quantity" and for "Maximum" (3) the column "Storage_Capacity". 

![Peakboard Designer – Filled Gauge](/assets/images/Tutorial/Get_Started/Peakboard_Get_Started_EN_12.png)

# 4. Check out the Preview

You did it! Your first visualization with Peakboard is finished. 
Click on the [Preview]-button (1) in the top ribbon bar under the item [Home] to view it.  

![Peakboard Designer – Preview Button](/assets/images/Tutorial/Get_Started/Peakboard_Get_Started_EN_13.png)

It opens a new dialog, which shows the result. You can now transfer this visualization to a Peakboard Box.

# 5. Your next steps

If you already own a Peakboard Box, the article [Connecting and Transferring your First Visualization](https://help.peakboard.com/get_started/en-peakboard-connecting.html) will help you with your next steps.
If you have any problems with the Peakboard Designer, do not hesitate to [contact](mailto: support@peakboard.com) us. 
Find more information at [www.peaboard.com/academy](https://peakboard.com/en/academy/).
Have fun with Peakboard!
