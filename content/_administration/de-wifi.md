---
layout: article
title: WLAN auf der Peakboard Box einrichten
menu_title: WLAN einrichten
description: WLAN auf der Peakboard Box einrichten
lang: de
weight: 200
ref: admin-200
redirect_from:
  - /administration/02-de-geraeteadministration.html
  - /administration/de-geraeteadministration.html
---

Die Peakboard Box bietet dir zwei verschiedene Wege, um sie mit dem WLAN zu verbinden.

## WLAN per Eingabegerät einrichten

Um deine WLAN-Verbindung direkt herzustellen, benötigst du entweder eine an der Peakboard Box angeschlossene Tastatur und Maus oder ein Touchscreen-Display.
Damit kannst du in der Anwendung den Punkt [WLAN einrichten] (1) auswählen.

![Einrichtungsdialog öffnen](/assets/images/admin/wifi/de_wifi-01.png)

Wähle aus den verfügbaren WLAN-Verbindungen (1) das gewünschte Netzwerk aus und gib die zugehörigen Zugangsdaten (2) ein. Klicke [Verbinden] (3), um die Verbindung herzustellen.

![Netzwerk auswählen](/assets/images/admin/wifi/de_wifi-02.png)

## WLAN per LAN-Verbindung im Peakboard Designer einrichten

Alternativ kannst du die Verbindung auch ohne angeschlossenes Eingabegerät einrichten.

Verbinde dazu zunächst deine Peakboard Box mit einem Netzwerkkabel. Sobald die Verbindung zum Netzwerk initial hergestellt ist, wird auf dem angeschlossenen Bildschirm eine IP-Adresse angezeigt.

Starte nun den Peakboard Designer und [füge die Peakboard Box hinzu](https://help.peakboard.com/administration/de-hinzufuegen.html).
Öffne die Peakboard Box Einstellungen (1).

![Peakboard Box Einstellungen](/assets/images/admin/wifi/de_wifi-03.png)

Um die WLAN-Verbindung zu aktivieren, wählst du die entsprechende Peakboard Box in den Peakboard Box Einstellungen aus (1).
Im Tab [Verbindungen] (2) kannst du dann im oberen Bereich [WLAN-Verbindung] aus den verfügbaren Netzwerken das gewünschte Netzwerk auswählen (3) und das zugehörige Passwort (4) eingeben. Klicke dann auf [Verbinden] (5), um die Verbindung herzustellen.

![Netzwerk auswählen](/assets/images/admin/wifi/de_wifi-04.png)

Wenn die Verbindung hergestellt ist, kannst du das Netzwerkkabel trennen.
Lösche dann die Peakboard Box in den Peakboard Box Einstellungen und füge sie erneut hinzu, damit die WLAN-Verbindung fehlerfrei funktioniert.

<div class="box-warning" markdown="1">
**Achtung!**

Die LAN-Verbindung muss getrennt werden damit eine fehlerfreie Funktion gewährleistet ist.
Generell sollte die Peakboard Box nur in einem LAN-Netzwerk **oder** einem WLAN-Netzwerk betrieben werden.
</div>

Einen [Artikel zur Einrichtung eines Proxy-Servers findest du hier](/administration/de-proxy.html).
