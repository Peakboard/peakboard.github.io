---
layout: article
title: Connecting the Peakboard-Box to WPA2 Enterprise WiFi
menu_title: Connecting the Peakboard-Box to WPA2 Enterprise WiFi
description: Connecting the Peakboard-Box to WPA2 Enterprise WiFi
lang: en
weight: 300
ref: admin-03
---

First, a connection to the Box must be established via PowerShell.

Start Windows Remote Administration Service on the client PC.
net start WinRM

Add the IP address of the Peakboard-Box as trusted host:
Set-Item WSMan:

```
Set-Item WSMan:\localhost\Client\TrustedHosts -Value <ip>
```

Start the PowerShell session to the User Box:

```
Enter-PSSession -ComputerName <ip/hostname> 
-Credential localhost\administrator
```

The following command creates a new WiFi profile on the Box to connect to the WPA2 Enterprise access point.

```
netcmd /ActionType:ConnectName /Enterprise:true /Ssid:<ssid> 
/UserName:<login> /Domain:<domain> /Password:<password>
```

The Box will now automatically connect to the new profile. If several profiles have been created, you can use the web interface (Device Portal) to change the profile.
