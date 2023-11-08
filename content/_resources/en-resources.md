---
layout: article
title: Resources
menu_title: Resources
description: Additional Resources
lang: en
weight: 100
ref: resources-100
redirect_from:
  - /misc/en-ressources.html
  - /misc/01-en-ressources.html
---

The resources are the third pillar of a Peakboard visualization besides the screens and data sources.
A resource can be any kind of additional material needed for a visualization: *Pictures, fonts, data files (e.g. Excel)*. 
In the simplest case, the respective resource is stored directly, statically in the Peakboard Project. 
However, a resource can also be dynamic and, for example, can be accessed via a **URL**, stored in a **cloud storage** (Dropbox, Google Drive, OneDrive) or on a **shared drive** within the same network (Network Share Resource). 
All these options are explained in this article, in the order they appear in the menu (see the screenshot below).

![Resource overview](/assets/images/misc/Ressources/resources_en.png)

## Local resource
The **local resource** is simply a static file: An Excel file, an image, etc., which is inserted directly from the file system into the *Explorer*, where it is static and is not changed.

## Network share resource
With the Peakboard Box shared network files can be accessed directly by a domain user.

## Web resource
The **web resource** is explained very simply: Simply store the desired URL (1), if necessary with an authentication (2) if the resource requires explicit authentication.

![Web resource](/assets/images/misc/Ressources/web-resource_en.png)

## Cloud resource: Dropbox, OneDrive, Google Drive
To load a resource from a cloud storage, you must first allow Peakboard to access your cloud storage. A corresponding window opens. Please note: Your access data to your cloud storage is NOT stored in the Peakboard Designer or on the Peakboard box, but only an access token. If you want to revoke this permission, just go to the settings of your cloud storage account. There the access is listed and can be deleted. This is a common procedure to allow third party access to a cloud storage.

The following screenshots show an example of the login to Google Drive and then the file selection. A copy of the file is stored in the designer for the preview. In the update run (on the Peakboard Box), however, the file is renewed from the cloud storage. The content is therefore not statically connected to the original application file, but dynamically.
![Google Drive login](/assets/images/misc/Ressources/drive-login_01.png)
![Google Drive login](/assets/images/misc/Ressources/drive-login_02.png)
![Google Drive login](/assets/images/misc/Ressources/drive-login_03_en.png)
![File overview](/assets/images/misc/Ressources/file-overview_en.png)

## Resource folder
If the number of resource records increases, it makes sense to organize resources in directories. You can simply drag and drop the files into a subdirectory.

![Resource folder](/assets/images/misc/Ressources/resource-folder_en.png)
