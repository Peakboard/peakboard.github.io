---
layout: article
title: WLAN einrichten
menu_title: WLAN einrichten
description: WLAN einrichten
lang: de
ref: admin-02
---

Um das WLAN der Peakboard-Box einzurichten, muss diese zuerst mit einem Netwerkkabel verbunden werden und der mitgelieferte WLAN USB-Adapter angeschlossen sein.
Wenn sich die Peakboard-Box bis dahin noch im initialen Zustand befindet, sollte auf dem Bildschirm eine IP-Adresse angezeigt werden, sobald die Verbindung zum Netwerk hergestellt werden konnte.

Sie sollten nun über folgende URL auf die Windows IoT Administrationsoberfläche der Peakboard-Box verbinden können:
http://[BoxName]:8080 
Der Boxname ist auf die Peakboard-Box aufgedruckt und könnte bspw. PB1234 sein.
In dem Fall wäre die korrekte URL http://PB1234:8080

Hier können Sie nun auf der linken Seite den Menüpunkt Connectivity ausklappen und anschließend Network wählen.
Sie sollten dort eine Auflistung aller verfügbaren WLAN-Netzwerke finden.

Wählen Sie das gewünschte aus und geben den WLAN-Schlüssel ein.

Wichtig ist, dass Sie die Box anschließend über den Power Button neustarten, damit die Änderungen beibehalten werden.

![image_1](/assets/images/admin/install/MiscAdministration01.png)
