---
layout: article
title: 设置与代理服务器的互联网连接
menu_title: 设置与代理服务器的互联网连接
description: 设置与代理服务器的互联网连接
lang: cn
weight: 400
ref: admin-400
---

打开Box的Windows Device Portal（http://<ip-address-<peakboard>:8080）。
在这里，您可以直接在“进程”中使用“运行命令”发送命令。

您将需要以下两个命令，并且需要相应地调整自己的代理服务器。


```
reg add "HKCU\Software\Microsoft\Windows\CurrentVersion\Internet Settings" /v ProxyEnable /t REG_DWORD /d 1 /f
```


```
reg add "HKCU\Software\Microsoft\Windows\CurrentVersion\Internet Settings" /v ProxyServer /t REG_SZ /d <proxy-server>:<port> /f
```

可以使用“运行”按钮一个接一个地发送命令；必须勾选复选框“作为默认帐户运行”。

![Windows Device Portal Run Command](/assets/images/admin/internet-setup/proxy.png)

另外，可以添加不应使用代理的地址列表。

```
reg add "HKCU\Software\Microsoft\Windows\CurrentVersion\Internet Settings" /v ProxyOverride /t REG_SZ /d "<local>;192.168.0.10" /f
```

值“\<local\>”即是Internet Explorer设置中的已知选项“为本地地址绕过代理服务器”，该选项用于为所有本地地址绕过代理。

可以将更多的IP地址添加到列表中，值必须以分号分隔。然后重新启动一次Peakboard Box应用更改。
