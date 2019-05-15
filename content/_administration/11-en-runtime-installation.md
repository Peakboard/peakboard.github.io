---
layout: article
title: Installation of the Peakboard-Runtime
menu_title: Installation of the Peakboard-Runtime
description: Installation of the Peakboard-Runtime
lang: en
weight: 1100
ref: admin-11
---

When installing the Peakboard-Designer, the Peakboard-Runtime is normally installed as well.
This is required for the preview functionality of the Designer.

In some IT infrastructures this installation does not work automatically, then it must be deployed manually.

First, the preivew software requires a Windows 10 system with atleast build 15063 (1703 Creators Update).

Then the Peakboard installation folder must be opened. This is in the standard C:/Program Files/Peakboard/Designer.
Here the subfolder temporaryInstallFiles/RuntimeDependencies must be opened.

The two files CoreRuntime and VCLibs must now be installed by double-clicking.
Next, the Peakboard Runtime with the latest version number can be installed in the temporaryInstallFiles parent folder.

If the double-click installation does not work, you must use PowerShell.

To do this, you must first open PowerShell as an administrator:

![Install Runtime](/assets/images/admin/install-runtime/install-runtime.png)

Now the following command must be executed in PowerShell (where the path and file name must be adjusted accordingly):

```
Add-AppxPackage -Path "C:\Program Files\Peakboard\Designer\Runtime\Peakboard.Runtime.appx"
```

For manual installation, please note that the last step to install the runtime must be done every time the Peakboard Designer is updated.