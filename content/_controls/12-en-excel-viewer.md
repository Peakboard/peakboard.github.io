---
layout: article
title: Excel Viewer
menu_title: Excel Viewer
description: Information about Peakboard Designer Excel ViewerControl.
lang: en
ref: con-12
---

Peakboard offers extensive possibilities to integrate data from different sources and then visualize this data with controls. This is the default way. In some cases it can be useful to import the visualization from outside and not just the data. This chapter describes the Excel Viewer control, with the help of which a chart embedded in an Excel file can be directly integrated as part of the visualization.

In the following example, an Excel file containing a table and a chart is used as an example. In Excel, each chart has a name. We’ll meet it again later.

![image_1](/assets/images/Controls/Excel-Viewer/Controls_ExcelViewer_01.png)

For simplicity, we add the Excel file in the Peakboard-Designer as a static resource. Of course, it is also possible to retrieve the file from a cloud memory, network drive or web address. This doesn’t change the procedure.

The Excel Viewer control is easiest to configure using the Chart property (click on the three points). You first have to select a resource, then the desired spreadsheet and finally the desired diagram (therefore the diagram name was important). The property Refresh-Time defines how often the chart is reloaded from the resource.

![image_1](/assets/images/Controls/Excel-Viewer/Controls_ExcelViewer_02.png)

The following screenshot shows the Excel chart in the Peakboard-Preview.

![image_1](/assets/images/Controls/Excel-Viewer/Controls_ExcelViewer_03.png)

> ### Attention!
>
> Please note that the chart does not necessarily have to look exactly the same as in the original Excel. For technical reasons, optical deviations may occur.

> ### Attention!
>
>Please check very carefully whether it really makes sense to use Excel as a chart generator in your case! Only embedding the data to visualize them with Peakboard-specific charts is technically always the better alternative.
