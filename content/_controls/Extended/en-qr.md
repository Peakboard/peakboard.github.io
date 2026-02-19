---
layout: article
title: QR Code
menu_title: QR Code
description: Information about Peakboard Designer QR Code Control.
lang: en
weight: 800
ref: con-800
redirect_from:
  - /controls/en-qr.html
---

The QR Code Control allows you to integrate QR codes quickly and easily into a visualization.
You can find the QR Code Control in the Peakboard Designer within the Others group (1). Drag and drop the icon into your designer or double-click it to place it on your workspace.

![image_1](/assets/images/Controls/QR-Code/qrcode_01.png)

# Configuration and Properties
## 1 Data Source and Account Linking
A QR Code Control can be populated with content in different ways. Double-click the control to open the configuration dialog:
* Static Resource: Paste a URL link from your browser (e.g., "https://www.google.com/search?q=https://www.peakboard.com") (1).
* Dynamic Linking (Data Binding): Link the control to a data source or a variable containing a path or a URL. The code will be updated automatically at runtime (2).
* nstead of using the configuration dialog, you can also use the "value"-input field under Data in the properties panel to link a URL, a data source, or a variable to the control (3).

![image_2](/assets/images/Controls/QR-Code/qrcode_02.png)

## 2 Appearance and Control
In the properties panel on the right side, you can precisely manage the behavior and appearance:
1. Control Positioning (General): Define the alignment of the control on the workspace. The first eight icons allow you to quickly place the control in corners or at the center of the sides, while the ninth icon fills the entire available area. The last icon centers the element (1).
2. General: Use the Width, Height, Left, and Top fields to precisely define the size and position of the control via manual input. Below that, you can define Padding for the document within its frame and assign a Title that appears above the control (2).
3. QR Code (Appearance): Select the color of the control and the type—choose whether the control should be displayed as a QR Code or a Code 128 barcode (3).
4. Use in Scripts (Logic): Give the control a unique name to control it later via script (4).
5. Conditional Formatting (Logic): Use conditional formatting to, for example, control the visibility of the control based on specific events (5).

![image_3](/assets/images/Controls/QR-Code/qrcode_03.png

## Note
If the displayed QR code needs to be changed via script during an active visualization, the QR Code Control must first be given a name so it can be addressed in the script.
In the script snippet, the QR Code Control is simply named 'QR'.

Start the Preview and check if the code can be read correctly.