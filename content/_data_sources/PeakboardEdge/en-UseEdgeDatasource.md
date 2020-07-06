---
layout: article
title: Using the Peakboard Edge data source
menu_title: Using the Peakboard Edge Data Source
description: Information on how to use the Peakboard Edge data source
lang: en
weight: 2730
ref: dat-2730
redirect_from:
---

![img01](/assets/images/data-sources/peakboard-edge/use01.png)

If the Peakboard Edge data source is dragged onto the design surface, a table with all stored Edge devices and the associated information is displayed (in this view only placeholder information). Each row of the table corresponds to a Peakboard Edge. The columns correspond to the information to which the respective Peakboard Edge has access. 

Further processing within the visualization is done analogous to any other data source within Peakboards (bindings to controls, scripts, data flows, ... ). The individual Edge can be accessed either via its index in the Edge data source (visible in the interface for managing the Edge data source, starting with 0) or the specified name, in the above example "EdgeName".


### Binding to controls
To bind the content of a control (e.g. a text field) to a field from the Edge data source (e.g. the Edge name, or the text value of the Edge), access is only possible via the index. The following example illustrates this. Here the name of the Edge is to be displayed in a text field. For this purpose, "Edge" is selected as data source. Next, the column "Name" is selected within the data source. Afterwards the "Row in data source" ("Source Row") determines by which Edge the name is used.

![img02](/assets/images/data-sources/peakboard-edge/use02.png)

### Script access
In scripts individual PB Edge can be addressed by their name. This means concretely:
data.edge.<name> accesses the PB Edge with the name <name>. 
The individual columns of the Edge can be read via data.Edge.<Name>.<Column>.

There are also two functions:

Play Sound (data.Edge.<Name>.PlaySound(<NR>))

Set Output pins (data.Edge.<Name>.SetOutputPin(<NR>, <Value>)

With the PlaySound function the sound with the number <NR> can be played on the Edge (again, a USB speaker must be connected).

With the SetOutputPins function the relays for the corresponding pins can be switched. The relay with the number <NR> (0-3) is set to the value <value> (true/false).

The script accesses are also visible in the script tree, which is located in the script editor on the right side and shown in the following picture. 

![img03](/assets/images/data-sources/peakboard-edge/use03.png)
