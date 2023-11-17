---
layout: article
title: Resources - Basics
menu_title: Basics
description: Resources - Basics
lang: en
weight: 100
ref: resources-100
redirect_from:
  - /misc/en-ressources.html
  - /misc/01-en-ressources.html
---

In addition to the various [data sources](/data_sources/en-index.html), [dataflows](/dataflows/en-index.html), [controls](/controls/en-index.html), [variables, scripts](/scripting/en-index.html) and screens, resources are an important pillar of a Peakboard project.

### Resources in the Peakboard Designer

A resource can be anything that is required as additional material for a visualization, such as images, fonts or data files like Excel or similar.

In the simplest case, the respective resource is stored directly and statically in the Peakboard project. However, a resource can also be dynamic and accessed via a URL, for example, or stored in cloud storage or on a shared drive within the same network.

You can find the resources area in the explorer. Right-click on [Resources] (1) to open the menu. Here you can add the various resource types (2).

The following resource types can currently be added:

* **[Local resources:](/resources/en-resources-local.html)** Static files from the file system that will not be changed further
* **[Network resources:](/resources/en-resources-network.html)** Shared network files that are accessed with a domain user
* **[Web resources:](/resources/en-resources-web.html)** Resources that are accessed via URL
* **[Cloud resources:](/resources/en-resources-cloud.html)** Resources from the following cloud storages - Dropbox, Google Drive, OneDrive and SharePoint

![Resources menu](/assets/images/resources/en_resources-intro-01.png)

### Using a resource folder

If the number of resource entries increases, it makes sense to organize resources in folders (1). You can simply drag and drop the files into a subdirectory to keep an overview even with many resources (2).

![Resources folder](/assets/images/resources/en_resources-intro-02.png)

### Display and delete unused resources

If you use many different resources in a project, it can happen that you lose track of which resources are actually being used, despite the use of folders for organization. To keep the project file as small as possible, it makes sense to delete local resources that you do not need from the project.

To see at a glance which resources are not currently being used, you do not have to manually check all the resources you have added. Open the resources menu by right-clicking on [Resources] and click on [Show unused resources] (1).

![Find unused resources](/assets/images/resources/en_resources-intro-03.png)

A dialog opens in which all resources that are not currently used in your project are displayed.
Use the name to check whether you still need the resources and delete the resources that you no longer need by clicking on [Delete] (1) in the [Action] column and confirm the deletion.

![Delete unused resources](/assets/images/resources/en_resources-intro-04.png)
