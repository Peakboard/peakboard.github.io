---
layout: article
title: Peakboard Bridge
menu_title: Peakboard Bridge
description: Peakboard中Peakboard Bridge数据的有关信息
lang: cn
weight: 1400
ref: dat-1400
redirect_from:
  - /data_sources/14-cn-peakboard-bridge.html
---
Peakboard最重要的概念之一是Peakboard Box被认为是自给自足的，与没有服务器或其他中间件的其他可视化概念相比，它可以直接与所有连接的上游系统通信。某些情况下，这不是完全可持续的。对于Oracle和一般ODBC访问的情况，Peakboard需要Peakboard Bridge。这是一项精益Windows服务，通常安装在服务器上，资源需求非常小。然后，Peakboard Box访问Bridge，这将访问数据库。自2018年春起，我们一直努力废除Bridge作为进一步开发的必要条件。然而，在成功之前，仍需要它。

安装Bridge的详细信息请见[此处](/administration/01-cn-install.html)。

以下截图显示了Bridge数据源。对于该地址，必须输入Bridge服务器的URI。通常形式为 `tcp: //<MyBridgeServer>: 2501` 。如果端口与默认值2501不同，则必须指定端口。

在“数据源类型”选择框中，指定要直接访问Oracle，还是使用任何（非Oracle）ODBC驱动程序（例如MySQL、Informix等）。必须相应调整连接字符串。该截图显示了一个典型的Oracle连接字符串。如果您不确切知道连接字符串是如何构成的，请单击带有三个点的小按钮获取输入帮助。

您可以使用目标系统能够理解的方式表达SQL语句。使用“加载”执行语句，检索元数据（列及其数据类型）。之后，数据源照常可用。

![Bridge Data Dialog](/assets/images/data-sources/peakboard-bridge/data-source-bridge.png)
