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

![The script types under [Scripts] in the explorer](/assets/images/scripting/types/script-types-01-scripts-tree.png)

From top to bottom these are [Timer] (1), [Functions] (2), [Global events] (3), [On screen activation] (4), [After data reload] (5) and [For controls] (6) – each is described below.

## Timer

A timer script has a name (1), a mode (2) and an interval in milliseconds (3). The mode determines how it fires:

* **Endless** – repeats indefinitely at the specified interval.
* **Once** – fires once after the interval, then stops.
* **Manual** – does not fire automatically; it is started from a Lua script. When started, it fires once after the configured interval as a delay.
* **On schedule** – fires according to a day-of-week and time-of-day schedule.

![A timer script with its name (1), mode (2) and interval (3)](/assets/images/scripting/types/script-types-02-timer.png)

## Functions

Here you define **reusable Lua functions**. Every script (timer, event, activation script …) runs in its own isolated scope, so a function written inside one script cannot be called from another. A function defined under [Functions] is the mechanism to share logic across all scripts and to avoid duplicated code – you write it once and call it everywhere with `MyFunction()`.

When you add a function under [Functions], the [Edit function script settings] dialog opens first:

![The function settings: name (1), return type (2), parameters (3) and the shared-function/API option (4)](/assets/images/scripting/types/script-types-05-functions.png)

* **Function name (1)** – the name under which the function is called from Lua, e.g. `FormatTemperature()`.
* **Return type (2)** – what the function returns: **None**, **String**, **Number** or **Boolean**.
* **Parameters (3)** – add any number of parameters via the [+] button. Each parameter has a name and a data type (String, Number, Boolean) and is available as a local variable inside the function body. Optionally, a parameter can be restricted with a constraint.
* **Shared function (4)** – exposes the function as a REST endpoint at `https://[Peakboard Box IP]:40405/api/functions/<name>`, so it can be triggered from outside the application. [Allow untyped] additionally relaxes the parameter typing for that API call.

Confirm with [OK] to open the script editor and write the Lua body. Parameters are available as local variables; use `return` to hand back the result. The function is then called from any other script:

```lua
-- no parameters
UpdateDashboard()

-- with parameters and a return value
local label = FormatTemperature(21.5)
```

## Global events

Global events apply to the whole application and react to input or system conditions. The `e` object inside the script carries the event-specific context. When you add a global event you choose its type from the list, which is grouped into five blocks:

![Adding a global event](/assets/images/scripting/types/script-types-03-global-events.png)

#### Swipe (1)
Fires when the user swipes on the touchscreen up, down, left or right. A swipe can alternatively be produced with the mouse. These events carry no context data.

#### Keyboard & screen input (2)
* **Key pressed** – fires on every single keystroke. `e.key` is the virtual key code, `e.modifier` the modifier key; set `e.handled = true` to suppress further processing. Useful for input from a [Presenter](/misc/en-presenter.html), keyboard or similar device.
* **Text input** – accumulates all typed characters until Enter/Return is pressed, then fires once with the full text in `e.text`. Ideal for barcode scanners and RFID readers, which send characters followed by Enter. Use `peakboard.clearinput()` to clear the buffer before a scan.
* **Screen clicked** – fires when the screen itself is clicked or tapped outside any control.

#### Script error (3)
Fires when a Lua script error occurs, so you can react to it centrally.

#### Reload of data source failed (4)
Fires when a data source refresh fails. `e.datasourcename` and `e.errormessage` describe what went wrong.

#### Call incoming / started / ended / Dial signal received (5)
VoIP/SIP telephony events. They provide the remote endpoint, caller and – for the dial signal – the received DTMF signal digit.

## On screen activation

A script defined here runs every time the corresponding screen is activated, i.e. loaded and shown. It is the right place for one-time setup of a screen.

## After data reload

This script runs after a data source has completed a refresh cycle (the data element's `Refreshed` event). Create it under [Scripts] – [After data reload] via [Add] for the corresponding data source, or by right-clicking the data source.

## For controls

Here you find all scripts created via the [Events] function of a control. An event is a specific action that a control can trigger. A selected control (1) exposes its events in the properties panel – e.g. a button's [Tapped] event (2). The [</>] button (3) opens the script editor for that event.

![A selected control (1), its [Tapped] event (2) and the script button (3)](/assets/images/scripting/types/script-types-04-for-controls.png)

The following list shows every control event and the controls that support it:

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
