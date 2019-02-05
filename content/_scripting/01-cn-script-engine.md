---
layout: article
title: Peakboard脚本引擎
menu_title: Peakboard脚本引擎
description: 关于Peakboard脚本引擎的信息
lang: cn
ref: scr-01
---
Peakboard的一个基本思想是，终端用户并不一定必须是程序员（许多其他解决方案的终端用户必须是程序员）。尽可能多的功能应该在不使用脚本的情况下完成。脚本通常在以下情况下使用

*需要交互性（例如触摸屏）
*数据应该或必须准备好（例如筛选或聚合）
*文本应根据某些规则进行格式化

基本脚本语言是LUA，互联网上有许多文档和教程。可以在该[网站](https://www.lua.org/docs.html)上找到一份非常好的文档。但是，除了LUA的标准功能之外，Peakboard-Designer还提供了这种语言的一些扩展。这些扩展可以在脚本编辑器的左侧找到。

总的说来，Peakboard区分了两个如何使用脚本的概念：要么与特定事件一起使用，要么作为[动态属性](/tutorials/03-cn-xml-data.html)使用。本文展示了这两个概念的示例。

##事件脚本

我们假设一个简单的数据源，例如在这篇[文章]（/tutorials/03-cn-xml-data.html）中使用的数据源，其目的是不仅用新数据显示连接的“TableGrid-Control”，还显示每次刷新数据源时（例如，如果以这种方式设置，则为每隔90秒）文本字段中的数据记录数。为此，在“TableGrid-Control”旁边的面板上我们需要一个文本字段。这个文本字段必须有一个名字，但是会有一个名称-属性，如下面的屏幕截图所示。

![image_1](/assets/images/scripting/engine/TutorialScripting01.png)

“TableGrid-Control”只需绑定到数据源，数据源会自动对其进行更新（如上述[文章]所示）（/ tutorials/03-en-xml-data.html））。所以这与“TableGrid-Control”无关。但为了确定记录的数量，我们现在需要一个在数据源每次更新时运行的脚本。右键单击数据源并选择“编辑事件”来打开“脚本编辑器”。

![image_1](/assets/images/scripting/engine/TutorialScripting02.png)

在左侧，您会发现一个列表，列出了所有可以被访问的数据元素。这包括例如数据源和所有放置在主板上并有名称的控件（如果没有名称的话，这些控件无法通过脚本进行控制）。可根据数据源名称Data.Abfahrt来控制数据源。记录数量的属性为“总数”。文本字段必须使用屏幕规范进行寻址。文本字段具有若干属性，例如字体或可见性，或属性“文本”，用于设置内容。这些属性将产生屏幕截图中所示的代码行 Screens[0].MeinTextfeld.Text = Data.Abfahrt.Count。

![image_1](/assets/images/scripting/engine/TutorialScripting03.png)

代码行将在每次更新数据源时设置文本字段。下一张截图显示了预览。

![image_1](/assets/images/scripting/engine/TutorialScripting04.png)
