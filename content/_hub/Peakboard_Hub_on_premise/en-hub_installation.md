---
layout: article
product: hub
title: Installation  
menu_title: Installation  
description: Peakboard Hub on premise - Installation  
lang: en
weight: 100
ref: hub-100
redirect_from:
  - /hub/en-hub_installation.html
---


Peakboard Hub on premise is hosted locally on your server, which requires IIS and Windows Server from at least version 2016.
In addition, the [ASP.NET Core 8.0 Runtime](https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/runtime-aspnetcore-8.0.6-windows-hosting-bundle-installer) must be installed in advance.
There is no external communication at any time, only between the user, the Peakboard boxes and Peakboard Hub on premise.
The Windows Domain Controller (Active Directoy) is used for authentication, so just enter the *Windows username without domain* and the *Windows password* when logging in.
Data storage of the Peakboard Hub on premise takes place in an included SQL Server Express 2019.
However, an already existing SQL Server from version 2017 can also be used.

### System requirements

The server running Peakboard Hub on premise must meet at least the following requirements:

{% include styled_table.html %}
{: .w-full }
| Processor | 4 cores |
| Memory | 32 GB RAM |
| Storage | 128 GB SSD |
| Operating system | Windows Server 2016 or higher |

### Installation

For the initial installation on a Windows server, you only need the installation file of the Peakboard Hub on premise, which is provided [here](https://downloads.peakboard.com/download/PeakboardHub/master/PeakboardHubSetup.exe).
In the first installation we recommend to leave all checkmarks set, so all necessary components are installed and the configuration in the IIS is set very comfortably.
If you want to use an already existing SQL Server, it is possible to omit the installation of the SQL Server.

During setup, you will be prompted to create a database that will serve as the database for Peakboard Hub on premise and to specify a database user.
After that Peakboard Hub on premise can be found in your IIS pages.
Here you can configure everything as you are used to from IIS and, for example, add secure communication with certificates from your company.

After the first login of a user in the Peakboard Hub on premise, this user will automatically become an administrator. You can appoint further users in the user management of Peakboard Hub on premise as admins in the future.

<div class="box-warning" markdown="1"> **Please note**:
* If you want to update Peakboard Boxes via Peakboard Hub on premise, you must authorize the IIS process to write to the installation folder (c:/inetpub/PeakboardHub).
* If you want to use MQTT for communication between Peakboard boxes, you have to open the MQTT port (default: 1883).
</div>

Here you can see where to set the permissions:

![Peakboard Hub permissions](/assets/images/hub/hub_permissions.png)

### Updates

To perform an update, download the latest [Peakboard Hub on premise installation file](https://downloads.peakboard.com/download/PeakboardHub/master/PeakboardHubSetup.exe).
In the setup process, in contrast to the initial installation, you only check the [Peakboard Hub] box.
The update can simply be installed over the already existing setup.
