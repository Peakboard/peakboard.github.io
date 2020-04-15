---
layout: article
title: Reading an array (OPC UA)
menu_title: Read an array (OPC UA)
description: Reading an array (OPC UA)
lang: en
weight: 1002
ref: misc-1002
redirect_from:
---

In order to be able to use individual elements of an array by an OPC UA server, the array must first be created as a subscription (1).

Via Edit a script can be created which is always executed together with the subscription (2).

The script uses a for-loop to iterate over the single elements of the array.
In the screenshot, the individual elements are then output in the log of the Peakboard Box (3).
In order to use these elements for calculations, KPIs or graphics, it is recommended to store them in a variable list.

![img01](/assets/images/misc/ArrayOPCUA/img01.png)

```lua
for index = 0, message.itemValue.length - 1 do
	peakboard.log(message.itemValue[index])
end
```
