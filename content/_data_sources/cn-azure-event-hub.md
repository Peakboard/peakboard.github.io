---
layout: article
title: Azure事件中心
menu_title: Azure事件中心
description: Peakboard中Azure事件中心数据的相关信息
lang: cn
weight: 2200
ref: dat-2200
redirect_from:
  - /data_sources/19-cn-azure-event-hub.html
---
以下文章展示了Peakboard与Azure事件中心的连接。具体来说，这涉及到从Peakboard实时响应特定事件。此程序主要用于将Peakboard集成为已通过事件中心交换事件的环境的一部分。Peakboard订阅到一个特定中心，这些事件可以很容易地集成到可视化中。

此处可了解在Azure中创建中心的方法：

[https://docs.microsoft.com/en-us/azure/event-hubs/event-hubs-create](https://docs.microsoft.com/en-us/azure/event-hubs/event-hubs-create)

如果您需要在事件中心触发事件的示例程序，请查看下面的网页：

[https://docs.microsoft.com/en-us/azure/event-hubs/event-hubs-dotnet-standard-getstarted-send](https://docs.microsoft.com/en-us/azure/event-hubs/event-hubs-dotnet-standard-getstarted-send)

如要包含一个中心，请在Peakboard Designer中创建新数据源。以下截图显示了设置示例。需要连接字符串和中心名称（也可以输入路径取代名称）。此外，必须指定Azure存储的连接字符串和容器名称（如中心里配置）。队列大小定义数据源中的最大消息数，该脚本还用于消息处理（更多信息见下文）。

![Edit Azure Event Hub Data Dialog](/assets/images/data-sources/azure-event-hub/edit-azure-event-hub-data-dialog.png)

消息处理方法通常有两种。第一种方法是使用队列。将所有传入消息简单插入到一个表格中，就像任何其他Peakboard数据源一样。因此您可以将它们直接附加到网格或类似工具上以显示消息。该表有两列：“时间戳”列表示时间戳，“消息”列表示消息原始数据。

第二种方法是对每个传入消息只调用一次的脚本。以下截图显示了这种示例。对象消息有两个属性：“时间戳”和“文本”。示例显示很容易将最后一条消息写入文本字段。

![Azure Edit Script Dialog](/assets/images/data-sources/azure-event-hub/azure-edit-script-dialog.png)
