---
layout: article
title: Neustarten und Herunterfahren einer Peakboard Box
menu_title: restart Script
description: Beschreibt, wie eine Peakboard Box heruntergefahren und neugestartet werden kann.
lang: de
weight: 150
ref: scr-150
redirect_from:
---

# Script fürs Herunterfahren/Neustarten einer Peakboard Box

Möchtest du deine Peakboard Box herunterfahren oder neustarten, kannst du ein Skript verwenden. Das Skript kannst du entweder per Button oder zeitlich gesteuert ausführen. Ein zeitgesteuerter Neustart eignet sich insbesondere, um die Peakboard Box über Nacht auszuschalten oder für einen täglichen Neustart vor Schichtbeginn. Mehr Informationen zu einem geplanten Neustart findest du [hier](https://help.peakboard.com/scripting/de-quick-tipp-restart.html).

Über einen Parameter kann angegeben werden, wie viele Sekunden nach Ausführen des Scripts das Herunterfahren oder der Neustart ausgeführt werden soll.

![Herunterfahren](/assets/images/scripting/Scripting_Beispiele/restart/en_shutdown.png)

## Hochfahren einer heruntergefahrenen Peakboard Box
Sobald eine Peakboard Box heruntergefahren wurde, gibt es verschiedene Möglichkeiten diese wieder hochzufahren.

### Manuelles Hochfahren
Die einfachste Methode eine Peakboard Box hochzufahren ist es den Strom für einen kurzen Moment zu trennen und dann erneut zu verbinden. Sobald der Strom wieder angeschlossen ist, startet die Peakboard Box automatisch.

### Starten aus der Ferne
Zum Starten einer Peakboard Box aus der Ferne, kann [Wake-on-Lan](https://en.wikipedia.org/wiki/Wake-on-LAN) (WoL) verwendet werden. Dafür wird zunächst die MAC-Adresse der Peakboard Box benötigt. Diese kann im Box-Dialog des Peakboard Designers unter "Verbindungen" gefunden werden.

Wake-on-Lan wird ab der Seriennummer 7000 unterstützt.

Für die Umsetzung kann zwischen zwei Wegen gewählt werden:

1. MagicPacket
MagicPacket ist ein kostenloses Tool von Microsoft, welches das Senden von WoL-Paketen ermöglicht. Das Tool kann [hier](https://apps.microsoft.com/detail/9wzdncrcw1mx?hl=de-de&gl=DE) heruntergeladen werden. 

Um das Tool zu verwenden, wird lediglich ein Name und die MAC-Adresse der Peakboard Box benötig.

2. PowerShell
Alternativ kann auch ein PowerShell-Skript verwendet werden, um ein WoL-Paket zu senden. Das folgende Skript kann in der PowerShell ausgeführt werden, um ein WoL-Paket zu senden.

```powershell
$mac = '00:E0:4C:0C:73:9C'; 
[System.Net.NetworkInformation.NetworkInterface]::GetAllNetworkInterfaces() | Where-Object { $_.NetworkInterfaceType -ne [System.Net.NetworkInformation.NetworkInterfaceType]::Loopback -and $_.OperationalStatus -eq [System.Net.NetworkInformation.OperationalStatus]::Up } | ForEach-Object { $targetPhysicalAddressBytes = [System.Net.NetworkInformation.PhysicalAddress]::Parse(($mac.ToUpper() -replace '[^0-9A-F]','')).GetAddressBytes(); $packet = [byte[]](,0xFF * 102); 6..101 | Foreach-Object { $packet[$_] = $targetPhysicalAddressBytes[($_ % 6)] }; $client = [System.Net.Sockets.UdpClient]::new([System.Net.IPEndPoint]::new(($_.GetIPProperties().UnicastAddresses | Where-Object { $_.Address.AddressFamily -eq [System.Net.Sockets.AddressFamily]::InterNetwork })[0].Address, 0)); try { $client.Send($packet, $packet.Length,[System.Net.IPEndPoint]::new([System.Net.IPAddress]::Broadcast, 9)) | Out-Null } finally { $client.Dispose() } }
```