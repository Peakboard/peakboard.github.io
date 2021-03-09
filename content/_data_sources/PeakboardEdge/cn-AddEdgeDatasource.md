---
layout: article
title: Adding a Peakboard Edge data source
menu_title: Add a Peakboard Edge data source
description: Information about adding a Peakboard Edge data source
lang: cn
weight: 2720
ref: dat-2720
redirect_from:
---

A maximum of one Peakboard Edge data source can be used in a visualization. All Peakboard Edge devices that are to be used in the visualization are stored within this data source.

![img01](/assets/images/data-sources/peakboard-edge/add01.png)

In the main window of the designer a new Edge data source can be created via the explorer: Data->Add Data Source->PB Edge.

![img02](/assets/images/data-sources/peakboard-edge/add02.png)

In the interface for managing the Edge data source, individual Edge devices are integrated that are to be used later in the visualization. 


### Adding a PB Edge:
Enter a name. This will be used later within the visualization to access the Edge Box to be added.

Select OPTIONAL Peakboard Edge. If it is already known which real Peakboard Edge is to be associated with the name, this can be selected here. If this Peakboard Edge has not yet been added in the Designer, it can be added here and in the Designer via "Add new Edge...".

The "Add" button adds a new Edge to the data source.

Edge included in the data source are displayed as separate lines. The name, as well as the assignment of the real device can be adjusted by double-clicking (if the line is already selected, a single click is sufficient) on the respective fields. 

A click on the "magnifying glass" icon opens the connection tester dialog, if a real Edge has already been added to the corresponding line.

By clicking on the "Trashcan" icon, the corresponding line (the corresponding edge) can be removed. Alternatively the currently selected line can be removed by pressing the "DEL" key.