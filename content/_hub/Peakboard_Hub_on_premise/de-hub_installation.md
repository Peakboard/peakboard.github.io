---
layout: article
product: hub
title: Installation  
menu_title: Installation  
description: Peakboard Hub on premise - Installation  
lang: de
weight: 100
ref: hub-100
redirect_from:
  - /hub/de-hub_installation.html
---


Der Peakboard Hub on premise wird lokal auf deinem Server gehostet, dieser benötigt IIS und Windows Server ab mindestens Version 2016. 
Außerdem muss zusätzlich die [ASP.NET Core 8.0 Runtime](https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/runtime-aspnetcore-8.0.6-windows-hosting-bundle-installer) vorab installiert werden.
Es wird zu keinem Zeitpunkt eine Kommunikation nach außen hergestellt, sondern ausschließlich zwischen dem Nutzer, den Peakboard Boxen und dem Peakboard Hub on premise.
Für die Authentifizierung wird der Windows Domain Controller (Active Directory) genutzt, gib also einfach den *Windows Nutzernamen ohne Domäne* und das *Windows Passwort* beim Login ein.
Die Datenhaltung des Peakboard Hub on premise findet in einem mitgelieferten SQL Server Express 2019 statt.
Es kann aber auch ein bereits vorhandener SQL Server ab Version 2017 verwendet werden.

### Systemvoraussetzungen

Der Server, auf dem der Peakboard Hub on premise betrieben wird, muss mindestens folgende Voraussetzungen erfüllen:

{% include styled_table.html %}
{: .w-full }
| Prozessor | 4 Kerne |
| Arbeitsspeicher | 32 GB RAM |
| Festplatte | 128 GB SSD |
| Betriebssystem | Windows Server 2016 oder höher |

### Installation

Für die initiale Installation auf einem Windows Server benötigst du nur die Installationsdatei des Peakboard Hub on premise, die du [hier](https://downloads.peakboard.com/download/PeakboardHub/master/PeakboardHubSetup.exe) herunterladen kannst.
In der ersten Installation empfehlen wir alle Haken gesetzt zu lassen, somit werden alle notwendigen Bestandteile mitinstalliert und die Konfiguration im IIS besonders komfortabel gesetzt.
Falls ein bereits vorhandener SQL Server genutzt werden soll, ist es möglich auf die Installation des SQL Servers zu verzichten.

Während des Setups wirst du dazu aufgefordert eine Datenbank anzulegen, die als Datenbasis für Peakboard Hub dient und einen Datenbank Nutzer anzugeben.
Anschließend ist Peakboard Hub in deinen IIS Seiten zu finden.
Hier kannst du alles wie von IIS gewohnt konfigurieren und beispielsweise eine sichere Kommunikation mit Zertifikaten deines Unternehmens einfügen.

Nach der ersten Anmeldung eines Benutzers im Peakboard Hub on premise wird dieser Benutzer automatisch zum Administrator. Zukünftig kannst du weitere Benutzer in der Benutzerverwaltung des Peakboard Hub on premise zu Admins ernennen.

<div class="box-warning" markdown="1"> **Beachte**:
* Wenn du Updates der Peakboard Boxen über den Peakboard Hub on premise durchführen willst, musst du den IIS Prozess dazu berechtigen, in den Installations-Ordner (c:/inetpub/PeakboardHub) zu schreiben.
* Wenn MQTT zur Kommunikation zwischen Peakboard Boxen genutzt werden soll, muss der MQTT Port (Standardmäßig: 1883) geöffnet werden.
</div>

Hier siehst du, wo du die Berechtigungen setzen musst:

![Peakboard Hub on premise Berechtigungen](/assets/images/hub/hub_permissions.png)

### Updates

Um ein Update durchzuführen lädst du dir die aktuellste [Installationsdatei des Peakboard Hub on premise](https://downloads.peakboard.com/download/PeakboardHub/master/PeakboardHubSetup.exe) herunter.
Im Setup-Prozess setzt du im Gegensatz zur initialen Installation nur den Haken bei [Peakboard Hub].
Das Update kann einfach über das bereits existierende Setup installiert werden.
