---
layout: article
title: Peakboard Box mit Powershell zur Domäne hinzufügen
menu_title: Peakboard Box mit Powershell zur Domäne hinzufügen
description: Peakboard Box mit Powershell zur Domäne hinzufügen
lang: de
weight: 252
ref: admin-252
---
Sichere bevor du startest deine Lizenz via Peakboard Designer. Öffne dazu die Peakboard Box Einstellungen, wähle deine gewünschte Peakboard Box aus (1) und kopiere im Bereich [Allgemeines] (2) den Lizenzschlüssel (3).

![Lizenz sichern](/assets/images/admin/domain/domain-powershell_01_de.png)

> ## WICHTIG!
>
> Führe PowerShell als Administrator aus um deine Peakboard Box neu zu starten. Gib die nachfolgenden Befehle ein und bestätige jeden davon mit [Enter].

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

* Logge den Peakboard User remote aus.
```
> logoff 1
```

* Unterbinde die Automatische Anmeldung nach dem Starten.
```
>$RegistryPath = 'HKLM:\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Winlogon'
> Remove-ItemProperty -Path $RegistryPath -Name 'AutoAdminLogon' -Force
> Remove-ItemProperty -Path $RegistryPath -Name 'AutoLogonCount' -Force
> Remove-ItemProperty -Path $RegistryPath -Name 'AutoLogonSID' -Force
> Remove-ItemProperty -Path $RegistryPath -Name 'DefaultPassword' -Force
> Remove-ItemProperty -Path $RegistryPath -Name 'DefaultUserName' -Force
```

* Füge die Peakboard Box zur Domäne hinzu.
```
> Add-Computer -DomainName domain.local -Credential domain\<domainadmin-user>
```

Nach der Aufnahme in die Domäne musst du einen passenden Active-Directory-User für den AutoLogon einrichten.
Diesem User musst du folgende Datei zum Autostart hinzufügen: [C:\Program Files\Peakboard\Runtime\Peakboard.Runtime.Wpf]

Jetzt musst du die Peakboard Box neustarten (4) und sie anschließend aus dem Peakboard Designer löschen (5). Beides kannst du über die Peakboard Box Einstellungen erledigen.

![Peakboard Box neu hinzufügen](/assets/images/admin/domain/domain-powershell_02_de.png)

Zuletzt kannst du die Peakboard Box neu zum Peakboard Designer hinzufügen (6). Nutze hierzu den vorab gesicherten Lizenzschlüssel mit dem Benutzernamen [pbadmin]. Sollte das nicht funktionieren muss der Nutzer durch einen Domänen-Administrator mit einem neuen Passwort aktiviert werden.
