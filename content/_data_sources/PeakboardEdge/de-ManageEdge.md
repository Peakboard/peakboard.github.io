---
layout: article
title: Peakboard Edge Verwalten
menu_title: Peakboard Edge Verwalten
description: Information über die Verwaltung eines Peakboard Edge
lang: de
weight: 2710
ref: dat-2710
redirect_from:
---

![img01](/assets/images/data-sources/peakboard-edge/manage01.png)

Designer starten und Hauptansicht öffnen

In der Menüleiste oben, “Startseite” (“Home”) auswählen 

Auf den Knopf “Verwalten / Testen” (“Manage / Test”) in dem Feld “PB Edge” klicken um die Verwaltungsoberfläche für Edge zu öffnen

 
![img02](/assets/images/data-sources/peakboard-edge/manage02.png)

Die Verwaltungsoberfläche ist analog zur Verwaltungsoberfläche von Peakboard Boxen aufgebaut. 

Oben: befinden sich verschiedene Knöpfe für Aktionen mit einer oder meheren ausgewählten Edge.

Mittig: befinden sich alle bereits zugefügten Peakboard Edge

Unten: Befinden sich zwei Knöpfe zum Zufügen eines neuen PB Edge, sowie zum schließen der Oberfläche


### Aktionen mit einem Edge:
In Verwaltungsoberfläche eines oder mehrere (STRG gedrückt halten) Edge auswählen. 

In der oberen Menüleiste mögliche Aktion auswählen. Hinweis: Multi-Edge Aktionen werden bei der Auswahl mehrerer Edges an allen ausgewählten durchgeführt. Single-Edge Aktionen können nur bei der Auswahl genau eines Edge durchgeführt werden.


### Zufügen eines neuen Edge:
Um ein Peakboard Edge verwalten und innerhalb einer Visualisierung einbinden zu können muss es zum Designer hinzugefügt werden.

![img03](/assets/images/data-sources/peakboard-edge/manage03.png)

“Edge auswählen” (“Select Edge”) Dialog über den “Hinzufügen” (“Add”) Knopf im Verwaltungsdialog öffnen

Eines der angezeigten Peakboard Edge auswählen ODER unter “Name oder IP-Adresse” (“Name of IP Address”) die gewünschten Daten eingeben

Das mitgelieferte Passwort des Peakboard Edge eingeben.

ALTERNATIV: Daten zur Autorisierung über ein Proxy eingeben.

Über den “OK” Knopf bestätigen und das Peakboard Edge zum Designer zufügen

 
### Verbindung zu Edge testen:
Der Verbinungstest dient zum überprüfen ob eine Verbindung zwischen Designer und Edge möglich sind, sowie zum Testen ob die am Edge angeschlossenen Geräte funktionieren und richtig angeschlossen wurden.

![img04](/assets/images/data-sources/peakboard-edge/manage04.png)

“Peakboard Edge Verbindung testen” (“Peakboard Edge connection test”) Dialog über den “Verbindungstest” (“Test connection”) Button der Verwaltungsoberfläche öffnen

Warten bis der “Verbindungsstatus” (“Connection status”) grün ist und somit eine Verbindung zum Edge hergestellt wurde. Hinweis: Falls das Herstellen der Verbindung länger als ein paar Sekunden dauert liegt wahrscheinlich ein Problem vor. Ein Blick in den Abschnitt Problembehandlung → Verbindungsprobleme kann hier helfen.

Wurden bereits Ein- oder Ausgabegeräte an das Edge angeschlossen können diese über folgende Schritte getestet werden:

Über die Soundauswahl kann ein Ton auf dem Edge abgespielt werden, insofern ein USB-Lautsprecher angeschlossen wurde.

“Gelesene Zeichenfolge” (“Received String value”) zeigt den letzten vom Edge gelesenen Textwert (Ein Barcodescanner, Tastatur, RFID-Reader,…) müssen über USB angeschlossen sein.

Über die “OUTPUT” Check-Boxen können die Relais auf dem Peakboard Edge geschaltet werden (kann durch ein akkustisches “klacken” auf dem Edge wahrgenommen werden. Simuliert das schalten einer angeschlossenen Ampel oder ähnlichem.

Die “INPUT” Check-Boxen stellen die Werte der Eingabe Pins der Klemmleiste dar. Ihr Status kann zum Beispiel durch einen angeschlossenen Schalter verändert werden.