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

![Peakboard Edge data source](/assets/images/data-sources/peakboard-edge/en_edge-use_01.png)

If you drag the Peakboard Edge data source onto the workspace, you will get, for example, a table (1) with all Peakboard Edge stored in the data source and the corresponding information (in this view only placeholder information). Each row of the table corresponds to a Peakboard Edge. The columns correspond to the information to which the respective Peakboard Edge has access. Alternatively, you get a text control (2) with the name of the Peakboard Edge as the value.

Further processing within the visualization is done similarly to any other data source within the Peakboard Designer. For example, binding to controls, scripts or dataflows. The individual Peakboard Edge can be accessed either by their index in the Peakboard Edge data source or by the specified name, in the above example [EdgeName].

### Binding to Controls

To bind the content of a control, e.g. a text field, to a field from the Peakboard Edge data source, e.g. the Peakboard Edge name, or the text value of the Peakboard Edge, access is only possible via the index. The following example is used for this purpose. You want to display the name of the Peakboard Edge in a text field. To do this, select Peakboard Edge as the data source (1). Furthermore, you select the column [Name] (2) within the data source. Afterward you determine with [Row] (3) from which Peakboard Edge the name is used.

![Bind to control](/assets/images/data-sources/peakboard-edge/en_edge-use_02.png)

### Script access

In scripts, you can access individual Peakboard Edge by their name.

Specifically, this means:
data.Edge.<Name> accesses the Peakboard Edge with the name <Name>.
You can read the individual columns of the Peakboard Edge using data.Edge.<name>.<column>.

In addition, there are two functions:

Play Sound (data.Edge.<Name>.PlaySound(<NR>))

Set Output pins (data.Edge.<Name>.SetOutputPin(<NR>, <value>)).

You can use the PlaySound function to play the sound with the number <NR> on the Peakboard Edge. Again, this requires a USB speaker to be connected.

With the SetOutputPins function you can switch the relays for the corresponding pins. Here, the relay with the number <NR> (0-3) is set to the value <value> (true/false).

The script accesses can also be seen from the script tree, which is located in the script editor on the right side and shown in the following image.

![Script Editor](/assets/images/data-sources/peakboard-edge/en_edge-use_03.png)

In addition to accessing the Peakboard Edge data source, it is often useful to create a refreshed script on a Peakboard Edge data source. This is a script that is triggered whenever something changes on the Peakboard Edge.

The [This event] section allows you to access the new values.
Under [Peakboard Edge Name] you will find the name of the Peakboard Edge in the Peakboard Edge data source that caused the change.
In [Data] you will find the new values within the data change.
In [Was value refreshed] you can see via boolean values if this value has caused the data change, i.e. the refreshed script.
