---
layout: article
title: 键盘输入脚本示例
menu_title: 键盘输入脚本示例
description: 键盘输入脚本示例
lang: cn
weight: 1100
ref: scr-11
---
该脚本示例解释了如何使用键盘命令来控制Peakboard Box。


![image_1](/assets/images/scripting/Scripting_Beispiele/KeyInputs.png)

通常，点击键盘按键可以通过KeyPressed处理。每次在键盘上敲击一个键，与之对应的脚本就会执行。

```lua
data.KeyInputs[0].Text = 'vkeys.' .. string.tostring(e.key)

```

在我的示例中，表格中的一行将由按下的键所发送的文本填充。为此，我使用e.key命令，其中包含所按下键的文本。然后，必须将其转换成字符串，然后才能输入到表中。

该示例可以在Peakboard Designer中的“模板”->“脚本”下找到，也可以通过此[链接](https://github.com/Peakboard/CoolStuff/raw/master/Scripts/Key%20Inputs/KeyInputs.pbmx)下载。
