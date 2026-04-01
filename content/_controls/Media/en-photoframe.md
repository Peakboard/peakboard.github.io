---
layout: article
title: Slideshow
menu_title: Slideshow
description: Information about Peakboard Designer Slideshow Control.
lang: en
weight: 330
ref: con-330
redirect_from:
  - /controls/en-photoframe.html
---

The Slideshow control is specialized in displaying a sequence of images in your visualization. Unlike the simple Image control, which displays only a single file, the Slideshow can process dynamic image lists and play them automatically. This is ideal for displaying product images or brand logos.
You can find the Slideshow in the Peakboard Designer within the Media & Documents group (1). Drag and drop the icon into your designer or place it on your workspace with a double-click.

![Image_1](/assets/images/Controls/photoframe/photoframe_01.png)

# Configuration and Properties
## 1 Data Source and Selection
A Slideshow requires a source from which it can retrieve image data. Double-click the control to open the configuration dialog:
* Resource / Path (Data): Select the images from your local resources here (1).
*Dynamic Link (Data): You can also bind the path to a data source. If the data source returns a list of paths, the slideshow will display them sequentially (2).
* The source can also be added under Data in the properties on the right side (3).

![Image_2](/assets/images/Controls/photoframe/photoframe_02.png)

## 2 Appearance and Control
In the properties on the right side, you can precisely control the behavior of the slideshow and its visual presentation:
1. Control Positioning (General): Set the alignment of the control on the workspace. The first eight icons allow you to quickly place the control in corners or at the center of a side, while the ninth icon fills the entire available area. The last icon centers the element, with the size pre-defined via the manual input fields. (1)
2. Spacing (General): You can precisely position the Slideshow using the Width, Height, Left, and Top fields. Below these, you can define internal spacing (padding) and a title for the images within the frame. (2)
3. Reload Interval (Data): Determine after how many seconds the next image should be displayed (3).
4. Use in Scripts (Logic): Give the control a unique name to easily identify it later in scripting (of other controls) (4).

![Image_3](/assets/images/Controls/photoframe/photoframe_03.png)
