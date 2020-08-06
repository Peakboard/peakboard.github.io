---
layout: article
title: Line Chart
menu_title: Line Chart
description: Information about Peakboard Designer Line Chart Control.
lang: en
weight: 630
ref: con-630
redirect_from:
---
The line chart is suitable for depicting the functional relationship between two values.

In addition to the [General Properties](https://help.peakboard.com/controls/de-allgemeine-eigenschaften.html) the Doughnut Chart Control has further properties.

A data source is assigned to the chart under **Source**.
You can now assign the column of the data source responsible for the category to the **X axis**.
The data for this must be of data type *String*, while the data for the **Y axis** - the numerical values - must be of data type *Number*.

> ## Note:
>
> Only data of the type **Number** can be used for the Y-axis!

![Doughnut Chart](/assets/images/Controls/linechart/linechart01.png)

After the data has been assigned, the color scheme can be adjusted under **Colors** using the **Select** button.

![Doughnut Chart Color](/assets/images/Controls/linechart/linechart02.png)

You can either choose from a predefined color palette or assign your own colors.

**Show Legend** shows or hides the legend.
With [Conditional Formatting](/controls/en-cf.html) the control can be adapted rule-based.