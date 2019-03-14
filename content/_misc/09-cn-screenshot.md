---
layout: article
title: 通过HTTP请求截图
menu_title: 通过HTTP请求截图
description: 通过HTTP请求截图
lang: cn
Ref: misc-09
---


如果决策是建立在车间中可视化基础上，则有必要记录决策基础。
这可以通过获取可视化的屏幕截图来完成。

技术上讲，可以通过HTTP Get请求直接从Box中截取屏幕截图。

命令如下所示：

![HTTP Get Request](/assets/images/misc/Screenshot/Screenshot01.png)


请求URL如下，其中GET语句用作方法：

```
[Box name]/api/iot/screenshot
```


如图所示，授权是Base64编码的。您可以在[此处](https://www.base64encode.org/)找到相应的编码器。授权字符串组成如下：

```
Administrator:Your_device_password
```

如果请求成功，将收到当前显示的屏幕截图，以便从Box中进一步处理。