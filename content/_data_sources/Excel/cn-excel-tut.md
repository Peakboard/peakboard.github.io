---
layout: article
title: 包含来自网络驱动器的Excel文件
menu_title: 包含来自网络驱动器的Excel文件
description: 包含来自网络驱动器的Excel文件
lang: cn
weight: 600
ref: dat-6000
homepage: true
image: /assets/images/Tutorial/Overview/Tutorial_Excel_Small.png
redirect_from:
  - /tutorials/04-cn-excel-tut.html
---
Peakboard支持各种准确数据源；通常新手只喜欢使用Excel。可查找[此处](/data_sources/13-cn-excel.html)了解有关Excel普通文档作为数据源。本教程逐步展示了从包含文件到在小图表中准备数据的完整过程。

以下屏幕截图显示了原始应用程序文件。它包含一个由两个部门（A和B）组成的表格，以及一种月度绩效指标。电子表格还包含其他数据和Excel图表。我们对所有这些数据不感兴趣。我们只想处理顶部的第一张表格。

![image_1](/assets/images/Tutorial/Excel/TutorialExcel_01.png)

我们假设Excel文件位于共享目录中。创建一个新的Excel数据源，并相应地填写文本字段。在该示例中，我们通过Peakboard Bridge（即在“源类型”中指定“网络共享文件”（NetworkShareFile））使用访问。Peakboard访问Bridge，从而访问目录中的文件。出于安全原因，这种绕道是必要的。如果您不想在中央服务器上安装Bridge来启动项目，则只需在本地台式计算机上运行它。指定Excel文件的路径（以`\\MeinShare\MeinVerzeichnis\MeineDatei.xlsx`开头的UNC路径）和运行Bridge服务的计算机的名称（在这个案例中，margin:`2501`，其中`2501`是默认端口）。

如果访问有效，则您现在可以在下拉框中看到所有可用的表格。它们直接从Excel文件中加载。选中复选框“切换行和列”。结果，月份向下推算，而部门则向右推算，与原始应用程序文件中完全相同。去掉“全选”复选标记，因为我们只想使用某个区域，而不是电子表格上的所有数据。可用范围是单元格A1至M3，因此在“范围”字段中写入“A1:M3”。

![image_1](/assets/images/Tutorial/Excel/TutorialExcel_02.png)

单击“加载数据”可提供所需的测试数据，如下一个屏幕截图所示。通过这种方式，可以最佳地准备数据以直接链接到图表。

![image_1](/assets/images/Tutorial/Excel/TutorialExcel_03.png)

下图显示了图表配置。仅显示这两个部门中的一个。月份适用于右侧。列颜色均手动设置为红色，否则图表将随机为十二个月决定十二种颜色，这么多颜色会让人眼花缭乱。除了数据系列，还有一些细节需要改进，例如标题和副标题。由于光学原因，图例设定为不可见。

![image_1](/assets/images/Tutorial/Excel/TutorialExcel_04.png)

下图显示了预览中的可视化项目，完成的图表。

![image_1](/assets/images/Tutorial/Excel/TutorialExcel_05.png)

>### 重要注意事项！
>
>如果您想重新开始Peakboard，并想使用Excel数据，最好首先尝试将Excel文件作为固定资源。这是获取数据的最简单方法。这样就不需要配置Bridge了。随后通过Bridge的（动态）访问跟踪。这使得可以更快地实现初步的、明显的成功，尤其是在开始的时候。
