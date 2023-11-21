---
layout: article
title: JSON
menu_title: JSON
description: Information about JSON Data  in Peakboard
lang: en
weight: 1100
ref: dat-1100
redirect_from:
  - /data_sources/06-en-json.html
---
JSON is a hierarchical format. It is used to transfer and store structured data.

Since Peakboard data sources are always tabular, you may need to select a section of the JSON file.

It is possible to reference either an array or a complex object within the JSON source. In the case of an array, the target table in Peakboard has any number of rows; in the case of the object, it has exactly one row with all the elements of the object as columns.

To configure the JSON data source, you give it a name (1) and specify the URL to the source in the [Connection] section (2).
If your source requires authentication, you can also select the authentication type there (3) and enter the corresponding data.

![Configure JSON data source](/assets/images/data-sources/json/en_JSON-datasource-01.png)

If you don't have your own URL to a JSON data source handy, you can use our sample URL to test the use of JSON:

[http://templates.peakboard.rocks:8888/api/RestView](http://templates.peakboard.rocks:8888/api/RestView)

The sample data source contains order data. It provides order number, order date, production target (number of ordered products), product name and product number.

In the [Request] section you can, if necessary, define your own header or body (only for POST and PUT requests) using the [Edit request header or body] button (4). For the body, you can also create a script.

If you want to use only a part of the JSON content, you have to formulate a JSONPath expression pointing to the start element in the [Specify details] section in the [Path] text box (5). An empty JSONPath expression takes the root element as its start.

The field [Max. rows] (6) limits the number of rows to a certain value.

When all settings are done, you can preview the data with [Load data] (7).

![Configure JSON data source](/assets/images/data-sources/json/en_JSON-datasource-02.png)

In the preview, you have the possibility to change the data type of the respective columns (8).

![Configure JSON data source](/assets/images/data-sources/json/en_JSON-datasource-03.png)

Check the following link for a tutorial on how to generally configure external data sources and link them to Peakboard elements:

[Getting started with external data sources using an XML data source as an example](/data_sources/en-xml-data.html).
