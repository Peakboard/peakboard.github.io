---
layout: article
title: SAP Fehlermeldungen
menu_title: SAP Fehlermeldungen
description: SAP Fehlermeldungen
lang: de
weight: 2430
ref: dat-2430
---

<div class="box-warning" markdown="1">
**Wichtig!**

Du musst die Einstellungen am eigenen Rechner (zur Nutzung der Preview-Funktion) **und** auf der Peakboard Box vornehmen.
</div>

Es kann sein, dass du bei der Verbindung zu SAP einen der folgenden Fehler erhälst:

## ERROR Dienst '?' unbekannt oder Dienst sapms unbekannt

Das Problem ist, dass sapdp* (z.B. sapdp00 3200/tcp) Einträge in den Dateidiensten im Ordner C:\Windows\System32\drivers\etc\services fehlen.

Um das Problem zu lösen musst du die folgende Zeile an die Datei services anhängen. nn ist die Instanznummer des SAP-Systems (z.B. 00 oder 99).

`sapms<SID> 36<nn>/tcp`

Wenn deine SID beispielsweise ECC ist, sieht die Zeile wie die folgende aus:

`sapmsECC 3600/tcp`

Für System ID (SID) ECC und Instanznummer 12 einstellen:

`sapmsECC 3612/tcp`

<div class="box-warning" markdown="1">
**Wichtig!**

Beim Einfügen in diese Datei musst du darauf achten, dass der letzte Eintrag immer mit einem Return abgeschlossen wird. Bei einigen Plattformen kann dies zu Problemen führen, da der letzte Eintrag möglicherweise nicht erkannt wird.
</div>

<div class="box-warning" markdown="1">
**Warnung!**

Die Servicedatei sollte keine Erweiterung erhalten. Der Name sollte services bleiben und nicht z.B. services.txt werden.
</div>

Nach der Bearbeitung der Datei musst du möglicherweise den Peakboard Designer neu starten.

[SAP-Hinweis 52959](https://launchpad.support.sap.com/#/notes/52959)

## Anpassung der Service-Datei auf der Peakboard Box

Die nachfolgende Anleitung erklärt dir, wie du die Einträge in der Servicedatei auf der Peakboard Box vornehmen kannst.

* Führe lokal eine PowerShell als Administrator aus und gib folgende Commands ein:

```
net start WinRM
Set-Item WSMan:\localhost\Client\TrustedHosts -Value <ip-adresse>
Enter-PSSession -ComputerName <ip-adresse> -Credential pbadmin
```

* Verschiebe die Service Datei auf das Peakboard Box Share Laufwerk

```
Move-Item -Path C:\Windows\System32\drivers\etc\services -Destination C:\Share
```

* Öffne im Datei-Browser das Share-Laufwerk der Peakboard Box

```
\\[Name der Peakboard Box, z.B. PB1234]\share
```

* Füge Einträge in der Datei Service wie vorangengangen beschrieben ein und speichere die Datei
* Schiebe die Service Datei zurück an den Urspurng

```
Move-Item -Path C:\Share\services -Destination C:\Windows\System32\drivers\etc
```
