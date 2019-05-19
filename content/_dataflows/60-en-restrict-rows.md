---
layout: article
title: Limit Number of Rows
menu_title: Limit Number of Rows
description: Limit Number of Rows
lang: en
weight: 6000
ref: flow-6000
redirect_from:
  - /dataflows/60-en-restrict-rows.html
---
There are three different steps to limit the number of lines:

* *Take Top* takes only the first rows in the current sort order of the table
* *Take Last* takes only the last rows in the current order of the table
* *Take Range* cuts out part of the total lines by specifying the start and end index

Attention!! For example, if you want to filter the three products with the highest sales from a table of articles and sales data, you must apply the correct sort sequence BEFORE the row limitation step. Otherwise, it is very likely that any, but probably not the desired three lines will be drawn.

![Take Data](/assets/images/dataflows/dataflows-take01.png)

![Take Data](/assets/images/dataflows/dataflows-take02.png)

![Take Data](/assets/images/dataflows/dataflows-take03.png)

