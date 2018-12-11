---
layout: article
title: Azure IoT Hub
menu_title: Azure IoT Hub
description: Peakboard中的Azure IoT中心数据相关信息
lang: cn
ref: dat-20
---
本文展示了在Peakboard中使用Azure物联网中心数据源的方法。请首先明确数据源物联网中心和事件中心之间的区别。后者解释见此处（/data_sources/19-en-azure-event-hub.html）。事件中心源仅用于接收消息。因此，这只适用于对事件的异步反应。在物联网中心源中，Peakboard充当Azure物联网中心内的设备。必须作为设备进行创建。如要做到这一点，您需要Azure门户的连接字符串，该字符串直接与设备相关联。

![image_1](/assets/images/data-sources/azure-iot-hub/datenquellen-iot-hub-01.png)

![image_1](/assets/images/data-sources/azure-iot-hub/datenquellen-iot-hub-02.png)


为使Peakboard能够作为“设备”完成其工作，下面将介绍几种通信渠道：异步接收消息、同步接收返回值的方法以及返回值、从Peakboard发送消息。

#接收消息

传入消息存储在对象（类似表格）的数据源中，该对象有三列时间戳、主题和文本，正如您从数据源中所了解到的内容所述。此队列大小可使用参数设置。如果您不重视队列内容，您也可以通过脚本对此做出反应。该脚本只需调用每个传入消息。以下示例显示了将消息内容简单写入文本字段的脚本：

![image_1](/assets/images/data-sources/azure-iot-hub/datenquellen-iot-hub-03.png)


如要发送测试信息，最好使用Azure测试模式：



![image_1](/assets/images/data-sources/azure-iot-hub/datenquellen-iot-hub-04.png)

#接收和响应方法

交换消息的第二种方式是使用给定的方法。它们不同于消息，因为它们有返回值。因此，设备可以对消息做出反应，并返回一种确认消息。必须在方法表中为每个方法创建一个条目。该示例显示了“PostAlert”方法，该方法可用于接收消息，对其进行评估，并将Peakboard的名称恢复为JSON。让我们假设该方法可以发送带有警报类型的JSON消息。以下截图显示了在Azure方法测试对话框中创建请求的方法。您可以进行访问，访问模式与数据测试模式相同（见上文）。脚本代码还显示了如何正确解析和处理JSON。可通过json.DataAsJson访问纯字符串。json.parse（…）函数创建了一个动态对象。随后很容易访问AlertType属性。

![image_1](/assets/images/data-sources/azure-iot-hub/datenquellen-iot-hub-05.png)

![image_1](/assets/images/data-sources/azure-iot-hub/datenquellen-iot-hub-06.png)

#从Peakboard向物联网中心发送消息

将Peakboard用作物联网设备的第三个也是最后一个作用是向云端发送消息。这可以通过脚本轻松完成。通过点击按钮便可查看以下示例。因此，最终用户可通过按下按钮发送消息。通常会在此再次发送JSON字符串。您可以在脚本上看到JSON是如何从动态对象中形成的。该等属性为简单地填充数值并进行隐式创建。

![image_1](/assets/images/data-sources/azure-iot-hub/datenquellen-iot-hub-07.png)
