---
layout: article
title: Limit rows
menu_title: Limit rows
description: Limit rows
lang: en
weight: 5000
ref: flow-5000
redirect_from:
  - /dataflows/60-en-restrict-rows.html
  - /dataflows/en-restrict-rows.html
---

The category **Limit rows** in the dataflow step selection holds the step that restricts the number of rows in a table. To learn how to create a dataflow and add steps in general, see the [first steps with dataflows](/dataflows/en-getting-started.html).

In the [Select rows from] field (1) choose from where the rows are taken, and enter the wanted number under [Amount of rows] (2). Three modes are available:

* **Top** limits the table to the selected number of rows from the top.
* **Range** limits the table to the selected number of rows starting from a defined starting point.
* **Last** limits the table to the selected number of rows from the bottom.

![Limit rows](/assets/images/dataflows/limit-rows/limit-rows-01-select-rows.png)

<div class="box-tip" markdown="1">
**Caution**
If you want to filter, for example, the three best selling items from a table of items and sales data, then you must apply the correct sorting **BEFORE** the row limit step so that the desired three rows are selected.
</div>
