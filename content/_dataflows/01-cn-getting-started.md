---
layout: article
title: 数据流 - 入门
menu_title: 入门
description: 数据流 - 入门
lang: cn
weight: 100
ref: flow-100
redirect_from:
  - /dataflows/01-cn-getting-started.html
---
在Peakboard中，数据源负责数据收集。他们与所有类型的源系统通信，并以表格形式传递数据（少数例外）。您可以从控件访问此类表格数据并直接显示，或者使用编制数据的脚本。可以点击[此处](../scripting/03-cn-table-data.html)或[此处](../scripting/04-cn-manipulating-table-data.html)找到相关示例。本节中讨论的数据流可进行各种数据转换，这其中需要少量或不需要任何脚本知识。您使用数据流所执行的典型操作为

* 命名列,并删除不需要的列
* 调整数据类型
* 添加新列，并根据特定逻辑填充相关内容
* 将多个数据源相互链接（包括来自不同源系统的数据源），并将其合并到单个新表中

数据流的理念是从单个表格开始逐步更改数据集，直到结果满足您的要求。用户可以查看、更改和调整Peakboard Designer中每个数据流的单独步骤。可以使用测试数据直接观察每个单独步骤。这一操作使得能够很容易地检查序列是否具有预期效果，以及最终是否达成您的目的。

## 创建新数据流

在“包资源管理器”中，您会发现数据流是每个包的主要工件之一。单击相应的按钮来创建新数据流。

![Create a new flow](/assets/images/dataflows/dataflows-create.png)

然后必须在主对话框中选择初始基表。即使最后的数据转换涉及到多个表格，但是数据流总是从一个表格开始。

![select main table](/assets/images/dataflows/dataflows-maindialog-01.png)

现在已经完成了所有准备工作。此时即可以使用“添加步骤”按钮，对表执行其他转换步骤。已使用的所有步骤均列在对话框的右侧区域。当然，以后可在必要时修改或删除这些步骤。根据您单击的步骤，左侧对话框区域将显示此步骤**之后**的数据状态。在下面的屏幕中，这些数据并不是特别壮观，因为数据集仍然是初始数据集。数据仍未发生改变。

![select main table](/assets/images/dataflows/dataflows-maindialog-02.png)
