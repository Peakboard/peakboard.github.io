---
layout: article
title: Peakboard Hub List
menu_title: Peakboard Hub List
description: Peakboard Hub List
lang: en
weight: 2900
ref: dat-2900
redirect_from:
---

The condition for using the Peakboard Hub list data source is an existing connection to the Peakboard Hub.
You can [connect to a Peakboard Hub on premise or to a Peakboard Hub online](/hub/en-hub_connectpbdesigner.html) and [create a list](/hub/en-hub_variableslist.html), which you can then use in the next steps.
You can see if the connection is established in the Peakboard Designer by the Peakboard Hub status indicator (1).

![Peakboard Hub connected](/assets/images/data-sources/peakboard-hublist/en_hublist-01.png)

To add the Peakboard Hub list data source, right click on [Data] in the explorer, then select [Add Data Source] and [Peakboard Hub List] (1) to open the dialog.

![Add Peakboard Hub list](/assets/images/data-sources/peakboard-hublist/en_hublist-02.png)

Give the data source a unique name (1) and specify an interval at which the data source should be reloaded (2).

Then click the [Load Lists] button (3) in the [List] area to load all lists created [in the Peakboard Hub user group](/hub/en-hub_usermanagement.html) you are connected to.
Select the desired list in the [Variable lists] drop-down menu (4) and specify which columns to load in the [Columns] drop-down menu (5).

In the [Sort] area you can specify by which column (6) and whether in ascending or descending order (7) the data should be sorted. In the area [Filter] (8) you can define if the whole list or only a part of it should be loaded.
To specify even more precisely which data of your list should be loaded, you can define conditions for filtering in the [Advanced filters] (9) area.

Alternatively to these predefined sorting and filtering options you can switch the view with the button [Select SQL] (10) and define your filter conditions as an SQL statement yourself.

Finally click on [Load data] (11) to display a preview of the list. With [OK] (12) you create the data source.

![Add Peakboard Hub list](/assets/images/data-sources/peakboard-hublist/en_hublist-03.png)

If you want to write data to the Peakboard hub list, this is done by a script.
The data can for example come from an additional data source.

For the creation of such a script we provide prefabricated blocks in the [Building Blocks](/scripting/en-building-blocks.html) in the block mode and also in the script mode, with which you can create the script according to your needs. Of course you can also create the script manually.

For the above mentioned case, that the data comes from an additional data source, you create a refreshed script on this data source. Select [Only execute if data has been changed] (1). This will capture the data if something has changed.
In the [FUNCTIONS] (2) section of the [Script Editor](/scripting/en-script-editor.html), under [Publish to external systems] and [Peakboard Hub] in block mode, you will find the option [Add row at end] (3). Drag this block to the workspace of the script editor and complete it according to your needs with the data to be written to the list. In the example shown, another block has been added at the end (4) to reload the Peakboard Hub list so that it can be displayed live in, for example, a table.
After clicking [Save & close] (5), the script is finished and new incoming data from the additional data source is automatically written to the Peakboard Hub list.

![Write to Peakboard Hub list](/assets/images/data-sources/peakboard-hublist/en_hublist-04.png)
![Building block final](/assets/images/data-sources/peakboard-hublist/de_hublist-05.png)

To then visualize the Peakboard Hub List data source, drag and drop it from Explorer onto the workspace and you can, for example, display it as a table or further process it using other methods such as Dataflows.

![Visualize Peakboard Hub list](/assets/images/data-sources/peakboard-hublist/en_hublist-06.png)
