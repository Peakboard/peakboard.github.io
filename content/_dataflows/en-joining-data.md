---
layout: article
title: Joining data via INNER JOIN, LEFT JOIN, RIGHT JOIN and FULL JOIN
menu_title: Joining Tables
description: This article and its graphics explain the method of INNER JOIN, LEFT JOIN, RIGHT JOIN and FULL JOIN between two tables applied to the SQL functionality.
lang: en
weight: 4000
ref: flow-4000
redirect_from:
  - /dataflows/40-en-joining-data.html
---
We already learned about the possibility of [adding a new column](/dataflows/en-changing-data-content.html) when [manipulating-columns](/dataflows/en-adding-deleting-changing-columns.html) and to change it by a [Look Up](https://help.peakboard.com/dataflows/en-adding-deleting-changing-columns.html#:~:text=Add%20Lookup%20Column%20-%20Add%20a%20new%20column%20with%20references%20to%20another%20data%20source) to another data source. This is useful when only a single column is involved.
The join step goes one step further. Here, two table-like datasets are linked together. You know this technique in the field of relational databases, such as a [SQL](/data_sources/en-ms-sql-server.html) or [Oracle](/data_sources/en-oracle.html) database. There it works the same way.

The source table of the current data flow is always seen as the "left" table. The newly added (i.e. jointed) table is the "right" table.
The following example shows the addition of an additional table with vice presidents to the well-known [example of American presidents](https://mysafeinfo.com/api/data?list=presidents). 
In the lower area you have to define the columns where the join takes place. In the example there is only one link, namely the column "FullName" in the original table and the column "Name" in the linked table. Both contain the full name of the respective president and serve as key attribute for the join step.

![Join Data](/assets/images/dataflows/dataflows-join01.png)

The Join Type defines the logic used to join the two tables. Here, too, we are guided by the usual terms of relational connections:

### Inner Join

![Dataflow SQL Inner Join](/assets/images/dataflows/peakboard-helpsite_inner-join.png)

The result contains only the rows where there is a match in both tables. This is the most common method. However, rows will be lost if there are rows in the left or right table that do not have a match in the other table.

### Full Join

![Dataflow SQL Full Join](/assets/images/dataflows/peakboard-helpsite_full-join.png)

No rows will be lost. If there are rows without a match in the left or right table, the columns of the other table will remain empty in this case.

### Left Join

![Dataflow SQL Left Join](/assets/images/dataflows/peakboard-helpsite_left-join.png)

The rows of the left table are completely preserved. The rows of the right table only find their way into the result if they have a counterpart on the left.

### Right Join

![Dataflow SQL Right Join](/assets/images/dataflows/peakboard-helpsite_right-join.png)

The rows of the right table are completely preserved. The rows of the left table only find their way into the result if they have a counterpart on the right side.

The following example nicely shows a real full join. The first row is only present in the original table, so the location remains empty. The last row is missing in the original table, so the customer and location from the right table are displayed. All other columns are either empty or 0 (depending on whether it is a string or a number).

![Join Data](/assets/images/dataflows/dataflows-join02.png)

<div class="box-tip" markdown="1">
**Note**

You can join not only data sources, but of course other dataflows as well.
</div>

