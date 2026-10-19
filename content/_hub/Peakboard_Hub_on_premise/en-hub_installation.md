---
layout: article
product: hub
title: Installation
menu_title: Installation
description: Peakboard Hub on premise - step-by-step walkthrough of the setup that installs the Hub as a Windows service
lang: en
weight: 100
ref: hub-100
redirect_from:
  - /hub/en-hub_installation.html
---


Peakboard Hub on premise is hosted locally on your server and requires Windows Server from at least version 2016. The Peakboard Hub runs as its own **Windows service** — IIS is not needed. You do not need to install the ASP.NET Core Runtime or the .NET Hosting Bundle beforehand either: the setup takes care of every prerequisite that the Peakboard Hub on premise needs to run.
There is no external communication at any time, only between the user, the Peakboard Boxes and Peakboard Hub on premise.
Authentication can be handled either via your Windows Domain Controller (Active Directory) or via local users.
The Peakboard Hub on premise stores its data in an included SQL Server Express. An already existing SQL Server from version 2017 can also be used instead.

<div class="box-tip" markdown="1"> **Note**: Earlier versions of the Peakboard Hub on premise ran as a site in IIS. If you are updating such an installation, read [Migration from IIS to a Windows service](/hub/Peakboard_Hub_on_premise/en-hub_migration-iis-to-windows-service.html) first.
</div>

### System requirements

The server running Peakboard Hub on premise must meet at least the following requirements:

{% include styled_table.html %}
{: .w-full }
| Processor | 4 cores |
| Memory | 32 GB RAM |
| Storage | 128 GB SSD |
| Operating system | Windows Server 2016 or higher |

### How the Peakboard Hub runs on your server

{% include styled_table.html %}
{: .w-full }
| | Default |
|---|---|
| Program folder | `C:\Program Files\Peakboard\PeakboardHub` |
| Data folder (uploaded files, Hub Flows, box update packages, hosted Web Runtimes) | `C:\ProgramData\Peakboard\PeakboardHub` |
| Windows service | `PeakboardHub` (display name **Peakboard Hub**), runs as Local System, starts automatically (delayed) and restarts after a failure |
| HTTP port | `20588` |
| HTTPS port (optional) | `20589` |
| Firewall | The setup opens the configured ports as inbound rules named `Peakboard Hub (TCP <port>)` |

After the installation, you change the ports and the optional HTTPS certificate with the **Peakboard Hub Configurator** (see the section **Changing the configuration later** below).

### Installation

