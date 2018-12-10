---
layout: article
title: 按钮脚本示例
menu_title: 按钮脚本示例
description: 按钮脚本示例
lang: cn
ref: scr-08
---
在子菜单项输入下，您会发现允许您与Peakboard Box交互的控件。
其中还有按钮控制，可以通过简单地点击它来执行脚本。

![image_1](/assets/images/scripting/Scripting_Beispiele/Controls_Input.png)

下面将解释一个脚本，该脚本在点击按钮后将文本写入文本字段：

```lua
screens['Screen1'].Text.text = 'Hello World'

```

可以看出，“屏幕1”上的文本字段“文本”是在点击按钮后寻址的，通过该按钮，末尾的文本定义了应该更改的文本。
然后，引号中的文本将输入到文本字段中。

![image_1](/assets/images/scripting/Scripting_Beispiele/ButtonSkript.png)

该示例可以在模板->脚本下的Peakboard Designer中找到，也可以通过该[链接](https://github.com/Peakboard/CoolStuff/raw/master/Scripts/ButtonScriptExample/ButtonScriptExample.pbmx)进行下载。
