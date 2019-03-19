---
layout: article
title: Twitter
menu_title: Twitter
description: Peakboard中Twitter数据的相关信息
lang: cn
ref: dat-17
---
在下面链接中可以找到关于通常如何配置外部数据源并链接到Peakboard元素的教程：

[使用XML数据源的外部数据源示例](/tutorials/03-cn-xml-data.html)

Twitter数据源提供所有原始数据，以便稍后在可视化中构建完整的Twitter feed。像任何其他数据源一样，它需要一个名称。您可以定义加载数据的时间间隔（单位秒），即“重载间隔”。“最大项目数”是最大数据行数，即检索到的推文数。
基本上，可以使用三种方法选择推文：特定Twitter账户（按用户名）的所有推文,井号标签的所有推文。第三个方法是通过搜索标准的随意搜索（例如，“BVB AND VFB”搜索包含BVB和VFB的所有推文）。您可以在此找到一个很好的搜索标准指南。

![Twiter Add Data Dialog](/assets/images/data-sources/twitter/twitter-add-data-dialog.png)

单击“预览”会显示数据预览。

![Twitter Preview Dialog](/assets/images/data-sources/twitter/twitter-preview-dialog.png)

Twitter数据源始终具有相同的列。它们有以下含义：

> *	**用户名：**是用户的全名
> *	**用户短名：**是用户的Twitter名
> *	**文本：**是所有格式的推文内容
> *	**时间戳：**是YYYY.MM.DD hh:mm:ss形式的时间戳。
> *	**媒体URL：**是推文有附件时图片或视频的URL。
> *	**个人资料图片URL：**是用户个人资料图片的URL
> *	**分钟前：**是格式化的时间规范，例如，“5分钟前”，如果该推文在5分钟前被删除。
