---
layout: article
title: 网页
menu_title: 网页
description: Peakboard Designer中网页控件相关信息。
lang: cn
weight: 810
ref: con-810
redirect_from:
  - /controls/08-cn-webpage.html
---

“网页”控件具有显示网页的简单任务。它实际上是一个可自由定位的浏览器。最重要的属性是“源”。它包含以http或https开头的URL。除了纯页面之外，还会相应加载所有其他元素，如CSS文件、图像等。“刷新时间”属性控件刷新页面后的时间跨度（单位为秒）。值得一提的是Windows 10引入的浏览器Microsoft Edge，其渲染引擎用于渲染页面。根据页面的复杂性，在设计HTML代码时必须考虑到这一点。

![Webpage in Peakboard Designer](/assets/images/Controls/Webpage/Screenshot-3.png)

下面的截图从上方显示了面板，并显示了所需的网站。

![Webpage in Peakboard Box](/assets/images/Controls/Webpage/Screenshot-2.png)

Peakboard还支持各种需要登录的网站。要执行此操作，可在“网络游览器”控件中的登录数据里填写“用户名”和“密码”字段。您还必须输入登录和密码字段的ID以及登录按钮的ID。这些均可以在网站的源代码中找到。在Google Chrome、Internet Explorer、Edge和Firefox的当前版本中，您可以右键单击这些项目，然后浏览它们，或者单击Safari中的“元素”信息。在这里，可找到ID属性，必须在“网页”控件中输入其值。

![Developer Tools Chrome ](/assets/images/Controls/Webpage/WebView2.png)
