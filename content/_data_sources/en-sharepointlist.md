---
layout: article
title: Office 365 Sharepoint List
menu_title: Office 365 Sharepoint List
description: Connect a SharePoint Lists data source (Microsoft 365) in the Peakboard Designer, including multi-tenant and single-tenant authorization.
lang: en
weight: 1180
ref: dat-2500
redirect_from:
---

The [SharePoint Lists] data source connects Peakboard to lists from Microsoft 365 / SharePoint Online. Sign-in uses modern Microsoft authentication (Microsoft Entra ID, OAuth). You can choose between two authorization methods: a **multi-tenant** and a **single-tenant** application (see [Configure the connection](#configure-the-connection)).

For a general walkthrough of how to configure external data sources and link them to Peakboard elements, see:

[Getting started with external data sources using an XML data source as an example](/tutorials/03-en-xml-data.html)

## Add the data source

Right-click [Data] or click the [...] button and choose [Add data source]. Switch to the [Office 365] category (1) and select the [SharePoint Lists] data source (2).

![Add SharePoint Lists data source](/assets/images/data-sources/sharepointlist/sharepointlist-01-add.png)

## Configure the connection

In the [General] section, first give the data source a name (1).

In the [Connection] section, use the dropdown to pick the authorization method (2) and then sign in with your Microsoft account via the [Authorize] button (3). Because sign-in happens through the regular Microsoft login window, multi-factor authentication (MFA) is supported.

![SharePoint Lists connection – multi-tenant](/assets/images/data-sources/sharepointlist/sharepointlist-02-multitenant.png)

### Multi-tenant vs. single-tenant application

The dropdown in the [Connection] section controls which Microsoft Entra ID application Peakboard authenticates against.

![SharePoint Lists – choose the authorization method](/assets/images/data-sources/sharepointlist/sharepointlist-03-tenant-options.png)

* **Use multi-tenant Application** – Peakboard uses a ready-made, multi-tenant application that Peakboard has already registered in Microsoft Entra ID. You don't need to register your own app: a single click on [Authorize] is enough, after which you sign in with your Microsoft account. Note: depending on your organization's configuration, an administrator may have to grant a one-time consent to the Peakboard application (admin consent).
* **Use single-tenant Application** – You use your own app registration in your own Microsoft Entra ID directory (tenant). Authentication therefore stays entirely within your organization and does not depend on any shared application.

When you select [Use single-tenant Application] (1), you additionally enter the values of your own app registration: the [Application (client) ID] (2) and the [Directory (tenant) ID] (3). Then start the sign-in via [Authorize] (4).

![SharePoint Lists connection – single-tenant](/assets/images/data-sources/sharepointlist/sharepointlist-04-singletenant.png)

In short:

* **Multi-tenant** is the fastest route: one central application maintained by Peakboard that works across multiple organizations – no app registration of your own.
* **Single-tenant** gives you the most control: you register the application yourself in your directory, grant its permissions and don't rely on a shared application.

<div class="box-tip" markdown="1">
**Note**
Use the [Reuse existing connection] button to re-use a connection you have already authorized, without having to sign in again.
</div>

## Specify details

After signing in successfully, click [Retrieve SharePoint sites] to load the available SharePoint sites. Then pick the desired site under [SharePoint site (collection)] (1) and the list under [SharePoint Lists] (2).

The [Show user display name] checkbox returns the display names instead of the internal user IDs for person columns. Use the row limit to define how many rows are loaded at most, and the [Sort] section to set the sort column and direction.

![SharePoint Lists – pick site and list with data preview](/assets/images/data-sources/sharepointlist/sharepointlist-05-preview.png)

## Load data

Click [Load data] to generate a preview of the list data – on the right of the dialog you see the loaded rows with the list's columns (in the example above `id`, `Title`, `Description` and `Priority`). Besides the actual payload, meta columns are also delivered (e.g. creation date, creator, date of the last change), which you can use depending on your scenario.

Click [OK] to create the data source. It then appears in the Explorer under [Data] and can be linked to controls like any other data source.
