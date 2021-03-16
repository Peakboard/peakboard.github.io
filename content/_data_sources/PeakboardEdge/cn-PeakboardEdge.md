---
layout: article
title: Peakboard Edge
menu_title: Peakboard Edge 
description: Peakboard Edge相关信息
lang: cn
weight: 2700
ref: dat-2700
redirect_from:
---

作为一个交互设备，Peakboard Edge用于连接输入/输出设备与Peakboard Box。

网络中的一个（或多个）Peakboard Edge可与一个或多个企业版Peakboard Box通讯。Peakboard Box既可接收来自Peakboard Edge的信息，也能向其发送信息。而Peakboard Edge则可以提供各种连接选项。

{% include styled_table.html %}
| 连接方式 | 数量 | 详情 |
|-----------------------|---------------------------|---------------------|
| RJ45 (以太网) | 1 | 将PB Edge接入网络 |
| USB | 2 | 连接输入/输出设备或无线网接收器|
|Micro USB | 1 | 电源接口 |
|输入设备连接区 | 4个3.3 V电流输出端子，4个输入端子| 分为4对，Edge可探测到输入端子的状态|
| 输出设备连接区 | 4个可交换的电流端子（最大24V），1个电流输入端子| Edge可将当前输入端子的电流传输至4个可交换的端子，从而对其进行控制|


例如，您可通过这些连接方式接入以下设备：


### 输入

{% include styled_table.html %}
| 输入设备 | 连接方式 |
|-------------------|-------------------|
| 按钮 | 输入设备连接区 |
|（二进制）传感器 | 输入设备连接区 |
| 键盘 | USB |
| 条形码扫描仪 | USB |
| RFID阅读仪 | USB |


### 输出

{% include styled_table.html %}
| 输出设备 | 连接方式 |
|-------------------|-------------------|
| 三色灯 | 输出设备连接区 |
| 信号灯 | 输出设备连接区 |
| 扬声器 | USB |


将输入设备连接Peakboard Edge之后，它所产生的信息就可通过企业版Peakboard Box显示在看板屏幕上或保存至数据库；同时，也可对这些信息进行处理。同理，也可通过看板对连接Peakboard Edge的输出设备进行控制。 

以下为如何使用Peakboard Edge的步骤概览，它可与Peakboard第一代和第二代产品配合使用。