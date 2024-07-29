---
layout: article
title: E-Mail Versand
menu_title: E-Mail Versand
description: E-Mail Versand über Peakboard
lang: de
weight: 151
ref: scr-151
redirect_from:
---

Um mit Peakboard E-Mails zu  versenden, hast du zwei  Möglichkeiten:

 1. Nutze  deinen  eigenen SMTP-Server.
 2. Nutze einen von Peakboard gestellten Server.
 
Unser Template stellt  dir  beide  Funktionen  bereit.
Auch für die Daten, die du versendest, bieten wir dir zwei Möglichkeiten:
 1. Nutze  Variablen und Daten aus  deiner Anwendung und setze  diese  über  ein  Skript  oder Building Block zu  einem E-Mail-Text zusammen.
 2. Mache einen Screenshot und sende dir diesen per Mail.

Um deinen  eigenen SMTP-Server zu  verwenden, musst du eine Mail-Datenquelle  anlegen.
Wenn du eine Mail-Datenquelle  anlegst, kannst du dich am besten an einem  Postfach  orientieren, welches du in Outlook, Thunderbird oder einem anderen E-Mail-Programm hinterlegt hast. Wichtig  ist, dass du die richtigen Ports und Zugangsdaten hinterlegst. Falls du dir unsicher bist, frage einfach deine IT, ob sie dir die Daten geben  kann.

Anschließend  kannst du dir  zum  Beispiel  einen Button in der Anwendung erstellen und diesem  ein  Tapped-Event zuweisen. In diesem  Tapped-Event kannst du dann  folgendes  Skript  hinterlegen:

```lua
    connections.getfromid({Deine Verbindungs-ID}).send(data.EmailAddress, data.Subject, data.Content)
```

Um eigene Daten zu verwenden, musst du `data.EmailAddress`, `data.Subject` und `data.Content` mit deinen Inhalten ersetzen.

Falls du unseren Mail-Server nutzen  möchtest, kannst du dieses Skript  hier  verwenden:

```lua
    mail.send(data.EmailAddress, data.Subject, data.Content)
```

Die Erstellung einer Mail mit Screenshot ist ebenfalls sehr schnell realisiert, da du nur `send` durch `sendwithscreenshot` ersetzen musst.

![E-Mail Versand](/assets/images/scripting/Scripting_Beispiele/email/en_send_email.gif)