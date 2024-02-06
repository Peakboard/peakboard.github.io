---
layout: article
title: Peakboard Box mit Wake-on-LAN starten
menu_title: Peakboard Box mit Wake-on-LAN starten
description: Peakboard Box mit Wake-on-LAN starten
lang: de
weight: 251
ref: admin-251
---

Oft hängen Peakboard Boxen in Fabrikhallen oder ähnlichen Arbeitsplätzen an schwer erreichbaren Stellen etwas weiter über dem Boden.
In diesem Artikel lernst du, wie du Wake-on-LAN (WoL) nutzen kannst um deine Peakbaord Box aus der Ferne zu starten. Du hast dafür zwei Möglichkeiten.

### Peakboard Box mit MagicPacket starten

Die erste Möglichkeit ist die Nutzung der kostenlosen Microsoft App [MagicPacket](https://apps.microsoft.com/detail/9WZDNCRCW1MX?hl=de-de&gl=DE).
Mit MagicPacket sendet du WoL-Datenpakete an deine Peakboard Box um diese einzuschalten.

Nach der Installation der App öffnest du sie und fügst einen neuen Computer hinzu. Klicke dazu auf [Hinzufügen] und [Computer hinzufügen] (1).

![Neuen Computer hinzufügen](/assets/images/admin/WoL/de_WoL-01.png)

Zum Ausfüllen der Maske benötigst du den Namen (1) und die MAC-Adresse (2) deiner Peakboard Box.
Beides findest du in den Peakboard Box Einstellungen im Peakboard Designer.

![Peakboard Box Einstellungen](/assets/images/admin/WoL/de_WoL-02.png)

Fülle die beiden Felder (1) mit den Daten deiner Peakboard Box aus und bestätige das Hinzufügen mit [Speichern] (2).

![Neuer Computer Maske](/assets/images/admin/WoL/de_WoL-03.png)

Jetzt musst du die Kachel der gewünschten Peakboard Box (1) anklicken um die Peakboard Box per WoL zu starten.

![Peakboard Box starten](/assets/images/admin/WoL/de_WoL-04.png)

### Peakboard Box mit Powershell starten

Du kannst deine Peakboard Box auch mit Powershell starten. Nutze dazu das folgende Skript.
Du benötigst dafür keine weiteren Skriptlets oder Funktionen. Tausche die angegebene MAC-Adresse durch die deiner Peakboard Box.

```powershell
$mac = '00:E0:4C:0C:73:9C'; 
[System.Net.NetworkInformation.NetworkInterface]::GetAllNetworkInterfaces() | Where-Object { $_.NetworkInterfaceType -ne [System.Net.NetworkInformation.NetworkInterfaceType]::Loopback -and $_.OperationalStatus -eq [System.Net.NetworkInformation.OperationalStatus]::Up } | ForEach-Object { $targetPhysicalAddressBytes = [System.Net.NetworkInformation.PhysicalAddress]::Parse(($mac.ToUpper() -replace '[^0-9A-F]','')).GetAddressBytes(); $packet = [byte[]](,0xFF * 102); 6..101 | Foreach-Object { $packet[$_] = $targetPhysicalAddressBytes[($_ % 6)] }; $client = [System.Net.Sockets.UdpClient]::new([System.Net.IPEndPoint]::new(($_.GetIPProperties().UnicastAddresses | Where-Object { $_.Address.AddressFamily -eq [System.Net.Sockets.AddressFamily]::InterNetwork })[0].Address, 0)); try { $client.Send($packet, $packet.Length,[System.Net.IPEndPoint]::new([System.Net.IPAddress]::Broadcast, 9)) | Out-Null } finally { $client.Dispose() } }
```
