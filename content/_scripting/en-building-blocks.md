---
layout: article
title: Peakboard building blocks
menu_title: Peakboard building blocks
description: Information about Peakboard building blocks
lang: en
weight: 104
ref: scr-104
redirect_from:
---

To simplify the creation of visualizations and interactive dashboards, Peakboard already offers several approaches. 
On the one hand, there is the [conditional formatting](/controls/en-cf.html) for data-dependent display logic, on the other hand, [dataflows](/dataflows/en-getting-started.html) support the preparation of incoming data for visualization. 
Requirements that cannot be met with these two features, on the other hand, often require programming skills.
With Peakboard Building Blocks, even users who are not experienced in scripting can now fulfill these requirements by simply combining graphical blocks, without having to write any code themselves.

### Peakboard building blocks in the script editor
In the [script editor](/scripting/en-script-editor.html) you have the option to select whether you want to write the required code yourself or use the Peakboard building blocks to combine it using the slider at the top right.

<div class="box-warning" markdown="1">
It is possible to switch from the graphical view of the buidling blocks to the written code by pressing the slider, but it does not work the other way around.
</div>

Depending on the selected mode, the [script tree](/scripting/en-script-tree.html) on the right side will change. 
Select [block mode], to work with the Peakboard building blocks. 
Each building block corresponds to a command and can be attached to the previous one by dragging and dropping, and can be arranged as required by the flow logic. 
The assembled building blocks form a logical program flow that is later executed from top to bottom. 
Building blocks that are no longer needed can be deleted by dragging and dropping them into the trash can. 

![BuildingBlocks01.png](/assets/images/scripting/buildingblocks/BuildingBlocks01.png)


### The script tree

In the upper area of the [script tree](/scripting/en-script-tree.html) you will find all elements listed that were used in your current visualization. 
For example, if you have placed a [text](/controls/Common/en-text-block.html) in your visualization and given the control a name, you can click [set value] one hierarchy level below [text] to adjust its properties.  

### Create variables

Further down in the script tree you will find the so-called variables. 
Variables are containers in which you can store values such as texts, numbers or lists. 
To create a new variable, simply click on [+]. 

![BuildingBlocks03.png](/assets/images/scripting/buildingblocks/BuildingBlocks03.png)


### Example of a program flow

The following screenshot shows a program flow that can be used to dynamically customize a text, for example, to display a certain message on your dashboard at a certain time. 
First create the control [text](/controls/Common/en-text-block.html) and give it a name. 
You can see how to do this in our helparticle on the topic. 
Then open the script editor and switch to [building blocks mode].  
In the first line of the program flow, a text is assigned to the variable [outputtext]. 
This text is composed of the control [text] and the content of the control [textblock]. 
In the second line, another text is added to the text by the building block [append text]. 
The third line shows the output of the variable in a push notification. 
The flow does not have to be linear and also allows branching like "if... then..." as well as loops. 

![BuildingBlocks04.png](/assets/images/scripting/buildingblocks/BuildingBlocks04.png)


In the next example you can see how to create a loop using the data from a data source. 
If the product category in the list of products is "Bikes", the weight should be aggregated. 
First, the variable "WeightAggregation" is set to 0. 
Then a loop building block is used to iterate from 0 to the number of records in the data source. 
For this we use the variable "n". 
Using the command "in list.... get string column", the category of the record with ordinal number "n" is checked to see if it is "Bikes". 
If it is, the weight "Weight" of the record is added to the variable "WeightAggregation". 
At the end of the loop the value is printed to the log console. 

![BuildingBlocks05.png](/assets/images/scripting/buildingblocks/BuildingBlocks05.png)
