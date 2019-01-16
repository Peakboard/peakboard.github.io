---
layout: article
title: Setting up Wi-Fi
menu_title: Setting up Wi-Fi
description: Setting up Wi-Fi
lang: en
ref: admin-02
---

To set up the WiFi of the Peakboard Box, it must first be connected to a network cable and the WiFi USB adapter supplied must be connected.
If the Peakboard Box is still in its initial state, an IP address should be displayed on the screen as soon as the connection to the network has been established.

Now start the Peakboard Designer and add the new Peakboard Box as described [here](/administration/07-en-hinzufügen.html) to the Designer. 
To activate the WiFi connection, first open the Manage/Deploy dialog (1) and select the corresponding box(es) (2).
Then you reach the WiFi dialog via Settings (3) - WiFi Connection (4) where you will find all available WiFi networks (5). Now select the desired network and enter the corresponding password. 
Activate the connection via Connect (6).

![WiFi Connection](/assets/images/admin/device/WiFiConnection.png)

Finally, the Peakboard Box is restarted and the network cable connection can be disconnected. The Peakboard Box is now in the WiFi network.

Alternatively, WiFi activation can also be performed via the Windows IoT administration interface of the Peakboard Box. 

To do this, connect the Peakboard Box as mentioned above.
Instead of the Peakboard Designer, use the following URL to open the Windows IoT administration interface of the Peakboard Box:
http://[BoxName]:8080
The box name is printed on the Peakboard box and could be e.g. PB1234.
In this case the correct URL would be http://PB1234:8080

Here you can now expand the Connectivity menu item on the left and then select Network.
There you should find a list of all available WiFi networks.

Select the desired one and enter the WiFi key.

It is important that you then restart the box using the Power button so that the changes are retained.

![Windows Device Portal](/assets/images/admin/device/windows-device-portal.png)