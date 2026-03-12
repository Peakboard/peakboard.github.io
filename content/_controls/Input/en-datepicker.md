---
layout: article
title: Date Picker
menu_title: Date Picker
description: Information about Peakboard Designer Date Picker Control
lang: en
weight: 754
ref: con-754
redirect_from:
---

The Date Picker control is an interactive input element that allows a date to be conveniently selected via a calendar dialog. This is particularly useful for applications where data needs to be filtered (e.g., shift reports or logistics data) or where timestamps for manual bookings need to be set.
You can find the Date Picker in the Peakboard Designer in the Interactive group (1). Drag and drop the icon into your designer or place it on your workspace with a double-click.

![image_1](/assets/images/Controls/Datepicker/datepicker_01.png)

# Configuration and Properties
## 1 Data Source and Selection
A Date Picker usually requires a predefined start value and can optionally be restricted in its selectable range. Double-click the control to open the configuration dialog:
* Data/Enter value: Determine which date should be displayed by default when the visualization starts. You can choose a fixed date (e.g., the current date) or bind the value dynamically to a data source (1).
* Min/Max Date: Limit the time period the user can select to avoid incorrect entries (e.g., only dates in the past or only in the current year). To do this, specify the minimum (earliest) and maximum (latest) date (2).
* Data format/Display format: Determine the format in which the date is displayed in the input field (e.g., ddMMyyyy for Germany or MMddyyyy for international use) (3).
* Note: This specification can also be made in the control's properties on the right side (4).

![image_2](/assets/images/Controls/Datepicker/datepicker_02.png)

## 2 Appearance and Control
In the properties on the right side, you can precisely control the behavior and visual representation:
1. Control Positioning (General): Define the alignment of the element on the workspace. Use the first eight symbols to quickly place the control at corners or side centers, while the ninth symbol fills the entire available area. The last icon centers the element, where the size can be pre-defined via the manual input fields. (1)
2. Padding (General): You can precisely position the input field using the Width, Height, Left, and Top fields. Below that, you define an internal spacing (padding) for the text within the frame. (2)
3. Font (Appearance): Adjust the font size and color of the date to ensure optimal readability on the display (3).
4. Use in scripts (Logic): Give the control a unique name (e.g., DatePicker_Control) to retrieve the selected date later via script (4, 4b).
5. Conditional Formatting (Logic): Use conditional formatting to change the background color of the control, for example, if a critical date has been exceeded (5).

![image_3](/assets/images/Controls/Datepicker/datepicker_03.png)

# Scripting
The Date Picker control provides access to the selected date for use in calculations or changes.

## Example: Save selected date in a variable
In this example, we use the "TextChanged" event of the Date Picker to update a label or a data source with every new selection.
### Steps in the Script Editor:
1. In the Designer, open the script editor on the bottom right under Logic and TextChanged.
2. Select the "get value" block in the Screen section under the name you assigned to the control (here "DatePicker_Control") and place it on the script editor area.
3. Link this value to another control (e.g., a text field) or write it to the log. To do this, select the "Write to log" block from the Peakboard Box category, drag it onto the workspace, delete the default content, and link the two blocks.
4. Save the script by clicking "Save and Close".

![image_4](/assets/images/Controls/Datepicker/datepicker_04.png)

Start the preview and check the Log (1) to see if the return value is correctly returned depending on the content of the control. This is provided in number format.

![image_5](/assets/images/Controls/Datepicker/datepicker_05.png)

In this video, it is once again illustrated how the script for this example is built and tested for successful functionality:

![image_6](/assets/images/Controls/Datepicker/datepicker_06_gif.gif)