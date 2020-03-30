---
layout: article
title: Peakboard 2 
menu_title: Peakboard 2
description: Peakboard 2
lang: cn
weight: 10
ref: misc-10
---

## Peakboard 2
将Peakboard Designer升级至[2.0.0.7](/misc/en-version-history.html)版本之后，客户会在常规的[(UWP)](https://docs.microsoft.com/en-us/windows/uwp/get-started/universal-application-platform-guide)预览功能之外，获得第二版的[(WPF)](https://docs.microsoft.com/en-us/visualstudio/designers/getting-started-with-wpf?view=vs-2019)预览功能。 
您可以在Designer“设定”中的“关于”对话框，选择相应的勾选框，激活这一最新预览功能。
这一变化以及Peakboard Box操作系统的相应变化宣告了第二代Peakboard Box的到来。

## 什么是第二代Peakboard Box？
第二代Peakboard Box在技术参数方面与之前的Peakboard Box大致相同。
两代产品在外观上没有变化。
然而，正如表格所示，第二代Peakboard Box依托不同的操作系统和Peakboard Runtime架构。

{% include styled_table.html %}
|                                |第二代Peakboard Box         | Peakboard Box       |
|--------------------------------|---------------------------|---------------------|
| 操作系统                        | Windows 10 IoT Enterprise | Windows 10 IoT Core |
| Peakboard Runtime架构          |                       WPF |                 UWP |

### Windows 10 IoT Enterprise指的是什么?
它拥有完整的Windows 10功能，被授权在第二代Peakboard Box等物联网设备上使用。

### 什么是WPF Runtime？
Windows呈现基础(WPF)是一个用于开发桌面客户端应用的框架。
Runtime是一款运行于Peakboard Box的软件，用于确保数据能够实时加载，并让可视化看板和Designer显示出来。

### 第二代Peakboard Box的优势有哪些？
Windows 10 IoT Enterprise操作系统与WPF Runtime的组合使得Peakboard Box能和几乎所有常见的数据库直接对话。
使用第二代Box直接通过网络驱动读取并处理Excel、PDF或图片等文件也成为可能。

### 有哪些变化？
由于操作系统已经从Windows 10 IoT Core升级为Windows 10 IoT Enterprise，因而不再需要“设备门户”，取而代之的是“管理门户”。
[Peakboard Bridge](/administration/PB%201.x%20Box/en-1x-install.html)是Peakboard Box的一个重要组件，现在也不再需要借助该组件实现数据之间的通信。
第二代Box可直接与数据通信。

### 如何将Peakboard Box转换为第二代Peakboard Box？
持有有效服务协议（SLA）识别编号的所有客户均可免费转换。
所有在2020年4月1日之后购买专业版或企业版Peakboard Box的客户将自动获得第二代Peakboard Box。

您可通过以下两种方式将现有的Peakboard Box转换为第二代Peakboard Box：
* 使用Peakboard 2 USB升级插件升级现有硬件
* 使用第二代Peakboard Box替换现有硬件

### 升级时需考虑哪些因素？
* 必须在升级之前将可视化文件保存在个人电脑，完成升级后即可重新加载使用
* 升级之后可能需要重置IP地址
* 必须再次设置代理
