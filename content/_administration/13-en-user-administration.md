---
layout: article
title: User administration
menu_title: User administration
description: User administration
lang: en
weight: 1300
ref: admin-13
---

Peakboard offers a multitude of application possibilities. As a result, different groups of people in a company encounter the visualizations. To cover this fact, Peakboard has the possibility to add users for each box, which are assigned to a certain user group. This group can then be provided with the authorizations required for the work of the respective group of people.
These permissions always affect the box and the connection from the Designer to the box. The Designer itself can always be used to its full extent.

## Affected components

The following is a list of the areas that are affected by the user administration:

![Overview](/assets/images/admin/usermanagement/Overview.png)

### Manage Visualizations
This item specifies whether a user with this user group may activate, deactivate, deploy or delete visualizations.

### Pair With PBIO
A user with this user group can link the box to a Peakboard.io account. Such a link is mandatory if a visualization uses a Peakboard.io feature.

### Push Data
If you want to manipulate variables of an active visualization by http-push, the user under whose context the push is sent needs this privilege.

### Set Properties
A user with this privilege can manipulate the properties stored on the box. Since these properties give access to the license key among other things, this point should be reserved exclusively for administrators.

### Manage Logs
This user group has access to the log files created on the box. This includes reading as well as deleting the files.

## Configuration of users and user groups

In addition to the administrator account, which is permanently linked to the operating system of the box and thus falls out of this concept, Peakboard provides two predefined user groups. On the one hand this is the "Designer Administrator" with almost full permissions. The other user is the so-called "App User", which meant to be a suggestion for people who want to interact with the box only via Android or iOS app, for example. The "App User" can change visualizations. Access to critical information such as the license key, however, is prohibited.
If you want to create a new user group, select the desired box and open the "Manage Users" option via the "Settings" button. After a short synchronization with the device, the configuration dialog is opened. It consists of two tabs, the first of which shows the users already configured on the box. The second tab provides information about the available roles and their distribution of rights.
![NewGroup](/assets/images/admin/usermanagement/NewUsergroup.png)
A click on the "Add" button creates a new user or a new user group depending on the tab. With the user group, you can define which privileges a user should have with this group by simply ticking the respective boxes. The name of the group can be changed by clicking in the name field. A small window opens in the tab "User". Here you enter the username of the new user account. A randomly generated password is displayed in the second text field. If you want to keep this, you have to save the password separately! It will no longer be accessible after closing this dialog.
![NewUser](/assets/images/admin/usermanagement/NewUser.png)
Once this is done, you only need to select the group to which you want the user to belong. The change of the name also runs here directly over the name field.
![Save](/assets/images/admin/usermanagement/Save.png)
To apply the changes, simply press the "Save" button. If desired, the settings of the currently selected box can also be applied to all other devices in the group. To do this, check the option "Replicate users and roles to other boxes in group '[Name of current group]'".

## Use device with user context

To use the devices in the desired user context, you have to add the boxes with the respective user in the Designer. In the management dialog press "Add". As you can see in the picture, user name and password must be entered in the dialog for device selection, as usual. Here the new user is stored with the desired user group instead of the otherwise required administrator account.
![AddDevice](/assets/images/admin/usermanagement/AddDevice.png)
A click on the "OK" button adds the Peakboard to the Designer. You can see which user is currently linked to the box in the "Username" column of the management dialog.
![ManageDialogEntry](/assets/images/admin/usermanagement/ManageDialogEntry.png)