---
layout: article
title: Proxy-Server einrichten
menu_title: Proxy-Server einrichten
description: Proxy-Server einrichten
lang: de
weight: 400
ref: admin-400
redirect_from:
 - /administration/04-de-internetverbindung.html
 - /administration/de-internetverbindung.html
---

Egal ob du Datensicherheit gewährleisten möchtest, auf geo-beschränkte Inhalte Zugriff benötigst, Unternehmens- und Sicherheitsrichtlinien umsetzen oder Bandbreitenmanagement betreiben willst. Es gibt viele Gründe einen Proxyserver zu nutzen.
Möchtest du für die Internetverbindung deiner Peakboard Box einen Proxyserver verwenden, dann kannst du dies in den Peakboard Box Einstellungen im Peakboard Designer festlegen.

Dazu [fügst du zuerst deine Peakboard Box zum Peakboard Designer hinzu](https://help.peakboard.com/administration/de-hinzufuegen.html). Öffne dann die Peakboard Box Einstellungen (1).

![Peakboard Box Einstellungen öffnen](/assets/images/admin/proxy/de_proxy-01.png)

Wähle die gewünschte Peakboard Box im linken Bereich aus (1). Im Tab [Verbindungen] (2) findest du ganz unten den Bereich [Proxyserver].
Aktiviere die Checkbox (3), um die Optionen für die Proxyeinstellungen anzuzeigen.
Gib dann die Adresse des Proxyservers (4) und wenn vorhanden die Umgehungsliste (5) ein und lege fest, ob er für lokale Adressen verwendet werden soll oder nicht (6).

![Proxyeinstellungen](/assets/images/admin/proxy/de_proxy-02.png)

### Web-Proxy mit Passwortabfrage

Wenn der Web-Proxy deiner Organisation eine Benutzeranmeldung erfordert und so eingerichtet ist, dass er einfache Authentifizierung (Benutzername und Passwort) akzeptiert, musst du eure Anmeldedaten speichern, bevor du euren Web-Proxy nutzen kannst.

<div class="box-tip" markdown="1">
Stelle sicher, dass du vorab deinen Proxy über den Peakboard Designer auf deiner Peakboard Box eingerichtet hast.
</div>

1.	Schließe eine Tastatur und Maus an deine Peakboard Box an.
2.	Drücke Strg + Alt + Entf auf deiner Tastatur um deinen Peakboard Nutzer abzumelden.
3.	Melde dich mit den Zugangsdaten für den PBAdmin Nutzer an.
4.	Nach dem Anbelden wirst du nur eine Komando Zeile sehen, in dieser musst du “explorer” eintragen und mit Enter bestätigen.
5.	Sobald du einen vollständigen Windows Desktop siehts, drücke Win + R
6.	Trage folgenden Wert im sich öffnenden Fenster ein und bestätige diesen mit Enter oder OK: 
```cmd
control /name Microsoft.CredentialManager 
```

![Aufruf MS Credential Manager](/assets/images/admin/proxy/en_proxy-03.png)

7.	Wähle Windows Credentials aus. (1)
8.	Klicke auf Add a generic credential. (2)

![Auswahl Windows Credential](/assets/images/admin/proxy/en_proxy-04.png)

9.	Gebe bei Internet or network address den Hostnamen oder die IP-Adresse eures Web-Proxys ein (Ohne Port).
10.	Gebte den Benutzernamen und das Passwort ein.
11.	Klickt auf OK.

![Eingabe Anmeldedaten](/assets/images/admin/proxy/en_proxy-04.png)

12.	Starte deine Peakboard Box neu.


### Web-Proxy mit Passwortabfrage per PowerShell einrichten

Wenn du nicht per Tastatur und Maus an deine Peakboard Box heran kommst aber deine Organisation eine PowerShell Verbindungen zur Peakboard Box zulässt, kannst du auch auf diesem Weg, remote, die Einstellung vornehmen.

<div class="box-warning" markdown="1">
**Wichtig!**

Führe PowerShell als Administrator aus um deine Peakboard Box neu zu starten.
</div>

Gib die nachfolgenden Befehle ein und bestätige jeden davon mit [Enter].

Mit diesem Befehl öffnest du die remote Connection Einstellung:

```powershell
net start WinRM
```

Gib die IP-Adresse der Peakboard Box ohne [&lt;&gt;] ein. Zum Beispiel -Value 192.168.0.1:

```powershell
Set-Item WSMan:\localhost\Client\TrustedHosts -Value <IP-Adresse der Peakboard Box>
```

Sollte der nachfolgende Text erscheinen, so quittiere ihn mit [J].

```powershell
Mit diesem Befehl ändern Sie die TrustedHosts-Liste für den WinRM-Client. Die Computer in der TrustedHosts-Liste können möglicherweise nicht authentifiziert werden. Der Client sendet möglicherweise Anmeldeinformationen an diese Computer.
Möchten Sie diese Liste wirklich ändern?
[J] Ja  [N] Nein  [H] Anhalten  [?] Hilfe (Standard ist "J"): 
```

Verknüpfe dich nun mit der Peakboard Box.

```powershell
Enter-PSSession -ComputerName <IP-Adresse der Peakboard Box> -Credential <Name der Peakboard Box>\pbadmin
```

Richte den Web-Proxy ein.

```powershell
$cred = Get-Credential
$user = $cred.UserName
$pass = $cred.GetNetworkCredential().Password
$proxy = "proxy.my.company"

cmdkey /add:$proxy /user:$user /pass:$pass
```

Starte die Peakboard Box neu.

```powershell
restart-Computer <IP-Adresse der Peakboard Box> -force
```
