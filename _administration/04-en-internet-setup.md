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

![image_1](/assets/images/admin/internet-setup/proxy.png)

Then restart the Peakboard-Box once to apply the changes.
