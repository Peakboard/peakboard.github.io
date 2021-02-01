---
layout: article
title: 二维码
menu_title: 二维码
description: Peakboard Designer二维码控件相关信息。
lang: cn
weight: 800
ref: con-800
redirect_from:
  - /controls/cn-qr.html
---

二维码控件位于控件列表的“拓展选项”栏，您可以通过该控件轻松地将各种二维码整合至可视化。
为此，只需在相应二维码控件的属性区域，将关联的URL输入“值”选项。
如果需要在使用可视化时利用脚本显示不同的二维码，您必须命名该控件，随后才可在脚本中使用。
二维码控件在脚本窗口中被简化为'QR'。
同时，不同二维码的URL也必须重新赋值。

```lua
screens['Screen1'].QR.value = 'www.peakboard.com'
```

![image_1](/assets/images/Controls/QR-Code/qrcode01.gif)