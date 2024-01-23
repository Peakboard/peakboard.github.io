---
layout: article
product: designer
title: Screenshot via HTTP Request
menu_title: Screenshot via HTTP Request
description: Screenshot of HTTP request
lang: en
weight: 900
ref: misc-900
redirect_from:
  - /misc/09-en-screenshot.html
---

Whether to document the current status of an application, for error analysis, data analysis or simply to share information.
There are many reasons to take a screenshot and use it elsewhere.

Technically, you can extract such a screenshot directly from the Peakboard Box via an HTTP GET request.

### Using the Peakboard API Swagger

Click on the [Swagger] button (2) in the [General] tab (1) of your Peakboard Box in the Peakboard Box settings to open the overview of the Peakboard API.

![Peakboard API Swagger](/assets/images/misc/Screenshot/en_screenshot-01.png)

Click on the [Authorize] button (1), enter the access data of your Peakboard Box (2) and confirm with [Authorize] (3) to authenticate yourself.

![Authorize](/assets/images/misc/Screenshot/en_screenshot-02.png)

In the [RuntimeApiManagementService] area you will find the HTTP GET request `/api/screenshot` (1).
Click on the [Try it out] button and then on [Execute] to test the function and display the request URL.
The request URL (2) is as follows, using GET as the method:

`[IP of the Peakboard Box]:40404/api/screenshot`.

![HTTP GET Request](/assets/images/misc/Screenshot/en_screenshot-03.png)

### Display screenshot on another Peakboard Box

You can now use the HTTP GET request to process the screenshot as you wish.
For example, you can display the screenshot of your first Peakboard Box on a second Peakboard Box.
This allows you to see directly from the second Peakboard Box whether the first Peakboard Box is running correctly.

To do this, simply create an image control (1) and add a new web resource (2).

![Add image control](/assets/images/misc/Screenshot/en_screenshot-04.png)

Enter the request URL (1) as the source URL and your access data for the Peakboard Box as Basic Authorization (2). Give the resource a name (3) and define a suitable reload interval (4).

![Add web resource](/assets/images/misc/Screenshot/en_screenshot-05.png)

If the visualization now changes on the first Peakboard Box, the change will be visible in the application on the second Peakboard Box after the reload interval has expired.
