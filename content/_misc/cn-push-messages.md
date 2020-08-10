---
layout: article
title: 向Peakboard发送推送消息
menu_title: 向Peakboard发送推送消息
description: 向Peakboard发送推送消息
lang: cn
weight: 200
ref: misc-200
redirect_from:
  - /misc/02-cn-push-messages.html
---

当Peakboard Box未从数据源中检索到数据的情况时，可使用Peakboard，但主动从数据源“推送”至Box中。本页面展示了如何设计这样的场景。

在我们的示例中，我们创建了一个名为“消息”的表格数据源，包含两列：“代码”和“消息”。但是，也可以为此目的创建单个变量。这篇[文章](/data_sources/01-cn-variables.html)描述了如何创建此类数据源。最好用单一演示行来填充表格。然后创建一个表格网格控件，并将其链接到静态数据源。以下截图显示了Designer中的设计视图。


![image_1](/assets/images/misc/push/MiscPushMessage01.png)

您现在可以把设计转移到Box里，并启用看板。不出所料，包含静态数据的表如Designer中显示的一样。

现在可以从外部更改静态数据，通过从外部系统向Box发送http邮件消息。该消息必须发送到URL `http://<BoxAddress>: 40404/api/datapush? id=<MyID>&datakey=<MyDataKey>`。Box地址是网络名称或IP地址。ID是Peakboard的ID。您可以通过单击“编辑清单”找到它。以下截图显示了该ID的“清单”对话框。最后一个“数据密钥”是静态数据源的名称。在我们的示例中，是“消息”。

必须使用基本身份验证对请求进行加密。为此，所使用的访问数据与“Windows IoT门户”中设置的访问数据相同。默认情况下，这些登录数据为 “Administrator” 、“p@ssw0rd”。

![image_1](/assets/images/misc/push/MiscPushMessage02.png)

实际数据随后以CSV传输到http邮件消息的正文中。在我们的示例中，正文应如下所示：

```
Code,Message
Error,Machine is broken
```

上一行指定列名，下一行指定内容。如果它不是表格，而是单个值，则内容仅包含内容本身。例如，仅适用于字符串变量

`Hello World`

如果没有能够快速生成这种测试消息的机器，则它也可以执行个小型.NET程序来演示这种机制。您可以在此下载演示程序。以下是掩码及相关的.NET代码的截图，显示如何创建和发送http消息：

![image_1](/assets/images/misc/push/MiscPushMessage03.png)

```Lua
Uri uri = new Uri($”http://{this.IPTextBox.Text}:40404/api/datapush?id={this.IdTextBox.Text}&datakey=messages”);
HttpClient httpClient = new HttpClient(new HttpClientHandler() { Credentials = new NetworkCredential(this.UserTextBox.Text, this.PasswordTextBox.Password) });

var request = new HttpRequestMessage(HttpMethod.Get, uri);

string csvcontent = “Code,Message\r\n” + this.CodeTextBox.Text + “,” + this.MessageTextBox.Text;

var content = new StringContent(csvcontent, Encoding.UTF8, “application/csv”);

HttpResponseMessage response = await httpClient.PostAsync(uri, content);

if (response.IsSuccessStatusCode)
{
 MessageBox.Show(“Message posted successfully”);
}
else
{
 MessageBox.Show($”Message posting failed {response.StatusCode}”);
}

```
以下两张截图显示了原始看板，一张带有静态存储的数据，一张是发送推送消息后：

![image_1](/assets/images/misc/push/MiscPushMessage04.jpg)

![image_1](/assets/images/misc/push/MiscPushMessage05.jpg)
