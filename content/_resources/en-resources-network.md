---
layout: article
title: Network resources
menu_title: Network resources
description: Network resources
lang: en
weight: 300
ref: resources-300
redirect_from:
---

Similar to [local resources](/resources/en-resources-local.html), network resources are files in a file system.
In contrast to local resources, however, these are not imported directly into the project but are linked via their UNC path.

The network resource itself is also not saved in the project. The prerequisite for using the resource is therefore the connection to the network in which the file is stored.
The advantage of this connection method is that the files are not as static as a local resource and can change if they are overwritten.

The prerequisite for access is a domain user with appropriate access rights to the shared network files.

### Add network resource

Right-click on [Resources] and click on [Add network resource] (1) to open the connection dialog.

![Add network resource](/assets/images/resources/en_resources-network-01.png)

In the connection dialog, first give the resource a name (1). You can also define a reload interval (2) in which the file is updated.
Then you need the connection data for your file. This includes the UNC path (3), the user name (4) of the domain user who is to be used for the connection and who has the necessary rights, as well as the corresponding password (5). You can check the connection using the [Test connection] button (6).
Alternatively, you can also use an existing connection (7).

![Set up connection](/assets/images/resources/en_resources-network-02.png)

The resource is now displayed in the Explorer.
You can edit (1), copy (2) or delete (3) the network resource with a right-click or display where you are currently using the resource in your project (4).

![Manage network resource](/assets/images/resources/en_resources-network-03.png)
