---
layout: article
title: Time Picker
menu_title: Time Picker
description: Information about Peakboard Designer Time Picker Control
lang: en
weight: 756
ref: con-756
redirect_from:
---

The Time Picker control is an interactive control that allows for a time to be conveniently set via a selection dialog. This is particularly useful for applications where time periods need to be defined (e.g., shift start times, booking timestamps, or alarm settings). Important distinction: While the DateTime data source only represents the current system time as a read-only value, the Time Picker serves for active user input and is thus changeable at runtime.
You can find the Time Picker in the Peakboard Designer in the Interactive group (1). Drag and drop the icon into your designer or place it on your workspace with a double-click.

![image_1](/assets/images/Controls/Timepicker/timepicker_01.png)

# Configuration and Properties
## 1 Data Source and Selection
A Time Picker is usually initialized with a start time and can react dynamically to inputs. Double-click the control to open the configuration dialog:
* Enter Data/Value: Set which time should be displayed by default when the visualization starts. You can choose a fixed time (e.g., 08:00) or bind the value dynamically to a data source (1).
* Data Format/Display Format: Determine the format in which the time is displayed in the input field (e.g., HH:mm for hours and minutes or HH:mm:ss if seconds are also relevant) (2).
* This specification can also be adjusted in the control's properties on the right side under Data (3).

![image_2](/assets/images/Controls/Timepicker/timepicker_02.png)

## 2 Appearance and Control
In the properties on the right side, you can precisely control the behavior and visual representation:
1. Control Positioning (General): Define the alignment of the element on the workspace. Use the first eight symbols to quickly place the control at corners or side centers, while the ninth symbol fills the entire available area. The last icon centers the element, where the size can be pre-defined via the manual input fields. (1)
2. Padding (General): Use the Width, Height, Left, and Top fields to precisely position the input field. Below that, you define an internal spacing (padding) for the text within the frame. (2)
3. Font (Appearance): Adjust the font size, font style, and color of the time display to ensure optimal readability on the screen (3).
4. Use in scripts (Logic): Give the control a unique name (e.g., TimePicker_Control) to retrieve the selected time later via script (4, 4b).
5. Conditional Formatting (Logic): Use conditional formatting to, for example, change the background color of the control when a certain time is reached or exceeded (5).

![image_3](/assets/images/Controls/Timepicker/timepicker_03.png)

# Scripting
The Time Picker control provides access to the selected time to use it for logic operations or data updates.

## Example: Output selected time in the log
In this example, we use the "TextChanged" event of the Time Picker to generate a message in the log with every change of time.
### Steps in the Script Editor:
1. In the Designer, open the Script Editor on the bottom right under Logic and the "TextChanged" event.
2. Select the "get value" building block (value) in the area of your screen under the name of the control (e.g., TimePicker_Control) and drag it into the editor.
3. Link this value to the "Write to log" block from the Peakboard Box category.
4. Save the script via Save and Close.

Start the preview and check in the Log (1) to see if the return value is correctly returned depending on the content of the control.

![image_4](/assets/images/Controls/Timepicker/timepicker_04.png)

In this video, it is once again illustrated how the script for this example is built and tested for successful functionality:

![image_5_gif](/assets/images/Controls/Timepicker/timepicker_05_gif.gif)
