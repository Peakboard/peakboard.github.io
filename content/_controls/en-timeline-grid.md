---
layout: article
title: Timeline Grid
menu_title: Timeline Grid
description: Information about Peakboard Designer Timeline Grid Control.
lang: en
weight: 695
ref: con-695
redirect_from:
---

The idea of the Timeline Grid is to display a kind of timeline and to show different states in a time course. 
For example, this could be used for a machine that has the states *set up*, *producing* and *error*. 
A representation over time is to be made, which clearly shows the individual states.
 Please first note the following general information and recurring operating patterns for control elements:

[General Properties](https://help.peakboard.com/controls/en-general-properties.html)

In the following example, a simple, stationary list is used as the data basis. 
It contains a timestamp, which activity has started at this point in time and how long the condition has lasted. 
Ideally, the data coming from the machine should first be put into this form and can then easily be bound to the Timeline Grid.

![timelinegrid-01](/assets/images/Controls/TimelineGrid/timelinegrid-01.png)

In the next step, the columns must be bound with the corresponding information. **Color Column Name** are the columns of the data source, which are used to determine the color. **Duration Column Name** is the column that defines the width and **Caption Column Name** is the column that contains the caption for a time period.

![timelinegrid-02](/assets/images/Controls/TimelineGrid/timelinegrid-02.png)

Finally the mapping between the value of the color and the actual color has to be set. The property is simply called **Mapping**. The following screenshot shows that the value **Preparing** should be grey, **Producing** green and **Error** red.

![timelinegrid-03](/assets/images/Controls/TimelineGrid/timelinegrid-03.png)

Thus, the following view results from the example data from above.

![timelinegrid-04](/assets/images/Controls/TimelineGrid/timelinegrid-04.png)

