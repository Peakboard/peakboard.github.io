---
layout: article
title: MQTT-经纪人
menu_title: MQTT-经纪人
description: Peakboard中的MQTT-经纪人数据相关信息
lang: cn
ref: dat-18
---
MQTT-经纪人数据源提供对MQTT服务器订阅模式的访问（参见[https：//en.wikipedia.org/wiki/MQTT]（https://en.wikipedia.org/wiki/MQTT））。与协议本身一样，配置非常简单，如以下截图所示。本质上，只需指定服务器。端口规格以及用户名和密码的规格均可选（通过带有三个点的小按钮进行访问）。如果您没有MQTT服务器，只需使用[test.mosquitto.org]（http：//test.mosquitto.org/）即可向公众开放。

![image_1](/assets/images/data-sources/mqtt-broker/datenquellen-mqtt-01.png)

有两种模型可用于使用此数据源处理MQTT消息。最简单的方法是对数据源进行经典处理，即类似表格的数据对象。每条新消息都作为一个条目添加到该表中。要设置MQTT主题订阅，您必须相应地创建订阅。订阅可以在几个主题上运行。以下截图显示了这种相关性。表格类型的数据对象有三列：时间戳、主题和消息。消息通常包含一个简单的JSON字符串。

![image_1](/assets/images/data-sources/mqtt-broker/datenquellen-mqtt-02.png)

对传入消息做出反应的第二种方式是通过脚本做出反应。为此，可以定义每个订阅的脚本。MQTT消息的用户数据在脚本中可用，包括消息.时间戳、消息.主题和消息.文本（另见左侧的对象树）。如果您必须首先解析纯文本，只需使用json.parse（…）。

![image_1](/assets/images/data-sources/mqtt-broker/datenquellen-mqtt-03.png)

#发送消息

每个MQTT源也可用于从Peakboard向MQTT服务器发送消息。以下截图显示其工作方式。数据对象的功能如下所示

```
Data.MeinMQTTObjekt.Publish(MeinTopic, MeineNachricht)
```

![image_1](/assets/images/data-sources/mqtt-broker/datenquellen-mqtt-04.png)
