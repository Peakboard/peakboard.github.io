---
layout: article
title: Modbus
menu_title: Modbus
description: Connecting a Modbus data source in the Peakboard Designer
lang: en
weight: 2450
ref: dat-2450
redirect_from:
---
Modbus is an open communications protocol.
With Modbus, a client such as Peakboard and several servers can be connected.
The Peakboard Designer uses the Modbus/TCP mode for data transmission.
Much more information about Modbus can be found at [Modbus.org](https://modbus.org).

To connect the Modbus data source, select the data source [Modbus] under [Add Data Source]. (1)

![Add Modbus data source](/assets/images/data-sources/modbus/en_modbus-add.png)

In the following dialog you fill the fields in the [Connection] section with the corresponding server data (slave). (2)

In the area [Specify] (3) you can choose between four different read modes:
* Read Coils
* Read Discrete Inputs
* Read Holding Registers
* Read Input Registers

Here you also select the start address and the number of data points to be read.

To check the plausibility of the data click on the button [Load Data] to generate a preview. (4)

![Configure Modbus data source](/assets/images/data-sources/modbus/en_modbus-config-01.png)

After that you confirm the creation of the data source by clicking the [OK] button. (5)

![Configure Modbus data source](/assets/images/data-sources/modbus/en_modbus-config-02.png)