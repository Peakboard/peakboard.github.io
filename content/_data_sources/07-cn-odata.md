---
layout: article
title: OData
menu_title: OData
description: Peakboard中OData数据的相关信息
lang: cn
ref: dat-07
---
此页面介绍了从Peakboard访问OData数据源时的各个功能。在下面链接中可以找到关于通常如何配置外部数据源并链接到Peakboard元素的教程：

[使用XML数据源的外部数据源示例](/tutorials/03-cn-xml-data.html)

如果您手边没有OData数据源的URL，但想尝试一次，请使用下面的示例URL。它指向AdventureWorks数据库，是微软的示例数据库。它包括不同的实体集，例如产品目录或销售数据。

[http://services.odata.org/AdventureWorksV3/AdventureWorks.svc](http://services.odata.org/AdventureWorksV3/AdventureWorks.svc)

OData是一种标准化的数据交换格式。示例URL是一个小型数据库，通过在输入URL后单击“加载”，可以将其实体集加载到组合框中。如果OData需要认证，请单击三个点小按钮，之后输入您的用户名和密码。

![Odata Data Dialog](/assets/images/data-sources/odata/odata-data-dialog.png)

如果已选择一个实体集，则会在下面表格中自动显示列及其数据类型的信息。通常，可以指定刷新源的时间间隔和检索最大行数。如果不想从源检索全部数据，则可在相应的文本字段中定义OData过滤器。如果不清楚OData过滤器如何工作，可以在此查看介绍。

![Odata Entity Properties](/assets/images/data-sources/odata/entity-properties.png)

在“预览”按钮的帮助下，将发送一个测试请求到服务器，并根据规范准备数据。

![Odata Preview Dialog](/assets/images/data-sources/odata/odata-preview-dialog.png)
