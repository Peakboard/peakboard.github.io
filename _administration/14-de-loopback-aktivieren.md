---
layout: article
title: Loopback für UWP App aktivieren
menu_title: Loopback aktivieren
description: Loopback aktivieren für UWP App
lang: de
ref: admin-14
---

Standardmäßig erlaubt ist es einer UWP-App nicht erlaubt auf lokale Netzwerkressourcen zuzugreifen.

Dies macht beispielsweise Probleme, wenn sich die Peakboard Bridge auf dem selben Rechner ausgeführt wird, wie der Peakboard Designer. Da die Preview des Designers selbst eine UWP-App ist, kann hier nicht auf die lokale Bridge zugegriffen werden.

Dieses sogenannte "Loopback" kann man für einzelne App wie die Peakboard Runtime erlauben.

Hierzu öffnet man zuerst eine PowerShell, um den __Fullpackagename__ der Peakboard Runtime zu erhalten.

`(Get-AppxPackage -Name peakboardruntimeapp).packagefullname`

![01-get-packagefullname](/assets/images/admin/loopback/01-get-packagefullname.png)

Den Namen kopieren und im nächsten Befehl mit anfügen.

`checknetisolation loopbackexempt -a -n="PeakboardRuntimeApp_1.0.31.1_x86__dr3692g8wct58"`

Der Name muss zwingend in Anführungsstrichen stehen.

![02-add-loopback-exception](/assets/images/admin
/loopback/02-add-loopback-exception.png)

Die Aktion wird mit einem OK quittiert.

Eine Liste mit allen Ausnahmen auf dem System, kann man mit dem folgenden Befehl ausgeben:

`checknetisolation loopbackexempt -s`

Um einen Eintrag zu entfernen kann man folgendes verwenden:

`checknetisolation loopbackexempt -d -n=<name>`

