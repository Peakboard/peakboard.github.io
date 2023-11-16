---
layout: article
title: Mitsubishi
menu_title: Mitsubishi
description: Anbindung einer Mitsubishi Datenquelle im Peakboard Designer
lang: en
weight: 1200
ref: dat-1200
redirect_from:
---

Mitsubishi programmable logic controllers are used for industrial automation and the control of machines and processes in various sectors such as manufacturing. They are available in different versions, ranging from compact units for simple tasks to advanced modular systems for complex applications.

The Seamless Message Protocol (SLMP) is used to connect Peakboard and your Mitsubishi PLC.
It is a communication protocol developed by Mitsubishi for networking automation devices such as PLCs, HMIs and controllers. It works over various networks, including Ethernet and CC-Link, and enables efficient data exchange between devices. The flexibility and ease of integration of SLMP make it ideal for various industrial applications where seamless device communication is critical.

To connect the Mitsubishi data source, select the [Mitsubishi] (1) data source under [Data], [Add data source].

![Add Mitsubishi data source](/assets/images/data-sources/mitsubishi/en_mitsubishi-01.png)

Give the data source a name (1).
In the [Reload] area, you can define a [Reload interval] (2) for the data source.

Under [Specify details], enter the IP address (3) and the port (4) for the connection to establish the connection to the data source.

Now you can define the variables you want to read in the [Variables] area.
To add a variable, first give it a name (5). Then use the drop-down [Memory location] (6) to select the required device code. Each of these codes represents a specific type of data or functionality.
Finally, enter the address (7) and click on the add button [Add Variable] (8).

Enter all the variables you want to read. Then you can click on [Load data] (9) to display a preview of the data to be read and create the data source by clicking on [OK].

![Configure Mitsubishi data source](/assets/images/data-sources/mitsubishi/en_mitsubishi-02.png)
