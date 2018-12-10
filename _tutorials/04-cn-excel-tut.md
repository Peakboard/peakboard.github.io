---
layout: article
title: 包括来自网络驱动器的Excel文件
menu_title: 包括来自网络驱动器的Excel文件
description: 包括来自网络驱动器的Excel文件
lang: cn
ref: tut-04
---
Peakboard支持各种准确数据源；通常新手只是喜欢使用Excel。作为数据源的Excel普通文档可查找[此处]（/data_sources/13-en-excel.html）。本逐步教程展示了从列入文件以在小图表中准备数据的整个过程。

以下屏幕截图显示了原始应用程序文件。它包含一个由两个部门（A和B）组成的表格，以及一种每月绩效指标。电子表格还包含其他数据和一份Excel图表。我们对所有这些数据不感兴趣。我们只想处理顶部的第一张表格。

![image_1](/assets/images/Tutorial/Excel/TutorialExcel_01.png)

我们假设Excel文件位于共享目录中。创建一个新的Excel数据源，并相应地填写文本字段。在该示例中，我们通过Peakboard-Bridge（即：在源网络共享文件中指定）使用访问。Peakboard访问网桥，从而访问目录中的文件。出于这种形式的安全原因，这种绕行是必要的。如果您不想在中央服务器上安装网桥来启动一个项目，则您可以在本地台式计算机上运行项目。指定Excel文件的路径（以`\\MeinShare\MeinVerzeichnis\MeineDatei.xlsx`开头的UNC路径）和运行网桥服务的计算机的名称（在这种情况下，边距：`2501`，其中`2501`是默认端口）。

如果访问有效，则您现在可以在下拉框中看到所有可用的表格。它们直接从Excel文件中加载。选中复选框“切换行和列”。结果，月份向下推算，而部门则向右推算，与原始申请文件中完全相同。删除“全选”处的复选标记，因为我们只想使用某个区域，而不是电子表格上的所有数据。可用范围是 A1至M3的单元格范围，因此在范围字段中写入“A1: M3”。

![image_1](/assets/images/Tutorial/Excel/TutorialExcel_02.png)

点击“加载数据”可提供所需的测试数据，如下一个屏幕截图所示。通过这种方式，可以最佳地准备数据以直接链接到图表。

![image_1](/assets/images/Tutorial/Excel/TutorialExcel_03.png)

下图显示了图表配置。仅显示这两个部门中的一个。月份适用于右侧。列颜色均手动设置为红色，否则图表将随机为十二个月决定十二种颜色，这么多颜色会让人眼花缭乱。除了数据系列，还有一些细节需要改进，例如标题和副标题。由于光学原因，图标设定为不可见。

![image_1](/assets/images/Tutorial/Excel/TutorialExcel_04.png)

下图显示了我们的可视化项目成品图预览。

![image_1](/assets/images/Tutorial/Excel/TutorialExcel_05.png)

>###重要注意事项！
>
>如果您想从Peakboard开始，并想使用Excel数据，最好首先尝试将Excel文件作为固定资源。这是获取数据的最简单方法。这样就不需要配置网桥了。随后将跟踪通过网桥的（动态）访问。此跟踪操作将有可能更快地取得初步、明显的成功，尤其是在开始的时候。
