---
layout: article
product: hub
title: Installation  
menu_title: Installation  
description: Peakboard Hub - Installation  
lang: de
weight: 100
ref: hub-100
redirect_from:
---


Peakboard Hub wird lokal auf deinem Server gehostet, dieser benötigt IIS und Windows Server ab mindestens Version 2016. 
Außerdem muss zusätzlich die [ASP.NET Core 2.2 Runtime](https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/runtime-aspnetcore-2.2.2-windows-hosting-bundle-installer) vorab installiert werden.
Es wird zu keinem Zeitpunkt eine Kommunikation nach außen hergestellt, sondern ausschließlich zwischen dem Nutzer, den Peakboard Boxen und Peakboard Hub.
Für die Authentifizierung wird der Windows Domain Controller (Active Directory) genutzt, gib also einfach den *Windows Nutzernamen ohne Domäne* und das *Windows Passwort* beim Login ein.
Die Datenhaltung von Peakboard Hub findet in einem mitgelieferten SQL Server Express 2019 statt.
Es kann aber auch ein bereits vorhandener SQL Server ab Version 2017 verwendet werden.

### Installation

Für die initiale Installation auf einem Windows Server benötigst du nur die Installationsdatei von Peakboard Hub, die du [hier](https://peakboard.com/download/PeakboardHub/master/PeakboardHubSetup.exe) herunterladen kannst.
In der ersten Installation empfehlen wir alle Haken gesetzt zu lassen, somit werden alle notwendigen Bestandteile mitinstalliert und die Konfiguration im IIS besonders komfortabel gesetzt.
Falls ein bereits vorhandener SQL Server genutzt werden soll, ist es möglich auf die Installation des SQL Servers zu verzichten.

Während des Setups wirst du dazu aufgefordert eine Datenbank anzulegen, die als Datenbasis für Peakboard Hub dient und einen Datenbank Nutzer anzugeben.
Anschließend ist Peakboard Hub in deinen SSIS Seiten zu finden.
Hier kannst du alles wie von IIS gewohnt konfigurieren und beispielsweise eine sichere Kommunikation mit Zertifikaten deines Unternehmens einfügen.

Nach der ersten Anmeldung eines Benutzers in Peakboard Hub wird dieser Benutzer automatisch zum Administrator. Zukünftig kannst du weitere Benutzer in der Benutzerverwaltung von Peakboard Hub zu Admins ernennen.

<div class="box-warning" markdown="1"> **Beachte**:
* Wenn du Updates der Peakboard Boxen über den Peakboard Hub durchführen willst, musst du den ISS Prozess dazu berechtigen, in den Installations-Ordner (c:/inetpub/PeakboardHub) zu schreiben.
* Wenn MQTT zur Kommunikation zwischen Peakboard Boxen genutzt werden soll, muss der MQTT Port (Standardmäßig: 1883) geöffnet werden.
</div>

Hier siehst du, wo du die Berechtigungen setzen musst:

![Peakboard Hub Berechtigungen](/assets/images/hub/hub_permissions.png)

### Updates

Um ein Update durchzuführen lädst du dir die aktuellste [Installationsdatei des Peakboard Hub](https://peakboard.com/download/PeakboardHub/master/PeakboardHubSetup.exe) herunter.
Im Setup-Prozess setzt du im Gegensatz zur initialen Installation nur den Haken bei [Peakboard Hub].
Das Update kann einfach über das bereits existierende Setup installiert werden.
