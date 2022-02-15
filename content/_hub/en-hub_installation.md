---
layout: article
title: Installation  
menu_title: Installation  
description: Peakboard Hub - Installation  
lang: en
weight: 100
ref: hub-100
redirect_from:
---


Peakboard Hub is hosted locally on your server, which requires IIS and Windows Server from at least version 2016. 
In addition, the [ASP.NET Core 2.2 Runtime](https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/runtime-aspnetcore-2.2.2-windows-hosting-bundle-installer) must be installed in advance.
There is no external communication at any time, only between the user, the Peakboard boxes and Peakboard Hub. 
The Windows Domain Controller (Active Directoy) is used for authentication, so just enter the *Windows username with domain* and the *Windows password* when logging in. 
Peakboard Hub's data storage takes place in an included SQL Server Express 2019. 
However, an already existing SQL Server from version 2017 can also be used.

### Installation / Updates

For the initial installation on a Windows server, you only need the installation file of Peakboard Hub, which is provided free of charge within your current SLA. 
In the first installation we recommend to leave all checkmarks set, so all necessary components are installed and the configuration in the IIS is set very comfortably. 
If you want to use an already existing SQL Server, it is possible to omit the installation of the SQL Server.

For future updates you only have to check [PB Hub Main]. 
An update can simply be installed over the already existing setup.


During setup, you will be prompted to create a database that will serve as the database for Peakboard Hub and to specify a database user. 
After that Peakboard Hub can be found in your SSIS pages. 
Here you can configure everything as you are used to from IIS and, for example, add secure communication with certificates from your company.

After the first login of a user in Peakboard Hub you can define in the installation folder (by default C:/inetpub/PeakboardHub) under the application [Peakboard.HUB.DatabaseManager] which users should get admin rights for Peakboard Hub.
 As soon as a user has admin rights, this user can appoint further users in the user management of Peakboard Hub as admin in the future.

<div class="box-warning" markdown="1"> **Beachte**:
* If you want to update Peakboard boxes via Peakboard Hub, you must authorize the ISS process to write to the installation folder (c:/inetpub/PeakboardHub).
* If you want to use MQTT for communication between Peakboard boxes, you have to open the MQTT port (default: 1883).
</div>

Here you can see where to set the permissions:

![hub_permissions](/assets/images/hub/hub_permissions.png)
