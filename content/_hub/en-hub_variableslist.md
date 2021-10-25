---
layout: article
title: Shared Variable Lists
menu_title: Shared Variable Lists
description: Peakboard Hub - Shared Variable Lists
lang: en
weight: 520
ref: hub-520
redirect_from:
---
In the section [Shared Variable Lists] you create tables that are used for reading Peakboard Boxes as well as for writing. 
To do this, enter a name for the list under [Add Variable List] and define a [token](/hub/en-hub_tokens.html) that grants access to this list.
Next, create the desired columns for the table.

![Shared Connections Picture 1](/assets/images/hub/hub_variableslist.png) 

When you confirm the dialogue, this list is displayed. 
You can open it with a click and add or edit rows. 
To use the list, click on [Add new data source] in the Peakboard Designer and select the data source [Peakboard Hub List]. 
Choose a name for the data source, define a loading interval, and enter the URL for Peakboard Hub in the field [Peakboard HUB URL]. 
Under [Token] you can enter the token you defined earlier. 
Now click on [Load Lists] and select a list. 
Load the data via [Load Data].

![Shared Connections Picture 2](/assets/images/hub/hub_variableslist2.png) 

If you want to write data into the Peakboard Hub list, this takes place via a Lua script. 
You can use the commands suggested in the script editor on the right. 
For example, you can add a new line with the following command:
```lua
	data.HubList.appendentry({MyString='', MyNum=0})
```

![Shared Connections Picture 3](/assets/images/hub/hub_variableslist3.png)
