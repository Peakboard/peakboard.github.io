---
layout: article
title: S7数据写入OPC UA
menu_title: Write from S7 to OPC UA
description: 将S7数据写入OPC UA
lang: cn
weight: 1001
ref: misc-1001
---

使用以下脚本代码，您可将数据从Simens S7，例如S7 1500写入OPC UA服务器。
OPC UA服务器也可位于Siemens S7中。

```lua
-- datasourcename.writevaule(NodeID, Datatype)
data.opcua.writevalue('ns=3;s="Data_block_2". "IntegersWords". "int1"', toint16(12))
```

NodeID位于OPC UA数据源浏览会话变量中的“NodeID”部分。 

> ## 提示
>您也可以使用[UaExpert](https://opcfoundation.org/products/view/uaexpert)或相似工具创建NodeID。

对于[Peakboard脚本引擎](/scripting/en-script-engine.html)来说，所有数字均属同一数据类型，都作为“双精度浮点数”处理。
这意味着不经过转换，这些数字将无法存储在OPC UA服务器中。

> ## 提示
>[Peakboard脚本引擎](/scripting/en-script-engine.html)中只存在三种数据类型：布林值、数字和字符！
>因此，必须根据以下表格进行转换。

下表提供OPC UA数据类型概览以及各自的转换功能：

| OPC UA数据类型   |        转换功能        |
|-----------------|----------------------:|
| byte | tobyte() |
| sbyte | tosbyte() |
| float/single | tofloat()/tosingle() |
| int16/short | toint16()/toshort() |
| int32 | toint32() |
| int64/long | toint64()/tolong() |
| uint16/ushort | touint16()/toushort() |
| uint32 | touint32() |
| uint64/ulong | touint64()/toulong() |
| datetime | todatetime()
| guid | toguid() |
