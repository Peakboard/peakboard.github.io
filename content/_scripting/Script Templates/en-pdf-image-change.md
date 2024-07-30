---
layout: article
title: Change PDF/Image
menu_title: Change PDF/Image
description: Describes how to change an image or PDF using a building block or script.
lang: en
weight: 154
ref: scr-154
redirect_from:
---

In Peakboard applications, you can display images and PDFs. If desired, these can be dynamically adjusted via a script.

### Changing PDF/Image

To display a PDF or image, you need the corresponding control (PDF/Image). Use in scripts must be activated for this and a name must be assigned.

Additionally, various image or PDF [resources](https://help.peakboard.com/resources/en-resources-intro.html) are necessary. If needed, a resource can be initially assigned to the control. Subsequently, you can switch between different resources.

This function is available both through Peakboard Building Blocks and standard Lua scripting.

### Building Blocks

![Building Blocks PDF change](/assets/images/scripting/Scripting_Beispiele/pdf-image-change/en-pdf-change-script.png)

The screenshot shows the Building Blocks for changing the PDF resource. Specifically, the command to set the new resource is seen in the purple-colored block: ```set source of PDF_Control in Screen1 to 'Demo_PDF.pdf'```. Here, ```Demo_PDF.pdf``` is the name of the new resource to be used.

In this example, two PDFs are alternately swapped. A variable tracks the currently displayed PDF (1 or 2). An enclosing IF statement checks this variable, switches to the other PDF resource accordingly, and updates the variable's value.

### Lua Code

The lower part of the screenshot shows the corresponding Lua code. Lines 2 and 5 demonstrate setting the new resource using the resource name.

The remaining lines describe the variable check and the switching of the currently used resource.

### PDF/Image Control

The example described above for PDFs works similarly for images. Instead of the PDF control, an image control is used. Likewise, image resources are required instead of PDF resources.