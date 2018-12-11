---
layout: article
title: Azure SQL
menu_title: Azure SQL
description: Information about Azure SQL Data in Peakboard
lang: en
ref: dat-12
---
This page explains the individual features when accessing an Azure SQL data source from Peakboard. Under the following link you will find a tutorial on how external data sources are generally configured and linked to Peakboard elements:

[Getting Started with External Data Sources Using the Example of an XML Data Source](/tutorials/03-en-xml-data.html)

The Azure SQL data source is used to connect SQL server instances with Peakboard running on Azure. Please note: From Peakboard the inquiries are not placed directly on the database, but via a service which is available under Peakboard.io. Neither the user data nor the access data are stored by the Peakboard.io service. Communication is encrypted across the entire route.

The Azure SQL source needs a unique name. To access the database, you must enter the server name, user name and password as well as the name of the database. All information is available in the Azure portal. You can then either enter an SQL command in the corresponding text field or select a table or view in the combo box (as in this example). Important note: The best thing to do is to create a view for the data that formats and aggregates the data in the way you want it to be displayed later. This saves a lot of rework when designing the visualization.

![Add Azure SQL Data](/assets/images/data-sources/azure/add-azure-sql-data.png)

A click on the Load Columns button generates the metadata and lists it. Check your entries by calling the Preview.

![Azure SQL Settings](/assets/images/data-sources/azure/azure-sql-settings.png)


![Azure Preview](/assets/images/data-sources/azure/azure-preview.png)
