---
layout: article
title: Edit Columns
menu_title: Edit Columns
description: Edit Columns
lang: en
weight: 1000
ref: flow-1000
redirect_from:
  - /dataflows/10-en-adding-deleting-changing-columns.html
  - /dataflows/en-adding-deleting-changing-columns.html
---
## Add column

With this step you add a new column to the table, whose values / data / contents are created by a logic defined in a script.

![Add column](/assets/images/dataflows/dataflows_add-column.gif)

With the button [Validate] you can check the validity of the script. The new column is immediately visible in the preview. The logic to create it is also executed directly.

## Rename column

With this step you rename columns. Use this step to describe the content of the columns as precisely as possible. Often the columns come poorly named from the data source (e.g. from SAP). Do not use underscores. Instead, prefer to use a classic case-sensitive camel case notation, e.g. MaxCustomerRevenue, MinCustomerRevenue, etc.

![Rename column](/assets/images/dataflows/dataflows_rename-column.gif)

## Reorder columns

With this step you change the order of the columns to better keep track of them. Use this step to separate what is important from what is not.

![Reorder columns](/assets/images/dataflows/dataflows_reorder-column.gif)

## Change column data type

With this step you change the data type of individual columns. Typical scenarios for this step are numbers that are imported as strings but are converted to real numeric types so that they can be used for example in aggregations or in charts.

![Change column data type](/assets/images/dataflows/dataflows_change-datatype.gif)

## Switch rows/columns

With this step, you switch the columns and rows of the table and thus rotate them. The first column is used for naming the new columns.

![Zeilen/Spalten tauschen](/assets/images/dataflows/dataflows_switch-rows-columns.gif)

## Remove columns

With this step you remove columns. All checked columns will be removed and will not be displayed from now on. We recommend to consistently remove all unneeded columns to keep everything as neat as possible.

![Remove columns](/assets/images/dataflows/dataflows_remove-columns.gif)
