---
layout: article
title: Peakboard Edge疑问
menu_title: Problems with Peakboard Edge
description: Peakboard Edge可能存在的一些疑问
lang: cn
weight: 2740
ref: dat-2740
redirect_from:
---

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

