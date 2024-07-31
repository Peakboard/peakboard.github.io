---
layout: article
title: Sending via MQTT
menu_title: Sending via MQTT
description: Describes how to send messages via MQTT.
lang: en
weight: 172
ref: scr-172
redirect_from:
---

MQTT allows you to send messages with a defined topic to a broker. The broker then distributes the messages to the subscribers of the respective topic.

## Sending MQTT Messages
There are two types of messages: Default Messages and Retained Messages. The difference is that Default Messages are received only by current subscribers. Retained Messages are also sent if there was no subscription for the topic at the time the message was sent.

<div class="box-tip" markdown="1">
**Hint:**

If a shared MQTT connection already exists, you can skip the next step and use the existing connection.
</div>

To send MQTT messages, an MQTT data source must be created. You will need the hostname of the MQTT broker and its port (default is 1883). Note that authentication via certificate or username and password may be required.

Next, you can create a button in the application and assign it a Tapped event. In this Tapped event, you can use the following blocks or script:

### Building Blocks
In block mode, you can use the `MQTT Publish` block. This can be found under: `Functions` -> `Publish to external systems` -> `MQTT`. In this block, you need to select an MQTT data source and the message type (default or retained). Additionally, you need to attach the topic and message in the form of text or a string variable to the block.

![Sending an MQTT Message](/assets/images/scripting/Scripting_Beispiele/error-handling/de-mqtt-example.png)

### Lua Script
Sending Default Messages in script mode is possible with the following code:

```lua
connections.getfromid('{Your Connection ID}').publish('{Topic}', '{Message}')
```

To send Retained Messages, you can use this script:

```lua
connections.getfromid('{Your Connection ID}').publishretain('{Topic}', '{Message}')
```