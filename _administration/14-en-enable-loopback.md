---
layout: article
title: Enable loopback for uwp app
menu_title: Enable loopback
description: Enable loopback for uwp app
lang: en
ref: admin-14
---

Per default for uwp apps it is not allowed to access local network resources through local loopback.

This can for example cause problems in combination with the Peakboard Bridge, if the bridge is running on the same computer as the Peakboard Designer.
In this scenario the preview in the Designer might not be able to show content loaded through the bridge.

The so called "lookpback" can be allowed for individual Apps like the Peakboard Runtime.

To accomplish this first open a PowerShell to get the __Fullpackagename__ of the Peakboard Runtime App.

`(Get-AppxPackage -Name peakboardruntimeapp).packagefullname`
![01-get-packagefullname](/assets/images/admin/loopback/01-get-packagefullname.png)
Copy the received name and use it in the following command:

`checknetisolation loopbackexempt -a -n="PeakboardRuntimeApp_1.0.31.1_x86__dr3692g8wct58"`

Please note the essential quotation marks in the command.
![02-add-loopback-exception](/assets/images/admin/loopback/02-add-loopback-exception.png)
The action will be acknowledged with OK.

A list with all loopback exceptions can be shown with the following command:

`checknetisolation loopbackexempt -s`

To redeem the entry you use this instead:

`checknetisolation loopbackexempt -d -n=<name>`