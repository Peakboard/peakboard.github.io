---
layout: article
title: Installation of the Peakboard-Runtime
menu_title: Installation of the Peakboard-Runtime
description: Installation of the Peakboard-Runtime
lang: en
ref: admin-11
---

When installing the Peakboard-Designer, the Peakboard-Runtime is normally installed.
This is required for the preview functionality of the designer.

In some IT infrastructures this installation does not work automatically, then it has to be done manually.

First of all, at least one Windows 10 or Windows Server 2016 system is required.

Then the Peakboard installation folder must be opened. This is in the standard C:/Program Files/Peakboard/Designer.
Here the subfolder temporaryInstallFiles/RuntimeDependencies must be opened.

The two files CoreRuntime and VCLibs must now be installed by double-clicking.
Next, the Peakboard Runtime with the latest version number can be installed in the temporaryInstallFiles parent folder.

If the double-click installation does not work, you must use PowerShell.

To do this, you must first open PowerShell as an administrator:

![image_1](/assets/images/admin/install-runtime/install-runtime_01.png)

Now the following command must be executed in PowerShell (where the path and file name must be adjusted accordingly):

```
Add-AppxPackage -Path "C:\Program Files\Peakboard\Designer\temporaryInstallFiles\PeakBoard.Runtime_1.0.20.7_x86_Preview.appx"
```


For manual installation, please note that the last step to install the runtime must be done every time the Peakboard Designer is updated.