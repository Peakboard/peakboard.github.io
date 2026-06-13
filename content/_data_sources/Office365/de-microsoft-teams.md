---
layout: article
title: Office 365 Teams
menu_title: Office 365 Teams
description: Die Nachrichten eines Microsoft Teams Kanals als Datenquelle im Peakboard Designer lesen – inkl. Single-Tenant- und Multi-Tenant-Autorisierung.
lang: de
weight: 1185
ref: dat-1185
permalink: /data_sources/de-microsoft-teams.html
redirect_from:
---

Die Office 365 Teams Datenquelle ermöglicht es dir, die Nachrichten eines Microsoft Teams Kanals zu lesen, der bei Microsoft 365 gehostet wird. Die Anmeldung läuft über die moderne Microsoft-Authentifizierung (Microsoft Entra ID, OAuth) und du hast die Wahl zwischen einer **Multi-Tenant**- und einer **Single-Tenant**-Anwendung.

## Einrichten der Datenquelle

Mache einen Rechtsklick auf [Daten] oder klicke auf den [...]-Button und wähle [Datenquelle hinzufügen]. Wechsle in die Kategorie [Office 365] (1) und wähle die Datenquelle [Teams] (2).

![Office 365 Teams Datenquelle hinzufügen](/assets/images/data-sources/microsoft-teams/microsoft-teams-01-add.png)

## Verbindung konfigurieren

Vergib der Datenquelle einen Namen und richte anschließend die [Connection] ein. Die Wahl der Autorisierungsmethode, die Anmeldung über [Authorize] und das Wiederverwenden einer bestehenden Verbindung funktionieren für alle Office 365 Datenquellen gleich und werden hier einmal beschrieben: [Office 365 Verbindung](/data_sources/de-office365-connection.html).

## Details angeben

Klicke auf [Retrieve teams data] (2), um die Teams und Kanäle zu laden, auf die du Zugriff hast. Wähle unter [Team] (3) das gewünschte Team aus – in diesem Beispiel [Dismantle Team] – und unter [Channel] (4) den Kanal – hier [Frontline Operations]. Mit [Select timeframe] schränkst du die Nachrichten auf einen Zeitabschnitt ein; andernfalls wird ein Standardzeitraum verwendet, und über [Timezone] legst du die Zeitzone fest, in die die Datumswerte umgerechnet werden.

Mit dem Auswahlfeld [Retrieve messages from] (5) bestimmst du, welche Nachrichten geladen werden. Die häufigste Wahl ist **All**:

* **Channel messages** – nur die Hauptnachrichten (Top-Level-Beiträge) des Kanals.
* **Replies** – nur die Antworten auf diese Beiträge.
* **All** – die Hauptnachrichten **plus alle zugehörigen Antworten**. Das ist die häufigste Option und liefert dir die komplette Unterhaltung.

![Office 365 Teams Verbindung und Details konfigurieren](/assets/images/data-sources/microsoft-teams/microsoft-teams-02-config.png)

## Daten laden und Ausgabespalten

Klicke auf [Load data], um dir die Vorschau anzeigen zu lassen. Das Ergebnis ist eine Liste, die pro Nachricht (und im Modus [All] pro Antwort) eine Zeile enthält, mit den folgenden Spalten (die Benutzernamen und Betreffzeilen sind in diesem Screenshot unkenntlich gemacht):

* **Id** – die eindeutige Kennung der Nachricht oder Antwort.
* **Date** – der Zeitpunkt, zu dem die Nachricht erstellt wurde.
* **User** – der Anzeigename des Autors.
* **Subject** – der Betreff der Nachricht. Teams-Beiträge können einen Betreff haben; bei einfachen Nachrichten ist er oft leer.
* **Message** – der eigentliche Nachrichtentext (Body).
* **Parent** – bei einer Antwort die [Id] der Hauptnachricht, zu der sie gehört. Bei einer Hauptnachricht ist diese Spalte leer – so kannst du eine Antwort von einer Hauptnachricht unterscheiden.

![Office 365 Teams Vorschau](/assets/images/data-sources/microsoft-teams/microsoft-teams-03-preview.png)

Mit einem Klick auf [OK] legst du die Datenquelle an. Sie erscheint anschließend im Explorer unter [Daten] und kann wie jede andere Datenquelle mit Controls verknüpft werden.
