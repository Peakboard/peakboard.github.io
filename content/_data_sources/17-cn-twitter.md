---
layout: article
title: 推特
menu_title: 推特
description: Peakboard中的微博数据相关信息
lang: cn
ref: dat-17
---
在下方的链接下，您会发现一个关于外部数据源如何配置和链接到Peakboard-元素的教程：

[开始通过外部数据源使用XML数据源的示例](/tutorials/03-en-xml-data.html)

推特数据源提供所有原始数据，以便稍后在可视化中构建完整的Twitter feed。像任何其他数据源一样，它需要一个名称。您可以秒为单位定义加载数据的时间间隔（重新加载间隔）。“最大项目数”是最大数据行数，即检索到的推文数。
基本上，可以使用三种方法选择推文：特定微博账户的所有推文（按用户名）或散列标签。第三个方法是通过搜索标准进行免费搜索（例如，包含BVB和VFB的所有推文的“BVB和VFB”）。您会在这里找到一个很好的搜索标准指南。

![Twiter Add Data Dialog](/assets/images/data-sources/twitter/twitter-add-data-dialog.png)

单击“预览”会显示数据预览。

![Twitter Preview Dialog](/assets/images/data-sources/twitter/twitter-preview-dialog.png)

微博数据源始终具有相同的列。它们有以下含义：

> *	**UserLongName：**是用户的Instagram名称
> *	**UserShortName：**是用户的推特名称
> *	**text：**是所有格式的推文内容
> *	**time stamp：**是YYYY形式的时间戳。MM.DD hh:mm:ss
> *	**media URL：**是推文有附件时图片或视频的URL。
> *	**ProfileImageURL：**是用户头像的URL
> *	**TimeAgo：**是格式化的时间规格，例如：“5分钟前”，如果该推文在5分钟前被删除。
