---
layout: article
title: Quick tip - switch visualization with a presenter
menu_title: Quick tip - switch visualization with a presenter
description: Quick tip - switch visualization with a presenter
lang: en
weight: 900
ref: scr-900
redirect_from:
  - /misc/08-en-presenter.html
  - /misc/en-presenter.html
---

In some cases, such as the display of information on the shop floor, a single dashboard is not enough.
A remedy for this is to create several screens in one visualization.
These are run through automatically in the same way as they are arranged. Under Screen duration the time interval, for example 30 seconds for a change of the respective screen is indicated.
Here the entry 0 is equivalent to an infinite display duration. Therefore, there is no automatic screen change.

![Screen duration](/assets/images/misc/Presenter/screenduration.png)

A commercially available presenter can be used to switch through the created screens in a similar way to a presentation. The USB dongle is simply plugged into the USB slot of the Peakboard box.
Afterwards a global event is created with the help of the designer in the visualization.

![script selection](/assets/images/misc/Presenter/img2.png)

Right-click to open a menu with available events. Here the KeyPressed Event is selected and then a script with the following content is created.


```
-- Change Screen with Presenter
-- Presenter Button Page Down
if vkeys.pagedown == e.key then
-- Show Previous Screen
	runtime.showpreviousscreen()
-- Presenter Button Page UP
elseif vkeys.pageup == e.key then
-- Show Next Screen
	runtime.shownextscreen()
at the end
```

Mouse and/or keyboard can also be used as an alternative to a presenter.

A corresponding example can also be found in the scripting templates under the name "Key Inputs".
