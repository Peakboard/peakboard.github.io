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

With the QR Code Control, which can be found under the Advanced Controls in the Control List, QR Codes can easily be integrated into a visualization. 
To do so, simply enter the desired URL in the Value field in the properties of the respective QR Code control. 
If the displayed QR Code is to be changed in an active visualization with a script, the QR Code Control must first be given a name to be able to address it in a script. 
In the script pane the QR Code control is simply called 'QR'.
The new URL must then be assigned as a new value. 

```lua
screens['Screen1'].QR.value = 'www.peakboard.com'
```

![image_1](/assets/images/Controls/QR-Code/qrcode01.gif)