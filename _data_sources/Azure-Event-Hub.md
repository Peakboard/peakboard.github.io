---
layout: article
title: Azure Event Hub
menu_title: Azure Event Hub
description: Informatinon about Azure Event Hub Data in Peakboard
lang: en
ref: dat-19
---
The following article shows the connection of Peakboard to an Azure Event Hub. In particular, this involves reacting to specific events in real time from the Peakboard. This procedure is mainly used to integrate Peakboard as part of a landscape that already exchanges events via event hubs. Peakboard subscribes to a specific hub and the events can be easily integrated into a visualization.

 

Find out how to create a hub in Azure here:

[https://docs.microsoft.com/en-us/azure/event-hubs/event-hubs-create](https://docs.microsoft.com/en-us/azure/event-hubs/event-hubs-create)

 

If you need a sample program that triggers an event in an event hub, please have a look at the following page:

[https://docs.microsoft.com/en-us/azure/event-hubs/event-hubs-dotnet-standard-getstarted-send](https://docs.microsoft.com/en-us/azure/event-hubs/event-hubs-dotnet-standard-getstarted-send)

 

To include a hub, create a new data source in the Peakboard-Designer. The following screenshot shows the settings as an example. A connection string and the name of a hub are required (instead of the name, the path can also be entered). In addition, the connection string and the container name of the Azure storage must be specified (as configured in the hub). The queue size defines the maximum number of messages in the data source, the script is also for processing (for more information see below).

 

![image_1](/assets/images/Data_Sources/Azure_Event_Hub/DatenquellenEventHub01.png)

 

Messages can generally be processed using two methods. The first option is to use a queue. All incoming messages are simply inserted into a table that works just like any other Peakboard data source. So you can attach them directly to a grid or something similar to display the messages. The table has two columns: Timestamp for the timestamp and message for the raw data of the message.

The second method is a script that is called exactly once for each incoming message. The following screenshot shows an example. The object message has two attributes: timestamp and text. The example shows how easy it is to write the last message into a text field.

 

![image_1](/assets/images/Data_Sources/Azure_Event_Hub/DatenquellenEventHub02.png)