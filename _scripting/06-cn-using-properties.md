---
layout: article
title: 使用属性
menu_title: 使用属性
description: 使用属性
lang: cn
ref: scr-06
---
本文描述了所谓属性的使用。从最广泛的意义上来说，这些是主要用于脚本中的常量值。可以为单个可视化创建此类常量，也可以为可视化运行的完整“Box”创建此类常量。

可视化属性的一个合适示例是每日最大值，例如25件的产量。然后可以在脚本中的不同位置访问该值。如果它应该改变一次，它只需要在一个点上进行更改，而不需要在脚本中的100个位置上进行更改。

Box属性一个最典型的示例就是部门的名称。通过这种方式，您可以简单地在脚本中定义一个函数，该脚本可确保当可视化在某个部门运行时，其行为与在另一个部门有所不同。但它现在是并且一直是相同的可视化，且可以被普遍创建：“如果部门=‘南方’，那么只显示南方的数字，否则显示所有的数字”。

要设置单个可视化的属性，请单击菜单栏中的相应按钮。然后可以在表格中维护这些值：

![image_1](/assets/images/scripting/properties/Properties_01.png)

要设置特定“Box”的属性，您可以通过“管理”对话框中的相应菜单项访问维护屏幕。请注意，“Box编号”和“许可证”属性是系统属性，不应更改或删除。

![image_1](/assets/images/scripting/properties/Properties_02.png)

在脚本中，包属性的指定方式为

`runtime.packageproperties.<MeinePackageProperty>``

“Box”属性的查询方式为：

`runtime.properties.<MeineBoxProperty>`

![image_1](/assets/images/scripting/properties/Properties_03.png)
