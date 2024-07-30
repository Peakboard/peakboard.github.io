---
layout: article
title: Autoscroll in Lists
menu_title: Autoscroll in Lists
description: Describes how to use automatic scrolling in lists.
lang: en
weight: 158
ref: scr-158
redirect_from:
---

When displaying long lists, it is often useful to automatically scroll through them to show all entries. This can be achieved by using a `Reload` script, some variables, and the `Filter` function in a Dataflow.

## Creating a Dataflow
A Dataflow is used to filter the data and control the display of the list. To do this, a new Dataflow is created that uses the data from the data source and manipulates it to display only the desired data.

A periodic reload is then set in the Dataflow, which reloads the data at regular intervals and thus updates the list.

![Periodic Reload Interval](/assets/images/scripting/Scripting_Beispiele/list-auto-scroll/en-periodic-reload-flow.png)

The number set here later determines how quickly the page scrolls automatically or how long it takes for new data to be displayed.

## Creating Helper Variables
To control the automatic scrolling process, some helper variables are needed. These are created in the Package Explorer under `Variables`.

The following variables are necessary:
- `CurrentIndex` - stores the current index of the list
- `RangeSize` - stores the number of elements displayed at the same time
- `ScrollRange` - stores how many elements the list scrolls per scroll operation

All variables are created as `Number`. In our example, `CurrentIndex` is set to 0, `RangeSize` to 10, and `ScrollRange` to 3.

## Filtering with the Dataflow
To filter the list and display only the desired elements, a Dataflow Step is used. The Dataflow Step is set to display only the elements that are in the current scroll range.

To create a Dataflow Step, the Dataflow must first be opened. To do this, double-click on the Dataflow in the Package Explorer to open the Dataflow Editor.

Now, a new Dataflow Step can be added by clicking the `+` symbol.

![Create Dataflow Step](/assets/images/scripting/Scripting_Beispiele/list-auto-scroll/en-edit-dataflow.png)

After clicking, a new window opens where the type of Dataflow Step can be selected. Here, `Filter` is used.

![Select Filter](/assets/images/scripting/Scripting_Beispiele/list-auto-scroll/en-add-data-step.png)

To configure the filter, first, switch to `Script Mode` in the next step. Here, the script that filters the elements can be inserted.

![Switch to Script Mode](/assets/images/scripting/Scripting_Beispiele/list-auto-scroll/en-use-script-editor.png)

The script that filters the elements looks like this:

```lua
return (index < (data.CurrentIndex + data.RangeSize) and index >= data.CurrentIndex)
```

The script selectively displays elements falling within the specified range from `CurrentIndex` to `CurrentIndex + RangeSize`. For instance, in our scenario, it will show only those elements with indices between 0 and 10.

## Creating a Reload Script
A Reload Script is executed whenever data from a data source or a Dataflow changes. In our case, the Reload Script is used to adjust the variables so that a new range of the list is shown.

A Reload Script is created in the Package Explorer under `Scripts` -> `After Data Reload`.

![Create Reload Script](/assets/images/scripting/Scripting_Beispiele/list-auto-scroll/en-after-data-reload.png)

In the dialog that opens after clicking `Add`, you can select which Dataflow should trigger the Reload Script. In our case, the Dataflow that filters the list is selected.

From now on, the Reload Script is executed every time the Dataflow filters the list.

The script that then adjusts the variables works as follows:

1. It checks if the end of the list range has already been reached. If so, the index is reset to 0.
2. Otherwise, the index is increased by the value of `ScrollRange`.

Using Building Blocks, the script in our example looks like this:

![Reload Script](/assets/images/scripting/Scripting_Beispiele/list-auto-scroll/en-script-reload.png)

The script looks like this:

```lua
local lastview = false

lastview = false
if data.CurrentIndex + data.RangeSize > data.DataList.count then
   data.CurrentIndex = data.CurrentIndex + (data.DataList.count - data.CurrentIndex)
   lastview = true
else
   data.CurrentIndex = data.CurrentIndex + data.ScrollRange
end
if lastview == true or data.CurrentIndex == data.DataList.count then
   data.CurrentIndex = 0
end
```