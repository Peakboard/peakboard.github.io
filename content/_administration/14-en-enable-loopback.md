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

The so called "loopback" can be allowed for individual apps like the Peakboard Runtime.

To accomplish this first open a PowerShell with administrative privileges to get the __Packagefamilyname__ of the Peakboard Runtime App.

`(Get-AppxPackage -Name peakboardruntimeapp).packagefamilyname`
![01-get-packagefamilyname](/assets/images/admin/loopback/01-get-packagefamilyname.png)
Copy the received name and use it in the following command:

`checknetisolation loopbackexempt -a -n="PeakboardRuntimeApp_dr3692g8wct58"`

Please note the essential quotation marks in the command.
![02-add-loopback-exception](/assets/images/admin/loopback/02-add-loopback-exception.png)
The action will be acknowledged with OK.

A list with all loopback exceptions can be shown with the following command:

`checknetisolation loopbackexempt -s`

Here you can check if the exception was properly added to the list:
![03-loopback-success.png](/assets/images/admin/loopback/03-loopback-success.png)

To redeem the entry you use this instead:

`checknetisolation loopbackexempt -d -n=<name>`