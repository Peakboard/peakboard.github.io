---
layout: article
title: 向Peakboard发送推送消息
menu_title: 向Peakboard发送推送消息
description: 向Peakboard发送推送消息
lang: cn
ref: misc-02
---

当Peakboard-Box未从数据源中检索到数据，但是主动将数据源的数据“推送”至对话框，可使用Peakboard。本页展示了如何设计这样的场景。

在我们的示例中，我们创建了一个名为“信息”的表列数据源，该数据源有两列：代码和信息。但是，也可以为此创建单个变量。[本文]（/data_sources/01-en-variables.html）描述了“如何创建此类数据源”。最好用单一示范行来填充表格。然后创建一个表、网格控件，并将其链接到静态数据源。以下截图显示了Designer中的设计视图。


![image_1](/assets/images/misc/push/MiscPushMessage01.png)

您现在可以把设计转移到Box里，并在此处启用Peakboard。不出所料，包含静态数据的表如Designer中显示的一样。

现在可以从外部更改静态数据，通过从外部系统向Box发送http邮件信息。该信息必须发送到URL `http://<BoxAddress>: 40404/api/datapush? id=<MyID>&datakey=<MyDataKey>`。Box地址是网络名称或IP地址。ID是Peakboard的ID。您可以通过点击Edit Manifest找到。以下截图显示了该ID的Manifest对话框。最后一个数据密钥是静态数据源的名称。在我们的示例中，是“信息”。

必须使用基本身份验证对请求进行加密。为此，您使用的访问数据与Windows IoT Portal中建立访问数据的相同。默认情况下，这些登录数据为 “Administrator” “p@ssw0rd”。

![image_1](/assets/images/misc/push/MiscPushMessage02.png)

实际数据随后以CSV的形式在http邮件信息的正文中传输。在我们的示例中，正文应是如下所示：

```
Code,Message
Error,Machine is broken
```

上一行指定列名，下一行指定内容。如果其不是表格，而是单个值，则内容仅包含内容本身。例如，仅适用于字符串变量

`Hello World`

如果没有能够快速生成测试信息的机器，则它也可以提供一个小型.NET程序来演示这种机制。您可以在这里下载演示程序。以下是掩码及相关的.NET代码的截图，显示如何创建和发送http信息：

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
以下两张截图显示了原始主板，一张带有静态存储的数据，一张是发送推送消息后的截图：

![image_1](/assets/images/misc/push/MiscPushMessage04.jpg)

![image_1](/assets/images/misc/push/MiscPushMessage05.jpg)

下载http推送的.NET项目：
[PeakboardAPIDemo](https://github.com/Peakboard/CoolStuff/raw/master/Help%20Files/Push%20Messages/PeakboardAPIDemo.zip)

下载样板：
[PeakboardPushMessages](https://github.com/Peakboard/CoolStuff/raw/master/Help%20Files/Push%20Messages/PeakboardPushMessages.pbmx)
