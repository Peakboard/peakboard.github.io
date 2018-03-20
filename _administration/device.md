---
layout: article
title: Device Administration
menu_title: Device Administration
description: Device Administration in the Peakboard-Designer
lang: en
ref: admin-2
---
The Peakboard-Box uses Windows 10 IoT as operating system. This is a slimmed-down version of Windows 10 that is specially designed for use on small devices or IoT devices.

Classical administration tasks can be done mainly via the web interface of Windows 10 IoT. You can reach it over the network with a normal browser under the address http://<MeinPeakboard>: 8080. User name is initial Administrator the password is included in the packaging of the Peakboard-Box. The password cannot be reset and should therefore not be lost under any circumstances.

Typical tasks in the admin interface are:

* Changing the Device Name / Admin Password
* Setting up the WLAN
* System resource monitors such as memory or CPU usage

These are standard tasks which are self-explanatory in the admin portal and therefore are not explained in detail here. If you have any further questions, please have a look at the official documentary at [https://developer.microsoft.com/en-us/windows/iot/docs/deviceportal](https://developer.microsoft.com/en-us/windows/iot/docs/deviceportal). The following screenshot shows the setup of the WiFi:

![image_1](/assets/images/admin/install/MiscAdministration01.png)

Parts of the admin tasks (e. g. device name) can also be done directly by the Designer in the Peakboard-Manager dialog. Worth mentioning at this point is the Peakboard-Runtime app. If you click Apps Manager in the Device Portal, you will see the current version of the Peakboard Runtime app. Updating the runtime to a new version should also be done directly in the Peakboard-Manager in the Designer. A manual update is possible, but should not be done manually in the portal under any circumstances without consultation with the support.

![image_1](/assets/images/admin/install/MiscAdministration02.png)
