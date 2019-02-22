---
layout: article
title: Excel阅读器
menu_title: Excel阅读器
description: Peakboard Designer中Excel阅读器控件相关信息。
lang: cn
ref: con-12
---

Peakboard提供了各种途径来整合来自不同来源的数据，然后再用控件可视化这些数据。这是默认方式。在某些情况下，从外部导入可视化而不仅仅是数据是很有用的。本章介绍了Excel阅读器控件，借助该控件，嵌入Excel文件中的图表可以直接集成为可视化的一部分。

以下示例中为一个包含表格和图表的Excel文件。在Excel中，每个图表都有一个名称。我们后续还会讲到。

![image_1](/assets/images/Controls/Excel-Viewer/Controls_ExcelViewer_01.png)

为了简单起见，我们在Peakboard-Designer中添加了Excel文件作为静态资源。当然，也可以在云内存、网络驱动器或网址中检索文件。这并不会改变该过程。

Excel阅读器控件最易使用“图表”属性进行配置（单击三个点按钮）。首先必须选择一个资源，然后选择所需的电子表格，最后选择所需的图表（因此图表名称很重要）。“实时刷新”属性限定了从资源重新加载图表的频率。

![image_1](/assets/images/Controls/Excel-Viewer/Controls_ExcelViewer_02.png)

下方截图显示了Peakboard预览中的Excel图表。

![image_1](/assets/images/Controls/Excel-Viewer/Controls_ExcelViewer_03.png)

>###注意！
>
>请注意，图表不一定与原始Excel中完全相同。由于技术原因，可能会出现光学偏差。

>###注意！
>
>请仔细了解在您的情况下使用Excel作为图表生成器是否真有意义！只有嵌入数据，使用Peakboard的特定图表来进行可视化才是更好的技术选项。
