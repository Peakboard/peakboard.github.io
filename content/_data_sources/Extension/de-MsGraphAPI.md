---
layout: article
title: Microsoft Graph API Extension
menu_title: Microsoft Graph API Extension
description: Informationen über die Nutzung der Microsoft Graph API Extension
lang: de
weight: 2640
ref: dat-2640
redirect_from:
---

Um die Datenquelle Microsoft Graph API Extension nutzen zu können sind folgende Mindestvoraussetzungen notwendig:

* Microsoft Konto und gültige Office 365 Lizenz inkl. Microsoft Graph
* Microsoft Azure Konto

Damit du loslegen kannst musst du zuerst eine App in Microsoft Azure registrieren.

## Eine App zur Kommunikation zwischen Peakboard und Microsoft Graph registrieren

1. Logge dich in dein Azure-Konto ein und wähle den Azure-Dienst Azure Active Directory aus.
2. Wähle im linken Menü den Punkt [App-Registrierungen] (1) aus und klicke oben auf das Plus-Symbol [Neue Registrierung] (2).

![Neue Registrierung](/assets/images/data-sources/extension/msgraph/de_app-01.png)

3. Vergib einen passenden Namen (3) und wähle als unterstützten Kontotyp den Typ [einzelner Mandant] (4) aus.
4. Unter Umleitungs-URI wählst du [Öffentlicher Client/nativ (mobil und Desktop)] (5) aus.
5. Klicke auf den Button [Registrieren] (6).

![Registrieren](/assets/images/data-sources/extension/msgraph/de_app-02.png)

## Anpassen der App

1. Die Übersicht der App öffnet sich nach der Registrierung automatisch. Wähle im Menü links den Punkt [Authentifizierung] (1)
2. Setze unter [Erweiterte Einstellungen] den Schieberegler [Öffentliche Clientflows zulassen] auf [Ja] (2).
3. Klicke nun auf den Button [Speichern] (3).

![Authentifizierung](/assets/images/data-sources/extension/msgraph/de_app-03.png)

4. Wechsle über das Menü links in den Bereich [API-Berechtigungen] (4) um diese zu prüfen. Welche Rechte jeweils benötigt werden findest du in der Microsoft Graph Dokumentation zur jeweiligen Abfrage.
5. Nimm entsprechende Anpassungen vor falls nötig oder hole dir von einem Administrator noch die benötigten Administratoreinwilligungen ein.

![Berechtigungen](/assets/images/data-sources/extension/msgraph/de_app-04.png)

6. Wechsle nun über das Menü links in den Bereich [Übersicht] (5).
7. Für den nächsten Schritt benötigst du die IDs [Anwendungs-ID (Client)] (6) und [Verzeichnis-ID (Mandant)] (7) sowie den geheimen Clientschlüssel (8). Wenn du die App neu registriert hast musst du diesen erst noch erzeugen.

![IDs und Client Secret](/assets/images/data-sources/extension/msgraph/de_app-05.png)

## Microsoft Graph API Extension installieren

