---
layout: article
title: Pfadlängenbegrenzung aufheben
menu_title: Pfadlängenbegrenzung aufheben
description: Pfadlängenbegrenzung aufheben
lang: de
weight: 1200
ref: pb1-admin-1200
redirect_from:
  - /administration/12-de-pfadlaenge.html
---

In manchen Fällen ist es notwendig, die Begrenzung der Pfadlänge von Windows IoT Code aufzuheben. Dies kann beispielsweise dann auftreten, wenn ein OPC UA Zertifikat mit einem zu langen Dateinamen verwendet werden soll. Um diese Begrenzung aufzuheben, führen Sie bitte die folgenden Schritte durch:

Klicken Sie zunächst im Peakboard-Designer auf Manage und wählen Sie für die entsprechende Peakboard-Box den Menüpunkt „Open Device Portal“.

![Manage Dialog Open Device Portal](/assets/images/admin/pathlength/manage-dialog-open-device-portal.png)

Es wird nun ein Browser-Fenster geöffnet, hier geben Sie als Benutzername „Administrator“ und das Passwort der Peakboard-Box ein. Wählen Sie nun auf der linken Seite Processes und anschließend Run Command; führen Sie in dem öffnenden Command-Fenster folgenden Befehl aus:

```
Reg add HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\FileSystem /v LongPathsEnabled /t REG_DWORD /d 1 /f
```

Starten Sie zuletzt die Box über Power – Restart neu.


![Run Command Windows Device Portal](/assets/images/admin/pathlength/run-command-windows-device-portal.png)
