---
layout: article
title: Add, Delete and Change Columns
menu_title: Add, Delete and Change Columns
description: Add, Delete and Change Columns
lang: en
weight: 1000
ref: flow-1000
redirect_from:
  - /dataflows/10-en-adding-deleting-changing-columns.html
---
This section describes the steps for creating new columns, deleting and changing metadata (such as the data type).

## Add Column - Adds a new column

Add Column adds a new column. A Lua expression, which is written into the text field, decides with which content exactly the new column is filled. Any valid Lua expression must return the value with *return*. For a fixed value, for example, simply return "Hello". In the following example, a new column named *TopCustomer* is created. Depending on whether the data in the Sales column contains a value of greater than 10, the expression returns "Yes", otherwise "No".

![Add Column](/assets/images/dataflows/dataflows-add-column01.png)

Use the Validate button to check the validity of the script. The new column is immediately visible in the preview. The creation logic is also executed directly.

![Add Column](/assets/images/dataflows/dataflows-add-column02.png)

Note that the Lua expressions can become very complicated. All other data artifacts are available in the script, e.g. other data sources or variables.

## Add Lookup Column - Add a new column with references to another data source

Add Lookup Column adds a new column from another data source. The following example shows the principle. The base value is the column *Customer*, which contains the customer name. The lookup is configured to compare this value with the column of another data source (Lookup Data Source and Look Up Target Column). If a suitable row is found, the content of the Lookup Return Column is returned.

![Add Lookup Columns](/assets/images/dataflows/dataflows-add-lookup-column01.png)

The following picture shows the result. For each customer in the transaction table, the city is selected from the data source "customers". Note that the column simply remains empty if no value can be found for an entry. In this way, the requirement can be easily implemented to find data that does not have any equivalent in another data source. One would then simply have to filter out all lines in such a constellation that are empty in the newly generated column.

![Add Lookup Columns](/assets/images/dataflows/dataflows-add-lookup-column02.png)

## Remove Columns - Deletes columns

This step is self-explanatory. All selected columns are removed and no longer displayed. It is recommended that all users consistently eliminate all columns that are not required. This makes the data flows and the whole board simpler and leaner.

![Remove Columns](/assets/images/dataflows/dataflows-remove-column01.png)

## Rename Columns

The operation is self-explanatory. Use this step to describe the contents of the columns as precisely as possible. The columns often come with bad names from the data source (for example, from SAP). Don't use underscores, because they're ugly. Instead, use a classic case-sensitive camel case notation, e.g. MaxCustomerRevenue, MinCustomerRevenue, etc...

![Rename Columns](/assets/images/dataflows/dataflows-rename-column01.png)

## Reorder Columns

You can use this step to change the order of the columns to improve clarity. Use this feature to separate the important from the unimportant. The operation of the dialog is self-explanatory.

![Reorder Columns](/assets/images/dataflows/dataflows-reorder-column01.png)

## Change data Type

You can use this step to change the data type of a column. Typical scenarios for this process are numbers that are imported as a character string but converted into real numeric types so that they can be used in aggregations or charts, for example.

![Change Data Type](/assets/images/dataflows/dataflows-change-datatype01.png)

## Sort Columns - Sort data

This step allows you to change the order of the lines. It is possible to sort by several columns.

![Sort Columns](/assets/images/dataflows/dataflows-sort-column01.png)

## Switch Rows/Columns
You can use this step, to converte a table to the transposed representation.
The first column is used to name the new columns.

![Switch Rows/Columns](/assets/images/dataflows/dataflows-switch-row-column01.gif)





