---
layout: article
title: Webpage
menu_title: Webpage
description: Information about Webpage Data in Peakboard
lang: en
weight: 900
ref: dat-900
---
This page explains the individual features when accessing a table contained on a Web page. Under the following link you will find a tutorial on how external data sources are generally configured and linked to Peakboard elements:

[Getting Started with External Data Sources Using the Example of an XML Data Source](/tutorials/03-en-xml-data.html)

If you don’t have a URL to a suitable website at hand, but just want to try it out once, please use the following sample URL. It refers to a Wikipedia page with several tables. In this article we are only interested in the first, large table with the perpetual medal table (all medals per country accumulated over all Olympic Games). We are not interested in the other, smaller tables – further down on the page -. We want them filtered out.

[https://en.wikipedia.org/wiki/All-time_Olympic_Games_medal_table](https://en.wikipedia.org/wiki/All-time_Olympic_Games_medal_table)

Peakboard searches the respective web page for HTML tables. This works especially well if the HTML is syntactically correct. If you are trying to access a website where the data is not found correctly or is incomplete, check the HTML syntax.

In the corresponding data source mask a unique name must be assigned and the most important thing: The URL. Username and password in case the website requires authentication. All tables on the page have either a name or a number. There is a selection dialog box that helps you to identify the correct table if there are several tables on the page. Click on the small button with the three dots. All found tables are displayed in the combo box. You can try out which table is the right one. If the table has no HTML headers (`<th>`-Tag), the headings may be in the first line of the table. If so, activate the checkbox. Peakboard then takes this into account during data determination. Press OK to transfer the entries to the main screen.

![Select Table From Webpage](/assets/images/data-sources/webpage/select-table-from-webpage.png)

As usual, the metadata (columns and their data type) is also copied. You can still specify the time in seconds for the automatic refresh of the data source and, if necessary, restrict the maximum number of rows. If the source changes for any reason, Load Columns can be used to manually restart the metadata retrieval process. The stored metadata is then deleted and redetermined.

![Webpage Add Data Dialog](/assets/images/data-sources/webpage/webpage-add-data-dialog.png)

A click on Preview opens the data window to check the input.

![Webpage Preview Data](/assets/images/data-sources/webpage/webpage-preview-data.png)
