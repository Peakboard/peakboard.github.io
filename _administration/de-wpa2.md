---
layout: article
title: Peakboard-Box mit WPA2-Enterprise WLAN verbinden
menu_title: Peakboard-Box mit WPA2-Enterprise WLAN verbinden
description: Peakboard-Box mit WPA2-Enterprise WLAN verbinden
lang: de
ref: admin-03
---
Zuerst muss eine Verbindung zur Box über PowerShell hergestellt werden.



Windows Remoteverwaltungsdienst auf dem Client-PC starten.

net start WinRM



IP-Adresse der Peakboard-Box als trusted Host hinzufügen:
```
\localhost\Client\TrustedHosts -Value <ip>
```

PowerShell-Session zur Box starten:
```
Enter-PSSession -ComputerName <ip/hostname>
-Credential localhost\administrator
```

Der folgende Befehl erstellt auf der Box ein neues Wifi-Profil zum Verbinden mit dem WPA2-Enterprise Accesspoint.
```
netcmd /ActionType:ConnectName /Enterprise:true /Ssid:<ssid>
/UserName:<login> /Domain:<domain> /Password:<password>
```

Die Box verbindet sich nun automatisch mit dem neuen Profil. Falls mehrere Profile angelegt wurden, kann man das Webinterface (Device Portal) nutzen, um das Profil zu wechseln.
