---
layout: article
title: Peakboard Box mit Powershell neu starten
menu_title: Peakboard Box mit Powershell neu starten
description: Peakboard Box mit Powershell neu starten
lang: de
weight: 250
ref: admin-250
---

> ## WICHTIG!
>
> Um Die Peakboard Box über PowerShell neu zu starten müssen Sie PowerShell als Administrator ausführen. 

Öffnen Sie die PowerShell als Administrator und geben Sie dann diese Befehle nach einander ein. Jeder Befehl muss dabei mit Enter bestätigt werden: 


* Mit diesem Befehl wird die remote Connection Einstellung geöffnet:
```
> net start WinRM
```
* Hier muss die IP-Adresse der Box ohne <> eingegeben werden z.B. -Value 192.168.0.1: 
```
> Set-Item WSMan:\localhost\Client\TrustedHosts -Value <IP-Adresse der Box>
```
* Nach der Eingabe kann dieser Text erscheinen:
```
Mit diesem Befehl ändern Sie die TrustedHosts-Liste für den WinRM-Client. Die Computer in der TrustedHosts-Liste können möglicherweise nicht authentifiziert werden. Der Client sendet möglicherweise Anmeldeinformationen an diese Computer.
Möchten Sie diese Liste wirklich ändern?
[J] Ja  [N] Nein  [H] Anhalten  [?] Hilfe (Standard ist "J"): 
```
* Quittieren Sie ihn einfach mit:
```
>J
```
* Dann können Sie sich auch schon direkt mit der Box verknüpfen:
```
> Enter-PSSession -ComputerName <IP-Adresse der Box> -Credential pbadmin
```
* Und im letzten Schritt die box neu starten:
```
> restart-Computer <IP-Adresse der Box> -force
```
