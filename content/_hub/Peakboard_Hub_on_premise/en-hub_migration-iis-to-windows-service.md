---
layout: article
product: hub
title: Migration from IIS to a Windows service
menu_title: Migration from IIS
description: Peakboard Hub on premise - update an IIS-hosted installation so that the Hub runs as a Windows service
lang: en
weight: 101
ref: hub-101
redirect_from:
---


Earlier versions of the Peakboard Hub on premise ran as a site in IIS (Internet Information Services). The current setup installs the Peakboard Hub as its own **Windows service** instead. When you update an installation that still runs in IIS, the setup migrates it: the IIS site is replaced by the Windows service, and your database, settings and data are kept.

This article explains what changes, how to prepare and how to run the migration with the setup wizard or from the command line.

### What changes

{% include styled_table.html %}
{: .w-full }
| | Before (IIS) | After (Windows service) |
|---|---|---|
| Hosting | IIS site and application pool `PeakboardHub` | Windows service `PeakboardHub` (display name **Peakboard Hub**), runs as Local System, starts automatically (delayed), restarts after a failure |
| Program folder | `C:\inetpub\PeakboardHub` | `C:\Program Files\Peakboard\PeakboardHub` (recommended — you can also stay in the old folder) |
| Data folder | Inside the program folder | `C:\ProgramData\Peakboard\PeakboardHub` |
| Ports and HTTPS certificate | Bindings of the IIS site | Endpoints in the `appsettings.json` of the program folder |
| Changing ports or the certificate | IIS Manager | Peakboard Hub Configurator (Windows Start menu) |
| Public API | IIS site `PeakboardHubApi` | Windows service `PeakboardHubApi` |

IIS itself is no longer needed. The setup does not uninstall the IIS Windows feature — if no other application on the server uses it, you can remove it afterwards.

### Before you start

* **Plan a maintenance window.** The Peakboard Hub is not available while the setup runs.
* **Note the bindings of the IIS site.** Open the IIS Manager, select the site of the Peakboard Hub and note its ports and HTTPS certificates (**Bindings**). You decide during the migration whether the Windows service takes them over.
* **Check your HTTPS certificate.** The Windows service can only use certificates from the **Personal** store of the local computer. A binding whose certificate is stored in the IIS **Central Certificate Store**, or whose certificate is no longer in the store, cannot be taken over — the Peakboard Hub is then reachable via HTTP only until you add a certificate with the Peakboard Hub Configurator.
* **Check for shared ports.** If the Peakboard Hub site shares a port with another IIS site (for example port 80 or 443 next to the **Default Web Site**), that port stays with IIS. The Windows service cannot use it.
* **Back up your database.** The setup offers a database backup before the update (enabled by default). An own backup does no harm either.
* Run the setup **with administrator rights**.

### Migration with the setup wizard

