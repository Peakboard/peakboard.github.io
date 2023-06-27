---
layout: article
title: Calculations
menu_title: Calculations
description: Calculations
lang: en
weight: 6000
ref: flow-6000
redirect_from:
  - /dataflows/50-en-aggregate-data.html
  - /dataflows/en-aggregate-data.html
---
## Aggregate

With this step, you aggregate the values of one or more columns.

Aggregating data is a common use case in data preparation. A typical example is sales data with individual transactions. Most of the time you are interested in single, compressed numbers like the total sales over all transactions or the three customers with the highest sales. You can perform such aggregations with the aggregate step.

In the aggregate step dialog, you define various aggregation steps using aggregation functions. To do this, you select the mathematical function you want to execute and the column with which it should be executed and give the result column a name.
To add another function, click on the plus symbol.
You can also create aggregation groups. To do this, you optionally select columns to group the aggregation by identical values of this column.

The following mathematical functions are possible:

* **Min** - returns the smallest value within the aggregation group
* **Max** - returns the largest value within the aggregation group
* **Sum** - sums all elements of the group
* **Average** - calculates the average
* **Count** - counts all rows in a group (and is independent of a specific numeric column)
* **Distinct count** - counts the distinct number of elements. For example, if there are customer numbers 4711,4711,4712,4711, the distinct count will return 2 because there are two distinct customer numbers.

![Aggregate](/assets/images/dataflows/dataflows_aggregate.gif)

## Accumulate

With this step, you add a new column to the table with the accumulated values of a previously selected column.
Requirement for this step are columns with the data type [number].

![Accumulate](/assets/images/dataflows/dataflows_accumulate.gif)
