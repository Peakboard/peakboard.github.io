---
layout: article
title: Peakboard API
menu_title: Peakboard API
description: Peakboard API
lang: en
weight: 700
ref: misc-700
redirect_from:
  - /misc/07-en-API.html
---

In order to access data from a variable or List Data Source via the API, the following information is required. It is also needed to write values to a list element or variable.

* Authentication: [Basic Authentication](https://en.wikipedia.org/wiki/Basic_access_authentication)
* BoxIP: IP of the Peakboard Box in the network, alternatively also DNS of the box is possible.
* PeakboardID: ID of the visualization, this can be found via the menu Button Settings (1). The ID (2) can then be copied from the corresponding field to the clipboard.
* ListName: Name of the list Data Source (3)
* VarName: Name of a variable

![API01](/assets/images/misc/API/API01.png)

Here are two examples of reading and writing using the API. 

The following GET can be used to read values from a List element:

```lua
GET: http://[BoxIP]:40404/api/dataread?id=[PeakboardID]&datakey=[ListName]
```

The value of a variable can be read analogously, only the name of the variable must be transferred as datakey.

![API02](/assets/images/misc/API/API02.png)

The following POST can be used to write values to a variable:

```lua
POST: http://[BoxIP]:40404/api/datapush?id=[PeakboardID]&datakey=[VarName]
```

Similarly, values can be written to a list element by passing the name of the List element as datakey.

![API03](/assets/images/misc/API/API03.png)