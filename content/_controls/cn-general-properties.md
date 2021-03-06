---
layout: article
title: 一般属性
menu_title: 一般属性
description: 关于Peakboard Designer一般属性的信息。
lang: cn
weight: 100
ref: con-100
redirect_from:
  - /controls/01-cn-general-properties.html
---

右上角“工具箱”中可用的所有“控件”均具有属性。一方面，这包括只适用于相关“控件”的特殊属性，另一方面也包括在几乎所有“控件”或至少在许多“控件”中都可以找到的一般属性。为避免在每个帮助页面上反复解释所有属性，下面的列表汇总了多种“控件”共有的属性。

| <strong style="white-space:nowrap;">属性</strong>       |   <strong style="white-space:nowrap;">描述</strong> |
|------------|-------------|
| 名称        |	是从脚本访问的控件唯一名称（无特殊字符）。只有当脚本实际使用控件时，才必须指定其名称。|
| 高度        | 是以像素为单位的高度。|
| 间距        | 不能直接更改，但表示控件在面板上的位置（x，y坐标）。 |
| 可见        | 一般情况下通过脚本设置。将控件状态设置为visibility.visible即为可见，visibility.collapsed为不可见。|
| 宽度        |	是以像素为单位的宽度。	|
| 事件        |	此属性可用于调用包含一个或多个脚本的对话框，这些脚本在控件事件发生时调用。	|
| 字体        |	表示字体管理器中的字体。一些控件有多种字体属性，如表格网格：一种用于标题，另一种用于其余部分。	|
| 背景        |	是背景色。
| 前景        |	是前景色（确切的“前景”取决于控件）。|

