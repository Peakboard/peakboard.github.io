---
layout: article
title: Calendar
menu_title: Calendar
description: Information about the Calendar (Scheduler) control in Peakboard Designer
lang: en
weight: 805
ref: con-805
redirect_from:
---

The Calendar control (also referred to internally as *Scheduler*) displays appointments and events in a classic calendar layout. It is well-suited for shift plans, meeting overviews, maintenance schedules, or any time-anchored data set with a start and end time. You can switch between day, week, working-week, and month views.

## Add the Calendar

You will find the Calendar control in the Peakboard Designer toolbar under [Interactive] via the [More] button (•••). Click it and pick the Calendar icon (1) from the popup.

![Calendar in the toolbar popup](/assets/images/Controls/calendar/calendar-01-toolbar-more-popup.png)

Drag the icon onto the workspace, or double-click it to place it.

## Connect a data source

The Calendar needs a data source with at least three columns: a **start time**, an **end time** and a **subject** (title) for each appointment. Any dynamic data source works — a Microsoft Calendar connection, an OPC UA list, or a static variable list, for example.

After adding the control, the [Connect control with data source] dialog opens automatically. Pick your list in the [Data source name] (1) field.

![Connect dialog](/assets/images/Controls/calendar/calendar-02-connect-dialog-empty.png)

Type the name of your list; the auto-complete suggests matching entries (2). Accept the suggestion with the down arrow key and confirm with [OK].

![Data source selected](/assets/images/Controls/calendar/calendar-03-connect-dialog-filled.png)

## Map columns and set the data format

Once connected, the Properties panel on the right shows the [Data] section. Map your columns to the Calendar:

1. [Data source] (1) shows your selected list. The buttons next to it let you unbind or reload the list.
2. [Start time column] (2) — the column that holds each appointment's start timestamp.
3. [End time column] (3) — the column with the end timestamp.
4. [Event column] (4) — the column that holds the title or subject shown on the appointment.
5. [Data format] (5) — the format the timestamps in your data use, e.g. `yyyy-MM-dd HH:mm:ss`. The default is `HH:mm:ss dd.MM.yyyy`.

![Calendar in month view with bound data](/assets/images/Controls/calendar/calendar-04-bound-month-view.png)

As soon as the column mapping and date format match the data, your appointments appear coloured in the calendar.

## Switch the view

In the [Appearance] section under [VIEW], you control how the calendar renders. Use the [View type] (1) field to switch between four modes:

* **Day** — a single day with an hourly grid
* **Week** — a full week with an hourly grid
* **Working Week** — like Week but without the weekend
* **Month** — a month overview (default)

In Week or Working Week, a [First day of week] option additionally appears, letting you choose Sunday or Monday as the starting day.

![Calendar in week view](/assets/images/Controls/calendar/calendar-05-week-view.png)

[Date format] right next to the view type controls how the dates appear in the calendar header (e.g. `dd.MM.` or `MM/dd`).

## Customize the appearance

The same [Appearance] section also exposes:

* **Fonts** — font definitions for the base text, the day header, the week/month header, the day numbers (only in the month view), and the appointment labels.
* **Colors** — [Event background] (appointment fill), [Today highlight color] (today indicator), [Line color], [Cell background], [Header background], and [Time column background] (the hour column in Day/Week views).
* **Limit displayed time** — enable this checkbox to restrict the visible time range (e.g. working hours 8 a.m. to 5 p.m.). [StartHour] and [EndHour] fields appear when it is active.

## Logic and scripting

The [Logic] section lets you expose the Calendar to scripting and react to user input:

* **Used in scripting** — enable the checkbox to make the control reachable through the scripting API.
* **Conditional formatting** — define rules to colour appointments differently based on their content.
* **Event tapped** — fires when the user taps an appointment; useful for opening a detail pop-up or chaining a follow-up action.
* **Tap on empty space** — fires when the user taps an empty slot in the calendar; useful for creating a new appointment.
