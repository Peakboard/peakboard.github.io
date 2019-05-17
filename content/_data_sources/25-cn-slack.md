---
layout: article
title: Slack
menu_title: Slack
description: Peakboard中Slack数据的相关信息
lang: cn
weight: 2500
ref: dat-2500
---
在团队中快速轻松地交流、讨论和协调任务时，Slack是首选工具。Peakboard的Slack数据源允许用户以用户定义的间隔从频道中检索消息，这和Peakboard一样。另一方面，消息可以通过Slack的WebSocket和WebHook接口实时读取和写入。因此，Slack连接不仅可以用于可视化聊天过程，还可以与网络中的Peakboard Box实时通信，或者让Peakboard彼此通信。

## 先决条件

根据您想要与Slack交互的方式，需要在它这一端采取一些措施来启用通信。
在任何情况下，都需要令牌。此令牌用于将Slack帐户与Peakboard的请求连接起来。可以在[此处](https://api.slack.com/custom-integrations/legacy-tokens)创建令牌。用户必须登录进行创建。
使用此令牌，通过间隔控制请求检索消息，并授权实时通信。
目前只有WebHooks支持写入通道。可以由工作区管理员在菜单中创建。相应条目的导航显示在下面的截图中。

![image_1](/assets/images/Data_Sources/Slack/Datenquelle_Slack_00_WebHook.png)
![image_1](/assets/images/Data_Sources/Slack/Datenquelle_Slack_01_WebHook2.png)

## 设置数据源

除了数据源的强制名称之外，上面已提及的令牌是关键。通过点击“获取通道”按钮，请求获得账户可用通道，并显示在下面的下拉菜单中。

在复选框“显示用户名”中将结果中的用户缩写替换为他们的名字。您可能只想从通道中读取并评估消息，而不管配置如何。在这种情况下，您可以保留一些网络负载，并使用用户ID进行进一步处理。

对话框中的下一项提供了可以忽略某些用户消息的可能性。这适用于数据源接收的所有消息。

![image_1](/assets/images/Data_Sources/Slack/Datenquelle_Slack_03_UserList.png)

## 实时通信

实时接收来自Slack通道的消息是Slack数据源的第二个核心特性，同时还可以按照标准间隔显示消息。这里，可以通过WebSockets进行通信，没有明显的时间延迟。这使得用户能够以最大的灵活性处理单个或任意大组合的Peakboard Box。

![image_1](/assets/images/Data_Sources/Slack/Datenquelle_Slack_04_RTM.png)

通过使用“{}”按钮储存对话框中的脚本，可以根据任意方面单独评估每条消息。这允许在Peakboard上以最小延迟显示或操作信息。从这一脚本也可以写入通道。

## 通过WebHooks向Slack发送消息

Slack提供有另一种通信方式，即WebHooks。这提供了一种快速简单的方法，通过机器人将消息直接发送到配置通道。

![image_1](/assets/images/Data_Sources/Slack/Datenquelle_Slack_05_WebHookSection.png)

将文本发送至通道的脚本命令非常简单，如下所示：
```lua
data.[slack].writetochannel('message')
```
由于Microsoft软件中存在漏洞，所以如果您想写入通道，需要WebHook。

## 预览数据

如需完成数据源设置，首先必须准备Slack数据结构。这可以通过点击“加载列”按钮完成。这样，将可以加载数据进行测试并确定其结构。
单击“预览”按钮，最终您将可以查看Slack通道的消息，从而确保数据源配置正确。

![image_1](/assets/images/Data_Sources/Slack/Datenquelle_Slack_06_Preview.png)

由于数据源的实时通信不同于通常用于Peakboards的数据间隔控制加载，所以“重载间隔”和“预览”仅适用于数据源间隔控制功能。eakboard Designer中无法测试实时连接。然而，标准通信、实时消息信和WebHooks在同一界面上运行。因此，可以假设，如果成功运行预览，则数据源的其余部分也将工作。
