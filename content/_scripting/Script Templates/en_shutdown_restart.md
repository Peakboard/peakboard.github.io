---
layout: article
title: Script for Shutting Down/Restarting a Peakboard Box
menu_title: Restart Script
description: Describes how to shut down and restart a Peakboard Box.
lang: en
weight: 150
ref: scr-150
redirect_from:
---

If you want to shut down or restart your Peakboard Box, you can use a script. The script can be executed either via a button or on a time-controlled basis. A time-controlled restart is particularly suitable for turning off the Peakboard Box overnight or for a daily restart before the start of a shift. More information about a scheduled restart can be found [here](https://help.peakboard.com/scripting/de-quick-tipp-restart.html).

A parameter can be specified to determine how many seconds after executing the script the shutdown or restart will be performed.

![Shutdown](/assets/images/scripting/Scripting_Beispiele/restart/en_shutdown.png)

## Booting a Shutdown Peakboard Box
Once a Peakboard Box has been shut down, there are several ways to boot it up again.

### Manual Booting
The simplest method to boot up a Peakboard Box is to disconnect the power for a moment and then reconnect it. Once the power is reconnected, the Peakboard Box automatically starts.

### Remote Start
To start a Peakboard Box remotely, [Wake-on-Lan](https://en.wikipedia.org/wiki/Wake-on-LAN) (WoL) can be used. For this, the MAC address of the Peakboard Box is required first. This can be found in the Box dialog of the Peakboard Designer under "Connections".

Wake-on-Lan is supported starting from serial number 7000.

There are two methods available for implementation:

1. MagicPacket
MagicPacket is a free tool from Microsoft that enables the sending of WoL packets. The tool can be downloaded [here](https://apps.microsoft.com/detail/9wzdncrcw1mx?hl=de-de&gl=DE). To use the tool, only a name and the MAC address of the Peakboard Box are required.

2. PowerShell
Alternatively, a PowerShell script can also be used to send a WoL packet. The following script can be executed in PowerShell to send a WoL packet.

```powershell
$mac = '00:E0:4C:0C:73:9C'; 
[System.Net.NetworkInformation.NetworkInterface]::GetAllNetworkInterfaces() | Where-Object { $_.NetworkInterfaceType -ne [System.Net.NetworkInformation.NetworkInterfaceType]::Loopback -and $_.OperationalStatus -eq [System.Net.NetworkInformation.OperationalStatus]::Up } | ForEach-Object { $targetPhysicalAddressBytes = [System.Net.NetworkInformation.PhysicalAddress]::Parse(($mac.ToUpper() -replace '[^0-9A-F]','')).GetAddressBytes(); $packet = [byte[]](,0xFF * 102); 6..101 | Foreach-Object { $packet[$_] = $targetPhysicalAddressBytes[($_ % 6)] }; $client = [System.Net.Sockets.UdpClient]::new([System.Net.IPEndPoint]::new(($_.GetIPProperties().UnicastAddresses | Where-Object { $_.Address.AddressFamily -eq [System.Net.Sockets.AddressFamily]::InterNetwork })[0].Address, 0)); try { $client.Send($packet, $packet.Length,[System.Net.IPEndPoint]::new([System.Net.IPAddress]::Broadcast, 9)) | Out-Null } finally { $client.Dispose() } }
