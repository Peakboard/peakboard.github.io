---
layout: article
title: Filter and sort
menu_title: Filter and sort
description: Filter and sort
lang: en
weight: 3000
ref: flow-3000
redirect_from:
  - /dataflows/30-en-filter-data.html
  - /dataflows/en-filter-data.html
---
## Filter

With this step you filter the table using a logic defined in a script.

For example, if you get warehouse transaction data from a previous system for two warehouse areas, but you want to consider both areas separately (for example, with a utilization indicator for one and the other area), you create two dataflows and remove the data of the other area right at the beginning using a filter. This way you turn a mixed data source into two separate ones.

![Filter](/assets/images/dataflows/dataflows_filter.gif)

## Sort

With this step you sort the table by one or more columns.

![Sort](/assets/images/dataflows/dataflows_sort.gif)

## Filter by date/time columns

With this step you filter the table for a time data source, provided the table has a column with date or time values. A requirement for this step is also the column type string.

![Filter by date/time columns](/assets/images/dataflows/dataflows_filter-date-time.gif)

## Remove duplicates

With this step you remove duplicates based on a column.

![Remove duplicates](/assets/images/dataflows/dataflows_remove-duplicates.gif)
