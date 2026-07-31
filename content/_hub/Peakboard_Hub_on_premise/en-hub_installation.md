---
layout: article
product: hub
title: Installation
menu_title: Installation
description: Peakboard Hub on premise - step-by-step walkthrough of the new setup
lang: en
weight: 100
ref: hub-100
redirect_from:
  - /hub/en-hub_installation.html
---


Peakboard Hub on premise is hosted locally on your server and requires Windows Server from at least version 2016. You do not need to install IIS, the ASP.NET Core Runtime or the matching .NET Hosting Bundle beforehand — the setup takes care of every prerequisite that the Peakboard Hub on premise needs to run.
There is no external communication at any time, only between the user, the Peakboard Boxes and Peakboard Hub on premise.
Authentication can be handled either via your Windows Domain Controller (Active Directory) or via local users.
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

For the initial installation on a Windows server, you only need the installation file of the Peakboard Hub on premise, which is provided [here](https://downloads.peakboard.com/download/PeakboardHub/master/PeakboardHubSetup.exe). Run the file with administrator rights — the setup guides you through the installation.

#### Step 1 — Welcome

When you start the setup, the welcome screen appears together with the current setup version. Click [Start] to open the wizard.

![Peakboard Hub Setup welcome screen](/assets/images/hub/installer/hub-installer-01-welcome.png)

#### Step 2 — Choose components

On the **Choose Components** page you decide which parts of Peakboard Hub will be installed. For an initial installation you can simply keep the pre-selected components.

* **Peakboard Hub** (1) — The Peakboard Hub web application itself. Keep this option enabled for an initial installation.
* **.NET Hosting Bundle** — The ASP.NET Core Runtime that IIS requires. Leave the option enabled unless the bundle is already present on the server.
* **Configure IIS Page** — Sets up the IIS site for the Peakboard Hub automatically.
* **Install Microsoft SQL Server Express** (2) — Enable this option if you do not have an SQL Server available yet. The setup then sets up a local SQL Server Express instance. If you want to reuse an existing SQL Server, leave the option unchecked.
* **Configure Database** (3) — Creates the database and the database user for the Peakboard Hub. You provide the related details in steps 4 and 5.
* **Peakboard Hub Api** (4) and **Configure API IIS Page** — Optional REST interface with its own IIS site that lets you talk to the Peakboard Hub from other systems. Unchecked by default.

Click [Next] to continue.

![Component selection in the Peakboard Hub Setup](/assets/images/hub/installer/hub-installer-02-components.png)

#### Step 3 — Installation folder

On the **Choose Install Path** page you choose where Peakboard Hub is installed. The default is `C:\inetpub\PeakboardHub` (1) — that folder is later added as a site in IIS. Use the folder button (2) to pick a different path if you need to.

Confirm your choice with [Next].

![Installation folder selection](/assets/images/hub/installer/hub-installer-03-install-path.png)

<div class="box-tip" markdown="1"> **Note**: If you kept **Install Microsoft SQL Server Express** enabled in step 2, the setup installs SQL Server Express right after this step, before it continues to the database configuration. Its progress is shown on a progress bar.
</div>

#### Step 4 — Database

On the **Generate Peakboard Hub Database** page you connect the Peakboard Hub to its SQL database.

* **Create new database** (1) — Enable this option for an initial installation so the setup creates a fresh database for you. Leave it unchecked to reuse a database that already exists (for example during an update or a migration).
* **MS SQL Server name** (2) — Address and instance name of your SQL Server. With the included SQL Server Express the default is `localhost\SQLEXPRESS`.
* **MS SQL Database name** (3) — Name of the database. The default is `PeakboardHub`.

Click [Next] to continue to the database user.

![Database configuration — SQL Server and database name](/assets/images/hub/installer/hub-installer-04-database.png)

#### Step 5 — Database user

On the **Create Database user** page you define the SQL user that the Peakboard Hub uses to access its database.

* **Create new user** (1) — The setup creates a new SQL user. With **Add existing user** you can use a user that already exists instead.
* **Username** (2) — Login name of the SQL user.
* **Password** (3) and **Confirm Password** — Enter a strong password and repeat it for confirmation. The value is masked while you type.

Click [Next] to start the actual installation.

![Creating the database user](/assets/images/hub/installer/hub-installer-05-database-user.png)

#### Step 6 — Installation

The setup now performs the selected steps one after the other: installing the prerequisites and the .NET Hosting Bundle, setting up SQL Server Express if selected, creating the database and the database user, copying the files into the installation folder and registering the IIS site. The currently running task is shown above the progress bar.

![Installation progress](/assets/images/hub/installer/hub-installer-06-installing.png)

#### Step 7 — Done

Once every task has finished successfully, the wizard switches to the **Installation finished** step and greets you with a success message. Click [Close] (1) to close the setup.

![Successfully finished installation](/assets/images/hub/installer/hub-installer-07-finished.png)

The Peakboard Hub on premise is now reachable in your browser — by default on port `20588`, for example `http://<your-server>:20588`. It also appears in the IIS Manager as its own site, where you can configure it like any other IIS site — for example by binding certificates from your company for secure communication.

After the first user signs in to the Peakboard Hub on premise, this user automatically becomes an administrator. You can promote additional users to administrators later from the user management of the Peakboard Hub on premise.

<div class="box-warning" markdown="1"> **Please note**:
* If you want to update Peakboard Boxes via Peakboard Hub on premise, the IIS process must have permission to write into the installation folder (for example `C:\inetpub\PeakboardHub`).
* If you want to use MQTT for communication between Peakboard Boxes, open the MQTT port (default 1883).
</div>

Here you can see where to set the permissions:

![Peakboard Hub permissions](/assets/images/hub/hub_permissions.png)

### If the installation fails

If something goes wrong during the install, the setup stops the affected step and shows an error message. The setup log files live under `C:\ProgramData\Peakboard\LocalState\Logs\Setup\`. Common causes are an unreachable SQL Server instance or missing write permissions on the installation folder. Fix the cause and run the setup again.

### Updates

To perform an update, download the latest [Peakboard Hub on premise installation file](https://downloads.peakboard.com/download/PeakboardHub/master/PeakboardHubSetup.exe) and run the setup on the same server as your existing installation. On the **Choose Components** page you de-select the components that are already present (for example **Install Microsoft SQL Server Express**) and keep **Peakboard Hub** checked. On the **Generate Peakboard Hub Database** page you clear **Create new database** so your existing database is preserved. You step through the rest of the wizard like in a fresh install.

### Uninstall

To remove the Peakboard Hub on premise from a server you use the bundled uninstaller. A step-by-step walkthrough is in the [Uninstall](/hub/Peakboard_Hub_on_premise/en-hub_uninstallation.html) article.
