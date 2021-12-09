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

Du kannst mithilfe von Microsoft Teams ganz einfach Push-Nachrichten von deiner Peakboard Box auf dein Smartphone oder deine Smartwatch senden. 
Erstelle dazu zunächst ein neues Team, an das die Meldungen von der Peakboard Box gesendet werden sollen.
Anschließend installierst du dir die Microsoft Teams App auf deinem Handy und aktivierst die Benachrichtigungen über das Glockensymbol. 
Vergiss nicht, Push-Nachrichten für Microsoft Teams auf deinem Smartphone zu erlauben.
Neue Nachrichten in diesem Team werden nun automatisch auf deinem Handy bzw. deiner Smartwatch angezeigt.

Nachdem du dein Microsoft Teams Team und dein Smartphone entsprechend konfiguriert hast, benötigst du die E-Mail-Adresse des Teams. 
Du findest sie unter [Get email address].

![Get email address](/assets/images/misc/messagemsteams/img1.png)

Mithilfe dieses Lua Skripts kannst du eine E-Mail von der Peakboard Box an diese E-Mail-Adresse senden.

```lua
mail.sendviacustomsmtpasync('[SmtpServer]','[SmtpServerUser]','[SmtpServerPassword]','[mailTo]','[Subject]','[Body]')
```

<div class="box-warning" markdown="1"> **Achtung**

**Der Absender der Nachricht muss in dem Team sein, welches die Nachricht erhalten soll!**
</div>