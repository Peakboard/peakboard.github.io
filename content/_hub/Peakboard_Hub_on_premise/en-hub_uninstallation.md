---
layout: article
product: hub
title: Uninstall
menu_title: Uninstall
description: Peakboard Hub on premise - step-by-step walkthrough of the uninstaller
lang: en
weight: 105
ref: hub-105
redirect_from:
---


Peakboard Hub on premise ships its own uninstaller. You can launch it from the Windows **Apps & Features** list, or run it directly from the installation folder at `C:\Program Files\Peakboard\PeakboardHub\Uninstall\uninstall.exe` (for an installation that was never moved out of IIS: `C:\inetpub\PeakboardHub\Uninstall\uninstall.exe`). Like the setup, the uninstaller needs administrator rights.

### Step 1 — Confirmation

When the uninstaller opens it asks one more time whether you really want to remove the Peakboard Hub on premise. Click [Start] to open the component selection.

![Uninstall confirmation](/assets/images/hub/installer/hub-uninstaller-01-welcome.png)

### Step 2 — Choose components

On the **Uninstall Peakboard Hub** step you decide what should be removed. Which entries appear depends on what the setup installed on this server.

* **Peakboard Hub** (1) — Removes the Hub program files, its Windows service, its firewall rules and the registry entry of this Hub. This component is always removed. The database is untouched.
* **Hub data (database, files, flows)** (2) — Additionally drops the Peakboard Hub database and deletes uploaded files and the Hub Flows you created. Only enable this option if you really want to discard the data set completely. The database is only dropped if no other Peakboard Hub or Public API installation uses it.
* **Database user** (3) — Removes the SQL Server login the Peakboard Hub connects with. It is preselected only if the setup created the login. If the login already existed before the installation, removing it takes access away from everything else that uses it.
* **Peakboard Hub API** — Appears if the Public API is installed together with the Hub. Removes its Windows service, files, firewall rule and registry entry.
* **SQL Server Express** and **.NET Hosting Bundle** (4) — Appear only if the setup installed them. Leave them unchecked if other applications on the same server still need them.

Click [Uninstall] (5) to continue.

![Component selection in the uninstaller](/assets/images/hub/installer/hub-uninstaller-02-components.png)

Before anything is removed, the uninstaller names the program folders that will be permanently deleted and asks you to confirm. It then asks **Also delete the Hub's data folder?** — the data folder (for example `C:\ProgramData\Peakboard\PeakboardHub`) holds the uploaded files, Hub Flows and update packages of this installation. [No] is the default and keeps the folder for a later reinstall. The folder is only deleted if no other Peakboard Hub uses the same database.

### Step 3 — Done

The operation typically finishes within a few seconds. The uninstaller confirms the result and you close it with [Finish].

![Uninstall finished](/assets/images/hub/installer/hub-uninstaller-03-finished.png)

If you deliberately kept the database, the data folder or the .NET Hosting Bundle, they are still available. You can re-[install](/hub/Peakboard_Hub_on_premise/en-hub_installation.html) the Peakboard Hub on premise from the setup file at any time and choose **Use an existing database** and **Use an existing user** on the database pages to reuse your previous data set.

The uninstaller can also run unattended, see [Silent installation](/hub/Peakboard_Hub_on_premise/en-hub_silent-installation.html#silent-uninstall).
