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

The SQL Server data source connects a Microsoft SQL Server database to the Peakboard Designer. You provide the connection details, define a SQL statement, and afterwards bind the result columns to controls the same way as any other data source.

## Add the data source

Right-click on [Data] and choose [Add data source]. In the following dialog, select the data source [SQL Server] (1).

![Add SQL Server data source](/assets/images/data-sources/ms-sql/ms-sql-01-add.png)

## Configure the connection

In the following dialog give the data source a name (1) in the [General] section. In the [Connection] section enter the host name (2) and the name of the database (3). If a host has multiple SQL Server instances, append the desired instance to the host name with a backslash. Then provide the user name (4) and the password (5) for the SQL Server login.

In the [Statement] section (6) you enter the SQL statement that delivers the data for your application. For very complex queries, create a view in SQL Server and let Peakboard query that view.

A click on [Load data] (7) checks the connection and loads a preview of the result rows. The [Connection test] button lets you verify in isolation that Peakboard can reach the SQL server.

![Configure the SQL Server connection](/assets/images/data-sources/ms-sql/ms-sql-02-config.png)

## Use variables inside the SQL statement

You can reference Peakboard variables as placeholders directly inside the SQL statement. Peakboard substitutes the placeholder with the current value of the variable at execution time. The placeholder uses the pattern `#[VariableName]#` (1).

![Variable inside the SQL statement](/assets/images/data-sources/ms-sql/ms-sql-03-variables.png)

This lets you forward a user's selection – for example from a slider, an input field or a drop-down – directly into the SQL query. A full example with scripts is available in the [Dynamic queries](/data_sources/Basics/en-dynamic-queries.html) article.

## Generate the SQL statement with a script

If a single placeholder is not enough – for example because you want to assemble columns, tables or whole `WHERE` clauses at execution time depending on multiple conditions – you can build the SQL statement entirely from a script. To do so, click the [</>] icon (1) in the [Statement] area to switch on [Use script]. The editor switches to the Peakboard script editor. Your script must return the finished SQL statement as a string (2).

![Generate the SQL statement with a script](/assets/images/data-sources/ms-sql/ms-sql-04-script.png)

In the example above, a constant `SELECT` statement is concatenated with the current value of the variable `CurrentStatus`, building the complete statement dynamically.

## Load preview data

With a click on [Load data] Peakboard executes the SQL statement and shows a preview of the returned rows in the [Preview] area. This lets you verify connection, credentials and statement at once.

![Load preview data](/assets/images/data-sources/ms-sql/ms-sql-05-preview.png)

A click on [OK] creates the data source. It then appears in the explorer under [Data] (1) and can be dragged onto controls (e.g. table, styled list, chart) just like any other data source.

![SQL Server data source in the explorer](/assets/images/data-sources/ms-sql/ms-sql-06-explorer.png)
