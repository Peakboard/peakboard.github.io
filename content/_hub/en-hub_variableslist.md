---
layout: article
product: hub
title: Lists
menu_title: Lists
description: Peakboard Hub - Lists 
lang: en
weight: 800
ref: hub-800
redirect_from:
---

In the Peakboard Hub, you can create lists that you can use in the Peakboard Designer.
These lists offer you the possibility to change data centrally for all Peakboard Boxes that use them.
In addition, these lists also offer you the possibility to store data quickly and easily in a central location via Peakboard.
For example, you can save the machine status for machines, regardless of their age or configuration, in order to generate a long-term evaluation.

### Creating a new list

To create a new list, click on the [Add] button (1) in the [Lists] area.
With the [Import] button you can load lists into the Peakboard Hub that have been saved as JSON strings in a text file.
How the creation works you can read in the section [Export Lists] below.

![Add list](/assets/images/hub/en_hub_list-01.png)

Give the list a name (1). Then create a data structure and define the columns of your list. To add a column, click on [Add Column] (2), give the column the desired name (3) and select the column type (4). You can create columns of the types, string, number or boolean.
To change the order of the columns, you can drag and drop them. When you have added all columns, save the list with [Save] (5).

![Create list](/assets/images/hub/en_hub_list-02.png)

In the next area you have the possibility to enter data for this list.
You can add rows with [Add] (1), you can enter values in the rows (2), delete rows (3) and save the changes with [Save] (4).

With a click on [Edit Properties] (5) you can change the column types and names afterwards.
With the option [Clear All] (6) you delete all entries from the list.

<div class="box-tip" markdown="1">**Note**.

To prevent someone from making unauthorized changes, you can set the permissions for each created list in detail [via the Peakboard Hub user management to suit your needs](/hub/en-hub_usermanagement.html).
</div>

![Enter data](/assets/images/hub/en_hub_list-03.png)

### Using the list in the Peakboard Designer

Once the list is created and your [Peakboard Designer is connected to the Peakboard Hub](/hub/en-hub_connectpbdesigner.html), you can include it in the Peakboard Designer using the data source [Peakboard Hub List](/data_sources/en-peakboard-hub-list.html). How this works is explained in detail [in the related article](/data_sources/en-peakboard-hub-list.html).

Instead of just reading the data from the list, you can also write data back to the Peakboard Hub list.
To do this, you create an appropriate script with the [script-editor](/scripting/de-script-editor.html). In the script tree in block mode under [FUNCTIONS/Publish to external systems/Peakboard Hub] (1) you will find ready-made building blocks for this task, which you can adapt to your needs. In Script-Mode you can find the snippets under [DATA/List Name].

![Script editor](/assets/images/hub/en_hub_list-04.png)

### Permissions

To prevent anyone from accessing your data at will, you can specify [in the Peakboard Hub user management](/hub/en-hub_usermanagement.html) which user group has access to the list with their respective group key. The [article about user management](/hub/en-hub_usermanagement.html) also describes how you can assign user group permissions for individual lists in even more detail.

### Exporting lists

You can also export the lists you have created in Peakboard Hub. There are two different ways to do this.

In the detailed view of your list, you can use [Duplicate Structure] (1) to copy the structure, i.e. the columns and column types of your list for a new list. You get to the creation dialog for a new list that already contains the identical columns and you only have to give it a new name.
Alternatively, you can use [Export Structure] (2) to download a text file that contains the structure of the list as a JSON string.
You can load files of this type into the Peakboard Hub with the [Import] button (3) to create a new list with the identical structure.

To export the contents of your list in its current state, click on [Download Data] (4).
Your data will be made available for download in CSV file format.
It is not possible to import this data back into Peakboard Hub at a later time.

![Export lists](/assets/images/hub/en_hub_list-05.png)
