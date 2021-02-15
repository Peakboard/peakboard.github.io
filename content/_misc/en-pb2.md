---
layout: article
title: Peakboard 2 
menu_title: Peakboard 2
description: Peakboard 2
lang: en
weight: 10
ref: misc-10
---

![gif0](/assets/images/misc/pb2/social-media-posting-peakboard2-facebook.gif)


## What does Peakboard 2 mean?
With Peakboard 2, we rely on a different operating system as well as a different architecture of the Peakboard Runtime, as you can see in the table.

{% include styled_table.html %}
|                                | Peakboard 2               | Peakboard           |
|--------------------------------|---------------------------|---------------------|
| Operating System               | Windows 10 IoT Enterprise | Windows 10 IoT Core |
| Peakboard Runtime Architecture |                       WPF |                 UWP |

### WHAT IS WINDOWS 10 IOT ENTERPRISE?
It is a full-featured Windows 10 licensed for use on IoT devices.

### What does WPF Runtime mean?
Windows Presentation Foundation [(WPF)](https://docs.microsoft.com/de-de/visualstudio/designers/getting-started-with-wpf?view=vs-2019) is a framework for developing desktop client applications.
The runtime is the software that runs on the Peakboard Box and ensures that data is loaded in real time and the visualization is displayed exactly as you have created it for yourself in the Peakboard Designer.

### WHAT ARE THE BENEFITS OF THE UPDATE?
The Windows 10 IoT Enterprise, in combination with the WPF Runtime, enables direct communication between almost all popular databases. 
In addition, Peakboard 2 makes it possible to read and process files such as Excel, PDF, or image files directly from the network drive.
### What has changed?
As the operating system has changed from Windows 10 IoT Core to Windows 10 IoT Enterprise, the device portal has been replaced by the management portal. 
The Peakboard Bridge, which was an essential part of Peakboard, is no longer needed to support communication as communication is direct.

### HOW DOES THE SWITCH TO PEAKBOARD 2 TAKE PLACE?
The switch is free for all customers with a valid [Service Level Agreement (SLA) identification number](https://peakboard.com/wp-content/uploads/2020/03/peakboard-service-level-agreement-en-v3.pdf).
Anyone who purchases a Peakboard Pro Box or Peakboard Enterprise Box after 01.05.2020 will automatically receive it including the update. 
If you do not purchase a new Peakboard Box, you can upgrade to Peakboard 2 asfollows:

* [Upgrade of the existing hardware using a Peakboard 2 Upgrade USB stick](/misc/en-pb2USB.html)
* Replace existing hardware with Peakboard Boxes running Peakboard 2

<div class="box-warning" markdown="1">
**Note**
* Be sure to save your visualization on your PC before the update so that it can be reloaded after the update
* IP addresses may have to be reset after the update
* Perform your proxy settings again after the update
* Save your [name and license](/administration/PB%201.x%20Box/en-1x-change-license.html) in advance in a separate text document when [updating via USB-Stick](/misc/en-pb2USB.html)
</div>