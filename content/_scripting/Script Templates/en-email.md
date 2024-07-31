---
layout: article
title: Sending Emails
menu_title: Sending Emails
description: Sending Emails via Peakboard
lang: en
weight: 151
ref: scr-151
redirect_from:
---

To send emails with Peakboard, you have two options:
 1. Use your own SMTP server.
 2. Use a server provided by Peakboard.
 
Our template provides you with both functions.
For the data you send, we offer you two options:

 1. Use variables and data from your application and compile them into an email text via a script or building block.
 2. Take a screenshot and send it to yourself via email.

To use your own SMTP server, you need to create a mail data source.
When creating a mail data source, it is best to use a mailbox configured in Outlook, Thunderbird, or another email program as a reference. It is important that you use the correct ports and credentials. If you are unsure, simply ask your IT department for the necessary information.

Next, you can, for example, create a button in the application and assign it a Tapped Event. In this Tapped Event, you can then use the following script:

```lua
  connections.getfromid({Deine Verbindungs-ID}).send(data.EmailAddress, data.Subject, data.Content)
```

To use your own data, you need to replace `data.EmailAddress`, `data.Subject`, and `data.Content` with your own content.

If you want to use our mail server, you can use this script:

```lua
  mail.send(data.EmailAddress, data.Subject, data.Content)
```

Creating an email with a screenshot is also very quick, as you only need to change `send` to `sendwithscreenshot`.

![E-Mail Versand](/assets/images/scripting/Scripting_Beispiele/email/en_send_email.gif)