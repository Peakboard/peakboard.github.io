---
layout: article
title: 管理Peakboard Edge
menu_title: Manage Peakboard Edge
description: 与Peakboard Edge管理相关的信息
lang: cn
weight: 2710
ref: dat-2710
redirect_from:
---

![img01](/assets/images/data-sources/peakboard-edge/manage01.png)

打开Designer软件，进入主界面；

选择顶部菜单栏的“主页”；

点击"PB Edge"区域的“管理/测试”按钮，进入Edge管理界面。

![img02](/assets/images/data-sources/peakboard-edge/manage02.png)

该界面的布局与Peakboard Box的管理界面类似。

顶部：提供不同的操作选项，对一个或多个选中的Peakboard Edge进行控制。

中间：显示所有已添加的Peakboard Edge。

底部：一个“添加”新设备按钮，一个“关闭”按钮。


### Edge操作：
在管理界面选择一个或多个（按住CTRL键）设备。 

从菜单栏顶部选择操作。注意：多设备操作可对所有选中的设备进行控制，单设备操作只能在选中一个设备时才有效。


### 添加新Edge:
要管理Peakboard Edge并将其与可视化看板整合，需要将其添加至Designer。

![img03](/assets/images/data-sources/peakboard-edge/manage03.png)

点击管理界面的“添加”按钮，进入“选择Edge”对话框。

从显示的所有Peakboard Edge中选择一个设备，或在“名称或IP地址”栏输入相关数据。

输入提供的Peakboard Edge密码。

其他方法：通过代理输入授权信息。

点击“确认”，即可将Peakboard Edge添加至Designer。

 
### 测试Edge连接：
连接测试是用于检查Designer与Edge的连接情况，以及与Edge相连的设备是否连接无误且工作正常。

![img04](/assets/images/data-sources/peakboard-edge/manage04.png)

点击管理界面的“测试连接”按钮，打开“Peakboard Edge连接测试”对话框。

稍作等候，直到“连接状态”显示为绿色，此时表明已与Peakboard Edge建立连接。注意：如果连接时间较长，则可能存在问题。参见故障排除 -- 连接问题获取帮助。

如果您已经将输入/输出设备接入Peakboard Edge，可以通过以下步骤进行测试：

如果连接了USB扬声器，可以使用声音调节器使Peakboard Edge播放声音。

“接收字符串值”可显示Peakboard Edge（连接的条形码扫描仪、键盘、RFID阅读仪等）读取的最后一个文本值，这些设备必须通过USB端口进行连接。

使用“输出”勾选框可对Peakboard Edge上的中继器进行切换。（可通过Peakboard Edge上“咔嗒”声进行判断，它模拟了三色灯或相似设备的开关声音） 。

“输入”勾选框代表该连接区输入端子的值，您可通过连接的开关改变其状态。

The "INPUT" checkboxes represent the values of the input pins of the terminal strip. Their status can be changed by a connected switch, for example.
>>>>>>> 9b8a27745e449b6dc17a895c00796141d1869157
