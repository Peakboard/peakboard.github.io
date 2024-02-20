---
layout: article
title: Reinstall runtime with PowerShell
menu_title: Reinstall runtime with PowerShell
description: Reinstall runtime with PowerShell
lang: en
weight: 850
ref: admin-850
---

If the update of the Peakboard Box does not work correctly the usual way, a new manual installation of the Peakboard Runtime on the Peakboard Box will help.
To do this, use a PowerShell script and the latest version of the software for the Peakboard Box [PeakboardRuntime.pbux]. [You can download this in the version history](/misc/en-version-history.html). This way you can reinstall the software with Windows on-board resources.

<div class="box-warning" markdown="1">**Warning**

This bypasses the verification process of the Peakboard software. This could be used to install malicious software on the Peakboard Box and should therefore be used with caution! Make sure that the selected .pbux file contains trusted binaries.
</div>

## Perform the installation via PowerShell script

After downloading the latest version of the software, start PowerShell first.

Navigate to the folder containing the script:
`<Peakboard-Installationsordner>\Designer\RemoteInstall`

Execute the script:
`.\RemoteInstallScript.ps1`

Include the following parameters. If you do not specify anything, the default will be used.

* **installFile** - The path where the .pbux file you want to install on the Peakboard Box is located. Default is `~\Downloads\PeakboardRuntime.pbux`
* **tempFolder** - The folder into which the .pbux file is unpacked before the required files are loaded onto the Peakboard Box. The default is `C:\temp\ReakboardRuntime`

The script now asks for all required information. Enter this when you are asked for it.

* **computerName** - The IP address of the Peakboard Box
* **user** - The username of the Peakboard Box administrator user
* **pw** - The password of the Peakboard Box administrator user

Alternatively, you can can also specify the parameters  directly when executing the script.

The script now copies all the required files to the Peakboard Box and installs the software.
