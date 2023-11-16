---
layout: article
title: Microsoft Graph API Extension
menu_title: Microsoft Graph API Extension
description: Information about using the Microsoft Graph API Extension
lang: en
weight: 750
ref: dat-750
redirect_from:
---

To use the Microsoft Graph API Extension data source, the following minimum requirements are necessary:

* Microsoft account and valid Office 365 license including Microsoft Graph.
* Microsoft Azure account

To get started, you must first register an app in Microsoft Azure.

## Register an app to enable communication between Peakboard and Microsoft Graph

1. Log in to your Azure account and select the Azure service Azure Active Directory. 2. Select [App registrations] (1) in the left menu and click the plus icon [New registration] (2) in the top menu.

![New registration](/assets/images/data-sources/extension/msgraph/en_app-01.png)

3. Enter a suitable name (3) and select the type [single client] (4) as supported account type.
4. Under redirection URI select [public client/native (mobile and desktop)] (5).
5. Click the [Register] button (6).

![Register](/assets/images/data-sources/extension/msgraph/en_app-02.png)

## Customize the app

1. The overview of the app opens automatically after registration. In the menu on the left, select [Authentication] (1).
2. Under [Advanced settings] set the slider [Allow public client flows] to [Yes] (2).
3. Click on the [Save] button (3).

![Authentication](/assets/images/data-sources/extension/msgraph/en_app-03.png)

4. Use the menu on the left to switch to [API permissions] (4) to check them. Which permissions are needed for each query can be found in the Microsoft Graph documentation.
5. Make appropriate adjustments if necessary, or get the necessary administrator permissions from an administrator.

![Permissions](/assets/images/data-sources/extension/msgraph/en_app-04.png)

6. Switch to the [Overview] section (5) via the menu on the left.
7. For the next step you will need the IDs [Application ID (Client)] (6) and [Directory ID (Client)] (7) as well as the Client Secret (8). If you have newly registered the app, you have to create it first.

![IDs and Client Secret](/assets/images/data-sources/extension/msgraph/en_app-05.png)

## Installing the Microsoft Graph API Extension

After the [download]( https://templates.peakboard.com/extensions/Microsoft-Graph) and the [installation]( /data_sources/Extension/de-ManageExtension.html) of the Microsoft Graph API Extension three different access types (1) are available under [data sources].

![Access types](/assets/images/data-sources/extension/msgraph/en_access-types.png)

### Microsoft Graph user-delegated access

In this variant, you access the Microsoft Graph data with the name and the corresponding rights of a specific user. To use this variant you need to authenticate with your desired user. This is the most common type of access.

### Microsoft Graph app-only access

In contrast to user-delegated access, with this variant you only access the data with the name and rights of the app. Separate authentication is not necessary each time.

### Microsoft Graph user functions

You use the user functions when you want to call certain functions to perform an action instead of just querying a list. To use this variant, authentication is again required as with user-delegated access.

## Microsoft Graph Explorer

Since the selection of queries and functions is quite extensive, Microsoft offers a handy tool to browse and test the Microsoft Graph functions, [the Graph Explorer]( https://developer.microsoft.com/en-us/graph/graph-explorer).

![Graph Explorer](/assets/images/data-sources/extension/msgraph/graph-explorer.png)

In the accompanying [documentation]( https://learn.microsoft.com/en-us/graph/api/overview?view=graph-rest-1.0) you will also find many example queries that you can use.

## Add a query in the Peakboard Designer

As an example, let's call a usage report from Office 365. The report lists the aggregated Outlook activity per day for the entire organization. Reports like this are useful for giving system administrators insights into what's happening in their Office 365 tenant, for example. [Find related documentation here]( https://learn.microsoft.com/en-us/graph/api/reportroot-getemailactivityusercounts?view=graph-rest-1.0&tabs=http)

### Configure data source

For the query, it is best to use the app-only access. Make sure that you have given the app the appropriate permission [Reports.Read.All].
First, give the data source a name. Enter your IDs and the client secret in the corresponding fields (1) and connect using the [Connect] button. Then check the [Custom Call] checkbox (2) and insert the URL for the report from Graph Explorer (3):

`https://graph.microsoft.com/beta/reports/microsoft.graph.getEmailActivityCounts(period='D30')`

With the additional parameter [period='D30'] we retrieve the data of the last 30 days. Click on [Check] (4) to verify that the call is possible. After a positive confirmation, click on [Load data] in the right section to display a preview of the data.

![App-only access](/assets/images/data-sources/extension/msgraph/en_access-dialog.png)

### Prepare data for use

In case of reports, or all queries delivered in the form of a csv file, the data is delivered as a string. In this state it is difficult to process them in a chart. To prepare the data, create a dataflow on the data source (5).

![Add dataflow](/assets/images/data-sources/extension/msgraph/en_dataflow-01.png)

With this dataflow you convert the data type of the columns [Send] (6) and [Receive] (7) from string to number.

![Dataflow data types](/assets/images/data-sources/extension/msgraph/en_dataflow-02.png)

After that you delete all columns you don't need, all except [Report_Date], [Send] and [Receive]. The data is now prepared for further use.

![Delete dataflow columns](/assets/images/data-sources/extension/msgraph/en_dataflow-03.png)

### Create the chart

To display the data, a mixture of an area chart (8) for the sent e-mails and a line chart (9) for the received e-mails would be suitable, for example.

![Diagram](/assets/images/data-sources/extension/msgraph/en_chart-01.png)

The x-axis is always the date. The rest of the configuration is self-explanatory and easy to do thanks to the well-prepared data.

![Configuration](/assets/images/data-sources/extension/msgraph/en_chart-02.png)

If everything worked, the result should look something like this

![Result](/assets/images/data-sources/extension/msgraph/en_chart-03.png)
