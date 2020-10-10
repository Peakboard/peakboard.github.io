---
layout: article
title: OPC UA
menu_title: OPC UA
description: Peakboard中OPC UA数据的相关信息
lang: cn
weight: 2400
ref: dat-2400
redirect_from: 
 - /data_sources/en-opc-ua.html
---

和其他可直接访问的机器数据源——西门子S7、MQTT或Azure IoT中心一样，OPC UA也可与Peakboard无缝连接。在本文描述的示例中，Peakboard是一台连接到OPC UA服务器的OPC UA客户端。您可以使用通用的OPC UA“参考服务器”轻松再现本文中的示例，该服务器可在注册后从[opcfoundation.org](https://opcfoundation.org/developer-tools/samples-and-tools-unified-architecture)下载。

压缩文件包含多个应用，“参考服务器”即为其中之一。您可以双击目录中的可执行文件，以启用该服务器。当然，只有在测试时才需要这一步骤。如果您的网络中有一台真正的OPC UA服务器，也可以在第一步中使用。理想情况下，您应该对OPC UA大体上比较熟悉，尤其是OPC UA服务器。

首先，输入服务器URL。根据采用的安全设置，您的URL可能与此处显示的示例不同。单击“获取端点”，服务器支持的所有可能访问方法就会填充到下面的选择框。尤其需注意的是，该选项涉及如何认证和/或加密后续传输。在该示例中，我们选择了一个不使用任何安全措施的通信类型。此外，数据内容以二进制形式传输，与XML相比更加强大。并且由于数据吞吐量较低，对网络也可以起到保护作用。

![image_1](/assets/images/data-sources/opc-ua/data-source-opc-ua-01.png)

下一步，我们可以设置认证方式。大多数情况下，例如MicroEmbedded OPC UA服务器，我们都会使用"Anonymous"的方式。您也可以输入用户名和密码登录，或者指定一个由密码保护的证书，用来确定身份。

![image_1](/assets/images/data-sources/opc-ua/data-source-opc-ua-02.png)

随后，我们需要指定证书，Peakboard应用（例如可视化看板）可使用该独一无二的证书向服务器表明自己身份；如果需要的话还可使用该证书确立加密传输。下一张图片显示跳转到证书存储区，它对整个OPC UA数据源都有效。您可以从本地硬盘导入所需的证书；或者，如果没有证书，您可以自行创建一份（“创建”按钮）。如果自行发布证书，则必须在服务器上发布。具体应如何发布取决于服务器。在此测试环境中，您只需选择"None:None:Binary"作为端口（第一个截图中的第三步），然后使用"Anonymous"认证方式。这样可确保服务器允许任何连接请求。

![image_1](/assets/images/data-sources/opc-ua/data-source-opc-ua-03.png)

现在我们进入了最后一个配置步骤：从服务器接收数据。我们可以通过两种方法获取数据：首先，您可以设置一个或多个订阅，确保某个值改变时Peakboard能立即收到通知。只要算力和网络支持，这种方法即可实现实时通信。每个OPC UA数据源可设置任意个数的订阅以及任意个项目。OPC基金会的服务器在其配置中提供一个名为"Simulation"的节点，它包含无数个不同数据类型的变量。另外，变量值大概每秒会随机更新一次，这对订阅比较友好。从逻辑上来说，如果我们以相同方式处理变量中的数据，那么使用订阅就比较合理。例如，我们可以将所有服务器提供的错误代码合并到一个订阅，因为无论出现哪种错误，相同的红灯都应该在看板中亮起。在订阅中添加变量时，您可以使用浏览对话框选择所有需要的数据点。以下截图展示了从创建订阅到选择变量的全过程。

![image_1](/assets/images/data-sources/opc-ua/data-source-opc-ua-04.png)

第二种读取服务器数据的方法是周期性读取——每隔一段时间向服务器发送读取请求，然后服务器作出响应，并返回当前记录。而读取周期之间的数据变化则无法检测。这种连接方式与创建订阅相似，唯一不同之处在于您需要通过“选择”按钮查看变量对话框。您可以通过“更新间隔”决定向服务器请求数据的时间间隔。

![image_1](/assets/images/data-sources/opc-ua/data-source-opc-ua-05.png)

处理传入数据的方法基本上有两种。与所有其他数据源一样，OPC-UA数据源只是一个表，传入项目中的信息会添加至表尾，直至队列长度。然后根据FIFO原理将数据从表中删除，并用新数据替换。如要测试配置，只需将表格拖放到当前屏幕。如果所有配置都正确，表中应填满数据。

第二种也是更常见的方法是在脚本中对传入的数据做出反应。每个订阅都可以绑定一个脚本，这对于通过周期性读取流程创建的变量数据集也同样适用。以下截图展示了一个常用的使用案例。根据项目值的设置方式，消息会存储在一个或另一个表中作进一步处理。方块（被称为“状态”）将会根据这一数值变为绿色或红色。而对于订阅模式，请注意脚本始终是在当前正在接收新数值的变量环境中执行。您可以在"Message"对象中找到有关该环境的信息，也可以在订阅界面左侧目录树的脚本编辑器中获取该对象所有数据点的总览。新的数值可以通过message.itemvalue获取，而message.itemid则指的是服务器路径。

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

OPC UA提供多种功能，其中之一即方法的使用。Peakboard也囊括了OPC UA协议的这一方面。在数据源对话框的底部，您可以使用浏览对话框搜索OPC UA服务器提供的方法。选择所用的方法之后，即已连接数据源，所有相关的信息都可以通过点击“显示”按钮进行查看。这也包含执行此方法需要或返回的数据类型值。

![image_1](/assets/images/data-sources/opc-ua/data-source-opc-ua-06.png)

以上截图显示了在脚本中执行这种方法的场景，所有关联的方法都可在脚本编辑器中作为数据源节点的子项目进行选择。双击想要使用的方法即可创建一个执行该方法的节点。当然了，此处的节点缺少正确的执行环境。您必须定义或修改变量名和/或值。