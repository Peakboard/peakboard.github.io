---
layout: article
title: Publish in external systems
menu_title: Publish in external systems
description: Information about writing to external systems
lang: en
weight: 121
ref: scr-121
redirect_from:
---

Within the [Building Blocks](/scripting/en-building-blocks.html), Peakboard offers you the option of writing data to external systems without in-depth programming knowledge. The requirement for this is an existing connection to the desired target system. You can find out how to create the corresponding connection [in the articles on the respective data sources](/data_sources/). The implementation is comparable for all Building Blocks.

### Overview of the pre-configured Building Blocks

* **Email:** Send an email with or without a screenshot and with subject and content via the Peakboard Server
**HTTP:** Send GET, POST, PUT, DELETE or PATCH requests via HTTP request
**MQTT:** Publish a standard or retain message with topic and message
**OPC UA:** Set a variable
* **Modbus:** Write a single coil or register
**Rockwell:** Write a tag for a specific program
** **Beckhoff TwinCAT 3:** Read or set a variable for a specific program
**External Peakboard Boxes:** Set values, add or remove lines in shared variable lists, set different values in shared variables and execute remote functions in shared functions
**Peakboard Hub:** Set values, add rows and lists, delete rows, send alerts, check the connection and set hub URL and group key
**Peakboard Edge:** Set output ports or play a sound
* Siemens S7:** Set data blocks, memory, inputs or outputs
**SQL:** Update, insert or delete data with non-queries, execute stored procedures or an SQL query

### Implementation using the Peakboard Hub to serve as an example

To be able to write to the corresponding system, a suitable data source must be connected. In this example, a Peakboard Hub list [QualityDataHUB] (1) has been added. It contains the columns [Day], [State] and [Line]. The [WriteToHub] function (2) was created to write data to the Peakboard Hub list.

![Peakboard Hub list](/assets/images/scripting/publish/en_publish-01.png)

The function is executed when one of the application's interactive buttons is pressed. The corresponding status is then written to the list. Scripts that publish data in an external system can be used in many different places, depending on the use case.

When you add the function, you are taken to the script editor. There you can add the appropriate building block to the workspace. For almost all building blocks, you first select which of the existing connections you want to use (1).

![Add Building Block](/assets/images/scripting/publish/en_publish-02.png)

You then enter the values that you want to publish to the external system, either manually or via additional Building Blocks.

![Add Building Block](/assets/images/scripting/publish/en_publish-03.png)

The function is now ready for use and when the button is pressed, the corresponding status is written as a new line in the Peakboard hub list.
