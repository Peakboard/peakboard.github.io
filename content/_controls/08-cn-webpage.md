---
layout: article
title: 网页
menu_title: 网页
description: Peakboard Designer网页控件相关信息。
lang: cn
ref: con-08
---

网页控件具有显示网页的简单任务。它实际上是一个可自由定位的浏览器。最重要的属性是“源”。它包含以http或https开头的URL。除了纯页面之外，所有其他元素，如CSS文件、图像等可相应进行加载。“刷新时间”属性是控件刷新页面后的时间跨度（秒）。值得一提的是微软Edge的渲染引擎，而Edge是用于渲染页面，并搭配Windows 10的浏览器。根据页面的复杂性，在设计HTML代码时必须考虑到这一点。

![Webpage in Peakboard Designer](/assets/images/Controls/Webpage/Screenshot-3.png)

下面的截图从上方显示了面板，并显示了所需的网站。

![Webpage in Peakboard Box](/assets/images/Controls/Webpage/Screenshot-2.png)

Peakboard还支持各种需要登录的网站。为此，它们可在WebBrowser控件中用您的登录数据填充“用户名”和“密码”字段。您还必须输入登录和密码字段的ID以及“登录”按钮的ID。这些均可以在网站的源代码中找到。在Google Chrome、Internet Explorer、Edge和Firefox的当前版本中，您可以右键单击这些项目，然后浏览它们，或者单击Safari中的元素信息。在这里，您可找到ID属性，而您必须在网页控件中输入其值。

![Developer Tools Chrome ](/assets/images/Controls/Webpage/WebView2.png)
