---
layout: article
title: Office 365 To Do
menu_title: Office 365 To Do
description: Read the tasks of a Microsoft To Do task list as a data source in the Peakboard Designer, including single-/multi-tenant authorization.
lang: en
weight: 1190
ref: dat-1190
redirect_from:
---

The Office 365 To Do data source lets you read the tasks of a Microsoft To Do task list that is hosted on Microsoft 365. Sign-in uses modern Microsoft authentication (Microsoft Entra ID, OAuth) with a choice between a **multi-tenant** and a **single-tenant** application.

## Setting up the data source

Right-click [Data] or click the [...] button and choose [Add data source]. Switch to the [Office 365] category (1) and select the [To Do] data source (2).

![Add Office 365 To Do data source](/assets/images/data-sources/microsoft-todo/microsoft-todo-01-add.png)

## Configure the connection

In the [General] section, first give the data source a name. In the [Connection] section, use the dropdown to pick the authorization method and then sign in via the [Authorize] button. Once authorized, the button shows [Is authorized]. Because sign-in happens through the regular Microsoft login window, multi-factor authentication (MFA) is supported – only an access token is stored in your project, never your user name and password. You can revoke that token at any time through the Microsoft 365 portal.

* **Use multi-tenant Application** – Peakboard uses a ready-made application that Peakboard has already registered in Microsoft Entra ID. You don't need to register your own app; a single [Authorize] is enough.
* **Use single-tenant Application** – you use your own app registration in your own Microsoft Entra ID directory (tenant) by entering its [Application (client) ID] and [Directory (tenant) ID]. Authentication then stays entirely within your organization.

If you already authorized an Office 365 connection in the same project (for example for SharePoint Lists, the Office 365 Calendar, Outlook or Teams), click [Reuse existing connection] at the bottom and pick it – no second sign-in is required.

## Specify details

Click [Retrieve To Do tasks list] (2) to load the task lists you have access to. Choose the list under [Task list] (3) – in this example [Factory CI].

![Configure the Office 365 To Do connection and details](/assets/images/data-sources/microsoft-todo/microsoft-todo-02-config.png)

## Load data and output columns

Click [Load data] to display the preview. The result is a list containing one line per task with the following columns:

* **Id** – the unique identifier of the task.
* **Title** – the title of the task.
* **Status** – the task status, for example `notStarted`, `inProgress` or `completed`.
* **Importance** – the priority of the task: `low`, `normal` or `high`.
* **Content** – the body / notes of the task.
* **Created Date** – the time the task was created.
* **Completed Date** – the time the task was completed; empty as long as the task is not completed.
* **Due Date** – the due date of the task; empty if no due date is set.
* **Categories** – the categories assigned to the task.
* **Has Attachments** – indicates whether the task has attachments (`true` / `false`).

![Office 365 To Do preview](/assets/images/data-sources/microsoft-todo/microsoft-todo-03-preview.png)

Click [OK] to create the data source. It then appears in the Explorer under [Data] and can be linked to controls like any other data source.
