---
layout: article
title: Writing to an SQL Database
menu_title: Writing to an SQL Database
description: Describes how to write to an SQL database via script.
lang: en
weight: 173
ref: scr-173    
redirect_from:
---

With Peakboard, you can manipulate data in an SQL database via script. Both `Insert` and `Delete` operations are supported. A prerequisite is an existing connection to an SQL database.

<div class="box-tip" markdown="1">
**Hint:**

If a shared SQL connection already exists, you can skip the next step and use the existing connection.
</div>

The connection stored in a data source is used, so an SQL data source must first be created. Once the data source is created, the connection can be used in the script for inserting or deleting data.

## Writing Data
The following script shows how to insert data into an SQL database. It assumes that the data source has already been created.

![Writing Data to an SQL Database](/assets/images/scripting/Scripting_Beispiele/sql-database/en-script-insert-into-sql-database.png)

If the modification is to be done in script mode, the following script can be used:

```lua
local con = connections.getfromid("gYFUDLQZEwqqG2FMmPdMAlxqNmA=")
con.open()
con.executenonquery('INSERT INTO [MachineTestData] ([Machine], [Step], [Process]) VALUES (\'' .. sql.sqlescapestring(data.Machine) .. '\', \'' .. sql.sqlescapestring(data.Step) .. '\', \'' .. sql.sqlescapestring(data.Process) .. '\')')
con.close()
data.SQL_DS.reloadandawait()
```

## Deleting Data
Deleting data from an SQL database is similar to inserting data. The following script shows how to delete data from an SQL database.

When using Building Blocks, you can select `DELETE` instead of `INSERT` from the dropdown.

In this case, the following script can be used:

```lua
local con = connections.getfromid("gYFUDLQZEwqqG2FMmPdMAlxqNmA=")
con.open()
con.executenonquery('DELETE FROM MachineTestData')
con.close()
data.SQL_DS.reloadandawait()
```