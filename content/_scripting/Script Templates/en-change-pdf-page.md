---
layout: article
title: Changing Pages in the PDF Control
menu_title: Changing Pages in the PDF Control
description: Describes how the page can be changed inside the PDF control
lang: en
weight: 157
ref: scr-157
redirect_from:
---

When using a PDF viewer in Peakboard, the page of the PDF document can be changed using a script. The page change can occur either automatically after a set time interval or manually via a button or event trigger.

## Manual Page Change
A manual page change can be triggered by an event or by pressing a button. To implement page changes via button click, a button is placed in the designer and a `Click` event is created that triggers when the button is pressed. The script executed by the event will then change the page of the PDF document.

The page change is implemented using the `shownextpage` method of the PDF viewer. When creating the script with Building Blocks, you can use the `Show Next Page` block found under `Screens` -> `PDF Control` -> `Show Next Page`.

![Page change on button click](/assets/images/scripting/Scripting_Beispiele/pdf-page-change/en-script-show-next-page.png)

The script for changing the page of the PDF document looks like this:

```lua
-- Page change on button click
screens['Screen1'].PDF_Control.shownextpage()
```

To change to the previous page in the PDF file, use the `showpreviouspage` method or the corresponding Building Block.

```lua
-- Change to the previous page on button click
screens['Screen1'].PDF_Control.showpreviouspage()
```

## Manual Page Change with Limitation
If no page number limitation is implemented, calling the `shownextpage` method will display the first page of the PDF document again when the last page is reached. To prevent this, the current page number is stored in a variable, and when the last page is reached, no further page change is made.

Here is a solution for this:

![Limiting pages](/assets/images/scripting/Scripting_Beispiele/pdf-page-change/en-script-show-next-page-with-limit.png)

When using script mode, this script can be used:

```lua
if data.CurrentPageNumber > 1 then
   data.CurrentPageNumber = data.CurrentPageNumber - 1
   screens['Screen1'].PDF_Control.showpreviouspage()
end
```

## Automatic Page Change
Similar to manual page change with limitation, an automatic page change is also implemented using a variable that stores the current page number. The difference is that the page change occurs automatically after a set time interval.

Additionally, a Boolean variable `AutomaticChange` is used to determine whether automatic page change is enabled or not.

### Creating a Timer
To implement automatic page change, a timer is created that regularly calls the `shownextpage` method of the PDF viewer and increments the current page number. To create a timer, add a new timer under `Scripts` -> `Timer` in the Package Explorer. Right-click to open a context menu and select `Add`.

![Creating a new timer](/assets/images/scripting/Scripting_Beispiele/pdf-page-change/en-create-new-timer.png)

Once the timer is created, define the script that will be executed when the timer expires. The script increments the current page number and changes the page of the PDF document.

![Timer script](/assets/images/scripting/Scripting_Beispiele/pdf-page-change/en-script-automatic-page-change.png)

The script for automatic page change looks like this:

```lua
if data.AutomaticChange == true then
   if data.CurrentPageNumber >= data.PagesCount then
      data.CurrentPageNumber = 1
   else
      data.CurrentPageNumber = data.CurrentPageNumber + 1
   end
   screens['Screen1'].PDF_Control.page = data.CurrentPageNumber
end
```

### Starting and Stopping the Timer
To start and stop the timer, a toggle switch is added to the designer interface, and an `IsActive` event is created that triggers when the toggle is activated. The script executed by the event sets the Boolean variable `AutomaticChange` to `true` or `false` to enable or disable the automatic page change.

![Starting and stopping the timer](/assets/images/scripting/Scripting_Beispiele/pdf-page-change/en-automatic-change-toggle.png)