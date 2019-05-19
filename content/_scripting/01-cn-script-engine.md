---
layout: article
title: Peakboard脚本引擎
menu_title: Peakboard脚本引擎
description: 关于Peakboard脚本引擎的信息
lang: cn
weight: 100
ref: scr-100
redirect_from:
  - /scripting/01-cn-script-engine.html
---
Peakboard的一个基本思想是，终端用户并不一定必须是程序员，就像许多其他解决方法一样。应该在不使用脚本的情况下完成尽可能多的功能。脚本通常用于以下情况：

* 需要交互性（例如，用于触摸屏）
* 应该或必须准备数据（例如，过滤或聚合）
* 应根据某些规则设置文本格式

基本脚本语言是Lua，互联网上有许多文档和教程。可以在此[网站](https://www.lua.org/docs.html)上找到一份非常好的文档。但是，除了Lua的标准功能之外，Peakboard Designer还提供了这种语言的一些扩展。这些扩展可以在脚本编辑器的左侧找到。


## 事件脚本

我们假设一个简单的数据源，例如在这篇[文章](/tutorials/03-cn-xml-data.html)中使用的数据源，其目的是不仅显示连接的“表格网格”控件与新数据，还显示每次刷新数据源时（例如，如果以这种方式设置，则为每隔90秒）,文本字段中的数据记录数。要这样做，我们需要一个文本字段在“表格网格”控件旁边的面板上。这个文本字段必须指定一个名称，会有一个“名称”属性，如下面的屏幕截图所示。

![image_1](/assets/images/scripting/engine/TutorialScripting01.png)

“表格网格”控件只需绑定到数据源，数据源会自动对其进行更新（如上面提到的这篇[文章](/tutorials/03-cn-xml-data.html)所示）。所以这与“表格网格”控件无关。但为了确定记录的数量，我们现在需要一个在数据源每次更新时运行的脚本。右键单击数据源并选择“编辑事件”来打开“脚本编辑器”。

![image_1](/assets/images/scripting/engine/TutorialScripting02.png)

在左侧，您会找到一个列表，列出了所有可以被访问的数据元素。例如，这包括数据源和所有放置在面板上并有名称的控件（如果没有名称的话，则无法通过脚本控制这些控件）。数据源可根据其名称Data.Abfahrt来控制。记录数量的属性为Count。文本字段必须使用屏幕规范进行处理。文本字段具有若干属性，例如：字体或可见性，或属性“文本”，用于设置内容。这将导致截屏所示的代码行Screens[0].MeinTextfeld.Text = Data.Abfahrt.Count。

![image_1](/assets/images/scripting/engine/TutorialScripting03.png)

这将在每次更新数据源时设置文本字段。下一张截屏显示了预览。

![image_1](/assets/images/scripting/engine/TutorialScripting04.png)
