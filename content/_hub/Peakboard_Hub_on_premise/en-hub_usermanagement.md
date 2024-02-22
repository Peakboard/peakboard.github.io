---
layout: article
product: hub
title: Users
menu_title: Users
description: Peakboard Hub on premise - Users
lang: en
weight: 140
ref: hub-140
redirect_from:
 - /hub/en-hub_usermanagement.html
---

It is often necessary that not all users have the same rights. Whether for organizational, data protection or other reasons, you can define who gets which rights in Peakboard Hub on premise. You define the permissions in Peakboard Hub on premise via user groups.

The procedure differs in some respects depending on whether you are using a [Peakboard Hub on premise](/hub/Peakboard_Hub_on_premise/en-hub_usermanagement.html) or a [Peakboard Hub online](/hub/Peakboard_Hub_online/en-hub-online_usermanagement.html). Make sure you use the correct article.

<div class="box-warning" markdown="1">
**Note**

The user management is only visible to you if you have admin rights.
</div>

### Add and set up a user group

Click the [Add user group] button (1) and set a name (2) to add a new user group. The group key (3) will be generated automatically.

![Add user group](/assets/images/hub/en_hub_usermanagement-01.png)

You can add Peakboard Boxes (1), lists (2) and connections (3) to a user group.
Using the group key (4), the members of the user group can then use Peakboard Hub on premise and access the assigned data.

![User groups](/assets/images/hub/en_hub_usermanagement-02.png)

If a Peakboard Box is added to a user group, the users of the respective Peakboard Box will remain.
Define under which Peakboard Box user the Peakboard Hub on premise user group accesses your Peakboard Box.
This way it is possible that different user groups in Peakboard Hub on premise use the same Peakboard Box under different Peakboard Box users and thus with different permissions.

For lists, you can configure the permissions per list even more precisely.
To do so, click on the pencil button (1) behind the list you want to edit.
You can define if rows can be added or deleted, if the structure of the lists can be changed or if the lists can be cleared completely. In addition, you can assign read-only rights for individual columns. Users can then no longer edit this column.

![Lists](/assets/images/hub/en_hub_usermanagement-03.png)

### Manage individual users

You can assign user groups (1) and change the user status (2) for individual users in the right area of the workspace. There you can also see users that have not yet been assigned to a user group (3) and you can assign them a user group.

![Individual users](/assets/images/hub/en_hub_usermanagement-04.png)

### Add new users

By default, Peakboard Hub on premise accesses Active Directory (domain) users. New users must log in to Peakboard Hub on premise with their Active Directory user data. An administrator can then activate this user.

### Log in with local Windows users

To log in with your local Windows user instead of the Active Directory (domain) user, you must manually customize the configuration file `appsettings.json`. You can find the file by default under `C:/inetpub/PeakboardHub`

Open the file with an editor and set the value `SiteSettings.IsPrincipalContextTypeMachine` to `true` and save the file.

If the value does not exist, add the following area:

```json
"SiteSettings": {
    "IsPrincipalContextTypeMachine": "true"
  },
```

![Customize value](/assets/images/hub/hub_appsettings-json.png)

Now the Active Directory (domain) users are no longer accessed, but the local Windows users of the Peakboard Hub on premise server. After logging on to Peakboard Hub on premise with the local Windows user data, an administrator can activate the new user.
