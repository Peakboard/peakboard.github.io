---
layout: article
title: E-Mail 
menu_title: E-Mail
description: Information about E-Mail data sources in Peakboard
lang: en
weight: 850
ref: dat-850
redirect_from:
---

This page explains the individual features when accessing the email data source.
Under the following link you will find a tutorial on how to generally configure external data sources and link them to Peakboard elements:

[Getting started with external data sources using an XML data source as an example](/tutorials/03-en-xml-data.html).

The email data source allows you to access an email box via IMAP as well as send emails via SMTP.
Typically, you use it to send messages to or from a Peakboard box via a very simple way.
Generally, there are two ways you can use the data source:

- The content of the mailbox is simply represented as a tabular data source. Each row corresponds to an email.
- Each incoming email triggers an event, into which Lua script code can be integrated.

Which strategy is better depends on the individual case and also depends on your programming skills.

To add the data source right click on [Data] or alternatively click on the [...] button and then select [Add data source] and [Email] (1).

![Add email data source](/assets/images/data-sources/mail/en_email-01.png)

Give the data source a name (1) and fill it with the login information of the email account you want to use (2).

In the **Connection** section:

- **IMAP** and **Port** is the network address and the port of the mail server to receive e-mails
- **SMTP** and **Port** is the network address and the port of the mail server for sending e-mails
- In the text field **User name** you enter the e-mail address, in the text field **Password** the corresponding password

In the **Specify details** area: **Folder**:

- **Folder** is the subfolder of the mailbox to read, usually INBOX.
- **Total Message** defines if the complete message should be downloaded or only the subject
- **Content type** defines if the mail content should be delivered in unformatted text or formatted HTML

![configure email data source](/assets/images/data-sources/mail/de_email-02.png)

In case you want to respond to incoming mails via scripting, use the **Message Handle Script** routine.
