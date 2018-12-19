---
layout: article
title: Peakboard API
menu_title: Peakboard API
description: Peakboard API
lang: en
ref: misc-07
---

In order to access data from a list data source via the API, the following information is required.

* BoxIP: IP of the Peakboard Box in the network, alternatively also name of the box possible.
* PeakboardID: ID of the visualization, this can be found via the menu Button Settings (1). The ID (2) can then be copied from the corresponding field to the clipboard.
* ListName: Name of a list (3)
* VarName: Name of a variable

![API01](/assets/images/misc/API/API01.png)

Reading from a list:

```lua
GET: http://[BoxIP]/api/dataread?id=[PeakboardID]&datakey=[ListName]
```

![API02](/assets/images/misc/API/API02.png)

Write to a variable:

```lua
POST: http://[BoxIP]/api/datapush?id=[PeakboardID]&datakey=[VarName]
```

![API03](/assets/images/misc/API/API03.png)
