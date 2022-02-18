---
layout: article
title: Your first steps with Dataflows 
menu_title: Getting started
description: Dataflows - Getting started
lang: en
weight: 100
ref: flow-100
redirect_from:
  - /dataflows/01-en-getting-started.html
  - /dataflows/en-first-steps.html
---
Data sources communicate with source systems of all kinds and deliver the data mostly in form of a table. 
To display this data, you can either access it with the [controls](/controls/en-general-properties.html) or use a [script](/scripting/de-script-engine.html) to process it first. 
Read here how [Postprocessing table data works](/scripting/en-table-data.html) or how to [manipulate table data](/scripting/en-manipulating-table-data.html). 
In this article you will learn how to post-process various data with little scripting knowledge using dataflows. 
With dataflows you can for example 
 
* [Name columns cleanly and delete columns that are not required.](https://help.peakboard.com/dataflows/en-adding-deleting-changing-columns.html#:~:text=Remove%20Columns%20-%20Deletes%20columns)
* [Adjust data types.](https://help.peakboard.com/dataflows/en-adding-deleting-changing-columns.html#:~:text=is%20self-explanatory.-,Change%20data%20Type,-You%20can%20use)
* [Add new columns and fill them with content according to a certain logic.](/dataflows/en-adding-deleting-changing-columns.html)
* [Link several data sources with each other - also from different source systems - and merge them into a single new table.](/dataflows/en-joining-data.html)

Dataflows allow you to start from a single table and gradually adjust the data set until the result meets your needs. 
You can review, change, and add to the individual steps for each dataflow in the Peakboard Designer. 
This makes it easy to check whether the sequence has the desired effect, and the expected result appears. 

# Create a new dataflow

Click on [...] next to [Dataflows] or your [Datasource] in the explorer to create a new Dataflow. 

![Create a new flow](/assets/images/dataflows/getting-started/dataflows-create.png)

Next, select your base table (1) and confirm via [OK] (2). Even if several tables are involved in the data transformation at the end, the dataflow always starts with exactly one table. 
Use the text field (3) to assign a unique name for easier identification of the dataflow.

![select main table](/assets/images/dataflows/getting-started/dataflows-maindialog-01.png)

Now all preparations are done. 
Via [Add Step] (4) further transformation steps can now be applied to the table. 
In the right area of the dialog all already applied steps are listed. 
Of course, they can be changed or deleted later. 
Click on one of the steps and display the state of the data **AFTER** this step in the dialog area on the left. 
The dataset in this example is, as you can see in the screenshot below, of course still in its initial state.  

Finally, you can set whether the dataflow should be updated together with its source or should follow its own interval (5).

![select main table](/assets/images/dataflows/getting-started/dataflows-maindialog-02.png)

