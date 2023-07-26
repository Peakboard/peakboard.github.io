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
> Run PowerShell as administrator to reboot your Peakboard Box. Please enter the
following commands and confirm each of them with [Enter].

* Use this command to open the remote connection setting:

```powershell
net start WinRM
```

* Enter the IP address of the Peakboard Box without [&lt;&gt;]. For example -Value 192.168.0.1:

```powershell
Set-Item WSMan:\localhost\Client\TrustedHosts -Value <IP-address of the Peakboard Box>
```

* If the following text appears, press [y] to acknowledge it.

```powershell
Use this command to change the TrustedHosts list for the WinRM client. The computers in the TrustedHosts list may not be authenticated. The client may send credentials to these computers.
Are you sure you want to change this list?
[Y] Yes [N] No [H] Stop [?] Help (default is "Y"): 
```

* Now connect the Peakboard Box.

```powershell
Enter-PSSession -ComputerName <IP address of the Peakboard Box> -Credential pbadmin
```

* Restart the Peakboard Box.

```powershell
restart-Computer <IP address of the Peakboard Box> -force
```
