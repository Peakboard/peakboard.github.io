---
layout: article
title: Power BI  
menu_title: Power BI
description: Information über Peakboard Designer Power BI Control.
lang: de
weight: 840
ref: con-840
redirect_from:
  - /controls/06-de-power-bi.html
  - /controls/de-power-bi.html
---

Der Peakboard Designer enthält ein Power BI Control, das es dem Benutzer ermöglicht, entsprechende Dashboards auf den Peakboard Displays darzustellen, ohne diese öffentlich zugängig machen zu müssen. Ein Tile oder auch Kachel ist Bestandteil eines Power BI Dashboards. Jedes Dashboard in Power BI besteht aus einer oder mehreren Kacheln.

Um das Power BI Dashboard darstellen zu können sind folgende Mindestvorrausetzungen notwendig:

* Microsoft Konto und gültige Office 365 Lizenz inkl. Power BI
* Administratorrechte für das Azure Active Directory
* Microsoft Azure Konto

Um auf eigene Power BI Dashboards zugreifen zu können, muss zunächst mit seinem Microsoft-Konto eingeloggt werden. Die Authentifizierung für Power BI läuft über Azure Active Directory, in dem Power BI als eine App registriert ist.

## 1. Eine App zur Kommunikation zwischen Peakboard und Power BI registrieren

1. Logge dich in dein Azure-Konto ein und wähle den Azure-Dienst Azure Active Directory aus.
2. Wähle im linken Menü den Punkt [App-Registrierungen] (1) aus und klicke oben auf das Plus-Symbol [Neue Registrierung] (2).

![Azure Active Directory](/assets/images/Controls/Controls-Power/PowerBI_01.png)

3. Vergib einen passenden Namen (3) und wähle als unterstützten Kontotyp den Typ [einzelner Mandant] (4) aus.
4. Unter Umleitungs-URI wählst du [Öffentlicher Client/nativ (mobil und Desktop)] (5) aus.
5. Klicke auf den Button [Registrieren] (6).

![App-Registrierung](/assets/images/Controls/Controls-Power/PowerBI_02.png)

## 2. Anpassen der App

1. Die Übersicht der App öffnet sich nach der Registrierung automatisch. Wähle im Menü links den Punkt [Authentifizierung] (1)
2. Setze unter [Erweiterte Einstellungen] den Schieberegler [Öffentliche Clientflows zulassen] auf [Ja] (2).
3. Klicke nun auf den Button [Speichern] (3).

![Authentifizierung](/assets/images/Controls/Controls-Power/PowerBI_03.png)

4. Wechsle über das Menü links in den Bereich [API-Berechtigungen] (4) und stelle sicher dass die Rechte mit denen auf dem Screenshot übereinstimmen.
5. Nimm entsprechende Anpassungen vor wenn die Rechte abweichen oder du noch die Administratoreinwilligung erteilen musst.

![API-Berechtigungen](/assets/images/Controls/Controls-Power/PowerBI_04.png)

6. Wechsle nun über das Menü links in den Bereich [Übersicht] (5).
7. Für den nächsten Schritt benötigst du die IDs [Anwendungs-ID (Client)] (6) und [Verzeichnis-ID (Mandant)] (7).

![IDs](/assets/images/Controls/Controls-Power/PowerBI_05.png)

## 3. Power BI im Peakboard Designer einfügen

1. Lege im Peakboard Designer unter [Andere] ein Power BI Control (1) an.

![Power BI Control](/assets/images/Controls/Controls-Power/PowerBI_06.png)

2. Füge die IDs aus dem vorigen Schritt an den entsprechenden Stellen ein und gib Benutzername und Passwort ein.

![IDs](/assets/images/Controls/Controls-Power/PowerBI_07.png)

3. Jetzt kannst du einen beliebigen Report oder ein Tile eines Dashboards auswählen.

![Report](/assets/images/Controls/Controls-Power/PowerBI_08.png)
![Peakboard Designer](/assets/images/Controls/Controls-Power/PowerBI_09.png)
