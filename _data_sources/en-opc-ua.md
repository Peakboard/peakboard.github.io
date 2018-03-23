---
layout: article
title: OPC UA
menu_title: OPC UA
description: Information about OPC UA Data in Peakboard
lang: en
ref: dat-22
---

The OPC-UA data source fits seamlessly into the series of data sources for machine communication, as well as direct access to the Siemens S7, MQTT or the Azure IoT Hub. In the case described here, Peakboard represents an OPC client that connects to an OPC server. The example in this article can be easily reproduced with the generic OPC UA server, which you can download from opcfoundation.org after registration:

[https://opcfoundation.org/developer-tools/developer-kits-unified-architecture/sample-applications/](https://opcfoundation.org/developer-tools/developer-kits-unified-architecture/sample-applications/)

Once the dashboard has been started, you will find the generic server as entry “Generic Server” on the left side. It can be started there directly. Of course, this is only necessary for a dry test. If you have a real OPC UA server in your network, you can also use it for the first steps. Ideally, however, you should be familiar with OPC UA in general and your OPC server in particular.

To start, enter the URL under which the server can be reached. Depending on the protocol used, this URL may differ from the example shown here. A click on “Get Endpoints” fills the selection box below with all possible access methods supported by the server. In particular, it deals with the question of how the subsequent transmission should be authenticated and/or encrypted. In the example, a communication method is selected that signs and encrypts the data traffic with a certificate. In addition, the data content is transmitted in binary form, which is a bit more powerful than XML and protects the network due to the lower throughput.

![image_1](/assets/images/Data_Sources/OPC_UA/DataSource_OPCUA_01.png)

In the next step you can enter a username and password if the server requires it. The Session Name text box allows you to define the session ID as it appears on the server. If, for example, several different systems or Peakboard Boxes access an OPC server, you can use the session ID to trace exactly which system or box initiated the session. If you do not have a specific session name, leave the default value.

![image_1](/assets/images/Data_Sources/OPC_UA/DataSource_OPCUA_02.png)

The next step is to specify the certificate used to encrypt and/or sign the data traffic. The next picture shows the jump to the certificate store, which is valid for the whole board. You can import the required certificates from the local hard disk or, if you do not have a certificate, you can create one yourself (“Create”button). In the event that you issue a certificate yourself, it must be published on the server. How this works depends on the server. If you use the demo software mentioned above as a test server, you can simply click on “Try Connect”. Peakboard then transfers the certificate once to the server and the server initially rejects it. You then have to mark the certificate as “known” on the server side. The connection setup then works with the second attempt, because the certificate on the server is known and valid.

![image_1](/assets/images/Data_Sources/OPC_UA/DataSource_OPCUA_03.png)

Let’s get to the last configuration step. Each OPC-UA-Datasource can subscribe to any number of items, e. g. the state of all valves of a boiler. Several items can be added to a subscription. This makes sense if the items are treated similarly later in the visualization. For example, you could combine all inlet and outlet valves into one subscription, because in the event of an error, the same red light should always come on in the board, regardless of which of the valves is currently running on a fault. The following screenshot shows exactly one subscription with one item. An item is exactly defined by the item ID and the namespace URI. The ID can be invented freely and is only used to name an item. You must know the item ID and namespace URI for the desired item and server or you can use the browse button to get a model from the server that shows all items of the model hierarchically.

![image_1](/assets/images/Data_Sources/OPC_UA/DataSource_OPCUA_04.png)

There are basically two ways of dealing with the incoming data. Like any other data source, the OPC-UA data source is simply a table in which the incoming messages of the items are appended; at least up to the queue size. The data is then removed from the table according to the FiFo principle and replaced with new data. To test a configuration, simply drag and drop the table onto the current screen. If everything is configured correctly, the table should be filled with data.

The second and more common way is to react to incoming data in an event. There is one event per subscription. The following screenshot shows a common pattern. Depending on how the value of the item is set, the message is stored in one or the other table for further processing. A square (named “status”) is set to green or red, depending on the value. The object Message has three attributes in the script: message.timestamp is a timestamp, Message.itemvalue is the value and message.item is the name of the item.

![image_1](/assets/images/Data_Sources/OPC_UA/DataSource_OPCUA_05.png)


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

You can also find the sample board for the example server of opcfoundation. org in our Github-Respository: https://github.com/Peakboard/CoolStuff
