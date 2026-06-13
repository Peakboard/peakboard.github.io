---
layout: article
title: Office 365 Outlook
menu_title: Office 365 Outlook
description: Read e-mails from a Microsoft 365 Outlook mailbox as a data source in the Peakboard Designer, including single-/multi-tenant authorization.
lang: en
weight: 1175
ref: dat-1175
permalink: /data_sources/en-microsoft-outlook.html
redirect_from:
---

The Office 365 Outlook data source lets you read the e-mails of a mailbox folder that is hosted on Microsoft 365. Sign-in uses modern Microsoft authentication (Microsoft Entra ID, OAuth) with a choice between a **multi-tenant** and a **single-tenant** application.

## Setting up the data source

Right-click [Data] or click the [...] button and choose [Add data source]. Switch to the [Office 365] category (1) and select the [Outlook] data source (2).

![Add Office 365 Outlook data source](/assets/images/data-sources/microsoft-outlook/microsoft-outlook-01-add.png)

## Configure the connection

Give the data source a name, then set up the [Connection]. Picking the authorization method, signing in with [Authorize] and reusing an existing connection work the same for all Office 365 data sources and are described once here: [Office 365 connection](/data_sources/en-office365-connection.html).

## Specify details

Click [Retrieve Outlook Folders] (3) to load the folders of the mailbox, then choose the desired folder under [Folder] (4) – for example [Inbox], [Sent Items] or [Drafts]. Enable [Select timeframe] (5) to restrict the e-mails to a date range; otherwise a default range is used. With [Timezone] you set the time zone the received times are converted to. If you want to process the body of the e-mails as HTML formatting instead of plain text, enable the [Content as HTML] checkbox.

![Configure the Office 365 Outlook connection and details](/assets/images/data-sources/microsoft-outlook/microsoft-outlook-02-config.png)

## Load data

Click [Load data] to display the preview. The result is a list containing one line per e-mail, with columns such as [Id], [ReceivedTime], [From], [Subject], [To] and [Body] (the sender addresses and subjects are blanked out in this screenshot).

![Office 365 Outlook preview](/assets/images/data-sources/microsoft-outlook/microsoft-outlook-03-preview.png)

Click [OK] to create the data source. It then appears in the Explorer under [Data] and can be linked to controls like any other data source.
