---
layout: article
title: Microsoft Dynamics NAV
menu_title: Microsoft Dynamics NAV
description: Peakboard中的Microsoft Dynamics NAV相关信息
lang: cn
ref: dat-15
---

本页解释了访问Peakboard中的Microsoft Dynamics NAV时的各个功能。在下方的链接下，您会发现一个关于外部数据源如何配置和链接到Peakboard-元素的教程：

[开始通过外部数据源使用XML数据源的示例](/tutorials/03-en-xml-data.html)

从技术角度来看，OData是访问Microsoft Dynamics NAV（以下简称NAV）数据的最佳协议。首先，必须在NAV方面做一些准备工作。数据查询基于必须在NAV开发环境中创建的查询。具体做法将与这一页内容分开。细节见[NAV帮助](https://docs.microsoft.com/en-us/previous-versions/dynamicsNAV-2016/hh165526(v=NAV.90))

下面，我们假设查询可用，如截图所示。让数据看起来像以后应该看到的那样，使设计查询具有战略意义。特别是关于列的选择、聚合级别和筛选。在这方面，查询设计得越好，就越容易将其集成到可视化中。

![Object Designer](/assets/images/data-sources/micosoft-dynamics-nav/datenquellen-nav-01.png)

如今，全方位查询需要一个web服务，以便能够从外部进行查询。这可以在普通NAV客户端中完成，也可以在web客户端的截图中显示。单击搜索框，浏览Web服务以打开对话框。

![Microsoft Dynamics NAV Search](/assets/images/data-sources/micosoft-dynamics-nav/datenquellen-nav-02.png)

使用对象类型“查询”创建一个新条目，并选择之前为对象ID创建的查询。最后，给服务起一个有意义的名字，并保存整个事件。

![New Web Services](/assets/images/data-sources/micosoft-dynamics-nav/datenquellen-nav-03.png)

回到Peakboard Designer，添加Dynamics NAV数据源创建新的数据源。除了名字，最重要的信息是OData端点的URL。这取决于NAV landscape的结构以及从事这件事的公司数量。通常，它应该看起来像示例截图中所示：http://xxx.myNAVserver:7048/NAV/ODATA/`
输入用户名和密码的对话框可以通过带有三个点的小按钮进行访问。

![Edit Credentials Dialog](/assets/images/data-sources/micosoft-dynamics-nav/datenquellen-nav-04.png)

点击“加载”按钮，用所有web服务填充组合框。一旦选定Web服务，元数据（列）就会显示在下表中。

![Load Data](/assets/images/data-sources/micosoft-dynamics-nav/datenquellen-nav-05.png)
