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

## Peakboard Dateien verschlüsseln

Eine Peakboard Datei (`.peakboard`) kannst du direkt im Peakboard Designer mit einem Passwort schützen. Damit ist der Inhalt der Datei – inklusive aller Anmeldedaten zu Datenquellen, Skripte, Variablen und Ressourcen – verschlüsselt und nur nach Eingabe des Passworts wieder zu öffnen.

Öffne dazu im Peakboard Designer in der Menüleiste die Projekteinstellungen und wähle den Menüpunkt [Project info]. Im Dialog [Edit project] findest du den Abschnitt [File protection].

![Projekt mit Passwort schützen](/assets/images/admin/security/faqsecurity-01-file-protection.png)

Aktiviere die Checkbox [Protect file with password] (1) und vergib im Feld [New password] (2) ein sicheres Passwort. Im Feld [Confirm password] (3) gibst du dasselbe Passwort zur Bestätigung erneut ein. Mit einem Klick auf [OK] wird die Verschlüsselung beim nächsten Speichern angewendet.

<div class="box-warning" markdown="1">
**Hinweis:**

Bewahre das Passwort sicher auf. Eine verschlüsselte Peakboard Datei kann ohne das gesetzte Passwort weder geöffnet noch wiederhergestellt werden.
</div>

## Verschlüsselte Kommunikation mit der Peakboard Box (Port 40405)

Der Peakboard Designer und der Peakboard Hub kommunizieren mit der Peakboard Box über zwei Ports:

* **Port 40404 – unverschlüsselt (HTTP).** Wird ausschließlich für anmeldungsfreie Statusabfragen genutzt, zum Beispiel den Zeitserver-Check. Über diesen Port werden niemals Anmeldedaten oder Zugriffstokens übertragen.
* **Port 40405 – verschlüsselt (HTTPS mit TLS 1.2/1.3).** Sobald Anmeldedaten, Zugriffstokens oder Anwendungspakete übertragen werden, läuft die Verbindung immer über diesen verschlüsselten Port.

Die Peakboard Box weist sich dabei mit einem eigenen Zertifikat aus, das auf die Peakboard-Stammzertifizierungsstelle zurückgeht und die Hostnamen bzw. IP-Adressen der Peakboard Box enthält. Der Peakboard Designer prüft dieses Zertifikat gegen die Peakboard-Stammzertifizierungsstelle, die bei der Installation des Peakboard Designers im Windows-Zertifikatspeicher hinterlegt wird. So ist sichergestellt, dass die Verbindung tatsächlich mit der richtigen Peakboard Box besteht und weder abgehört noch manipuliert werden kann.

<div class="box-tip" markdown="1">
**Tipp:**

Wenn du in den Peakboard Box Einstellungen den unverschlüsselten Kanal deaktivierst, ist ausschließlich die Kommunikation über Port 40405 möglich.
</div>

## Authentifizierung an Datenquellen

Für die Anbindung an externe Systeme nutzt Peakboard die jeweils vom Quellsystem vorgesehenen Authentifizierungs- und Verschlüsselungsmechanismen:

* **SAP** – Anmeldung über einen dedizierten SAP-Nutzer und die RFC-Schnittstelle.
* **OPC UA** und **MQTT** – Zertifikatsbasierte Anmeldung. Die benötigten Zertifikate werden im Peakboard Designer hinterlegt und beim Start der Anwendung auf der Peakboard Box ausgerollt. Details findest du im Artikel [Hinzufügen eines Zertifikats zur Zertifikatverwaltung](/administration/de-zertifikate.html).
* **REST-basierte Datenquellen** (XML, JSON, CSV) und vergleichbare Webdienste – Verbindungen werden über die regulären HTTPS-Mechanismen mit Server-Zertifikat aufgebaut. Optional kannst du eigene Client-Zertifikate hinterlegen.

## Daten auf der Peakboard Box

Die Peakboard Box hält Daten aus deinen Datenquellen ausschließlich im laufenden Betrieb im Arbeitsspeicher vor. Sobald die Peakboard Anwendung gestoppt oder die Peakboard Box neu gestartet wird, sind diese Daten verworfen. Persistent gespeichert werden nur Daten, die du in deiner Anwendung explizit speicherst – zum Beispiel über entsprechende Building Blocks in einem Skript.

## Nutzerverwaltung

Welche Anwender mit welchen Rechten auf die Peakboard Box zugreifen dürfen, konfigurierst du über die Nutzerverwaltung im Peakboard Designer. Eine vollständige Beschreibung der Benutzer und Rollen findest du im Artikel [Nutzerverwaltung](/administration/de-nutzerverwaltung.html).
