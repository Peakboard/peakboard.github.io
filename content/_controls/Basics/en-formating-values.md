---
layout: article
title: Formating Values
menu_title: Formating Values
description: Formating Values
lang: en
weight: 20
ref: con-20
redirect_from:
 - /misc/03-en-formating-values.html
 - /misc/en-formating-values.html
---

Many peakboard controls are used to display values, for example charts or text controls. Different data types such as numbers, dates or texts require different formatting. For example, numbers are often formatted with decimal places or thousands separators, while dates should be displayed in a specific format such as DD.MM.YYYY, although they are technically in a different format.

### Editing the format of values

There is an [Edit format] dialog for editing values at various places in the controls.
You have the option of selecting certain predefined formats via a drop-down menu (1).

The predefined formats only work if the input data is correctly recognized by Peakboard.

The following options are available there:

* Number
* Number with 2 decimal places
* Currency
* Percentage
* Percentage with 2 decimal places
* Date (dd.MM.yyyy)
* Date (MM/dd/yyyy)
* Date & time (dd.MM.yyyy HH:mm)
* Date & time (MM/dd/yyyy HH:mm)
* Time (HH:mm)
* Interval (hh:mm hours)
* Interval (mm:ss minutes)
* Interval (dd days hh hours)

If you need further adjustment options or want to define your own format, you can open the dialog via the [...] symbol (2). The screenshot shows the text control.

![Format text control values](/assets/images/Controls/format/en_format-01.png)

Once you have opened the [Edit format] dialog, you can select a format type (1) in the left-hand area, which you can then edit in the right-hand area. The following are available:

* Number
* Date/time
* Interval

Detailed settings can be made for each format type.

![Edit format dialog](/assets/images/Controls/format/en_format-02.png)

### Edit number format

An example (1) of what the format would look like with the currently selected settings is displayed at the top of the opened dialog.
Below this, you can make the format-specific settings (2) for numbers. You can specify decimal places, separators, prefixes and suffixes and a multiplier.
Using the error handling drop-down menu (3) at the bottom, you can select what should happen if the format cannot be applied.

![Edit number format](/assets/images/Controls/format/en_format-03.png)

### Edit date/time

An example (1) of how the format would look with the currently selected settings is also displayed at the top of the date/time.
Below this, you can make the format-specific settings (2) for date/time. You can define the output format there. The input format can either be recognized automatically or defined by you if the recognition does not work correctly.
You can also use the error handling drop-down menu (3) at the bottom to select what should happen if the format cannot be applied.

![Edit date/time](/assets/images/Controls/format/en_format-04.png)

You can use the following format values for date/time:

#### Date

| Format specifier | Description                                 | Examples                                                                                   |
|------------------|---------------------------------------------|--------------------------------------------------------------------------------------------|
| "d"       | The day of the month, from 1 to 31.                | 2009-06-01T13:45:30 -> 1<br>2009-06-15T13:45:30 -> 15                                      |
| "dd"      | The day of the month, from 01 to 31.               | 2009-06-01T13:45:30 -> 01<br>2009-06-15T13:45:30 -> 15                                     |
| "ddd"     | The abbreviated name of the day of the week.       | 2009-06-15T13:45:30 -> Mon (en-US)                                                         |
| "dddd"    | The full name of the day of the week.              | 2009-06-15T13:45:30 -> Monday (en-US)                                                      |
| "M"       | The month, from 1 to 12.                           | 2009-06-15T13:45:30 -> 6                                                                   |
| "MM"      | The month, from 01 to 12.                          | 2009-06-15T13:45:30 -> 06                                                                  |
| "MMM"     | The abbreviated name of the month.                 | 2009-06-15T13:45:30 -> Jun (en-US)                                                         |
| "MMMM"    | The full name of the month.                        | 2009-06-15T13:45:30 -> June (en-US)                                                        |
| "y"       | The year, from 0 to 99.                            | 0001-01-01T00:00:00 -> 1<br>0900-01-01T00:00:00 -> 0<br>1900-01-01T00:00:00 -> 0<br>2009-06-15T13:45:30 -> 9<br>2019-06-15T13:45:30 -> 19 |
| "yy"      | The year, from 00 to 99.                           | 0001-01-01T00:00:00 -> 01<br>0900-01-01T00:00:00 -> 00<br>1900-01-01T00:00:00 -> 00<br>2019-06-15T13:45:30 -> 19 |
| "yyy"     | The year, with a minimum of three digits.          | 0001-01-01T00:00:00 -> 001<br>0900-01-01T00:00:00 -> 900<br>1900-01-01T00:00:00 -> 1900<br>2009-06-15T13:45:30 -> 2009 |
| "yyyy"    | The year as a four-digit number.                   | 0001-01-01T00:00:00 -> 0001<br>0900-01-01T00:00:00 -> 0900<br>1900-01-01T00:00:00 -> 1900<br>2009-06-15T13:45:30 -> 2009 |
| "yyyyy"   | The year as a five-digit number.                   | 0001-01-01T00:00:00 -> 00001<br>2009-06-15T13:45:30 -> 02009                               |
| "g", "gg" | The period or era.                                 | 2009-06-15T13:45:30.6170000 -> A.D.                                                        |
| "/"       | The date separator.                                | 2009-06-15T13:45:30 -> / (en-US)                                                           |

