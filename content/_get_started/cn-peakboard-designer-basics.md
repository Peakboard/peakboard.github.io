---
layout: article
title: Peakboard Designer - 基础知识
menu_title: Peakboard Designer - 基础知识
description: Peakboard Designer - 基础知识
lang: cn
weight: 100
ref: start-100
redirect_from:
  - /tutorials/01-cn-peakboard-designer-basics.html
  - /tutorials/cn-peakboard-designer-basics.html
---

很高兴了解到您对Peakboard感兴趣。在此页面中，您可以找到与Peakboard基础知识相关的资料，也可以了解到其他信息，学会如何创建自己的第一个可视化。

如果您还没有下载Peakboard Designer，可以点击此[链接](https://peakboard.com/zh-hans/peakboard-designer/?utm_source=HelpCenter&utm_medium=Link&utm_campaign=GetStarted_Article)，免费下载软件。Peakboard Designer是一款适用于Windows电脑的桌面应用，您可能需要系统管理员的同意才能安装。

如果您更喜欢观看动态的内容，请访问我们的[视频教程页面](https://help.peakboard.com/tutorials/cn-video-overview.html)，选择相应的视频即可。该页面还会提供更多有关Peakboard的帮助信息。

# 欢迎使用 Designer

打开应用之后，就会出现一个“开始”对话框。您可以在此发现Peakboard帮助界面（1）或视频教程的链接，还可以使用多个模板(2)，帮助您轻松上手。作为示例，模板可用作个人可视化的基础。

![Peakboard 开始对话框](/assets/images/Tutorial/Get_Started/Peakboard_Get_Started_CN_01.png)

不同的模板用于不同的使用场景。点击“显示更多”（3），就会出现更多的模板；还会显示样本文件，解释如何使用脚本。在此教程中，我们不需要使用模板。选择“重新开始”（4），采用空白的可视化界面。

# Peakboard Designer的结构

现在，您看到的就是“真正的”应用界面。它分为5个部分：顶部为基础功能栏（1），左边的可视化包（2），中间的设计面板（3），右边的控件概览（4）以及底部的属性部分（5）。

![Peakboard Designer 总览](/assets/images/Tutorial/Get_Started/Peakboard_Get_Started_CN_02.png)

## 顶部工具栏

顶部菜单包含应用的基础功能。在此，您可以预览可视化（1），还能将创建的可视化加载至Peakboard Box（2）；您可以使用“设置”标签（3），为可视化进行基础设置（标题，描述，时间服务器）；或者更新软件。

![Peakboard Designer 工具栏](/assets/images/Tutorial/Get_Started/Peakboard_Get_Started_CN_03.png)

## 可视化包

左侧为可视化中所有元素的总览。该部分采用文件夹结构，不同类型的元素都有相应的文件夹。所有的数据源、数据流、变量、脚本和资源都展示在各自文件夹中。在最后一项“屏幕”，列出了您工作空间现有的全部显示屏。由于我们还未添加任何元素，因此目前文件夹为空。

![Peakboard Designer 可视化包](/assets/images/Tutorial/Get_Started/Peakboard_Get_Started_CN_04.png)

Similar to the Windows File Explorer, you can right-click to perform various actions on the folders - alternatively, this works by clicking on the '...' button. For example, open the 'Edit screen size' menu item by right-clicking on the 'Screens' folder. Here you can define the size of the visualization. For this example, you can leave these at the values 1920x1080 (Full HD). The visualization is automatically scaled to the resolution of the connected screen, but the aspect ratio should fit.

## Peakboard Controls

On the right side you will find an overview of existing interface elements - also called controls. With these controls you can visualize your data. There are ready-made controls for different applications that you can use and customize. This starts with simple text boxes, Table Grid, simple charts (circles, lines, bars, and so on), to sophisticated, combinable charts (Advanced Charts), and repeatable surface patterns, such as the List View or Tile View. All elements can either be dragged and dropped onto the workspace or added with a double-click.

![Peakboard Designer – Controls](/assets/images/Tutorial/Get_Started/Peakboard_Get_Started_CN_05.gif)

## Attributes

Below the controls, you will find the attribute overview. Here the respective adjustable parameters and attributes are listed for the currently active element. These parameters are different for each element. For example, try to add another screen by right-clicking on screens (in the Peakboard Explorer on the left). Then click on one of the screens. Now you can set the screen duration for the screens in the attributes. This screen duration defines how long each screen remains visible before the next screen is displayed.

![Peakboard Designer – Attribute](/assets/images/Tutorial/Get_Started/Peakboard_Get_Started_CN_06.png)

# Create visualization

Now you have an overview of the most important areas of the designer. It's time to make your first visualization. Drag and drop to add a text field from the interface elements to the right.

Now you can define different settings for the element in the attributes. Adjust the element to your visual requirements. Define the desired font, orientation, or background. Define a 'text' to be displayed. This will later be replaced by a text from a data source.

![Peakboard Designer – Controls](/assets/images/Tutorial/Get_Started/Peakboard_Get_Started_CN_05b.gif)

Add a 'Linear Gauge' in the 'Chart' group as the second element. Again, you can set various properties such as sizes, colors, etc.

## Usage of resources and images

You can use different file types for your visualization. For example, image files (JPG or PNG), PDFs or a data source can be integrated as an Excel file. To use an image file as a logo in your visualization, simply drag an image file to the Peakboard Explorer or go to the folder menu of the 'Resources' folder and add a 'Local Resource'. Now the file is added to the package. Then you can drag and drop the file from the Peakboard Explorer onto the canvas - be sure to drag onto a blank space. Now you can determine size and position. For other data formats, the process works very similar.

![Peakboard Designer – Drag&Drop](/assets/images/Tutorial/Get_Started/Peakboard_Get_Started_CN_07.gif)

## Connect data source

From data formats such as JSON and XML, databases and SAP via social media to machine, conveyor and sensor information such as Siemens S7 and OPC UA. A wide variety of data can be easily connected and visualized in real time with Peakboard. Further information on the data connections can be found [here](https://peakboard.com/zh-hans/data-connections/?utm_source=HelpCenter&utm_medium=Link&utm_campaign=GetStarted_Article).

In this example, we use one of the simpler data sources, a Microsoft Excel file. In this example, the [Excel file (Download)](/assets/files/examples/Peakboard_Example_Date.xlsx) is loaded directly into the package. The Excel file contains four products with five properties: title, product number, stock quantity, minimum stock and storage capacity. Download the file and add it, just like the image before, to your visualization via drag and drop. Now the file is part of this Peakboard package.

If you want to include Excel files from other locations, you can learn how to do this [here](https://help.peakboard.com/data_sources/cn-excel.html).

![Peakboard Designer – Excel Added](/assets/images/Tutorial/Get_Started/Peakboard_Get_Started_CN_08.png)

Then you must add the resource as a data source. To do this, right-click on the 'Data' folder on the left-hand side or click on the '...' button and select 'Add Data Source' and 'Excel' in the menu. Now enter a name for the data source 'Excel_File' and under Document select the uploaded Excel file.

![Peakboard Designer – Add Data Source](/assets/images/Tutorial/Get_Started/Peakboard_Get_Started_CN_09.gif)

Now you can define which worksheet to use and if there are headers in the first row, as in this case. With OK you can save the data source.

Voilà, you have connected your first data source to Peakboard.

## Connect data and control

Now the last step is missing, you have to connect the data source with an element. Select the element in the workspace, in this case the text element. On the right side under the attributes you will find the attribute 'Text'. Click on the '...' button (1) in this line.

![Peakboard Designer – Add Data Source](/assets/images/Tutorial/Get_Started/Peakboard_Get_Started_CN_10.png)

In the open window, you can now select the data source and select the desired column and row that you want to use. For this example, use Row 0 and the 'Title' column for the heading. Note that in information technology, counting starts at 0, so line 0 is the first line. The line with the headings is ignored. Confirm with OK.

![Peakboard Designer – Add Data Source](/assets/images/Tutorial/Get_Started/Peakboard_Get_Started_CN_11.png)

Now the content of one cell of your data source will be displayed within the text box.

Now you can connect the data source to the gauge diagram. In the respective column, click on the '...' button in the attributes and select the Excel data source in each case. For the field 'Data / Value' (1) define the column 'Stock_Quantity', for the field 'Minimum' (2) the column 'Min_Quantity' and for 'Maximum' (3) the column 'Storage_Capacity'.

![Peakboard Designer – Filled Gauge](/assets/images/Tutorial/Get_Started/Peakboard_Get_Started_CN_12.png)

# Preview

You've made it, your first Peakboard visualization is ready and you can see the result with the 'Preview' button. This can be found in the upper ribbon under the item 'Home'.

![Peakboard Designer – Preview Button](/assets/images/Tutorial/Get_Started/Peakboard_Get_Started_CN_13.png)

It opens a new dialog, which shows the result. You can now transfer this visualization to a Peakboard box.

# Next Step

If you already have a Peakboard box, on the following page you can find an explanation how to plug in the box, connect it and load a visualization onto the box. Read the article: [Connecting and Transferring the First Visualization](https://help.peakboard.com/get_started/cn-peakboard-connecting.html).

We wish you lots of fun and success with Peakboard. If you have problems with the Peakboard Designer, do not hesitate to contact us. All information about getting in touch can be found on the following [page](https://peakboard.com/zh-hans/support/?utm_source=HelpCenter&utm_medium=Link&utm_campaign=GetStarted_Article).
