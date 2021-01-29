---
layout: article
title: Peakboard Box mit Powershell zur Domäne hinzufügen
menu_title: Peakboard Box mit Powershell zur Domäne hinzufügen
description: Peakboard Box mit Powershell zur Domäne hinzufügen
lang: de
weight: 252
ref: admin-252
---

> ## WICHTIG!
>
> Führe PowerShell als Administrator aus um deine Peakboard Box neu zu starten. Gib die
nachfolgenden Befehle ein und bestätige jeden davon mit [Enter].


* Mit diesem Befehl öffnest du die remote Connection Einstellung:
```
> net start WinRM
```
* Gib die IP-Adresse der Peakboard Box ohne [&lt;&gt;] ein. Zum Beispiel -Value 192.168.0.1:
```
> Set-Item WSMan:\localhost\Client\TrustedHosts -Value <IP-Adresse der Peakboard Box>
```
* Sollte der nachfolgende Text erscheinen, so quittiere ihn mit [J].
```
Mit diesem Befehl ändern Sie die TrustedHosts-Liste für den WinRM-Client. Die Computer in der TrustedHosts-Liste können möglicherweise nicht authentifiziert werden. Der Client sendet möglicherweise Anmeldeinformationen an diese Computer.
Möchten Sie diese Liste wirklich ändern?
[J] Ja  [N] Nein  [H] Anhalten  [?] Hilfe (Standard ist "J"): 
```

* Verknüpfe dich nun mit der Peakboard Box.
```
> Enter-PSSession -ComputerName <IP-Adresse der Peakboard Box> -Credential pbadmin
```
* Füge die Peakboard Box zur Domäne hinzu.
```
> Add-Computer -DomainName domain.local -Credential domain\<domainadmin-user>
```
