---
layout: article
title: OPC UA
menu_title: OPC UA
description: Peakboard中OPC UA数据的相关信息
lang: cn
ref: dat-22
redirect_from: /en/datasources-mqtt-broker/
---

OPC-UA数据源无缝配合机器通信的一系列数据源，并可直接访问西门子S7、MQTT或Azure IoT中心。在这里描述的示例中，Peakboard代表连接到OPC服务器的OPC客户端。本文中的示例可以使用通用OPC UA服务器轻松再现，您可以注册后从opcfoundation.org下载：

[https://opcfoundation.org/developer-tools/developer-kits-unified-architecture/sample-applications/](https://opcfoundation.org/developer-tools/developer-kits-unified-architecture/sample-applications/)

一旦启动仪表板，您将在左侧“Generic Server（通用服务器）”条目找到通用服务器。可以直接从此处开始操作。当然，这仅为干测试所必需。如果您的网络中有一台真正的OPC UA服务器，您也可以在第一步就进行使用。然而，理想情况下，您应该熟悉OPC UA，尤其是您的OPC服务器。

首先，请输入可访问服务器的URL。根据使用的协议，此URL可能与此处显示的示例不同。单击“获取端点”，将服务器支持的所有可能的访问方法填充到下面的选择框中。特别是，它涉及如何认证和/或加密后续传输的问题。在该示例中，选择了使用证书对数据流量进行标记和加密的通信方法。此外，数据内容以二进制形式传输，这比XML更强大，并且由于吞吐量较低而可以保护网络。

![image_1](/assets/images/data-sources/opc-ua/data-source-opc-ua-01.png)

在下一步中，如果服务器需要，您可以输入用户名和密码。“Session Name（会话名称）”文本框允许您定义服务器上显示的会话ID。例如，如果几个不同的系统或Peakboard Box访问OPC服务器，您可以使用会话ID准确跟踪启用了会话的系统或Box。如果您没有特定的会话名称，请保留默认值。

![image_1](/assets/images/data-sources/opc-ua/data-source-opc-ua-02.png)

下一步是指定用于加密和/或签署数据流量的证书。下一张图片显示跳转到证书存储区，它对整个看板有效。您可以从本地硬盘导入所需的证书，或者，如果您没有证书，您可以自行创建一份（“创建”按钮）。如果您要自行发布证书，则必须在服务器上发布。发布方式取决于服务器。如果您将上述演示软件用作测试服务器，那么您只需点击“尝试连接”。Peakboard向服务器传输一次证书，服务器最初会拒收。然后，您必须在服务器端将证书标记为“已知”。然后，连接设置将第二次尝试，因为服务器上的证书是已知和有效的。

![image_1](/assets/images/data-sources/opc-ua/data-source-opc-ua-03.png)

让我们进入最后一个配置步骤。每个OPC-UA-Datasource可以订阅任意数量的项目，例如，锅炉所有阀门的状态。可以添加多个项目到订阅中。如果稍后在可视化中以类似方式处理这些项目，这会很有意义。例如，您可以将所有的进口阀和出口阀门合并到一个订阅中，因为如果出现错误，无论哪个阀门出现故障，看板上始终都会亮起相同的红灯。下面的截图正好显示了一个带有一个项目的订阅。项目完全由项目ID和名称空间URI定义。ID可以自由创建，仅用于命名项目。您必须知道所需项和服务器的项目ID和名称空间URI，或者可以使用“浏览”按钮从服务器获取模型，该模型以分层结构显示模型的所有项目。

![image_1](/assets/images/data-sources/opc-ua/data-source-opc-ua-04.png)

处理传入数据的方法基本上有两种。像任何其他数据源一样，OPC-UA数据源只是一个表，其中附加了项目的传入消息，至少达到队列长度。然后根据FIFO原理将数据从表中删除，并用新数据替换。如要测试配置，只需将表格拖放到当前屏幕上。如果所有配置都正确，则将数据填入表中。

第二种也是更常见的方法是对事件中传入的数据做出反应。每个订阅有一个事件。下面的截图展示了一个常见的模式。根据项目值的设置方式，将消息存储在一个或另一个表中以供进一步处理。方块（名为“状态”）根据值设置为绿色或红色。对象“消息”在脚本中有三个属性：message.timestamp是时间戳，message.itemvalue是值，message.item是项的名称。

![image_1](/assets/images/data-sources/opc-ua/data-source-opc-ua-05.png)


```Lua

	data.itemnumber = 1 + data.itemnumber

	if message.itemvalue then
		screens['screen0'].status.Fill = brushes.green
		data.valid.add({['itemnumber'] = data.itemnumber, ['commentary'] = 'passed'})
	else
		screens['screen0'].status.Fill = brushes.red
		data.invalid.add({['itemnumber'] = data.itemnumber, ['commentary'] = 'failed'})
	end

	if data.itemnumber == 10000 then
		data.itemnumber = 0
	end

```

您还可以在我们的[Github-Respository](https://github.com/Peakboard/CoolStuff)中找到opcfoundation.org示例服务器的样板看板。
