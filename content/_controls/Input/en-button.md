---
layout: article
title: Button
menu_title: Button
description: Information about Peakboard Designer Button Control.
lang: en
weight: 710
ref: con-710
redirect_from:
  - /controls/en-button.html
---

The Button control is an interactive element of your visualization. It serves as the primary trigger for nearly all logic actions within Peakboard. While other controls often only display data, the button enables the user to actively intervene in events—whether by confirming processes, navigating through menus, or triggering complex scripts.
You can find the Button control in the Peakboard Designer in the Input group (1). Drag and drop the icon into your designer or place it on your workspace with a double-click.

[image_1](/assets/images/Controls/Button/button_01.png)

# Configuration and Properties
## 1 Data and Interaction
A button requires a label and a defined behavior upon interaction.
* Data/Text (Data): This is where the control receives its label. This text can be static or set dynamically via a data source or variable (1).
* Icon (Icon): Optionally, you can add an icon to the button to visually clarify its function (e.g., a save symbol or an arrow for navigation) (2).

[image_2](/assets/images/Controls/Button/button_02.png)

## 2 Appearance and Control
Once you have selected the button in the Designer, you can adjust all specific settings in the properties on the right side. Among other things, you can design the visual look of the control on the workspace here:
1. Control Positioning (General): Determine the exact alignment of the button on the workspace. Via the familiar 9-grid, you can align the button to corners or edges in a flash or let it fill the entire area. The last icon centers the button, where the size can be manually defined (1).
2. Padding (General): Use the Width, Height, Left, and Top fields for pixel-precise placement. Padding defines the internal distance of the text or icon from the button edge (2).
3. Use in scripts (Logic): Give the button a unique name (e.g., Btn_Submit) to address it in scripts or query its status (3).
4. Conditional Formatting (Logic): Change the color of the button from gray to green as soon as all required input fields have been correctly filled out, for example (4).
5. Tapped Event (Logic): The button is the most versatile tool in the Peakboard Designer. Countless processes can be realized with it: You can switch between different screens with one click, force data sources to refresh manually, write values to variables, flip through the pages of a PDF control, send HTTP requests to external APIs, toggle the visibility of warning messages, start or stop timers, and perform complex calculations based on user input (5).
The Tapped Event or the script editor opens with a double-click on the control.

[image_3](/assets/images/Controls/Button/button_03.png)

# Scripting
The true strength of the button lies in the script, which is executed as soon as the user touches or clicks the button or the icon.

## Example: Multi-Action via Button
In this example, a button should simultaneously write a value to the log and trigger a screen change. To do this, we also add a text field for the page number to the visualization, the value of which will be written to the log. It is important to activate the "Use in scripts" property and assign a description to the text field control to clarify which value should be saved.
1. Click the button and open the "Tapped" event in the "Logic" area on the bottom right.
2. Select the "Switch screen" building block from the "Application" category and place it next to the existing block in the editor. To ensure the correct screen is switched to, select the "with title" function in the dropdown of this block and search for the screen you want to switch to when the button is activated (1).
3. To also reflect the screen change in the log, place another "Write to log" building block under the existing block and change the content of the green text field to "Screen change to (Screen Name)" (2).
4. Save the script via "Save and Close" (3).

[image_4](/assets/images/Controls/Button/button_04.png)

Start the preview and check in the Log (1) if the return values are correctly returned. Click the button to interact:

[image_5](/assets/images/Controls/Button/button_05.png)

In this video, it is once again illustrated how the script for this example is built and tested for successful functionality:
[image_6](/assets/images/Controls/Button/button_06_gif.png)
