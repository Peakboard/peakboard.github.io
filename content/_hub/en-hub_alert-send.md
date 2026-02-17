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
---

In this article you will learn how to send alerts from a Peakboard Box to a group connected with Peakboard Hub.
You will create a button in your visualization that sends an alert message when clicked.

![Send alert](/assets/images/hub/de_hub_alert-send.gif)

### Set up Peakboard Hub connection

1. **Open Peakboard Hub connection:** Click the Peakboard Hub icon in the toolbar to access connection settings.
2. **Enter and save connection data:** Enter the Hub connection credentials, verify the visualization uses the correct connection, then click [OK].

### Create and configure alert button

3. Drag a [Button] from the [Interactive] section onto the visualization.
4. Double-click the button to open the Script Editor.
5. Search for the Alert block in the Script Editor.
6. Drag the [Send alert] script from the right panel into the Script Editor.
7. Select an alert type from the dropdown:
   - **Info:** General information messages.
   - **Warning:** Warning notifications.
   - **Problem:** Error or critical state messages.
8. Enter the alert text in the text field.
9. Click [Save & close] to save the script.

### Test the visualization

10. Upload the visualization to the Peakboard Box or use the preview function.
11. Click the alert button to send the alert to the connected group.
