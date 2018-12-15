---
layout: article
title: ListView
menu_title: ListView
description: Peakboard Designer ListView控件相关信息。
lang: cn
ref: con-10
permalink: /cn/:collection/list-view
---

ListView控件可为任何形状，只要可包含重复元素。因此，为了正常工作，其必须链接到表格数据源。其为简单列表还是复杂元素需由XAML片段定义。如果您不熟悉XAML，您可以在这里(https://msdn.microsoft.com/en-us/library/cc295302.aspx)了解更多相关知识。这是一种可以用来定义由图像、文本和其他元素组成的界面的描述语言。类似于HTML，但效果更好。
在下面的示例中，我们想要可视化[Instagram] （/data_sources/16-en-instagram.html）源，关于该源，我们已在另一篇文章中进行了说明，并介绍了Instagram信息源。这种数据源特别适用，因为它们由图像和文本组成。
将ListView控件拖到面板上，然后单击“源”属性的属性编辑器。这时会打开一个对话框，您可以在其中选择数据源，例如Instagram。

![image_1](/assets/images/Controls/ListView/ControlsListview01.png)

ListView控件现在已发现该源是Insta信息源，并且已提出了合适的可视化功能。这就是为什么这是一个好的示例的原因，因为我们可以用这种方式来查看XAML代码，而不必一开始就制定XAML。您可以从“项目模版”属性对话框访问代码编辑器。在代码编辑器的顶部，您可以使用组合框来选择与相应数据源匹配的其他模板。点击右窗格中的“预览”，查看您在左侧制定的XAML是如何直观地表示自身的。您还可以检查是否有语法错误。

![image_1](/assets/images/Controls/ListView/ControlsListview02.png)

如要在XAML中使用来自数据源的值，只需使用绑定描述。简单的文本字段可以用与数据源中包含URL的图像相同的方式进行绑定。Instagram是另一个用来证明这一点的很好例子。

![image_1](/assets/images/Controls/ListView/ControlsListview03.png)

如果您喜欢从左到右排列元素，只需将“方向”属性从“垂直”更改为“水平”。调整XAML模板也有用，否则就没有任何意义了。这两个截图显示了带有水平模板的垂直列表视图和带有垂直模板的水平列表视图。

![image_1](/assets/images/Controls/ListView/ControlsListview04.png)

![image_1](/assets/images/Controls/ListView/ControlsListview05.png)

最后，为了完整起见，需在“预览”模式下查看ListView控件。

![image_1](/assets/images/Controls/ListView/ControlsListview06.png)
