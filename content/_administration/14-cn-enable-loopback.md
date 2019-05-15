---
layout: article
title: 为UWP应用启用环回
menu_title: 启用环回
description: 为UWP应用启用环回
lang: cn
weight: 1400
ref: admin-14
---

对于UWP应用，默认情况是不允许通过本地环回访问本地网络资源。

这会导致问题，例如，当Peakboard Bridge与Peakboard Designer在同一台计算机上运行。在这种情况下，Designer中的预览可能无法显示通过Bridge加载的内容。

因此所谓的“环回”可以用于像Peakboard Runtime的个人应用。

要实现此目的，首先打开具有管理权限的PowerShell，以获取Peakboard Runtime应用的Packagefamilyname。

`(Get-AppxPackage -Name peakboardruntimeapp).packagefamilyname`
![01-get-packagefamilyname](/assets/images/admin/loopback/01-get-packagefamilyname.png)

复制收到的名称，并将其用于下面的命令：

`checknetisolation loopbackexempt -a -n="PeakboardRuntimeApp_dr3692g8wct58"`

请注意命令中的引号是必不可少的。

![02-add-loopback-exception](/assets/images/admin/loopback/02-add-loopback-exception.png)

单击“确定”按钮确认操作。

可以使用下面的命令显示包含所有环回异常的列表：

`checknetisolation loopbackexempt -s`

在此，您可以检查该异常是否已正确添加到列表中：

![03-loopback-success.png](/assets/images/admin/loopback/03-loopback-success.png)

要删除条目，请使用此命令：

`checknetisolation loopbackexempt -d -n=<name>`