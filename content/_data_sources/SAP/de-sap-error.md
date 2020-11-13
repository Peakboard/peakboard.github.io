---
layout: article
title: SAP Fehlermeldungen
menu_title: SAP Fehlermeldungen
description: SAP Fehlermeldungen
lang: de
weight: 1130
ref: dat-1130
---

> ## WICHTIG!
>
> Die Einstellungen müssen einmal am eigenen Rechner (zur Nutzung der Preview-Funktion) *und* einmal auf der Peakboard Box vorgenommen werden!


Es kann sein, dass Sie bei der Verbindung zu SAP einen der folgenden Fehler erhalten:

## ERROR Dienst '?' unbekannt oder Dienst sapms unbekannt: 

Das Problem ist, dass sapdp* (z.B. sapdp00 3200/tcp) Einträge in den Dateidiensten im Ordner C:\Windows\System32\drivers\etc\services fehlen.

Um das Problem zu lösen müssen Sie die folgende Zeile an die Datei services anhängen. nn ist die Instanznummer des SAP-Systems (z.B. 00 oder 99).

```
sapms<SID> 36<nn>/tcp
```

  
Wenn Ihre SID beispielsweise ECC ist, sieht die Zeile beispielsweise wie die folgende aus:

```
sapmsECC 3600/tcpp  
```


Für System ID (SID) ECC und Instanznummer 12 bitte einstellen:

```
sapmsECC 3612/tcpp
```

> ## WICHTIG!
>
> Beim Einfügen in diese Datei ist darauf zu achten, dass der letzte Eintrag immer mit einem Return abgeschlossen wird. Bei einigen Plattformen kann dies zu Problemen führen, da der letzte Eintrag möglicherweise nicht erkannt wird.

> ## WARNUNG!
>
>Die Servicedatei sollte keine Erweiterung erhalten. Der Name sollte services bleiben und nicht z.B. services.txt werden.

Nach der Bearbeitung der Datei müssen Sie möglicherweise den Peakboard Designer neu starten.

[SAP-Hinweis 52959](https://launchpad.support.sap.com/#/notes/52959)

## Anpassung der service-Datei auf der Peakboard Box:
Nachfolgende Anleitung erklärt, wie die Einträge in der Servicedatei auf der Peakboard Box vorgenommen werden können
* Lokal eine PowerShell als Administrator ausführen und folgende Commands eingeben:
```
net start WinRM
Set-Item WSMan:\localhost\Client\TrustedHosts -Value <ip-adresse>
Enter-PSSession -ComputerName <ip-adresse> -Credential pbadmin
```
* Service Datei auf das Peakboard Box Share Laufwerk verschieben:
```
Move-Item -Path C:\Windows\System32\drivers\etc\services -Destination C:\Share
```
* Im Datei-Browser das Share-Laufwerk der Peakboard Box öffnen:
```
\\[Name der Peakboard Box, z.B. PB1234]\share
```
* Einträge in der Datei Service wie vorangengangen beschrieben einfügen und Datei speichern
* Service Datei zurück an den Urspurng schieben
```
Move-Item -Path C:\Share\services -Destination C:\Windows\System32\drivers\etc
```
