---
layout: article
title: Loopback für UWP App aktivieren
menu_title: Loopback aktivieren
description: Loopback aktivieren für UWP App
lang: de
weight: 1400
ref: pb1-admin-1400
redirect_from:
  - /administration/14-de-loopback-aktivieren.html
---

Standardmäßig erlaubt ist es einer UWP-App nicht erlaubt auf lokale Netzwerkressourcen zuzugreifen.

Dies macht beispielsweise Probleme, wenn sich die Peakboard Bridge auf dem selben Rechner ausgeführt wird, wie der Peakboard Designer. Da die Preview des Designers selbst eine UWP-App ist, kann hier nicht auf die lokale Bridge zugegriffen werden.

Dieses sogenannte "Loopback" kann man für einzelne App wie die Peakboard Runtime erlauben.

Hierzu öffnet man zuerst eine PowerShell (als Admin), um den __Packagefamilyname__ der Peakboard Runtime zu erhalten.

`(Get-AppxPackage -Name peakboardruntimeapp).packagefamilyname`
![01-get-packagefamilyname](/assets/images/admin/loopback/01-get-packagefamilyname.png)
Den Namen kopieren und im nächsten Befehl mit anfügen.

`checknetisolation loopbackexempt -a -n="PeakboardRuntimeApp_dr3692g8wct58"`

Der Name muss zwingend in Anführungsstrichen stehen.
![02-add-loopback-exception](/assets/images/admin/loopback/02-add-loopback-exception.png)
Die Aktion wird mit einem OK quittiert.

Eine Liste mit allen Ausnahmen auf dem System, kann man mit dem folgenden Befehl ausgeben:

`checknetisolation loopbackexempt -s`

Hier kann man prüfen, ob der Befehlt erfolgreich war und der neue Eintrag mit der Peakboard Runtime auftaucht:
![03-loopback-success.png](/assets/images/admin/loopback/03-loopback-success.png)

Um einen Eintrag zu entfernen kann man folgendes verwenden:

`checknetisolation loopbackexempt -d -n=<name>`

