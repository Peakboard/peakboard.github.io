---
layout: article
title: Peakboard Hub Installation  
menu_title: Peakboard Hub Installation  
description: Peakboard Hub Installation  
lang: de
weight: 100
ref: hub-100
redirect_from:
---
### Voraussetzungen

Peakboard Hub wird lokal auf deinem Server gehostet, dieser benötigt IIS und Windows Server ab mindestens Version 2016. 
Es wird zu keinem Zeitpunkt eine Kommunikation nach außen hergestellt, sondern ausschließlich zwischen dem Nutzer, den Peakboard Boxen und Peakboard Hub. 
Für die Authentifizierung wird der Windows Domain Controller (Active Directoy) genutzt, gib also einfach den *Nutzernamen mit Domäne* und das *Windows Passwort* beim Login ein. 
Die Datenhaltung von Peakboard Hub findet in einem mitgelieferten SQL Server Express 2019 statt. 
Es kann aber auch ein bereits vorhandener SQL Server ab Version 2017 verwendet werden.

### Installation / Updates

Für die initiale Installation auf einem Windows Server benötigst du nur die Installationsdatei von Peakboard Hub, die du innerhalb deines laufenden SLAs kostenfrei zur Verfügung gestellt bekommst. 
In der ersten Installation empfehlen wir alle Haken gesetzt zu lassen, somit werden alle notwendigen Bestandteile mitinstalliert und die Konfiguration im IIS besonders komfortabel gesetzt. 
Falls ein bereits vorhandener SQL Server genutzt werden soll, ist es möglich auf die Installation des SQL Servers zu verzichten.

Bei zukünftigen Updates setzt du lediglich den Haken bei [PB Hub Main]. 
Ein Update kann einfach über das bereits existierende Setup installiert werden.

<div class="box-warning" markdown="1">
**Beachte:**

Deaktiviere Peakboard Hub während des Updates im ISS und aktiviere ihn im Anschluss wieder.
</div>

Während des Setups wirst du dazu aufgefordert eine Datenbank anzulegen, die als Datenbasis für Peakboard Hub dient und einen Datenbank Nutzer anzugeben. 
Anschließend ist Peakboard Hub in deinen SSIS Seiten zu finden. 
Hier kannst du alles wie von IIS gewohnt konfigurieren und beispielsweise eine sichere Kommunikation mit Zertifikaten deines Unternehmens einfügen.

Nach dem ersten Login eines Nutzers in Peakboard Hub kann im Installationsordner (Standardmäßig C:/inetpub/PeakboardHub) noch unter der Applikation [Peakboard.HUB.DatabaseManager] definiert werden, welche Nutzer Admin Rechte für Peakboard Hub erhalten sollen.
