---
layout: article
title: Web resources
menu_title: Web resources
description: Web resources
lang: en
weight: 400
ref: resources-400
redirect_from:
---

A web resource is accessed via URL. Similar to [network resources](/resources/en-resources-network.html), the resource is not saved directly in the project, but is only connected via the URL.
A functioning Internet connection is therefore required to use the web resource.

### Add web resource

Right-click on [Resources] and click on [Add web resource] (1) to open the connection dialog.

![Add web resource](/assets/images/resources/en_resources-web-01.png)

Copy the URL of your web resource into the [URL] (1) field. The URL is then automatically split and the [Path] (2) field is filled accordingly. Then give the resource a name (3) and define a reload interval (4) at which the resource should be updated.
Finally, if required, you can select the Authentication Type (5) and enter your access data.
The following types are available.

* **Basic Authentication:** You send your username and password in a simple (but encrypted) form to identify yourself.
* **Bearer Authentication:** You use a special security key (token) that you receive after you have logged in. You present this key, like a concert ticket, to gain access.
* **OAuth:** OAuth is like an advanced authorization system that allows you to allow a service to interact with other apps on your behalf without sharing your login credentials. You grant permission, and the app gets a special key (token) that it uses to do certain things on your behalf.

Alternatively, you can also use an existing connection (6).

![Set up connection](/assets/images/resources/en_resources-web-02.png)

The resource is now displayed in Explorer.
You can edit (1), copy (2) or delete (3) the web resource with a right-click or display where you are currently using the resource in your project (4).

![Manage web resource](/assets/images/resources/en_resources-web-03.png)
