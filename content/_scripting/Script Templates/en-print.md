---
layout: article
title: Printing via Script
menu_title: Printing via Script
description: Guide to printing screen content via script.
lang: en
weight: 169
ref: scr-169
redirect_from:
---

If you need to print the content or specific parts of the screen, you can use the print function via script.

There are two options: printing the entire screen content or printing a specific group of elements.

## Printing the Entire Screen Content
To print the entire screen content, you can use the `printscreenshot` method. Alternatively, you can use the corresponding Building Block.

![Printing the entire screen content](/assets/images/scripting/Scripting_Beispiele/print/en-script-print-full-screen.png)

The method call in the script looks like this:

```lua
runtime.printscreenshot()
```

## Printing a Group of Elements
To print only certain elements, you first need to group them. In the Building Block, you can then select the desired group from the dropdown menu.

![Printing a group](/assets/images/scripting/Scripting_Beispiele/print/en-script-print-group.png)

If printing is done via script, the `print` method of the group is called. The following script shows how to print the `Group2` group on the `Screen1` screen.

```lua
screens['Screen1'].groups['Group2'].print()
```