---
layout: article
title: CSV
menu_title: CSV
description: Connecting a CSV data source in the Peakboard Designer
lang: en
weight: 300
ref: dat-300
redirect_from:
  - /data_sources/05-en-csv.html
---

This article explains how to use data in CSV format as a data source in Peakboard. CSV (Comma-Separated Values) is a simple, text-based table format in which every line represents one record and the columns are separated by a delimiter – usually a comma. The exact specification and further information about CSV can be found [here.](https://en.wikipedia.org/wiki/Comma-separated_values)

Throughout this article we use the file `shipments.csv` as a running example. It lists the outbound shipments of a warehouse with the columns Order ID, Customer, Destination, Number of items and Status.

## Add the data source

In the Explorer, right-click on [Data] and choose [Add data source]. In the following dialog, select the data source [CSV] (1) – the search box in the top right is the fastest way to find it.

![Add CSV data source](/assets/images/data-sources/csv/csv-01-add.png)

## Configure the CSV data source

In the [Add CSV data] dialog, first give the data source a name in the [General] section (1).

In the [Reload] section (2) you define whether and at which interval (in seconds) the data is reloaded automatically. Under [Reload state] you choose between [Startup] (once at start), [Periodic] (cyclically at the given interval) and [Manual] (only when you trigger the reload via a script).

In the [Connection] section, [Source type] (3) determines where the file comes from:

* **URL** – retrieval via a web address. For protected files, the classic web authentication methods are available via [Authentication Type].
* **NetworkShareFileDirect** – direct access to a file on a network drive, specifying the desired domain user and password.
* **File** – a local file that is imported into the project as a resource. This is handy when you want to work with the data offline at the beginning of a project.
* **Office365** / **Hub** – a file from SharePoint or OneDrive, or from the Peakboard Hub.

In our example we choose [File] and the file `shipments.csv`.

In the [Specify details] section you define how the file is interpreted:

* [Delimiter] (4) – the separator between the columns (default: comma). To use the tabulator as a separator, enter `\t` in the field.
* [Skip rows] (5) – skips a certain number of rows at the beginning of the file (for example a header that should be ignored). Use the [All] option or the [Max. rows] field next to it to limit the number of rows that are read.
* [First row contains column titles] (6) – when this option is enabled, the first row is interpreted as the column headers. Otherwise the columns are given generic names.

![Configure the CSV data source](/assets/images/data-sources/csv/csv-02-config.png)

## Load the data and check the preview

Click on [Load data] (1) to read the file. A preview with the detected columns and the first rows then appears on the right (2). This lets you check straight away whether the delimiter and the headers were recognized correctly.

You cannot change the data type of a column inside the CSV dialog – CSV data is always read in as a string first. You can tell by the "(String)" suffix in the column headers. If you want to convert a column to a numeric type, for example, create a [Dataflow](/dataflows/en-edit-columns.html) and use the [Change column data type] step there.

![Load the CSV preview data](/assets/images/data-sources/csv/csv-03-preview.png)

## Use the data source

Click on [OK] to create the data source. It then appears in the Explorer under [Data] (1). The local file was imported into the project as a resource and can be found under [Resources] (2).

From now on you can link the data source to Controls (for example a table, a chart or a Styled List) just like any other and display the shipment data on a dashboard.

![CSV data source in the Explorer](/assets/images/data-sources/csv/csv-04-explorer.png)

## Display the data on a dashboard

A CSV data source only becomes useful once you show its data. Link it to a Control – here a [Table] – and the shipment rows appear on your dashboard.

In the example below the [Shipments] data source (1) is bound to a Table Control (2). As soon as the binding is set, the Table shows the imported rows directly on the canvas (3).

![CSV data source bound to a Table in the Peakboard Designer](/assets/images/data-sources/csv/csv-05-dashboard-designer.png)

Click [Preview] to run the project in the Peakboard Runtime. The Table now displays the CSV data exactly as it will later appear on a Peakboard Box or a BYOD device.

![The example dashboard running in the Peakboard Runtime](/assets/images/data-sources/csv/csv-06-dashboard-runtime.png)

You can download the finished example and open it in the Peakboard Designer to explore the CSV data source, the Table binding and the dashboard layout: [Warehouse shipments dashboard (.pbmx)](/assets/files/examples/csv-shipments-dashboard.pbmx).
