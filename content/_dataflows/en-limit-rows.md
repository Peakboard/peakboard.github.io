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
You can limit the number of rows in a table in three different ways with this step:

* **Select top rows** limits the table to the selected number of rows from the top.
* **Select range** limits the table to the selected number of rows starting from a defined index
* **Select last rows** limits the table to the selected number of rows from the bottom

<div class="box-tip" markdown="1">
**Caution**
If you want to filter, for example, the three best selling items from a table of items and sales data, then you must apply the correct sorting **BEFORE** the row limit step so that the desired three rows are selected.
</div>

![Select range](/assets/images/dataflows/dataflows_select-range.gif)