#### Time

| Format specifier | Description                                 | Examples                                                                                   |
|------------------|---------------------------------------------|--------------------------------------------------------------------------------------------|
| "h"       | The hour, using a 12-hour clock from 1 to 12.      | 2009-06-15T01:45:30 -> 1<br>2009-06-15T13:45:30 -> 1                                       |
| "hh"      | The hour, using a 12-hour clock from 01 to 12.     | 2009-06-15T01:45:30 -> 01<br>2009-06-15T13:45:30 -> 01                                     |
| "H"       | The hour, using a 24-hour clock from 0 to 23.      | 2009-06-15T01:45:30 -> 1<br>2009-06-15T13:45:30 -> 13                                      |
| "HH"      | The hour, using a 24-hour clock from 00 to 23.     | 2009-06-15T01:45:30 -> 01<br>2009-06-15T13:45:30 -> 13                                     |
| "m"       | The minute, from 0 to 59.                          | 2009-06-15T01:09:30 -> 9<br>2009-06-15T13:29:30 -> 29                                      |
| "mm"      | The minute, from 00 to 59.                         | 2009-06-15T01:09:30 -> 09<br>2009-06-15T01:45:30 -> 45                                     |
| "s"       | The second, from 0 to 59.                          | 2009-06-15T13:45:09 -> 9                                                                   |
| "ss"      | The second, from 00 to 59.                         | 2009-06-15T13:45:09 -> 09                                                                  |
| "f"       | The tenths of a second in a date and time value.   | 2009-06-15T13:45:30.6170000 -> 6<br>2009-06-15T13:45:30.05 -> 0                            |
| "ff"      | The hundredths of a second in a date and time value.| 2009-06-15T13:45:30.6170000 -> 61<br>2009-06-15T13:45:30.0050000 -> 00                    |
| "fff"     | The milliseconds in a date and time value.         | 6/15/2009 13:45:30.617 -> 617<br>6/15/2009 13:45:30.0005 -> 000                            |
| "ffff"    | The ten thousandths of a second in a date and time value.| 2009-06-15T13:45:30.6175000 -> 6175<br>2009-06-15T13:45:30.0000500 -> 0000           |
| "fffff"   | The hundred thousandths of a second in a date and time value.| 2009-06-15T13:45:30.6175400 -> 61754<br>6/15/2009 13:45:30.000005 -> 00000       |
| "ffffff"  | The millionths of a second in a date and time value.| 2009-06-15T13:45:30.6175420 -> 617542<br>2009-06-15T13:45:30.0000005 -> 000000            |
| "fffffff" | The ten millionths of a second in a date and time value.| 2009-06-15T13:45:30.6175425 -> 6175425<br>2009-06-15T13:45:30.0001150 -> 0001150      |
| "F"       | If non-zero, the tenths of a second in a date and time value.| 2009-06-15T13:45:30.6170000 -> 6<br>2009-06-15T13:45:30.0500000 -> (no output)   |
| "FF"      | If non-zero, the hundredths of a second in a date and time value.| 2009-06-15T13:45:30.6170000 -> 61<br>2009-06-15T13:45:30.0050000 -> (no output) |
| "FFF"     | If non-zero, the milliseconds in a date and time value.| 2009-06-15T13:45:30.6170000 -> 617<br>2009-06-15T13:45:30.0005000 -> (no output)       |
| "FFFF"    | If non-zero, the ten thousandths of a second in a date and time value.| 2009-06-15T13:45:30.5275000 -> 5275<br>2009-06-15T13:45:30.0000500 -> (no output)
| "FFFFF"   | If non-zero, the hundred thousandths of a second in a date and time value.| 2009-06-15T13:45:30.6175400 -> 61754<br>2009-06-15T13:45:30.0000050 -> (no output) |
| "FFFFFF"  | If non-zero, the millionths of a second in a date and time value. | 2009-06-15T13:45:30.6175420 -> 617542<br>2009-06-15T13:45:30.0000005 -> (no output) |
| "FFFFFFF" | If non-zero, the ten millionths of a second in a date and time value. | 2009-06-15T13:45:30.6175425 -> 6175425<br>2009-06-15T13:45:30.0001150 -> 000115 |
| "t"       | The first character of the AM/PM designator.       | 2009-06-15T13:45:30 -> P (en-US)                                                           |
| "tt"      | The AM/PM designator                               | 2009-06-15T13:45:30 -> PM (en-US)                                                          |
| "K"       | Time zone information.                             | Various examples depending on the kind of DateTime value used                              |
| "z"       | Hours offset from UTC, with no leading zeros.      | 2009-06-15T13:45:30-07:00 -> -7                                                            |
| "zz"      | Hours offset from UTC, with a leading zero for a single-digit value. | 2009-06-15T13:45:30-07:00 -> -07                                         |
| "zzz"     | Hours and minutes offset from UTC.                 | 2009-06-15T13:45:30-07:00 -> -07:00                                                        |
| ":"       | The time separator.                                | 2009-06-15T13:45:30 -> : (en-US)                                                           |

