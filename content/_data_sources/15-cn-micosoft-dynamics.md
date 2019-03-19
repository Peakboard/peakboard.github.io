---
layout: article
title: Microsoft Dynamics NAV
menu_title: Microsoft Dynamics NAV
description: Peakboard中Microsoft Dynamics NAV的相关信息
lang: cn
ref: dat-15
---

本页解释了从Peakboard访问Microsoft Dynamics NAV数据源时的各个功能。在下面链接中可以找到关于通常如何配置外部数据源并链接到Peakboard元素的教程：

[使用XML数据源的外部数据源示例](/tutorials/03-cn-xml-data.html)

从技术角度来看，OData是访问Microsoft Dynamics NAV（以下简称NAV）数据的最佳协议。首先，必须在NAV方面做一些准备工作。数据查询基于必须在NAV开发环境中创建的查询。具体做法将与本页内容分开。细节见[NAV帮助](https://docs.microsoft.com/en-us/previous-versions/dynamicsNAV-2016/hh165526(v=NAV.90))

下面，我们假设查询可用，如截图所示。以数据看起来像应该在以后看到的那样的方式设计查询具有战略意义。特别是关于列的选择、聚合级别和过滤。在这方面，查询设计得越好，就越容易将其集成到可视化中。

![Object Designer](/assets/images/data-sources/micosoft-dynamics-nav/datenquellen-nav-01.png)

现在，查询需要一个Web服务，以便能够从外部查询它。这可以在普通NAV客户端中完成，也可以在Web客户端中完成，如截图所示。单击搜索框，浏览Web服务以打开对话框。

![Microsoft Dynamics NAV Search](/assets/images/data-sources/micosoft-dynamics-nav/datenquellen-nav-02.png)

使用对象类型“查询”创建一个新条目，并选择之前为对象ID创建的查询。最后，给服务起一个有意义的名字，并保存整个事件。

![New Web Services](/assets/images/data-sources/micosoft-dynamics-nav/datenquellen-nav-03.png)

回到Peakboard Designer，“添加Dynamics NAV数据源”创建新的数据源。在名称旁，最重要的信息是OData端点的URL。这取决于NAV格局的结构以及有多少公司在上面工作。通常，它应该看起来像示例截图中所示：`http://xxx.myNAVserver:7048/NAV/ODATA/`。通过带三个点小按钮打开输入用户名和密码的对话框。

![Edit Credentials Dialog](/assets/images/data-sources/micosoft-dynamics-nav/datenquellen-nav-04.png)

单击“加载”按钮，用所有web服务填充组合框。一旦选定Web服务，元数据（列）就会显示在下表中。

![Load Data](/assets/images/data-sources/micosoft-dynamics-nav/datenquellen-nav-05.png)
