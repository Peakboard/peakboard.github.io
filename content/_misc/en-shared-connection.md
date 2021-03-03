---
layout: article
title: Shared Connections
menu_title: Shared Connections
description: How to set up shared connections.
lang: en
weight: 11000
ref: misc-11000
redirect_from:
  - /misc/11-en-web.html
---

If several data sources of a visualization refer to the same source system, it can be useful to enter the access data for them only once. 
Peakboard offers this option for a variety of source systems, including SAP or Excel.  

An example: In a visualization, SAP inventory data from a table and open transport requests from a function module are displayed. 
Both data originate from the same SAP system. With shared connections, access data such as user name, password or SAP server are only stored once and not individually for each data source.  

### SPLIT CONNECTIONS

Create the first connection of your visualization project as usual. 
For the second connection with the same connection details, click on [Reuse existing connection] in the lower part of the dialog. 
A dropdown opens that shows the potential existing connections. You can now copy the connection details directly into the dialog. 

![shared-connection-01](/assets/images/misc/shared-connection/shared-connection-01.png)

### MANAGE SHARED CONNECTIONS  

Via [Settings] and [Connection Manager] you get to a dialog that contains an overview of all shared connections. 
When you start this dialog for the first time, enter a password to protect your private shared connections. 
On the left you see a list of all shared connections. 
Clicking on it, all details of the connection will appear in the right pane, as well as a list of data sources linked to this shared connection in the current project. 
We recommend giving each connection a descriptive name. 

![shared-connection-02](/assets/images/misc/shared-connection/shared-connection-02.png)

###PRIVATE SHARED CONNECTIONS  

With the private shared connections you store access data beyond the current visualization on the local computer, so that you do not have to enter them again for new projects. 
To turn a regular shared connection into a private shared connection, click [Save to personal connections]. 

![shared-connection-03](/assets/images/misc/shared-connection/shared-connection-03.png)

The connection is then available for all new projects. 
It can be retrieved in the respective data source dialogs via [Reuse existing connection].  

<div class="box-warning" markdown="1">
**Attention**
Protect your private shared connections with a password when storing them on the local computer. 
To prevent misuse, this password must be entered every time you start the Peakboard Designer.  
</div>

### EXPORT AND IMPORT SHARED CONNECTIONS  

Both types of shared connections can be exported to a file to be re-imported to a target environment, such as a work colleague's computer. 
To export connections, click on [...] under [Connection manager] and then on [Export connections]. 
A dialog opens where you can select the destination file, the connections to export and a password to encrypt the data. 
A click on [Export] creates the file. 
Arrived in the target environment, you import the split connections with a click on [Import].  

![shared-connection-04](/assets/images/misc/shared-connection/shared-connection-04.png)
