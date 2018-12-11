---
layout: article
title: 限制行数
menu_title: 限制行数
description: 限制行数
lang: cn
ref: flow-60
---
限制行数有三个不同的步骤：

* *Take Top* 仅选取表当前排序顺序的前几行
* *Take Last* 仅选取表当前排序顺序的前几行
* *Take Range* 通过指定初始和结束索引，剪切全部行的一部分

注意！！例如，如果您想从商品和销售数据表中筛选出销售额最高的三种产品，您必须在行限制步骤之前应用正确的排序顺序。否则，很可能会画出任何但可能不是所需的三行。

![Take Data](/assets/images/dataflows/dataflows-take01.png)

![Take Data](/assets/images/dataflows/dataflows-take02.png)

![Take Data](/assets/images/dataflows/dataflows-take03.png)
