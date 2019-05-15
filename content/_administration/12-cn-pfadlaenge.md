---
layout: article
title: 不受限制的路径长度
menu_title: 不受限制的路径长度
description: 不受限制的路径长度
lang: cn
weight: 1200
ref: admin-12
---

在某些情况下，有必要取消限制Windows IoT的路径长度。

例如，使用文件名过长的OPC UA证书时就会出现这种情况。

如要消除此限制，请执行以下步骤：

首先单击Peakboard Designer中的“管理”，并为相应的Peakboard Box选择菜单项“打开Device Portal”。

![Manage Dialog Open Device Portal](/assets/images/admin/pathlength/manage-dialog-open-device-portal.png)

现在，浏览器窗口将会打开。输入“Administrator”作为Peakboard Box的用户名和密码。

现在选择左侧的“进程”，然后“运行”命令查看命令窗口，您可以输入以下命令：

```
Reg add HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\FileSystem /v LongPathsEnabled /t REG_DWORD /d 1 /f
```

最后，通过“电源”-“重启”来重新启动Box。

![Run Command Windows Device Portal](/assets/images/admin/pathlength/run-command-windows-device-portal.png)
