---
layout: article
title: 谷歌分析报告
menu_title: 谷歌分析报告
description: 关于Peakboard设计的谷歌分析报告控件。
lang: cn
ref: con-13
permalink: /cn/:collection/google-analytics
---

创建谷歌分析报告必须设立一个Peakboard.io帐户。在[Peakboard.io门户](/peakboardio/01-en-intro-peakboard-io.html) 中定义GA报告，然后使用相应的控件嵌入到设计器中。

在Peakboard.io门户中，转到菜单中的“GA图表”。如果您还没有将您的账户链接到谷歌账户，请点击相应的按钮（见下一截图）。将打开谷歌登录屏幕，必须在其中输入证书信息。这是一个典型的OAuth2认证，允许Peakboard访问您的谷歌分析数据。您可以随时在Google档案中撤销此权限。成功连接后，可以创建任意数量的报告。链接只需要制作一次，然后就可以保留。

![image_1](/assets/images/Controls/google-analytics/Controls_GA_01.png)

成功连接后，左侧有许多输入字段可用于建立数据基础和设计GA报告。必须根据GA帐户选择属性和视图。其确切方式取决于GA账户。请勿忘记正确命名对象，并添加简短的描述。

![image_1](/assets/images/Controls/google-analytics/Controls_GA_02.png)

接下来，必须选择开始和结束日期以及其他属性。所需的度量和维度是必填字段。排序、筛选和分割均自动进行。请注意，谷歌分析提供了无数的可能性。因此，正确设置这些属性并不容易，需要更深入的专业知识。有关尺寸、度量和其他属性的更多详细信息，请参考谷歌文档。

![image_1](/assets/images/Controls/google-analytics/Controls_GA_03.png)

最后一部分中，只需指定可视化的详情。图表的标题、类型和大小。单击运行查询以使用选定属性执行查询。然后，您将看到图表的预览。最后，像其他Peakboard.io对象一样保存您的报告。

![image_1](/assets/images/Controls/google-analytics/Controls_GA_04.png)

Peakboard Designer可自行管理这些GA报告。像往常一样输入API键和用户名后，从选择列表中选择相应的图表对象。无需进行其他操作。

![image_1](/assets/images/Controls/google-analytics/Controls_GA_05.png)