For the initial installation on a Windows server, you only need the installation file of the Peakboard Hub on premise, which is provided [here](https://downloads.peakboard.com/download/PeakboardHub/master/PeakboardHubSetup.exe). Run the file with administrator rights — the setup guides you through the installation. The steps on the left side of the window show where you are.

#### Step 1 — Welcome

When you start the setup, the welcome screen appears together with the current setup version. Click [Install Peakboard Hub] to open the wizard.

![Peakboard Hub Setup welcome screen](/assets/images/hub/installer/hub-installer-01-welcome.png)

#### Step 2 — Choose the products

On the **Choose Components** page you decide which products you want to set up:

* **Peakboard Hub** (1) — The Peakboard Hub web application itself. Keep this option enabled for an initial installation.
* **Peakboard Hub Public API** (2) — Optional REST interface that lets you talk to the Peakboard Hub from other systems. It is installed into its own folder and runs as its own Windows service. More about it in the [Peakboard Hub API](/hub/en-hub_api.html) article.

Click [Next] to continue.

![Product selection in the Peakboard Hub Setup](/assets/images/hub/installer/hub-installer-02-products.png)

#### Step 3 — Installation folder

On the **Installation Folders** page you choose where each selected product is installed. The default for the Peakboard Hub is `C:\Program Files\Peakboard\PeakboardHub`. Use [Browse...] to pick a different folder.

The folder also decides what the setup does: an empty folder gets a fresh installation, a folder that already contains a Peakboard Hub is updated (see [Updates](#updates)).

Confirm your choice with [Next].

![Installation folder selection](/assets/images/hub/installer/hub-installer-03-install-path.png)

#### Step 4 — Components of the Peakboard Hub

The **Install Peakboard Hub** page names the folder the new Peakboard Hub is installed into and lists its components. For a fresh installation the first three are always part of it:

* **Install Hub program files** (1) — Copies the Peakboard Hub into the installation folder.
* **Set up database** (2) — You choose on the following pages whether to create a new database or use an existing one.
* **Configure Hub Windows service (ports & firewall)** (3) — Creates the Windows service of the Peakboard Hub, configures its port (and the optional HTTPS certificate) and opens the port in the Windows Firewall.
* **Install Microsoft SQL Server Express** (4) — Enable this option if you do not have an SQL Server available yet. The setup then installs a local SQL Server Express instance. If you want to use an existing SQL Server, leave the option unchecked.

Hover over a component to see a short explanation. Click [Next] to continue.

![Components of the Peakboard Hub](/assets/images/hub/installer/hub-installer-04-components.png)

#### Step 5 — Service configuration

On the **Service Configuration** page you define how the Peakboard Hub is reachable:

* **Windows service name** (1) — Name of the Windows service. Keep `PeakboardHub` unless you run several Peakboard Hubs on the same server.
* **HTTP port** (2) — The port the Peakboard Hub listens on. The default is `20588`.
* **Enable HTTPS** (3) — Additionally serves the Peakboard Hub over HTTPS.
* **HTTPS port** (4) — The default is `20589`.
* **Certificate from the Windows certificate store** (5) — Pick a certificate from the **Personal** store of the local computer. This is the recommended option, because no password has to be stored.
* **Certificate file (.pfx)** (6) — Alternatively, select a `.pfx` file that contains the private key and enter its password.

If you also selected the Public API in step 2, the same settings appear for the API (default HTTP port `20688`, HTTPS port `20689`). Click [Next] to continue.

![Service configuration with HTTPS enabled](/assets/images/hub/installer/hub-installer-05-service.png)

<div class="box-tip" markdown="1"> **Note**: If you want to use Windows single sign-on over HTTPS, nothing else has to be configured — the setup always sets the HTTPS endpoint to HTTP/1.1, which Windows authentication requires.
</div>

#### Step 6 — User authentication

On the **User Authentication** page you decide how users sign in to the Peakboard Hub:

* **Local Users** (1) — Users sign in with the local Windows accounts of the server.
* **AD Users** (2) — Users sign in with their Active Directory (domain) accounts.

**AD Users** is preselected. If the server is not a member of a domain, switch to **Local Users**. Click [Next] to continue.

![User authentication](/assets/images/hub/installer/hub-installer-06-authentication.png)

#### Step 7 — Database

On the **Create Database** page you connect the Peakboard Hub to its SQL database.

* **Create a new database** (1) — The setup creates a fresh database. Choose this option for an initial installation.
* **Use an existing database** (2) — Uses a database that you created beforehand, for example through your database administrator. In this case, too, the setup sets the database up from scratch and creates all Peakboard Hub tables in it. The database must therefore be **empty**. If it already contains other objects or data, the setup asks whether it may clear the database — this permanently deletes its entire content. Without your confirmation, the setup does not continue. An existing Peakboard Hub database is not cleared but reused.
* **SQL Server instance** (3) — Address and instance name of your SQL Server. With the included SQL Server Express the default is `localhost\SQLEXPRESS`.
* **Database name** (4) — The default is `PeakboardHub`.
* **Current Windows user (local server)** (5) — The setup signs in to the SQL Server with your Windows account. Use this option when the SQL Server runs on the same server.
* **SQL Server login (remote / external server)** (6) — The setup signs in with an SQL Server login that has administrator rights (sysadmin). Use this option for a remote SQL Server. The login is only used during the setup and is not stored.

Click [Next]. The setup checks the connection before it continues.

![Database configuration](/assets/images/hub/installer/hub-installer-07-database.png)

<div class="box-tip" markdown="1"> **Note**: The [guidelines for database administrators](/hub/Peakboard_Hub_on_premise/en-hub_dba-guidelines.html) describe which changes your database administrator may make on the Peakboard Hub database on their own, for example own indexes on list tables or Instant File Initialization.
</div>

#### Step 8 — Database user

On the **Database user** page you define the SQL login that the Peakboard Hub uses to access its database.

* **Create a new user** (1) — The setup creates a new SQL login. With **Use an existing user** you can use a login that already exists instead.
* **Username** (2) — Name of the SQL login. A new login must start with a letter or an underscore and may only contain letters, digits and underscores.
* **Password** (3) and **Confirm password** (4) — A new password must be at least 8 characters long, contain at least three of the four character types (upper case, lower case, digits, symbols) and must not contain the username.

Click [Install] to start the installation.

![Creating the database user](/assets/images/hub/installer/hub-installer-08-database-user.png)

#### Step 9 — Installation

The setup now performs the selected steps one after the other: installing the missing .NET runtimes, setting up SQL Server Express if selected, creating the database and the database user, copying the files, creating the Windows service, opening the firewall ports and finally starting the service. The currently running task is shown above the progress bar.

![Installation progress](/assets/images/hub/installer/hub-installer-09-installing.png)

#### Step 10 — Done

Once every task has finished successfully, the **Installation finished** page lists what was installed and where the setup log is stored. The setup opens the Peakboard Hub in your browser. Click [Finish] to close the setup.

![Successfully finished installation](/assets/images/hub/installer/hub-installer-10-finished.png)

The Peakboard Hub on premise is now reachable in your browser — by default on port `20588`, for example `http://<your-server>:20588`.

After the first user signs in to the Peakboard Hub on premise, this user automatically becomes an administrator. You can promote additional users to administrators later from the user management of the Peakboard Hub on premise.

<div class="box-warning" markdown="1"> **Please note**: If you want to use MQTT for communication between Peakboard Boxes, open the MQTT port (default 1883).
</div>

### Changing the configuration later

The setup also installs the **Peakboard Hub Configurator**, which you find in the Windows Start menu. It changes the configuration of an existing installation without editing `appsettings.json` by hand and restarts the affected services for you:

* **Services** — Start, stop or restart the Peakboard Hub and the Public API.
* **Web endpoints** — Change the ports and the HTTPS certificate.
* **Database** — Change the database connection.
* **Authentication** — Switch between local users and Active Directory users.

Like the setup, the Peakboard Hub Configurator needs administrator rights.

### If the installation fails

If something goes wrong during the install, the setup stops the affected step and shows an error message. The setup log files live under `C:\ProgramData\Peakboard\LocalState\Logs\Setup\`. Common causes are an unreachable SQL Server instance or a port that another program already uses. Fix the cause and run the setup again.

### Updates

To perform an update, download the latest [Peakboard Hub on premise installation file](https://downloads.peakboard.com/download/PeakboardHub/master/PeakboardHubSetup.exe) and run the setup on the same server as your existing installation. On the **Installation Folders** page select the folder of your existing installation. The next page is then called **Update Peakboard Hub** and offers:

![Updating an existing Peakboard Hub](/assets/images/hub/installer/hub-installer-11-update.png)

* **Update Hub program files** (1) — Replaces the program files with the new version. Your `appsettings.json` (ports, HTTPS, database connection, authentication, own changes) is kept.
* **Create backup** (2) — Backs up the Peakboard Hub database before the new program files are copied. On the next page you choose the backup folder; leave it empty to use the default backup folder of the SQL Server instance. The backup file is written by the SQL Server, so the folder must be on the database server.
* **Set up database** (3) — Only enable this option if you want to change the database connection.
* **Configure Hub Windows service (ports & firewall)** (4) — Uncheck it to keep the current service configuration. When you update an installation that still runs in IIS, this option is always enabled — see [Migration from IIS to a Windows service](/hub/Peakboard_Hub_on_premise/en-hub_migration-iis-to-windows-service.html).

While the program files are replaced, the Windows service of the Peakboard Hub is stopped and set to **Disabled** so that nothing can start it in the middle of the update. Afterwards its original startup type is restored and the service is started again. If the update fails while the files are copied, the service stays disabled and the setup tells you to run it again — run the same setup again to complete the update.

<div class="box-tip" markdown="1"> **Note**: If the Peakboard Hub does not work correctly in the browser after an update — for example pages stay empty, buttons do nothing or the old version is still shown — the browser is probably still using files of the previous version from its cache. Reload the page without the cache: press [Ctrl + F5] (macOS: [Cmd + Shift + R]). If that does not help, delete the stored data of the Peakboard Hub address in the browser: open the site settings with the icon to the left of the address bar and delete the site data (cookies and stored data), then reload the page. Deleting the site data signs you out, so you have to sign in again afterwards.
</div>

### Uninstall

To remove the Peakboard Hub on premise from a server you use the bundled uninstaller. A step-by-step walkthrough is in the [Uninstall](/hub/Peakboard_Hub_on_premise/en-hub_uninstallation.html) article.
