---
layout: article
title: Peakboard Designer —— 基础知识
menu_title: Peakboard Designer —— 基础知识
description: Peakboard Designer —— 基础知识
lang: cn
weight: 100
ref: start-100
redirect_from:
  - /tutorials/01-cn-peakboard-designer-basics.html
  - /tutorials/cn-peakboard-designer-basics.html
---

很高兴了解到您对Peakboard感兴趣。在本页面，您可以找到与Peakboard基础知识相关的资料，也可以了解到其他信息，学会如何创建自己的第一个可视化。

如果您还没有下载Peakboard Designer，可以点击此[链接](https://peakboard.com/zh-hans/peakboard-designer/?utm_source=HelpCenter&utm_medium=Link&utm_campaign=GetStarted_Article)，免费下载软件。Peakboard Designer是一款适用于Windows电脑的桌面应用，您可能需要系统管理员的同意才能安装。

如果您更喜欢观看动态的内容，请访问我们的[视频教程页面](https://help.peakboard.com/tutorials/cn-video-overview.html)，选择相应的视频即可。该页面还会提供更多有关Peakboard的帮助信息。

# 欢迎使用 Designer

打开应用之后，就会出现一个“开始”对话框。您可以在此发现Peakboard帮助界面（1）或视频教程的链接，还可以使用多个模板(2)，帮助您轻松上手。作为示例，模板可用作个人可视化的基础。

![Peakboard 开始对话框](/assets/images/Tutorial/Get_Started/Peakboard_Get_Started_CN_01.png)

不同的模板用于不同的使用场景。点击“显示更多”（3），就会出现更多的模板；还会显示样本文件，解释如何使用脚本。在此教程中，我们不需要使用模板。选择“重新开始”（4），采用空白的可视化界面。

# Peakboard Designer的结构

现在，您看到的就是“真正的”应用界面。它分为5个部分：顶部为基础功能栏（1），左边的可视化包（2），中间的设计面板（3），右边的控件概览（4）以及底部的属性部分（5）。

![Peakboard Designer 总览](/assets/images/Tutorial/Get_Started/Peakboard_Get_Started_CN_02.png)

## 顶部工具栏

顶部菜单包含应用的基础功能。在此，您可以预览可视化（1），还能将创建的可视化加载至Peakboard Box（2）；您可以使用“设置”标签（3），为可视化进行基础设置（标题，描述，时间服务器）；或者更新软件。

![Peakboard Designer 工具栏](/assets/images/Tutorial/Get_Started/Peakboard_Get_Started_CN_03.png)

## 可视化包

左侧为可视化中所有元素的总览。该部分采用文件夹结构，不同类型的元素都有相应的文件夹。所有的数据源、数据流、变量、脚本和资源都展示在各自文件夹中。在最后一项“屏幕”，列出了您工作空间现有的全部屏幕。由于我们还未添加任何元素，因此目前文件夹为空。

![Peakboard Designer 可视化包](/assets/images/Tutorial/Get_Started/Peakboard_Get_Started_CN_04.png)

与Windows系统的文件浏览器相似，您可以右键点击文件夹，实现多种不同操作。此外，您还可以点击“...” 键实现这一功能。例如，右键点击“屏幕”文件夹，即可打开“编辑屏幕尺寸”菜单选项。您可以使用该选项定义可视化的大小。在本教程中，您可以使用默认值1920x1080（高清）。可视化会自动适配连接屏幕的分辨率，但长宽比应保持一致。

## 控件 

右侧为系统交互元素——也称为控件的概览，您可以使用这些控件对数据进行可视化处理。您可以将这些现有的控件用于不同场景，还可以对它们进行个性化设计。基础控件有文本框、图表网格、简单的图表（圆、线、条等），以及高级组合图表（高级图表），还有重复的表面图案，例如列表视图或窗格视图。所有元素均可通过拖放或双击的方法添加至设计面板。

![Peakboard Designer —— 控件](/assets/images/Tutorial/Get_Started/Peakboard_Get_Started_CN_05.gif)

## 属性

控件下方为属性概览。此处列出了当前选中元素的多种可调整参数和属性，每一个元素的参数都有所不同。例如，我们试着右键点击“屏幕”（左侧可视化包部分），添加一个屏幕。然后点击任一屏幕，就可以在属性部分设置屏幕的显示时间。它决定了在显示下一屏幕之前，当前屏幕应持续多久。

![Peakboard Designer —— 属性](/assets/images/Tutorial/Get_Started/Peakboard_Get_Started_CN_06.png)

# 创建可视化

对Designer最重要的部分有大概了解之后，就可以创建自己的第一个可视化。从右侧控件部分将文本框拖放至设计面板中。

然后就可以在属性部分为该元素定义不同的设置。调整元素，使其达到您的视觉要求。确定合适的字体、方向或背景；选择需显示的文本内容。其内容将会在后期由数据源中的文本加以代替。

![Peakboard Designer —— 控件](/assets/images/Tutorial/Get_Started/Peakboard_Get_Started_CN_05b.gif)

从“图表”中添加一个“线性仪表盘”，作为第二个元素。同样地，您可以设置不同的属性，例如大小、颜色等。

## 资源与图片的使用

您可以在可视化中使用不同的文件类型。例如，图片文件（JPG或PNG），PDF文件或数据源可以整合为一个Excel文件。如果要使用图片文件作为可视化中的标志，只需将图片文件拖拽至“可视化包”，或者前往文件夹菜单中的“资源”，添加一个“本地资源”。文件就添加至可视化包中。然后您就可以从“可视化包”中将文件拖放至设计面板——务必拖放至空白区域，随后就可以确定其大小及位置。对于其他的数据格式，整个过程也非常相似。

![Peakboard Designer —— 拖放](/assets/images/Tutorial/Get_Started/Peakboard_Get_Started_CN_07.gif)

## 连接数据源

无论是各种格式的数据，例如JSON和XML、数据库、SAP及社交媒体，还是机器、运输机和传感器信息，例如Simens S7和OPC UA，使用Peakboard，您可以轻松连接各种各样的数据，对其进行实时可视化处理。有关数据连接的更多信息，请参见[此处](https://peakboard.cn/interfaces/?utm_source=HelpCenter&utm_medium=Link&utm_campaign=GetStarted_Article).

在此教程中，我们使用一种简单的数据源——微软Excel文件。该[Excel文件 （下载）](/assets/files/examples/Peakboard_Example_Date.xlsx)直接被加载至可视化包中，它包括四种产品，涉及五类属性：标题、产品编号、库存数量、最小库存和存储容量。下载该文件，并像之前一样，通过拖放将其添加至可视化中。之后，文件就会成为该可视化的一部分。

如果您想从其他地方添加Excel文件，可以[在此](/data_sources/Excel/cn-excel.html)了解如何操作。

![Peakboard Designer ——添加Excel文件](/assets/images/Tutorial/Get_Started/Peakboard_Get_Started_CN_08.png)

然后，必须将该资源作为数据源添加至可视化。为此，在左侧部分右键点击“数据”文件夹，或者点击“...” 按钮，选择“添加数据源”，从列表中选择“Excel”。输入数据源名称“Excel_File”，在“文档”中确认已经上传的Excel文件。

![Peakboard Designer ——添加数据源](/assets/images/Tutorial/Get_Started/Peakboard_Get_Started_CN_09.gif)

在当前的情况下，您还需要确定使用哪一工作表，并确认第一行是否为标题栏。点击“完成”，即可保存数据源。

大功告成！您已经成功地首次将数据源连接至Peakboard。

## 绑定数据和控件

最后一步仍有待完成：您需要将数据源与控件相连。选择设计面板中的元素，在当前情况下即文本框；在右侧的“属性”部分，有一个“文本”选项，点击该行的“...” 按钮（1）。

![Peakboard Designer ——添加数据源](/assets/images/Tutorial/Get_Started/Peakboard_Get_Started_CN_10.png)

在弹出的窗口中，您可以选择数据源、需要使用的行和列。在本示例中，使用0行，并将“Title”列用作标题栏。请注意，在信息技术中，计数从0开始，因此0行即第一行。此处不需考虑标题栏，点击“确定”。

![Peakboard Designer ——添加数据源](/assets/images/Tutorial/Get_Started/Peakboard_Get_Started_CN_11.png)

现在，数据源中某一格的内容会显示在文本框。

您还可以将数据源与仪表盘绑定。在各列中，点击属性中的“...” 按钮，并选择Excel数据源。将“数据/值”部分（1）定义为“Stock_Quantity”列，“最小”（2）设置为“Min_Quantity”，“最大”（3）则设置为“Storage_Capacity”。

![Peakboard Designer ——填充仪表盘](/assets/images/Tutorial/Get_Started/Peakboard_Get_Started_CN_12.png)

# 预览

您已经完成设计过程，第一个可视化已经准备就绪。现在可以点击“预览”，查看最终的结果。“预览”（1）选项位于顶部工具栏的“主页”标签下。

![Peakboard Designer ——预览](/assets/images/Tutorial/Get_Started/Peakboard_Get_Started_CN_13.png)

一个新对话窗口就会弹出，显示设计结果。之后，您就可以将该可视化传输至Peakboard box。

# 下一步

如果您已经有一个Peakboard Box，请参考文章：[连接并传输第一个可视化](https://help.peakboard.com/get_started/cn-peakboard-connecting.html)。我们将解释如何插上Box，与其连接，并将可视化加载至Box。

希望您在使用Peakboard过程中能感受到乐趣，并且能够成功地使用该产品。如果您在使用Peakboard Designer时遇到疑问，请随时联系我们。所有的联系信息请参见 [下一页](https://peakboard.cn/contact/?utm_source=HelpCenter&utm_medium=Link&utm_campaign=GetStarted_Article)。
