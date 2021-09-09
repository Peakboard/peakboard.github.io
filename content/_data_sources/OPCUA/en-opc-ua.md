---
layout: article
title: OPC UA
menu_title: OPC UA
description: Information about OPC UA Data in Peakboard
lang: en
weight: 2400
ref: dat-2400
redirect_from: 
 - /data_sources/en-opc-ua.html
 - /data_sources/22-de-opc-ua.html
---


![image_1](/assets/images/data-sources/opc-ua/data-source-opc-ua-01.png)

Like every datasource, the OPC UA datasource needs a name.

A [client certificate](2) is necessary. This certificate is stored as a whole (public + private key) on client side. Afterwards the public key part has to be transferred to the server and stored as a trusted certificate (only exception: the “none:none:?” endpoint is used)

In the next step the authentication can be set. In most cases, such as MicroEmbedded OPC UA servers, Anonymous is used. It is also possible to log in with a user name and password or to specify a password protected certificate which is used for identification.

![image_2](/assets/images/data-sources/opc-ua/data-source-opc-ua-02.png)

(1 blue): Choose a certificate store. For a client certificate, the “My” store has to be used. This should be the default one, when opening the client certificate dialog.
(2 blue): Import a certificate (should be a .pfx, .p12, .p7b file) or create a new certificate (see 2. b.)
(3 blue): Export the certificate using the “export” action as .crt file (open the menu with the little triangle). To view the certificate or for special actions open the certificate in the windows certificate viewer using the “open” action.
(4 blue): [Select] the certificate or [cancel] if you want to discard your selection (added certificates will not be deleted by clicking [cancel])

![image_3](/assets/images/data-sources/opc-ua/data-source-opc-ua-03.png)


*Create a new certificate*
Insert all necessary information in the upper input-block.
Change necessary information in the lower input-block. Mostly no changes have to be made here.

Insert the URL to the OPC UA Server (3). Should look like (*opc.tcp://<host>.<domain>:<port>[/<path>]*)
The server URL can be scripted using the [{ } button]. 

<div class="box-note" markdown="1">
This script will only be executed once, when connecting to the server on startup!
</div>

Load the endpoints of the server using the [refresh button] on the right of the endpoint selection (4). 
When a certificate popup is shown, accept the server certificate. 
Afterwards select the endpoint of your choice. 
Endpoints differ by their encryption and signing levels and algorithms.

If desired, use an authentication method (username, certificate) (5). 
The OPC UA authentication is used to authenticate the OPC UA user against the server. 

<div class="box-note" markdown="1">
Note: client and server certificate are used to authenticate the client and the server against each other and thus differ from the user authentication.
</div>

[Connect] to the server (6). If the connection works, all inserted information is valid.

If an OPC UA connection is already stored (personal/hub/visualization), it can be used with this button.

<div class="box-note" markdown="1">
Certificates will still have to be created and accepted (to accept the server certificate reload and switch the endpoint).
</div>

### OPC UA Data Handling

![image_4](/assets/images/data-sources/opc-ua/data-source-opc-ua-04.png)

Select the communication type of your datasource:
Subscriptions: The OPC UA defined subscriptions. Should be the way to go, if available on the server.
Variables: Pull node values after a predefined amount of time (Reload Interval). Only variable nodes can be used, objects and their events are not available.

Edit Subscription specific settings. Should only be done, if you know what you are doing.

Choose a Message Type:
Simple: Store the latest message for each subscription.
Advanced: Store the last (amount = Queue Size) value updates.

Manage your subscriptions.
- Clicking directly or opening the menu and choosing “Browse” will open the nodes Browser, which searches for all nodes on the server (a connection is necessary) (see 4. a.).
- Using “Add manually”, nodes can be added by their node id and namespace, without using the browser (can be done offline) (see 4. b.).

<div class="box-note" markdown="1">
The “Title” of a subscribed node will be used, to access this node from within the peakboard visualization.
</div>

![image_5](/assets/images/data-sources/opc-ua/data-source-opc-ua-05.png)

The browse dialog will show the tree of nodes stored on the connected OPC UA server. Selecting a node will add a new subscription deselecting will remove the matching subscription.

![image_6](/assets/images/data-sources/opc-ua/data-source-opc-ua-06.png)

The Title, Namespace and Identifier of a node can be edited.
Namespace and Identifier can be scripted. This script will be executed only once, when subscribing to the OPC UA server on startup.

If a connection to the server is possible, the “Fetch Node Info” button can be used, to read additional node information (node class, data type, …) from the server. 

Node classes:
Variable: Has a value which will be read from the server.
Object: Has events, which can be subscribed to, from the “Edit OPC UA Subscription Item” dialog. Subscribing to events can be done using the “Add” button under the “Event Filter” table (a server connection is necessary).

Enable the listener to check if all subscriptions are defined properly. The listener works the same as the data source in the visualization later on.