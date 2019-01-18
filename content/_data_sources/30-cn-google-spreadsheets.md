---
layout: article
title: Google Spreadsheets
menu_title: Google Spreadsheets
description: Google Spreadsheets
lang: cn
ref: dat-30
---
The Google Speadsheets data source is used to extract tabular data from Google Spreadsheets and then use it in Peakboard like any other data source.

## Authorizing access to Google

In addition to the obligatory name of the data source, a connection to a Google account must first be established. This is done via the Authorize button. A login window opens in which the Google Account must be entered. Peakboard as the application must then be given the right to read spreadsheets. This works exactly like any other third-party access. Username and password actually have no contact at all with the Peakboard Designer. Only a token is generated, stored in the package and later transferred to the box. You can also revoke this access within your Google account, if necessary.

![image_1](/assets/images/Data_Sources/GoogleSpreadsheets/SpeadsheetsSource01.png)

## Setting up Spreadsheets access

The button with the three dots allows you to browse through the Google Drive folder structure containing the spreadsheets. After the selection with the double-click the path and file name are put into the appropriate text field and the desired sheet can be selected.
The following settings are possible in order to select the correct section from the spreadsheets as the data basis:

** Column names in 1st row **
means that the column contents of the first line are used as headings for the output columns.

** Switch rows and columns **
treats the rows and columns in reverse, like a pivot table.

** Select All **
means that all the data in a sheet is selected (and not just a specific section).

** Range **
This value can be specified if only a certain section of the sheet is to be read. The notation is the same as in Excel, e.g. A5:C26.

** Max Items **
Defines the maximum number of lines that can be read (provided that NO Range is specified).

** Reload Interval **
is the usual time period for automatic reloading of data in seconds.

Clicking Load Data in the preview displays the data according to the settings and updates the metadata in the column list.

![image_1](/assets/images/Data_Sources/GoogleSpreadsheets/SpeadsheetsSource02.png)
