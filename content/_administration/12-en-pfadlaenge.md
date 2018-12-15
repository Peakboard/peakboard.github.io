---
layout: article
title: Unrestrict path length
menu_title: Unrestrict path length
description: Unrestrict path length
lang: en
ref: admin-12
permalink: /en/:collection/path-length
---

In some cases it is necessary to unlimit the path length of Windows IoT.

This can occur, for example, if an OPC UA certificate with a too long file name is to be used.

To remove this limit, please follow these steps:

First click on Manage in the Peakboard Designer and select the menu item “Open Device Portal” for the corresponding Peakboard box.

![Manage Dialog Open Device Portal](/assets/images/admin/pathlength/manage-dialog-open-device-portal.png)

A browser window will now open. Enter “Administrator” as user name and the password of the Peakboard-Box.

Now select Processes on the left side and then Run command to see a command window in wich you can enter the following command:

```
Reg add HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\FileSystem /v LongPathsEnabled /t REG_DWORD /d 1 /f
```

Finally restart the box via Power – Restart.

![Run Command Windows Device Portal](/assets/images/admin/pathlength/run-command-windows-device-portal.png)
