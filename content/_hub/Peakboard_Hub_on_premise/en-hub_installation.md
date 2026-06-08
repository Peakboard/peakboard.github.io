---
layout: article
product: hub
title: Installation
menu_title: Installation
description: Peakboard Hub on premise - step-by-step walkthrough of the installer
lang: en
weight: 100
ref: hub-100
redirect_from:
  - /hub/en-hub_installation.html
---


Peakboard Hub on premise is hosted locally on your server and requires IIS as well as Windows Server from at least version 2016. In addition, the [ASP.NET Core 8.0 Runtime](https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/runtime-aspnetcore-8.0.6-windows-hosting-bundle-installer) must be installed in advance.
There is no external communication at any time, only between the user, the Peakboard Boxes and Peakboard Hub on premise.
Authentication can be handled either via your Windows Domain Controller (Active Directory) or via local users managed inside the Peakboard Hub itself.
The Peakboard Hub on premise stores its data in an included SQL Server Express. An already existing SQL Server from version 2017 can also be used instead.

### System requirements

The server running Peakboard Hub on premise must meet at least the following requirements:

{% include styled_table.html %}
{: .w-full }
| Processor | 4 cores |
| Memory | 32 GB RAM |
| Storage | 128 GB SSD |
| Operating system | Windows Server 2016 or higher |

### Installation

For the initial installation on a Windows server, you only need the installation file of the Peakboard Hub on premise, which is provided [here](https://downloads.peakboard.com/download/PeakboardHub/master/PeakboardHubSetup.exe). Run the file with administrator rights — the installer guides you through the setup in four numbered steps.

#### Step 1 — Welcome

When you start the installer, the welcome screen appears. Click [Install Peakboard Hub] (1) to open the wizard.

![Peakboard Hub Installer welcome screen](/assets/images/hub/installer/hub-installer-01-welcome.png)

#### Step 2 — Choose components

On the **Choose components** page you decide which parts of Peakboard Hub will be installed. Components that are already installed are de-selected by default, so they are skipped during an update.

* **Peakboard Hub (web application)** (1) — The Peakboard Hub web application itself. Keep this option enabled for an initial installation.
* **Install Microsoft SQL Server Express** (2) — Enable this option if you do not have an SQL Server available yet. The installer then sets up a local SQL Server Express instance. If you want to reuse an existing SQL Server, leave the option unchecked.
* **Peakboard Hub Public API** (3) — Optional REST interface that lets you talk to the Peakboard Hub from other systems.

Click [Next] to continue.

![Component selection in the Peakboard Hub Installer](/assets/images/hub/installer/hub-installer-02-components.png)

#### Step 3 — User Authentication

Decide how your users should sign in to the Peakboard Hub:

* **Local Users** (1) — Local user management directly inside the Peakboard Hub. Use this option if you do not want to rely on Active Directory.
* **AD Users** (2) — Sign-in via your Windows Domain Controller (Active Directory). At the login screen, enter the *Windows user name without the domain* together with the *Windows password*. The first user that signs in automatically becomes the administrator of the Peakboard Hub on premise.

Pick the option that fits your environment and click [Next].

![User authentication choice](/assets/images/hub/installer/hub-installer-03-auth.png)

#### Step 4 — Installation folder

On the **Hub installation folder** page you choose where Peakboard Hub is installed. The default is `C:\inetpub\PeakboardHub` (1) — that folder is later added as a site in IIS. Use [Browse...] (2) to pick a different path if you need to.

Confirm your choice with [Next].

![Installation folder selection](/assets/images/hub/installer/hub-installer-04-folder.png)

#### Step 5 — Database

On the **Database** page you connect the Peakboard Hub to its SQL database.

* **Create a new database and user** (1) — The installer creates a fresh database together with a new SQL login for you.
* **Use an existing database and user** (2) — Pick this option to reuse a database that already exists (for example during an update or a migration).
* **SQL Server instance** (3) — Address and instance name of your SQL Server. With the included SQL Server Express the default is `localhost\SQLEXPRESS`.
* **Database name** (4) — Name of the database. The default is `PeakboardHub`.

![Database configuration — connection and database name](/assets/images/hub/installer/hub-installer-05-database-top.png)

In the lower half of the dialog you supply the credentials for the SQL login:

* **Username** (1) — Login name of the SQL user (default `pbhub`).
* **Password** (2) and **Confirm password** (3) — Enter a strong password and repeat it for confirmation. The value is masked while you type.

Click [Next] to start the actual installation.

![Database configuration — username and password](/assets/images/hub/installer/hub-installer-06-database-bottom.png)

#### Step 6 — Installation

The wizard now shows the progress and performs the following tasks one after the other: installing the prerequisites, setting up the SQL Server, creating the database, copying the files into the installation folder and registering the IIS site. The currently running task is shown above the progress bar.

![Installation progress](/assets/images/hub/installer/hub-installer-07-installing.png)

Once the wizard finishes, you can close it and open the Peakboard Hub on premise in your browser. The new site is also visible in the IIS Manager under your sites, where you can configure it like any other IIS site — for example by binding certificates from your company for secure communication.

After the first user signs in to the Peakboard Hub on premise, this user automatically becomes an administrator. You can promote additional users to administrators later from the user management of the Peakboard Hub on premise.

<div class="box-warning" markdown="1"> **Please note**:
* If you want to update Peakboard Boxes via Peakboard Hub on premise, the IIS process must have permission to write into the installation folder (for example `C:\inetpub\PeakboardHub`).
* If you want to use MQTT for communication between Peakboard Boxes, open the MQTT port (default 1883).
</div>

Here you can see where to set the permissions:

![Peakboard Hub permissions](/assets/images/hub/hub_permissions.png)

### If the installation fails

If something goes wrong during the install, the wizard switches to the **Installation failed** step and shows the error message together with the path to the setup log file. The log files live under `C:\ProgramData\Peakboard\LocalState\Logs\Setup\`. Common causes are an unreachable SQL Server instance, missing write permissions on the installation folder or a missing ASP.NET Core Hosting Bundle. Fix the cause and run the installer again.

![Failed installation](/assets/images/hub/installer/hub-installer-08-failed.png)

### Updates

To perform an update, download the latest [Peakboard Hub on premise installation file](https://downloads.peakboard.com/download/PeakboardHub/master/PeakboardHubSetup.exe) and run the installer on the same server as your existing installation. On the **Choose components** step the installer automatically de-selects components that are already installed, so you typically keep only the **Peakboard Hub (web application)** check box enabled. You step through the wizard like in a fresh install; your existing database is preserved.
