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
When [manipulating columns with dataflows](/dataflows/en-adding-deleting-changing-columns.html) we have already shown you, how to [add a new column](/dataflows/en-changing-data-content.html) and fill it with a [Look Up](https://help.peakboard.com/dataflows/en-adding-deleting-changing-columns.html#:~:text=Add%20Lookup%20Column%20-%20Add%20a%20new%20column%20with%20references%20to%20another%20data%20source) to another data source. 
However, to link two or more table-like datasets together, we recommend joins, a technique often found in relational databases, such as [SQL](/data_sources/en-ms-sql-server.html) or [Oracle](/data_sources/en-oracle.html). To join two tables, start by creating a [dataflow].

In the following example, we will add another column to a table of US presidents, which contains the respective vice presidents. 
The initial table is listed on the left, the table to be added is listed on the right.

In the dropdown menu you select the columns to be linked. 
Here the column "FullName" in the original table will be joined with the column "Name". 

Under [Join type] you select the logic according to which the columns will be joined. 

![Join Data](/assets/images/dataflows/dataflows-join01.png)

### Inner Join
The result of an inner join contains exactly those rows that have a correspondence in both tables. 
If there are rows in the left or right table that have no equivalent in the other table, these rows will be lost.

![Dataflow SQL Inner Join](/assets/images/dataflows/peakboard-helpsite_inner-join.png)

### Full Join
No rows are lost during the full join. 
If there are rows without correspondence in the left or right table, these rows will be empty in the result.

![Dataflow SQL Full Join](/assets/images/dataflows/peakboard-helpsite_full-join.png)

### Left Join
During the left join, the rows of the left table remain completely intact. 
The rows of the right table only find their way into the result if they have a counterpart on the left side.

![Dataflow SQL Left Join](/assets/images/dataflows/peakboard-helpsite_left-join.png)

### Right Join
During the right join, the rows of the right table remain completely intact. 
The rows of the left table only find their way into the result if they have a counterpart on the right side.

![Dataflow SQL Right Join](/assets/images/dataflows/peakboard-helpsite_right-join.png)


<div class="box-tip" markdown="1">
**By the way, you can join not only data sources, but of course also other [dataflows].**
</div>

