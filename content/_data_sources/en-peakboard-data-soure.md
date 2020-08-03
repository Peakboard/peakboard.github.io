---
layout: article
title: Peakboard Data Source
menu_title: Peakboard Data Source
description: How to use Peakboard as a data source
lang: en
weight: 2800
ref: dat-2800
---

The Peakboard data source provides an easy way to share data between mutliple Peakboard Boxes. It enables the user to read and write the native variables and lists of a box from other Peakboards within the network. The possibility to expose variables and lists of Peakboard visualizations with settings the tick in the edit dialogs. With the Peakboard data source there is now a simple and straight forward way to consume and manipulate this data.

### Reading from other boxes

In this scenario the visualization running on the "Consumer" box is accessing the data on the "Provider" box for reading. It is important to understand the role of the two boxes.

#### Provider side

Since the Peakboard data source architecture is meant to provide direct communication between two Peakboard boxes, only native Peakboard variables and lists can be accessed by the Peakboard data source. The data is exposed by checking the "Can push data via API" checkbox in the respective edit dialogs.

![Activate Variable](/assets/images/data-sources/pb-datasource/pb-datasource-provider1.png)

![Activate List](/assets/images/data-sources/pb-datasource/pb-datasource-provider2.png)

#### Consumer side

The Peakboard data source is a wrapper around this consumer side API and makes the process of reading and potentially writing the data as easy as possible, while not cutting any features.
To create a Peakboard data source click on the "..." - button of the "Data" section and select "Add Data Source". 
Then select "Peakboard" to open the Peakboard data dialog. 
The data source will supply the data always in form of a table. 
It does not matter if there are hundreds of rows in a list, which is consumed or if the data source does only query one variable from the remote Peakboard box.

#### Data source configuration

First supply the obligatory name for the data source.
On the next line, select the Peakboard box, which is to be queried. 
The list of Peakboards is taken from the management dialog. 
If your box does not show up in the drop down menu, please make sure, the device was added in the management dialog.
After selecting the Peakboard, the available data sources are queried automatically. 
The user can then select, whether to query a list from the device or an arbitrary amount of scalar variables but at least one.
A Peakboard data source configuration can either return one Peakboard list or an arbitrary amount of scalar variables, which will be presented in a table with one row.

The next drop down menu lets you select the list or variables, which you want to request with the data source.

Click on "Load Data" to send a request for the current configuration to see the current state of the data sources data.

After saving by pressing the "Ok" button, the data source and its data can be used normally.

![Activate List](/assets/images/data-sources/pb-datasource/pb-datasource-consumer.png)


### Writing to other boxes

To write data to a Peakboard the [lua scripting engine](https://help.peakboard.com/scripting/en-script-engine.html) is used. 
The Peakboard data source provides a way to execute instructions on the lists and variables, which are defined in the data source. 
These instructions also provide a certain level of safety for the data over the network.

Imagine the following scenario:

In a production hall, there a three productions lines. 
Each of which is connected to a Peakboard displaying the current number of pieces manufactured this shift/day.
A fourth master Peakboard should gather these information and have a the possibility to reset the count. 
Implementing this in Peakboard was quite tedious before, since it required a lot of scripting, building the requests to set the data on the Peakboards.

Say the Peakboard variables showing the piece number on the lines are called line1qnty, line2qnty and line3qnty. 
The master Peakboard will have a data source for each of the Peakboards. They are built like described above.

The master Peakboard board will now query the values automatically and make them available in the visualization as a normal data source.

The data sources are exposing various functions via the scripting API. Thus resetting the values can be done by calling
```
data.datasource.value.set(0)
```
on the value in the respective datasource.

A list based Peakboard data source will expose the following functions:

* append(item)
* remove(index)
* insert(index, item)
* set(index, item)
* clear()

A scalar based Peakboard data source will expose the following functions:
set(value)

Depending on the type, these functions are supported:

For numbers:

* add(value)
* subtract(value)
* multiply(value)
* divide(value)
* power(value)

For strings:

* append(string)

Note that mixing operations may have unforeseeable effects, when executed from multiple Peakboards. 
For example, if the operation add(2) and multiply(2) arrive at the same time the visualization cannot know, which one should be executed first. 
In contrast subtractions and additions, for example, can be executed in arbitrary order.