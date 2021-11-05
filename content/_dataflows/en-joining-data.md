---
layout: article
title: Link table-like datasets using joins
menu_title: Joining Tables
description: This article and its graphics explain the method of INNER JOIN, LEFT JOIN, RIGHT JOIN and FULL JOIN between two tables applied to the SQL functionality.
lang: en
weight: 4000
ref: flow-4000
redirect_from:
  - /dataflows/40-en-joining-data.html
---

When it comes to [manipulating columns](/dataflows/en-changing-data-content.html), we've already shown you how to [add a new column](/dataflows/en-changing-data-content.html) and fill it by [Look Up](https://help.peakboard.com/dataflows/en-adding-deleting-changing-columns.html#:~:text=Add%20Lookup%20Column%20-%20Add%20a%20new%20column%20with%20references%20to%20another%20data%20source). 
However, to link two or even more table-like datasets together, we recommend using joins - a technique you may be familiar with from relational databases, such as [SQL](/data_sources/en-ms-sql-server.html) or [Oracle](/data_sources/en-oracle.html).
First, start by [creating a dataflow](https://help.peakboard.com/dataflows/en-getting-started.html#:~:text=expected%20result%20appears.-,Create%20a%20new%20dataflow,-Click%20on%20%5B%E2%80%A6%5D%20next). 
Then click on [add step] in the dataflow and select [join]. 
In the dialog you can now select the data source you want to connect to the dataflow (2). 
Via [+] you add the key attributes (3) - these are the attributes that can be found in both tables and are used as identifiers for the join. 
In the following article we will show you which join type (4) is suitable for your use case.

![Join Data](/assets/images/dataflows/dataflows-join01.png)

### Inner Join
The result of an inner join contains exactly those rows that have a counterpart in both tables. 
If there are rows in the left or right table that have no equivalent in the other table, these rows will be lost.

![Dataflow SQL Inner Join](/assets/images/dataflows/peakboard-helpsite_inner-join.png)

### Full Join
No rows are lost during the full join. 
If there are rows without correspondence in the left or right table, these rows will be empty in the result.

![Dataflow SQL Full Join](/assets/images/dataflows/peakboard-helpsite_full-join.png)

### Left Join
During the left join, the rows of the left table remain fully intact. 
The rows of the right table are only included in the result if they have a counterpart on the left side.

![Dataflow SQL Left Join](/assets/images/dataflows/peakboard-helpsite_left-join.png)

### Right Join
During the right join, the rows of the right table remain fully intact. 
The rows of the left table are only included in the result if they have a counterpart on the right side.

![Dataflow SQL Right Join](/assets/images/dataflows/peakboard-helpsite_right-join.png)


<div class="box-tip" markdown="1">
**Note**
By the way, you can not only connect data sources, but of course also other [dataflows](/dataflows/en-getting-started.html) in this way.
</div>

