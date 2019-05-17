---
layout: article
title: Tableau
menu_title: Tableau
description: Information über Peakboard Designer Tableau Control.
lang: de
weight: 700
ref: con-700
---

Mit dem Tableau View Steuerelement können Sie Tableau Views auf dem PeakBoard anzeigen lassen. Die Tabelau View befindet sich auf einem Tableau Server und wird auch dort gerendert. Peakboard dient als Anzeige.

![image_1](/assets/images/Controls/Tableau/ControlsTableau01.png)

Damit Peakboard den Zugriff auf den Tableau Server erhält, müssen Sie die IP-Adresse von PeakBoard auf dem Server als „Trusted“ einstellen:

1. Auf dem Tableau Server starten Sie das Tableau Konsolenfenster als Administrator. Das Konsolenfenster finden Sie in **C:\Program Files\Tableau\Tableau Server\9.2\bin**

2. Führen Sie folgende Kommandos aus:

```
tab admin stop
tabadmin set wgserver. trusted_hosts “<IP address of Peakboard >”
tabadmin config
tab admin start
```

Mehr Infos finden Sie unter: [http://onlinehelp.tableau.com/current/server/en-us/trusted_auth.htm](http://onlinehelp.tableau.com/current/server/en-us/trusted_auth.htm)

Im Tableau View Control sind im Eigenschaftsfenster folgende Optionen auszufüllen:

**Server:** IP-Adresse des Tableau Servers

**Username:**  Name des Benutzers auf dem Tableau Server

**Workbook:** Name des Tableau-Workbooks, der die View enthält

**View:** Der Name der View, die man auf dem PeakBoard anzeigen will


Die beiden folgenden Bilder zeigen ein Tableau-Dashboard im Original auf dem Tableau-Server und die Darstellung auf einem Peakboard-Panel.

![image_1](/assets/images/Controls/Tableau/ControlsTableau02.png)

![image_1](/assets/images/Controls/Tableau/ControlsTableau03.png)
