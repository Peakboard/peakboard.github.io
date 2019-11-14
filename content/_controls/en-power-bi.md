---
layout: article
title: Power BI  
menu_title: Power BI
description: Information about Peakboard Designer Power BI Control.
lang: en
weight: 600
ref: con-600
redirect_from:
  - /controls/06-en-power-bi.html
---

The Peakboard Designer includes a Power BI Control that allows the user to display appropriate dashboards on the Peakboard displays without having to make them publicly available. A tile is part of a Power BI dashboard. Each Power BI dashboard consists of one or more tiles. 

In order to display the Power BI Dashboard, the following minimum requirements are necessary:

* Microsoft account and valid Office 365 license incl. Power BI
* Administrator rights for the Azure Active Directory
* Microsoft Azure account

To access your own Power BI dashboards, you must first log in with your Microsoft account. Authentication for Power BI runs through Azure Active Directory, in which Power BI is registered as an app.
To make it as easy as possible to register the Power BI app, Microsoft offers a web application for this purpose.


## 1. Create an app for communication between Peakboard and PowerBI

>    1. Open the following web application: [https://dev.powerbi.com/apps](https://dev.powerbi.com/apps)
>
>    2. Enter a name here.
>
>    3. Select "Native" at the point Application Type.
>
>    4. The checkbox "Read all Dashboards" must be set under the permissions.
>
>    5. Now click on the Register button.

![image_1](/assets/images/Controls/Controls-Power/ControlsPowerBI01.png)


## 2. Adjust the app in Azure

> 1. Open the Azure Portal at [https://portal.azure.com/](https://portal.azure.com/).
> 
> 2. You will find the newly created app in the main menu of Azure under the menu item "App registrations".
> 
> 3. Open the new app.
> 
> 4. Check if the permissions for the app have been assigned successfully by clicking on the button "Show API permissions".
> 
> 5. There should be a green tick behind the permissions under Status, otherwise the permissions have to be approved by the Azure Administrator.
> 
> 6. Now go back to the main page of the app and copy the IDs under Application ID (Client) and Directory ID (Client) into the Peakboard Designer.

![image_1](/assets/images/Controls/Controls-Power/ControlsPowerBI02.png)

## 3. Insert Power BI in Peakboard Designer

>   1. Create a "Power BI Tile" control under Advanced in the Peakboard Designer.
>
>   2. Open the button under Data / Tiles where you enter the IDs of Azure.
>
>   3. You can now select any tile of a dashboard.


![image_1](/assets/images/Controls/Controls-Power/ControlsPowerBI03.png)
