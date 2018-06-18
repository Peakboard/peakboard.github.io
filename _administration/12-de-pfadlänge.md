---
layout: article
title: Pfadlängenbegrenzung aufheben
menu_title: Pfadlängenbegrenzung aufheben
description: Pfadlängenbegrenzung aufheben
lang: de
ref: admin-12
---

In manchen Fällen ist es notwendig die Begrenzung der Pfadlänge von Windows IoT aufzuheben.

Dies kann Beispielsweise, dann auftreten wenn ein OPC UA Zertifikat mit einem zu langen Dateinamen verwendet werden soll.

Um diese Begrenzung aufzuheben, führen Sie bitte die folgenden Schritte durch:

Klicken Sie zunächst im Peakboard-Designer auf Manage und wählen Sie für die entsprechende Peakboard-Box den Menüpunkt „Open Device Portal“.

![image_1](/assets/images/admin/pathlength/pathlength_01.png)

Es wird nun ein Browser-Fenster geöffnet hier geben Sie Als Benutzername „Administrator“ und das Passwort der Peakboard-Box ein.

Wählen Sie nun auf der Linken Seite Processes und anschließend Run command.

Führen Sie nun folgenden Befehl aus:

```
Reg add HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\FileSystem /v LongPathsEnabled /t REG_DWORD /d 1 /f
```

Starten Sie zuletzt die Box über Power – Restart neu.

![image_1](/assets/images/admin/pathlength/pathlength_02.png)