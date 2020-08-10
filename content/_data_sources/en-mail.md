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
This page explains the individual features when accessing the mail data source. 
Under the following link you will find a tutorial on how to configure external data sources in general and how to connect them to peakboard elements:

[First steps with external data sources using the example of an XML data source](/tutorials/en-xml-data.html)

The mail data source allows access to an e-mail mailbox via Imap. 
It is usually used to send messages to a peakboard box via a very simple way. 
In general, there are two patterns of using the data source:

- The content of the mailbox is simply displayed as a tabular data source. Each line corresponds to an e-mail.
- Each incoming e-mail triggers an event into which LUA script code can be integrated.

Which strategy is the better one depends on the individual case and also depends on programming skills.

* **IMAP** and **Port** is the network address and port of the mail server
* With the **...** button you reach a separate window for entering username and password
* **Folder** is the subfolder of the mailbox to be read, normally INBOX
* **Entire Message** defines whether the complete message should be downloaded or only the subject
* **Content Type** defines whether the mail content is to be delivered in unformatted text or HTML format

In case you want to react to incoming mails via scripting, please use the **Message Handle Script** routine.

![mail.png](/assets/images/data-sources/mail/mail.png)