Download the latest [Peakboard Hub on premise installation file](https://downloads.peakboard.com/download/PeakboardHub/master/PeakboardHubSetup.exe) and run it on the server of your existing installation. On the first page select **Peakboard Hub** (and **Peakboard Hub Public API** if it is installed on this server), then click [Next].

#### Step 1 — Select the existing installation

On the **Installation Folders** page select the folder of your existing installation, by default `C:\inetpub\PeakboardHub`. If the folder is the old default folder, a notice tells you that this is the installation's IIS-era location and that clicking [Next] offers to move it.

![The IIS-era installation folder](/assets/images/hub/installer/hub-migration-01-folder-notice.png)

<div class="box-warning" markdown="1"> **Important**: Do not enter a new, empty folder here to "move" the installation. A different folder creates a second, independent Peakboard Hub next to the existing one, and the existing installation stays as it is. Select the existing folder and let the setup move it, as described below.
</div>

#### Step 2 — Move to the recommended location

When you click [Next], the setup asks **Move to the recommended location?**:

* [Yes] — The programs move to `C:\Program Files\Peakboard\PeakboardHub` and the data (uploaded files, Hub Flows, box update packages, hosted Web Runtimes) to a data folder under `C:\ProgramData\Peakboard`. The folders are filled in on the page behind the dialog and can still be changed.
* [No] — The Peakboard Hub stays in `C:\inetpub\PeakboardHub`. It is still converted to a Windows service.

In both cases the installation keeps its service name, ports, certificates and database.

![Offer to move the installation](/assets/images/hub/installer/hub-migration-02-move-dialog.png)

The data folder is normally `C:\ProgramData\Peakboard\PeakboardHub`. If that folder is already used by another installation, the setup adds a number, for example `PeakboardHub_2` (the screenshot was taken on a test server with several installations).

<div class="box-tip" markdown="1"> **Note**: The move is only offered for the old default folder `C:\inetpub\PeakboardHub`. An installation in a custom folder is updated in that folder. From the command line you can move any IIS-era installation, see [Migration from the command line](#migration-from-the-command-line). The new folder must be on the same drive as `C:\ProgramData`.
</div>

If you chose [Yes], the setup then asks **Remove the old folder?**:

* [Yes] — After the move, the old folder is deleted, including any files you placed there yourself.
* [No] — The old folder is kept. You can delete it later at any time. The setup makes sure that the kept folder can no longer be mistaken for an installation.

![Question whether to remove the old folder](/assets/images/hub/installer/hub-migration-03-remove-old-folder.png)

The **Installation Folders** page now shows where the Peakboard Hub moves to (1), the new program folder (2) and the new data folder (3). Data folders that you redirected to a different location in the past are not moved. Click [Next].

![Installation folders after choosing to move](/assets/images/hub/installer/hub-migration-04-folders.png)

#### Step 3 — Components

The **Update Peakboard Hub** page names the old and the new folder:

* **Update Hub program files** (1) — Always part of a migration.
* **Create backup** (2) — Backs up the database before the new program files are copied. Leave it enabled.
* **Set up database** (3) — Leave it unchecked. The Peakboard Hub keeps its current database connection.
* **Configure Hub Windows service (ports & firewall)** (4) — Always enabled for an installation that still runs in IIS, because the IIS site is replaced by the Windows service.

Click [Next].

![Components of the update](/assets/images/hub/installer/hub-migration-05-components.png)

#### Step 4 — Backup folder

On the **Backup Peakboard Hub** page you choose where the database backup is written to. The backup file is written by the SQL Server, so the folder must be on the database server and writable by the SQL Server service account. Leave the field empty to use the default backup folder of the SQL Server instance. Click [Next].

![Backup folder for the database](/assets/images/hub/installer/hub-migration-06-backup.png)

#### Step 5 — Endpoints of the Windows service

On the **Service Configuration** page the setup shows which IIS site currently serves the folder and asks where the endpoints of the Windows service come from:

* **Add new endpoints (configure below)** (1) — Preselected. Nothing is taken from IIS automatically; the Windows service only gets the **HTTP port** and the optional HTTPS settings you enter below.

![New endpoints for the Windows service](/assets/images/hub/installer/hub-migration-07-endpoints-new.png)

* **Take endpoints from the current IIS site** (2) — Lists all bindings of the IIS site (3). Select the ones the Windows service should take over. Each binding has a link (4) that opens it in the browser, so you can check what it serves. Bindings that cannot be taken over are listed but disabled, together with the reason — for example a port that another IIS site uses, or a certificate that cannot be found in the certificate store.

![Taking over the bindings of the IIS site](/assets/images/hub/installer/hub-migration-08-endpoints-iis.png)

The first selected HTTP binding becomes the main port of the Windows service, every further selection an additional endpoint. At most 5 HTTP and 4 HTTPS endpoints can be taken over. An HTTPS binding keeps its certificate.

<div class="box-warning" markdown="1"> **Please note**: The IIS site and its application pool are deleted in both cases. If you choose **Add new endpoints** with a port other than the one the IIS site used, the Peakboard Hub is afterwards only reachable on the new port — update every client that connects to it, for example Peakboard Boxes.
</div>

#### Step 6 — Run the update

The button of the last page is called [Update]. Click it to start the migration. The setup stops the IIS site, copies the new program files, moves the folders if you chose to, creates and starts the Windows service, takes over the selected endpoints, opens the ports in the Windows Firewall and finally deletes the IIS site and its application pool.

When the migration has finished, the **Installation finished** page lists what was installed and — after a move — what moved where, together with a reminder of what you have to update yourself.

### What the setup carries over

* The database connection, the authentication mode and all other settings in `appsettings.json`.
* The service identity, the ports and the HTTPS certificates you selected.
* All data folders. The setup also updates the corresponding settings in the database.
* One entry in Windows **Apps & Features**.

### After the migration

The setup cannot reach anything outside the installation. After a move, update everything that refers to the old folder `C:\inetpub\PeakboardHub`:

* Backup jobs and their target and exclusion paths
* Antivirus or EDR exclusions
* Network shares and custom folder permissions
* Own scripts, scheduled tasks and monitoring checks

To change the ports or the HTTPS certificate later, use the **Peakboard Hub Configurator** from the Windows Start menu, see [Installation](/hub/Peakboard_Hub_on_premise/en-hub_installation.html#changing-the-configuration-later).

<div class="box-tip" markdown="1"> **Note**: A browser that opened the Peakboard Hub on a port the Windows service no longer uses can still show the sign-in page from its cache, while nothing answers on that port any more (for example a "Gateway Timeout" message after signing in). Clear the site data of that address in the browser.
</div>

### Migration from the command line

The migration can also run unattended. All arguments are described in [Silent installation](/hub/Peakboard_Hub_on_premise/en-hub_silent-installation.html).

Update in place — the Peakboard Hub stays in its folder and becomes a Windows service:

```bat
PeakboardHubSetup.exe -Silent True -InstallPath "C:\inetpub\PeakboardHub"
```

Move the installation to the recommended folders and delete the old folders afterwards:

```bat
PeakboardHubSetup.exe -Silent True ^
  -InstallPath "C:\Program Files\Peakboard\PeakboardHub" ^
  -ApiInstallPath "C:\Program Files\Peakboard\PeakboardHubApi" ^
  -HubMigrateFrom "C:\inetpub\PeakboardHub" ^
  -ApiMigrateFrom "C:\inetpub\PeakboardHubApi" ^
  -RemoveOldFolders True
```

<div class="box-warning" markdown="1"> **Important**: The command line and the wizard handle the IIS bindings differently. From the command line, **all** bindings of the IIS site that can be reused are taken over by default. Pass `-HubEndpointsFromIis False` (Public API: `-ApiEndpointsFromIis False`) to take nothing from IIS and only use the ports given on the command line.
</div>

### Going back to the previous version

Do **not** run an older setup to undo a migration. It does not see the migrated installation and would create a second IIS site on the same ports. To go back:

1. Uninstall the migrated Peakboard Hub with its [uninstaller](/hub/Peakboard_Hub_on_premise/en-hub_uninstallation.html) (keep the data).
2. Install the previous version.
3. Restore the database backup from before the update.

### Troubleshooting

{% include styled_table.html %}
{: .w-full }
| Problem | Cause and solution |
|---|---|
| The Peakboard Hub is only reachable via HTTP after the migration | The certificate of the HTTPS binding was in the IIS Central Certificate Store or no longer in the certificate store. The setup log names the binding. Add the certificate to the **Personal** store of the local computer and select it in the Peakboard Hub Configurator. |
| A port of the IIS site was not taken over | Another IIS site uses the same port. The setup log names that site. Use a different port for the Peakboard Hub. |
| The setup says the program files are incomplete and the service is disabled | The update failed while copying files. Run the same setup again to complete it. |

The setup log files are stored under `C:\ProgramData\Peakboard\LocalState\Logs\Setup\`.
