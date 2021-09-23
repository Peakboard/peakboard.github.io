---
layout: article
title: Advanced Chart
menu_title: Advanced Chart
description: Information about Advanced Chart.
lang: en
weight: 600
ref: con-600
redirect_from:
---

Under [Advanced Chart] you can find a large selection of charts that you can also use to create a series. 
For example, you can easily display data from different data sources in the form of charts and align them on a common axis.  

To stack several different charts and link each one to a data source, first click on [Add]. 

![image_0](/assets/images/Controls/advanced-chart/advancedchart-00.png)


### EDIT ADVANCED CHART 

After you have created your first chart, you can add another chart via [Add Series] (1). 
Here you can edit the general properties (2) of your previously selected chart as well as its appearance (3). 

Since the different charts differ in their appearance, their properties differ as well. 
However, it should be no problem to find out the specifics of individual diagrams by looking at the names of the properties themselves. 

(4) First link the diagram under [Source] with a data source of your choice and determine a value for the [X axis] and the [Y axis]. 
The X axis usually describes the label of a data point, the Y axis its value. 
In the pie chart example, the Y axis controls the width of a pie slice, the X axis its label. 
The concrete function of X- and Y-axis is defined differently for each chart. 
(5) Under [Sorting] you define the order and under (6) you find the possibility to adjust diagram-specific general properties. 
In the right part of the dialog a preview of your diagram is displayed (7). 

Under [Appearance] (3) you will find further setting options. 

![image_1](/assets/images/Controls/advanced-chart/advancedchart-01.png)

### PROPERTIES

In the properties of the Advanced Chart, in addition to the [general properties](/controls/en-general-properties.html), other important settings can be made:

* Click on [Show Gridline] to activate or deactivate the gridlines for an axis. 
* Click on [Label Intersect Action] to control what happens when labels intersect. Three modes are available:
	* The [Auto] mode automatically determines an optimal course of action. 
	* If you select [Hide] labels are omitted at regular intervals. 
	* With a click on [Multiple Rows] you create multiple layers to display all labels. 
* A click on [Label Rotation] rotates the labels by the desired angle. 
* The property [Line] offers you the possibility to create static lines for certain values, which can also be repeated at regular intervals.
* Move the table in by the desired value using [Plot Offset]. 
* Change the position of the label from left to right or from top to bottom via [Opposed Position]. 
*  If the property [Show Label] is activated, the legend will be displayed. 

![image_3](/assets/images/Controls/advanced-chart/advancedchart-03.png)