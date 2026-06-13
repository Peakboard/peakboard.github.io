---
layout: article
title: Office 365 Kalender
menu_title: Office 365 Kalender
description: Microsoft 365 Kalender als Datenquelle im Peakboard Designer anbinden – inkl. Single-Tenant- und Multi-Tenant-Autorisierung.
lang: de
weight: 1150
ref: cal-1150
redirect_from:
  - /data_sources/24-de-microsoft-calendar.html
---

Die Microsoft Kalender Datenquelle ermöglicht es dir, auf einen Kalender zuzugreifen, der bei Microsoft 365 gehostet wird. Unterstützt werden ausschließlich Kalender, die bei Microsoft 365 / Outlook.com gehostet werden – SharePoint-Kalender oder lokale Exchange-Kalender werden nicht unterstützt. Die Anmeldung läuft über die moderne Microsoft-Authentifizierung (Microsoft Entra ID, OAuth) und du hast die Wahl zwischen einer **Multi-Tenant**- und einer **Single-Tenant**-Anwendung.

## Einrichten der Datenquelle

Mache einen Rechtsklick auf [Daten] oder klicke auf den [...]-Button und wähle [Datenquelle hinzufügen]. Wechsle in die Kategorie [Office 365] (1) und wähle die Datenquelle [Calendar] (2).

![Microsoft Kalender Datenquelle hinzufügen](/assets/images/data-sources/microsoft-calendar/microsoft-calendar-01-add.png)

## Verbindung konfigurieren

Vergib im Bereich [General] zunächst einen Namen für die Datenquelle. Im Bereich [Connection] wählst du über das Auswahlfeld die Autorisierungsmethode (1) und meldest dich anschließend über den Button [Authorize] (2) an. Nach erfolgreicher Anmeldung zeigt der Button [Is authorized]. Da die Anmeldung über das normale Microsoft-Anmeldefenster erfolgt, wird auch die Zwei-Faktor-Authentifizierung (MFA) unterstützt – in deinem Projekt wird niemals Username und Passwort gespeichert, sondern nur ein Token, dessen Gültigkeit du über das Microsoft-365-Portal jederzeit zurücksetzen kannst.

* **Use multi-tenant Application** – Peakboard nutzt eine bereits von Peakboard bereitgestellte, mandantenübergreifende Anwendung in Microsoft Entra ID. Du musst keine eigene App registrieren; ein Klick auf [Authorize] genügt.
* **Use single-tenant Application** – du verwendest eine eigene App-Registrierung in deinem eigenen Microsoft Entra ID-Verzeichnis (Tenant), indem du dessen [Application (client) ID] und [Directory (tenant) ID] einträgst. Die Anmeldung bleibt damit vollständig innerhalb deiner Organisation.

Hast du im selben Projekt bereits eine Office-365-Verbindung autorisiert (zum Beispiel für SharePoint Lists), klicke unten auf [Reuse existing connection] und wähle sie aus – eine erneute Anmeldung ist dann nicht nötig.

![Microsoft Kalender Verbindung und Details konfigurieren](/assets/images/data-sources/microsoft-calendar/microsoft-calendar-02-config.png)

## Details angeben

Standardmäßig liest die Datenquelle den Standardkalender des angemeldeten Benutzers. Aktiviere [Specific Calendar] (3), um stattdessen einen bestimmten Kalender des Kontos auszuwählen. Mit [Select timeframe] (4) schränkst du die Einträge auf einen Zeitabschnitt ein; andernfalls wird ein Standardzeitraum rund um das aktuelle Datum verwendet. Über [Timezone] legst du die Zeitzone fest, in die Start- und Endzeiten umgerechnet werden.

Das Feld [Date format] (5) enthält das Pattern, mit dem Datum und Uhrzeit jedes Eintrags in der späteren Tabelle formatiert werden (Standard `HH:mm:ss dd.MM.yyyy`). Möchtest du den Hauptteil eines Kalendereintrags (den sogenannten Body) nicht als Klartext, sondern als HTML-Formatierung weiterverarbeiten, aktiviere die Checkbox [Content as HTML].

## Daten laden

Klicke auf [Load data], um dir die Vorschau anzeigen zu lassen. Das Ergebnis ist eine Liste, die pro Kalendereintrag eine Zeile enthält, mit den Spalten [Subject], [Start], [End] und [Body] (die Betreffzeilen sind in diesem Screenshot unkenntlich gemacht).

![Microsoft Kalender Vorschau](/assets/images/data-sources/microsoft-calendar/microsoft-calendar-03-preview.png)

Mit einem Klick auf [OK] legst du die Datenquelle an. Sie erscheint anschließend im Explorer unter [Daten] und kann wie jede andere Datenquelle mit Controls verknüpft werden.

Unter dem folgenden Link findest du ergänzende Informationen in Form eines YouTube-Videos:

[Darstellung des Microsoft Outlook Kalenders in Peakboard.](https://www.youtube.com/watch?v=0LsEXH9-r7s)
