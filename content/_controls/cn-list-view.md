---
layout: article
title: 列表视图
menu_title: 列表视图
description: Peakboard Designer中列表视图控件相关信息。
lang: cn
weight: 240
ref: con-240
redirect_from:
  - /controls/10-cn-list-view.html
---

“列表视图”控件的特性与“[磁贴控件](/controls/14-cn-tilecontrol.html) ”和“[磁贴视图](/controls/11-cn-tile-view.html)”非常相似。“[磁贴控件](/controls/14-cn-tilecontrol.html)”中一步步说明了如何为“列表视图”或“磁贴视图”控件创建模板。在“[磁贴控件](/controls/14-cn-tilecontrol.html)”中，由开发人员排列各个磁贴，而“列表视图”，只要条目存在于数据源中，就会根据可用范围自动提供磁贴元素。下面的截图表明了这一点。

![image_1](/assets/images/Controls/ListView/list1.png)

可以垂直或水平排列元素。在“方向”中进行设置，可通过下拉列表设置所需方向。

您也可以使用“列表视图”控件根据规则更改显示。下面的示例同样使用了“[磁贴控件](/controls/14-cn-tilecontrol.html)”中所使用的列表，此列表由“状态”列扩展：

![table1](/assets/images/Controls/ListView/table1.png)

应为可视化定义一种规则，如果生产线停止，则其显示警告。要这样做，选择要创建的“列表视图”元素，然后，（1）单击“模板”选项旁的三个点按钮，创建一个额外模板。（2）单击齿轮符号按钮打开规则编辑器。（3）单击“+”号按钮用于建立一个新规则。例如，如果生产线的状态为“停止”或“停滞”，则应始终显示替代模板。（4）对刚刚建立的规则创建有效的模板。要这样做，（5）单击“确定”退出规则编辑器，（6）打开模板编辑器。

![image_2](/assets/images/Controls/ListView/list2.png)


这与“磁贴控件”、“列表视图”或“磁贴视图”编辑器相同，并使用相同的数据库。首先，（1）将大小设置成与“列表视图”元素大小相同，以便将替代模板完美无缝插入列表中。然后，（2）可以将此控件拖放到界面上，并链接到数据源的相应列。

![image_3](/assets/images/Controls/ListView/list3.png)

单击“确定”退出编辑器，并保存模板。

最后，可以在预览中查看结果。它表明生产线3处于停滞状态，这对应一开始所示表格中的输入数据。

![image_4](/assets/images/Controls/ListView/list4.png)