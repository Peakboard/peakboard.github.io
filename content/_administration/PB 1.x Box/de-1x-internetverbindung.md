---
layout: article
title: Internetverbindung mit Proxy-Server einrichten
menu_title: Internetverbindung mit Proxy-Server einrichten
description: Internetverbindung mit Proxy-Server einrichten
lang: de
weight: 400
ref: pb1-admin-400
redirect_from:
  - /administration/04-de-internetverbindung.html
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

Falls darüber hinaus der Proxy für bestimmte Adressen **nicht** genutzt werden soll, kann wie folgt eine Liste von Ausnahmen definiert werden.

```
reg add "HKCU\Software\Microsoft\Windows\CurrentVersion\Internet Settings" /v ProxyOverride /t REG_SZ /d "<local>;<weitere-ip-adressen>" /f
```

Der Wert "\<local\>" entspricht hierbei der bekannten Option "Bypass proxy server for local addresses" aus den Einstellungen des Internet Explorers, die dafür sorgt, dass für alle lokalen Adressen immer der Proxy-Server umgangen wird.

Es können noch weitere IP-Adressen hinzugefügt werden; wichtig ist, dass diese in der Auflistung jeweils mit Semikolon getrennt sind.

Danach die Peakboard-Box einmal neustarten, damit die Änderungen übernommen werden.
