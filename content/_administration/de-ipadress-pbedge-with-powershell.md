---
layout: article
title:  Peakboard Edge - Setzen der IP Address über PowerShell
menu_title: Peakboard Edge - Setzen der IP Address über PowerShell
description: Peakboard Edge - Setzen der IP Address über PowerShell
lang: de
weight: 2110
ref: admin-2110
redirect_from:
---

Verbinde Peakboard Edge über ein Ethernet-Kabel direkt mit deinem PC.

Starte anschließend die PowerShell als Administrator auf deinem PC.

* Verwende diesen Befehl, um die Einstellungen für den Remote-Zugriff zu öffnen:
```
> net start WinRM
```

* Gib die aktuelle Peakboard Edge IP-Adresse ohne [<>] ein. Zum Beispiel so: -Value 192.168.0.6
```
> Set-Item WSMan:\localhost\Client\TrustedHosts -Value <IP-Adresse of the Peakboard Edge>
```

* Verbinde dich nun mit Peakboard Edge.
```
> Enter-PSSession -ComputerName <IP-Adresse of the Peakboard Edge> -Credential Administrator
```

Sobald du verbunden bist, kannst du den Netzwerkschnittstellenindex der "Ethernet"-Schnittstelle mit folgendem Befehl abrufen:
```
> Get-NetAdapter
```

Nun kannst du eine feste IP-Adresse eintragen.
```
> New-NetIPAddress -InterfaceIndex <interface index> -IPAddress <whish IP address> -AddressFamily IPv4 -PrefixLength 24 -DefaultGateway <gateway for the whish address>
```

Deine eingegebenen Commands sollten nun in etwa so aussehn:

![](/assets/images/admin/ipaddress_edge/edge_PowerShell.png)

Um DHCP wieder zu verwenden, gebst du den folgenden Befehl ein und startest Peakboard Edge neu.
```
> Set-NetIPInterface -InterfaceIndex 3 -Dhcp Enabled
```

<div class="box-tip" markdown="1">
Nach der Änderung der IP-Adresse wird die Verbindung unterbrochen und muss neu aufgebaut werden.
</div>
