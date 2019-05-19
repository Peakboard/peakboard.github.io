---
layout: article
title: 静态数据
menu_title: 静态数据
description: Peakboard中的静态数据相关信息
lang: cn
weight: 100
ref: dat-100
redirect_from:
  - /data_sources/01-cn-variables.html
---
通常，术语“数据源”是指从任何先前的系统中检索的数据，无论是从数据库、ERP系统，或是借助一种通用源，例如JSON或XML，简单地从网络上获取。在Peakboard中，静态数据也称为“数据源”，其特征是数据并非源自另一个位置，而是本地存储在包中。需要这些静态数据源有两个主要原因：

静态数据源用作各种复杂脚本任务的“全局变量”。不同的脚本可以通过写入或读取数据源来交换信息。

静态数据源被用作为容器，将推送消息从外部发送到Peakboard Box。例如，你可以建立一个静态表用于错误消息。处入错误状态的机器将推送错误信息至此静态容器中。然后所有连接的控件将自动响应。[此处](/misc/02-cn-push-messages.html)查看案例。

要创建静态数据源，如创建所有其他[数据源](/tutorials/03-cn-xml-data.html)一样。可以创建单值或表。

![Add Static Data](/assets/images/data-sources/static-data/add-data-dialog.png)

## 为单值保持变量

除了名称和数据类型（字符串、数字或布林），还可以给定一个初始值。 复选框“保存在Box”允许在稍后重启看板后将值存储在Peakboard Box中。如果未选择此选项，则重新启动后该值将重置为初始值。

![Add Static Data](/assets/images/data-sources/static-data/static-single-variable.png)

## 维护静态表

要静态地存储表格式数据，必须使用“编辑”按钮，跳转到相应对话框中维护。 在较低区域，可以为表创建新列或再删除它们。要维护数据内容，只需单击相应的表格单元格。要删除表格行，不将光标放在单元格中按下Delete键，以便只选择此行。复选框“保存在Box”也可用于表，以便在下次启动过程之后保留Box中的数据。


![Add Static Data](/assets/images/data-sources/static-data/static-table-variable.png)