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

With the update of the Peakboard Designer to version [2.0.0.7](/misc/en-version-history.html) customers receive the [(WPF)](https://docs.microsoft.com/de-de/visualstudio/designers/getting-started-with-wpf?view=vs-2019) preview of version 2 in addition to the well-known [(UWP)](https://docs.microsoft.com/de-de/windows/uwp/get-started/universal-application-platform-guide) preview. 
This can be activated in the Designer under "Settings" and then in the "About" dialog by checking the checkbox.
This change and the associated changes to the operating system of the Peakboard Box mark Peakboard 2 Boxes.

## What are Peakboard 2 Boxes?
The technical specifications of Peakboard 2 Box are identical to those of Peakboard Box.
Externally, the two boxes do not differ.
However, Peakboard 2 Boxes are based on a different operating system and a different architecture of the Peakboard Runtime, as shown in the following table.

{% include styled_table.html %}
|                                | Peakboard 2 Box           | Peakboard Box       |
|--------------------------------|---------------------------|---------------------|
| Operating System               | Windows 10 IoT Enterprise | Windows 10 IoT Core |
| Peakboard Runtime Architecture |                       WPF |                 UWP |

### What does Windows 10 IoT Enterprise mean?
This is a full Windows 10, which is licensed for use on IoT devices such as the Peakboard 2 Box.

### What does WPF Runtime mean?
Windows Presentation Foundation (WPF) is a framework for developing desktop client applications.
The Runtime is the software that runs on the Peakboard Box and ensures that data is loaded in real time and the visualization and designer is displayed.

### What are the advantages of the Peakboard 2 Box?
The Windows 10 IoT Enterprise in combination with the WPF Runtime enables direct communication between almost all common databases.
It is also possible with Peakboard 2 Boxes to read and process files such as Excel, PDF or image files directly from the network drive.

### What changes?
Since the operating system has changed from Windows 10 IoT Core to Windows 10 IoT Enterprise, the device portal is no longer necessary.
This will be replaced by the management portal.
The [Peakboard Bridge], which is an essential part of the Peakboard Box, is no longer needed to support communication.
With the Peakboard 2 Box the communication is done directly.

### How is a Peakboard Box converted to a Peakboard 2 Box?
The changeover is free of charge for all customers with a valid [Service Level Agreement (SLA) identification number](https://peakboard.com/wp-content/uploads/2020/03/peakboard-service-level-agreement-en-v3.pdf).
Anyone who purchases a Peakboard Pro Box or Peakboard Enterprise Box after Mai 1, 2020 will automatically receive the purchased version as a Peakboard 2 Box.

An existing Peakboard Box can be converted to a Peakboard 2 Box in the following ways:
* [Upgrade of the existing hardware using a Peakboard 2 Upgrade USB stick](/misc/en-pb2USB.html)
* Replacement of the existing hardware with Peakboard 2 Boxes

### What needs to be considered when changing over?
* The visualization must be saved on the PC before the update, so that it can be reloaded after the update
* IP addresses may have to be reset after the update
* Proxy settings must be performed again
* For an [Update via USB-Stick](/misc/en-pb2USB.html) [name and license](/administration/PB%201.x%20Box/en-1x-change-license.html) must be saved in a separate text document
