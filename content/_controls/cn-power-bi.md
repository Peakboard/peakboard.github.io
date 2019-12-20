---
layout: article
title: Power BI 
menu_title: Power BI
description: Peakboard Designer中Power BI控件相关信息。
lang: cn
weight: 840
ref: con-840
redirect_from:
  - /controls/06-cn-power-bi.html
---

Peakboard Designer提供“Power BI”控件，它允许用户在未公开目标仪表板的情况下，将其显示在与Peakboard相连的屏幕。磁贴是Power BI仪表板的一部分，每个Power BI仪表板均由一个或多个磁贴组成。

为显示Power BI仪表板，需满足以下最低要求：

* 微软账户和有效的Office 365许可证，包括Power BI
* Azure Active Directory管理员权限
* 微软Azure账户

如需访问本人的Power BI仪表板，您必须首先登录自己的微软账户。Power BI是注册在Azure Active Directory上的一个应用，其使用需经Azure授权。为尽可能方便用户注册Power BI应用，微软特意为此提供了一个网页应用。

**实现Peakboard与Power BI相互访问的第一步：创建应用**

    1.1 打开微软网页应用： https://dev.powerbi.com/apps

    1.2 输入名称

    1.3 在应用类别中选择“Native”

    1.4 在API访问下勾选“Read all dashboards”

    1.5 点击“注册”。

![image_1](/assets/images/Controls/Controls-Power/ControlsPowerBI01.png)


**第二步：在Azure中调整应用**

    2.1 打开Azure主页 https://portal.azure.com/

    2.2 选择“应用程序服务”，“管理Azure Active Directory”，在概述页面点击左侧的“应用注册”，就可以找到刚刚注册的应用

    2.3 点击该应用

    2.4 选择管理菜单中的“API权限”，查看该应用是否已经成功获得权限

    2.5 权限下方的“状态”栏应显示绿色对勾，否则应联系Azure管理员获得许可

    2.6 返回管理菜单上方的“概述”，复制“应用程序（客户端）ID”和“目录（租户）ID”

![image_1](/assets/images/Controls/Controls-Power/ControlsPowerBI02.png)

**第三步：在Peakboard Designer中插入Power BI**

    3.1 在控件栏中的“扩展”目录选择“Power BI磁贴”

    3.2 点击“数据/窗格”中的选项，输入之前复制的Azure ID

    3.3 选择Azure仪表板中的任意磁贴


![image_1](/assets/images/Controls/Controls-Power/ControlsPowerBI03.png)
