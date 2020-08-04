---
layout: article
title: Geteilte Verbindungen
menu_title: Geteilte Verbindungen
description: Wie können geteilte Verbindungen eingerichtet werden.
lang: de
weight: 11000
ref: misc-11000
redirect_from:
  - /misc/11-de-web.html
---

Bei der täglichen Arbeit mit Peakboard kommt es in der Praxis immer wieder vor, dass mehrere Datenquellen auf daselbe Quellsystem verweisen. 
Ein einfaches Beispiel: In einer Visualisierung werden aus SAP Bestandsdaten (aus einer Tabelle) und offene Transportaufträge (aus einem Funktionsbaustein) angezeigt. 
Beide Daten kommen aber aus demselben SAP-System. 
Da liegt es nahe, die Zugangsdaten wie Username, Passwort, SAP-Server, usw. nur einmal und nicht bei jeder Datenquelle individuell zu hinterlegen. 
Das ist die Idee hinter den geteilten Verbindungen. 
Geteilte Verbindungen sind nicht für alle, aber für sehr viele Quellsysteme verfügbar, z.B. SAP, Excel und einige andere. 
Sie funktionieren alle nach demselben Prinzip.

### Verbindungen teilen

Starten Sie ihr Projekt mit der ersten reglären Verbindung, die Sie ganz normal anlegen. 
Bei der zweiten Verbindung mit denselben Verbindungsdetails klicken im unteren Bereich des Dialogs auf **Reuse existing Connection**. 
Es öffnet sich ein Dropdown, dass die potentiellen, bestehenden Verbidungen zeigt. 
Sie können die Verbindungsdetails direkt in den aktuellen Dialog übernehmen.

![shared-connection-01](/assets/images/misc/shared-connection/shared-connection-01.png)

### geteilte Verbindungen verwalten

Unter **Settings** -> **Connection Manager** gelangen Sie in einen Dialog, er eine Übersicht aller geteilten Verbindungen enthält. 
Beim ersten Start dieses Dialogs müssen sie ein Passwort zum Schutz ihrer privaten, geteilten Verbidungen vergeben. Mehr Details dazu unter **private, geteilte Vebindungen*.
Sie sehen im linken Bereich eine Liste aller geteilten Verbindungen. 
Wird eine Verbidung angeklickt, erscheinen im rechten Bereich alle Details der Verbindung und darunter eine Liste der Datenquellen, die im aktuellen Projekt mit deser geteilten Verbindung verknüpft sind. 
Idealerweise geben Sie jeder geteilten Verbidung einen angemessenen, sprechenden Namen.
  
![shared-connection-02](/assets/images/misc/shared-connection/shared-connection-02.png)

### private, geteilte Verbindungen

Das Konzept der privaten, geteilten Verbindungen sieht vor, Zugangsdaten über die aktuelle Visualisierung hinaus auf dem lokalen Rechner abzulegen, so dass man sie bei neuen Projekten nicht mehr eintippen muss. 
Um aus einer regulären, geteilten Verbindung eine private, geteilte Verbindung zu machen, klicken Sie in der Verbindung im Kontextmenü auf **Save to Personal Connections**. 

![shared-connection-03](/assets/images/misc/shared-connection/shared-connection-03.png)

Die Verbindung steht dann bei allen neuen Projekten zur Verfügung. 
Sie kann in den jeweiligen Datenquellendialogen einfach wie bereits beschrieben über den **Reuse**-Button abgerufen werden. 

> ## Achtung! 
>
>In dem Moment, in dem private Verbindungen auf dem lokalen Rechner abgelegt werden, müssen sie durch ein Passwort verschlüsselt werden. Um Missbrauch zu vermeiden, ist dieses Passwort bei jedem Designerstart einzugeben. 

### Geteilte Verbindungen exportieren und importieren

Geteilte Verbindungen (egal ob privat oder nicht) können in einer Datei exportiert werden, um sie in einer Zielumgebung (z.B. dem Rechner eines Kollegen) wieder zu importieren. 
Um Verbindungen zu exportieren klicken Sie auf den entsprechenden Menüpunkt unten links im Kontextmenü des Connection Managers. 
Es öffnet sich ein Dialog, in dem Sie die Zieldatei, die zu exportierenden Verbindungen und ein Passwort zur Verschlüsselung der Daten wählen können. 
Ein Klick of OK erzeugt die Datei.

![shared-connection-04](/assets/images/misc/shared-connection/shared-connection-04.png)

Für den Import im Zielsystem nutzen Sie den **Import**-button, den sie ebenfalls im Connection Manager unten links finden.
