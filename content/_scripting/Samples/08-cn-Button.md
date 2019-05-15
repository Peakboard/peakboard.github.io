---
layout: article
title: 按钮脚本示例
menu_title: 按钮脚本示例
description: 按钮脚本示例
lang: cn
weight: 800
ref: scr-08
---
在“输入”子菜单项下，您会发现允许您与Peakboard Box交互的控件。其中有“按钮”控件，可以通过简单地点击它来执行脚本。

![image_1](/assets/images/scripting/Scripting_Beispiele/Controls_Input.png)

下面将解释一个脚本，该脚本在点击按钮后将文本写入文本字段：

```lua
screens['Screen1'].Text.text = 'Hello World'

```

可以看出，“Screen1”上的文本字段“Text”是在点击按钮后寻址的，末尾的文本定义了应该更改的文本。
然后，引号中的文本将输入到文本字段中。

![image_1](/assets/images/scripting/Scripting_Beispiele/ButtonSkript.png)

该示例可以在Peakboard Designer中的“模板”->“脚本”下的找到，也可以通过此[链接](https://github.com/Peakboard/CoolStuff/raw/master/Scripts/ButtonScriptExample/ButtonScriptExample.pbmx)下载。
