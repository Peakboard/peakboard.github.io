---
layout: article
title: Pie Chart
menu_title: Pie Chart
description: Information about Peakboard Designer Pie Chart Control.
lang: en
weight: 610
ref: con-610
redirect_from:
---
The pie chart is suitable for displaying distributions and shares.
It is advisable to limit the number of parts to a maximum of 7, otherwise the diagram will quickly become unclear and the subareas too small.

In addition to the [General Properties](https://help.peakboard.com/controls/en-general-properties.html),  the pie chart Control has other properties.

Under **Source** a data source is assigned to the chart.
You can now assign the column of the data source responsible for the category to the **X axis**.
The data for this must be of data type *String*, while the data for the **Y axis** - the numerical values - must be of data type *Number*.

> ## Note:
>
> For the Y-axis only data of the type **Number** can be used!

![Pie Chart](/assets/images/Controls/piechart01.png)

After the data has been assigned, the color scheme can be adjusted under **Colors** using the **Select** button.

![Pie Chart Color](/assets/images/Controls/piechart/piechart02.png)

You can either choose from a predefined color palette or assign your own colors.

**Show Legend** shows or hides the legend.
With [Conditional Formatting](/controls/en-cf.html) the control can be adapted rule-based.
