---
layout: article
title: Power BI 
menu_title: Power BI
description: Peakboard Designer Power BI控件相关信息。
lang: cn
ref: con-06
---

Peakboard-Designer包括一个允许用户在Peakboard显示器上显示相应仪表板，而不必让其可公开访问的Power BI控件。磁贴是Power BI仪表板的一部分。Power BI中的每个仪表板由一个或多个磁贴组成。作为您需要的最低要求。

微软帐户和有效的Office 365许可证，包括Power BI
微软Azure账户

如要访问自己的Power BI仪表板，您需要使用您的微软帐户进行登录。对整个Azure活动目录运行Power BI的身份验证，并且Power BI需在该目录中注册为应用程序。

 1.* *创建一个Azure活动目录：* *
    1.登录Azure管理门户网站 ([http://manage.windowsazure.com](http://manage.windowsazure.com)) ，您可以自己管理自己的微软账户。
    2.在导航栏中选择“活动目录”，然后点击“新建”。
    3.填写对话框中所有的必要字段

2.* *在活动目录中注册一个应用程序： * *
    1.选择要在其中注册应用程序的活动目录。
    2.在活动目录导航栏中，选择“应用程序”，点击“添加”，然后选择“添加所在组织正在开发的应用程序”。
    3.在对话框中，输入一个名称（例如PeakBoard或Power BI）。
    4.选择本机客户端应用程序。
    5.输入“https://login.live.com/oauth20_desktop.srf”作为重定向URL并确认。
    6.为应用程序分配Power BI访问权限。

![image_1](/assets/images/Controls/Controls-Power/ControlsPowerBI02.png)


![image_1](/assets/images/Controls/Controls-Power/ControlsPowerBI03.png)

如果您想在Peakboard Designer中Power BI磁贴控件的设置中选择磁贴，那么登录窗口会首先将其显示出来：

![image_1](/assets/images/Controls/Controls-Power/ControlsPowerBI04.png)

![image_1](/assets/images/Controls/Controls-Power/ControlsPowerBI05.png)

您可以从Azure管理门户网站中的URL获得租户ID ：

 1.在左侧导航栏中选择“活动目录”。
 2.在列表中，选择注册可访问Power BI的应用程序的活动目录。
 1.活动目录ID可以在当前页面的URL中找到：

![image_1](/assets/images/Controls/Controls-Power/ControlsPowerBI06.png)

客户端ID可以在活动目录应用程序的设置中找到（见上文）。

![image_1](/assets/images/Controls/Controls-Power/ControlsPowerBI07.png)

最后，请填写您的微软帐户用户名和密码。身份验证成功后，您可以选择要在Peakboard上显示的Power BI磁贴。在对话框中，请输入仪表板和磁贴的名称。

![image_1](/assets/images/Controls/Controls-Power/ControlsPowerBI08.png)

以下两个截图显示了Power BI中的仪表板，及在Peakboard面板上的仪表板。

![image_1](/assets/images/Controls/Controls-Power/ControlsPowerBI09.png)

![image_1](/assets/images/Controls/Controls-Power/ControlsPowerBI10.png)
