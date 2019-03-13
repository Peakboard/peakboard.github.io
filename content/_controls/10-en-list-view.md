---
layout: article
title: ListView
menu_title: ListView
description: Information about Peakboard Designer ListView Control.
lang: en
ref: con-10
---

he ListView control is very similar in its behavior to the [Tile Control](/controls/14-en-tilecontrol.html) and the [Tile View](/controls/11-en-tile-view.html).
While with [Tile Control](/controls/14-en-tilecontrol.html) the arrangement of the individual tiles is left to the developer, with ListView tile elements are automatically provided according to the available range as long as entries are present in the data source. The following screenshot illustrates this.

![image_1](/assets/images/Controls/ListView/list1.png)

The elements can be arranged vertically or horizontally. The setting for this is made under Orientation, where the desired orientation can be set via a dropdown list. 

You can also use the ListView control to change the display according to a rule.
The following example also uses the list used in the [Tile Control](/controls/14-en-tilecontrol.html), which was extended by the column Status:

![table1](/assets/images/Controls/ListView/table1.png)

A rule should be defined for the visualization, which contains a warning if a production line comes to a standstill.
To do this, the ListView element created is selected and then an additional template is created using the three points next to Template selection (1). 
In a first step, the rule editor is opened via the gear symbol (2). The + symbol (3) is used to create a new rule. 
For the example, an alternative template should always be displayed if the status of a production line is Stop or Standstill. (4)
The second step is to create the template that is valid for the rule you have just created. To do this, exit the rule editor via OK (5) and open the template editor (6).

![image_2](/assets/images/Controls/ListView/list2.png)

This is identical to the Tile, ListView or TileView editors and uses the same database.
First, the size is set to the same as the size of the ListView element so that the alternative template is inserted seamlessly into the list (1).
The controls can then be dragged and dropped onto the interface and linked to the corresponding columns of the data source.

![image_3](/assets/images/Controls/ListView/list3.png)

Click OK to exit the editor and save the template.

Finally, the result can be viewed in the preview. It shows that production line 3 is at a standstill. This corresponds to the input data of the table shown at the beginning.

![image_4](/assets/images/Controls/ListView/list4.png)
