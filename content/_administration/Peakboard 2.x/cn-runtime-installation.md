---
layout: article
title: Peakboard Runtime的安装
menu_title: Peakboard Runtime的安装
description: Peakboard Runtime的安装
lang: cn
weight: 1100
ref: admin-1100
redirect_from:
  - /administration/11-cn-runtime-installation.html
---

安装Peakboard Designer时，通常也会安装Peakboard Runtime。
这是Designer预览功能所必需的。

在某些IT基础架构中，此安装不会自动运行，因此必须手动部署。

首先，预览软件需要至少版本10586的Windows 10（1703 Creators Update）。

然后必须打开Peakboard安装文件夹。通常是C:/Program Files/Peakboard/Designer。
在此必须打开子文件夹temporaryInstallFiles/RuntimeDependencies。

现在必须通过双击来安装CoreRuntime和VCLibs这两个文件。
接下来，具有最新版本号的Peakboard Runtime可以安装在temporaryInstallFiles父文件夹中。

如果双击安装不起作用，则必须使用PowerShell。

要执行此操作，必须首先以管理员身份打开PowerShell：

![Install Runtime](/assets/images/admin/install-runtime/install-runtime.png)

现在，必须在PowerShell中执行以下命令（必须相应地调整路径和文件名） ：

```
Add-AppxPackage -Path "C:\Program Files\Peakboard\Designer\Runtime\Peakboard.Runtime.appx"
```

对于手动安装，请注意，每次更新Peakboard Designer时，都必须最后完成安装Runtime。