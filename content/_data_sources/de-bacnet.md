---
layout: article
title: BACnet
menu_title: BACnet
description: Anbindung einer BACnet Datenquelle im Peakboard Designer
lang: de
weight: 250
ref: dat-250
redirect_from:
---

BACnet (Building Automation and Control Networks) ist ein offenes, herstellerunabhängiges Kommunikationsprotokoll für die Gebäudeautomation. Es wird vor allem für die Anbindung von HLK-Anlagen (Heizung, Lüftung, Klima), Beleuchtung, Zutrittskontrolle und weiteren Anlagen der technischen Gebäudeausrüstung verwendet. Peakboard agiert dabei als BACnet/IP-Client und kann Werte einzelner Objekte (z. B. Temperaturen, Sollwerte, Zustände) live abfragen und auf einem Dashboard darstellen. Weitere Informationen zu BACnet findest du unter [bacnet.org](https://bacnet.org).

## Datenquelle hinzufügen

Um die BACnet-Datenquelle anzubinden, wählst du unter [Datenquelle hinzufügen] die Datenquelle [BACnet] aus. (1)

![BACnet Datenquelle hinzufügen](/assets/images/data-sources/bacnet/bacnet-01-add.png)

## Verbindung konfigurieren

Im folgenden Dialog vergibst du im Bereich [General] zunächst einen Namen für die Datenquelle (1).

Im Bereich [Reload] (2) legst du fest, ob und in welchem Intervall (in Sekunden) die Datenquelle automatisch aktualisiert werden soll. Bei aktiviertem [Reload] zieht Peakboard die in den Subscriptions definierten Werte zyklisch nach.

Im Bereich [Subscriptions] (3) konfigurierst du die Verbindung zum BACnet-Netzwerk:

* **Callback Port**: Der lokale UDP-Port, auf dem Peakboard auf BACnet-Antworten lauscht (Standard: `47808`).
* **Subscription**: Die Betriebsart der Datenquelle:
  * **Multi Devices** – mehrere Geräte und Objekte können gleichzeitig abonniert werden.
  * **Single Device** – die Datenquelle ist genau einem Gerät zugeordnet (geeignet, wenn Geräte-IP und Device ID dynamisch z. B. per Script gesetzt werden sollen).

![BACnet Datenquelle konfigurieren](/assets/images/data-sources/bacnet/bacnet-02-config.png)

## Subscriptions verwalten

Über den Button [Manage subscriptions] öffnest du den Dialog [Select BACnet Type]. Hier scannt Peakboard automatisch das Netzwerk nach erreichbaren BACnet-Geräten und stellt sie als Baum dar. Pro Eintrag wird die IP-Adresse und der Callback-Port des Geräts angezeigt.

![BACnet Geräte erkennen](/assets/images/data-sources/bacnet/bacnet-03-subscriptions.png)

Über den Pfeil neben dem Gerät klappst du dieses auf und siehst die einzelnen Objekte, die das Gerät anbietet (z. B. `Temperature.Indoor`, `Temperature.Outdoor`, `SetPoint.Value`). Markiere die Objekte, deren Werte du in Peakboard nutzen möchtest, und bestätige die Auswahl mit [Select].

![BACnet Properties auswählen](/assets/images/data-sources/bacnet/bacnet-04-properties.png)

## Vorschaudaten laden

Zurück im BACnet-Dialog erzeugst du mit einem Klick auf [Load data] eine Vorschau der aktuell gelesenen Werte. Pro Subscription erhältst du eine Zeile mit dem Objektnamen, dem aktuellen Wert, der Einheit und einer Beschreibung. So kannst du direkt prüfen, ob die Verbindung funktioniert.

![BACnet Vorschau laden](/assets/images/data-sources/bacnet/bacnet-05-preview.png)

Mit einem Klick auf [OK] legst du die Datenquelle an. Sie erscheint anschließend im Explorer unter [Daten] und kann wie jede andere Datenquelle mit Controls (z. B. Linear Gauge, Chart, Tabelle) verknüpft werden.

![BACnet Datenquelle im Explorer](/assets/images/data-sources/bacnet/bacnet-06-explorer.png)
