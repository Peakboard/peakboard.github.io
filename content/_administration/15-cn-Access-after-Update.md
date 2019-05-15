---
layout: article
title: 在Windows更新后，无法再通过Peakboard Designer访问Peakboard
menu_title: 在Windows更新后，无法再通过Peakboard Designer访问Peakboard
description: 在Windows更新后，无法再通过Peakboard Designer访问Peakboard
lang: cn
weight: 1500
ref: admin-15
---

Windows IoT Core更新从1803到1809，这阻止了从Peakboard Designer的连接及访问Device Portal。再次启用访问是必需的：

首先，必须通过PowerShell建立与Box的连接。在客户端PC上启动Windows远程管理服务。

```
net start WinRM
```

将Peakboard Box的IP地址添加为可信主机：

```
Set-Item WSMan:\localhost\Client\TrustedHosts -Value <ip>
```

启动PowerShell会话到该Box

```
Enter-PSSession -ComputerName <ip/hostname> -Credential localhost\administrator
```

然后将此命令输入PowerShell并确认

```
netsh advfirewall firewall add rule name="Deviceportal" dir=in action=allow protocol=TCP localport=8080
```

现在，通过Peakboard Designer访问应该可以再次有效，并且可以再次访问Device Portal。

