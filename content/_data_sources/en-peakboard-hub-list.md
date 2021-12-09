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

At first, connect [Peakboard Hub to Peakboard Designer](/hub/en-hub_connectpbdesigner.html).


Then click on [Add new data source] in the Peakboard Designer and select [Peakboard Hub List]. 
Next, choose a name for the data source, define a loading interval, and enter the URL for Peakboard Hub in the [Peakboard Hub URL] field. 
Under [Token] you can also specify the previously defined token. 
Now click on [Load Lists] and select a list, where you can upload your data using [Load Data].

![Create Peakboard Hub List](/assets/images/hub/hub_variableslist2.png) 

If you want to write data to the Peakboard Hub list, you can do this using a Lua script. 
For this you can simply use the commands that are suggested in the script editor on the right side. 
For example, to add a new row, use the following command:

```lua
	data.HubList.appendentry({MyString='', MyNum=0})
```

![[Peakboard Hub List Lua Code Snipped](/assets/images/hub/hub_variableslist3.png)
