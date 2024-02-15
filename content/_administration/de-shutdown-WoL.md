---
layout: article
title: Peakboard Box aus der Ferne aus- und einschalten
menu_title: Peakboard Box aus der Ferne aus- und einschalten
description: Eine Peakboard Box aus der Ferne ausschalten und mit Wake-on-LAN wieder einschalten
lang: de
weight: 251
ref: admin-251
redirect_from:
 - /administration/de-WoL.html
---

Oft hängen Peakboard Boxen in Fabrikhallen oder ähnlichen Arbeitsplätzen an schwer erreichbaren Stellen etwas weiter über dem Boden.
Wird beispielsweise nachts nicht gearbeitet, ist es sinnvoll, die Peakboard Boxen über Nacht auszuschalten. In diesem Artikel lernst du, wie du deine Peakboard Box aus der Ferne herunterfahren kannst und wie du sie mit Wake-on-LAN (WoL) aus der Ferne startest.

Für das Herunterfahren der Peakboard Box aus der Ferne gibt es drei verschiedene Wege.

### Peakboard Box mit einem Timer-Skript herunterfahren

Du kannst deine Peakboard Box direkt aus einer Anwendung heraus herunterfahren.
Damit du deine Peakboard Box automatisch zu einer bestimmten Uhrzeit herunterfahren kannst, musst du zunächst eine Zeit-Datenquelle über [Datenquelle hinzufügen] und anschließend [Zeit] (1) anlegen.

![Zeit Datenquelle](/assets/images/admin/WoL/de_WoL-05.png)

Im nächsten Schritt fügst du ein Timer-Skript hinzu (1).

![Timer Skript hinzufügen](/assets/images/admin/WoL/de_WoL-06.png)

Hier gibt es verschiedene Wege, wie das Skript aufgebaut werden kann.

Für die erste Möglichkeit wählst du im sich öffnenden Skript-Editor bei Modus [OnSchedule] (1) aus und legst dann nach einem Klick auf den [Settings]-Button (2) fest, an welchen Wochentagen und zu welchen Uhrzeiten das Skript ausgeführt werden soll. In diesem Beispiel wird das Skript an Wochentagen täglich um 19 Uhr (3) zum Ende der Arbeitszeit ausgeführt.

![Timer Skript konfigurieren](/assets/images/admin/WoL/de_WoL-07.png)

Nach einem Klick auf [OK] fügst du dann noch den Building Block [Peakboard Box herunterfahren] (1) aus dem Bereich [Funktionen/Peakboard Box] hinzu. Alternativ gibst du im Skript-Modus `peakboard.shutdown(10)` ein, wobei die 10 die Anzahl der Sekunden ist, nach denen die Peakboard Box herunterfährt. Mit [Speichern & Schließen] (2) verlässt du den Skript-Editor und hast das automatische Herunterfahren erfolgreich eingerichtet.

![Building Block Peakboard Box herunterfahren](/assets/images/admin/WoL/de_WoL-08.png)

Alternativ kannst du auch ein Skript bauen, das im Modus [Endless] (1) die Uhrzeit eines [Datum als Text abrufen] Building Block aus dem Bereich [DATEN/Zeit] mit einem [Wenn-Anweisung] Building Block aus dem Bereich [BASIC/Logik] prüft und nach Erreichen der gewünschten Uhrzeit, die Peakboard Box mit dem gleichen [Peakboard Box herunterfahren] Building Block wie die vorherige Methode herunterfährt.
Im Skriptmodus sieht das Skript folgendermaßen aus.

```lua
if data.Zeit.format('HH:mm', 'DE') > '19:00' then
   peakboard.shutdown(10)
end
```

Wobei [Zeit] der Name deiner Zeit-Datenquelle ist.

![Alternatives Skript](/assets/images/admin/WoL/de_WoL-09.png)

### Peakboard Box mit einer globalen geteilten Funktion herunterfahren

Eine weitere Methode, deine Peakboard Box aus der Ferne herunterzufahren, ist eine globale geteilte Funktion, die du per Web Access oder per HTTP POST Request ausführst. Du nutzt dazu den gleichen Building Block wie bei der vorherigen Methode.

Dieses Mal legst du aber kein Timer Skript an, sondern eine globale geteilte Funktion. Mache dazu im Bereich [Skripte] einen Rechtsklick auf [Funktionen] und wähle [Hinzufügen] (1).

![Funktion hinzufügen](/assets/images/admin/WoL/de_WoL-10.png)

Gib der Funktion einen Namen (1), aktiviere die Checkbox [Geteilte Funktion] (2) und bestätige mit [OK] (3).
Neben der Checkbox siehst du bereits den REST-API Endpunkt (4) `https://[Peakboard Box IP]:40405/api/functions/[Name der Funktion]`.

![Funktion konfigurieren](/assets/images/admin/WoL/de_WoL-11.png)

Füge im sich öffnenden Skript-Editor den Building Block [Peakboard Box herunterfahren] (1) ein und bestätige mit [Speichern & Schließen] (2). Oder nutze wieder das Skript `peakboard.shutdown(10)` im Skript-Modus.

![Funktionsskript konfigurieren](/assets/images/admin/WoL/de_WoL-12.png)

Jetzt kannst du die Funktion (1) beispielsweise per [Web Access](/administration/de-web-access.html) ausführen, um die Peakboard Box herunterzufahren.

![Funktion per Web Access ausführen](/assets/images/admin/WoL/de_WoL-13.png)

Du kannst die Funktion außerdem mit einem HTTP POST Request von außen über den Endpunkt `https://[Peakboard Box IP]:40405/api/functions/[Name der Funktion]` aufrufen. Du musst dazu die Anmeldeinformationen, Benutzername und Passwort der Peakboard Box, angeben und einen leeren JSON-String `({ })` mitgeben.

### Peakboard Box mit einem netzwerkgesteuerten Netzstecker oder einem Netzstecker mit Zeitschaltuhr ausschalten

Eine nicht ganz so elegante Methode ist das Ausschalten der Peaknboard Box durch Ziehen des Netzsteckers / Trennen der Stromversorgung. Neben der manuellen Option gibt es auch hier Optionen, die aus der Ferne und/oder automatisch funktionieren, wie Netzstecker, die per WLAN steuerbar sind oder Netzstecker mit Zeitschaltuhr.

Für das Starten der Peakboard Box am nächsten Morgen gibt es zwei Möglichkeiten.

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
