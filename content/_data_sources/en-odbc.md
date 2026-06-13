---
layout: article
title: ODBC
menu_title: ODBC
description: Connect Peakboard to any database that provides an ODBC driver (e.g. MySQL) via a connection string and a SQL statement.
lang: en
weight: 1800
ref: dat-1800
redirect_from:
---

The ODBC data source lets you connect Peakboard to virtually any database that provides an ODBC driver – for example MySQL, MariaDB or PostgreSQL. You define an ODBC connection string and a SQL statement, and Peakboard reads the result of that statement into a table.

Under the following link you will find a tutorial on how to configure external data sources in general and how to connect them to Peakboard elements:

[First steps with external data sources using the example of an XML data source](/tutorials/03-en-xml-data.html)

## Installing the ODBC driver

Before you can use the ODBC data source, you must install the ODBC driver of the target database – both on your local computer (to build the data source in the Designer) and on the Peakboard Box that later runs the application. On the box you can install the driver like on any Windows computer (using a USB keyboard and mouse) or remotely via PowerShell. Make sure to use the matching architecture; for a 64-bit Peakboard Runtime you need the 64-bit ODBC driver.

If many boxes access the same database, it can make sense to build an [Extension](https://help.peakboard.com/data_sources/Extension/en-Extension.html) instead. Rolling out an extension is often faster than installing the ODBC driver on every box.

## Setting up the data source

Right-click [Data] or click the [...] button and choose [Add data source]. Switch to the [Database & SAP] category (1) and select the [ODBC] data source (2).

![Add ODBC data source](/assets/images/data-sources/odbc/odbc-01-add.png)

## Connection and statement

Give the data source a name. In the [Connection] section, enter the ODBC [Connection string] (1). The field is masked like a password, because the connection string usually contains the database password – use the eye icon on the right to show or hide it.

The exact format of the connection string depends on the database and the installed driver. A MySQL example looks like this:

```
Driver={MySQL ODBC 9.7 Unicode Driver};Server=myserver.example.com;Port=3306;Database=production;Uid=myuser;Pwd=********;
```

Alternatively you can store all the access details in a local DSN. The connection string then only needs to reference the DSN by name (for example `DSN=MyProductionDb;`), which keeps it short – but the DSN must also be maintained on the box.

Enter the SQL [Statement] (2) that selects the data, formulated for your database, for example:

```
SELECT * FROM production_orders LIMIT 5
```

Click [Load data] (3) to test the connection and load the result.

![ODBC connection string and statement](/assets/images/data-sources/odbc/odbc-02-config.png)

## Load data

The preview shows the rows returned by the statement and reads the columns – together with their data types – into the table. Click [OK] to create the data source. From now on it appears in the Explorer under [Data] and can be linked to controls like any other data source.

![ODBC preview](/assets/images/data-sources/odbc/odbc-03-preview.png)
