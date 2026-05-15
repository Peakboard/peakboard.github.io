---
layout: article
title: Script Types
menu_title: Script Types
description: Information about the script types available in the Peakboard Designer
lang: en
weight: 901
ref: scr-901
redirect_from:
---

Peakboard uses Lua as its scripting language. Scripts are always attached to one of the following script types, which determine *when* a script runs. They appear as folders under [Scripts] in the explorer.

## Timer

A timer script runs on a schedule – either repeatedly in a constant rhythm or once. Every timer has an interval (in milliseconds) and a mode:

* **Endless** – repeats indefinitely at the specified interval.
* **Once** – fires once after the interval, then stops.
* **Manual** – does not fire automatically; it is started from a Lua script. When started, it fires once after the configured interval as a delay.
* **On schedule** – fires according to a day-of-week and time-of-day schedule.

## Functions

Here you define reusable Lua functions that can be called from any other script. Each script runs in its own isolated scope, so a function defined inside one script cannot be called from another – shared functions are the mechanism for sharing logic across timers, events and activation scripts, and for avoiding duplicated code.

## Global events

Global events apply to the whole application and react to input or system conditions. The `e` object inside the script carries the event-specific context.

#### Swiped (Up / Down / Left / Right)
Fires when the user swipes on the touchscreen in the respective direction. A swipe can alternatively be produced with the mouse. These events carry no context data.

#### Key pressed
Fires on every single keystroke. `e.key` is the virtual key code, `e.modifier` the modifier key; set `e.handled = true` to suppress further processing. Useful for input from a [Presenter](/misc/en-presenter.html), keyboard or similar device.

#### Key input
Accumulates all typed characters until Enter/Return is pressed, then fires once with the full text in `e.text`. Ideal for barcode scanners and RFID readers, which send characters followed by Enter. Use `peakboard.clearinput()` to clear the buffer before a scan.

#### Script error
Fires when a Lua script error occurs, so you can react to it centrally.

#### Data source update failed
Fires when a data source refresh fails. `e.datasourcename` and `e.errormessage` describe what went wrong.

#### Call incoming / Call started / Call ended / VoIP signal received
VoIP/SIP telephony events. They provide the remote endpoint, caller and – for `VoIP signal received` – the received DTMF signal digit.

## On screen activation

A script defined here runs every time the corresponding screen is activated, i.e. loaded and shown. It is the right place for one-time setup of a screen.

## After data reload

This script runs after a data source has completed a refresh cycle (the data element's `Refreshed` event). Create it under [Scripts] – [After data reload] via [Add] for the corresponding data source, or by right-clicking the data source.

## For controls

Here you find all scripts created via the [Events] function of a control. An event is a specific action that a control can trigger. The following list shows every control event and the controls that support it:

#### Tapped (Button, Text, Text field, Rectangle, Image, Icon)
Fires when the control is activated via touch, mouse or similar input.

#### TextChanged (Text field, Date picker)
Fires when the text input of the control changes.

#### SelectionChanged (Dropdown list)
Fires when a new item is selected in the dropdown list.

#### Checked / Unchecked (Toggle button, Checkbox, Radio button)
`Checked` fires when the control's state changes from False to True, `Unchecked` when it changes from True to False.

#### Toggled (Toggle button, Checkbox)
Fires when the control's state changes in either direction (False → True or True → False).

#### ValueChanged (Slider)
Fires when the value of the slider changes.

#### DataRowLoaded / CellTapped (Table)
`DataRowLoaded` fires whenever a new table row is loaded; `CellTapped` fires when a cell within the table is activated via touch, mouse or similar input.

#### ElementDropped (List view, Tile view)
Fires when an element is dropped within the list or tile view (drag-and-drop reordering).

#### AppointmentTapped / EmptySpaceTapped (Scheduler)
`AppointmentTapped` fires when an appointment is activated; `EmptySpaceTapped` fires when an empty area of the scheduler is activated.
