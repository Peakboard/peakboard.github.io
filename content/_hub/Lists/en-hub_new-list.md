---
layout: article
product: hub
title: Add lists
menu_title: Add lists
description: Peakboard Hub - Add lists 
lang: en
weight: 800
ref: hub-800
redirect_from:
 - /hub/en-hub_variableslist.html
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

![Enter data](/assets/images/hub/en_hub_list-03.png)

### Permissions

To prevent anyone from accessing your data at will, you can specify [in the Peakboard Hub user management](/hub/en-hub_usermanagement.html) which user group has access to the list with their respective group key. The [article about user management](/hub/en-hub_usermanagement.html) also describes how you can assign user group permissions for individual lists in even more detail.

In the next article you will read [how to use the lists in the Peakboard Designer](/hub/Lists/en-hub_use-list.html).
