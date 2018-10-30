---
layout: article
title: Internetverbindung mit Proxy-Server einrichten
menu_title: Internetverbindung mit Proxy-Server einrichten
description: Internetverbindung mit Proxy-Server einrichten
lang: de
ref: admin-04
---

Öffnen Sie das Windows Device Portal (http://<ip-adresse-peakboard>:8080) der Box.

Dort gibt es unter „Processes“ mit „Run command“ die Möglichkeit direkt Befehle abzusetzen.

Sie benötigen die folgenden beiden Befehle, wobei sie ihren eigenen Proxy-Server entsprechend anpassen müssen.

```
reg add "HKCU\Software\Microsoft\Windows\CurrentVersion\Internet Settings" /v ProxyEnable /t REG_DWORD /d 1 /f
```

```
reg add "HKCU\Software\Microsoft\Windows\CurrentVersion\Internet Settings" /v ProxyServer /t REG_SZ /d <proxy-server>:<port> /f
```

Die Befehle können Sie nacheinander über den „Run“-Knopf abschicken; wichtig ist, dass der Haken bei „Run as DefaultAccount“ gesetzt ist.

![Windows Device Portal Run Command](/assets/images/admin/internet-setup/proxy.png)

Danach die Peakboard-Box einmal neustarten, damit die Änderungen übernommen werden.
