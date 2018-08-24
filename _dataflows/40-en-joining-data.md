---
layout: article
title: Joining Tables
menu_title: Joining Tables
description: Joining Tables
lang: en
ref: flow-40
---
When manipulating columns, we already got to know the possibility of adding a new column and filling it with a look up to another data source. This is useful if only a single column is involved. The join step goes one step further. Two table-type datasets are linked together here. This technique is known in the field of relational databases. It works the same way.
The output table of the current data flow can always be seen as the *left* table. The newly added (i.e. joined) table is the *right* table.
The following example shows how to add an additional table named *customers*. In the lower area, define the columns at which the link takes place. In the example, there is only one connection, namely the column *Customer* in the original table and the column *CustomerName* is the linked table.

![Join Data](/assets/images/dataflows/dataflows-join01.png)

The join type defines the logic according to which the two tables are linked. Here, too, we are guided by the usual terms of relational contexts:

### Inner join

The result has only the rows for which there is an equivalent in both tables. This is the most common method. However, rows are lost if there are rows in the left or right table that do not correspond in the other table.

### Full join

No lines are lost. If there are no corresponding rows in the left or right tables, the columns of the other table remain empty.

### Left Join

The rows of the left table are retained completely. The rows of the right table only find their way into the result if they have an equivalent on the left.

### Right Join

The rows of the right table are retained completely. The rows in the left table only find their way into the result if they have an equivalent on the right.


The following example shows a real full join. The first row only exists in the original table, so the location remains empty. The last row is missing in the original table, so the customer and location are displayed from the right table. All other columns are either empty or 0 (depending on whether they are a string or a number).

![Join Data](/assets/images/dataflows/dataflows-join02.png)

## Hint!
>
> You can join not only data sources, but of course also other data flows
