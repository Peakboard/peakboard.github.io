---
layout: article
title: 西门子S7
menu_title: 西门子S7
description: Peakboard中西门子S7数据的相关信息
lang: cn
ref: dat-21
---
一般来说，有几种方法可以在Peakboard中处理机器数据，例如通过基于云的物联网中心（如Azure或Google）或MQTT服务器。西门子S7数据源使Peakboard Box能够直接连接到S7控制器。如果控制网络与相应环境中的“正常”商业网络分离，则Box可以通过USB接收第二个LAN连接，一端连接到商业网络（例如，用于SAP访问），另端连接到S7控制网络。

## 先决条件

除了活跃的网络连接之外，仍须在S7控制器端进行或确保一些设置。首先，必须授予对数据块的访问权限。确保允许通用读写访问和PUT/GET通信。根据配置程序，这些设置可能如下所示：

![Protection](/assets/images/data-sources/siemens-s7/datenquelle-s7-00-protection.png)

第二个方面是控制器上的变量管理。对数据块、标志、输入和输出的内部访问可以是优化的，也可以是绝对的。为了能够通过Peakboard读取控制器中的变量，必须激活绝对访问。

![Block Access](/assets/images/data-sources/siemens-s7/datenquelle-s7-01-block-access.png)

以下截图显示了S7程序员看到的数据块原始视图。变量的数据类型和偏移量在这里是相关的。S7数据源的配置需要这两个值。如果变量在数据块中，则仍然需要数据块编号。

![Data Block](/assets/images/data-sources/siemens-s7/datenquelle-s7-02-data-block.png)


## 连接Peakboard Designer

要将Peakboard连接到S7，请创建相应的数据源。输入必需的名称、“IP地址、插槽、机架”。指定S7 CPU时，当前支持型号有1200、1500、200、300和400。“重载间隔”指定了下一次数据更新之前经过的时间。您可以使用“最大项目数”来定义接下来将包含在表中的值的数量。最新的变量值总是排在表格中第一位。如果要在稍后的脚本中访问当前调用之前的值，则输入大于1的值才有意义。

![Data Dialog](/assets/images/data-sources/siemens-s7/datenquelle-s7-03-edit-data-dialog.png)

## 变量定义

必须为要检索的每个变量手动创建一个条目。为此，必须输入唯一的名称，但该名称不必与控制器上的变量相同。此外，必须定义变量的位置。这包括变量是否位于数据块、标志、输出或输入（类型）中，以及指定变量内存地址的偏移量。

![Edit Variable Dialog](/assets/images/data-sources/siemens-s7/datenquelle-s7-04-edit-variable-dialog.png)

定义偏移时，请注意依赖于数据类型的特殊格式化功能。
如要读取数据类型“比特”的变量，即布尔值，则必须以[字节.比特]的形式指定偏移量。例如，有效值为“0.0”或“2.7”。

## 将变量捆绑至结构中

通常，控制器可提供多个值。如果想获得大量变量，则有数据源配置很快变得混乱的风险。
为了避免这个问题，可以将变量捆绑至结构中，从而本地或主题上组织变量。
首先点击“添加自定义”按钮。
在下面的对话框中，在强制性名称之外，还可以添加变量。请注意，结构必须至少包含两个变量。

![Edit Custom Dialog](/assets/images/data-sources/siemens-s7/datenquelle-s7-05-edit-custom-dialog.png)

存储在结构中的变量稍后将显示在与表中所有其他值相同的级别上。
示例配置可能如下所示。

![Struct Pattern](/assets/images/data-sources/siemens-s7/datenquelle-s7-06-struct-pattern.png)

所有与第1行相关的变量以及数据块#3上的变量都存储在它们自己的结构中。

点击“预览”，将Peakboard Designer连接到S7控制器，检索当前值并在表格中显现。

![Preview Dialog](/assets/images/data-sources/siemens-s7/datenquelle-s7-07-preview-dialog.png)

数据源现在可以像往常一样在Peakboard中使用，例如，通过绑定或借助脚本。请注意：数据源刷新事件仅在至少一个变量已更改时触发。如果所有变量保持不变，则未触发事件。

## 写入变量

只有通过Lua脚本才能在S7控件上设置值。有四种方法，一种方法适用于一种内存类型。这些方法可以在数据源“写入PLC”下的脚本编辑器中找到。
请注意，要写入的变量不必存储在数据源中。

![Write Methods](/assets/images/data-sources/siemens-s7/datenquelle-s7-08-write-methods.png)

这些方法的语法基本相同，因此只需要属性变量的基本信息。
这样的命令具有以下模式：

```lua
Data.[plc].setvar( ([Datenblocknummer], )[Offset], [Datentyp], [Wert] )
```

只有在要写入数据块并指定为整数时，才需要数据块编号。
在变量配置对话框中指定偏移量。
这同样适用于数据类型。
与偏移量和数据类型一样，该值被指定为字符串（“值”）。
