---
layout: article
title: 命令行软件安装
menu_title: Silent Installation
description: 使用命令行安装软件
lang: cn
weight: 150
ref: pb1-admin-150
redirect_from:

---

Peakboard Designer和Peakboard Bridge可通过命令行安装。
根据系统的不同配置，用户账号窗口可能会显示“可信任的软件开发者”。

![Windows User Account Control Window](/assets/images/admin/install-silent/usercontrol.png)

命令行软件安装包括以下几种方式：

# 通过命令行安装Peakboard Designer
仅安装Peakboard Designer以及预览功能所必需的Peakboard Runtime。 
您可在任意文件夹调用PeakBoardDesignerSetup.exe安装文件。
以下指令演示了如何在C:\Temp中使用命令行安装软件：

````markdown
    ```
       "C:\Temp\PeakBoardDesignerSetup.exe" /S
    ```
````

# 通过命令行安装Peakboard Designer和Peakboard Bridge
这种方法会通过命令行安装全部组件，包括Peakboard Designer、Peakboard Runtime和Peakboard Bridge。
安装指令与上一种方法类似，只需添加字符“/b”。

````markdown
    ```
       "C:\Temp\PeakBoardDesignerSetup.exe" /b /S
    ```
````

# 通过命令行安装Peakboard Bridge
如果只需安装Peakboard Bridge，您就可以使用以下指令，Peakboard Designer和Peakboard Runtime则无需安装。
安装指令与上面几种类似，只需添加字符“/bb”。

`````markdown
    ```
       "C:\Temp\PeakBoardDesignerSetup.exe" /bb /S
    ```
````
	
# 通过命令卸载软件
采用和安装软件时同样的方法，您也可以利用命令行卸载软件。
为此，您只需对指令种的路径修改为uninst.exe。
Peakboard Designer默认安装在“C:\Program Files\Peakboard”。
您可以在此访问uninst.exe卸载包。

`````markdown
    ```
       "C:\Program Files\Peakboard\uninst.exe" /S
    ```
````


## 重要提示
>
> 卸载Designer时，bridge服务也会同时移除！
