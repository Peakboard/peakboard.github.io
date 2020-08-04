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


The Peakboard Box currently has no way of remembering the time beyond the next restart. 
For this reason, it is possible to integrate date and time as a normal data source within the Designer. 
The data source is not tabular, but only a scalar single value.

The format specification defines how the time or date or a combination thereof is to be displayed. 
The individual format components can be found in the table below. 
If a time zone other than CET is to be used for time calculation, the corresponding combo box is available.

By default, the time data source accesses the Windows time server on the Internet (specifically on time.windows.com). 
If this is not desired or if Peakboard is operated in a network without internet access, Peakboard can also get the time from a network internal time server. 
For this purpose, the IP address or the host name of the time server is written into the corresponding text field (2) under "Settings" (1) via the button "Time Server" (2).

![TimeServer](/assets/images/data-sources/date-and-time/TimeServer.png)

In order to use a local Windows computer as a timeserver, a registry entry must be adapted.
To do this, the value **[Enabled]** must first be set to 1 (true) in the registry in the folder
 `HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\W32Time\TimeProviders\NtpServer\`.

Then the Command window must be executed as Administrator and the following command must be entered:
`w32tm /config /update`


The time data source can be created like any other data source under "add Data Source" (1) and then "Time" (2).
As of Designer Version 1.7.0.0, time jumps (addition or subtraction) can be executed directly in the time data source and no longer have to be generated using a script (3).

![Add Time Dialog](/assets/images/data-sources/date-and-time/add-time-dialog.png)

The following screenshot shows how the time can be used by drag and drop (1) on the screen. Alternatively, the data source can be bound to controls or used via script, just like any other data source.
In the control editor the display format for a German or English layout can be adapted or a separate format (3) can be created via Format.


![Place Time](/assets/images/data-sources/date-and-time/place-time.png)

The current date and time are now displayed in the preview.

![Preview Time](/assets/images/data-sources/date-and-time/preview-time.png)

Placeholder for the format string:

```
HH: Hour (00 - 24)
hh: hour (00 - 12)
mm: minute
ss: second
dd: Day
MM: Month (number) e.g. 11
MMMM: Month (text) e.g. November
yy: double-digit year e.g. 89
yyyy: four-digit year e.g. 1989
```
