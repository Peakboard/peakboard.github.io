---
layout: article
title: 安装和配置
menu_title: 安装和配置
description: Peakboard Designer的安装和配置
lang: cn
ref: admin-01
---

Peakboard Bridge旨在为Peakboard Box提供数据源，由于技术限制，Box无法自我实现这一功能。这适用于访问网络上的文件等。

从技术角度分析，Bridge是一种非常微型的Windows服务，通常与其他软件一起安装在公司服务器上。为此，请使用常规安装程序并选择适当的选项，如下面的屏幕截图所示：

![Make sure PeakBoard Bridge is checked in the installation setup](/assets/images/admin/install/peakboard-designer-setup-bridge.png)

在“Windows服务管理”中，您可以像找到任何其他Windows服务一样找到“Bridge服务”。如果需要，它也可以在另一个服务帐户下运行。请注意，“Bridge服务”会向外部打开TCP/IP通道，以便Peakboard Box可以与之通信。因此，任何防火墙都不得阻止对该端口的访问。

![Windows Service Administration Window ](/assets/images/admin/install/windows-service-administration-window.png)

您也可以在C:\Program Files\Peakboard\Server文件夹中找到Bridge服务的所有二进制数据（如果您在安装过程中选择了另一条路径，那么则为另一路径）。子目录"配置"包含XML文件serverConfiguration.xml。如有必要，您可以在此更改标准端口2501。"日志"存储在子目录日志中。如果发生错误，您会在那里找到详细的错误消息。

![Example of a serverConfiguration.xml file](/assets/images/admin/install/example-of-server-configuration-xml-file.png)

使用该Bridge的URL是“http://MeinServer:MeinPort”，例如:“http://Julia:2501”

