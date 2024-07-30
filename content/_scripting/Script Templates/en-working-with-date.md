---
layout: article
title: Time and Date Calculations
menu_title: Time and Date Calculations
description: Calculate and manipulate time and date.
lang: en
weight: 156
ref: scr-156
redirect_from:
---

Various manipulation options are available.

To work with the current date/time, a data source of the type "time" must be created. Within Peakboard, times/dates are handled as strings, which means that a conversion via script is always necessary.

## Calculate Time and Date

For example, if you want to subtract 7 days from the current date, the current date must be stored in a variable, for example ```ManipulatedTime```, and then converted to a date format. Afterwards, ```-7``` is subtracted using the date addition function. To obtain a human readable result, the result is then converted into a formatted string.

Below is the implementation with Peakboard Building Blocks.

![Substract_Date](/assets/images/scripting/Scripting_Beispiele/working-with-date/en-script-substract-date.png)

As well as with a regular Lua script.

```lua
local parsedDate = date.parse(data.ManipulatedTime, 'yyyyMMddHHmmss')
local adjustedDate = date.addday(parsedDate, -7)
data.ManipulatedTime = date.tostring(adjustedDate, 'yyyyMMddHHmmss')
```

## Caculate Time and Date differences

For calculating a time difference, a similar approach is required. The subtraction function is used to subtract the current time from the target time. The result is output in seconds. To obtain a different interval, the result must be divided by, for example, 60 to get the difference in minutes. This is shown in the following screenshot using Peakboard Building Blocks.

![Date_diff](/assets/images/scripting/Scripting_Beispiele/working-with-date/en-script-date-diff.png)

Similarly, in the following script, the date string from the variable ```ManipulatedTime``` is converted into a date. The difference to the current date from the data source ```Source_TimeCurrent``` is then calculated and the result is converted into whole days.

```lua
local parsedDate = date.parse(data.ManipulatedTime, 'yyyyMMddHHmmss')
local dateDifference = date.difference(parsedDate, data.Source_TimeCurrent.getluadate())
data.TimeDifference = math.floor(((dateDifference / 60) / 60) / 24)
```