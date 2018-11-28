---
layout: article
title: Microsoft Calendar
menu_title: Microsoft Calendar
description: Microsoft Calendar Integration in Peakboard
lang: en
ref: cal-25
---
The Microsoft Calendar data source allows you to access a calendar stored in Office 365. Currently, only Microsoft calendars hosted on Office 365 or Office.com are supported. SharePoint calendars or local Exchange calendars are not supported.

## Setting up the data source

Besides the mandatory name of the data source, Peakboard must be authorized to access the calendar. Click on the Authorize button and follow the usual prompts for account access. Please note that username and password are never stored in the board, but only a token whose validity can be reset via the Office 365 portal.

![image_1](/assets/images/data-sources/mscal/calendar-authorize.png)

The rest of the fields to be filled are almost self-explanatory. The time period for which the calendar entries are searched for must be indicated in the specified format. The Date Format field contains the pattern used to format the date and time in the subsequent table. If you want to process the main part of the calendar entry (the so-called body) as HTML formatting instead of plain text, click the corresponding checkbox.


![image_1](/assets/images/data-sources/mscal/calendar-maindialog.png)

The result is a normal list containing one row per calendar entry. It can now be processed accordingly, just like any other data source.

![image_1](/assets/images/data-sources/mscal/calendar-entries.png)

Under the following link you will find additional information as a YouTube video (in German only, sorry):

[Darstellung des Microsoft Outlook Kalenders in Peakboard.](https://www.youtube.com/watch?v=0LsEXH9-r7s)

