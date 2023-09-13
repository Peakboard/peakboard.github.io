---
layout: article
title: Date and Time
menu_title: Date and Time
description: Information about time and date data in Peakboard
lang: en
weight: 300
ref: dat-300
redirect_from:
  - /data_sources/02-en-date-and-time.html
---

In the Peakboard Designer, you have the option of including the date and time as a data source.
This data source is not tabular, but only a scalar single value.

The format specification defines how the time or the date or a combination thereof is to be displayed.
The individual format components can be seen in the table below.
In case you want to use a time zone other than CET for time calculation, the corresponding combo box is available.

Besides displaying date and time, the time data source also offers the possibility to display data based on a current timestamp.

## Time server Peakboard Box (Time server for the Peakboard Box)

When adding a Peakboard Box to the Peakboard Designer for the first time, you will be asked to enter a time server. Among other things, this time server is responsible for the validation process of the certificates on the Peakboard Box.

You can change the time server in the Peakboard Box settings.
In the [Peakboard Box Check] tab (1) of your Peakboard Box, you will find the entry [Time server] in the System section.
Click on the gear icon (2) to open the dialog for selecting the time server and time zone.

![Time server](/assets/images/data-sources/date-and-time/en_timeserver.png)

The time data source can be created like any other data source via [Add data source] and then [Time] (3).

![Time data source](/assets/images/data-sources/date-and-time/de_timedatasource_01.png)

You can perform time jumps (addition or subtraction) directly in the time data source (4). This is helpful, for example, if the data of the last 8 hours should always be displayed.

![Time data source](/assets/images/data-sources/date-and-time/de_timedatasource_02.png)

The following animation shows how to use the time by dragging and dropping it on the screen.

![Time data source](/assets/images/data-sources/date-and-time/en_timedatasource_03.gif)

Alternatively, the data source can be bound to controls or used via script, just like any other data source.
In the control editor the display format can be adapted for a German or English layout via Format or an own format (5) can be created.

![Time data source](/assets/images/data-sources/date-and-time/de_timedatasource_04.png)

The preview now shows the current date and time.

![Time data source](/assets/images/data-sources/date-and-time/timedatasource_05.png)

Placeholder for the format string:

```html
HH: hour (00 - 24)
hh: hour (00 - 12)
mm: minute
ss: second
dd: day
MM: Month (number) e.g. 11
MMMM: month (text) e.g. November
yy: two-digit year e.g. 89
yyyy: four-digit year e.g. 1989
tt: AM/PM identifier
```
