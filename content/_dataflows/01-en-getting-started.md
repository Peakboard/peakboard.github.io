---
layout: article
title: Dataflows - Getting started
menu_title: Getting started
description: Dataflows - Getting started
lang: en
weight: 100
ref: flow-100
redirect_from:
  - /dataflows/01-en-getting-started.html
---
In Peakboard, data sources are responsible for data collection. They communicate with all types of source systems and deliver the data (with a few exceptions) in the form of a table. Either you access this table-like data from the controls and display it directly or you use a script that prepares the data. Examples can be found [here](../scripting/03-en-table-data.html) or [here](../scripting/04-en-manipulating-table-data.html). The data flows discussed in this section can be used to to do a wide variety of data transformation in a way that requires little or no knowledge of scripting. Typical things you do with dataflows are

* Name columns cleanly and delete columns that are not required
* Adjust data types
* Add new columns and fill them with content according to a certain logic
* Link several data sources with each other - also from different source systems - and merge them into a single new table

The idea behind the dataflows is to change the dataset step by step, starting from a single table, until the result meets your requirements. The user can see, change and adjust the individual steps for each dataflow in the Peakboard Designer. Each individual step can be observed directly using test data. This makes it easy to check whether the sequence has the desired effect and what you have in mind comes out at the end.

# Create a new dataflow

In the Package Explorer you can find dataflows as one of the main artifacts of each package. Click on the corresponding button to create a new dataflow.

![Create a new flow](/assets/images/dataflows/dataflows-create.png)

The initial base table must then be selected in the main dialog. Even if several tables are involved in the data transformation at the end, the dataflow always starts with exactly one table.

![select main table](/assets/images/dataflows/dataflows-maindialog-01.png)

Now all preparations are done. Further transformation steps can now be applied to the table using the *Add Step* button. All the steps already used are listed in the right-hand area of the dialog. They can of course be changed or deleted afterwards, if necessary. Depending on the step you click on, the left dialog area shows the state of the data AFTER this step. This is not very spectacular in the following screen, because the dataset is still initial. The data is still unchanged.

![select main table](/assets/images/dataflows/dataflows-maindialog-02.png)

