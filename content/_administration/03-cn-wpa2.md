---
layout: article
title: 将Peakboard-Box连接到WPA2企业WiFi
menu_title: 将Peakboard-Box连接到WPA2企业WiFi
description: 将Peakboard-Box连接到WPA2企业WiFi
lang: cn
weight: 300
ref: admin-03
---

首先，必须通过PowerShell建立与Box的连接。

在客户端电脑上启动“Windows远程管理服务”。net start WinRM

将Peakboard-Box的IP地址添加为可信主机：Set-Item WSMan:

```
Set-Item WSMan:\localhost\Client\TrustedHosts -Value <ip>
```

启动用户Box的PowerShell会话：

```
Enter-PSSession -ComputerName <ip/hostname>
-Credential localhost\administrator
```

以下命令在Box上创建了一个新Wi-Fi配置文件,连接到WPA2 Enterprise访问接入点。

```
netcmd /ActionType:ConnectName /Enterprise:true /Ssid:<ssid>
/UserName:<login> /Domain:<domain> /Password:<password>
```

Box现在将自动连接到新的配置文件。如果已经创建了多个配置文件，则您可以使用Web界面（“Device Portal”）来更改配置文件。

