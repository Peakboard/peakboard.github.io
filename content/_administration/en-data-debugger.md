---
layout: article
title: Data debugger
menu_title: Data debugger
description: Inspect and debug the data of a running Peakboard Box remotely from the Peakboard Designer.
lang: en
weight: 820
ref: admin-820
---

When an application behaves differently on the Peakboard Box than it did in the preview, the cause is almost always the data: a data source returns nothing, a dataflow filters too much, or a script fails only with the values that occur on site. The data debugger lets you look at exactly that data — live on the running Peakboard Box, from your desk.

### Opening the data debugger

Click the Peakboard Box icon in the menu bar to open the Peakboard Box settings, select the desired Peakboard Box on the left and switch to the [Data debugger] tab.

The Peakboard Box has to be online and reachable. The tabs of the dialog stay disabled for a Peakboard Box that is currently not available.

The data debugger works over both connection paths of the Peakboard Designer:

* over the **local network**, directly to the Peakboard Box, and
* over the **cloud connection**, if the Peakboard Box is connected through the Peakboard Hub online.

You therefore do not need to be in the same network as the Peakboard Box.

### Inspecting data

On the left you will find the data explorer — the same structure you know from the Peakboard Designer explorer, but filled with what is actually on the Peakboard Box: data sources, dataflows, variables and scripts.

Select an entry and the data debugger fetches its current state from the Peakboard Box and shows:

* the **data** the entry currently holds, row by row,
* the **number of rows**,
* the **last load time**, the **average load time** and the time of the **last reload**, and
* an **Errors** area with the errors that occurred for this entry.

This is the fastest way to answer the question that matters in a support case: does the Peakboard Box actually receive the data you expect?

### Triggering a reload

You do not just watch — you can also trigger the selected entry on the Peakboard Box. The data source is reloaded or the dataflow is recalculated on the device, and the preview shows the result right away. That way you can check whether a data source recovers after a network problem without restarting the whole application.

### The script debugger

For dataflows, timer scripts, functions and reload scripts the data debugger additionally shows the **Script debugger**. It displays the script that is running on the Peakboard Box. If the script expects parameters, you can enter values for them and start it with [Run script].

The script runs **on the Peakboard Box**, not on your computer — with the data, the network access and the peripherals of the device. Errors are listed underneath. This is what makes it possible to reproduce problems that only occur on site.

<div class="box-tip" markdown="1">
**Tip:**

Because the script really is executed on the device, a script that writes to a database or sends an email will also do so from here. Be aware of that when debugging a productive Peakboard Box.
</div>
