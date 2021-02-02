---
layout: article
title: Resources
menu_title: Resources
description: Additional Resources
lang: en
weight: 100
ref: misc-100
redirect_from:
  - /misc/01-en-ressources.html
---

The resources are the third pillar of a Peakboard visualization besides the screens and data sources.
A resource can be any kind of additional material needed for a visualization: *Pictures, fonts, data files (e.g. Excel)*. 
In the simplest case, the respective resource is stored directly, statically in the Peakboard Package. 
However, a resource can also be dynamic and, for example, can be accessed via a **URL**, stored in a **cloud storage** (Dropbox, Google Drive, OneDrive) or on a **shared drive** within the same network (Bridge Resource/ Network Share Resource). 
All these options are explained in this article, in the order they appear in the menu (see the screenshot below).

![image_1](/assets/images/misc/Ressources/Resources_01.png)

## Local Resource

**Local Resource** is simply a static file: An Excel file, an image, etc., which is inserted directly from the file system into the *Explorer*, where it is static and is not changed.

## Bridge Resource

Outdated, better use Network Share Resource.

## Network Share Resource
With [Peakboard 2 Boxes](https://help.peakboard.com/misc/de-pb2.html) shared network files can be accessed directly by a domain user.

## Web Resource

The **Web Resource** is explained very simply: Simply store the desired URL, if necessary with an authentication if the resource requires explicit authentication.

![image_1](/assets/images/misc/Ressources/Resources_03.png)


## Cloud Resource: Dropbox, OneDrive, Google Drive

To load a resource from a cloud storage, you must first allow Peakboard to access your cloud storage. A corresponding window opens. Please note: Your access data to your cloud storage is NOT stored in the designer or on the Peakboard box, but only an access token. If you want to revoke this permission, just go to the settings of your cloud storage account. There the access is listed and can be deleted. This is a common procedure to allow third party access to a cloud storage.

The following screenshots show an example of the login to Dropbox and then the file selection. A copy of the file is stored in the designer for the preview. In the update run (on the Peakboard Box), however, the file is renewed from the cloud storage. The content is therefore not statically connected to the original application file, but dynamically.
![image_1](/assets/images/misc/Ressources/Resources_04.png)
![image_1](/assets/images/misc/Ressources/Resources_05.png)

## Resource Folder

If the number of resource records increases, it makes sense to organize resources in directories. You can simply drag and drop the files into a subdirectory.

![image_1](/assets/images/misc/Ressources/Resources_06.png)