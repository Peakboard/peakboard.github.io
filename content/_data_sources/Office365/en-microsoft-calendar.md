---
layout: article
title: Office 365 Calendar
menu_title: Calendar
description: Connect a Microsoft 365 calendar as a data source in the Peakboard Designer, including single-/multi-tenant authorization.
lang: en
weight: 1150
ref: cal-1150
permalink: /data_sources/en-microsoft-calendar.html
redirect_from:
  - /data_sources/24-en-microsoft-calendar.html
---

The Microsoft Calendar data source lets you access a calendar that is hosted on Microsoft 365. Only calendars hosted on Microsoft 365 / Outlook.com are supported – SharePoint calendars or local Exchange calendars are not. Sign-in uses modern Microsoft authentication (Microsoft Entra ID, OAuth) with a choice between a **multi-tenant** and a **single-tenant** application.

## Setting up the data source

Right-click [Data] or click the [...] button and choose [Add data source]. Switch to the [Office 365] category (1) and select the [Calendar] data source (2).

![Add Microsoft Calendar data source](/assets/images/data-sources/microsoft-calendar/microsoft-calendar-01-add.png)

## Configure the connection

Give the data source a name, then set up the [Connection]. Picking the authorization method, signing in with [Authorize] and reusing an existing connection work the same for all Office 365 data sources and are described once here: [Office 365 connection](/data_sources/en-office365-connection.html).

## Specify details

By default the data source reads the signed-in user's default calendar. Enable [Specific Calendar] (3) to instead choose a particular calendar of the account. Enable [Select timeframe] (4) to restrict the entries to a date range; otherwise a default range around the current date is used. With [Timezone] you set the time zone the start and end times are converted to.

The [Date format] field (5) contains the pattern used to format the date and time of each entry in the resulting table (default `HH:mm:ss dd.MM.yyyy`). If you want to process the main part of a calendar entry (the so-called body) as HTML formatting instead of plain text, enable the [Content as HTML] checkbox.

## Load data

Click [Load data] to display the preview. The result is a list containing one line per calendar entry, with the columns [Subject], [Start], [End] and [Body] (the subjects are blanked out in this screenshot).

![Microsoft Calendar preview](/assets/images/data-sources/microsoft-calendar/microsoft-calendar-03-preview.png)

Click [OK] to create the data source. It then appears in the Explorer under [Data] and can be linked to controls like any other data source.

Under the following link you can find additional information in the form of a YouTube video:

[Viewing the Microsoft Outlook Calendar in Peakboard.](https://www.youtube.com/watch?v=0LsEXH9-r7s)
