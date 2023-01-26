---
layout: article
title: Power BI  
menu_title: Power BI
description: Information about Peakboard Designer Power BI Control.
lang: en
weight: 840
ref: con-840
redirect_from:
  - /controls/06-en-power-bi.html
  - /controls/en-power-bi.html
---

The Peakboard Designer contains a Power BI control that allows the user to display appropriate dashboards on the Peakboard displays without having to make them publicly available. A tile is a part of a Power BI dashboard. Each dashboard in Power BI consists of one or more tiles.

In order to display the Power BI Dashboard, the following minimum requirements are necessary:

* Microsoft account and valid Office 365 license including Power BI.
* Administrator rights for the Azure Active Directory
* Microsoft Azure account

To access your own Power BI dashboards, you must first be logged in with your Microsoft account. Authentication for Power BI runs through Azure Active Directory, where Power BI is registered as an app.

## 1. Register an app to communicate between Peakboard and Power BI.

> 1. Log into your Azure account and select the Azure service Azure Active Directory.
> 2. Then select [App registrations] from the left menu, and then click the plus icon at the top [New registration].

![Azure Active Directory](/assets/images/Controls/Controls-Power/PowerBI_01.png)

> 3. Give it an appropriate name and select [Single tenant] as the supported account type.
> 4. Under Redirect URI select [Public client/native (mobile and desktop)].
> 5. Now click on the [Register] button.

![App registration](/assets/images/Controls/Controls-Power/PowerBI_02.png)

## 2. Customize the app

> 1. The overview of the app opens automatically after registration. In the menu on the left, select [Authentication].
> 2. Under [Advanced settings], set the slider [Allow public client flows] to [Yes].
> 3. Now click on the [Save] button.

![Authentication](/assets/images/Controls/Controls-Power/PowerBI_03.png)

> 4. Go to the [API permissions] section from the menu on the left and make sure that the permissions match the ones shown on the screenshot.
> 5. If the permissions are different or you still need to give the administrator permission, make the appropriate changes.

![API permissions](/assets/images/Controls/Controls-Power/PowerBI_04.png)

> 6. Now switch to the [Overview] section via the menu on the left.
> 7. For the next step you need the IDs [Application (client) ID] and [Directory (tenant) ID].

![IDs](/assets/images/Controls/Controls-Power/PowerBI_05.png)

## 3. Add Power BI in the Peakboard Designer

> 1. Create a Power BI Control in the Peakboard Designer under [Others].
> 2. Paste the IDs from the previous step in the corresponding fields and enter your username and password.
> 3. Now you can select any tile of a dashboard.
