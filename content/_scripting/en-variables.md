---
layout: article
title: Variables and Lists
menu_title: Variables and Lists
description: Variables and Lists
lang: en
weight: 200
ref: scr-200
redirect_from:
  - /data_sources/01-en-variablen.html
---

Besides data sources, controls and resources, variables and lists are an integral part of most projects. To cache and process data from different data sources, you can store them in a variable or a list. You can then use scripts or dataflows to access the variables as needed, or share them with other Peakboard Boxes or external applications.
To create a variable or list, click on [...] (1) in the corresponding area of the Explorer or right-click on [Variables] and select [Add variable] (2) or [Add list] (3).

![Add variable or list](/assets/images/scripting/variables/en_add-variable.png)

In the dialog of the variable or list you can choose from the three available data types string, number or boolean (4). Next, you give the variable or list a name (5) and can enter the first values (6). Optionally, you can activate that changes to the variable are saved on the Peakboard Box (7). This way, the values are still available after a restart of the Peakboard Box and will not be reset. You can also optionally activate that a value is set during the upload (8).

![Dialog variable or list](/assets/images/scripting/variables/en_dialog.png)

On the left side of the dialog, you will find the [Advanced] tab (9). In this area, you have the option to enable access to the variable or list via API (10). This way, you can either read or read and write the variable or list from outside using the Peakboard data source, for example. You also have the option to limit the variable to specified values (11). It is also possible to enable the connection to the Peakboard Hub (12) to share the variable or list with other Peakboard Boxes.

![Advanced](/assets/images/scripting/variables/en_advanced.png)

Unlike scalar variables with a single value, lists consist of columns, each with a unique name and data type. With the [+] symbol (13) you can add new columns. You can manually fill the list with values or edit or delete values directly in the table.

![Lists](/assets/images/scripting/variables/en_lists.png)
