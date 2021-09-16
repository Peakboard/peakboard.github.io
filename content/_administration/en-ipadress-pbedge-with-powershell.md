---
layout: article
title:  Peakboard Edge - Set IP address with PowerShell
menu_title: Peakboard Edge - Set IP address with PowerShell
description: Peakboard Edge - Set IP address with PowerShell
lang: en
weight: 2110
ref: admin-2110
redirect_from:
---

Connect Peakboard Edge directly to a PC using a ethernet cable.

Start the PowerShell as administrator on your PC.

* Use this command to open the remote connection setting:
```
> net start WinRM
```

* Enter the IP address of Peakboard Edge without [<>]. For example -Value 192.168.0.6:
```
> Set-Item WSMan:\localhost\Client\TrustedHosts -Value <IP-Adresse of Peakboard Edge>
```

* Now connect the Peakboard Edge.
```
> Enter-PSSession -ComputerName <IP-Adresse of Peakboard Edge> -Credential Administrator
```

Once you are connected you can get the network interface index of the “Ethernet” interface by this command:
```
> Get-NetAdapter
```

Now you can set the static IP address.
```
> New-NetIPAddress -InterfaceIndex <interface index> -IPAddress <whish IP address> -AddressFamily IPv4 -PrefixLength 24 -DefaultGateway <gateway for the whish address>
```

This is how it should look like:

![](/assets/images/admin/ipaddress_edge/edge_PowerShell.png)

To use DHCP again enter the following command and restart Peakboard Edge.
```
> Set-NetIPInterface -InterfaceIndex 3 -Dhcp Enabled
```

<div class="box-tip" markdown="1">
After changing the IP-address the connection will be lost and reconnecting is necessary.
</div>
