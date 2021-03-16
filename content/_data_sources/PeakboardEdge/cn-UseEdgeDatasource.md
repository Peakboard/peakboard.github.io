---
layout: article
<<<<<<< HEAD
title: 使用Peakboard Edge数据源
menu_title: Using the Peakboard Edge Data Source
description: 关于如何使用Peakboard Edge数据源
=======
title: Using the Peakboard Edge data source
menu_title: Using the Peakboard Edge Data Source
description: Information on how to use the Peakboard Edge data source
>>>>>>> 9b8a27745e449b6dc17a895c00796141d1869157
lang: cn
weight: 2730
ref: dat-2730
redirect_from:
---

<<<<<<< HEAD
![img01](/assets/images/data-sources/peakboard-edge/use01.pn  g)

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
=======
![img01](/assets/images/data-sources/peakboard-edge/use01.png)

If the Peakboard Edge data source is dragged onto the design surface, a table with all stored Edge devices and the associated information is displayed (in this view only placeholder information). Each row of the table corresponds to a Peakboard Edge. The columns correspond to the information to which the respective Peakboard Edge has access. 

Further processing within the visualization is done analogous to any other data source within Peakboards (bindings to controls, scripts, data flows, ... ). The individual Edge can be accessed either via its index in the Edge data source (visible in the interface for managing the Edge data source, starting with 0) or the specified name, in the above example "EdgeName".


### Binding to controls
To bind the content of a control (e.g. a text field) to a field from the Edge data source (e.g. the Edge name, or the text value of the Edge), access is only possible via the index. The following example illustrates this. Here the name of the Edge is to be displayed in a text field. For this purpose, "Edge" is selected as data source. Next, the column "Name" is selected within the data source. Afterwards the "Row in data source" ("Source Row") determines by which Edge the name is used.

![img02](/assets/images/data-sources/peakboard-edge/use02.png)

### Script access
In scripts individual PB Edge can be addressed by their name. This means concretely:
data.edge.<name> accesses the PB Edge with the name <name>. 
The individual columns of the Edge can be read via data.Edge.<Name>.<Column>.

There are also two functions:

Play Sound (data.Edge.<Name>.PlaySound(<NR>))

Set Output pins (data.Edge.<Name>.SetOutputPin(<NR>, <Value>)

With the PlaySound function the sound with the number <NR> can be played on the Edge (again, a USB speaker must be connected).

With the SetOutputPins function the relays for the corresponding pins can be switched. The relay with the number <NR> (0-3) is set to the value <value> (true/false).

The script accesses are also visible in the script tree, which is located in the script editor on the right side and shown in the following picture. 
>>>>>>> 9b8a27745e449b6dc17a895c00796141d1869157

![img03](/assets/images/data-sources/peakboard-edge/use03.png)
