---
layout: article
title: Drawing Area
menu_title: Drawing Area
description: Information about Peakboard Designer Drawing Area Control.
lang: en
weight: 790
ref: con-790
redirect_from:
  - /controls/en-drawing-area.html
---

The Drawing Area is an interactive control that allows users to draw directly on the visualization. It is particularly suitable for handwritten notes, markings, sketches, or approval signatures.
You can find the Drawing Area in the Peakboard Designer in the Interactive group (1). Simply drag and drop the control into the designer or place it on your workspace with a double-click.

![image_1](/assets/images/Controls/Drawing-Area/Drawing-Area-Menu.png)

## Configuration and Properties

### 1 Appearance

In the properties on the right side, you can customize the appearance of the drawing area and the brush:

1. Color: Select the default color of the brush (1).
2. Thickness: Set the default thickness of the brush (2).
3. Toolbar: Use the four icons to define which options are available to the user in the toolbar: color selection, thickness selection, activation button and clear button (3).
4. Active: When enabled, the user can draw on the surface. When disabled, touches pass through to underlying elements such as buttons (4).
5. Save on device: The drawing is persistently saved on the Peakboard Box and restored when the visualization is started again (5).

### 2 Background

* Background: Choose the background color of the drawing area.
* Shadow: Set a shadow value for the control.

![image_2](/assets/images/Controls/Drawing-Area/Drawing-Area-Properties.png)

## Scripting

The Drawing Area offers various properties and functions for scripting:

1. Active: Read or set the activation status of the drawing area (1).
2. Show color selection: Control the visibility of the color selection in the toolbar (2).
3. Show thickness selection: Control the visibility of the thickness selection in the toolbar (3).
4. Show activation button: Control the visibility of the activation button in the toolbar (4).
5. Show clear button: Control the visibility of the clear button in the toolbar (5).
6. Thickness: Read or set the current brush thickness (6).
7. Color: Read or set the current brush color (7).
* Clear: Delete all drawings from the surface.

![image_3](/assets/images/Controls/Drawing-Area/Drawing-Area-Snippets.png)
