---
layout: article
title: MS SQL Server
menu_title: MS SQL Server
description: Information about MS SQL Server Data in Peakboard
lang: en
weight: 1250
ref: dat-1250
---
This article explains Peakboard’s access to an MS SQL Server. The dialogue is almost self-explanatory. In addition to the host name, the user name, password and the database (Initial Catalog) must be filled in. If a host has multiple SQL Server instances, the desired instance is simply attached to the host name with a backslash.

The SQL statement can be complicated as required. At this point, we recommend that you rather place very complex queries in a view in SQL Server and read them from here to the view.

The Load button executes the SQL statement once and fills the column data. From then on, the preview should also work and the dataset is available in Peakboard for further processing.

![Add SQL Server Data](/assets/images/data-sources/ms-sql/add-sql-server-data.png)
