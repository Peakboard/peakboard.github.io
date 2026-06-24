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

The category **Calculations** in the dataflow step selection holds the steps that condense and continuously calculate values: aggregate data or accumulate a column. To learn how to create a dataflow and add steps in general, see the [first steps with dataflows](/dataflows/en-getting-started.html).

## Aggregate

With this step you aggregate the values of one or more columns. Aggregating data is a common use case in data preparation. A typical example is sales data with individual transactions. Most of the time you are interested in single, compressed numbers like the total sales over all transactions or the three customers with the highest sales.

For each aggregation, choose the mathematical function in the [Aggregation] field (1), the column it is applied to in the [Column] field (2), and enter a name for the result column under [New column name] (3). With the [+] button (4) you add another aggregation. With [Group aggregation] (5) you optionally select one or more columns to group the aggregation by identical values of these columns. If the data source contains a column with timestamps, enable [Time based aggregation] (6) and aggregate the data by a defined time interval.

![Aggregate](/assets/images/dataflows/calculations/calculations-01-aggregate.png)

The following mathematical functions are possible:

* **Min** - returns the smallest value within the aggregation group
* **Max** - returns the largest value within the aggregation group
* **Sum** - sums all elements of the group
* **Average** - calculates the average
* **Count** - counts all rows in a group (and is independent of a specific numeric column)
* **Distinct count** - counts the distinct number of elements. For example, if there are customer numbers 4711, 4711, 4712, 4711, the distinct count returns 2 because there are two distinct customer numbers.

## Accumulate

With this step you add a new column to the table with the accumulated (running total) values of a previously selected column. In the [Columns] field (1) pick the column to accumulate and enter a name for the result column under [New column name] (2). A requirement for this step are columns with the data type number.

![Accumulate](/assets/images/dataflows/calculations/calculations-02-accumulate.png)
