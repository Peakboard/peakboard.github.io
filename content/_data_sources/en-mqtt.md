---
layout: article
title: MQTT
menu_title: MQTT
description: Information about MQTT data in Peakboard
lang: en
weight: 1600
ref: dat-1600
redirect_from:
 - /data_sources/18-en-mqtt-broker.html
 - /data_sources/en-mqtt-broker.html
---

The MQTT data source gives you access to the subscription model of an MQTT server (see [https://de.wikipedia.org/wiki/MQTT](https://de.wikipedia.org/wiki/MQTT)).
MQTT (Message Queue Telemetry Transport) is a lightweight messaging protocol designed for low-bandwidth scenarios and unstable networks. It is based on a publish-subscribe model, with a broker serving as an intermediary that receives messages from publishers and forwards them to subscribers subscribed to specific topics.

To add the data source, right click on [Data] or alternatively click on the [...] button and then select [Add data source] and [MQTT] (1).

![Add MQTT](/assets/images/data-sources/mqtt-broker/en_mqtt-01.png)

Give the data source a name (1). To connect the data source you have to specify the server under [MQTT Broker] (2). The specification of the MQTT broker port (3) is optional, as well as the authentication (4).

If you don't have an MQTT server available, you can use [test.mosquitto.org](http://test.mosquitto.org/). It is publicly available. Alternatively, you can use our test broker [templates.peakboard.rocks].

To receive data, you need to add one or more subscriptions (5). By clicking on the corresponding button you add a new subscription. If you use the Peakboard test broker, you can add the following topic filters:

* shopfloor/counter/
* shopfloor/station1/
* shopfloor/station2/
* shopfloor/station3/
* shopfloor/station4/
* shopfloor/station5/

For each of the 5 different stations the data source changes between the status codes 100, 200, 300. The production counter counts up and is reset after a while.

Under [Quality of Service] (6) you can set how messages are transferred between publisher and subscriber.
There are three levels:

* At most once: The message is sent once, and there is no acknowledgement from the recipient.
* At least once: The message is sent at least once, and the recipient sends an acknowledgement back. If the acknowledgement is not received, the message is sent again.
* Exactly once: This is the safest, but also the slowest QoS level. It ensures that the message is delivered exactly once by using a four-way handshake between the sender and receiver.

Choosing the right QoS level depends on the specific requirements of your MQTT application. It is a tradeoff between speed and reliability of message delivery.

To preview the added topic filters, click [Enable listener] (7).

![Configure MQTT](/assets/images/data-sources/mqtt-broker/en_mqtt-02.png)
