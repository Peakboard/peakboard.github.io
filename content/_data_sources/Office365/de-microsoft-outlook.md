---
layout: article
title: Office 365 Outlook
menu_title: Outlook
description: E-Mails aus einem Microsoft 365 Outlook-Postfach als Datenquelle im Peakboard Designer lesen – inkl. Single-Tenant- und Multi-Tenant-Autorisierung.
lang: de
weight: 1175
ref: dat-1175
permalink: /data_sources/de-microsoft-outlook.html
redirect_from:
---

Die Office 365 Outlook Datenquelle ermöglicht es dir, die E-Mails eines Postfach-Ordners zu lesen, der bei Microsoft 365 gehostet wird. Die Anmeldung läuft über die moderne Microsoft-Authentifizierung (Microsoft Entra ID, OAuth) und du hast die Wahl zwischen einer **Multi-Tenant**- und einer **Single-Tenant**-Anwendung.

## Einrichten der Datenquelle

Mache einen Rechtsklick auf [Daten] oder klicke auf den [...]-Button und wähle [Datenquelle hinzufügen]. Wechsle in die Kategorie [Office 365] (1) und wähle die Datenquelle [Outlook] (2).

![Office 365 Outlook Datenquelle hinzufügen](/assets/images/data-sources/microsoft-outlook/microsoft-outlook-01-add.png)

## Verbindung konfigurieren

Vergib der Datenquelle einen Namen und richte anschließend die [Connection] ein. Die Wahl der Autorisierungsmethode, die Anmeldung über [Authorize] und das Wiederverwenden einer bestehenden Verbindung funktionieren für alle Office 365 Datenquellen gleich und werden hier einmal beschrieben: [Office 365 Verbindung](/data_sources/de-office365-connection.html).

## Details angeben

Klicke auf [Retrieve Outlook Folders] (3), um die Ordner des Postfachs zu laden, und wähle anschließend unter [Folder] (4) den gewünschten Ordner aus – zum Beispiel [Inbox], [Sent Items] oder [Drafts]. Mit [Select timeframe] (5) schränkst du die E-Mails auf einen Zeitabschnitt ein; andernfalls wird ein Standardzeitraum verwendet. Über [Timezone] legst du die Zeitzone fest, in die die Empfangszeiten umgerechnet werden. Möchtest du den Body der E-Mails nicht als Klartext, sondern als HTML-Formatierung weiterverarbeiten, aktiviere die Checkbox [Content as HTML].

![Office 365 Outlook Verbindung und Details konfigurieren](/assets/images/data-sources/microsoft-outlook/microsoft-outlook-02-config.png)

## Daten laden

Klicke auf [Load data], um dir die Vorschau anzeigen zu lassen. Das Ergebnis ist eine Liste, die pro E-Mail eine Zeile enthält, mit Spalten wie [Id], [ReceivedTime], [From], [Subject], [To] und [Body] (die Absenderadressen und Betreffzeilen sind in diesem Screenshot unkenntlich gemacht).

![Office 365 Outlook Vorschau](/assets/images/data-sources/microsoft-outlook/microsoft-outlook-03-preview.png)

Mit einem Klick auf [OK] legst du die Datenquelle an. Sie erscheint anschließend im Explorer unter [Daten] und kann wie jede andere Datenquelle mit Controls verknüpft werden.
