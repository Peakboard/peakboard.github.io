---
layout: article
title: Peakboard Box - boot via Wake-on-LAN
menu_title: Peakboard Box - boot via Wake-on-LAN
description: Peakboard Box - boot via Wake-on-LAN
lang: en
weight: 251
ref: admin-251
---

Peakboard Boxes often hang in factory halls or similar workplaces in hard-to-reach places a little further above the floor.
In this article, you will learn how to use Wake-on-LAN (WoL) to start your Peakbaord Box remotely. You have two options.

### Start Peakboard Box with MagicPacket

The first option is to use the free Microsoft app [MagicPacket](https://apps.microsoft.com/detail/9WZDNCRCW1MX?hl=de-de&gl=DE).
With MagicPacket you send WoL data packets to your Peakboard Box to switch it on.

After installing the app, open it and add a new computer. To do this, click on [Add] and [Add computer] (1).

![Add new computer](/assets/images/admin/WoL/en_WoL-01.png)

To fill in the mask, you need the name (1) and the MAC address (2) of your Peakboard Box.
You can find both in the Peakboard Box settings in the Peakboard Designer.

[Peakboard Box Settings](/assets/images/admin/WoL/en_WoL-02.png)

Fill in the two fields (1) with the data of your Peakboard Box and confirm with [Save] (2).

![New computer mask](/assets/images/admin/WoL/en_WoL-03.png)

Now you have to click on the tile of the desired Peakboard Box (1) to start the Peakboard Box via WoL.

![Start Peakboard Box](/assets/images/admin/WoL/en_WoL-04.png)

### Start Peakboard Box with powershell

You can also start your Peakboard Box with powershell. Use the following script.
You do not need any other scriptlets or functions. Replace the specified MAC address with that of your Peakboard Box.

```powershell
$mac = '00:E0:4C:0C:73:9C'; 
[System.Net.NetworkInformation.NetworkInterface]::GetAllNetworkInterfaces() | Where-Object { $_.NetworkInterfaceType -ne [System.Net.NetworkInformation.NetworkInterfaceType]::Loopback -and $_.OperationalStatus -eq [System.Net.NetworkInformation.OperationalStatus]::Up } | ForEach-Object { $targetPhysicalAddressBytes = [System.Net.NetworkInformation.PhysicalAddress]::Parse(($mac.ToUpper() -replace '[^0-9A-F]','')).GetAddressBytes(); $packet = [byte[]](,0xFF * 102); 6..101 | Foreach-Object { $packet[$_] = $targetPhysicalAddressBytes[($_ % 6)] }; $client = [System.Net.Sockets.UdpClient]::new([System.Net.IPEndPoint]::new(($_.GetIPProperties().UnicastAddresses | Where-Object { $_.Address.AddressFamily -eq [System.Net.Sockets.AddressFamily]::InterNetwork })[0].Address, 0)); try { $client.Send($packet, $packet.Length,[System.Net.IPEndPoint]::new([System.Net.IPAddress]::Broadcast, 9)) | Out-Null } finally { $client.Dispose() } }
```
