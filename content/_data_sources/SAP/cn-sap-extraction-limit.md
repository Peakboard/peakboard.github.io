---
layout: article
title: 读取包含多列数据的SAP表
menu_title: Reading SAP Tables with Many Columns
description: 读取包含多列数据的SAP表
lang: cn
weight: 20001
ref: dat-20001
---

您可以在此参阅Z_XTRACT_IS_TABLE功能模块的手动安装指南。

### 第一步 —— 创建模块

启用SE37交易，并创建一个新模块——Z_XTRACT_IS_TABLE。您可以将其储存在已有的功能组，或为其创建一个新功能组。对于开发类也同样如此。


在属性标签中，将执行类型设置为“可远程调用”。

![Z-Custom-Function-01](/assets/images/data-sources/sap/Z-Custom-Function-01.png)

### 第二步 —— 导入参数

如截图所示，定义导入参数。

![Z-Custom-Function-02](/assets/images/data-sources/sap/Z-Custom-Function-02.png)

### 第三步 —— 表参数

如截图所示，定义表参数。

![Z-Custom-Function-03](/assets/images/data-sources/sap/Z-Custom-Function-03.png)

### 第四步 —— 报错类型

如截图所示，定义报错类型。

![Z-Custom-Function-04](/assets/images/data-sources/sap/Z-Custom-Function-04.png)

### 第五步 —— 代码

ABAP代码位于安装目录中的Z_XTRACT_IS_TABLE.txt文件。使用Ctrl+C和Ctrl+V组合键即可将代码复制到源代码编辑器。

保存并激活模块。

另一种方法：您可以使用系统自带的输送请求thtrans.zip安装功能模块。该文件位于安装文件夹中的ABAP子文件夹。
