---
layout: article
title: 使用Peakboard Edge数据源
menu_title: Using the Peakboard Edge Data Source
description: 关于如何使用Peakboard Edge数据源
lang: cn
weight: 2730
ref: dat-2730
redirect_from:
---

![img01](/assets/images/data-sources/peakboard-edge/use01.png)

将Peakboard Edge数据源拖至软件设计界面，就会显示一个表格；它包含所有存储的Edge设备及其相关的信息（示例仅显示填充信息）。每一行对应一个Peakboard Edge，而每一列则对应此设备相关的信息。 

您可以像在Peakboard中使用其他任何数据源一样对Peakboard Edge数据源进行进一步处理（绑定控件、脚本、数据流等）。您可以通过Peakboard Edge在Edge数据源中的索引值（在管理Edge数据源界面有显示，第一个为0）或其名称（本例为“EdgeName”）获取设备信息。 


### 绑定控件
如需将控件内容（例如文本）与Edge数据源的某一栏（例如Edge名称或文本值）绑定，只能通过索引值实现。以下示例对此进行了演示：我们将在文本区域中显示Edge的名称。为此，我们选择Edge数据源；随后，在数据源中选择“名称”栏。然后，“数据源中的行”决定哪一Edge设备使用该名称。

![img02](/assets/images/data-sources/peakboard-edge/use02.png)

### 脚本使用
您可以在脚本中通过PB Edge的名称读取设备信息。具体操作如下：
data.edge.<name> 读取PB Edge名称。
通过data.Edge.<Name>.<Column>.读取列信息。

另外还有两个函数功能：

播放声音 (data.Edge.<Name>.PlaySound(<NR>))

设定输出端子 (data.Edge.<Name>.SetOutputPin(<NR>, <Value>)

您可使用PlaySound控制Edge在编号<NR>的输出设备上播放声音（再次提醒，必须连接USB播放器）。 

SetOutputPins功能可用来切换对应端子的中继器。编号<NR>（数值范围1-3）的中继器会设定为值 <value> (true/false)。

脚本树中也会显示脚本使用选项，您可在右侧的脚本编辑器中查看（见下图）。 

![img03](/assets/images/data-sources/peakboard-edge/use03.png)
