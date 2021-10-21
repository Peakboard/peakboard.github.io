---
layout: article
title: Hinzufügen eines Zertifikats zur Zertifikatverwaltung
menu_title: Hinzufügen eines Zertifikats zur Zertifikatverwaltung
description: Hinzufügen eines Zertifikats
lang: de
weight: 900
ref: admin-900
redirect_from:
  - /administration/09-de-zertifikats.html
---


Die Zertifikatsverwaltung enthält alle Zertifikate einer Visualisierung und ermöglicht deren Verwaltung. Dazu gehören auch die Zertifikate für [OPC UA](/data_sources/OPCUA/de-opc-ua.html) oder [MQTT](/data_sources/de-mqtt-broker.html).

Geöffnet werden kann der Dialog wie im ersten Screenshot über das Hauptfenster [Zertifikate verwalten] unter den [Einstellungen] im Peakboard Designer.
![Zertifikate verwalten](/assets/images/admin/certificates/managecert1.png)

Neben der Verwaltung besteht auch die Möglichkeit Zertifikate in den Windows Zertifikatspeicher auf der Peakboard Box zu laden. 
Dazu muss in dem Dropdown die unterste Option [Peakboard Box] gewählt werden (4). 
Anschließend können Zertifikate (in den gängigen Zertifikat- und Zertifikatarchiv-Formaten) importiert werden. 
Der Import findet immer in der aktuell ausgewählten Kategorie statt. 
Die einzelnen Kategorieren (3) entsprechen dabei Unterordnern aus dem Windows "local machine" Zertifikatspeicher.

![Zertifikate verwalten Dialog](/assets/images/admin/certificates/managecert2.png)

Für die Kategorien (3) gilt:
* TrustedPeople - Zertifikate denen vertraut werden soll (meist .cer, .crt, .der,.. Dateien, können aber auch .pfx und .p12 sein)
* Rejected - Zertifikate die abgelehnt werden sollen

<div class="box-warning" markdown="1">
Alle Zertifikate des Typs Peakboard Box werden dann beim Start einer Visualisierung in den jeweiligen Ordner im Windows Zertifikatspeicher der Peakboard Box geladen und beim Stoppen der Visualisierung wieder entfernt.
</div>

<div class="box-tip" markdown="1">
Die MQTT und OPC UA Zertifikate liegen als Datei der Visualisierung bei und werden von der jeweiligen Datenquelle direkt genutzt ohne über den Windows Zertifikatspeicher zu gehen.
</div>