---
layout: article
title: Power BI  
menu_title: Power BI
description: Information über Peakboard Designer Power BI Control.
lang: de
ref: con-06
---

Der Peakboard Designer enthält ein Power BI Control, das es dem Benutzer ermöglicht, entsprechende Dashboards auf den Peakboard Displays darzustellen, ohne diese öffentlich zugängig machen zu müssen. Eine Kachel ist ein Bestandteil eines Power BI Dashboards. Jedes Dashboard in Power BI besteht aus einer oder mehreren Kacheln. Als Mindestvoraussetzung benötigen Sie

* Microsoft Konto und gültige Office 365 Lizenz inkl. Power BI
* Microsoft Azure Konto

Um auf eigene Power BI Dashboards zugreifen zu können, muss man sich mit seinem Microsoft-Konto einloggen. Die Authentifizierung für Power BI läuft über Azure Active Directory, in dem Power BI als eine App registriert ist.

1. **Ein Azure Active Directory erstellen:**

    1. Melden Sie sich auf dem Azure Management Portal [(http://manage.windowsazure.com)](http://manage.windowsazure.com) mit dem Microsoft-Konto an
    2. Wählen Sie in der Navigationsleiste „Active Directory“ aus und klicken Sie auf „New“.
    3. Füllen Sie in dem dem Dialog-Fenster alle notwendigen Felder aus

2. **Eine App in dem Active Directory registrieren:**

    1. Wählen Sie ein Active Directory aus, in der Sie die App registrieren wollen.

    2. Wählen Sie in der Navigationsleiste der Active Directory „Applications“ aus und klicken Sie auf “Add” und dann wählen Sie „Add an application my organization is developing” aus.

    3. In dem Dialog geben Sie einen Namen ein (z.B. PeakBoard oder Power BI).

    4. Wählen Sie „Native Client Application“ aus.

    5. Geben Sie als Redirect URL [https://login.live.com/oauth20_desktop.srf](https://login.live.com/oauth20_desktop.srf) ein und bestätigen Sie.

    6. Weisen Sie der App die Power BI Zugriffsrechte zu.

![image_1](/assets/images/Controls/Controls-Power/ControlsPowerBI02.png)


![image_1](/assets/images/Controls/Controls-Power/ControlsPowerBI03.png)

Wenn Sie in den Einstellungen des Power BI Kachel-Steuerelements im Peakboard-Designer eine Kachel auswählen wollen, erscheint erstmal das Login-Fenster:

![image_1](/assets/images/Controls/Controls-Power/ControlsPowerBI04.png)

![image_1](/assets/images/Controls/Controls-Power/ControlsPowerBI05.png)

Die Tenant ID bekommen Sie Sie aus der URL in dem Azure Managementportal:

  1. Wählen Sie links in der Navigationsleiste „Active Directory“ aus
  2. Wählen Sie in der Liste die Active Directory aus, in der eine App mit dem Zugriff auf Power BI registriert ist
  3. Die ID des Active Directorys finden Sie in der URL der aktuellen Seite:
![image_1](/assets/images/Controls/Controls-Power/ControlsPowerBI06.png)

Die Client ID finden Sie in den Einstellungen der Active Directory Application (siehe ganz oben).

![image_1](/assets/images/Controls/Controls-Power/ControlsPowerBI07.png)

Abschließend befüllen Sie noch Microsoft-Konto Benutzername und Passwort. Nachdem die Authentifizierung erfolgreich abgeschlossen ist, können Sie die Power BI-Kachel, die Sie auf dem PeakBoard darstellen wollen, auswählen. In dem Dialog geben Sie bitte den Namen des Dashboards und der Kachel an.
![image_1](/assets/images/Controls/Controls-Power/ControlsPowerBI08.png)

Die beiden nachfolgenden Screenshots zeigen das Dashboard einmal original im Power BI und dann auf einem Peakboard-Panel.

![image_1](/assets/images/Controls/Controls-Power/ControlsPowerBI09.png)

![image_1](/assets/images/Controls/Controls-Power/ControlsPowerBI10.png)
