---
layout: article
title: Create date
menu_title: Create date
description: Information about creating a date in Lua scripting
lang: en
weight: 350
ref: scr-350
redirect_from:
---

To create a date in Lua you can use the function `os.date`.
The function `os.date` allows you to format a date and time according to a certain pattern and returns it as a string.

This is how you can create a date in Lua:

```lua
local year = 2023
local month = 7
local day = 25
local hour = 12
local minute = 30
local second = 0

local date = os.date("%Y-%m-%d %H:%M:%S", os.time({year=year, month=month, day=day, hour=hour, min=minute, sec=second}))
print(date) -- Output: "2023-07-25 12:30:00"
```

In this example, you use the function `os.time` to convert the given date components (year, month, day, hour, minute, and second) into a timestamp indicating the number of seconds since January 1, 1970, 00:00:00 UTC. Then you use the function `os.date` with the appropriate formatting pattern ("%Y-%m-%d %H:%M:%S") to format the timestamp into a string representation of the date.

You can customize the format pattern in the `os.date` function to display the date in different formats according to your needs. Here are some common format specifiers:

* `%Y`: year with century as decimal (e.g. "2023")
* `%m`: month as decimal number (e.g. "07")
* `%d`: day of the month as decimal number (e.g. "25")
* `%H`: hour (00-23) as decimal number (e.g. "12")
* `%M`: minute (00-59) as decimal number (e.g. "30")
* `%S`: second (00-59) as decimal number (e.g. "00")

You can use these format specifications to create custom date formats to suit your specific needs.

Note that the `os.date` function uses the local time zone and system settings for date and time formatting. If you need to work with dates in different time zones or perform more complex date manipulations, you should use Peakboard's custom format library.

## Basic date functions

1. `date.create(2018, 12, 31, 12, 30, 00)`

You can use this function to create a new date object with the given values for year, month, day, hour, minute and second. Similar to `os.date`.

2. `date.tostring(906000490, 'yyyMMdd')`

This function converts a numeric representation of a date (in seconds since January 1, 1970) into a formatted string representation based on the specified format.

**Example with `log()`:**

```lua
local formattedDate = date.tostring(906000490, 'yyyyMMdd')
log("Formatted Date: " .. formattedDate)
```

3. `date.parse('20171231', 'yyyyMMdd')`

This function parses a string representation of a date based on the specified format and converts it to a numeric representation (seconds since January 1, 1970).

**Example with `log()`:**

```lua
local numericalDate = date.parse('20171231', 'yyyyMMdd')
log("Numerical Date: " .. numericalDate)
```

4. `date.addyear(data.mydate.getluadate(), 2)`

This function adds a given number of years to a given date object.

5. `date.addday(data.mydate.getluadate(), 2)`

This function adds a given number of days to a given date object.

6. `date.addmonth(data.mydate.getluadate(), 2)`

This function adds a given number of months to a given date object.

7. `date.addhour(data.mydate.getluadate(), 2)`

This function adds a given number of hours to a given date object.

8. `date.addminute(data.mydate.getluadate(), 2)`

This function adds a given number of minutes to a given date object.

9. `date.addsecond(data.mydate.getluadate(), 2)`

This function adds a given number of seconds to a given date object.

10. `date.difference(date1, date2)`

This function calculates the time difference in seconds between two date objects.

**Example with `log()`:**

```lua
local date1 = date.parse('20230101', 'yyyyMMdd')
local date2 = date.parse('20230102', 'yyyyMMdd')
local differenceInSeconds = date.difference(date1, date2)
log("Time Difference in Seconds: " .. differenceInSeconds)
```

11. `date.getweeknumberofyear(data.mydate.getluadate())`

This function calculates the calendar week of the given date object.

**Example with `log()`:**

```lua
local weekNumber = date.getweeknumberofyear(data.mydate.getluadate())
log("Calendar Week Number: " .. weekNumber)
```

12. `date.calculateshiftduration('08:00', '16:00', '10:00', '10:15')`

This function calculates the duration of a shift based on the specified start time, end time, break start time, and break end time.

**Example with `log()`:**

```lua
local shiftDuration = date.calculateshiftduration('08:00', '16:00', '10:00', '10:15')
log("Shift Duration: " .. shiftDuration)
```

Using `log()` in these examples allows you to capture the relevant information in the log file for monitoring, debugging, and other logging purposes within your Peakboard project.
