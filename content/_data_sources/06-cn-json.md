---
layout: article
title: JSON
menu_title: JSON
description:Peakboard中JSON数据的相关信息
lang: cn
ref: dat-06

---
此页面介绍从Peakboard访问JSON数据源时的各个功能。在下面链接中可以找到关于通常如何配置外部数据源并链接到Peakboard元素的教程：

[使用XML数据源的外部数据源示例](/tutorials/03-cn-xml-data.html)

如果您手边没有JSON数据源的URL，但想尝试一次，请使用以下示例URL：

[http://mysafeinfo.com/api/data?list=presidents&format=json](http://mysafeinfo.com/api/data?list=presidents&format=json)

JSON是一种层次格式。由于Peakboard数据源都是表格式的，因此必须选择JSON文件的一部分。可以在JSON源中引用数组或复杂对象。对于数组，Peakboard中的目标表具有任意数量的列；对于对象，只有一行，且对象的所有元素都作为列。要配置JSON数据源，请为其命名，并指定源的URL（例如，上面的URL）。如果只想使用部分JSON内容，请在“JPath”文本字段中制定一个JPath语句指向开始元素。一个空JPath启动根元素。如果源要求认证，则必须填写用户和密码字段。

要在Peakboard中发布元数据，单击“加载列”。 然后根据规范填写含目标列的表。 “最大项目”字段限制行数为一个特定值。 “重载间隔”指定应再次刷新数据源的秒数。请根据您的应用调整这些值。

![JSON Add Data Dialojso](/assets/images/data-sources/json/json-add-data-dialog.png)

单击“预览”以表格形式显示原始数据，在此可再次查看信息。

![JSON Preview Data](/assets/images/data-sources/json/json-preview-data.png)
