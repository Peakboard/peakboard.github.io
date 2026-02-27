---
layout: article
title: Text-Ticker
menu_title: Text-Ticker
description: Information about Peakboard Designer Text-Ticker Control.
lang: en
weight: 860
ref: con-860
redirect_from:
  - /controls/03-en-text-ticker.html
  - /controls/en-text-ticker.html
---

The Text-Ticker control is specialized in integrating dynamic scrolling text into your visualization. Whether it's current news, status messages, or key figures—the ticker enables a space-saving presentation of information that moves continuously through the field of vision.
You can find the Text-Ticker in the Peakboard Designer in the Others group (1). Drag and drop the icon into your designer or place it with a double-click on your workspace.

![image_1](/assets/images/Controls/Text-Ticker/textticker_01.png)

# Configuration and Properties
## 1 Content and Data Source
The Text-Ticker can be linked to both static text and dynamic data sources. Double-click the control to open the configuration dialog:
* Text (Specify value): This property defines the content to be displayed. You can enter a fixed, static text here (1).
* Data Binding (Data source): The content can also be linked to a data source (2a). If you use a table as a source, specify the column and row to be displayed or select "use all rows" to display all rows of the selected column. Depending on the setting, the first row will be read or every row will be displayed consecutively (2b).
* Under Data and Data/Text in the properties, static content or content related to a data source can also be inserted.

![image_2](/assets/images/Controls/Text-Ticker/textticker_02.png)

# 2 Appearance and Control
In the properties on the right side, you can precisely control the behavior and representation of the ticker:
1. Control Positioning (General): Define the alignment of the element on the workspace. Use the first eight symbols to quickly place the control at corners or side centers, while the ninth symbol fills the entire available area. The last icon centers the element, where the size can be defined via the manual input fields. (1)
2. Padding (General): Use the Width, Height, Left, and Top fields to precisely position the ticker. Below that, you define an internal spacing (padding) for the text within its frame. In this area, a title can also be assigned to appear above the control. (2)
3. Direction and Ticker Speed (Data): The Direction property defines the scrolling direction of the text, while the Ticker Speed determines the scrolling speed of the text (3).
4. Use in scripts (Logic): Give the control a unique name to control it later via script (e.g., to dynamically change the text) (4).
5. Conditional Formatting (Logic): Use conditional formatting to control the color or visibility of the ticker based on specific events, for example (5).

![image_3](/assets/images/Controls/Text-Ticker/textticker_03.png)

## Note
Please note the following general additional information:

[General Properties](/controls/01-en-general-properties.html)

[Managing font formats with Font Manager](/misc/04-en-fonts.html)