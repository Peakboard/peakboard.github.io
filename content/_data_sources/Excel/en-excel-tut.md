---
layout: article
title: Including Excel File From a Network Drive
menu_title: Including Excel File From a Network Drive
description: Including Excel File From a Network Drive
lang: en
weight: 600
ref: dat-6000
homepage: true
image: /assets/images/Tutorial/Overview/Tutorial_Excel_Small.png
redirect_from:
  - /tutorials/04-en-excel-tut.html
  - /tutorials/en-excel-tut.html
---
Peakboard supports a variety of beautiful data sources; often newcomers just like to use Excel. A normal documentation on Excel as a data source can be found at [here.](/data_sources/13-en-excel.html) This step-by-step tutorial shows the complete process from including the file to preparing the data in a small chart.

The following screenshot shows the original application file. It contains a table of two departments (A and B) and a kind of performance indicator per month. The spreadsheet also contains additional data and an Excel chart. We are not interested in all these data. We only want to process the first table at the top.

![image_1](/assets/images/Tutorial/Excel/TutorialExcel_01.png)

We assume that the Excel file is in a shared directory. Create a new Excel data source and fill in the text fields accordingly. In this example, we use the access via a Peakboard-Bridge (i. e. specify in Source NetworkSharedFile). Peakboard accesses the bridge and this accesses the file in the directory. This detour is necessary for safety reasons in this form. If you don’t want to install the bridge on a central server to start a project, you can simply run it on your local desktop computer. Specify the path of the Excel file (as the UNC path starting with `\\MeinShare\MeinVerzeichnis\MeineDatei.xlsx`) and the name of the machine on which the bridge service is running (in this case, margin: `2501`, where `2501` is the default port).

If the access works, you can now see all available table sheets in the dropdown box. They are loaded directly from the Excel file. Check the checkbox “Switch Rows and Columns”. As a result, the months are deducted downwards and the department to the right, exactly the same as in the original application file. Remove the checkmark at “Select All”, because we only want to use a certain area and not all data on the spreadsheet. The usable range is the cell range A1 to M3, so write “A1: M3” in the Range field.

![image_1](/assets/images/Tutorial/Excel/TutorialExcel_02.png)

A click on “Load Data” provides the desired test data as shown in the next screenshot. In this way, the data is optimally prepared to be linked directly to a chart.

![image_1](/assets/images/Tutorial/Excel/TutorialExcel_03.png)

The next picture shows the chart configuration. Only one of the two departments is displayed. The months are applied to the right. The column colors were all set to red manually, otherwise the chart would randomly determine twelve colors for twelve months. That would be a bit of a colourful one. In addition to the data series, there are a few details that need to be spruced up, such as the title and the subtitle. The legend was set to invisible for optical reasons.

![image_1](/assets/images/Tutorial/Excel/TutorialExcel_04.png)

The following picture shows our visualization project in preview with the finished chart.

![image_1](/assets/images/Tutorial/Excel/TutorialExcel_05.png)

> ### Important Note!
>
>If you want to start freshly with Peakboard and want to use Excel data, it is best to first try to include the Excel file as a fixed resource. This is the easiest way to get the data. Then there is no need to  configure a Bridge. The (dynamic) access via the Bridge is then traced later. This makes it possible to achieve initial, demonstrable success even faster, especially at the start.
