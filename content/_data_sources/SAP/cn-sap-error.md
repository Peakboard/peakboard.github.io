---
layout: article
title: SAP报错信息
menu_title: SAP报错信息
description: SAP报错信息
lang: cn
weight: 20000
ref: dat-20000
---

## ERROR service ‚?‘ unknown or service sapms unknown
连接SAP时，您有可能遇到以下错误信息：

````
ERROR service ‚?‘ unknown
```


它表明文件夹C:\Windows\System32\drivers\etc\services中的services文件缺少sapdp* （例如 sapdp00 3200/tcp）入口。 

请将文档底部的services文件入口增添至您的文件中。

如果您得到错误信息

```
ERROR service sapms<SID> unknown
```
 
 
您必须将下行的命令添加至services文件末尾， nn为SAP系统的实例编码（例如00或99）。

```
sapms<SID>  36<nn>/tcp
```
 
 
例如，如果您的SID是ECC，该命令应类似于

```
sapmsECC  3600/tcp  
```


对于系统 ID（SID） ECC和实例编码12，请设置为
```
sapmsECC 3612/tcp
```

> ## 重要提示！
>
> 将命令插入文件时，请确保最后一个入口始终以“返回”键结束。否则，对于某些平台，最后一个入口可能无法识别，从而出现问题。

> ## 警告！
>
>services文件不得带有拓展名。其名称应该保持services不变，不得改为类似于services.txt。

文件编辑完成之后，您可能需要重启Peakboard Designer。

[SAP Note 52959](https://launchpad.support.sap.com/#/notes/52959)