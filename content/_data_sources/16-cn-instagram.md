---
layout: article
title: Instagram
menu_title: Instagram
description: Peakboard中的Instagram数据相关信息
lang: cn
ref: dat-16
---
本页解释了访问Peakboard中的Instagram数据源时的各个功能。在下方的链接下，您会发现一个关于外部数据源如何配置和链接到Peakboard-元素的教程：

[开始通过外部数据源使用XML数据源的示例](/tutorials/03-en-xml-data.html)

Instagram数据源提供所有原始数据，以便稍后在可视化中构建完整的Instagram feed。像任何其他数据源一样，它需要一个名称。您可以秒为单位定义加载数据的时间间隔（重新加载间隔）。最大项目数是最大数据行数，即检索到的Instagram图像或视频。

基本上，可使用三种方法选择Instagram元素：某个帐户的所有帖子（按用户名）、散列标签或某个地理位置的所有图像（见下文）。访问令牌允许Peakboard以您的名义访问Instagram。访问必须始终根据Instagram的条款和条件进行个性化。要获取访问令牌，请单击“获取访问令牌”。然后，您需要输入您的Instagram凭证进行授权。请注意，Peakboard从不在任何地方存储您的访问数据。您可以随时撤销Instagram帐户设置中的授权。

![Instagram Add Data Dialog](/assets/images/data-sources/instagram/instagram-add-data-dialog.png)

单击“预览”会显示原始数据预览。

![Instagram Preview Dialog](/assets/images/data-sources/instagram/instagram-preview-dialog.png)


Instagram数据源始终具有相同列。它们有以下含义：

> *	**UserName：**是用户的Instagram名称
> *	**UserFullName：**是用户的Instagram名称
> *	**caption：**是包含所有散列标签的标题
> *	**time stamp：**是YYYY形式的时间戳。MM.DD hh:mm:ss
> *	**media URL：**是图像或视频的URL
> *	**MediaType：**图像或视频取决于类型
> *	**ProfileImageURL：**是用户头像的URL
> *	**LocationName：**是用户设置的地理位置名称
> *	**NumberOfLikes：**是该图像/视频的点赞数量
> *	**TimeAgo：**是格式化的时间规格，例如：“5分钟前”，如果该帖子在5分钟前被删除。

##位置ID

Instagram掩码使您能够选择特定地理位置的所有帖子。您将需要位置ID。如要找到位置ID，请在浏览器中打开Instagram，找到所需位置的图片，然后单击位置名称。之后出现的页面会有位置ID，其为URL的一部分，如以下截图所示。

![Instagram Location Id](/assets/images/data-sources/instagram/instagram-location-id.png)
