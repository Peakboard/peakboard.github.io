---
layout: article
title: Peakboard Designer - The Basics
menu_title: Peakboard Designer - The Basics
description: Peakboard Designer - The Basics
lang: en
weight: 100
ref: start-100
redirect_from:
  - /tutorials/01-en-peakboard-designer-basics.html
  - /tutorials/en-peakboard-designer-basics.html
---

We are very pleased that you are interested in Peakboard. On this page you will find some information about the Peakboard basics and how to create your first visualization.

If you have not yet downloaded the Peakboard Designer, here comes the [Link](https://peakboard.com/en/peakboard-designer/?utm_source=HelpCenter&utm_medium=Link&utm_campaign=GetStarted_Article) for the free download. The Peakboard Designer is a desktop application for Windows computers, you may need installation permissions from your system administrator.

If you'd prefer to watch the first steps as moving images, see our [Video Tutorials Page](https://help.peakboard.com/tutorials/en-video-overview.html) for the appropriate video. There you will also find more helpful explanations about Peakboard.

# Welcome to the designer

After the first opening of Peakboard you are in the start dialog. Here you will find useful links to the Peakboard help pages (1) or the video tutorials and you will find a number of templates (2) to make getting started as easy as possible. The templates serve as an example and can be used as a basis for your personal visualization.

![Peakboard Get Started Dialog](/assets/images/Tutorial/Get_Started/Peakboard_Get_Started_EN_01.png)

There are templates for different use cases. The buttons 'Show more ...' (3) give you access to further templates and sample files that explain how to work with scripts. In this tutorial we would like to start without a template. Select 'Start from scratch' (4) to start with a blank visualization.

# Structure of the Peakboard Designer

Now you have arrived in the 'real' Peakboard Designer. It's divided in 5 main areas: there is the ribbon on the top with basic functions (1), the Peakboard Explorer on the left side (2), the canvas in the middle (3), the controls overview on the right side (4) and below you can find the attribute area (below) (5).

![Peakboard Designer Overview](/assets/images/Tutorial/Get_Started/Peakboard_Get_Started_EN_02.png)

## Top Ribbon Bar

The top menu contains the basic functions of the designer. Here you can open a preview of your visualization (1) and load the created visualization onto a Peakboard Box (2). You can use the "Settings" tab (3) to make basic settings for your visualization (title, description, time server) or to update the software.

![Peakboard Designer Ribbon Bar](/assets/images/Tutorial/Get_Started/Peakboard_Get_Started_EN_03.png)

## Peakboard Explorer

On the left side there is a general overview of all elements within the visualization. The Explorer works like a folder structure. There are folders for different areas. All data sources, dataflows, variables, scripts and resources are displayed in the respective folders. Under the last item 'Screens' you will find a list of all existing optical elements in your workspace. Since we have not added anything yet, the folders are currently empty.

![Peakboard Designer Explorer](/assets/images/Tutorial/Get_Started/Peakboard_Get_Started_EN_04.png)

Similar to the Windows File Explorer, you can right-click to perform various actions on the folders - alternatively, this works by clicking on the '...' button. For example, open the 'Edit screen size' menu item by right-clicking on the 'Screens' folder. Here you can define the size of the visualization. For this example, you can leave these at the values 1920x1080 (Full HD). The visualization is automatically scaled to the resolution of the connected screen, but the aspect ratio should fit.

## Peakboard Controls

On the right side you will find an overview of existing interface elements - also called controls. With these controls you can visualize your data. There are ready-made controls for different applications that you can use and customize. This starts with simple text boxes, Table Grid, simple charts (circles, lines, bars, and so on), to sophisticated, combinable charts (Advanced Charts), and repeatable surface patterns, such as the List View or Tile View. All elements can either be dragged and dropped onto the workspace or added with a double-click.

![Peakboard Designer – Controls](/assets/images/Tutorial/Get_Started/Peakboard_Get_Started_EN_05.gif)

## Attributes

Below the controls, you will find the attribute overview. Here the respective adjustable parameters and attributes are listed for the currently active element. These parameters are different for each element. For example, try to add another screen by right-clicking on screens (in the Peakboard Explorer on the left). Then click on one of the screens. Now you can set the screen duration for the screens in the attributes. This screen duration defines how long each screen remains visible before the next screen is displayed.

![Peakboard Designer – Attribute](/assets/images/Tutorial/Get_Started/Peakboard_Get_Started_EN_06.png)

# Create visualization

Now you have an overview of the most important areas of the designer. It's time to make your first visualization. Drag and drop to add a text field from the interface elements to the right.

Now you can define different settings for the element in the attributes. Adjust the element to your visual requirements. Define the desired font, orientation, or background. Define a 'text' to be displayed. This will later be replaced by a text from a data source.

![Peakboard Designer – Controls](/assets/images/Tutorial/Get_Started/Peakboard_Get_Started_EN_05b.gif)

Add a 'Linear Gauge' in the 'Chart' group as the second element. Again, you can set various properties such as sizes, colors, etc.

## Usage of resources and images

You can use different file types for your visualization. For example, image files (JPG or PNG), PDFs or a data source can be integrated as an Excel file. To use an image file as a logo in your visualization, simply drag an image file to the Peakboard Explorer or go to the folder menu of the 'Resources' folder and add a 'Local Resource'. Now the file is added to the package. Then you can drag and drop the file from the Peakboard Explorer onto the canvas - be sure to drag onto a blank space. Now you can determine size and position. For other data formats, the process works very similar.

![Peakboard Designer – Drag&Drop](/assets/images/Tutorial/Get_Started/Peakboard_Get_Started_EN_07.gif)

## Connect data source

From data formats such as JSON and XML, databases and SAP via social media to machine, conveyor and sensor information such as Siemens S7 and OPC UA. A wide variety of data can be easily connected and visualized in real time with Peakboard. Further information on the data connections can be found [here](https://peakboard.com/en/data-connections-overview/?utm_source=HelpCenter&utm_medium=Link&utm_campaign=GetStarted_Article).

In this example, we use one of the simpler data sources, a Microsoft Excel file. In this example, the [Excel file (Download)](/assets/files/examples/Peakboard_Example_Date.xlsx) is loaded directly into the package. The Excel file contains four products with five properties: title, product number, stock quantity, minimum stock and storage capacity. Download the file and add it, just like the image before, to your visualization via drag and drop. Now the file is part of this Peakboard package.

If you want to include Excel files from other locations, you can learn how to do this [here](https://help.peakboard.com/data_sources/en-excel.html).

![Peakboard Designer – Excel Added](/assets/images/Tutorial/Get_Started/Peakboard_Get_Started_EN_08.png)

Then you must add the resource as a data source. To do this, right-click on the 'Data' folder on the left-hand side or click on the '...' button and select 'Add Data Source' and 'Excel' in the menu. Now enter a name for the data source 'Excel_File' and under Document select the uploaded Excel file.

![Peakboard Designer – Add Data Source](/assets/images/Tutorial/Get_Started/Peakboard_Get_Started_EN_09.gif)

Now you can define which worksheet to use and if there are headers in the first row, as in this case. With OK you can save the data source.

Voilà, you have connected your first data source to Peakboard.

## Connect data and control

Now the last step is missing, you have to connect the data source with an element. Select the element in the workspace, in this case the text element. On the right side under the attributes you will find the attribute 'Text'. Click on the '...' button (1) in this line.

![Peakboard Designer – Add Data Source](/assets/images/Tutorial/Get_Started/Peakboard_Get_Started_EN_10.png)

In the open window, you can now select the data source and select the desired column and row that you want to use. For this example, use Row 0 and the 'Title' column for the heading. Note that in information technology, counting starts at 0, so line 0 is the first line. The line with the headings is ignored. Confirm with OK.

![Peakboard Designer – Add Data Source](/assets/images/Tutorial/Get_Started/Peakboard_Get_Started_EN_11.png)

Now the content of one cell of your data source will be displayed within the text box.

Now you can connect the data source to the gauge diagram. In the respective column, click on the '...' button in the attributes and select the Excel data source in each case. For the field 'Data / Value' (1) define the column 'Stock_Quantity', for the field 'Minimum' (2) the column 'Min_Quantity' and for 'Maximum' (3) the column 'Storage_Capacity'.

![Peakboard Designer – Filled Gauge](/assets/images/Tutorial/Get_Started/Peakboard_Get_Started_EN_12.png)

# Preview

You've made it, your first Peakboard visualization is ready and you can see the result with the 'Preview' button (1). This can be found in the upper ribbon under the item 'Home'.

![Peakboard Designer – Preview Button](/assets/images/Tutorial/Get_Started/Peakboard_Get_Started_EN_13.png)

It opens a new dialog, which shows the result. You can now transfer this visualization to a Peakboard box.

# Next Step

If you already have a Peakboard box, on the following page you can find an explanation how to plug in the box, connect it and load a visualization onto the box. Read the article: [Connecting and Transferring the First Visualization](https://help.peakboard.com/get_started/en-peakboard-connecting.html).

We wish you lots of fun and success with Peakboard. If you have problems with the Peakboard Designer, do not hesitate to contact us. All information about getting in touch can be found on the following [page](https://peakboard.com/en/support/?utm_source=HelpCenter&utm_medium=Link&utm_campaign=GetStarted_Article).