---
layout: article
title: Siemens S7
menu_title: Siemens S7
description: Information about Siemens S7 Data in Peakboard
lang: en
weight: 2500
ref: dat-2500
redirect_from:
  - /data_sources/21-en-siemens-s7.html
---

Peakboard offers you several ways to process machine data, e.g. via a cloud-based IoT hub (such as from Azure or Google) or an MQTT server. The Siemens S7 data source allows you to connect the Peakboard Box directly to an S7 controller.

## Prerequisites

Apart from an active network connection, a few settings still have to be made or ensured on the side of the S7 controller. First, access to the data blocks must be granted. Make sure that both general read and write access and PUT-/ GET-communication are allowed. Depending on the configuration program, these settings may look as follows:

![Protection](/assets/images/data-sources/siemens-s7/datenquelle-s7-00-protection.png)

The second aspect is the management of variables on the controller. Internal access to data blocks, flags, inputs and outputs can be either optimized or absolute. To be able to read variables from the controller with Peakboard, absolute access must be activated.

![Block Access](/assets/images/data-sources/siemens-s7/datenquelle-s7-01-block-access.png)

The following screenshot shows the raw view of a data block from the S7 programmer's point of view. The data types of the variables and the offset are relevant here. Both values are required for the configuration of the S7 data source. If the variable is in a data block, the number of the block is still required.

![Data Block](/assets/images/data-sources/siemens-s7/datenquelle-s7-02-data-block.png)

## Connecting in the Peakboard Designer

To connect Peakboard to the S7, create a data source under [Data], [Add data source], [Siemens S7] (1).

![Add data source](/assets/images/data-sources/siemens-s7/en_s7_add-datasource.png)

Enter a name (2), the IP address (3), rack (4) and slot (5). The reload interval (6) specifies how much time elapses until the next data update.

![Configure data source](/assets/images/data-sources/siemens-s7/en_s7_configure-datasource.png)

## Variable definition

For each variable to be retrieved you have to make an entry manually. To add a new variable, click on the [+] symbol (7). You have to choose a unique name (8), but it does not have to be the same as the variable on the controller. Furthermore you have to define the position of the variable. This includes whether the variable is in a data block, flag, output or input (Type) and the offset, which specifies the memory address of the variable.

![Add variable](/assets/images/data-sources/siemens-s7/en_s7_add-variable.png)

When defining the offset, you have to consider special formatting features, which depend on the data type. If you want to read a variable of the data type Bit, i.e. a Boolean value, you have to specify the offset in the form [Byte.Bit]. Valid values are for example [0.0] or [2.7].

## Writing variables

Setting values on S7 controllers is possible only with Lua script. There are four methods for this, one for each type of memory. These methods can be found in the script editor under [FUNCTIONS], [Publish to external system], [Siemens S7], [Write to PLC].
Note that the variable to be written does not have to be stored in the data source.

![Write variables](/assets/images/data-sources/siemens-s7/en_s7_write-variable.png)

The syntax of the methods is largely identical, whereby only the essential information of the variable to be written to is required.

Such a command has the following pattern:

``lua
data.[plc].setvar( ([data block number], )[offset], [data type], [value] )
```

The data block number is only needed if a data block is to be written to and is specified as an integer. The offset is specified as in the variable configuration dialog. The same applies to the data type. The value is specified, like offset and data type, as a string ('value').
