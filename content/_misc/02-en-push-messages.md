---
layout: article
title: Sending Push Messages to the Peakboard
menu_title: Sending Push Messages to the Peakboard
description: Sending Push Messages to the Peakboard
lang: en
weight: 200
ref: misc-200
redirect_from:
  - /misc/02-en-push-messages.html
---

Peakboard can be used in scenarios where data is not retrieved from a data source by the Peakboard-Box, but “pushed” proactively from the data source to the box. This page shows how to design such a scenario.

In our example, we create a tabular data source called messages with two columns: Code and message. However, a single variable can also be created for this purpose. How to create such data sources is described in this [article.](/data_sources/01-en-variables.html) It is best to fill the table with a single demo line. You then create a table grid control and link it to the static data source. The following screenshot shows the design view in Designer.


![image_1](/assets/images/misc/push/MiscPushMessage01.png)

You can now transfer the design to a box and play the board there. Not surprisingly, the table with the static data is displayed as in the Designer.

The static data can now be changed externally by sending an http mail message from an external system to the box. The message must be sent to the URL `http://<BoxAddress>: 40404/api/datapush? id=<MyID>&datakey=<MyDataKey>`. The box address is either the network name or the IP address. The ID is the ID of the board. You can find it by clicking on Edit Manifest. The following screenshot shows the Manifest dialog with the ID. The last Data Key is the name of the static data source. In our example, Messages.

The request must be encrypted using basic authentication. To do this, you use the same access data as set up in the Windows IoT Portal. By default, these login data are “Administrator” “p@ssw0rd”.

![image_1](/assets/images/misc/push/MiscPushMessage02.png)

The actual data is then transferred in the body of the http mail message as CSV. In our example, the body should look like this:

```
Code,Message
Error,Machine is broken
```

The upper row specifies the column names and the following rows the contents. If it is not a table but a single value, the content consists of the content only. For example, for a string variable only

`Hello World`

If you don’t have a machine at hand that can quickly generate such a message for testing, it also does a small .NET program to demonstrate this mechanism. You can download the demo program here. Below is a screenshot of the mask and its associated .NET code showing how to create and send the http message:

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
The following two screenshots show the original board once with the static, stored data and once after sending the push message:

![image_1](/assets/images/misc/push/MiscPushMessage04.jpg)

![image_1](/assets/images/misc/push/MiscPushMessage05.jpg)

Download the .NET project for the http-push:
[PeakboardAPIDemo](https://github.com/Peakboard/CoolStuff/raw/master/Help%20Files/Push%20Messages/PeakboardAPIDemo.zip)

Download the sample board:
[PeakboardPushMessages](https://github.com/Peakboard/CoolStuff/raw/master/Help%20Files/Push%20Messages/PeakboardPushMessages.pbmx)
