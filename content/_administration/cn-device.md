---
layout: article
title: 设置Wi-Fi
menu_title: 设置Wi-Fi
description: 设置Wi-Fi
lang: cn
weight: 200
ref: admin-200
redirect_from:
  - /administration/02-cn-device.html
---

要设置Peakboard Box的Wi-Fi，必须首先连接网线，并连接所提供的Wi-Fi USB适配器。如果Peakboard Box仍处于初始状态，那么一旦建立网络连接，IP地址就会显示在屏幕上。

现在打开Peakboard Designer，并按[此处](/administration/07-cn-adding.html)所述将新Peakboard Box添加到Designer中。 要激活Wi-Fi连接，（1）请先打开“管理/部署”对话框，（2）选择相应的Box, 然后（3）点击“设置”（4）找到“Wi-Fi连接”，进入Wi-Fi对话框，在此可以找到所有可用的Wi-Fi网络,（5）选择所需的网络，（6）输入相应的密码，点击“连接”激活网络连接。

![Wi-Fi Connection](/assets/images/admin/device/WiFiConnection.png)

最后，重启Peakboard Box，断开网线连接。Peakboard Box现处于Wi-Fi网络中。

或者也可以通过Peakboard Box的Windows IoT管理界面进行Wi-Fi激活。

要执行此操作，请按照上面所述连接Peakboard Box。不打开Peakboard Designer，使用以下URL打开Peakboard Box的Windows IoT管理界面：http://[BoxName]:8080。BoxName打印在Peakboard Box上，例如PB1234。在这种情况下，正确的URL为http://PB1234:8080。

现在展开左侧的“连通性”菜单项，然后选择“网络”。在此可以找到所有可用的Wi-Fi网络列表。

选择所需Wi-Fi，然后输入密钥。

然后通过电源按钮重启Peakboard Box，以便保留更改，这一点很重要。

![Windows Device Portal](/assets/images/admin/device/windows-device-portal.png)

