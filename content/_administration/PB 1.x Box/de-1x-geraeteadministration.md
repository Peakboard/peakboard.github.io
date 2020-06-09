---
layout: article
title: WLAN einrichten
menu_title: WLAN einrichten
description: WLAN einrichten
lang: de
weight: 200
ref: pb1-admin-200
redirect_from:
  - /administration/02-de-geraeteadministration.html
---

Um das WLAN der Peakboard-Box einzurichten, muss diese zuerst mit einem Netzwerkkabel verbunden werden und der mitgelieferte WLAN USB-Adapter angeschlossen sein.
Wenn sich die Peakboard-Box bis dahin noch im initialen Zustand befindet, sollte auf dem Bildschirm eine IP-Adresse angezeigt werden, sobald die Verbindung zum Netwerk hergestellt werden konnte.

Starten Sie nun den Peakboard Designer und fügen Sie die neue Peakboard-Box wie [hier](/administration/07-de-hinzufuegen.html) beschrieben dem Designer hinzu. 
Um die WLAN Verbindung zu aktivieren, öffnen Sie zunächst den Manage/Deploy Dialog (1) und wählen die entsprechende Box beziehungsweise die entsprechenden Boxen aus (2).
Anschließend erreichen Sie über Settings (3) - WiFi Connection (4) den WiFi Dialog in welchem sie alle verfügbaren WLAN Verbindungen (5) finden. Selektieren Sie nun das gewünschte Netzwerk und geben das dazugehörige Passwort ein. 
Über Connect (6) aktivieren Sie die Verbindung.

![WiFi Connection](/assets/images/admin/device/WiFiConnection.png)

Abschließend erfolgt ein Neustart der Peakboard-Box bei dem die Netzwerkkabelverbindung getrennt werden kann. Die Peakboard-Box befindet sich nun über WiFi im Netzwerk.

Alternativ kann die WLAN Aktivierung auch über die Windows IoT Administrationsoberfläche der Peakboard-Box erfolgen. 

Schließen Sie dazu die Peakboard-Box wie eingangs erwähnt an.
Anstelle des Peakboard Designers öffnen Sie über folgende URL die Windows IoT Administrationsoberfläche der Peakboard-Box:
http://[BoxName]:8080
Der Boxname ist auf die Peakboard-Box aufgedruckt und könnte bspw. PB1234 sein.
In dem Fall wäre die korrekte URL http://PB1234:8080

Hier können Sie nun auf der linken Seite den Menüpunkt Connectivity ausklappen und anschließend Network wählen.
Sie sollten dort eine Auflistung aller verfügbaren WLAN-Netzwerke finden.

Wählen Sie das gewünschte aus und geben den WLAN-Schlüssel ein.

Wichtig ist, dass Sie die Box anschließend über den Power Button neu starten, damit die Änderungen beibehalten werden.

![Windows Device Portal](/assets/images/admin/device/windows-device-portal.png)
