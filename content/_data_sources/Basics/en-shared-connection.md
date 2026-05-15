---
layout: article
title: Shared Connections
menu_title: Shared Connections
description: How to set up, manage and exchange shared connections in the Peakboard Designer.
lang: en
weight: 20
ref: dat-20
redirect_from:
 - /misc/11-en-web.html
 - /misc/en-shared-connection.html
---

If several data sources of a visualization refer to the same source system, it makes sense to store the access data only once.
Peakboard offers this option for a variety of source systems, including SAP, SQL Server or Excel.

An example: In a visualization, SAP inventory data from a table and open transport requests from a function module are displayed.
Both originate from the same SAP system. With a shared connection, access data such as user, password or SAP server is stored only once instead of being entered again for every data source.

## Sharing connections

Create the first data source of your project as usual and enter the connection data.
Then create the second data source of the same type.
Instead of entering the connection data again, click [Reuse existing connection] (3) in the lower left of the dialog.
A list of the existing connections of this type opens.
Pick the connection you need – the connection data (2) is copied directly into the dialog, and you only have to name the data source (1) and define the query.

![Reuse an existing connection in a data source](/assets/images/misc/shared-connection/shared-connection-01.png)

## Managing shared connections

Open the Connection Manager via the [Project settings] button in the toolbar and the [Connections] entry.
It gives you an overview of all connections and groups them into three areas:

- **Used in current application** (1): all connections that are used by data sources in the current project.
- **Personal connections** (2): connections stored locally on your computer and available in all projects.
- **Peakboard Hub connections** (3): connections stored centrally in the Peakboard Hub and therefore available to the whole team.

Use the [Import] button and the […] menu (4) to import and export connections.

![Connection Manager with the three connection areas](/assets/images/misc/shared-connection/shared-connection-02.png)

## Viewing connection details

Click a connection in the list on the left (1) and all details appear on the right under [Connection options] (2).
Below that, [Data sources using this connection] (3) lists all data sources of the current project that use this connection, and [Resources using this connection] (4) shows the related resources.
We recommend giving each connection a descriptive name.

![Details of a selected connection](/assets/images/misc/shared-connection/shared-connection-03.png)

### Personal connections

With personal connections (the **Personal connections** area) you store access data beyond the current project on the local computer, so that you do not have to enter it again for new projects.
A personal connection is available in all new projects and can be retrieved in the respective data source dialogs via [Reuse existing connection].

<div class="box-warning" markdown="1">
**Attention!**

As soon as personal connections are stored on the local computer, they are encrypted with a password.
To prevent misuse, this password has to be entered every time you start the Peakboard Designer.
</div>

## Exporting and importing connections

Connections can be exported to a file in order to import them again in a target environment, such as a colleague's computer.
In the Connection Manager, click the […] menu and then [Export connections…].
In the following dialog you select the destination file (1), set a password to encrypt the data (2) and tick the connections you want to export (3).
A click on [Export] (4) creates the file.
In the target environment you then import the connections with a click on [Import].

![Export connections to a file](/assets/images/misc/shared-connection/shared-connection-04.png)
