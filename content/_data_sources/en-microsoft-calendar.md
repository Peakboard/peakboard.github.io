---
layout: article
title: Microsoft Calendar
menu_title: Microsoft Calendar
description: Microsoft Calendar Integration in Peakboard
lang: en
weight: 1150
ref: cal-1150
redirect_from:
  - /data_sources/24-en-microsoft-calendar.html
---

The Microsoft Calendar data source allows you to access a calendar that is hosted on Office 365. Currently, only Microsoft calendars hosted on Office 365 or on Office.com are supported. SharePoint calendars or local Exchange calendars are not supported.

## Setting up the data source

To add the data source right click on [Data] or alternatively click on the [...] button and then select [Add data source] and [Microsoft Calendar] (1).

![Add data source](/assets/images/data-sources/mscal/en_mscal-01.png)

Give the data source a name (1) and define the desired time period (2) for which calendar entries should be displayed in the given format and select the correct time zone.

![Data Sources Dialog](/assets/images/data-sources/mscal/en_mscal-02.png)

Now you need to authorize Peakboard to access the calendar. Click on the [Authorize] button (1) and follow the prompts for account access. Please note that username and password will never be stored in your project, only a token whose validity you can reset via the Office 365 portal.

![Authorization](/assets/images/data-sources/mscal/en_mscal-03.png)

The Date format (1) field contains the pattern that will be used to format the date and time in the later table. In case you want to process the main part of the calendar entry (the so-called body) as HTML formatting instead of plain text, click the corresponding checkbox [Content as HTML] (2).
Click on [Load data] (3) to display the preview.
The result is a list containing one line per calendar entry.

![Preview](/assets/images/data-sources/mscal/en_mscal-04.png)

Under the following link you can find additional information in the form of a YouTube video:

[Viewing the Microsoft Outlook Calendar in Peakboard.](https://www.youtube.com/watch?v=0LsEXH9-r7s)
