---
layout: article
title: Peakboard Box - Join Domain via Powershell
menu_title: Peakboard Box - Join Domain via Powershell
description: Peakboard Box - Join Domain via Powershell
lang: en
weight: 252
ref: admin-252
---

> ## IMPORTANT!
>
> Run PowerShell as administrator to reboot your Peakboard Box. Please enter the
following commands and confirm each of them with [Enter]. 


* Use this command to open the remote connection setting:
```
> net start WinRM
```
* Enter the IP address of the Peakboard Box without [&lt;&gt;]. For example -Value 192.168.0.1: 
```
> Set-Item WSMan:\localhost\Client\TrustedHosts -Value <IP-address of the Peakboard Box>
```
* If the following text appears, press [y] to acknowledge it.
```
Use this command to change the TrustedHosts list for the WinRM client. The computers in the TrustedHosts list may not be authenticated. The client may send credentials to these computers.
Are you sure you want to change this list?
[Y] Yes [N] No [H] Stop [?] Help (default is "Y"): 
```

* Now connect the Peakboard Box.
```
> Enter-PSSession -ComputerName <IP address of the Peakboard Box> -Credential pbadmin
```
* Join your domain.
```
> Add-Computer -DomainName domain.local -Credential domain\<domainadmin-user>
```
