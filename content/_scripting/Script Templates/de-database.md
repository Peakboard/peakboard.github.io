---
layout: article
title: In SQL-Datenbank schreiben
menu_title: In SQL-Datenbank schreiben
description: Beschreibt, wie über ein Skript in eine SQL-Datenbank geschrieben werden kann.
lang: de
weight: 173
ref: scr-173    
redirect_from:
---

Mit Peakboard können Daten in einer SQL-Datenbank per Skript manipuliert werden. Es werden `Insert`- und `Delete`-Operationen unterstützt. Voraussetzung dafür ist eine bestehende Verbindung zu einer SQL-Datenbank.

<div class="box-tip" markdown="1">
**Hinweis:**

Falls bereits eine geteilte SQL Verbindung vorhanden ist, kann der nächste Schritt übersprungen und die vorhandene Verbindung verwendet werden.
</div>

Es wird die hinterlegte Verbindung einer Datenquelle verwendet, weshalb zunächst eine SQL-Datenquelle angelegt werden muss. Nachdem die Datenquelle angelegt wurde, kann die Verbindung im Skript für das Einfügen oder Löschen verwendet werden.

## Schreiben von Daten
Das folgende Skript zeigt, wie Daten in eine SQL-Datenbank eingefügt werden können. Es wird davon ausgegangen, dass die Datenquelle bereits angelegt wurde.

![Schreiben von Daten in eine SQL-Datenbank](/assets/images/scripting/Scripting_Beispiele/sql-database/en-script-insert-into-sql-database.png)

Falls die Modifikation im Skript-Modus erfolgen soll, kann das folgende Skript verwendet werden:

```lua
local con = connections.getfromid("gYFUDLQZEwqqG2FMmPdMAlxqNmA=")
con.open()
con.executenonquery('INSERT INTO [MachineTestData] ([Machine], [Step], [Process]) VALUES (\'' .. sql.sqlescapestring(data.Machine) .. '\', \'' .. sql.sqlescapestring(data.Step) .. '\', \'' .. sql.sqlescapestring(data.Process) .. '\')')
con.close()
data.SQL_DS.reloadandawait()
```

## Löschen von Daten
Das Löschen von Daten aus einer SQL-Datenbank erfolgt ähnlich wie das Einfügen von Daten. Das folgende Skript zeigt, wie Daten aus einer SQL-Datenbank gelöscht werden können.

Bei der Nutzung von Building Blocks kann statt `INSERT` im Dropdown `DELETE` ausgewählt werden.

In diesem Fall kann das folgende Skript verwendet werden:

```lua
local con = connections.getfromid("gYFUDLQZEwqqG2FMmPdMAlxqNmA=")
con.open()
con.executenonquery('DELETE FROM MachineTestData')
con.close()
data.SQL_DS.reloadandawait()
```