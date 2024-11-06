---
layout: article
product: hub
title: Connections
menu_title: Connections
description: Peakboard Hub - Connections
lang: en
weight: 500
ref: hub-500
redirect_from:
---

In the menu item Connections you can create connections to different data sources and use them later [in the Peakboard Designer](/misc/en-shared-connection.html).

If the [Peakboard Designer is connected to the Peakboard Hub](/hub/de-hub_connectpbdesigner.html), a connection created here can be loaded in the Peakboard Designer and then used in data sources without having to enter the access data again.

<div class="box-tip" markdown="1">**Note**

This also means that, for example, an administrator can grant access to sensitive data systems to individual users without having to give out the access data.
</div>

You create a new connection by clicking on the button [Add Connection] (1) in the Peakboard Hub.

![Add Connection](/assets/images/hub/en_hub_connections-01.png)

Give the connection a name (1) and select the desired data source for which you want to create a connection. Each data source needs individual login data. You can enter these in the mask on the right side (3).

![Add connection](/assets/images/hub/en_hub_connections-02.png)

In the [user management](/hub/en-hub_usermanagement.html) you can assign the created connection to a user group (1).

![User groups](/assets/images/hub/en_hub_connections-03.png)

To use the created connections in the Peakboard Designer, you have to be connected to the Peakboard Hub with the group key of the corresponding user group.
Then open the dialog in the Peakboard Designer under [Connections] (1).

![Connections](/assets/images/hub/en_hub_connections-04.png)

Afterwards you can load all connections from the Peakboard Hub using the button [...] and [Refresh Peakboard Hub connections] (1).

![Update Connections](/assets/images/hub/en_hub_connections-05.png)

If you select one of the connections (1), the stored data of the connection will be displayed on the right (2).
If you have already created data sources, you can also see here which of the data sources are currently using the connection (3).

![Show connections](/assets/images/hub/en_hub_connections-06.png)

Now when you create a data source you can use this connection [as described here](/misc/en-shared-connection.html).
