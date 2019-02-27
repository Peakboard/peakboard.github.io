---
layout: article
title: 将Peakboard-Box连接到WPA2企业WiFi
menu_title: 将Peakboard-Box连接到WPA2企业WiFi
description: 将Peakboard-Box连接到WPA2企业WiFi
lang: cn
ref: admin-03
---

首先，必须通过PowerShell建立与Box的连接。

在客户端电脑上启动Windows远程管理服务。net start WinRM

将Peakboard-Box的IP地址添加为可信主机：Set-Item WSMan:

```
Set-Item WSMan:\localhost\Client\TrustedHosts -Value <ip>
```

启动用户Box的PowerShell会话：

```
Enter-PSSession -ComputerName <ip/hostname>
-Credential localhost\administrator
```

以下命令在Box上创建了一个新WiFi配置文件以连接到WPA2企业访问接入点。

```
netcmd /ActionType:ConnectName /Enterprise:true /Ssid:<ssid>
/UserName:<login> /Domain:<domain> /Password:<password>
```

Box现在将自动连接到新的配置文件。如果已经创建了多个配置文件，则您可以使用web界面（设备门户）来更改配置文件。

