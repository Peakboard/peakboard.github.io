---
layout: article
title: OPC UA
menu_title: OPC UA
description: Set up an OPC UA data source in Peakboard – client certificate, connection, endpoint, subscriptions and listener
lang: en
weight: 1900
ref: dat-1900
redirect_from: 
 - /data_sources/en-opc-ua.html
 - /data_sources/22-de-opc-ua.html
 - /data_sources/OPCUA/en-opc-ua.html
 - /data_sources/OPC_UA/en-Array-OPCUA.html
 - /misc/en-Array-OPCUA.html
 - /data_sources/OPCUA/en-Array-OPCUA.html
---

OPC UA (Open Platform Communications Unified Architecture) is the industrial standard for vendor-independent data exchange between machines, equipment and IT systems. With the OPC UA data source, Peakboard connects directly to an OPC UA server, subscribes to individual nodes and displays their values in the Peakboard application. You can learn more about the standard at the [OPC Foundation](https://opcfoundation.org).

## Add the data source

Create a new data source via [Add data source] and select the [OPC UA] (1) tile.

![Select the OPC UA data source](/assets/images/data-sources/opc-ua/data-source-opc-ua-01.png)

## Configure the connection

Like every other Peakboard data source, the OPC UA data source needs a name. Enter it in [Data source name] (1).

![Configure the OPC UA connection](/assets/images/data-sources/opc-ua/data-source-opc-ua-02.png)

In the [Connection] section you set up the connection to the server:

* (1) **Data source name**: The name used to reference the data source from within the application.
* (2) **Load client certificate**: A client certificate is required. It is stored as a whole (public and private key) on the client side. The public key part then has to be transferred to the server and stored there as a trusted certificate (only exception: the “None : None” endpoint is used). This button opens the certificate management.
* (3) **Manage server certificates**: Manage the certificates of the counterpart (server) here.
* (4) **Trust All**: Automatically accepts all server certificates. Handy for testing; for production you should explicitly mark the certificates as trusted instead.
* (5) **Server URL**: The address of the OPC UA server in the form `opc.tcp://<host>.<domain>:<port>[/<path>]`. The server URL can be scripted using the `</>` button.
* (6) **Endpoint**: Load the available endpoints using the refresh button to the right of the selection. When a certificate popup is shown, accept the server certificate. Then select the endpoint of your choice. Endpoints differ by their encryption and signing levels and the algorithms used.
* (7) **Authentication**: Optionally an authentication method (Anonymous, UserName, Certificate). OPC UA authentication authenticates the OPC UA user against the server.
* (8) **Connect**: Establish the connection to the server. If the connection works, all entered information is valid.

<div class="box-tip" markdown="1">
Note:

The server URL script is executed only once, when connecting to the server on startup.
</div>

<div class="box-tip" markdown="1">
Note:

Client and server certificate authenticate the client and the server against each other and thus differ from the user authentication. If an OPC UA connection is already stored (personal/hub/visualization), it can be reused via [Reuse existing connection].
</div>

## Manage the client certificate

[Load client certificate] opens the certificate management.

![Manage certificates](/assets/images/data-sources/opc-ua/data-source-opc-ua-03.png)

* (1) **Certificate usage**: Choose the usage. For an OPC UA client certificate, [OPC UA] must be selected.
* (2) **Import**: Import an existing certificate (`.pfx`, `.p12` or `.p7b`).
* (3) **Create**: Create a new client certificate (see next section).
* (4) **Certificate list**: Use the action menu ([Open] or the little triangle) to view, export or open a certificate in the Windows certificate viewer. The [My certificates], [Root], [Trusted people] and [Untrusted] tabs switch between the certificate stores.
* (5) **Select**: Apply the selected certificate. [Cancel] discards the selection – certificates that were already added are not deleted by this.

### Create a new certificate

![Create a new client certificate](/assets/images/data-sources/opc-ua/data-source-opc-ua-04.png)

* (1) Fill in all required information in the upper input block (at least [Common name]).
* (2) The lower block contains advanced settings such as [Certificate validity], [RSA key strength] and [Signature algorithm]. In most cases no changes are needed here.
* (3) Generate the certificate via [Create].

## Specify the data handling

After a successful connection, the [Specify details] section defines how the data is read.

![Specify the data handling](/assets/images/data-sources/opc-ua/data-source-opc-ua-05.png)

* (1) **Communication type**: The way Peakboard communicates with the server.
  * **Subscriptions**: The OPC UA defined subscriptions. This is the recommended way if the server supports it.
  * **Variables**: Pulls node values at a fixed interval (Reload Interval). Only variable nodes can be used; objects and their events are not available.
* (2) **Edit settings**: Edit subscription-specific settings. Should only be changed if you know what you are doing.
* (3) **Message type**:
  * **Last message (simple)**: Stores the latest message for each subscription.
  * **Advanced**: Stores the last value updates (amount = Queue Size).
* (4) **Subscriptions**: The list of subscribed nodes with NodeID, path and title. The title is used to access the node from within the Peakboard visualization.
* (5) **Manage subscriptions**: Manage your subscriptions.
  * [Browse] opens the node browser, which searches all nodes on the server (a connection is required).
  * [Add manually] adds nodes by their node ID and namespace, without using the browser (can be done offline).
* (6) **Enable listener**: Enable the listener to check whether all subscriptions are defined correctly. The listener behaves exactly like the data source later in the visualization – the [Preview] area shows the live values.

<div class="box-tip" markdown="1">
Note:

Always enable the listener after creating the subscriptions and check the preview before closing the dialog with [OK].
</div>

## Browse the nodes

The browse dialog shows the tree of nodes stored on the connected OPC UA server.

![Browse OPC UA nodes](/assets/images/data-sources/opc-ua/data-source-opc-ua-06.png)

* (1) **Node tree**: Navigate through the server's node structure.
* (2) **Select a node**: Ticking a node's checkbox adds a new subscription, unticking removes it again.
* (3) **Attributes**: Shows the attributes of the selected node (NodeId, NodeClass, Value, DataType …).
* (4) **Select**: Apply the selected nodes as subscriptions.

Node classes:

* **Variable**: Has a value which is read from the server.
* **Object**: Has events, which can be subscribed to in the [Edit OPC UA subscription] dialog.

## Edit a subscription

Double-click a row in the subscription list to open the detail view of a subscription.

![Edit an OPC UA subscription](/assets/images/data-sources/opc-ua/data-source-opc-ua-07.png)

* (1) **Title**: The title used to access the node from the Peakboard visualization.
* (2) **Namespace**: The namespace of the node. Can be scripted (`</>` button). The script is executed only once, when the subscription is created on the OPC UA server on startup.
* (3) **Identifier**: The identifier of the node. Can also be scripted.
* (4) **Attributes**: Node class, Path, Data Type and Value Rank of the node.
* (5) **Fetch nodes**: If a connection to the server is possible, this button reads additional node information (node class, data type …) directly from the server.
