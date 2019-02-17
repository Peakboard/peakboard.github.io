---
layout: article
title: Google电子表格
menu_title: Google电子表格
description: Google电子表格
lang: cn
ref: dat-30
---
Google电子表格数据源用于从Google电子表格中提取表格式数据，然后像任何其他数据源一样在Peakboard中使用。

## 授权访问Google

除了数据源的强制名称之外，必须首先连接Google账户。可以通过Authorize（认证）按钮建立，在打开的登录窗口中输入Google用户，Peakboard作为应用程序，须给予其读取电子表格的权利。这与任何其他第三方访问一样。用户名及密码与Peakboard Designer没有任何关系，只会生成一个令牌，存储于包中，之后传输到Box中。在必要的情况下，您也可以在Google账户中撤销此访问。

![image_1](/assets/images/Data_Sources/GoogleSpreadsheets/SpeadsheetsSource01.png)

## 电子表格访问设置

三个点按钮可以浏览包含电子表格的Google云端硬盘文件夹结构。双击选择后，路径和文件名将放入相应的文本字段中，并可选择所需的表格。可以用下面的设置从电子表格中选择正确的部分作为数据基础：

* **第1行中的列名称**表示第一行的列内容用作输出列的标题。
* **切换行和列**反向处理行和列，如数据透视表。
* **全选**表示已选择工作表中的所有数据（而不只是一个特定部分）。
* **范围**如果只选择读取表格的某一部分，则可以指定此值。符号与Excel相同，例如：A5:C26。
* **最大项目**定义可读取的最大行数（如果未指定范围）。
* **重载间隔**是通常自动重新加载数据的时间段（单位为秒）。




在预览中，单击Load Data（加载数据）将根据设置显示数据，并更新列列表中的元数据。

![image_1](/assets/images/Data_Sources/GoogleSpreadsheets/SpeadsheetsSource02.png)
