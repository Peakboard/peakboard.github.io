---
layout: article
title: Power BI  
menu_title: Power BI
description: Information über Peakboard Designer Power BI Control.
lang: de
weight: 600
ref: con-600
redirect_from:
  - /controls/06-de-power-bi.html
---

Der Peakboard Designer enthält ein Power BI Control, das es dem Benutzer ermöglicht, entsprechende Dashboards auf den Peakboard Displays darzustellen, ohne diese öffentlich zugängig machen zu müssen. Eine Kachel ist ein Bestandteil eines Power BI Dashboards. Jedes Dashboard in Power BI besteht aus einer oder mehreren Kacheln. Als Mindestvoraussetzung benötigen Sie

* Microsoft Konto und gültige Office 365 Lizenz inkl. Power BI
* Administratorrechte für das Azure Active Directory
* Microsoft Azure Konto

Um auf eigene Power BI Dashboards zugreifen zu können, muss man sich mit seinem Microsoft-Konto einloggen. Die Authentifizierung für Power BI läuft über Azure Active Directory, in dem Power BI als eine App registriert ist.
Um das Registrieren der Power BI App möglichst einfach zu gestalten bietet Microsoft eine Webanwendung an.

1. **Eine App zur Kommunikation zwischen Peakboard und PowerBI erstellen**

    1. Öffnen Sie folgende Webanwendung: [https://dev.powerbi.com/apps] (https://dev.powerbi.com/apps)

    2. Geben Sie hier einen Namen ein.

    3. Wählen Sie beim Punkt Application Type "Native"

    4. Unter den Berechtigungen muss der Haken bei "Read all Dashboards" gesetzt sein

    5. Klicken Sie nun auf den Button Register

![image_1](/assets/images/Controls/Controls-Power/ControlsPowerBI01.png)


2. **Anpassen der App in Azure**

    1. Öffnen Sie nun das Azure Portal unter [https://portal.azure.com/] (https://portal.azure.com/)

    2. Sie finden die neu erstellte App im Hauptmenü von Azure unter Dem Menüpunkt "App-Registrierungen"

    3. Öffnen Sie die neue App

    4. Prüfen Sie ob die Berechtigungen für die App erfolgreich vergeben wurden indem Sie auf den Button "API-Berechtigungen anzeigen" klicken

    5. Hinter den Berechtigungen sollte unter Status ein grüner Haken zu sehen sein, ansonsten müssen die Berechtigungen vom Azure Administrator noch genehmigt werden

    6. Nun gehen Sie zurück auf die Hauptseite der App und kopieren die IDs unter Anwendungs-ID (Client) und Verzeichnis-ID (Mandant) in den Peakboard Designer

![image_1](/assets/images/Controls/Controls-Power/ControlsPowerBI02.png)

3. **Power BI im Peakboard Designer einfügen**

    1. Legen Sie im Peakboard Designer unter Erweitert ein "Power BI Tile" Control an

    2. Öffnen Sie den Button unter Daten / Tiles wo Sie Die IDs von Azure eintragen

    2. Sie können nun ein beliebiges Tile eines Dashboards auswählen


![image_1](/assets/images/Controls/Controls-Power/ControlsPowerBI03.png)
