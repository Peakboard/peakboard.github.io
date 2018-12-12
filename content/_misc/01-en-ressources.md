---
layout: article
title: Resources
menu_title: Resources
description: Additional Resources
lang: en
ref: misc-01
---

Besides screens and data sources, the resources are the third pillar of a Peakboard visualization. A resource can be anything that is needed for visualization purposes: Images, fonts, scripts, data files (e. g. Excel). In the simplest case, the respective resource is stored directly and statically in the Peakboard-Package. However, a resource can also be dynamic and can, for example, be retrieved via a URL, stored in a cloud memory (Dropbox, Google Drive, OneDrive) or on a shared drive within the same network (bridge resource). All these options are explained in this article, in the order they appear in the menu (see screenshot below).

![image_1](/assets/images/misc/Ressources/Resources_01.png)

## Script

The Add Script menu item adds a new, empty script file. It can then be described manually in the Lua-Editor. This technique is usually used to store general functions that can be accessed by many other LUA scripts.

## Local Resource

Local Resource is simply a static file: A script, an Excel file, an image, etc. that is inserted directly from the file system into the package and is then available there statically and is no longer changed.

## Bridge Resource

The Peakboard Bridge is a small, resource-saving Windows service that is usually installed on a Windows server. If you want to create a resource that is not static, but is constantly refreshing itself from a shared network drive, Bridge resource is the right choice. The Peakboard-Box accesses the bridge and the file shared in the network. Why doesn’t the box simply access the file directly? The answer is simple: For security reasons. Usually the box is not part of the domain and therefore has no access to a network drive. The bridge service does, however, because it accesses the network drive under which the bridge Windows service runs in the AD user context.

The following screenshot shows the configuration mask for a bridge resource. All you have to do is specify the path to the desired file (in this case an Excel file on a shared drive) and the URL of the bridge server. If the bridge server is running under the default port 2501, the port specification can also be omitted.

![image_1](/assets/images/misc/Ressources/Resources_02.png)

## Web Resource

The Web resource is explained very simply: Simply enter the desired URL, if necessary with an authentication, if the resource requires an explicit authentication.

![image_1](/assets/images/misc/Ressources/Resources_03.png)


## Cloud Resource: Dropbox, OneDrive, Google Drive

To load a resource from a cloud memory, you must first allow Peakboard to access your cloud memory. A corresponding window opens. Please note: Your access data to your cloud memory is NOT stored in the Designer or on the Peakboard-Box, but only an access token. If you want to undo this permission, simply go to the settings of your cloud storage account. The access is listed there and can be deleted. This is a common procedure for allowing third parties to access a cloud storage device.

The following screenshots show the logon to Dropbox as an example and then the file selection. A copy of the file is stored in the Designer for the preview. In the update run (on the Peakboard-Box), however, the file is updated from the cloud memory. The content is therefore not static, but dynamically linked to the original application file.

![image_1](/assets/images/misc/Ressources/Resources_04.png)
![image_1](/assets/images/misc/Ressources/Resources_05.png)

## Resource Folder

If the number of resource entries increases, it makes sense to organize resources into directories. You can simply drag and drop the files into a subdirectory.

![image_1](/assets/images/misc/Ressources/Resources_06.png)
