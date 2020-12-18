---
layout: article
title: Peakboard Box - Reboot via Powershell
menu_title: Peakboard Box - Reboot via Powershell
description: Peakboard Box - Reboot via Powershell
lang: en
weight: 250
ref: admin-250
---

> ## IMPORTANT!
>
> To restart the Peakboard Box via PowerShell you have to run PowerShell as administrator. 

Open PowerShell as administrator and then enter these commands one after another. Each command must be confirmed with Enter: 


* This command opens the remote Connection setting:
```
> net start WinRM
```
* Here the IP address of the box must be entered without <> e.g. -Value 192.168.0.1: 
```
> Set-Item WSMan:\localhost\Client\TrustedHosts -Value <IP-address of the box>
```
* After typing this text may appear:
```
Use this command to change the TrustedHosts list for the WinRM client. The computers in the TrustedHosts list may not be authenticated. The client may send credentials to these computers.
Are you sure you want to change this list?
[Y] Yes [N] No [H] Stop [?] Help (default is "Y"): 
```
* Just acknowledge it with:
```
>J
```
* Then you can already link directly to the box:
```
> Enter-PSSession -ComputerName <IP address of the box> -Credential pbadmin
```
* And in the last step restart the box:
```
> restart-Computer <IP address of the box> -force
```

