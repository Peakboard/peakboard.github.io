---
layout: article
product: hub
title: Using lists in the Peakboard Designer
menu_title: Using lists in the Peakboard Designer
description: Peakboard Hub - Using lists in the Peakboard Designer 
lang: en
weight: 810
ref: hub-810
redirect_from:
---

In the previous article you read [how to create a new list in Peakboard Hub](/hub/en-hub_new-list.html).

### Using the list in the Peakboard Designer

Once the list is created and your [Peakboard Designer is connected to the Peakboard Hub](/hub/en-hub_connectpbdesigner.html), you can include it in the Peakboard Designer using the data source [Peakboard Hub List](/data_sources/en-peakboard-hub-list.html). How this works is explained in detail [in the related article](/data_sources/en-peakboard-hub-list.html).

Instead of just reading the data from the list, you can also write data back to the Peakboard Hub list.
To do this, you create an appropriate script with the [script-editor](/scripting/de-script-editor.html). In the script tree in block mode under [FUNCTIONS/Publish to external systems/Peakboard Hub] (1) you will find ready-made building blocks for this task, which you can adapt to your needs. In Script-Mode you can find the snippets under [DATA/List Name].

![Script editor](/assets/images/hub/en_hub_list-04.png)

In the next article you will read [how to export the lists](/hub/en-hub_export-list.html).
