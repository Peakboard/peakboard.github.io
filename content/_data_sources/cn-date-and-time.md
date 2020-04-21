---
layout: article
title: 日期和时间
menu_title: 日期和时间
description: Peakboard中的日期和时间数据相关信息
lang: cn
weight: 300
ref: dat-300
redirect_from:
  - /data_sources/02-cn-date-and-time.html
---
目前，Peakboard Box在重启后无法记住的时间。因此，可以在Designer中将日期和时间集成为一种普通数据源。数据源不是表格，而只是标量单值。

格式规范定义如何显示时间、日期或两者组合。单独的格式组件可以在下表中找到。如果要使用CET以外的时区进行时间计算，则可以使用相应的组合框。

在默认情况下，时间数据源访问互联网上的Windows时间服务器（具体地说，是time.windows.com）。如果这并非所希望的，或者Peakboard是在没有互联网访问的网络中运行，Peakboard也可以从内部时间服务器获取时间。为此目的，将时间服务器的IP地址或主机名必须写入（1）时间服务器中的（2）相应文本字段。

 ![TimeServer](/assets/images/data-sources/date-and-time/TimeServer.png)

要将本地Windows计算机作为时间服务器，必须调整注册表项目。
要执行此操作，必须首先将文件夹`HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\W32Time\Time\Time\TimeProviders\NtpServer\`
中的注册表中的值**[Enabled]**设置为1(true)：

之后，必须以管理员身份执行命令窗口，并输入以下命令：`w32tm /config /update`

 ![Add Time Dialog](/assets/images/data-sources/date-and-time/add-time-dialog.png)

以下屏幕截图显示了如何（1）将时间拖放到屏幕上。另外，像任何其他数据源一样，数据源可以绑定到控件或通过脚本使用。在控件编辑器中，可以调整德语或英语布局的显示格式，或者（3）可以通过“格式”创建独立的格式。

 ![Place Time](/assets/images/data-sources/date-and-time/place-time.png)

预览中显示当前的日期和时间。

![Preview Time](/assets/images/data-sources/date-and-time/preview-time.png)

格式字符串占位符：

 ```
HH: Hour (00 – 24)
hh: Hour (00 – 12)
mm: Minute
ss: Second
dd: Day
MM: Month
yy: double-digit year e. g. 89
yyyyy: four-digit year e. g. 1989
```
