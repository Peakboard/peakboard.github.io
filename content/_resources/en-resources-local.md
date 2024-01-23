---
layout: article
title: Local resources
menu_title: Local resources
description: Local resources
lang: en
weight: 200
ref: resources-200
redirect_from:
---

Local resources are static files that are inserted directly from the file system and are then no longer changed.

Many different file types are accepted. These can be files that are only displayed, such as images or PDFs. However, files that contain data, such as Excel files, can also be added statically in order to process them further with [Dataflows](/dataflows/en-getting-started.html) or similar.

<div class="box-warning" markdown="1">
**Important note**

If files such as Excel are stored as a local resource in the project, they are not live data!
If the file is changed on the operating system, the data of the resource stored in the project does not change.
Select one of the other options to display real-time data.
</div>

### Add local resource

To add a local resource, right-click on [Resources] and click on [Add local resource] (1).

![Add local resource](/assets/images/resources/en_resources-local-01.png)

The selection dialog opens in which you select your desired file and add it with [Open].
You will then find the file in the Explorer in the [Resources] area, where you can organize them into folders if required. When you save your project, the resource is also saved. If you open your project on another system, the resource will still be available there.

You can edit (1), copy (2) or delete (3) the local resource with a right-click, download it to the current system in its current state (4) or display where you are currently using the resource in your project (5).

![Manage local resource](/assets/images/resources/en_resources-local-02.png)

Alternatively some controls and data sources also offer the option of adding a resource from their respective creation dialog. You will find a button [Add resource] in the file selection dialog which you can use to add new resources directly.
