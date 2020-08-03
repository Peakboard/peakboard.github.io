---
layout: article
title: Variables and Lists
menu_title: Variables and Lists
description: Variables and Lists
lang: en
weight: 200
ref: scr-200

---
In sophisticated visualizations (with or without scripting), it will always be necessary to store data in a kind of global variable. 
For this reason, every visualization offers the possibility to create such variables in the project tree on the left.
You can access them from scripts and from dataflows.
Even an external access (i.e. via API call) for example with the [Peakboard Data Source](https://help.peakboard.com/data_sources/de-peakboard-data-soure.html) is possible. 
More information about the API calls can be found [here](https://help.peakboard.com/misc/de-push-nachrichten.html).
Generally, a distinction is made between single-scalar variables and tabular variables, also called lists.

![Create variable or list](/assets/images/scripting/variables/lists-variables-01.png)


### (scalar) variables

Each variable needs a unique name and a data type. The data types available in Peakboard are String, Number or Boolean. 
A further differentiation of the data type (e.g. integer, decimal, float, etc...) is not provided. 
This also applies to scripting.
The option **Save Changes to Box** ensures that the current value of a variable is retained after the restart (e.g. for a counter that counts over a very long period of time). 
**Can push data via API** means that the data is read and written from outside by an API Rest Call.

![Variable](/assets/images/scripting/variables/lists-variables-02.png)

### Lists

Lists consist of columns, each with a unique name and data type. 
With the plus button new columns can be added. 
If the list should be filled with data, the data can be edited, added or deleted directly in the table with the delete button. 
Editing the structure as well as the user data should be self-explanatory.

The two additional options below correspond to the function as for the scalar variable.

![List](/assets/images/scripting/variables/lists-variables-03.png)