Nach dem [Download](https://templates.peakboard.com/extensions/Microsoft-Graph) und der [Installation](/data_sources/Extension/de-ManageExtension.html) der Microsoft Graph API Extension stehen dir unter [Datenquellen] drei verschiedene Zugriffsarten (1) zur Verfügung.

![Zugriffsarten](/assets/images/data-sources/extension/msgraph/de_access-types.png)

### Microsoft Graph User-Delegated Access

Bei dieser Variante greifst du auf die Microsoft Graph Daten mit dem Namen und den entsprechenden  Rechten eines bestimmten Benutzers zu. Um diese Variante zu nutzen musst du dich mit deinem gewünschten Nutzer authentifizieren. Es handelt sich dabei um die am häufigsten benötigte Art des Zugriffs.

### Microsoft Graph App-Only Access

Im Unterschied zum user-delegated access greifst du bei dieser Variante nur mit dem Namen und den Rechten der App auf die Daten zu. Dabei ist nicht jedes mal eine separate Authentifizierung notwendig.

### Microsoft Graph User Functions

Die User Functions nutzt du wenn es darum geht bestimmte Funktionen aufzurufen um eine Aktion auszuführen anstatt nur eine Liste abzufragen. Zur Nutzung dieser Variante ist wieder eine Authentifizierung nötig wie beim User-Delegated Access.

## Microsoft Graph Explorer

Da die Auswahl an Abfragen und Funktionen extrem umfangreich ist bietet Microsoft ein praktisches Tool um die Microsoft Graph Funktionen zu durchsuchen und zu testen, [den Graph Explorer](https://developer.microsoft.com/en-us/graph/graph-explorer).

![Graph Explorer](/assets/images/data-sources/extension/msgraph/graph-explorer.png)

In der dazugehörigen [Dokumentation](https://learn.microsoft.com/en-us/graph/api/overview?view=graph-rest-1.0) findest du außerdem viele Beispiel-Abfragen die du nutzen kannst.

## Eine Abfrage im Peakboard Designer hinzufügen

Als Beispiel rufen wir einen Nutzungsreport aus Office 365 ab. Der Report listet die aggregierte Outlook-Aktivität pro Tag für das gesamte Unternehmen auf. Reports wie dieser sind nützlich um beispielsweise Systemadministratoren Einblicke in die Vorgänge in ihrem Office 365 Tenant zu geben. [Hier findest du die zugehörige Dokumentation](https://learn.microsoft.com/en-us/graph/api/reportroot-getemailactivityusercounts?view=graph-rest-1.0&tabs=http)

### Datenquelle konfigurieren

Für die Abfrage nutzt du am besten den App-Only Access. Stelle sicher dass du der App die entsprechende Berechtigung [Reports.Read.All] gegeben hast.
Gib der Datenquelle zuerst einen Namen. Trage deine IDs und das Client Secret in die entsprechenden Felder ein (1) und verbinde dich mit dem [Connect] Button. Setze dann den Haken bei [Custom Call] (2) und füge die URL für den Report aus dem Graph Explorer ein (3):

```
https://graph.microsoft.com/beta/reports/microsoft.graph.getEmailActivityCounts(period='D30')
```

Mit dem zusätzlichen Parameter [period=‘D30‘] rufen wir die Daten der letzten 30 Tage ab. Klicke auf [Check] (4) um zu verifizieren, dass die Abfrage möglich ist. Nach positiver Bestätigung klickst du auf [Daten laden] im rechten Bereich um dir eine Vorschau der Daten anzeigen zu lassen.

![App-Only Access](/assets/images/data-sources/extension/msgraph/de_access-dialog.png)

### Daten für die Nutzung vorbereiten

Die Daten werden im Falle von Reports, oder allen Abfragen die in Form einer csv-Datei geliefert werden, als String geliefert. In diesem Zustand ist es schwierig sie in einem Diagramm weiterzuverarbeiten. Zur Vorbereitung der Daten legst du einen Dataflow auf der Datenquelle an (5).

![Dataflow hinzufügen](/assets/images/data-sources/extension/msgraph/de_dataflow-01.png)

Mit diesem Dataflow konvertierst du den Datentyp der Spalten [Send] (6) und [Receive] (7) von String zu Number.

![Dataflow Datentypen](/assets/images/data-sources/extension/msgraph/de_dataflow-02.png)

Danach löschst du alle nicht benötigten Spalten, also alle außer [Report_Date], [Send] und [Receive]. Die Daten sind nun aufbereitet für die weitere Nutzung.

![Dataflow Spalten löschen](/assets/images/data-sources/extension/msgraph/de_dataflow-03.png)

### Diagramm erstellen

Für die Darstellung der Daten eignet sich beispielsweise eine Mischung aus Flächendiagramm (8) für die gesendeten E-Mails und Liniendiagramm (9) für die empfangenen E-Mails.

![Diagramm](/assets/images/data-sources/extension/msgraph/de_chart-01.png)

Die X-Achse ist dabei jeweils das Datum. Die restliche Konfiguration ist selbsterklärend  und dank der gut vorbereiteten Daten einfach umzusetzen.

![Konfiguration](/assets/images/data-sources/extension/msgraph/de_chart-02.png)

Wenn alles geklappt hat sieht das Ergebnis beispielsweise so aus

![Ergebnis](/assets/images/data-sources/extension/msgraph/de_chart-03.png)
