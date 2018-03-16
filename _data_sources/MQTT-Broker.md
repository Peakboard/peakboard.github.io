---
layout: article
title: MQTT-Broker
menu_title: MQTT-Broker
description: Informatinon about MQTT-Broker Data in Peakboard
lang: en
ref: dat-18
---

The MQTT-Broker data source provides access to the subscription model of an MQTT server[^1]. Like the protocol itself, the configuration is quite simple and is shown in the following screenshot. Essentially, only the server must be specified. The specification of the port is optional, as well as the specification of user name and password (accessed via the small button with the three dots). If you don’t have a MQTT server, just use http://test.mosquitto.org/ it is open to the public.

 

![image_1](/assets/images/Data_Sources/MQTT-Broker/DatenquellenMQTT01.png)

 

There are two models for processing MQTT messages with this data source. The simplest option is the classic processing of a data source, that is, a table-like data object. Each new message is added to this table as an entry. To set a subscription to an MQTT topic, you must create it accordingly. A subscription can run on several topics. The following screenshot shows this correlation. The table-type data object has three columns: Timestamp, topic and message. Message usually contains a simple JSON string.

 

![image_1](/assets/images/Data_Sources/MQTT-Broker/DatenquellenMQTT02.png)

 

The second way to react to incoming messages is via a script. For this purpose, a script can be defined for each subscription. The user data of the MQTT message are available within the script with message.timestamp, message.topic and message.text (see also object tree on the left). If you first have to parse the plain text, just use json.parse (…).

 

![image_1](/assets/images/Data_Sources/MQTT-Broker/DatenquellenMQTT03.png)

 

# Sending Messages

 

Each MQTT source can also be used to send messages from Peakboard to the MQTT server. The following screenshot shows how it works. The function of the data object is simply as follows

 
```
Data.MeinMQTTObjekt.Publish(MeinTopic, MeineNachricht)
``` 

![image_1](/assets/images/Data_Sources/MQTT-Broker/DatenquellenMQTT04.png)

### Footnotes
---------
[^1]:
	see [https://en.wikipedia.org/wiki/MQTT](https://en.wikipedia.org/wiki/MQTT)