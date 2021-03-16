---
layout: article
<<<<<<< HEAD
title: Peakboard Edge疑问
menu_title: Problems with Peakboard Edge
description: Peakboard Edge可能存在的一些疑问
=======
title: Problems with Peakboard Edge
menu_title: Problems with Peakboard Edge
description: Information about problems with Peakboard Edge
>>>>>>> 9b8a27745e449b6dc17a895c00796141d1869157
lang: cn
weight: 2740
ref: dat-2740
redirect_from:
---

<<<<<<< HEAD
### 连接问题（PB Box ↔︎ PB Edge）

#### 已经连上了但无缘无故断开？
可以试试重启PB Edge和PB Box。

#### 无法在PB Box和PB Edge之间建立连接或重启两个设备之后还是无法连接？
检查两者（PB Box和PB Edge）是否在同一个网络，可向网络管理员寻求帮助。如果不可行，您可以测试Designer软件与PB Box，以及Designer软件与PB Edge是否连上。如果未连接，您可通过故障连接解决这一问题。


### 连接问题（连接测试/预览 ↔︎ PB Edge） 
如果连接预览 ↔︎ PB Edge失败，可使用Designer软件中的连接测试。

如果连接测试 ↔︎ PB Edge也未能找出问题：

* 记录Edge ID
* 使用组合键“Win + R”打开“运行”对话框
* 输入“cmd”，点击回车，打开命令行窗口
* 在命令行中输入 “ping <Edge ID>”，<Edge ID>即为第一步中记录的Edge ID
如果连接成功（该命令得到回应），请联系Peakboard支持。

如果无法连接，Peakboard Edge要么接入了另一个网络，要么被内部网络规则所屏蔽。如果是后者，只有公司的IT管理员能解决这一问题。
=======
### Connection problems (PB Box ↔︎ PB Edge)

#### Has the connection already worked and has it broken off without further ado?
A restart of the PB Edge and the PB Box can help.

#### Couldn't establish a connection between PB Box and PB Edge or restarting both devices didn't help?
Check if both devices (PB Box and PB Edge) are connected to the same network. A network administrator can help best. If none is available, you can alternatively test if a connection between the Designer and the PB Box, and the Designer and PB Edge is possible. If this is not the case, the problem can be solved with the faulty connection.


### Connection problems (Connection tester / Preview ↔︎ PB Edge)
If the connection preview ↔︎ PB Edge fails, use the connection tester in the designer.

If the connection tester ↔︎ PB Edge fails:

* Note Edge ID
* Use the key combination "Win + R" to open the Windows "Run" dialog
* type "cmd" and press enter to open a command line window
* enter the command "ping <Edge ID>" in the command line, where <Edge ID> is preceded by the previously noted Edge ID
If the connection is possible (the ping is answered), please contact Peakboard Support. 

If the connection is not possible, the Peakboard Edge is either in another network or it is blocked by internal network rules. In the latter case, only a company IT administrator can help.
>>>>>>> 9b8a27745e449b6dc17a895c00796141d1869157
