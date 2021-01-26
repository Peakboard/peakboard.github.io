---
layout: article
title: 通过Powershell重启Peakboard Box
menu_title: Peakboard Box - Reboot via Powershell
description: 通过Powershell重启Peakboard Box
lang: cn
weight: 250
ref: admin-250
---

> ## 注意！
>
> 以管理员身份运行PowerShell重启Peakboard Box。请输入以下命令，并按“回车”键确认。

* 使用该命令打开远程连接设置：
```
> net start WinRM
```
* 输入Peakboard Box的IP地址（无需“&lt;&gt”;）。例如，-Value 192.168.0.1：
```
> Set-Item WSMan:\localhost\Client\TrustedHosts -Value <IP-address of the Peakboard Box>
```
* 如果出现以下文本，输入[y]确认。
```
Use this command to change the TrustedHosts list for the WinRM client. The computers in the TrustedHosts list may not be authenticated. The client may send credentials to these computers.
Are you sure you want to change this list?
[Y] Yes [N] No [H] Stop [?] Help (default is "Y"): 
```

* 连接Peakboard Box。
```
> Enter-PSSession -ComputerName <IP address of the Peakboard Box> -Credential pbadmin
```
* 重启。
```
> restart-Computer <IP address of the Peakboard Box> -force
```

