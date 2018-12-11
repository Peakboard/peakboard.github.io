---
layout: article
title: Excel
menu_title: Excel
description: 关于Peakboard中Excel数据的信息
lang: cn
ref: dat-13
redirect_from:
 - /en/datasources-excel/
---
本页解释了访问Peakboard中的Excel数据源时的各个功能。在下方的链接下，您会发现一个关于外部数据源如何配置和链接到Peakboard元素的教程：

[开始通过外部数据源使用XML数据源的示例](/tutorials/03-en-xml-data.html)

单击添加Excel数据后，将打开一个窗口。在此对话框中，您必须输入名称并选择存储位置（例如Dropbox）。目前支持以下位置：

* **File** - Excel文件以前作为资源添加到Peakboard包中，并且是软件包的一部分
* **Dropbox**
* **GoogleDrive**
* **OneDrive** - Microsoft OneDrive（免费提供，并作为Office 365的一部分）
* **NetworkShareFile** -从网络驱动器的Peakboard-Bridge中拖出该文件。有关Peakboard Bridge的更多信息可以在[这里]找到。(/administration/01-en-install.html)
* **NetworkShareFileDirect** - 文件直接从网络驱动器中提取。注意！这仅在网络驱动器没有安全限制且配置为匿名访问时有效。

然后使用授权按钮登录云服务提供程序，并使用…按钮选择文件—如果您选择了云服务提供程序作为源。
工作表中从列表下选择所需的工作表。“第一行中的列名”表示列标题直接位于表单元格中。否则，将创建通用列标题（列1、列2等）。默认情况下，仅在左上角的第一个单元格显示相应工作表中的数据（全选）。如果不是，您可以在范围字段中输入Peakboard应该搜索数据的范围（例如，从单元格B2到H23，则必须在此输入B2 ：H23）。

 ![Add Excel Data Dialog](/assets/images/data-sources/excel/add-excel-data.png)
