---
layout: article
title: 谷歌文档 
menu_title: 谷歌文档
description: Peakboard Designer谷歌文档控件相关信息。
lang: cn
ref: con-05
---

这篇文章介绍了将谷歌文档集成到Peakboard面板中的一系列过程。支持所有三种类型的文档：文档（从MS Word中获得的普通文档）、幻灯片（从MS PowerPoint中获得）和电子表格（从MS Excel中获得）。当然，许多其他文档仍然可以存储在Google Drive中，但是谷歌文档控件只支持这三种主要类型，并且这三种类型在“谷歌文档”一项下归为一组。

我们希望包括以下示例文档。没有必要以任何方式发布该文档。其允许Peakboard轻松访问Google Drive。这确保了身份认证。

![image_1](/assets/images/Controls/Google-Docs/ControlsGoogleDocs01.png)

将谷歌文档控件从工具箱拖到Peakboard面板中，并调整其大小，然后双击控件打开编辑器。

![image_1](/assets/images/Controls/Google-Docs/ControlsGoogleDocs02.png)

您现在必须允许Peakboard访问您的Google Drive。为此，点击带有三个点的按钮，打开授权对话框，在此处您需要输入谷歌凭证。注意！这是谷歌网站。您无需将您的用户名和密码提供给Peakboard，但是您要在谷歌上验证身份并允许访问。然后，谷歌只会向Peakboard返回授权令牌（加密字符串）。您也可以随时在您的谷歌帐户中撤销这一授权。其工作方式与您允许其他第三方应用程序访问其的方式完全相同。

![image_1](/assets/images/Controls/Google-Docs/ControlsGoogleDocs03.png)

![image_1](/assets/images/Controls/Google-Docs/ControlsGoogleDocs04.png)

点击“选择文档...”按钮会打开一个选择对话框，显示Google Drive帐户的文件夹结构。用这种方式可以选择所需的文档并将其传送到主对话框中。

![image_1](/assets/images/Controls/Google-Docs/ControlsGoogleDocs05.png)

只能进行到这一步。按下“预览”按钮，可检索谷歌中的文档，并显示在对话框底部。

![image_1](/assets/images/Controls/Google-Docs/ControlsGoogleDocs06.png)

如果其在预览时在Runtime运行，或者直接在Peakboard-Box上运行，那么看起来应该完全一样。

![image_1](/assets/images/Controls/Google-Docs/ControlsGoogleDocs07.png)

##附注
如果您使用谷歌的幻灯片，那么这些幻灯片会根据Peakboard控件的大小进行调整。文档和电子表格的情况则不然。在这里，像素精确尺寸会匹配Peakboard控件。如果控件不够大，则部分内容不可见。
