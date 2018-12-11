---
layout: article
title: 使用XML数据源的外部数据源示例
menu_title: 使用XML数据源的外部数据源示例
description: 使用XML数据源的外部数据源示例
lang: cn
ref: tut-03
---
在这两个入门教程中，仅将静态内容用于可视化。但是，只有当设计显示动态数据时，这一切功能才会变得非常令人兴奋。基本上，Peakboard可以区分嵌入动态内容的两个主要概念：

1.数据来自外部来源，只需要集成到面板中。例如，如果您完全或部分集成一个外部网站。或者使用BI工具（例如Power BI、QlikView、Tableau或类似工具）完成数据的准备工作。然后使用Peakboard作为一种显示程序，由相应的准备系统负责视觉处理。

2.原始数据来自外部来源。例如，这些来源可以是XML、JSON、数据库或社交媒体源。该程序只传输纯数据，并直接在Peakboard上进行可视化。为此，可视控件可以很好地显示数据，例如图表、表格等。

本教程只讨论第二个选项。基础应该是XML数据源。请查看下方的XML文件。其中包含目前从斯图加特主站出发的所有班次，由Deutsche Bahn提供：

[https://open-api.bahn.de/bin/rest.exe/departureBoard?authKey=DBhackFrankfurt0316&lang=de&id=008000096](https://open-api.bahn.de/bin/rest.exe/departureBoard?authKey=DBhackFrankfurt0316&lang=de&id=008000096)

现在转到Peakboard Designer，创建一个新的Peakboard，用鼠标右键单击数据节点左上角的包资源管理器。从菜单中，选择XML作为数据源。

![image_1](/assets/images/Tutorial/XML/TutorialExterneDatenquelle01.png)

在配置XML数据源的掩码中，您必须首先为数据源分配唯一的名称（例如Abfahrt），然后使用复制和粘贴功能从上方复制URL，然后单击加载。由Peakboard分析XML文件的结构，并显示XML元素树。根据您选择的元素，位于或低于选定元素的所有属性都显示在下方。我们以后不需要某些元素。在这里，您可以去掉复选标记，然后它们甚至不会出现在进一步的过程中。特别是对于非常复杂的XML文件，建议省略之前没有用的全部元素。

![image_1](/assets/images/Tutorial/XML/TutorialExterneDatenquelle02.png)

点击OK将所有值传送到主屏幕。单击预览可以检查正确的配置。这里还可以简单检查数据的真实性。

![image_1](/assets/images/Tutorial/XML/TutorialExterneDatenquelle03.png)

回到Designer的主窗口，我们现在可以进行可视化。数据应该简单地显示在表格中。为此，请将表格网格控件从工具箱拖到面板上，并使用指南调整表格元素的大小，使其填充整个面板，并与边缘具有适当距离。

![image_1](/assets/images/Tutorial/XML/TutorialExterneDatenquelle04.png)

接下来，我们必须将表元素连接到数据源。为此，属性“来源”位于右下角的属性窗口中。点击这三点，将进入选择数据源的对话框。目前只有一个数据源，我们的XML文件叫做Abfahrt。选择并点击OK确认。

![image_1](/assets/images/Tutorial/XML/TutorialExterneDatenquelle05.png)

表元素已经在面板上显示了数据源的所有列。但显示效果不佳，所以我们通过双击表格来打开下面的配置对话框。此处列出数据源的所有列。在标题列中，请为各列输入更好的描述性名称，例如“Zgtyp”而非“类型”，或者“Zeit”而非“时间”等。默认情况下，列宽包含一个星号。星号表示表的总可用宽度均匀分布在所有星号列上。您可以写下一个固定的数字（例如50像素的固定宽度为50）或关键字“Auto”。这意味着列的宽度等于最宽数据元素列的宽度，即最佳宽度。

![image_1](/assets/images/Tutorial/XML/TutorialExterneDatenquelle06.png)

请点击预览回到Designer中。结果应如下方截图所示。根据数据源中的规范，不断填充该表，而且每90秒刷新一次。

![image_1](/assets/images/Tutorial/XML/TutorialExterneDatenquelle07.png)
