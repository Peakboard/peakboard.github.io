---
layout: article
title: Office 365 Verbindung
menu_title: Verbindung
description: Wie sich die Office 365 Datenquellen authentifizieren – Multi-Tenant vs. Single-Tenant – und wie du eine bestehende Verbindung wiederverwendest.
lang: de
weight: 1145
ref: dat-1145
permalink: /data_sources/de-office365-connection.html
redirect_from:
---

Alle Office 365 Datenquellen – [SharePoint Lists](/data_sources/de-sharepointlist.html), [Kalender](/data_sources/de-microsoft-calendar.html), [Outlook](/data_sources/de-microsoft-outlook.html), [Teams](/data_sources/de-microsoft-teams.html) und [To Do](/data_sources/de-microsoft-todo.html) – nutzen dieselbe Verbindung und Autorisierung. Sie wird hier einmal beschrieben; die einzelnen Artikel verlinken hierher, statt sie zu wiederholen.

Die Anmeldung läuft über die moderne Microsoft-Authentifizierung (Microsoft Entra ID, OAuth). Im Bereich [Connection] der Datenquelle vergibst du einen Namen (1), wählst die Autorisierungsmethode (2) und meldest dich anschließend über den Button [Authorize] (3) an. Nach erfolgreicher Anmeldung zeigt der Button [Is authorized]. Da die Anmeldung über das normale Microsoft-Anmeldefenster erfolgt, wird auch die Zwei-Faktor-Authentifizierung (MFA) unterstützt – in deinem Projekt wird niemals Username und Passwort gespeichert, sondern nur ein Token, dessen Gültigkeit du über das Microsoft-365-Portal jederzeit zurücksetzen kannst.

![Office 365 Verbindung – Multi-Tenant](/assets/images/data-sources/office365-connection/office365-connection-01-multitenant.png)

## Multi-Tenant- und Single-Tenant-Anwendung im Vergleich

Über das Auswahlfeld im Bereich [Connection] legst du fest, gegen welche in Microsoft Entra ID registrierte Anwendung sich Peakboard authentifiziert.

![Autorisierungsmethode wählen](/assets/images/data-sources/office365-connection/office365-connection-02-tenant-options.png)

* **Use multi-tenant Application** – Peakboard nutzt eine bereits von Peakboard bereitgestellte, mandantenübergreifende Anwendung in Microsoft Entra ID. Du musst keine eigene App registrieren: Ein Klick auf [Authorize] genügt. Hinweis: Je nach Konfiguration deiner Organisation muss ein Administrator der Peakboard-Anwendung einmalig zustimmen (Admin Consent).
* **Use single-tenant Application** – Du verwendest eine eigene App-Registrierung in deinem eigenen Microsoft Entra ID-Verzeichnis (Tenant). Die Anmeldung bleibt damit vollständig innerhalb deiner Organisation und ist von keiner geteilten Anwendung abhängig.

Hast du [Use single-tenant Application] gewählt (1), trägst du zusätzlich die Werte deiner eigenen App-Registrierung ein: die [Application (client) ID] (2) und die [Directory (tenant) ID] (3). Anschließend startest du die Anmeldung über [Authorize] (4).

![Office 365 Verbindung – Single-Tenant](/assets/images/data-sources/office365-connection/office365-connection-03-singletenant.png)

### App-Registrierung in Microsoft Entra ID einrichten

Für die Single-Tenant-Variante legst du die Anwendung einmalig selbst in Microsoft Entra ID an:

1. Öffne im [Azure-Portal](https://portal.azure.com) den Bereich **Microsoft Entra ID** und wähle **App-Registrierungen** → **Neue Registrierung**. Vergib einen Namen und übernimm ansonsten die Standardwerte.
2. Öffne **API-Berechtigungen** und füge unter **Microsoft Graph** die delegierten Berechtigungen hinzu, die deine Datenquelle benötigt (z. B. `Tasks.ReadWrite` für To Do oder `Calendars.Read` für den Kalender). Erteile anschließend – falls deine Organisation das verlangt – die Administratorzustimmung.
3. Aktiviere unter **Authentifizierung** die Option **Öffentliche Clientflows zulassen** (Allow public client flows). Das ist für Desktop-Anwendungen wie den Peakboard Designer zwingend erforderlich.
4. Auf der Seite **Übersicht** der App findest du schließlich die [Application (client) ID] und die [Directory (tenant) ID], die du in die entsprechenden Felder der Datenquelle einträgst.

Kurz zusammengefasst:

* **Multi-Tenant** ist der schnellste Weg: eine zentrale, von Peakboard gepflegte Anwendung, die über mehrere Organisationen hinweg funktioniert – ohne eigene App-Registrierung.
* **Single-Tenant** bietet die größte Kontrolle: Du registrierst die Anwendung selbst in deinem Verzeichnis, vergibst die Berechtigungen und bist nicht auf eine geteilte Anwendung angewiesen.

## Bestehende Verbindung wiederverwenden

Hast du in einem Projekt einmal eine Office-365-Verbindung autorisiert, musst du dich nicht für jede weitere Office 365 Datenquelle erneut anmelden. Klicke unten im Dialog auf den Button [Reuse existing connection] und wähle die Verbindung aus der Liste – die neue Datenquelle nutzt dann dieselbe autorisierte Verbindung.
