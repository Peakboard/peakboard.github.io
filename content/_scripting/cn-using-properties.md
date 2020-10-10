---
layout: article
title: 使用Peakboard Box属性
menu_title: 使用Peakboard Box属性
description: 使用Peakboard Box属性
lang: cn
weight: 600
ref: scr-600
redirect_from:
  - /scripting/06-cn-using-properties.html
---
本文描述了所谓“属性”的使用。从广义上说，这些是主要用于脚本中的常量值。您可以在运行可视化看板的Peakboard Box上创建这些变量。

Box属性一个最典型的示例就是部门名称。通过这种方式，您可以简单地在脚本中定义一个函数，该脚本可确保当可视化在某个部门运行时，其行为与在另一个部门使用时有所不同。但它其实一直都是同一个可视化看板，而且可以由任何部门创建：“如果部门=‘南方’，那么只显示南方的数字，否则显示所有的数字”。

要为特定Box设置属性，您可以通过“管理”对话框中的相应菜单项访问维护屏幕。

##警告
>
> 请注意，“BoxID”和“许可证”属性是系统属性，不应更改或删除。

![image_1](/assets/images/scripting/properties/Properties_02.png)

在脚本中，Box属性可如此定义

`runtime.packageproperties.<MeinePackageProperty>``

Box属性的查询方式为：

![image_1](/assets/images/scripting/properties/Properties_03.png)
