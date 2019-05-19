---
layout: article
title: Slack
menu_title: Slack
description: Information about Slack data in Peakboard
lang: en
weight: 2500
ref: dat-2500
redirect_from:
  - /data_sources/25-en-slack.html
---
Slack is the tool of choice when it comes to communicating, discussing and coordinating tasks in teams quickly and easily. Peakboard's slack data source allows the user to retrieve messages from a channel at user-defined intervals, as is usual for Peakboard. On the other hand, messages can be read and written in real time via Slack's WebSocket and WebHook interfaces. Thus, the slack connection can not only be used to visualize chat processes, but also to communicate in real time with Peakboard boxes in the network or to let Peakboards communicate with each other.

## Prerequisites

Depending on how you want to interact with Slack, some measures are needed on its side to enable communication.
In any case, a token is required. This token is used to link a slack account with the requests of the Peakboard. This token can be created [here](https://api.slack.com/custom-integrations/legacy-tokens). The user must be logged in for this.
With this token, both the messages are retrieved via interval-controlled request and real-time communication is authorized.
Writing to the channel is currently only supported by WebHooks. These can be created by the administrator of the workspace in the menu. The navigation to the corresponding entry is shown in the following screenshots.

![image_1](/assets/images/Data_Sources/Slack/Datenquelle_Slack_00_WebHook.png)
![image_1](/assets/images/Data_Sources/Slack/Datenquelle_Slack_01_WebHook2.png)

## Setting up the data source

In addition to the mandatory name of the data source, the linchpin is the token already mentioned above. By clicking on the "Get Channel" button, the channels available for the account are requested and displayed in the drop-down menu below.

The tickbox "Show user names" replaces the user abbreviations in the results with their names. You may only want to read from the channel and evaluate the messages regardless of the station. In this case you can save some network load and use the user IDs for further processing.

The next item in the dialog provides the possibility to ignore messages of certain users. This applies to all messages received by the data source.

![image_1](/assets/images/Data_Sources/Slack/Datenquelle_Slack_03_UserList.png)

## Real-time communication

Receiving messages from slack channels in real time is the second core feature of the slack data source, alongside the standard interval-driven display of messages. Here, communication can take place via WebSockets without significant time delay. This enables the user to address single or arbitrarily large groups of Peakboard boxes with maximum flexibility.

![image_1](/assets/images/Data_Sources/Slack/Datenquelle_Slack_04_RTM.png)

Via the script, which is stored in the dialog using the "{}" button, each message can be evaluated individually according to arbitrary aspects. This allows information to be displayed or manipulated on the Peakboard with minimal delay. Writing to the channel is also possible from this script.

## Send messages to Slack via WebHooks

Another way of communication offered by Slack is WebHooks. These provide a quick and easy way to send messages directly to the configured channel via a bot.

![image_1](/assets/images/Data_Sources/Slack/Datenquelle_Slack_05_WebHookSection.png)

The script command to send text to a channel is simple and looks like this:
```lua
data.[slack].writetochannel('message')
```
Due to a bug in Microsoft's software, a WebHook is required if you want to write to a channel.

## Preview the data

To complete the setup of the data source, the structure of the slack data must now be prepared. This is done by clicking on the "Load Columns" button. In this way, the data is loaded for testing purposes and its structure is determined.
With a click on the "Preview" button you can finally view the messages from the slack channel and thus ensure that the data source is configured correctly.

![image_1](/assets/images/Data_Sources/Slack/Datenquelle_Slack_06_Preview.png)

Since the real-time communication of the data source is fundamentally different from the interval-controlled loading of the data usually used for Peakboards, "Reload Interval" and "Preview" only apply to the interval-controlled functionality of the data source. There is no way to test the real-time connection in the Peakboard Designer. However, standard communication, real time messaging and WebHooks run over the same interface. Thus, it can be assumed that the rest of the data source will also work if the preview runs successfully.