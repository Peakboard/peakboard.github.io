---
layout: article
title: FAQ - Sicherheit
menu_title: FAQ - Sicherheit
description: FAQ - Sicherheit
lang: de
weight: 10
ref: admin-10
redirect_from:
 - /misc/de-faqsecurity.html
---

## Betriebssystem

Auf der Peakboard Box ist Windows 10 IoT Enterprise installiert.

## Windows Updates

Windows Updates sind standardmäßig deaktiviert.

## Internetzugriff

Die Peakboard Box benötigt standardmäßig keinen Internetzugriff.

## Unbefugter Zugriff

Die Peakboard Box wird unter einem Windows Nutzer gestartet, der keine Rechte, außer die für die Anzeige notwendigen, besitzt. Dieser kann weder etwas installieren noch anderweitige Software, außer der von uns bereitgestellten, ausführen.

Außerdem wird die Peakboard Box in einer Art “Kiosk-Mode” ausgeführt, der es nicht ermöglicht in den Desktop-Betrieb zu wechseln.

Den Peakboard Administratoren Account sowie das dazugehörige Kennwort erhältst du auf einer separaten Karte zusammen mit der Peakboard Box.

<div class="box-warning" markdown="1">
**Hinweis:**

Ändere bitte das Passwort und halte es digital fest. Bei Verlust kann es **nicht** zurückgesetzt werden!
</div>

## Domäne

Die Peakboard Box kann, muss aber nicht in die Domäne integriert werden.

## Ports

Standardmäßig sind auf der Peakboard Box alle Ports, außer den folgenden blockiert:

* ICMPv4 und v6
* Port 6 (Broadcast, optional)
* Port 7 (Ping)
* Port 5985 und Port 5986 (WinRM / PowerShell)  
* Port 40404, 40405 und 40407 (Peakboard Kommunikation)

## Virenscanner

Mit dem Peakboard Administratoren Account ist es zwar möglich, aber nicht nötig, einen Virenscanner auf der Peakboard Box zu installieren.
Wir gewährleisten den vollumfänglichen Schutz.  
