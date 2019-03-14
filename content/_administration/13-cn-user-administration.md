---
layout: article
title: 用户管理
menu_title: 用户管理
description: 用户管理
lang: cn
ref: admin-13
---


Peakboard提供多种应用可能。因此公司中的不同人群会接触可视化。为了解决这个问题，Peakboard可以为每个Box添加用户，这些用户分配给特定用户组。然后可以向该组提供相应人群工作所需的授权。这些权限会影响该Box，以及从Designer链接到该Box。Designer本身始终可以完全使用。

## 受影响的组件

下面是受用户管理影响范围的列表：

![Overview](/assets/images/admin/usermanagement/Overview.png)

### 管理可视化
此权限指定用户组的用户是否可以激活、停用、部署或删除可视化。

### 与PBIO配对
具有此权限的用户可以将Box链接到Peakboard.io帐户。如果可视化使用Peakboard.io功能，则必须有此种链接。

### 推送数据
如果要通过http推送操作一个活动的可视化中的变量，则在其上下文中发送推送的用户需要此权限。

### 设置属性
具有此权限的用户可以使用存储在Box中的属性。由于这些属性允许访问许可证密钥等，因此这个权限应特别留给管理员。

### 管理日志
具有此权限的用户组可以访问Box中所创建的日志文件。包括读取和删除文件。

## 用户和用户组的配置

管理员帐户一直链接到Box的操作系统，因此在此概念之外。除了管理员账户，Peakboard还提供两个预定义的用户组。一个用户组是“Designer管理员”，几乎具有全部权限。另一个用户组为“应用用户”，是指仅通过Android或iOS应用与Box进行交互的人。“应用用户”可以更改可视化，但是，禁止访问关键信息，例如：许可证密钥。如果要创建新用户组，请选择所需的Box，然后通过“设置”按钮打开“管理用户”选项。与设备短暂同步后，将打开配置对话框。它由两个选项卡组成，第一个选项卡显示Box中已经配置的用户。第二个选项卡提供有关可用任务及其分配权限的信息。

![NewGroup](/assets/images/admin/usermanagement/NewUsergroup.png)

单击“添加”按钮可根据选项卡创建新用户或用户组。关于用户组，您只需勾选相应的复选框，即可定义该组用户的权限。单击名称字段可以更改该组的名称。在“用户”选项卡中将打开一个小窗口，在此输入新用户的用户名。随机生成的密码将显示在第二个文本字段中。如果你想保留此密码，必须将其单独保存！关闭对话后将无法再次访问。

![NewUser](/assets/images/admin/usermanagement/NewUser.png)

完成操作后，只需选择想要用户归属的组。要更改名称直接在名称字段中操作。

![Save](/assets/images/admin/usermanagement/Save.png)

要应用更改，只需单击“保存”按钮。如果需要，当前所选Box的设置也可以应用于组中所有其他设备。要这样做，请选中选项“将用户和任务复制到组中的其他Box[当前组的名称]”。


## 使用具有用户上下文的设备

要使用具有所需用户上下文的设备，您必须在Designer中添加具有相应用户的Box。在管理对话框中单击“添加”。如图片所示，须在对话框中输入用户名和密码以选择设备。此处新用户与所需的用户组一起存储，而不需要管理员帐户。

![AddDevice](/assets/images/admin/usermanagement/AddDevice.png)

单击“确定”按钮将Peakboard添加到Designer。您可以在管理对话框的“用户名”列中查看当前链接到Box的用户。

![ManageDialogEntry](/assets/images/admin/usermanagement/ManageDialogEntry.png)