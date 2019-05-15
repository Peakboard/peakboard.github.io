---
layout: article
title: OPC UA
menu_title: OPC UA
description: Information about OPC UA Data in Peakboard
lang: en
ref: dat-22
redirect_from: /en/datasources-mqtt-broker/
---

Just like the direct access to the Siemens S7, MQTT or the Azure IoT Hub, the OPC UA data source fits seamlessly into the collection of machine data connections. In the case described here, Peakboard is an OPC UA client that connects to an OPC UA server. The example in this article can be easily followed with the generic OPC UA "Reference Server", which you can download from [opcfoundation.org](https://opcfoundation.org/developer-tools/samples-and-tools-unified-architecture) after registration.

The zip file contains various applications. These include the so-called "Reference Server", which you can start by double-clicking on the executable in the directory. Of course, this is only necessary for a test "in the dry". If you have a real OPC UA server in your network, you can also use it for the first steps. Ideally you are familiar with OPC UA in general as well as with your OPC UA server in particular.

To start, enter the URL at which the server can be reached. Depending on the security settings used, this URL may differ from the example shown here. A click on "Get Endpoints" fills the box below with all possible access types supported by the server. In particular, the question is how to authenticate and/or encrypt the later transmission. In the example, a communication type is selected that does not apply any security measures. In addition, the data content is transmitted in binary form, which in contrast to XML is somewhat more powerful and protects the network due to the lower throughput.

![image_1](/assets/images/data-sources/opc-ua/data-source-opc-ua-01.png)

In the next step the authentication can be set. In most cases, such as MicroEmbedded OPC UA servers, Anonymous is used. It is also possible to log in with a user name and password or to specify a password protected certificate which is used for identification.

![image_1](/assets/images/data-sources/opc-ua/data-source-opc-ua-02.png)

The next step is to specify the certificate with which the Peakboard application, i.e. your visualization, uniquely identifies itself to the server and, if necessary, establishes the encrypted connection. The next picture shows the jump to the certificate store, which is available for the whole OPC UA connectivity. You can import the desired certificates from the local hard drive or - if you do not have a certificate - you can create one yourself ("Create" button). If you issue a certificate yourself, it must be made known on the server. How this is done depends on the server. In this test scenario, you can simply select None:None:Binary as the endpoint (number 3 in the first screenshot) and leave "Anonymous" set as the authentication method. This ensures that the server allows any connection.

![image_1](/assets/images/data-sources/opc-ua/data-source-opc-ua-03.png)

Let's move on to the final configuration step. After all, data should be received from the server. There are two ways to do this: First, you can use one or more subscription(s) to ensure that the visualization always receives a notification as soon as a value changes. This variant is as close to real-time communication as the computing power and the network allow. Each OPC UA Datasource can subscribe to any number of items in any number of subscriptions. The server of the OPC Foundation provides a node "Simulation" in its configuration. It contains countless variables of various data types. In addition, the values change randomly in about once per second, which is a good idea for subscriptions. On a logical level, the use of subscription makes sense if the data of the variables is to be handled in the same way. One could, for example, combine all error codes provided by the server into one subscription, since the same red light should always light up in the board in the event of an error, regardless of which error is currently occurring. To add variables to a subscription, you can simply use the browse dialogs to select all the data points you need. The following screenshot shows the way from creating a subscription to selecting the desired variables.

![image_1](/assets/images/data-sources/opc-ua/data-source-opc-ua-04.png)

In principle, there are two ways of dealing with the incoming data. The OPC-UA data source, like any other data source, is simply a table in which the incoming messages of the items are appended; at least up to the queue size. The data is then removed from the table according to the FiFo principle and replaced with new data. To test a configuration, the table can simply be dragged and dropped onto the current screen. If everything is configured correctly, the table should fill with data.

The second and more common way is to react to incoming data in a script. One script can be attached to each subscription. The same applies to the data set of variables that is created by the cyclic reading process. The following screenshot shows a common use case. Depending on how the value of the item is set, the message is stored in one or the other table for further processing. A square (called "status") is set to green or red depending on the value. In the case of subscriptions, please note that this script is always executed in the context of the variable that is currently receiving a new value. The information concerning this context can be found in the "Message" object. An overview of all data points of the object can be found in the script editor on subscription level in the tree on the left side. The new value can be retrieved with message.itemvalue and message.itemid the name with the path is available on the server.

![image_1](/assets/images/data-sources/opc-ua/data-source-opc-ua-05.png)

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

Among many other possibilities OPC UA also offers the use of methods. Peakboard also covers this aspect of the protocol. In the lower part of the data source dialog you can search for methods offered by the OPC UA server using the browse dialog. Once the desired method has been selected, i.e. connected to the data source, all relevant information can be viewed by clicking on "Show". This also includes the data types of the values that the method may need or return for execution.

![image_1](/assets/images/data-sources/opc-ua/data-source-opc-ua-06.png)

The above screenshot shows the execution of such a method in the script. All connected methods can be selected in the script editor as subitems of the data source node. A double-click on the desired method creates the code that executes the method. Of course, this code lacks the correct context. You must then define or modify variable names and/or values.