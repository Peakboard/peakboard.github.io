---
layout: article
title: Data Web-Push
menu_title: Data Web-Push
description: How to set variables and lists using Web-Push.
lang: en
ref: instant_boards-03
---

Variables and lists can be set or changed outside the designer and the box via the Peakboard App or Web access.
Here, the variables and lists released for access are addressed via the [Peakboard API](/misc/07-en-API.html).
For this to be possible, the check mark for the push via API must be set for the desired elements.
If these changes should also be available after a restart of the box or the visualization, the check mark for saving on the box must also be set.

![image1](\assets\images\instant_boards\web\img0.png)

Access to the Web Push is via the URL http://MyBox:40404. 
The login data supplied with the box is required for the login.

The following screenshot illustrates the start screen after a successful login.
(1) shows a screenshot of the active visualization. The screenshot can be updated manually or opened in a new window via the two controls.
(2) allows you to start or stop the visualizations stored in the box. The corresponding .pbmx file can also be downloaded or deleted from the box.
(3) contains the variables and lists available in the active visualization that are authorized for access. In this case the list "Visitors" known from the previous screenshot.

![image1](\assets\images\instant_boards\web\img1.png)

With the update button the current entries of variables can be queried manually.
Using the Edit function, new entries can be made to the variables and lists, or old entries can be deleted or overwritten.
The following screenshot shows the initial state.
The + button adds a new entry to the list.

![image1](\assets\images\instant_boards\web\img2.png)

After the new visitor has been entered, the data record is transferred to the box via Update.
The updated screenshot shows that the list has been adjusted successfully.

![image1](\assets\images\instant_boards\web\img3.png)