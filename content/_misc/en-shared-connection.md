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

In daily work with Peakboard, it happens in practice time and again that several data sources refer to the same source system. 
A simple example: In a visualization, stock data from SAP (from a table) and open transfer orders (from a function module) are displayed. 
However, both data comes from the same SAP system. 
Therefore, it makes sense to store the access data such as user name, password, SAP server, and so on only once and not individually for each data source. 
This is the idea behind the shared connections. 
Shared connections are not available for all source systems, but they are available for many source systems, such as SAP, Excel, and some others. 
They all function according to the same principle.

### Split connections

Start your project with the first regular connection that you create normally. 
For the second connection with the same connection details click on **Reuse existing Connection** in the lower part of the dialog. 
A dropdown will open showing the potential existing connections. 
You can copy the connection details directly into the current dialog.

![shared-connection-01](/assets/images/misc/shared-connection/shared-connection-01.png)

### manage shared connections

Under **Settings** -> **Connection Manager** you reach a dialog that contains an overview of all shared connections. 
The first time you start this dialog, you must assign a password to protect your private shared connections. For more details see **private, shared connections*.
You will see a list of all shared connections in the left area. 
If a connection is clicked, all details of the connection are displayed in the right pane and below that a list of the data sources that are linked to the shared connection in the current project. 
Ideally, you should give each shared connection an appropriate, meaningful name.
  
![shared-connection-02](/assets/images/misc/shared-connection/shared-connection-02.png)

### private shared connections

The concept of private, shared connections involves storing access data on the local computer beyond the current visualization, so that it is no longer necessary to type it in for new projects. 
To turn a regular shared connection into a private shared connection, click **Save to Personal Connections** in the context menu of the connection. 

![shared-connection-03](/assets/images/misc/shared-connection/shared-connection-03.png)

The connection is then available for all new projects. 
It can be called up in the respective data source dialogs simply as described above via the **Reuse** button. 

> ## Attention! 
>
>The moment private connections are stored on the local computer, they must be encrypted by a password. To prevent misuse, this password must be entered at each Designer startup. 

### Export and import shared connections

Shared connections (whether private or not) can be exported in a file and re-imported in a target environment (e.g. a colleague's computer). 
To export connections, click on the corresponding menu item in the lower left corner of the Connection Manager context menu. 
A dialog opens in which you can select the target file, the connections to be exported and a password to encrypt the data. 
A click of OK creates the file.

![shared-connection-04](/assets/images/misc/shared-connection/shared-connection-04.png)

To import into the target system, use the **Import** button, which you will also find in the Connection Manager in the lower left corner.
