---
layout: article
title: Google文档 
menu_title: Google文档
description: Peakboard Designer中Google文档控件相关信息。
lang: cn
ref: con-05
---

这篇文章介绍了将Google文档集成到Peakboard面板中。支持所有三种类型的文档：文档（从MS Word中获得的普通文档）、幻灯片（从MS PowerPoint中获得）和电子表格（从MS Excel中获得）。当然，许多其他文档也可以存储在Google云端硬盘中，但是Google文档控件只支持这三种主要类型，并将这三种类型在一同归组在“Google文档”中。

我们希望包括以下示例文档。没有必要以任何方式发布该文档。它们允许Peakboard轻松访问Google云端硬盘。这确保了身份认证。

![image_1](/assets/images/Controls/Google-Docs/ControlsGoogleDocs01.png)

将Google文档控件从工具箱拖到Peakboard面板中，并调整其大小，然后双击控件打开编辑器。

![image_1](/assets/images/Controls/Google-Docs/ControlsGoogleDocs02.png)

您现在必须允许Peakboard访问您的Google云端硬盘。要执行此操作，单击带有三个点的按钮，打开授权对话框，在此处您需要输入Google凭证。注意！这是Google网站。您的用户名和密码不会提供给Peakboard，您只是在Google上验证身份并允许访问。然后，Google会向Peakboard返回授权令牌（一个加密字符串）。您可以随时在Google帐户中撤销这一授权。其工作方式与允许其他第三方应用程序访问它的方式完全相同。

![image_1](/assets/images/Controls/Google-Docs/ControlsGoogleDocs03.png)

![image_1](/assets/images/Controls/Google-Docs/ControlsGoogleDocs04.png)

单击“从Google云端硬盘选择文档”按钮打开选择对话框，其中显示Google云端硬盘帐户的文件夹结构。用这种方式可以选择所需文档并将其传送到主对话框中。

![image_1](/assets/images/Controls/Google-Docs/ControlsGoogleDocs05.png)

只能进行到这一步。单击“预览”按钮从Google检索文档，并将其显示在对话框底部。

![image_1](/assets/images/Controls/Google-Docs/ControlsGoogleDocs06.png)

在Runtime中运行预览，与直接在Peakboard-Box上运行时应看起来完全一样。

![image_1](/assets/images/Controls/Google-Docs/ControlsGoogleDocs07.png)

##附注
如果您使用Google幻灯片，那么这些幻灯片会根据Peakboard控件的大小进行调整。文档和电子表格的情况则不然。像素精确尺寸会匹配Peakboard控件。如果控件不够大，则部分内容将不可见。
