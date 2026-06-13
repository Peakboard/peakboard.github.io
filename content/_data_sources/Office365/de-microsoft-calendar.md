---
layout: article
title: Office 365 Kalender
menu_title: Office 365 Kalender
description: Microsoft 365 Kalender als Datenquelle im Peakboard Designer anbinden – inkl. Single-Tenant- und Multi-Tenant-Autorisierung.
lang: de
weight: 1150
ref: cal-1150
permalink: /data_sources/de-microsoft-calendar.html
redirect_from:
  - /data_sources/24-de-microsoft-calendar.html
---

Die Microsoft Kalender Datenquelle ermöglicht es dir, auf einen Kalender zuzugreifen, der bei Microsoft 365 gehostet wird. Unterstützt werden ausschließlich Kalender, die bei Microsoft 365 / Outlook.com gehostet werden – SharePoint-Kalender oder lokale Exchange-Kalender werden nicht unterstützt. Die Anmeldung läuft über die moderne Microsoft-Authentifizierung (Microsoft Entra ID, OAuth) und du hast die Wahl zwischen einer **Multi-Tenant**- und einer **Single-Tenant**-Anwendung.

## Einrichten der Datenquelle

Mache einen Rechtsklick auf [Daten] oder klicke auf den [...]-Button und wähle [Datenquelle hinzufügen]. Wechsle in die Kategorie [Office 365] (1) und wähle die Datenquelle [Calendar] (2).

![Microsoft Kalender Datenquelle hinzufügen](/assets/images/data-sources/microsoft-calendar/microsoft-calendar-01-add.png)

## Verbindung konfigurieren

Vergib der Datenquelle einen Namen und richte anschließend die [Connection] ein. Die Wahl der Autorisierungsmethode, die Anmeldung über [Authorize] und das Wiederverwenden einer bestehenden Verbindung funktionieren für alle Office 365 Datenquellen gleich und werden hier einmal beschrieben: [Office 365 Verbindung](/data_sources/de-office365-connection.html).

## Details angeben

Standardmäßig liest die Datenquelle den Standardkalender des angemeldeten Benutzers. Aktiviere [Specific Calendar] (3), um stattdessen einen bestimmten Kalender des Kontos auszuwählen. Mit [Select timeframe] (4) schränkst du die Einträge auf einen Zeitabschnitt ein; andernfalls wird ein Standardzeitraum rund um das aktuelle Datum verwendet. Über [Timezone] legst du die Zeitzone fest, in die Start- und Endzeiten umgerechnet werden.

Das Feld [Date format] (5) enthält das Pattern, mit dem Datum und Uhrzeit jedes Eintrags in der späteren Tabelle formatiert werden (Standard `HH:mm:ss dd.MM.yyyy`). Möchtest du den Hauptteil eines Kalendereintrags (den sogenannten Body) nicht als Klartext, sondern als HTML-Formatierung weiterverarbeiten, aktiviere die Checkbox [Content as HTML].

## Daten laden

Klicke auf [Load data], um dir die Vorschau anzeigen zu lassen. Das Ergebnis ist eine Liste, die pro Kalendereintrag eine Zeile enthält, mit den Spalten [Subject], [Start], [End] und [Body] (die Betreffzeilen sind in diesem Screenshot unkenntlich gemacht).

![Microsoft Kalender Vorschau](/assets/images/data-sources/microsoft-calendar/microsoft-calendar-03-preview.png)

Mit einem Klick auf [OK] legst du die Datenquelle an. Sie erscheint anschließend im Explorer unter [Daten] und kann wie jede andere Datenquelle mit Controls verknüpft werden.

Unter dem folgenden Link findest du ergänzende Informationen in Form eines YouTube-Videos:

[Darstellung des Microsoft Outlook Kalenders in Peakboard.](https://www.youtube.com/watch?v=0LsEXH9-r7s)
