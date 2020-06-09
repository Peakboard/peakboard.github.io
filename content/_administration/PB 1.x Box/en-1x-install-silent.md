---
layout: article
title: Silent Installation
menu_title: Silent Installation
description: Silent Installation
lang: en
weight: 150
ref: pb1-admin-150
redirect_from:

---

The installation of the Peakboard Designer and the Peakboard Bridge can be done via the command line.
Depending on how the system is configured, the User Account Control window may appear to confirm that the vendor of the software is trusted.

![Windows User Account Control Window](/assets/images/admin/install-silent/usercontrol.png)

The following possibilities arise for a Silent Installation:

# Silent Installation of the Peakboard Designer
Only the Peakboard Designer and the Peakboard Runtime necessary for the preview functionality are installed. 
The PeakBoardDesignerSetup.exe can be called from any directory. 
The following command line illustrates how the installation works in silent mode from the directory C:\Temp:

````markdown
    ```
       "C:\Temp\PeakBoardDesignerSetup.exe" /S
    ```
````

# Silent installation of the Peakboard Designer together with the Peakboard Bridge
This is a complete installation where the Peakboard Designer, the Peakboard Runtime and the Peakboard Bridge are installed in Silent Mode.
The installation is similar to the previous one and is only extended by the /b addition.

````markdown
    ```
       "C:\Temp\PeakBoardDesignerSetup.exe" /b /S
    ```
````

# Silent installation of the Peakboard Bridge
If only the Peakboard Bridge is to be installed, it can be installed without the Peakboard Designer and without Peakboard Runtime using the following command.
The installation is analogous to the previous ones and is only extended by the additional az /bb.

`````markdown
    ```
       "C:\Temp\PeakBoardDesignerSetup.exe" /bb /S
    ```
````
	
# Silent Uninstall
The uninstallation of the software can also be carried out in Silent Mode in the same way as the installation.
For this you only have to adapt the command to the path of the uninst.exe.
By default the Peakboard Designer is installed under "C:\Program Files\Peakboard". 
Here you can also find the uninst.exe.

`````markdown
    ```
       "C:\Program Files\Peakboard\uninst.exe" /S
    ```
````


## Important
>
> When uninstalling the Designer, the bridge is always removed as well!
