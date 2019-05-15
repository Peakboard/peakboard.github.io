---
layout: article
title: Zugriff auf Peakboard über Peakboard Designer nach Windows Update nicht mehr möglich
menu_title: Zugriff auf Peakboard über Peakboard Designer nach Windows Update nicht mehr möglich
description: Zugriff auf Peakboard über Peakboard Designer nach Windows Update nicht mehr möglich
lang: de
weight: 1500
ref: admin-15
---

Mit dem Windows IoT Core Update von 1803 auf 1809 wird die Verbindung über den Peakboard Designer sowie der Zugriff auf das Deviceportal blockiert.
Um den Zugriff wieder freizuschalten, ist dieser Workaround nötig:

Zuerst muss eine Verbindung zur Box über PowerShell hergestellt werden.
Windows Remoteverwaltungsdienst auf dem Client-PC starten.

```
net start WinRM
```

IP-Adresse der Peakboard-Box als trusted Host hinzufügen:

```
Set-Item WSMan:\localhost\Client\TrustedHosts  -Value <ip>
```

PowerShell-Session zur Box starten:

```
Enter-PSSession -ComputerName <ip/hostname> -Credential localhost\administrator
```

Dann diesen Befehl in die Powershell eintragen und bestätigen:

```
netsh advfirewall firewall add rule name=“Deviceportal“ dir=in action=allow protocol=TCP localport=8080
```

Nun sollte der Zugriff über den Peakboard Designer wieder funktionieren und das Deviceportal wieder erreichbar sein.

