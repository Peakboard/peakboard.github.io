---
layout: article
title: Oracle
menu_title: Oracle
description: Connecting an Oracle data source in the Peakboard Designer
lang: en
weight: 2000
ref: dat-2000
redirect_from:
---

Oracle Database is one of the most widely used relational database systems in enterprise environments. Peakboard connects directly to an Oracle instance, runs an arbitrary SQL statement and exposes the result as a table that you can bind to controls or process further with a dataflow. More information is available at [oracle.com/database](https://www.oracle.com/database/).

## Add the data source

To connect the Oracle data source, open the [Add data source] dialog in the explorer under [Data]. In the [Database & SAP] category (1), double-click the [Oracle] tile (2).

![Add Oracle data source](/assets/images/data-sources/oracle/oracle-01-add-datasource.png)

## Configure the connection

In the [Add Oracle data] dialog, assign a name (1) to the data source in the [General] section. You will refer to the data source by this name in controls, dataflows and scripts.

The [Connection] section offers two modes (2):

* **Default** – uses the classic Oracle credentials in separate fields.
* **Custom** – accepts a full Oracle connection string for advanced scenarios.

In [Default] mode (3) you provide the credentials for the Oracle instance:

* **Hostname / IP** – Address of the Oracle server, either as a hostname or an IP address.
* **Port** – Network port on which the Oracle instance is reachable (default: `1521`).
* **SID** – Oracle System Identifier of the target instance.
* **Username** / **Password** – Credentials for database access.

In the [Statement] editor (4) you enter the desired SQL statement. The statement must return a tabular result set so that Peakboard can derive the column structure. For complex evaluations, create a view in the Oracle database and read it with a simple `SELECT * FROM …` statement.

Clicking [Load data] (5) executes the statement and shows a preview of the first rows in the [Preview] area, so you can verify on the spot that the connection and the statement work as expected.

![Oracle connection in Default mode](/assets/images/data-sources/oracle/oracle-02-default-tab.png)

## Custom Connection String

If the [Default] fields are not enough — for example when you need multiple hosts (RAC), a TNS descriptor or a service name instead of a SID — switch to the [Custom] tab (1). In the [Custom connection string] field (2) enter a complete Oracle connection string. Refer to the Oracle documentation for the supported keys and examples.

![Oracle custom connection string](/assets/images/data-sources/oracle/oracle-03-custom-tab.png)

Click [OK] to create the data source. It then appears in the explorer under [Data] and can be bound to any control or processed further with a dataflow, just like any other data source. Note that Oracle data types are mapped to the three generic Peakboard data types `String`, `Number` and `Boolean`.
