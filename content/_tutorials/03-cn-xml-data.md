---
layout: article
title: 使用XML数据源的外部数据源示例
menu_title: 使用XML数据源的外部数据源示例
description: 使用XML数据源的外部数据源示例
lang: cn
weight: 300
ref: tut-300
---
在两个入门教程中，仅将静态内容用于可视化。但是，只有当设计显示动态数据时，这一切功能才会变得非常令人兴奋。基本上，Peakboard区分嵌入动态内容的两个主要概念：

1. 数据来自外部源，只需要集成到面板中。例如，如果您完全或部分集成一个外部网站。或者使用BI工具（例如Power BI、QlikView、Tableau或类似工具）进行数据的准备工作。然后使用Peakboard作为一种显示程序，由相应的预系统负责视觉处理。

2. 数据来自外部源的原始数据。例如，这些源可以是XML、JSON、数据库或社交媒体Feed。在此，只传输纯数据，并直接在Peakboard上进行可视化。为此，可视控件可以很好地显示数据，例如图表、表格等。

本教程只讨论第二个选项。基础应该是XML数据源。请查看下方的XML文件。其中包含目前从斯图加特主站出发的所有班次，由德国铁路公司提供：

[https://open-api.bahn.de/bin/rest.exe/departureBoard?authKey=DBhackFrankfurt0316&lang=de&id=008000096](https://open-api.bahn.de/bin/rest.exe/departureBoard?authKey=DBhackFrankfurt0316&lang=de&id=008000096)

现在转到Peakboard Designer，创建一个新的看板，然后鼠标右键单击“包资源管理器”左上角的数据节点。从菜单中，选择XML作为数据源。

![image_1](/assets/images/Tutorial/XML/TutorialExterneDatenquelle01.png)

在配置XML数据源的掩码中，您必须首先为数据源分配唯一的名称（例如Abfahrt），然后使用复制和粘贴功能从上方复制URL到“URL”字段中，然后单击“加载”。由Peakboard分析XML文件的结构，并显示XML元素树目录。根据您选择的元素，位于或低于选定元素的所有属性都显示在下方。我们之后不需要某些元素。在这里，您可以去掉复选标记，然后它们甚至不会出现在进一步的过程中。特别是对于非常复杂的XML文件，建议早期省略没有用的全部元素。

![image_1](/assets/images/Tutorial/XML/TutorialExterneDatenquelle02.png)

单击“确定”将所有值传送到主屏幕。单击“预览”可以检查正确的配置。这里还可以简单检查数据的真实性。

![image_1](/assets/images/Tutorial/XML/TutorialExterneDatenquelle03.png)

回到Designer的主窗口，我们现在可以进行可视化。数据应该简单地显示在表格中。要执行此操作，请将表格网格控件从工具箱拖到面板上，并使用辅助线调整表格元素的大小，使其填充整个面板，并与边缘具有适当距离。

![image_1](/assets/images/Tutorial/XML/TutorialExterneDatenquelle04.png)

接下来，我们必须将表元素连接到数据源。为此目的，位于右下角的属性窗口中地属性“源”。点击三个点按钮，将进入“选择数据源”对话框。目前只有一个数据源，我们的XML文件名为Abfahrt。选择并单击“确认”。

![image_1](/assets/images/Tutorial/XML/TutorialExterneDatenquelle05.png)

表格元素已经在面板上显示了数据源的所有列。但显示效果不佳，所以我们通过双击表格来打开下面的配置对话框。此处列出数据源的所有列。在标题列中，请为各列输入更好的描述性名称，例如“Zgtyp”而非“type”，或者“Zeit”而非“time”等。默认情况下，列“宽度”包含一个星号。星号表示表格的总可用宽度均匀分布在所有星号列上。您可以写下一个固定的数字（例如50，固定宽度为50像素）或关键字“Auto”。这意味着列的宽度等于最宽数据元素列的宽度，即最佳宽度。

![image_1](/assets/images/Tutorial/XML/TutorialExterneDatenquelle06.png)

回到Designer中，请单击“预览”。结果应如下面截图所示。根据数据源中的规范动态填充该表格，而且每90秒刷新一次。

![image_1](/assets/images/Tutorial/XML/TutorialExterneDatenquelle07.png)
