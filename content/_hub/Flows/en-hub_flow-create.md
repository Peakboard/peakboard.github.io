---
layout: article
product: hub
title: Create flow
menu_title: Create flow
description: Create a Peakboard Hub flow step by step in Peakboard Designer and upload it to the Hub.
lang: en
weight: 1110
ref: hub-1110
redirect_from:
 - /hub/en-hub_flow-create.html
---

In this article you create a flow step by step in Peakboard Designer and upload it to Peakboard Hub. To learn what flows are and how they differ from regular projects, see [Flows – Introduction](/hub/Flows/en-hub_flows-introduction.html).

### Create a flow project

Open Peakboard Designer and click [New Flow project] on the start page. This creates a flow project (`*.pbfx`) that will later run in Peakboard Hub.

![New flow project on the start page](/assets/images/hub/flows/flows-01-home-new-flow-project.png)

### The flow project at a glance

A flow project contains the same building blocks as a design project – just without screens. In the Explorer you will find [Data], [Variables], [Scripts], and [Flows].

![Structure of a flow project](/assets/images/hub/flows/flows-02-project-structure.png)

### Add data sources and dataflows

Add your data exactly as in a regular project: right-click [Data] and choose [Add data source] or [Add dataflow]. The full selection of data sources is available to you.

![Add data source](/assets/images/hub/flows/flows-03-add-datasource.png)

### Build the logic in a function

You build the actual processing in a function with the Building Blocks. Create a new function under [Scripts]. In the [Publish to external systems] area you can, among other things, send results via [Email] or write them to [Peakboard Hub], [MQTT], [Siemens S7], or [SQL Server].

![Function with Building Blocks](/assets/images/hub/flows/flows-04-function-buildingblocks.png)

### Define triggers and steps

Open your flow under [Flows] and define the sequence. From the [Select triggers and steps] (4) area, drag the building blocks into the flow:

![Define triggers and steps](/assets/images/hub/flows/flows-05-trigger-and-steps.png)

1. Enter a descriptive name for your flow in the [Name] field.
2. Under [Triggers] (2), add a trigger that determines when the flow starts – for example [Periodic (sec)] with an interval in seconds.
3. Under [Steps] (3), add the steps the flow runs – such as [Run function], and select the function you created earlier.

### Connect to Peakboard Hub

Before you can upload, connect the Designer to your Peakboard Hub. Click the [Peakboard Hub] button in the top menu bar.

![Connect to Peakboard Hub](/assets/images/hub/flows/flows-06-connect-hub.png)

1. Under [Type] (1), select your Peakboard Hub. Flow projects require a Peakboard Hub on premise.
2. Enter your group key under [Group key] (2), or authenticate via [Authenticate by Username and Password] (3).
3. Confirm the connection. Once [Connection] and [Synchronization] are green, the Designer is connected.

### Upload the flow

Now click [Upload] in the top menu bar. The flow is transferred to Peakboard Hub. You will then find it in Peakboard Hub under [Peakboard Hub Flows] in the flow list, where you can follow its execution and logs.

![Flow in Peakboard Hub](/assets/images/hub/de_hub_flows-03.png)

Your flow is now created and runs in Peakboard Hub. For how to control the running flow in the Hub, see [Flows Overview](/hub/Flows/en-hub_flows-overview.html). For an overview of typical use cases, see [Flows – Use cases](/hub/Flows/en-hub_flow-use-cases.html).
