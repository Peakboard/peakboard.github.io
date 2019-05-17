---
layout: article
title: 资源
menu_title: 资源
description: 附加资源
lang: cn
weight: 100
ref: misc-100
---

除了屏幕和数据源，资源是Peakboard可视化的第三大支柱。资源可以是可视化所需的任何东西：图像、字体、脚本、数据文件（例如Excel）。在最简单的情况下，相应的资源直接静态地存储在Peakboard Package中。然而，资源也可以是动态的，例如，可以通过URL检索，存储在云存储器（Dropbox、Google云端硬盘、OneDrive）中，或者存储在相同网络内的共享驱动器上（Bridge资源）。本文对所有这些选项都按照其在菜单中出现的顺序进行了解释（见下面的截图）。

![image_1](/assets/images/misc/Ressources/Resources_01.png)

## 脚本

“添加脚本”菜单项添加一个新的空脚本文件。然后可以在“Lua编辑器”中手动对其进行描述。该技术通常用于存储许多其他LUA脚本可以访问的通用函数。

## 本地资源

本地资源只是一个静态文件：脚本、Excel文件、图像等，它直接从文件系统插入到程序包中，然后保持静态可用且不再改变。

## Bridge资源

Peakboard Bridge是一种小型、节省资源的Windows服务，通常安装在Windows服务器上。如果您想创建的资源是非静态的，而是不断从共享网络驱动器中自我刷新，则Bridge资源是正确的选择。Peakboard Box访问Bridge和此网络中共享的文件。为什么Box不直接访问文件？答案很简单：出于安全原因。通常，Box不属于域的一部分，因此无法访问网络驱动器。然而，Bridge服务却可以访问，因为它访问网络驱动器，Bridge Windows服务在AD用户情境中运行。

下面的截图显示了Bridge资源的配置掩码。您只需指定所需文件（在本案例中为共享驱动器上的Excel文件）的路径和Bridge服务器的URL。如果网桥服务器在默认端口2501下运行，也可以省略端口规范。

![image_1](/assets/images/misc/Ressources/Resources_02.png)

## Web资源

Web资源的解释非常简单：如果资源需要显式身份验证，只需输入所需的URL，如有必要，请使用身份验证。

![image_1](/assets/images/misc/Ressources/Resources_03.png)


## 云资源：Dropbox、OneDrive、Google云端硬盘

如要从云存储器中加载资源，您必须首先允许Peakboard访问您的云存储器。打开相应的窗口。请注意：云存储器的访问数据不是存储在Designer或Peakboard Box中，而是存储在访问令牌中。如果想撤消此权限，只需进入云存储帐户的设置中进行操作。相关访问权限列在其中，并可以将其删除。这是允许第三方访问云存储设备的常见流程。

以下截图显示了登录Dropbox的示例，然后选择文件。该文件的副本存储在Designer中用于预览。然而，在更新运行中（在Peakboard Box上），文件从云存储器中更新。因此，内容不是静态的，而是动态链接到原始应用程序文件。

![image_1](/assets/images/misc/Ressources/Resources_04.png)
![image_1](/assets/images/misc/Ressources/Resources_05.png)

## 资源文件夹

如果资源条目的数量增加，则将资源组织到目录中是有意义的。您可以简单地将文件拖放到子目录中。

![image_1](/assets/images/misc/Ressources/Resources_06.png)
