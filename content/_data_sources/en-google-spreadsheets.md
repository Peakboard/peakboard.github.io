---
layout: article
title: Google Spreadsheets
menu_title: Google Spreadsheets
description: Google Spreadsheets
lang: en
weight: 1600
ref: dat-1600
redirect_from:
  - /data_sources/30-en-google-spreadsheets.html
---
The Google Spreadsheets data source is used to extract tabular data from Google Spreadsheets and then use it in Peakboard like any other data source.

## Authorizing access to Google

In addition to the obligatory name of the data source, a connection to a Google Account must first be established. This is done via the Authorize button. A login window opens in which the Google Account must be entered. Peakboard as the application must then be given the right to read spreadsheets. This works exactly like any other third-party access. Username and password actually have no contact at all with the Peakboard Designer. Only a token is generated, stored in the package and later transferred to the box. You can also revoke this access within your Google Account, if necessary.

![image_1](/assets/images/Data_Sources/GoogleSpreadsheets/SpeadsheetsSource01.png)

## Setting up Spreadsheets access

The button with the three dots allows you to browse through the Google Drive folder structure containing the spreadsheets. After the selection with the double-click the path and file name are put into the appropriate text field and the desired sheet can be selected.
The following settings are possible to select the correct section from the spreadsheets as the data basis:

*    **Column Names in 1st Row** means that the column contents of the first line are used as headings for the output columns.
*    **Switch Rows and Columns** treats the rows and columns in reverse, like a pivot table.
*    **Select all** means that all the data in a sheet is selected (and not just a specific section).
*    **Range:** This value can be specified if only a certain section of the sheet is to be read. The notation is the same as in Excel, e.g. A5:C26.
*    **Max Items** defines the maximum number of lines that can be read (provided that NO Range is specified).
*    **Reload Interval** is the usual time period for automatic reloading of data in seconds.

Clicking Load Data in the preview displays the data according to the settings and updates the metadata in the column list.

![image_1](/assets/images/Data_Sources/GoogleSpreadsheets/SpeadsheetsSource02.png)
