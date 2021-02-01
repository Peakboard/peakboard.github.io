---
layout: article
title: Bar Chart
menu_title: Bar Chart
description: Information about Peakboard Designer Bar Chart Control.
lang: en
weight: 640
ref: con-640
redirect_from:
  - /controls/en-bar-chart.html
---
In addition to the [General Properties](https://help.peakboard.com/controls/en-general-properties.html), the Bar Chart Control has further properties.

A data source is assigned to the chart under **Source**.
You can now assign the column of the data source responsible for the category to the **X axis**.
The data for this must be of data type *String*, while the data for the **Y axis** - the numerical values - must be of data type *Number*.

> ## Note:
>
> Only data of the type **Number** can be used for the Y-axis!

![Bar Chart](/assets/images/Controls/barchart/barchart01.png)

After the data has been assigned, the color scheme can be adjusted under **Colors** using the **Select** button.

![Bar Chart Color](/assets/images/Controls/barchart/barchart02.png)

You can either choose from a predefined color palette or assign your own colors.

**Show Label** shows or hides the labels.
With [Conditional Formatting](/controls/en-cf.html) the control can be adapted rule-based.