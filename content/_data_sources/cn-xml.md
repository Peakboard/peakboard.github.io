---
layout: article
title: XML
menu_title: XML
description: Peakboard中XML数据的相关信息
lang: cn
weight: 800
ref: dat-800
redirect_from:
  - /data_sources/08-cn-xml.html
---
在这两个入门教程中，仅将静态内容用于可视化。但是，只有当设计显示动态数据时，这一切功能才会变得非常令人兴奋。基本上，Peakboard区分嵌入动态内容的两个主要概念：

1. 数据来自外部源，只需要集成到面板中。例如，如果您完全或部分集成一个外部网站。或者使用BI工具（例如Power BI、QlikView、Tableau或类似工具）进行数据的准备工作。然后使用Peakboard作为一种显示程序，由相应的预系统负责视觉处理。

2. 数据来自外部源的原始数据。例如，这些源可以是XML、JSON、数据库或社交媒体流。在此，只传输纯数据，并直接在Peakboard上进行可视化。为此，可视控件可以很好地显示数据，例如图表、表格等。

本教程只讨论第二个选项。基础应该是XML数据源。请查看下方的XML文件。其中包含目前从斯图加特主站出发的所有班次，由德国铁路公司提供：

[https://open-api.bahn.de/bin/rest.exe/departureBoard?authKey=DBhackFrankfurt0316&lang=de&id=008000096](https://open-api.bahn.de/bin/rest.exe/departureBoard?authKey=DBhackFrankfurt0316&lang=de&id=008000096)

现在转到Peakboard Designer，创建一个新的看板，然后鼠标右键单击“包资源管理器”左上角的数据节点。从菜单中，选择XML作为数据源。

![image_1](/assets/images/data-sources/xml/xml-01.png)

在配置XML数据源的掩码中，您必须首先为数据源分配唯一的名称（例如Abfahrt），然后使用复制和粘贴功能从上方复制URL到“URL”字段中，然后单击“加载”。由Peakboard分析XML文件的结构，并显示XML元素树目录。根据您选择的元素，位于或低于选定元素的所有属性都显示在下方。我们之后不需要某些元素。在这里，您可以去掉复选标记，然后它们甚至不会出现在进一步的过程中。特别是对于非常复杂的XML文件，建议省略在早期没有用的全部元素。

![image_1](/assets/images/data-sources/xml/xml-02.png)

点击“确定”将所有值传送到主屏幕。单击“预览”可以检查正确的配置。这里还可以简单检查数据的真实性。

![image_1](/assets/images/data-sources/xml/xml-03.png)
