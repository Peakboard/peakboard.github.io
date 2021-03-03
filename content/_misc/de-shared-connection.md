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

Wenn mehrere Datenquellen einer Visualisierung auf dasselbe Quellsystem verweisen, kann es sinnvoll sein die Zugangsdaten dazu nur einmal einzugeben. 
Peakboard bietet diese Möglichkeit für eine Vielzahl an Quellsystemen, u. a. SAP oder Excel. 

Ein Beispiel: In einer Visualisierung werden SAP-Bestandsdaten aus einer Tabelle und offene Transportaufträge aus einem Funktionsbaustein angezeigt. 
Beide Daten stammen aus demselben SAP-System. Mit den geteilten Verbindungen werden Zugangsdaten wie Username, Passwort oder SAP-Server nur einmal und nicht bei jeder Datenquelle individuell hinterlegt. 

### VERBINDUNGEN TEILEN 
Lege die erste Verbindung deines Visualisierungsprojekt wie gewohnt an. Bei der zweiten Verbindung mit denselben Verbindungsdetails klickst du im unteren Bereich des Dialogs auf [Reuse existing connection /Vorhandene Verbindung nutzen]. 
Es öffnet sich ein Dropdown, das die potenziellen bestehenden Verbindungen zeigt. 
Du kannst nun die Verbindungsdetails direkt in den Dialog übernehmen.

![shared-connection-01](/assets/images/misc/shared-connection/shared-connection-01.png)

### GETEILTE VERBINDUNGEN VERWALTEN 

Über [Settings / Einstellungen] und [Connection Manager / Verbindungen verwalten] gelangst du in einen Dialog, der eine Übersicht aller geteilten Verbindungen enthält. 
Vergib beim ersten Start dieses Dialogs ein Passwort zum Schutz deiner privaten, geteilten Verbindungen. 
Links siehst du eine Liste aller geteilten Verbindungen. 
Mit einem Klick darauf, erscheinen im rechten Bereich alle Details der Verbindung sowie eine Liste der Datenquellen, die im aktuellen Projekt mit dieser geteilten Verbindung verknüpft sind. 
Wir empfehlen jeder Verbindung einen sprechenden Namen zu geben. 

![shared-connection-02](/assets/images/misc/shared-connection/shared-connection-02.png)

#### PRIVATE GETEILTE VERBINDUNGEN 
Mit den privaten geteilten Verbindungen legst du Zugangsdaten über die aktuelle Visualisierung hinaus auf dem lokalen Rechner ab, so dass du sie bei neuen Projekten nicht mehr eingeben musst. 
Um aus einer regulären, geteilten Verbindung eine private, geteilte Verbindung zu machen, klicke in der Verbindung auf [Save to personal connections / Als persönliche Verbindung speichern]. 

![shared-connection-03](/assets/images/misc/shared-connection/shared-connection-03.png)

Die Verbindung steht dann bei allen neuen Projekten zur Verfügung. 
Sie kann in den jeweiligen Datenquellendialogen über [Reuse existing connection / Vorhandene Verbindung nutzen] abgerufen werden. 

<div class="box-warning" markdown="1">
**Achtung!**
In dem Moment, in dem private Verbindungen auf dem lokalen Rechner abgelegt werden, müssen diese durch ein Passwort verschlüsselt werden. 
Um Missbrauch zu vermeiden, ist dieses Passwort bei jedem Designerstart einzugeben.
</div> 

###GETEILTE VERBINDUNGEN EXPORTIEREN UND IMPORTIEREN 

Beide Arten der geteilten Verbindungen können in einer Datei exportiert werden, um sie in einer Zielumgebung, wie dem Rechner eines Arbeitskollegen, wieder zu importieren. 
Um Verbindungen zu exportieren, klicke unter [Connection manager / Verbindungen verwalten] auf […] und dann auf [Export connections / Verbindungen exportieren]. 
Es öffnet sich ein Dialog, in dem du die Zieldatei, die zu exportierenden Verbindungen und ein Passwort zur Verschlüsselung der Daten wählen kannst. 
Ein Klick auf [Export] erzeugt die Datei. 
In der Zielumgebung angekommen, importierst du die geteilten Verbindungen mit einem Klick auf [Import / Importieren].

![shared-connection-04](/assets/images/misc/shared-connection/shared-connection-04.png)

