---
layout: article
title: Unite tables
menu_title: Unite tables
description: Unite tables
lang: en
weight: 4000
ref: flow-4000
redirect_from:
  - /dataflows/40-en-joining-data.html
  - /dataflows/en-joining-data.html
  - /dataflows/70-en-union-joins.html
  - /dataflows/en-union-joins.html
---
## Join

With this step you add columns from another table to the table, provided that they have at least one overlapping column.

![Join](/assets/images/dataflows/dataflows_join.gif)

Different join types are available for different use cases.
You can also optionally select whether you want to use only individual columns for the step.

### Inner join

The result of an inner join contains exactly those rows that have a counterpart in both tables.
If there are rows in the left or right table that have no equivalent in the other table, these rows will be lost.

![Inner join](/assets/images/dataflows/dataflows_inner-join.png)

### Full join

No rows are lost during the full join.
If there are rows without a counterpart in the left or right table, these rows will be empty in the result.

![Full join](/assets/images/dataflows/dataflows_full-join.png)

### Left join

When using the left join, the rows of the left table remain completely intact.
The rows of the right table only find their way into the result if they have a counterpart on the left.

![Left join](/assets/images/dataflows/dataflows_left-join.png)

### Right join

When using the right join, the rows of the right table remain completely intact.
The rows of the left table only find their way into the result if they have a counterpart on the right side.

![Right join](/assets/images/dataflows/dataflows_right-join.png)

<div class="box-tip" markdown="1">
**Note**

Not only can you connect data sources in this way, but you can also connect other dataflows in this way, of course.
</div>

## Union

With this step you append rows from another table to the table, provided that it has the same number of columns with the same column name and data type.

Unlike the join step, the data is attached rather than linked. You just have to select the table to attach, then all columns of the table to be attached, where the name and the data type match, will be attached to the corresponding column of the original table. If there is no match of the column name or the data type does not match, the column will be ignored. In case the column names or data types do not match, you need to rename or reformat them first to make them match.

![Union](/assets/images/dataflows/dataflows_union.gif)
