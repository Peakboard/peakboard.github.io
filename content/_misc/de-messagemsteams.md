---
layout: article
title: Push-Nachrichten von einer Peakboard Box auf Smartphone und Smartwatch mit Hilfe von MS Teams senden
menu_title: Push-Nachrichten von einer Peakboard Box auf Smartphone und Smartwatch mit Hilfe von MS Teams senden
description: Push-Nachrichten von einer Peakboard Box auf Smartphone und Smartwatch mit Hilfe von MS Teams senden
lang: de
weight: 205
ref: misc-205
redirect_from:

---

Um Push-Nachrichten auf deinem Smartphone oder deiner Smartwatch anzuzeigen, benötigst du zunächst ein neues Team, an das die Meldungen von der Peakboard Box gesendet werden sollen.

Anschließend installierst du dir die MS Teams App auf deinem Handy.
Nun musst du noch in dem Team die Notifications über das Glocken-Symbol anschalten und Push-Nachrichten für MS Teams auf deinem Smartphone erlauben.
Neue Nachrichten in dieser Team Konversation werden automatisch auf deinem Handy bzw. deiner Smartwatch angezeigt. 

Nachdem du dein Team und Smartphone entsprechend konfiguriert hast, benötigst du nun die E-Mail Adresse des Channels.

![Get email address](/assets/images/misc/messagemsteams/img1.png)

Abschließend musst du nur noch eine E-Mail von der Peakboard Box aus, mit Hilfe eines Lua Skriptes, an diese Adresse verschicken.

```lua
mail.sendviacustomsmtpasync('[SmtpServer]','[SmtpServerUser]','[SmtpServerPassword]','[mailTo]','[Subject]','[Body]')
```

<div class="box-warning" markdown="1">
**Der Absender der Nachricht muss in dem Team sein, welches die Nachricht erhalten soll!**
</div>