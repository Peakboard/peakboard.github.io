---
layout: article
title: Siemens S7
menu_title: Siemens S7
description: Information about Siemens S7 Data in Peakboard
lang: en
weight: 2100
ref: dat-2100
---
In general, there are several ways to process machine data in Peakboard, e.g. via a cloud-based IoT hub (like from Azure or Google) or a MQTT server. The Siemens S7 data source enables the Peakboard-Box to be connected directly to an S7 controller. If the control network is separated from the "normal" business network in the respective environment, the box can receive a second LAN connection via USB, which is connected to the business network (e.g. for SAP access) on one side and to the S7 control network on the other.

## Prerequisites

Apart from an active network connection, a few settings still have to be made or ensured on the side of the S7 controller. First, access to the data blocks must be granted. Make sure that both general read and write access and PUT-/ GET-communication are allowed. Depending on the configuration program, these settings may look as follows:

![Protection](/assets/images/data-sources/siemens-s7/datenquelle-s7-00-protection.png)

The second aspect is the management of variables on the controller. Internal access to data blocks, flags, inputs and outputs can be either optimized or absolute. To be able to read variables from the controller with Peakboard, absolute access must be activated.

![Block Access](/assets/images/data-sources/siemens-s7/datenquelle-s7-01-block-access.png)

The following screenshot shows the raw view of a data block from the S7 programmer's point of view. The data types of the variables and the offset are relevant here. Both values are required for the configuration of the S7 data source. If the variable is in a data block, the number of the block is still required.

![Data Block](/assets/images/data-sources/siemens-s7/datenquelle-s7-02-data-block.png)


## Connecting the Peakboard-Designer

To connect Peakboard to the S7, create a corresponding data source. Enter a mandatory name, IP address, slot and rack. Models 1200, 1500, 200, 300 and 400 are currently supported when specifying the S7 CPU. The reload interval specifies how much time passes until the next data update. You can use Max Items to define the number of values that are later to be included in the table. The most current variable value always comes first in the table. It only makes sense to enter a value greater than 1 if you want to access the values before (!) the current call later in a script.

![Data Dialog](/assets/images/data-sources/siemens-s7/datenquelle-s7-03-edit-data-dialog.png)

## Variable definition

An entry must be made manually for each variable to be retrieved. To do this, a unique name must be entered, but it does not have to be the same as the variable on the controller. Furthermore, the position of the variable must be defined. This includes whether the variable is in a data block, flag, output or input (type) and the offset which specifies the memory address of the variable.

![Edit Variable Dialog](/assets/images/data-sources/siemens-s7/datenquelle-s7-04-edit-variable-dialog.png)

When defining the offset, note the special formatting features that depend on the data type.
If a variable of the data type Bit, i.e. a boolean value, is to be read, the offset must be specified in the form [Byte.Bit]. Valid values are, for example, "0.0" or "2.7".

## Bundle variables into structures

Often a controller provides a multitude of values. If you want to obtain a large number of variables, there is a risk that the data source configuration will quickly become confusing.
To avoid this problem, it is possible to bundle variables into structures and thus organize them locally or thematically.
First click on the "add custom" button.
In the following dialog, variables can be added in addition to the mandatory name. Note that a structure must contain at least two variables.

![Edit Custom Dialog](/assets/images/data-sources/siemens-s7/datenquelle-s7-05-edit-custom-dialog.png)

Variables that are stored in a structure are later displayed on an equal level with all other values in the table.
An example configuration could look like this.

![Struct Pattern](/assets/images/data-sources/siemens-s7/datenquelle-s7-06-struct-pattern.png)

All variables that are in connection with line 1 and thus on data block #3 are stored here in their own structure.

With a click on Preview, the Peakboard Designer connects to the S7 controller, retrieves the current values and visualizes them in a table.

![Preview Dialog](/assets/images/data-sources/siemens-s7/datenquelle-s7-07-preview-dialog.png)

The data source can now be used as usual in Peakboard, e.g. by binding or with the help of a script. Please pay attention: The data source refreshed event is only fired if at least one variable has changed. If all variables remain the same, NO event is triggered.

## Writing Variables

Setting values on S7 controls is only possible with Lua-Script. There are four methods, one for each type of memory. These methods can be found in the script editor under "Write to PLC" of the data source.
Note that the variable to be written does not have to be stored in the data source.

![Write Methods](/assets/images/data-sources/siemens-s7/datenquelle-s7-08-write-methods.png)

The syntax of the methods is largely identical, whereby only the essential information of the attributing variable is required.
Such a command has the following pattern:

```lua
Data.[plc].setvar( ([Datenblocknummer], )[Offset], [Datentyp], [Wert] )
```

The data block number is only required if you want to write to a data block and is specified as an integer.
The offset is specified as in the variable configuration dialog.
The same applies to the data type.
Like offset and data type, the value is specified as a character string ('value').
