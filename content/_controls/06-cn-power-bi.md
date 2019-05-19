---
layout: article
title: Power BI 
menu_title: Power BI
description: Peakboard Designer中Power BI控件相关信息。
lang: cn
weight: 600
ref: con-600
redirect_from:
  - /controls/06-cn-power-bi.html
---

Peakboard Designer包括“Power BI”控件，允许用户在Peakboard显示器上显示相应仪表板，而无需公开访问它们。磁贴是Power BI仪表板的一部分，Power BI中的每个仪表板由一个或多个磁贴组成。作为您需要的最低要求。

Microsoft帐户和有效的Office 365许可证包括Power BI Microsoft Azure账户。

要访问自己的Power BI仪表板，需要登录Microsoft帐户。对Power BI的身份验证通过Azure Active Directory运行，其中Power BI注册为应用。

 1. **创建Azure Active Directory:**
    1. 使用您的Microsoft帐户登录Azure管理门户 ([http://manage.windowsazure.com](http://manage.windowsazure.com)) 。
    2. 在导航栏中选择“Active Directory”，然后单击“新建”。
    3. 填写对话框中所有必填字段

 2. **在Active Directory中注册应用：**
    1. 选择要在其中注册应用的Active Directory。
    2. 在Active Directory导航栏中，选择“应用”，点击“添加”，然后选择“添加我的组织正在开发的应用”。
    3. 在对话框中，输入一个名称（例如PeakBoard或Power BI）
    4. 选择“Native Client应用”。
    5. 输入“https://login.live.com/oauth20_desktop.srf”作为重指向URL并确认。
    6. 为应用分配Power BI访问权限。

![image_1](/assets/images/Controls/Controls-Power/ControlsPowerBI02.png)


![image_1](/assets/images/Controls/Controls-Power/ControlsPowerBI03.png)

如果您想在Peakboard Designer中Power BI磁贴控件的设置中选择磁贴，那么首先会显示登录窗口：

![image_1](/assets/images/Controls/Controls-Power/ControlsPowerBI04.png)

![image_1](/assets/images/Controls/Controls-Power/ControlsPowerBI05.png)

您可以从Azure管理门户网站中的URL获得租户ID ：

 1. 在左侧导航栏中选择“Active Directory”。
 2. 在列表中，选择注册可访问Power BI的应用的Active Directory。
 3. Active Directory ID可以在当前页面的URL中找到：

![image_1](/assets/images/Controls/Controls-Power/ControlsPowerBI06.png)

客户端ID可以在Active Directory应用的设置中找到（见上文）。

![image_1](/assets/images/Controls/Controls-Power/ControlsPowerBI07.png)

最后，请填写您的Microsoft帐户用户名和密码。身份验证成功后，您可以选择要在Peakboard上显示的Power BI磁贴。在对话框中，请输入仪表板和磁贴的名称。

![image_1](/assets/images/Controls/Controls-Power/ControlsPowerBI08.png)

以下两个截图显示了Power BI中的仪表板，及在Peakboard面板上的仪表板。

![image_1](/assets/images/Controls/Controls-Power/ControlsPowerBI09.png)

![image_1](/assets/images/Controls/Controls-Power/ControlsPowerBI10.png)