#### Date/Time: Other

| Format specifier | Description                                 | Examples                                                                                   |
|------------------|---------------------------------------------|--------------------------------------------------------------------------------------------|
| "string"  | Literal string delimiter.                          | 2009-06-15T13:45:30 ("arr:" h:m t) -> arr: 1:45 P                                          |
| "%"       | Defines the following character as a custom format specifier. | 2009-06-15T13:45:30 (%h) -> 1                                                   |
| "\"      | The escape character.                               | 2009-06-15T13:45:30 (h \\h) -> 1 h                                                         |
| Any other character | The character is copied to the result string unchanged. | 2009-06-15T01:45:30 (arr hh:mm t) -> arr 01:45 A                            |

### Edit interval

As with the other format types, an example (1) of how the format would look with the currently selected setting"s is displayed at the top.
Below this, you can make the format-specific settings (2) for intervals. You can define the output format there and select which input format is available.
Using the error handling drop-down menu (3) at the bottom, you can also select what should happen if the format cannot be applied.

![Edit interval](/assets/images/Controls/format/en_format-05.png)

You can use the following format values for Interval:

#### Days

| Format specifier  | Description                                 | Example                                                                                  |
|-------------------|---------------------------------------------|------------------------------------------------------------------------------------------|
| "d", "%d"       | The number of whole days in the time interval.                                                  | "%d" --> "6" "d\.hh\:mm" --> "6.14:32" |
| "dd"-"dddddddd" | The number of whole days in the time interval, padded with leading zeros as needed.        | "ddd" --> "006" "dd\.hh\:mm" --> "06.14:32" |

#### Hours

| Format specifier  | Description                                 | Example                                                                                  |
|-------------------|---------------------------------------------|------------------------------------------------------------------------------------------|
| "h", "%h"       | The number of whole hours in the time interval that aren't counted as part of days. Single-digit hours don't have a leading zero. | "%h" --> "14" "hh\:mm" --> "14:32" |
| "hh"            | The number of whole hours in the time interval that aren't counted as part of days. Single-digit hours have a leading zero. | "hh" --> "14" "hh" --> 08 |

