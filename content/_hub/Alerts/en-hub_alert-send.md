---
layout: article
product: hub
title: Send alert
menu_title: Send alert
description: Peakboard Hub - Send alert
lang: en
weight: 930
ref: hub-930
redirect_from:
 - /hub/en-hub_alert-send.html
---

In this article you will learn how to send alerts from a Peakboard Box to a group connected with Peakboard Hub.
You will create a button in your visualization that sends an alert message when clicked.

![Send alert](/assets/images/hub/de_hub_alert-send.gif)

### Set up Peakboard Hub connection

1. **Open Peakboard Hub connection:** Click the Peakboard Hub icon in the toolbar to access connection settings.
2. **Enter and save connection data:** Enter the Hub connection credentials, verify the visualization uses the correct connection, then click [OK].

### Create and configure alert button

1. Drag a [Button] from the [Interactive] section onto the visualization.
2. Double-click the button to open the Script Editor.
3. Search for the Alert block in the Script Editor.
4. Drag the [Send alert] script from the right panel into the Script Editor.
5. Select an alert type from the dropdown: **Info** (general information messages), **Warning** (warning notifications) or **Problem** (error or critical state messages).
6. Enter the alert text in the text field.
7. Click [Save & close] to save the script.

### Test the visualization

1. Upload the visualization to the Peakboard Box or use the preview function.
2. Click the alert button to send the alert to the connected group.
