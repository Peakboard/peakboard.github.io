---
layout: article
title: Excel
menu_title: Excel
description: Peakboard中Excel数据的有关信息
lang: cn
ref: dat-13
redirect_from:
 - /en/datasources-excel/
---
本页解释了从Peakboard访问Excel数据源时的各个功能。在下面链接中可以找到关于通常如何配置外部数据源并链接到Peakboard元素的教程：

[使用XML数据源的外部数据源示例](/tutorials/03-cn-xml-data.html)

单击“添加Excel数据”后，将打开一个窗口。在此对话框中，您必须输入名称并选择其存储位置（例如Dropbox）。目前支持以下位置：

* **文件** - Excel文件之前作为资源添加到Peakboard包中，并且是包的一部分
* **Dropbox**
* **Google云端硬盘**
* **OneDrive** - Microsoft OneDrive（免费提供，并作为Office 365的一部分）
* **网络共享文件（NetworkShareFile）** - 文件通过Peakboard Bridge从网络驱动器拖入。有关Peakboard Bridge的更多信息可以在[这里](/administration/01-cn-install.html)找到。
* **网络直接共享文件（NetworkShareFileDirect）** - 文件直接从网络驱动器中提取。注意！这仅在网络驱动器没有安全限制，且配置为匿名访问时有效。

然后使用“授权”按钮登录云服务提供商，并使用“…”按钮选择文件——如果您选择了云服务提供商作为源。
在“工作表”中，从列表下选择所需的工作表。“列名在第1行”表示列标题直接位于表单元格中。否则，将创建通用列标题（列1、列2等）。默认情况下，相应工作表中的数据从左上角第一个单元格开始显示（“全选”）。如果不是这种情况，您可以在“范围”字段中输入Peakboard应该搜索的数据范围（例如，从单元格B2到H23，则必须在此输入B2:H23）。

 ![Add Excel Data Dialog](/assets/images/data-sources/excel/add-excel-data.png)
