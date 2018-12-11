---
layout: article
title: Peakboard.io Table
menu_title: Peakboard.io Table
description: Peakboard.io Table
lang: en
ref: io-02
---
Within the [Peakboard.io](https://peakboard.io) portal, you can maintain table objects. These tables can then be included in the Designer just like other data sources. Please see this [tutorial](/peakboardio//01-en-intro-peakboard-io.html) on using the portal and the API key to access Peaboard.io objects.

To use a Peakboard.io table, please create a corresponding data source (you may need to enter the user name and API key first). As usual, it must be named with a unique name. The selection box displays all tables associated with the specified API key (and its account). Max Items is the maximum number of rows that can be fetched. Reload Interval specifies the time interval in seconds how often the data is checked for actuality.

Finally, click Load Data. It opens the Preview window and displays the data. After closing the Preview window, the table is filled with the column specifications and the data source can be used immediately. Please note that the data types (e. g. string as string or integer as number) are converted into the corresponding data types in Peakboard. The type information is therefore retained.

![image_1](/assets/images/peakboard-io/table/datasource_peakboardio_table_01.png)
