---
layout: article
title: Peakboard Bridge
menu_title: Peakboard Bridge
description: 有关Peakboard中Peakboard Bridge数据的信息
lang: cn
ref: dat-14
---
Peakboard最重要的概念之一是Peakboard-Box被认为是自给自足的，与没有服务器或其他中间件的其他可视化概念相比，它可以直接与所有连接的上游系统通信。某些情况下，这不是完全可持续的。在Oracle和一般ODBC访问的情况下，Peakboard需要Peakboard Bridge。这是一项精益Windows服务，通常安装在资源需求最小的服务器上。然后，Peakboard Box访问网桥，并访问数据库。自2018年春起，我们一直努力废除该网桥，因为这是进一步发展的必要条件。但在那之前，仍需要它。

安装该网桥的细节见[此处](/administration/01-en-install.html)。

以下截图显示了网桥数据源。对于地址，必须输入网桥服务器的URI。通常，URI会在表格 `tcp: //<MyBridgeServer>: 2501` 中。如果端口与默认值2501不同，则必须指定端口。

在数据源类型选择框中，指定要直接访问Oracle，还是使用任何（非Oracle）ODBC驱动程序（例如MySQL、Informix等）。必须相应调整连接字符串。该截图显示了一个典型的Oracle连接字符串。如果您不知道连接字符串是如何形成的，请点击带有三个点的小按钮获取输入帮助。

您可以使用目标系统能够理解的方式表达SQL语句。执行带有“Load”的语句检索元数据（列及其数据类型）。此后，数据源照常可用。

![Bridge Data Dialog](/assets/images/data-sources/peakboard-bridge/data-source-bridge.png)
