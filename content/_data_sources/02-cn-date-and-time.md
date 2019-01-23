---
layout: article
title: 日期和时间
menu_title: 日期和时间
description: Peakboard中的日期和时间数据信息
lang: cn
ref: dat-02
---
目前，Peakboard-Box在重启后无法记住的时间。因此，可以在Designer中将日期和时间集成为一种普通数据源。数据源不是表格，而只是标量单值。

格式规范定义如何显示时间、日期或两者组合。单独的格式组件可以在下表中找到。如果要使用CET以外的时区进行时间计算，则相应的组合框是可用的。

在默认情况下，时间数据源访问互联网上的Windows时间服务器（具体地说，是time.windows.com）。如果这并非所希望的，或者Peakboard是在没有互联网访问的网络中运行，Peakboard也可以从内部时间服务器获取时间。激活此功能必须通过复选框，且时间服务器的IP地址或主机名必须被写入相应的文本字段。

要将一台本地Windows计算机作为时间服务器，必须调整注册表项目。
要执行此操作，必须首先将以下文件夹注册表中的值**[Enabled]**]设置为1（true）：
`HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\W32Time\Time\Time\TimeProviders\NtpServer\`

之后，必须以管理员身份执行命令窗口，并输入以下命令：`w32tm /config /update`

 ![Add Time Dialog](/assets/images/data-sources/date-and-time/add-time-dialog.png)

以下屏幕截图显示了如何在屏幕上使用时间。另外，像任何其他数据源一样，数据源可以链接到控件或通过脚本使用。

 ![Place Time](/assets/images/data-sources/date-and-time/place-time.png)

现在预览显示当前日期和时间。

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
