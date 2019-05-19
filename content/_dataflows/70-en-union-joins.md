---
layout: article
title: Unions Joins
menu_title: Unions Joins
description: Unions Joins
lang: en
weight: 7000
ref: flow-7000
redirect_from:
  - /dataflows/70-en-union-joins.html
---
In the join step we have already learned how to link two tables together. The Union step is also about linking, but the principle is different, because in the Union the data is *attached* rather than *linked*. As the following picture shows, the Union step is quite primitive. It only requires that the table to be appended be specified. All columns of the table to be appended for which the name and data type match are appended to the corresponding column of the original table. If the column name or the data type does not match, the column is ignored. If the column names/types do not match perfectly, they must first be renamed or reformatted.

![Union Join](/assets/images/dataflows/dataflows-union03.png)