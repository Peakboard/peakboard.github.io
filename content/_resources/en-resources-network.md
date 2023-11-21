---
layout: article
title: Network resources
menu_title: Network resources
description: Network resources
lang: en
weight: 300
ref: resources-300
redirect_from:
---

Similar to [local resources](/resources/en-resources-local.html), network resources are files in a file system.
In contrast to local resources, however, these are not imported directly into the project but are linked via their UNC path.

A UNC path (Universal Naming Convention) is a standard method for addressing files and resources on a network. A UNC path usually has the format: `\\server name\share name\path\filename`
The server name is the name of the computer or server on which the resource is stored. The share name is the name of the share on the server. The path is the path to the specific folder or file within the share and the file name is the name of the specific file.

The network resource itself is also not saved in the project. The prerequisite for using the resource is therefore the connection to the network in which the file is stored.
The advantage of this connection method is that the files are not as static as a local resource and can change if they are overwritten.

The prerequisite for access is a domain user with appropriate access rights to the shared network files.

### Add network resource

Right-click on [Resources] and click on [Add network resource] (1) to open the connection dialog.

![Add network resource](/assets/images/resources/en_resources-network-01.png)

In the connection dialog, first give the resource a name (1). You can also define a reload interval (2) in which the file is updated.
Then you need the connection data for your file. This includes the UNC path (3), the user name (4) including the domain name of the domain user who is to be used for the connection and who has the necessary rights, as well as the corresponding password (5). You can check the connection using the [Test connection] button (6).
Alternatively, you can also use an existing connection (7).

![Set up connection](/assets/images/resources/en_resources-network-02.png)

The resource is now displayed in the Explorer.
You can edit (1), copy (2) or delete (3) the network resource with a right-click or display where you are currently using the resource in your project (4).

![Manage network resource](/assets/images/resources/en_resources-network-03.png)

### Network resource error

It can happen that the Peakboard Designer displays the following error when accessing a network resource such as an Excel or an image:

```
System.ComponentModel.Win32Exception (0x80004005): Multiple connections to a server or shared resource from the same user using multiple usernames are not allowed. Disconnect all previous connections to the server or shared resource and try again.
```

The error indicates that the target drive you are trying to connect to is already set up on your computer. To resolve this problem, it is recommended that you temporarily disconnect from the drive in question and recreate the resource. Then add the drive again. This specific problem only occurs on your own notebook, as a Peakboard Box does not have any other network drives mounted by default.

Another possible reason for this error could be the settings of the inbound rules of the Windows Defender Firewall of your computer or domain. In this case, it is necessary for you or a responsible administrator to enable the required connections for the Peakboard Runtime for all profiles.

### Useful information

To dynamically add data sources and resources to the Peakboard Designer, the [Network Files Extension](https://templates.peakboard.com/extensions/Network-Files/en) is recommended.
This extension makes it possible to read the file names of all files located in a specific UNC network path. This allows you to dynamically add data sources and resources to the Peakboard Designer based on their file names.

To then switch between resources, [this script example](https://templates.peakboard.com/Script-Example-Image-Change/en) is worth a look. It shows how you can interactively exchange images.
