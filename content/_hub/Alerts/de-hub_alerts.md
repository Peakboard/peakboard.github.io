---
layout: article
product: hub
title: Alerts
menu_title: Alerts
description: Peakboard Hub - Alerts
lang: de
weight: 900
ref: hub-900
redirect_from:
 - /hub/de-hub_alerts.html
---

Peakboard Hub Alerts sind ein Instrument für die Echtzeitüberwachung und -reaktion in deiner Betriebsumgebung.
In der Alerts-Ansicht verwaltest du systemweite Warnmeldungen, ihre Benachrichtigungen und die Empfänger für E-Mail und Push Notifications.

### Neue und Gelöste Alerts

Die zentrale Ansicht zeigt zwei Bereiche: neue Alerts und gelöste Alerts. Jede Meldung enthält den Zeitpunkt, Gerätedaten, eine Beschreibung und den Alert-Typ (Info, Warning oder Error).

Am oberen Rand der Liste [New Alerts] findest du folgende Steuerelemente:
- **Aktualisieren-Symbol:** Liste neu laden.
- **Checkbox [Alle auswählen]:** Mehrere Alerts gleichzeitig als gelöst markieren.
- **[Delete all]:** Alle Einträge entfernen.

![Alert Einträge](/assets/images/hub/de_hub_alerts-overview-01.png)

Jeder einzelne Alert enthält drei Aktionsbuttons:
- **Globus-Symbol:** Öffnet den Web Access der betroffenen Box direkt.
- **Blauer Haken:** Markiert den Alert als gelöst und verschiebt ihn in die Liste [Solved Alerts].
- **Mülleimer-Symbol:** Entfernt den Alert aus der aktuellen Liste.

### Gelöste Alerts

![Gelöste Alerts](/assets/images/hub/de_hub_alerts-overview-02.png)

In diesem Bereich kannst du bestätigte und erkannte Warnungen vollständig entfernen.
Über die Seitennavigation am unteren Rand steuerst du die Seitenauswahl und passt die Anzahl der angezeigten Einträge pro Seite an.

### Alert Settings

![Alert Settings](/assets/images/hub/de_hub_alerts-overview-03.png)

Im rechten Bereich verwaltest du die E-Mail-Benachrichtigungsempfänger:
- **Empfängerliste:** Zeigt alle E-Mail-Adressen an, die bei neuen Alerts benachrichtigt werden.
- **Add-Button (+):** Öffnet ein Eingabefeld für neue Adressen. Bestätige mit [Save]. Bestehende Adressen können direkt entfernt werden.

### Push Notifications

![Push Notifications](/assets/images/hub/de_hub_alerts-overview-04.png)

Unterhalb der E-Mail-Einstellungen steuerst du die Push-Notification-Zustellung:
- **Subscribe to Alerts:** Aktiviere Browser- oder Mobile-Push-Notifications.
- **Berechtigung:** Bestätige die Browser-Benachrichtigungsberechtigung im Dialog mit [Erlauben].
- **Unsubscribe from Alerts:** Deaktiviere Push Notifications jederzeit.

### Die verschiedenen Alert-Typen

Es gibt drei verschiedene Alert-Typen, die für unterschiedliche Einsatzzwecke gedacht sind.

**Info Alerts**

`peakboardhub.sendinfo('Dies ist eine Informationsnachricht')`
Informationsnachrichten werden verwendet, um beispielsweise allgemeine Statusaktualisierungen oder unkritische Informationen zu übermitteln.

**Warning Alerts**

`peakboardhub.sendwarning('Warnung: Temperatur überschreitet empfohlenes Level')`
Warnmeldungen werden verwendet, um auf potentielle Probleme oder Bedingungen hinzuweisen, die möglicherweise deine Aufmerksamkeit benötigen.

**Problem Alerts**

`peakboardhub.sendproblem('Kritischer Fehler: Anwendung abgestürzt')`
Problemmeldungen werden verwendet, um kritische Probleme oder Fehler anzuzeigen, die deine sofortige Aufmerksamkeit erfordern.
