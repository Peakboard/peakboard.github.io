---
layout: article
title: QR Code
menu_title: QR Code
description: Information über Peakboard Designer QR Code Control.
lang: de
weight: 800
ref: con-800
redirect_from:
---

Mit dem QR Code Control welches unter den Erweiterten Controls in der Control Liste zu finden ist können sehr einfach QR Codes in eine Visualisierung integriert werden. 
Dafür muss lediglich die gewünschte URL in das Feld Wert in den Properties des jeweiligen QR Code Controls eingetragen werden. 
Soll der angezeigte QR Code in einer aktiven Visuaisierung mittels Skript geändert werden, dann muss das QR Code Control zunächst einen Namen bekommen um es in einem Skript ansprechen zu können. 
Im Skriptausschnitt heißt das QR Code Control einfach nur 'QR'.
Die neue URL muss dann als neuer Wert zugewiesen werden. 

```lua
screens['Screen1'].QR.value = 'www.peakboard.com'
```

![image_1](/assets/images/Controls/QR-Code/qrcode01.gif)