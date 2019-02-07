---
layout: article
title: Switch visualization with a presenter
menu_title: Switch visualization with a presenter
description: Switch visualization with a presenter
lang: en
ref: misc-08
---

In some cases, such as the display of information on the shop floor, a single dashboard is not sufficient. 
A remedy for this is to create several screens in one visualization.
These are run through automatically in the same way as they are arranged. Under Screen duration the time interval for a change of the respective screen is indicated.
Here the entry 0 is equivalent to an infinite display duration. Therefore, there is no automatic screen change.

![Screen duration](/assets/images/misc/presenter/autoscreen.png)

A commercially available presenter can be used to switch through the created screens in a similar way to a presentation. The USB dongle is simply plugged into the USB slot of the Peakboard box.
A global script with the following content is then created in the visualization. 

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
