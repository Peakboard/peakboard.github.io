---
layout: article
title: Doughnut Chart
menu_title: Doughnut Chart
description: Information about Peakboard Designer Doughnut Chart Control.
lang: en
weight: 620
ref: con-620
redirect_from:
---

The Doughnut Chart is suitable for displaying distributions and shares.
It is recommended that you limit the number of parts to a maximum of 7, otherwise the chart will quickly become unclear and the subareas too small.

In addition to the [General Properties](https://help.peakboard.com/controls/en-general-properties.html),  the Doughnut Chart Control has further properties.

A data source is assigned to the chart under **Source**.
You can now assign the column of the data source responsible for the category to the **X axis**.
The data for this must be of data type *String*, while the data for the **Y axis** - the numerical values - must be of data type *Number*.

> ## Note:
>
> Only data of the type **Number** can be used for the Y-axis!

![Doughnut Chart](/assets/images/Controls/doughnutchart/doughnutchart01.png)

After the data has been assigned, the color scheme can be adjusted under **Colors** using the **Select** button.

![Doughnut Chart Color](/assets/images/Controls/doughnutchart/doughnutchart02.png)

You can either choose from a predefined color palette or assign your own colors.

**Show Legend** shows or hides the legend.
With [Conditional Formatting](/controls/en-cf.html) the control can be adapted rule-based.