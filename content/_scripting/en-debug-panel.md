---
layout: article
title: The debug panel in the preview
menu_title: Debug panel
description: Analyse data sources, dataflows and scripts while the application is running - directly next to the preview of the Peakboard Designer.
lang: en
weight: 115
ref: scr-115
---

The preview shows you what your application looks like. The debug panel shows you **why** it looks like that: which rows a data source really delivered, how long its last load took, what a dataflow made of them, and which error a script ran into. It runs next to the live application, so you no longer have to write values into the log to find out what is going on.

### Opening the debug panel

Start the preview of your project. In the bar at the top edge of the preview window you will find the buttons of the Peakboard Runtime:

* **[Toggle Fullscreen Mode]** - switches the preview to full screen. `CTRL + F` enters full screen, `ESC` leaves it again.
* **[Show log]** - shows and hides the log. The icon turns red as soon as errors have been logged, so you see a problem without opening the log.
* **[Show Data]** - opens the debug panel. The shortcut `CTRL + D` toggles it as well.
* **[Close Runtime]** - ends the preview.

The debug panel is meant for testing, so it is not offered on a productive device: in the preview of the Peakboard Designer it is always available, on a Peakboard Box only when debug mode is switched on for that Peakboard Box.

### The data explorer

The panel opens on the right-hand side, next to your running application. The separator between the two halves can be dragged, so you decide how much room the application keeps. The button in the header of the panel detaches it into a window of its own - useful on a second monitor or when the application is to be seen at its full size. The button in the detached window puts it back.

On the left of the panel is the data explorer with the same structure as the explorer of the Peakboard Designer, but filled with the state of the running application: data sources, dataflows, variable lists, timer scripts, functions and reload scripts.

### What an entry tells you

Select an entry and you get its current state:

* the **data** it holds right now, row by row,
* the number of **rows** - the fastest answer to "does it deliver anything at all?",
* the **average loading time**, the **loading time of the last reload** and the time of the **last reload**, and
* for dataflows, timer scripts, functions and reload scripts an **Errors** area with the errors of exactly that entry.

The values are the live values of the running preview. If a data source reloads while the panel is open, you watch it happen.

For variables and variable lists the panel additionally shows the time of the **last change** per entry, which is what you need when a value is written from several places and you want to know whether your script was the one that wrote it.

### Taking values out of the panel

Right-click a cell and choose **[Copy]** to put its value on the clipboard. That is the short way to move a value the application actually received into a script, a filter or a support ticket, instead of typing it off the screen.

<div class="box-tip" markdown="1">
**Tip:**

For an application that already runs on a Peakboard Box you do not need the preview: the [data debugger](/administration/en-data-debugger.html) shows the same data of the running device from the Peakboard Designer.
</div>
