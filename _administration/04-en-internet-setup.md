---
layout: article
title: Setting up an Internet Connection With a Proxy Server
menu_title: Setting up an Internet Connection With a Proxy Server
description: Setting up an Internet Connection With a Proxy Server
lang: en
ref: admin-04
---

Open the Windows Device Portal (http://<ip-address-<peakboard>: 8080) of the Box.
There you have the possibility to send commands directly under “Processes” with “Run command”.

You will need the following two commands, and you will need to adjust your own proxy server accordingly.


```
reg add "HKCU\Software\Microsoft\Windows\CurrentVersion\Internet Settings" /v ProxyEnable /t REG_DWORD /d 1 /f
```


```
reg add "HKCU\Software\Microsoft\Windows\CurrentVersion\Internet Settings" /v ProxyServer /t REG_SZ /d <proxy-server>:<port> /f
```

The commands can be sent one after the other using the “Run” button; it is important that the check mark in “Run as DefaultAccount” is set.

![Windows Device Portal Run Command](/assets/images/admin/internet-setup/proxy.png)

In addation it is possible to add a list of addresses for which **no** proxy should be used.

```
reg add "HKCU\Software\Microsoft\Windows\CurrentVersion\Internet Settings" /v ProxyOverride /t REG_SZ /d "<local>;192.168.0.10" /f
```

The value "\<local\>" is equal to the known option "Bypass proxy server for local addresses" from Internet Explorer's settings, which is used to bypass the proxy for all local addresses.
More ip-addresses can be added to the list, it is essential that values are seperated by semicolon.

Then restart the Peakboard-Box once to apply the changes.
