---
layout: article
title: SAP
menu_title: SAP
description: Peakboard中关于SAP数据的信息
lang: cn
weight: 1100
ref: dat-1100
redirect_from:
  - /data_sources/SAP/10-cn-sap.html
---
本页解释了从Peakboard访问SAP数据源时的各个功能。在下面链接中可以找到关于通常如何配置外部数据源并链接到Peakboard元素的教程：

[使用XML数据源的外部数据源示例](/tutorials/03-cn-xml-data.html)

可以多种方式实现与SAP的连接。哪种情况最适合您的情况，取决于以下几个因素：


* **直接RFC**

在“直接RFC”的情况下，Box将直接与SAP应用服务器通信。这一过程中无需中间件，也无需在SAP上配置更多东西。这几乎是所有客户的最佳访问选项。

* **SAP网关**

SAP网关是SAP中的一个模块，可以使用交易代码SEGW进行访问。在SAP中，RFC功能模块通常作为OData服务提供。您可以通过谷歌搜索或在[此处](https://blogs.sap.com/2013/01/24/a-simple-overview-on-sap-netweaver-gateway/)找到关于SAP网关的介绍。如需使用Peakboard连接到网关服务，至少需要知道服务器URL和实体集的名称。请注意，这种访问方法的一个最大缺点在于可能需要开发网关。

* **Peakboard Bridge**

在第一代Peakboard中，需要使用Bridge与SAP进行通信。但是自从开发出第二代Peakboard（大约2017年5月）后，此功能已被淘汰，不再使用。

## 通过“直接RFC”访问
如需将数据源连接到SAP，必须填写客户端、用户名、密码和语言（带有常用SAP语言代码）字段。还必须激活标签页的“直接RFC”。在此选项卡页上，输入SAP应用程序服务器和系统编号。

![Sap Data Dialog](/assets/images/data-sources/sap/sap-data-dialog.png)

一般使用XQL语句设定对SAP的实际访问。因此，不需要完全手动输入XQL语句，可以使用“模板”按钮插入一个模式。下面的截图显示了一个简单的SAP表说明。有关XQL的更多信息和示例，可以参阅其他相关页面。

![Sap Direct RFC](/assets/images/data-sources/sap/sap-direct-rfc.png)

接下来的步骤是使用“加载”按钮以加载列或元数据，使用“预览”按钮以检查数据的正确性。

![Sap Load Columns](/assets/images/data-sources/sap/sap-load-columns.png)

![Sap Load Columns Preview](/assets/images/data-sources/sap/sap-load-columns-preview.png)

## 通过SAP网关访问

访问基于网关服务，会返回当前登录的所有用户列表。以下截图显示了交易SEGW草稿视图中的服务：

![SAP NetWeaver Gateway Service Builder](/assets/images/data-sources/sap/sap-netweaver-gateway-service-builder.png)

新创建的数据源需要SAP系统的唯一名称、用户名和密码。在SAP网关选项卡页中，输入网关服务URL。然后单击带有三个点的小按钮，将所有实体集加载到网关服务URL下的选择对话框中。

![Sap Gateway Select Element](/assets/images/data-sources/sap/sap-gateway-select-element.png)

在您选择了一个实体后，点击“确认”进行确认。现在，将加载并显示列及其数据类型。配置到此结束。在“预览”窗口中查看数据，可检查数据的合理性。

![SAP Gateway Dialog](/assets/images/data-sources/sap/sap-gateway-dialog.png)

![Sap Preview](/assets/images/data-sources/sap/sap-preview.png)
