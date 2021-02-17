---
layout: article
title: Peakboard Edge
menu_title: Peakboard Edge 
description: Information about Peakboard Edge
lang: en
weight: 2700
ref: dat-2700
redirect_from:
---

![Peakboard Edge](/assets/images/data-sources/peakboard-edge/peakboard-edge_technical-details_en.png)

Peakboard Edge serves as an interface between inputs and outputs and a Peakboard Box. 

One (or more) Peakboard Edge are located in the network and communicate with one (or more) Peakboard Enterprise Boxes. The box can receive information from or send information to the Peakboard Edge. The Peakboard Edge in turn provides various connection options.

{% include styled_table.html %}
| Connection | Number | Info |
|-----------------------|---------------------------|---------------------|
| RJ45 (Ethernet) | 1 | To integrate the PB Edge into a network |
| USB | 2 | To connect an input/output device or a WLAN dongle|
|Micro USB | 1 | Power supply |
|Terminal Strip (IN) | 4 current outputs a 3.3 V, 4 inputs| Are divided into pairs. Edge detects the state of the inputs |
| Terminal Strip (OUT) | 4 switchable current pins (up to 24V), 1 current input | 4 switchable pins can be controlled via the Edge so that the current from the current input is applied to them |


The following devices, for example, can be connected to these connection options:


### inputs

{% include styled_table.html %}
| Input Device | Connection |
|-------------------|-------------------|
| Push Button | Terminal Block |
|(Binary) Sensor | Terminal Block |
| Keyboard | USB |
| Barcode Scanner | USB |
| RFID Reader | USB |


### Outputs

{% include styled_table.html %}
| Output device | Connection |
|-------------------|-------------------|
| Traffic Light | Terminal Block |
| Signal Light | Terminal Block |
| Speakers | USB |


By means of a visualization on a Peakboard Enterprise Box, the information from the input devices on a Peakboard Edge can be displayed on a screen or stored in a database. At the same time the information can be processed. The output devices on a Peakboard Edge can also be controlled via the visualization. 

The following steps provide an overview of how Peakboard Edge can be used. It is possible to use Peakboard Edge in combination with Peakboard 1 and Peakboard 2.