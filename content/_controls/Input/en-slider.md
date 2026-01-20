---
layout: article
title: Slider
menu_title: Slider
description: Information about Peakboard Designer Slider Control.
lang: en
weight: 780
ref: con-780
redirect_from:
  - /controls/en-slider.html
---

The Slider is an interactive control that allows the user to set a numerical value within a predefined range by sliding a handle. It is particularly suitable for the intuitive control of setpoints, brightness, thresholds, or capacities.
You can find the Slider in the Peakboard Designer in the Interactive group (1). Simply drag and drop the control into the designer or double-click the icon to place it on your workspace.

![image_1](/assets/images/Controls/Slider/slider01.png)

## Configuration and Properties
### 1 General and Data Binding
For the slider to function correctly, you must define its working range. Click on the control to configure the following:
* Data Source / Variable: Link the slider to a variable of type Number. Every movement of the slider immediately writes the current value back to this variable (1).
* Initial Value: Determine the position of the handle when the visualization starts. Ideally, you should set this value within the linked variable (2).
* Minimum / Maximum (Data): Define the start and end points of the scale (e.g., 0 to 10) (3).

![image_2](/assets/images/Controls/Slider/slider02.png)

### 2 Appearance and Labeling
In the properties on the right side, you can refine the design and feel of the slider:
1. Label (Data): Assign an individual label to your slider (1).
2. Font & Orientation (Appearance): Choose the font for the label and select between a horizontal or vertical alignment of the slider (2).
3. Value Position & Value Font (Value): Display the current value of the slider in your visualization and edit the font of the displayed value (3).
4. Slider & Bar (Appearance): Adjust the colors and size of the slider handle (thumb) and the track to match your dashboard design (4).
5. Scale Representation (Scale): Choose whether—and in what color and frequency—a dashed scale should be displayed on the slider (5).
6. Use in Scripts (Logic): Give the control a unique name to easily identify it later in scripting (6).

![image_3](/assets/images/Controls/Slider/slider03.png)

## Scripting
The slider offers a specific event to react to changes in real-time:
* ValueChanged: This script is executed every time the handle is moved and the numerical value changes.

### Example 1: Output value in the log
Often, a threshold value needs to be monitored. In this example, we write the current value of the slider to the log.
Steps in the Script Editor:
1.	Open the script editor under Logic and "ValueChanged".
2.	Under Functions, select the "Write to log" block (1).
3.	Delete the default content, access your slider via the Controls category, and select the "Get value" block (2).
4.	Combine both blocks to see the value live in the preview (3).
5.	Save the script by clicking "Save and Close".

![image_4](/assets/images/Controls/Slider/slider04.png)

Start the preview and check the Log (1) to see if the return value is correctly displayed based on the selected slider value. Select different values to expand the log.

![image_5](/assets/images/Controls/Slider/slider05.png)

### Example 2: Adjust value via text box
As an extension, you can insert a text box into the display area to adjust the slider's value via this text box. Insert a text box anywhere in your designer and link it to a numerical variable (1).

![image_6](/assets/images/Controls/Slider/slider06.png)

Now, go to the script of the Text Box under "Tapped":
1.	Drag "Set value" from the Value section of the Slider control into the script editor (1a), (1b).
2.	Select the variable linked to the text box (2) and connect the two blocks.
3.	Under Functions, select the "Write to log" block (3) and again the text box variable, then link these blocks to each other and to the previous block (4).
4.	Save the script by clicking "Save and Close".

![image_7](/assets/images/Controls/Slider/slider07.png)

Start the preview and check the slider and the Log (1) to see if the value is correctly displayed and returned based on the input in the text box. Enter different values to expand the log.

![image_8](/assets/images/Controls/Slider/slider08.png)

In this video, it is once again illustrated how the script for the first example is built and tested for successful functionality.

![image_gif9](/assets/images/Controls/Slider/slider09-mp4.gif)
