---
layout: datenquellen-article
title: Static Data
menu_title: Static Data
description: Information about static data in Peakboard
lang: en
ref: dat-01
---
Usually, the term “data source” means that data is retrieved from any previous system, be it a database, an ERP system or simply from the web with the help of a generic source such as JSON or XML. In Peakboard, static data is also referred to as a “data source”, which is characterized by the fact that the data does not originate from another location, but is stored locally in the Package. There are two main reasons why you need these static data sources:

1.Static data sources are used as a kind of “global variable” for various sophisticated scripting tasks. Different scripts can exchange information by writing to or reading from data sources.

2.Static data sources are used as containers to send push messages from the outside to the Peakboard-Box. For example, you could build a static table for error messages. A machine that falls into an error state pushes the error information into this static container. All connected controls then react automatically. An example of this can be found at [here.](/misc/02-en-push-messages.html)

To create a static data source, proceed as with all other data sources (/tutorials/03-en-xml-daten.html). You can create either a single value or a table.

![Add Static Data](/assets/images/data-sources/static-data/add-data-dialog.png)

## Maintain variable for single value

Besides the name and the data type (String, Number or Boolean), a default value can be specified. The option *Save on Box* allows to save the value later on the Peakboard box after a restart of the board. If this option is not selected, the value is reset to the default value after the restart.

![Add Static Data](/assets/images/data-sources/static-data/static-single-variable.png)

## Maintain static tables

To store table-like data statically, you must jump to maintenance in the corresponding dialog using the Edit button. In the lower area, you can create new columns for the table or delete them again. To maintain the data content, simply click in the corresponding table cell. To delete a table row, press the Delete key without placing the cursor in a cell, so that only the row is selected.
The option *Save on Box* is also available for the tables to persist the data on the box beyond the next boot process.

![Add Static Data](/assets/images/data-sources/static-data/static-table-variable.png)


