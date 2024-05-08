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
 - /administration/de-zertifikats.html
---

Die Zertifikatsverwaltung enthält alle Zertifikate einer Anwendung und ermöglicht dir deren Verwaltung. Dazu gehören auch die Zertifikate für [OPC UA](/data_sources/OPCUA/de-opc-ua.html) oder [MQTT](/data_sources/de-mqtt-broker.html).

## Zertifikate verwalten

Öffne den Dialog im Peakboard Designer durch einen Klick auf die Projekteinstellungen (1) in der Menüleiste und auf den Menüpunkt [Zertifikate] (2).

![Zertifikate verwalten](/assets/images/admin/certificates/de_certificates-01.png)

Im Dialog [Zertifikate verwalten] kannst du die vorhandenen Zertifikate filtern. Im linken Bereich (1) wählst du aus für welchen Nutzungsbereich Zertifikate angezeigt werden sollen. Im oberen Bereich (2) kannst du an- und abwählen welche Zertifikatskategorien angezeigt werden sollen. Über die Spalte Aktion kannst du per Drop-down-Menü Zertifikate in eine andere Zertifikatsspeicher-Kategorie verschieben oder sie vollständig löschen (3).

![Zertifikate verwalten Dialog](/assets/images/admin/certificates/de_certificates-02.png)

## Zertifikate importieren

Um ein Zertifikat zu importieren klickst du auf den [Importieren]-Button (1) links unten. Es öffnet sich ein weiterer Dialog in dem du den Pfad eines Zertifikats (2) auswählen kannst, dessen Verwendeungszweck (3) angibst und den passenden Zertifikatsspeicher (4) wählst. Die wählbaren Kategorieren entsprechen dabei Unterordnern aus dem Windows local machine Zertifikatspeicher. Du kannst Zertifikate in den gängigen Zertifikat- und Zertifikatarchiv-Formaten importieren.

![Zertifikate importieren](/assets/images/admin/certificates/de_certificates-03.png)

Für die Kategorien des Zertifikatspeichers gilt:

* TrustedPeople - Zertifikate denen vertraut werden soll (meist .cer, .crt, .der,.. Dateien, können aber auch .pfx und .p12 sein)
* Disallowed - Zertifikate die abgelehnt werden sollen

<div class="box-tip" markdown="1"> **Tipp:**
Alle Zertifikate des Typs Peakboard Box werden beim Start einer Anwendung in den jeweiligen Ordner im Windows Zertifikatspeicher der Peakboard Box geladen und beim Stoppen der Anwendung wieder entfernt.
</div>

<div class="box-warning" markdown="1"> **Achtung!**
Die MQTT und OPC UA Zertifikate liegen der Anwendung als Datei bei und werden von der jeweiligen Datenquelle direkt genutzt.
</div>
