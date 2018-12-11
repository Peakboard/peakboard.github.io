---
layout: article
title: PDF脚本示例
menu_title: PDF脚本示例
description: PDF脚本示例
lang: cn
ref: scr-10
---
在该脚本示例中，解释了自动启动的PDF演示文稿的脚本。


![image_1](/assets/images/scripting/Scripting_Beispiele/PDF.png)

可以为PDF演示文稿定义开始和结束页面，以使演示文稿在这两个页面之间运行。
‘开始页’和‘结束页’这两个变量作为数据源创建，在其中可以输入相应的页码。

演示文稿的脚本非常简单：

```lua
if screens['Screen1'].PDFViewer.page >= data.EndPage then
	screens['Screen1'].PDFViewer.page = data.StartPage
else
	screens['Screen1'].PDFViewer.page = screens['Screen1'].PDFViewer.page + 1
end

screens['Screen1'].Page.text = screens['Screen1'].PDFViewer.page .. ' / ' .. screens['Screen1'].PDFViewer.pagecount

```

首先，系统检查是否已经到达结束页面。如果已到达，则演示文稿会自动跳到先前定义的开始页面。
如果未到达，则会在当前页面中添加一个页面。
最后，当前页面将写入文本字段。当前页码通过`screens['Screen1'].PDFViewer.page`确定，然后用反斜线符号`screens['Screen1'].PDFViewer.pagecount`显示总页数。

该示例可以在模板->脚本下的Peakboard Designer中找到，也可以通过该[链接]下载（https://github.com/Peakboard/CoolStuff/raw/master/Scripts/PDF%20Viewer/PDF%20Viewer.pbmx)）。
