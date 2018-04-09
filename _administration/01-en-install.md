---
layout: article
title: Installation and Configuration
menu_title: Installation and Configuration
description: Installation and Configuration of the Peakboard-Designer
lang: en
ref: admin-01
---

The Peakboard-Bridge is designed to provide data sources for the Peakboard-Boxes, which the Box cannot reach by its own efforts due to technical limitations. This applies, for example, to access files on the network.

Technically speaking, Bridge is a very slim Windows service that is usually installed on a company server together with other software without any problems. To do this, use the regular installation program and select the appropriate option as shown in the following screenshot:

![image_1](/assets/images/admin/install/MiscBridge01.png)

In the Windows Service Administration, you can find Bridge Service like any other Windows service. If desired, it can also run under another service account. Please note that Bridge Service opens a tcp/ip channel to the outside so that Peakboard-Boxes can communicate with it. Therefore, no firewall should block access on this port.

![image_1](/assets/images/admin/install/MiscBridge02.png)

You can find all of the Bridge service’s binary data in the C: \Program Files\Peakboard\Server folder (or an alternate path if you chose another path during installation). The subdirectory Configuration contains the XML file serverConfiguration.xml. Here you can change the standard port 2501 if necessary. Logs are stored in the subdirectory Logs. In the event of an error, you will find detailed error messages there.

![image_1](/assets/images/admin/install/MiscBridge03.png)

The URL for using the bridge is `http://MeinServer:MeinPort`, e. g. `http://Julia:2501`
