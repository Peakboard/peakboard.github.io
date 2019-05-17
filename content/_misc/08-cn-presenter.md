---
layout: article
title: 使用演示器切换可视化
menu_title: 使用演示器切换可视化
description: 使用演示器切换可视化
lang: cn
weight: 800
ref: misc-800
---


在某些情况下，例如，在车间显示信息，一个仪表板是不够的。解决方法是在一个可视化中创建多个屏幕。它们以所排列的方式自动切换。在屏幕持续时间间隔下，例如，指定相应屏幕的改变时间为30秒。在此，条目0相当于无限显示持续时间。因此，没有自动屏幕更改。

![Screen duration](/assets/images/misc/Presenter/screenduration.png)

可以使用市售的演示器，用类似演示的方式来切换所创建的屏幕。只需将USB加密锁插入Peakboard Box的USB插槽即可。之后在可视化中创建以下内容的全局脚本。

```
-- Change Screen with Presenter
-- Presenter Button Page Down
if vkeys.pagedown == e.key then
-- Show Previous Screen
	runtime.showpreviousscreen()
-- Presenter Button Page UP
elseif vkeys.pageup == e.key then
-- Show Next Screen
	runtime.shownextscreen()
at the end
```

鼠标和/或键盘也可以替代演示器。

可以在名称“键盘输入”下的脚本模板中找到相应的示例。