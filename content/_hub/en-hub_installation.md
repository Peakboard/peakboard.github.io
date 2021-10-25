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
At no time is any communication established with the outside world, but only between the user, the Peakboard Boxes and Peakboard Hub. 
The Windows Domain Controller (Active Directory) is used for authentication, so simply enter the username with domain and the Windows password when logging in. 
The data storage of Peakboard Hub takes place in an included SQL Server Express 2019. 
However, an existing SQL Server from version 2017 can also be used.

### Installation / Updates

For the initial installation on a Windows server, you only need the installation file of Peakboard Hub, which you will receive free of charge within your current SLA. 
In the first installation we recommend leaving all checkmarks set, so that all necessary components are also installed and the configuration in the IIS is set particularly comfortably. 
If an already existing SQL server is to be used, it is possible to do without the installation of the SQL server.

For future updates, simply check the box [PB Hub Main]. 
An update can be installed via the existing setup.

During the setup, you will be asked to create a database that will serve as a database for Peakboard Hub and to enter a database user. 
Afterwards Peakboard Hub can be found in your SSIS pages. 
Here you can configure everything as you are used to from IIS and, for example, add secure communication with certificates from your company.

After the first login of a user in Peakboard Hub, you can define in the installation folder (by default C:/inetpub/PeakboardHub) under the application [Peakboard.HUB.DatabaseManager.exe] which users should receive admin rights for Peakboard Hub.

<div class="box-warning" markdown="1"> **Attention**:
* If you want to update your Peakboard Boxes via Peakboard Hub, first authorize the IIS process to write to the installation folder (c:/inetpub/PeakboardHub).
* If you want to use MQTT to communicate between Peakboard Boxes, the MQTT port must be opened. This is 1883 by default.
</div>

Here you can see where to set the permissions:

![hub_permissions](/assets/images/hub/hub_permissions.png)
