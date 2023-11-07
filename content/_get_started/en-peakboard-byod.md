---
layout: article
title: Peakboard Bring-Your-Own-Device (BYOD) - Introduction
menu_title: Peakboard BYOD
description: Peakboard Bring-Your-Own-Device (BYOD) - Introduction
lang: en
weight: 250
ref: start-250
redirect_from:
---

Peakboard Bring-Your-Own-Device (BYOD)
In this article, you will learn how to use your own device as a standalone runtime instance instead of a Peakboard Box.

## Preparation and minimum requirements

[First, download the setup]( https://peakboard.com/download/Peakboard/dev_master/PeakboardRuntimeSetupUI.exe) and transfer it to the device you want to use for Peakboard BYOD.

The minimum hardware requirements depend heavily on your use case. The following specifications are only the minimum system requirements. For a smooth user experience, you should at least double the values.
If you are unsure [contact Peakboard Support](mailto:support@peakboard.com) for recommendations for your specific project.

### Minimum hardware requirements

* 1 GHz CPU with 2 cores
* 4 GB RAM
* 64 GB disk space

### Minimum operating system requirements

* Windows 10 (from version 1607), any edition, x64 (x86/ARM is not supported)
* Windows 11, any edition, x64 (x86/ARM is not supported)

[ASP.NET Core 3.1 Runtime (v3.1.32) - Windows Hosting Bundle]( https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/runtime-aspnetcore-3.1.32-windows-hosting-bundle-installer) must be installed on the operating system.

## Peakboard BYOD setup

The setup automatically guides you through the installation process. It offers the option to start the runtime automatically on startup (1). This is usually the desired behavior.

![Setup options](/assets/images/get_started/en_peakboard-byod-01.png)

You also have the option of entering the license key (1) during the installation. If you don't have a license key at the time of installation, you can skip this step and activate the license later.

<div class="box-warning" markdown="1">
**Note**

Copy the hardware key (2) at this point if you want to apply for a license later.
</div>

![Enter license key](/assets/images/get_started/en_peakboard-byod-02.png)

The runtime instance still works properly, with the exception of a license notice on the screen. To skip this step, click on [Next]. A message about the license will appear, which you can skip by clicking [Next] again.

The setup contains the regular desktop runtime application as well as the management service and the web server service.

## Add and license the Peakboard BYOD instance in the Peakboard Designer

Make sure that the runtime instance is running properly.
Now you can [add the instance like a Peakboard Boxes to the Peakboard Designer](/administration/en-adding.html). Select your BYOD instance from the list (1) and use the following credentials.

### Default credentials

* **Username (2):** PeakboardAdmin
* **Password (3):** InitP@ss

![Add BYOD](/assets/images/get_started/en_peakboard-byod-03.png)

The Runtime instance is now displayed in the list of Peakboard Boxes (1).
If the instance is not yet licensed at this point, the input field for entering the license data appears.
To request a license from the Peakboard sales team, [please send the previously copied hardware key by e-mail](mailto:support@peakboard.com). You will then receive a Peakboard Box ID (2) and a corresponding license key (3). The license key is a cryptic key (approx. 20-30 characters long), and the Peakboard Box ID has the format [PBRXXXXX], where XXXX is a random number.

![BYOD license](/assets/images/get_started/en_peakboard-byod-04.png)

If you only want to use the instance for test purposes, you can skip this step and leave the instance unlicensed. An unlicensed Peakboard BYOD instance works without any restrictions. Only a banner will appear indicating the missing license.

![License warning](/assets/images/get_started/en_peakboard-byod-05.png)

## Automatic logon

In many applications, the Runtime instance should be started automatically after the device is switched on. The first step is to automatically perform a Windows logon after booting. This is done via a registry key.
If you select the option during the installation, the setup will already take care of these steps for you.

Ideally, there is a local Windows account on the computer that is used for automatic logon. You can run this powershell script to set the registry key for automatic logon. To do this, enter the user name and password.

```powershell
$Username = Read-Host 'Enter username for auto-logon (f.e. domain\peakboard)'
$Pass = Read-Host "Enter password for $Username"
$RegistryPath = 'HKLM:\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Winlogon'
Set-ItemProperty $RegistryPath 'AutoAdminLogon' -Value "1" -type String
Set-ItemProperty $RegistryPath 'DefaultUsername' -Value "$Username" -type String
Set-ItemProperty $RegistryPath 'DefaultPassword' -Value "$Pass" -type String
```

To start the Runtime automatically after automatic login, create a shortcut for `Peakboard.Runtime.Wpf.exe` in the user directory of `%appdata%\Microsoft\Windows\Start Menu\Programs\Startup`, for example `C:\Users\username\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup`.

## More tips and tricks

The steps described above are the most important steps to get Peakboard BYOD up and running on a device. If you want to make the user experience even smoother and hide Windows from the end users, here are some steps to achieve this:

* Use a solid color, black desktop background
* Remove all shortcuts on the desktop
* Hide the taskbar
* Use a monochrome, black profile picture for the account under which the Runtime instance is running
* Adapt the Windows energy settings to your use case. This usually means deactivating the screen saver, automatic sleep mode, etc.
