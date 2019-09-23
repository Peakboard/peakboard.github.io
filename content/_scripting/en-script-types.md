---
layout: article
title: Peakboard Script Types
menu_title: Peakboard Script Types
description: Informatinon about the Peakboard Script Types
lang: en
weight: 103
ref: scr-103
redirect_from:
---

The following overview describes the types of scripts available with Peakboard.

## Timer
Timer scripts are always used when an action is to be performed in a constant rhythm or once.

## Golbal Functions
Here you can define functions that are to be called several times by different methods.

## Global Events
Like the global functions, global events can be called at any time using different methods.

This includes classic inputs via external input devices such as touch screen monitors, keyboards, mice or [Presenter](/misc/en-presenter.html).

* Swiping
The input is usually made via a touch screen monitor. Alternatively, the wipe effect can also be generated using a mouse.
* Key Pressed
This script is executed whenever a key is pressed on an input device. Our [example for changing screens using a standard presenter](/misc/en-presenter.html) clearly illustrates how this type of script is used.
* Key Input
* Script Error
* Data source update failed

## On Screen Activation
As the name suggests, a script defined here will always be executed when the corresponding screen is loaded for the first time.

## On Data Refresh
This script is executed whenever new data has been loaded for the data source. 

Such a script can be created by adding an update script either under Scripts - When updating data by clicking Add for the corresponding data source or by right-clicking on the data source.

## For controls

Here you can find all scripts that were created using the Events function of a control.

These events are certain actions that can be triggered with the help of a control.

The following list contains all events possible with Peakboard as well as the corresponding controls.

* Tapped (Text, Image, Rectangle, Excel Diagram, Text Field, Button, Repeat Button)
This event is executed when the corresponding control is activated via touch, mouse or similar input.

* DataRowLoaded (table grid)
This event is always executed when a new row of a table is loaded.

* CellTapped (table grid)
This event is executed when a cell within the table is activated via touch, mouse or similar input.

* TileChanged (Live Tile Box)
* RightTapped (image)
* DoubleTapped (image)
* TextChanged (text field)
* Checked (Toggle Button, Check Box, Radio Button)
* Unchecked (Toggle Button, Check Box, Radio Button)
* Toggled (toggle switch)
* SelectionChanged (dropdown list)
* ValueChanged (Slider)