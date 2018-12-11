---
layout: article
title: Aggregate and Condense Data
menu_title: Aggregate and Condense Data
description: Aggregate and Condense Data
lang: en
ref: flow-50
---
Aggregating data (or condesing data, which is the same) is an absolutely common use case for data preparation. A typical example would be sales data with individual transactions. They're boring one by one. What the viewer is later interested in are individual, aggregated figures such as the total turnover of all transactions or the three customers with the highest turnover. Exactly such calculation can be done with the aggregate step.
The following dialog shows a typical example. One or more aggregation groups are clicked in the upper area. This is the level at which aggregation is to take place. In the example, these are the columns Material and Customer. We will therefore later receive key figures at the level of all customer/material combinations. Each combination of customer and material is unique in the result.
The aggregation functions are defined in the lower area. This usually consists of a mathematical function and a numeric column. The following functions are possible: 

* *Min* returns the smallest value within the aggregation group
* *Max* supplies the largest value within the aggregation group
* *sum* all elements of the group
* *Average* calculates the average
* *Count* counts all rows in a group (and is independent of a particular numeric column)
* *Count Distinct* counts the distinct number of elements. For example, if you have customer numbers 4711,4711,4712,4711, the distinct count returns 2 because there are two different customer numbers.

![Join Data](/assets/images/dataflows/dataflows-join01.png)

For each material and customer, the example provides us with the sum of all articles sold, as well as the smallest and largest sales made with the respective material/customer combination in a single transaction.

![Join Data](/assets/images/dataflows/dataflows-join02.png)

Attention!! Of course, it is legitimate not to specify a group. In this case, the result is exactly one row that contains the aggregation for all data. It is also legitimate not to specify an aggregation function. In this case, you simply get the unique combinations of all elements of the selected group. Both cases can make sense in practice.

