---
layout: article
title: Peakboard web access
menu_title: Peakboard web access
description: Peakboard web access
lang: en
weight: 225
ref: admin-225
redirect_from:
---

<div class="box-tip" markdown="1">**Distinction from Peakboard Hub**

Peakboard Hub is mainly used for the administration of multiple Peakboard Boxes. In addition to a pure overview function through regularly updated screenshots, Peakboard Hub also offers the possibility to make changes to the connected Peakboard Boxes. This includes, for example, changing the active visualization or changes to the network connection, IP address, license or user of the Peakboard Box.
In comparison, the Peakboard web access provides an overview of a single Peakboard Box and is intended for the active user of the Peakboard Box. In addition to changing the active visualization, the Web Access also offers the possibility to control the existing visualization. You can change lists, variables or resources and execute defined functions.
</div>


## Connect to the Peakboard web access

The Peakboard web access offers the possibility to control your Peakboard Box via your PC or a cell phone with a web browser. To use the web access, you can connect to your Peakboard Box via the URL https://[boxname]:40405 or http://[boxname]:40404.

Afterwards you have the possibility to log in as a user of the Peakboard Box. If you have not created any other users, the default user is [pbadmin] with the supplied password.


## Peakboard web access interface

On the web access interface, you have a button in the left column to change the active visualization (1) as well as a button to log out (2).

In the center you can see what is currently displayed on the Peakboard box (3), how long ago the last update was (4) and you can set how often the screenshot is refreshed (5).

If you have made variables or lists available via the API in the active visualization, they will be displayed below the screenshot (6).

The right column shows the functions (7) and the files (8) used in the active visualization.

![Web access interface](/assets/images/admin/web-access/Web-Access_overview_en.png)


## Control your visualization

To change the active visualization, click on the [Vizualizations] button in the left column. In the visualization overview you can see which visualization is currently active based on the pause symbol (9). 

![Switch web access visualization](/assets/images/admin/web-access/Web-Access_visualization-01_en.png)

You can delete visualizations from the Peakboard box here by clicking on the trash can icon, or switch to the selected visualization by clicking the play icon. 

To read or edit a variable or list in the web access you have to open the respective variable in the Peakboard Designer. 

In the settings you can define via drop-down menu that the variable/list should be available via the API. You'll find the option either in the [Advanced] tab (10) or in the [Accessible via API] area (11).

![Web access variables and lists](/assets/images/admin/web-access/Web-Access_visualization-02_en.png)

![Web access variables and lists](/assets/images/admin/web-access/Web-Access_visualization-03_en.png)

Afterwards you will find this variable in the web access and can read or edit it there (12).

![Web access variables and lists](/assets/images/admin/web-access/Web-Access_visualization-04_en.png)

If there are files like images or PDF files in the visualization, you can also exchange those in the web access (13).

![Web access files](/assets/images/admin/web-access/Web-Access_visualization-05_en.png)

Finally, you also have the option to define functions. As with the variables and lists, you can also set them to be accessible via the API. If this is the case, you can execute them via the web access.

To do this, you have to create a new function in the explorer of the Peakboard Designer under [Scripts] -> [Functions].

Make sure that this function is defined as [Shared function] (14).

![Web access functions](/assets/images/admin/web-access/Web-Access_visualization-06_en.png)

You can also define input parameters here (15), which you can pass to the web access afterwards.