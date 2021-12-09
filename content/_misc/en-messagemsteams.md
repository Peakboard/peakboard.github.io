---
layout: article
title: Send push messages from your Peakboard Box to your smartphone or smartwatch
menu_title: Send push messages from your Peakboard Box to your smartphone or smartwatch
description: Send push messages from your Peakboard Box to your smartphone or smartwatch
lang: en
weight: 205
ref: misc-205
redirect_from:

---

You can easily send push messages from your Peakboard Box to your smartphone or smartwatch using Microsoft Teams. 
To do this, first create a new team to which the messages should be sent from the Peakboard Box.

Then, install the Microsoft Teams app on your phone and enable notifications via the bell icon. 
Don't forget to allow push messages for Microsoft Teams on your smartphone.

New messages in that team will now automatically show up on your phone or smartwatch.

After you have configured your Microsoft Teams team and your smartphone accordingly, you will need the channel's email address. 
You can find it at [Get email address]. 


![Get email address](/assets/images/misc/messagemsteams/img1.png)

Using the Lua script below, you can send an email from the Peakboard Box to this email address.

```lua
mail.sendviacustomsmtpasync('[SmtpServer]','[SmtpServerUser]','[SmtpServerPassword]','[mailTo]','[Subject]','[Body]')
```

<div class="box-warning" markdown="1"> **Attention**

**The sender of the message must be in the Microsoft Teams team you want to send the push message to!**
</div>