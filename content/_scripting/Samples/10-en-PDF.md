---
layout: article
title: PDF Script Example
menu_title: PDF Script Example
description: PDF Script Example
lang: en
weight: 1000
ref: scr-1000
---
In this scripting example the script for a PDF presentation that starts automatically is explained.


![image_1](/assets/images/scripting/Scripting_Beispiele/PDF.png)

A start and end page can be defined for the PDF presentation, between which the presentation runs.
Two variables `StartPage` and `EndPage` are created as data sources in which the respective page numbers can be entered.

The script for the presentation is then very simple:

```lua
if screens['Screen1'].PDFViewer.page >= data.EndPage then
	screens['Screen1'].PDFViewer.page = data.StartPage
else
	screens['Screen1'].PDFViewer.page = screens['Screen1'].PDFViewer.page + 1
end

screens['Screen1'].Page.text = screens['Screen1'].PDFViewer.page .. ' /  ' .. screens['Screen1'].PDFViewer.pagecount

```

First, the system checks whether the end page has already been reached. If this is the case, the presentation automatically jumps to the previously defined start page.
If this is not the case, a page is added to the current page.
Finally, the current page is written into a text field. The current page number is determined via `screens['Screen1'].PDFViewer.page` and then the total page number is displayed in connection with a backslash `screens['Screen1'].PDFViewer.pagecount`.

This example can be found in the Peakboard Designer under Templates -> Scripting, or can be downloaded via this [Link](https://github.com/Peakboard/CoolStuff/raw/master/Scripts/PDF%20Viewer/PDF%20Viewer.pbmx).