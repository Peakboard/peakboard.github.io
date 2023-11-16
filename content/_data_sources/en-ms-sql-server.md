---
layout: article
title: MS SQL Server
menu_title: MS SQL Server
description: Information about MS SQL Server Data in Peakboard
lang: en
weight: 1500
ref: dat-1500
redirect_from:
  - /data_sources/12-5-en-ms-sql-server.html
---

This article explains how to access an MS SQL Server from Peakboard.
To add the data source, right click on [Data] or alternatively click on the [...] button and then select [Add data source] and [SQL server] (1).

![Add data source](/assets/images/data-sources/ms-sql/en_sql-01.png)

Give the data source a name (1). Besides the host name (2) you need to specify the user name (3), password (4) and the database (5) you want to use. If a host has multiple SQL server instances, append the desired instance to the host name with a backslash.

The SQL statement (6) can be as complicated as you like.
You should create very complex queries in a view in SQL Server and then query the view with Peakboard.

With [Load data] (7) you can check the data and then use it in your project.

![SQL Dialog](/assets/images/data-sources/ms-sql/en_sql-02.png)
