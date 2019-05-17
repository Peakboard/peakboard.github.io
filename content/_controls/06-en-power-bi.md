---
layout: article
title: Power BI  
menu_title: Power BI
description: Information about Peakboard Designer Power BI Control.
lang: en
weight: 600
ref: con-600
---

The Peakboard-Designer includes a Power BI Control that allows the user to display appropriate dashboards on the Peakboard displays without having to make them publicly accessible. A tile is part of a Power BI dashboard. Each dashboard in Power BI consists of one or more tiles. As a minimum requirement you need

Microsoft account and valid Office 365 license incl. Power BI
Microsoft Azure Account

To access your own Power BI dashboards, you need to log in with your Microsoft account. Authentication for Power BI runs through Azure Active Directory, where Power BI is registered as an app.

 1. **Create an Azure Active Directory:**
    1. Log in to the Azure Management Portal ([http://manage.windowsazure.com](http://manage.windowsazure.com)) with your
    Microsoft account.
    2. Select “Active Directory” in the navigation bar and click on “New”.
    3. Fill in all necessary fields in the dialog box

2. **Register an app in the Active Directory:**
    1. Select an Active Directory in which you want to register the app.
    2. In the Active Directory navigation bar, select “Applications” and click on “Add”, then select “Add an application my organization is developing”.
    3. In the dialog box, enter a name (e. g. PeakBoard or Power BI).
    4. Select Native Client Application.
    5. Enter `https://login.live.com/oauth20_desktop.` srf as the redirect URL and confirm.
    6. Assign Power BI access rights to the app.

![image_1](/assets/images/Controls/Controls-Power/ControlsPowerBI02.png)


![image_1](/assets/images/Controls/Controls-Power/ControlsPowerBI03.png)

If you want to select a tile in the settings of the Power BI tile control in the Peakboard Designer, the login window will appear first:

![image_1](/assets/images/Controls/Controls-Power/ControlsPowerBI04.png)

![image_1](/assets/images/Controls/Controls-Power/ControlsPowerBI05.png)

You get the tenant ID from the URL in the Azure management portal:

  1.  Select “Active Directory” in the navigation bar on the left.
  2.  In the list, select the Active Directory in which an app with access to Power BI is registered.
  1. The Active Directory ID can be found in the URL of the current page:

![image_1](/assets/images/Controls/Controls-Power/ControlsPowerBI06.png)

The client ID can be found in the settings of the Active Directory Application (see above).

![image_1](/assets/images/Controls/Controls-Power/ControlsPowerBI07.png)

Finally, fill in your Microsoft account username and password. After the authentication has been successfully completed, you can select the Power BI tile that you want to display on the Peakboard. In the dialog please enter the name of the dashboard and the tile.

![image_1](/assets/images/Controls/Controls-Power/ControlsPowerBI08.png)

The following two screenshots show the dashboard in Power BI and then on a Peakboard-Panel.

![image_1](/assets/images/Controls/Controls-Power/ControlsPowerBI09.png)

![image_1](/assets/images/Controls/Controls-Power/ControlsPowerBI10.png)
