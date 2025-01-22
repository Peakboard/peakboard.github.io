---
layout: article
title: Silent Installation
menu_title: Silent Installation
description: Silent Installation
lang: en
weight: 150
ref: admin-150
redirect_from:

---

The installation of the Peakboard Designer can be done via the command line. The command line must be executed as an administrator.
If the following window appears, confirm that you trust the software provider by clicking [Yes].

![Windows User Account Control Window](/assets/images/admin/install-silent/usercontrol.png)

### Silent Installation of the Peakboard Designer

Here, only the Peakboard Designer and the Peakboard Runtime necessary for the preview function are installed.
The *PeakboardSetup.exe* can be called from any directory.
The following command line entry illustrates how the installation works in silent mode from the directory [C:\Temp]:

````markdown
    ```
       "C:\Temp\PeakboardSetup.exe" -Silent True -InstallPath <installation path>
    ```
````

### Silent Uninstallation

Similar to the installation, the uninstallation of the software can also be done in silent mode.
To do this, adapt the command to the path of the *uninst.exe*.
By default, the Peakboard Designer is installed under [C:\Program Files\Peakboard], where you will also find the *uninst.exe*.

`````markdown
    ```
       "C:\Program Files\Peakboard\uninst.exe" -Silent True
    ```
````

### Silent Deinstallation

The BlockUnencryptedConnection parameter can be used to define that the box completely blocks the unencrypted port 40404:

````markdown
    ```
       "C:\Temp\PeakboardSetup.exe" -Silent True -InstallPath <installation path> -BlockUnencryptedConnection True
    ```
````
