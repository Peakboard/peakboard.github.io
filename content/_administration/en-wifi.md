---
layout: article
title: Setting up WiFi on the Peakboard Boxes
menu_title: Setting up Wi-Fi
description: Setting up WiFi on the Peakboard Boxes
lang: en
weight: 200
ref: admin-200
redirect_from:
 - /administration/02-en-device.html
 - /administration/en-device.html
---

The Peakboard Box offers you two different ways to connect it to the WiFi.

## Set up WiFi via an input device

To establish your WiFi connection directly, you need either a keyboard and mouse connected to the Peakboard Box or a touchscreen display. You can then select [Set up WiFi] (1) in the application.

![Open setup dialog](/assets/images/admin/wifi/en_wifi-01.png)

Select the desired network from the available WiFi connections and enter the password to establish the connection.

![Select network](/assets/images/admin/wifi/en_wifi-02.png)

## Set up WiFi via LAN connection in the Peakboard Designer

Alternatively, you can also set up the connection without a connected input device.

To do this, first connect your Peakboard Box with a network cable. As soon as the connection to the network is initially established, an IP address is displayed on the connected screen.

Now start the Peakboard Designer and [add the Peakboard Box](https://help.peakboard.com/administration/en-adding.html).
Open the Peakboard Box settings (1).

![Open Peakboard Box settings](/assets/images/admin/wifi/en_wifi-03.png)

To activate the WiFi connection, select the corresponding Peakboard Box in the Peakboard Box settings (1).
In the [Connections] tab (2), you can then select the desired network from the available networks (3) in the upper section [WiFi connection] and enter the corresponding password (4). Then click on [Connect] (5) to establish the connection.

![Select network](/assets/images/admin/wifi/en_wifi-04.png)

Once the connection is established, you can disconnect the network cable.
Then delete the Peakboard Box in the Peakboard Box settings and re-add it so that the WiFi connection works properly.

<div class="box-warning" markdown="1">
**Caution!**

The LAN connection must be disconnected to ensure error-free operation.
In general, the Peakboard Box should only be operated in a LAN network **or** a WiFi network. </div>

You can find an [article on setting up a proxy server here](/administration/en-proxy.html).
