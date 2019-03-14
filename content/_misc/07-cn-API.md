---
layout: article
title: Peakboard API
menu_title: Peakboard API
description: Peakboard API
lang: cn
ref: misc-07
---

要通过API从变量或“列表数据源”访问数据，需要以下信息。因此也需要将值写入列表元素或变量。

* 身份认证：[基本身份认证](https://en.wikipedia.org/wiki/HTTP-Authentication#Basic_Authentication)
* BoxIP：网络中Peakboard Box的IP，或者也可以使用该Box的DNS。
* PeakboardID：可视化的ID，可通过（1）菜单中“设置”按钮找到。然后（2）将ID从相应的字段复制到剪贴板。
* ListName：（3）“列表数据源”的名称
* VarName：变量的名称

![API01](/assets/images/misc/API/API01.png)


以下是使用API​​进行读写的两个示例。

下面的GET语句可用于从列表元素中读取值：


```lua
GET: http://[BoxIP]:40404/api/dataread?id=[PeakboardID]&datakey=[ListName]
```

可以类似地读取变量的值，只有变量名称必须作为datakey传输。

![API02](/assets/images/misc/API/API02.png)

下面的POST语句可用于将值写入变量：

```lua
POST: http://[BoxIP]:40404/api/datapush?id=[PeakboardID]&datakey=[VarName]
```

类似地，值可以被写入列表元素，通过传递列表元素名称作为datakey。

![API03](/assets/images/misc/API/API03.png)