---
layout: article
title: 设置与代理服务器的互联网连接
menu_title: 设置与代理服务器的互联网连接
description: 设置与代理服务器的互联网连接
lang: cn
ref: admin-04
permalink: /cn/:collection/internet-setup
---

打开Box的Windows设备门户（http://<ip-address-<peakboard>:8080）。
在这里，您可以直接在“进程”下发送命令，并使用“运行命令”。

您将需要以下两个命令，并且需要相应地调整您自己的代理服务器。


```
reg add "HKCU\Software\Microsoft\Windows\CurrentVersion\Internet Settings" /v ProxyEnable /t REG_DWORD /d 1 /f
```


```
reg add "HKCU\Software\Microsoft\Windows\CurrentVersion\Internet Settings" /v ProxyServer /t REG_SZ /d <proxy-server>:<port> /f
```

可以使用“运行”按钮一个接一个地发送命令；必须勾选“作为默认帐户运行”中的复选标记。

![Windows Device Portal Run Command](/assets/images/admin/internet-setup/proxy.png)

然后重新启动一次Peakboard-Box以应用更改。
