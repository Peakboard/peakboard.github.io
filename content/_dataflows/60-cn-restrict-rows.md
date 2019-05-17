---
layout: article
title: 限制行数
menu_title: 限制行数
description: 限制行数
lang: cn
weight: 6000
ref: flow-6000
---
限制行数有三个不同的步骤：

* **选取开始** 仅选取表当前排序顺序的前几行
* **选取最后** 仅选取表当前排序顺序的最后几行
* **选取范围** 通过指定初始和结束索引，剪取全部行的一部分

注意！！例如，如果您想从商品和销售数据表中筛选出销售额最高的三种产品，则必须在限制行步骤**之前**应用正确的排序顺序。否则，很可能会选出任何三行，但很可能不是所需的三行。

![Take Data](/assets/images/dataflows/dataflows-take01.png)

![Take Data](/assets/images/dataflows/dataflows-take02.png)

![Take Data](/assets/images/dataflows/dataflows-take03.png)
