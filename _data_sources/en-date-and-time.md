---
layout: article
title: Date and Time
menu_title: Date and Time
description: Informatinon about time and date data in Peakboard
lang: en
ref: dat-2
---
Currently the Peakboard-Box has no possibility to remember the time after a restart. For this reason, it is possible to integrate date and time as a normal data source within the Designer. The data source is not tabular, but only a scalar single value.

The format specification defines how the time or date or a combination thereof is to be displayed. The individual format components can be found in the table below. If a time zone other than CET is to be used for time calculation, the corresponding combo box is available.

By default, the Time data source accesses the Windows time server on the Internet (concretely, time. windows. com). If this is not desired or if Peakboard is operated in a network without Internet access, Peakboard can also fetch the time from an internal time server. This function must be activated via the checkbox and the IP address or host name of the time server must be written into the corresponding text field.

To use a local Windows computer as a time server, a registry entry must be adjusted.
To do this, the value **[Enabled]** must first be set to 1 (true) in the following folder registry:

`HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\W32Time\Time\Time\TimeProviders\NtpServer\`


Afterwards, the Command window must be executed as an administrator and the following command entered:
`w32tm /config /update`

 ![image_1](/assets/images/Data_Sources/Date_and_Time/AddTimeDialog.png)

The following screenshot shows how to use the time on the screen. Alternatively, the data source, like any other data source, can be linked to controls or used via script.

 ![image_1](/assets/images/Data_Sources/Date_and_Time/PlaceTime.png)

The preview now shows the current date and time.

![image_1](/assets/images/Data_Sources/Date_and_Time/PreviewTime.png)

Placeholder for the format string:

 ```
HH: Hour (00 – 24)
hh: Hour (00 – 12)
mm: Minute
ss: Second
dd: Day
MM: Month
yy: double-digit year e. g. 89
yyyyy: four-digit year e. g. 1989
```
