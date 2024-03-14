---
layout: article
title: Linear and circular gauges
menu_title: Gauges
description: Information about the Peakboard Designer linear and circular gauge controls.
lang: en
weight: 660
ref: con-660
redirect_from:
 - /controls/en-linear-gauge.html
 - /controls/en-circular-gauge.html
 - /controls/Chart/en-linear-gauge.html
 - /controls/Chart/en-circular-gauge.html
---

You can use the linear and circular gauge to show progress, utilization or similar states.

## Adding a gauge

To add one of the gauges to your application, drag and drop the control (1) onto the workspace. The dialog for configuring the control opens automatically.

![Add control](/assets/images/Controls/gauge/en-gauge-01.png)

## Configure gauge

You can make the first basic settings in the open dialog of the control. In the left area of the dialog (1) you will find the available tabs. You can make the corresponding settings on the right (2). The Data/Value tab is opened automatically.

![Dialog](/assets/images/Controls/gauge/en-gauge-02.png)

### Connect data source with control

In the Data/Value tab, you can enter a value manually (1) or link a data source with data of the Number data type to the control. This value is then displayed live.
To link the data source, select it from the [Name of data source] (2) drop-down menu. If it is a tabular data source, select the desired column (3) and row (4).

![Link data source](/assets/images/Controls/gauge/en-gauge-03.png)

### Define minimum and/or maximum

In order to display progress or utilization, the control requires a minimum and maximum value. By default, the value [0] is defined for the minimum, the value [100] for the maximum. You can either change both values manually (2) via the respective tab (1) or connect a data source (3). For example, you can link the target value of a production system as a variable for the maximum and the actual value of the machine as the current value to display the daily progress.

![Minimum and maximum](/assets/images/Controls/gauge/en-gauge-04.png)

### Assign titles and subtitles

In the [Title] (1) and [Subtitle] (2) tabs, you can give the control a title and subtitle either manually or by linking a data source.

![Title and subtitle](/assets/images/Controls/gauge/en-gauge-05.png)

## Customize the appearance of the control in the attributes

To adjust the appearance of your gauge, exit the configuration dialog.
You can adjust the size of the control by dragging the corners or sides (1) of the control or in the attributes in the [General] section (2). There you can also define spacing for the control and adjust the title and subtitle previously assigned in the dialog. Alternatively, you can double-click on the control to reopen the dialog.

In the [Data] section (3), you can adjust the settings previously made in the dialog for [Data/Value] as well as the minimum and maximum.

![General and data](/assets/images/Controls/gauge/en-gauge-06.png)

In the [Appearance] section, you can then adjust the other visual aspects, such as the appearance of the bar (1). You can specify whether and how the value should be displayed (2) and how the background of the control (3) should be designed.
You can also insert a pointer into the circular gauge and define its appearance (4).

![Appearance](/assets/images/Controls/gauge/en-gauge-07.png)

In the Logic area, you can make the control available for scripts (1) and use conditional formatting (2) to adjust the properties of the control based on rules, for example to implement changes to the appearance when threshold values are reached.

![Logic](/assets/images/Controls/gauge/en-gauge-08.png)