#### Minutes

| Format specifier  | Description                                 | Example                                                                                  |
|-------------------|---------------------------------------------|------------------------------------------------------------------------------------------|
| "m", "%m"       | The number of whole minutes in the time interval that aren't included as part of hours or days. Single-digit minutes don't have a leading zero. | "%m" --> "8" "h\:m" --> "14:8" |
| "mm"            | The number of whole minutes in the time interval that aren't included as part of hours or days. Single-digit minutes have a leading zero. | "mm" --> "08" "d\.hh\:mm\:ss" --> 6.08:05:17 |

#### Seconds

| Format specifier  | Description                                 | Example                                                                                  |
|-------------------|---------------------------------------------|------------------------------------------------------------------------------------------|
| "s", "%s"       | The number of whole seconds in the time interval that aren't included as part of hours, days, or minutes. Single-digit seconds don't have a leading zero. | "%s" --> 12 "s\.fff" --> 12.965 |
| "ss"            | The number of whole seconds in the time interval that aren't included as part of hours, days, or minutes. Single-digit seconds have a leading zero. | "ss" --> 06 "ss\.fff" --> 06.965 |

#### Fractions of a second

| Format specifier  | Description                                 | Example                                                                                  |
|-------------------|---------------------------------------------|------------------------------------------------------------------------------------------|
| "f", "%f"       | The tenths of a second in a time interval.                                                                  | "f" --> 8 "ss\.f" --> 06.8 |
| "ff"            | The hundredths of a second in a time interval.                                                          | "ff" --> 89 "ss\.ff" --> 06.89 |
| "fff"           | The milliseconds in a time interval.                                                                | "fff" --> 895 "ss\.fff" --> 06.895 |
| "ffff"          | The ten-thousandths of a second in a time interval.                                             | "ffff" --> 8954 "ss\.ffff" --> 06.8954 |
| "fffff"         | The hundred-thousandths of a second in a time interval.                                     | "fffff" --> 89543 "ss\.fffff" --> 06.89543 |
| "ffffff"        | The millionths of a second in a time interval.                                          | "ffffff" --> 895432 "ss\.ffffff" --> 06.895432 |
| "fffffff"       | The ten-millionths of a second (or the fractional ticks) in a time interval.        | "fffffff" --> 8954321 "ss\.fffffff" --> 06.8954321 |
| "F", "%F"       | The tenths of a second in a time interval. Nothing is displayed if the digit is zero.                             | "%F": 3 "ss\.F": 03. |
| "FF"            | The hundredths of a second in a time interval. Any fractional trailing zeros or two zero digits aren't included. | "FF": 32 "ss\.FF": 03.1 |
| "FFF"           | The milliseconds in a time interval. Any fractional trailing zeros aren't included.                         | "FFF": 329 "ss\.FFF": 03.1 |
| "FFFF"          | The ten-thousandths of a second in a time interval. Any fractional trailing zeros aren't included.       | "FFFF": 3291 "ss\.FFFF": 03.1 |
| "FFFFF"         | The hundred-thousandths of a second in a time interval. Any fractional trailing zeros aren't included. | "FFFFF": 32917 "ss\.FFFFF": 03.1 |
| "FFFFFF"        | The millionths of a second in a time interval. Any fractional trailing zeros aren't displayed.     | "FFFFFF": 329179 "ss\.FFFFFF": 03.1 |
| "FFFFFFF"       | The ten-millions of a second in a time interval. Any fractional trailing zeros or seven zeros aren't displayed. | "FFFFFF": 3291791 "ss\.FFFFFF": 03.19 |

#### Intervals: Other

| Format specifier  | Description                                 | Example                                                                                  |
|-------------------|---------------------------------------------|------------------------------------------------------------------------------------------|
| "string"        | Literal string delimiter.                                                                                | "hh':'mm':'ss" --> "14:32:17" |
| "\"             | The escape character.                                                                                      | "hh\:mm\:ss" --> "14:32:17" |
| Any other character | Any other unescaped character is interpreted as a custom format specifier.                       |                                   |
