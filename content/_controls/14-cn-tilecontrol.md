---
layout: article
title: 磁贴控件
menu_title: 磁贴控件
description: 磁贴控件
lang: cn
ref: con-14
---

“磁贴”控件是一种以重复方式显示表格的行式数据的简单方法。查看下表，显然，一条生产线为一行。

![table production line](/assets/images/Controls/Tile/table.png)

在“磁贴”控件的帮助下，在仪表板中，每一条生产线都应有其对应的磁贴。首先，将该表添加为Excel数据源，参照[此处](/data_sources/13-cn-excel.html)所述。然后，如屏幕截图所示，（1）将“磁贴”控件拖放到界面中。要使磁贴可识别，（2）首先指定其名称，例如Tile1。然后，（3）单击“数据源”旁的三个点按钮，链接Excel数据源。（4）在布局中，可以输入像素大小指定尺寸。（5）单击“数据模板”旁的三个点按钮访问模板编辑器。

![tile image1](/assets/images/Controls/Tile/tile1.png)

这类似于Designer的结构，并将绘图界面限制为第（4）步中设置的大小。正如Designer，“文本”或“线性仪表”之类的控件被拖放到界面上，并通过三个点按钮连接到所链接的Excel数据源的相应列。

![tile image2](/assets/images/Controls/Tile/tile2.png)

单击“确定”退出模板编辑器，创建相应的模板。然后可以将其复制给5条生产线的每条生产线，并将数据源索引设置为相应的行（从0开始）。从下面的屏幕截图中可以看出，除了前面的步骤之外，还在初始“磁贴”控件中添加了其他更改，例如附加图表、框架和阴影。可以使用中间的“+”号按钮将它们传输到先前复制的图块控件中。在相应的对话框中，选择将传输变更的所有“磁贴”控件。

![tile image3](/assets/images/Controls/Tile/tile3.png)

单击“确定”关闭对话框，执行复制过程。将自动传输更改到其他“磁贴”控件，且相应地更新行和数据链接。

![tile image4](/assets/images/Controls/Tile/tile4.png)