---
layout: article
product: hub
title: Peakboard Boxes
menu_title: Peakboard Boxes
description: Peakboard Hub - Peakboard Boxes 
lang: en
weight: 130
ref: hub-130
redirect_from:
 - /hub/en-hub_boxmanagement.html
---

To manage your Peakboard Boxes you have to add them to the Peakboard Hub.
The procedure differs depending on whether you use a [Peakboard Hub on premise](/hub/Peakboard_Hub_on_premise/en-hub_boxmanagement.html) or a [Peakboard Hub online](/hub/Peakboard_Hub_online/en-hub-online_boxmanagement.html).
Be sure to use the correct article.

### Adding a Peakboard Box to the Peakboard Hub on premise

Click on [Add Peakboard Box] (1) under [Peakboard Boxes] to open the dialog that allows you to add a Peakboard Box.

To add a Peakboard Boxes to the Peakboard Hub on premise, you need the following information:

* **Hostname or IP Address (2):** You can find this [on the Welcome Screen of your Peakboard Box](/get_started/en-peakboard-box.html) or in the Peakboard Box settings in the Peakboard Designer.
* **Username (3):** Enter the username of the Peakboard Box user here.
* **Password (4):** Enter the corresponding password of the user here.

![Add Peakboard Box](/assets/images/hub/en_hub_boxes-01.png)

### Manage Peakboard Boxes

In the upper right corner you can now choose in which view your Peakboard Boxes should be displayed.

The list view (1) is recommended if you already have many Peakboard Boxes connected to Peakboard Hub on premise.
It gives you a quick overview of the groups, names and other data of your Peakboard Boxes. However, no screenshots are visible in this view.
To display them, select small (2) or large tiles (3) for viewing. Now you can see at a glance which visualization is currently loaded on the Peakboard Boxes.

Besides the screenshots that are updated regularly (except in the list view), you will find other elements that the different view types have in common. In the tile view you can click on the magnifying glass icon to enlarge the current screenshot and the reload icon to refresh the screenshot.
A green circle next to the name of the respective Peakboard Boxes indicates whether it is accessible or not (4). You can see the IP address (5), the user (6) and the version (7) of the respective Peakboard Box at a glance and can restart it by clicking on the [Restart] button (8). By clicking on the [...] icon (9), you can open a context menu that gives you access to further actions. You can update, reset, delete or assign your Peakboard Boxes to a group. With the button [Web Access] (10) you can switch to [the Peakboard Web Access](/administration/en-web-access.html).

![Manage Peakboard Boxes](/assets/images/hub/en_hub_boxes-02.png)

### Peakboard Boxes detail view

Clicking on the name of the Peakboard Boxes or on the screenshot will take you to the detail page of the selected Peakboard Boxes.

In the upper area **Box Information (1)** you can find general information about your Peakboard Box and identify existing problems by colored markings and status indicators. Some items can be adjusted by clicking on the pencil or gear icon.

Below that, the **Visualization (2)** area shows which visualization is currently loaded.
By clicking on the drop-down menu (3) you can select which of the currently available visualizations should be displayed on the Peakboard Box. You can also delete (4) or stop (5) the visualization there. You can update the screenshot by clicking on the corresponding button (6).

In the **Log Files (7)** section on the right, existing logs on the Peakboard Box are displayed. You can filter them by different criteria (8). With the button [...] you can also export the log files. You can either export the filtered logs with [Export] or all existing logs with [Export All]. In both cases the logs are exported in text format.

![Detail view 01](/assets/images/hub/en_hub_boxes-03.png)

Below the current screenshot you can find four charts with which you can get an overview of the **CPU (1)**, **Memory (2)** and **Network utilization (3)** of your Peakboard Box.
In the **Properties (4)** section, the BoxID and the license of the selected Peakboard Box are displayed. You can also change the license there. Under **Users & Roles (5)** the users available on the Peakboard Box and their assigned roles are displayed. These can be customized in the Peakboard Designer in the Peakboard Box Settings. In the **Certificates (6)** section, you can store certificates for your Peakboard Box.

![Detail view 02](/assets/images/hub/en_hub_boxes-04.png)

### Peakboard Box Availability

In the section [Availability] you can see the run and downtimes of the last 24 hours of your Peakboard Boxes.
The displayed timestamps show the time of the status change in each case.

![Availability](/assets/images/hub/en_hub_boxes-05.png)

### Update Peakboard Box

To update your Peakboard Boxes in the Peakboard Hub on premise, you must provide the desired update file yourself before you can perform the update.

#### Update the file

The prerequisite for updating your Peakboard Boxes is an up-to-date file with which the update can be carried out. With an existing internet connection, you can download the latest update file directly in the Peakboard Hub on premise interface. To do this, go to the [Settings] (1) area. In the [Update] section (2) under [Peakboard Box Update File Version] (3), you can see which version is currently stored on your Peakboard Hub on premise. You can download the latest version by clicking on the update icon (4). This is automatically stored under the path specified under [Box update package folder] (5).

![Peakboard Box Update](/assets/images/hub/en_hub_boxes-06.png)

If this does not work correctly or there is no internet connection, you can also carry out the process manually. To do this, download [the latest version for the update](https://downloads.peakboard.com/download/Peakboard/master/PeakboardRuntime.pbux) and store the file under the path specified in [Box update package folder] on your Peakboard Hub on premise server or adjust the path accordingly.

#### Perform update

You can now update the desired boxes in two different places. You can click on the [...] icon (1) in the Peakboard Boxes overview and then select [Update] (2). The version to be installed by the update is displayed behind the menu item.

![Peakboard Box update list](/assets/images/hub/en_hub_boxes-07.png)
![Peakboard Box update tiles](/assets/images/hub/en_hub_boxes-08.png)

Alternatively, you can see which version is currently installed in the detailed view of the Peakboard Box you want to update in the [System] section under [Version] (1). The version currently available for updates is displayed to the right. To perform the update, click on the update icon (2).

![Peakboard Box update detail](/assets/images/hub/en_hub_boxes-09.png)
