---
layout: article
title: Webpage
menu_title: Webpage
description: Information about Peakboard Designer Webpage Control.
lang: en
weight: 810
ref: con-810
redirect_from:
  - /controls/08-en-webpage.html
  - /controls/en-webpage.html
---

The Webpage control allows for a freely positionable browser within your visualization. With this, external websites or web-based user interfaces can be seamlessly integrated.
You can find the Webpage control in the Peakboard Designer in the Others group (1). Drag and drop the icon into your designer or place it with a double-click on your workspace.

![image_1](/assets/images/Controls/Webpage/webpage_01)

# Configuration and Properties
## 1 Data Source and Selection
To display a website, enter the URL or source under Data in the properties on the right side (1).
* View Mode (Data): Determine whether the website should be displayed in desktop or mobile view (2).
* Refresh interval (Data): Specify the number of seconds after which the website should automatically reload. This is particularly useful for live dashboards or news tickers (3).

![image_2](/assets/images/Controls/Webpage/webpage_02)

## 2 Appearance and Control
In the properties on the right side, you can precisely control the behavior and representation:
1. Control Positioning (General): Define the alignment of the element on the workspace. With the first eight symbols, the control can be placed at the corners or side centers of the workspace, while the ninth symbol fills the entire available area. The last icon centers the element, where the size can be pre-defined via manual input fields. (1)
2. Padding (General): Use the Width, Height, Left, and Top fields to precisely position the webpage window. Below that, you define an internal spacing (padding) for the content within its frame. In this area, a title can also be assigned that appears above the control. (2)
3. Scrolling and Zooming (Appearance): Adjust the initial view of the website during runtime using horizontal scroll, vertical scroll, and zoom intensity. A standard desktop view has a zoom size of 100 (3).
4. Conditional Formatting (Logic): Use conditional formatting to control the visibility of the browser based on certain events, for example (5).

![image_3](/assets/images/Controls/Webpage/webpage_03)

## 3 Advanced Settings
In the Advanced section of the properties, you can fine-tune the browser's behavior:
* Authorize (Advanced): Peakboard also supports websites that require password-protected access. (1)
* JavaScript Injection (Advanced): Use this field to inject your own JavaScript code, which will be executed automatically after the website has loaded. This optimizes the display by hiding disruptive elements or enables automated interactions for a customized view (2).
* User Agent: This setting defines how the Peakboard control identifies itself to the target website (its "ID card"). By changing the default value, you can influence the behavior of the website (3).
* Allow cross-platform usage (Advanced): This setting ensures a uniform display of web content across different platforms and devices. It helps bypass platform-specific restrictions so that complex websites or dashboards are displayed correctly everywhere.

![image_4](/assets/images/Controls/Webpage/webpage_04)

Start the preview to check if the website is displayed correctly.

![image_5](/assets/images/Controls/Webpage/webpage_05)
