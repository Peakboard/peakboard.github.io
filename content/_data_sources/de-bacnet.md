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

BACnet (Building Automation and Control Networks) ist ein offenes, herstellerunabhängiges Kommunikationsprotokoll für die Gebäudeautomation. Es wird vor allem für die Anbindung von HLK-Anlagen (Heizung, Lüftung, Klima), Beleuchtung, Zutrittskontrolle und weiteren Anlagen der technischen Gebäudeausrüstung verwendet. Peakboard agiert dabei als BACnet/IP-Client und kann die Werte einzelner Objekte (z. B. Temperaturen, Sollwerte, Zustände) live abfragen und auf einem Dashboard darstellen. Weitere Informationen zu BACnet findest du unter [bacnet.org](https://bacnet.org).

Als durchgängiges Beispiel dient in diesem Artikel ein BACnet/IP-Raumcontroller (`RoomController`) – ein Gerät, wie es zum Test auch als BACnet-Simulator laufen kann. Es stellt unter anderem die Objekte `Temperature.Indoor`, `Temperature.Outdoor`, `Temperature.Water`, `SetPoint.Value`, `State` (Betriebsmodus) und `State.VentilationLevel` (Lüfterstufe) bereit.

## Datenquelle hinzufügen

Wähle im Explorer den Eintrag [Data] aus und klicke auf den Plus-Button, um eine neue Datenquelle anzulegen. Wähle im folgenden Dialog die Datenquelle [BACnet] (1) aus – über das Suchfeld oben rechts findest du sie am schnellsten.

![BACnet Datenquelle hinzufügen](/assets/images/data-sources/bacnet/bacnet-01-add.png)

## Verbindung konfigurieren

Im Dialog [Add BACnet data] vergibst du im Bereich [General] zunächst einen Namen für die Datenquelle (1).

Im Bereich [Reload] (2) legst du fest, ob und in welchem Intervall (in Sekunden) Peakboard die abonnierten Werte zyklisch nachliest. Über [Reload state] wählst du zwischen [Startup], [Periodic] und [Manual].

Im Bereich [Subscriptions] konfigurierst du die Verbindung zum BACnet-Netzwerk:

* [Callback Port] (3) – der lokale UDP-Port, auf dem Peakboard auf die BACnet-Antworten der Geräte lauscht. Standard ist `47808` (der BACnet/IP-Standardport).
* [Subscription] (4) – der **Subscription-Modus** der Datenquelle. Er legt fest, wie die Datenquelle an die Geräte gebunden ist:
  * **Multi Devices** – Es können Objekte von mehreren Geräten gleichzeitig abonniert werden. Jedes abonnierte Objekt merkt sich sein Gerät fest. Das ist der übliche Modus, wenn du Werte aus verschiedenen Controllern in einer Datenquelle zusammenführen möchtest.
  * **Single Device** – Die Datenquelle ist genau einem Gerät zugeordnet. In diesem Modus lassen sich Geräte-IP und Device ID auch dynamisch setzen (z. B. per Script über [Reload with parameters]), sodass dieselbe Datenquelle nacheinander unterschiedliche, baugleiche Geräte abfragen kann.

Über den Button [Manage subscriptions] (5) öffnest du anschließend die Geräteauswahl.

![BACnet Datenquelle konfigurieren](/assets/images/data-sources/bacnet/bacnet-02-config.png)

## Subscriptions verwalten

Im Dialog [Select BACnet Type] scannt Peakboard automatisch das Netzwerk nach erreichbaren BACnet-Geräten und stellt sie als Baum dar. Pro Eintrag werden die IP-Adresse und der Port des Geräts angezeigt (1).

![BACnet Geräte erkennen](/assets/images/data-sources/bacnet/bacnet-03-subscriptions.png)

Klappe das Gerät über den Pfeil auf, um die einzelnen Objekte zu sehen, die es anbietet. Markiere die Objekte, deren Werte du in Peakboard nutzen möchtest (1) – im Beispiel `Temperature.Indoor`, `Temperature.Outdoor`, `Temperature.Water`, `SetPoint.Value`, `State` und `State.VentilationLevel` – und bestätige die Auswahl mit [Select] (2).

![BACnet Objekte auswählen](/assets/images/data-sources/bacnet/bacnet-04-properties.png)

## Vorschaudaten laden

Zurück im BACnet-Dialog erzeugst du mit einem Klick auf [Load data] (1) eine Vorschau der aktuell gelesenen Werte. Jede Subscription ergibt eine Zeile mit dem Objektnamen ([ObjectName]), dem aktuellen Wert ([Value]), der Einheit ([Units]) und einer Beschreibung ([Description]) (2). So kannst du direkt prüfen, ob die Verbindung funktioniert und die richtigen Werte gelesen werden.

![BACnet Vorschau laden](/assets/images/data-sources/bacnet/bacnet-05-preview.png)

Mit einem Klick auf [OK] legst du die Datenquelle an. Sie erscheint anschließend im Explorer unter [Data] und kann wie jede andere Datenquelle mit Controls verknüpft werden.

## Daten auf einem Dashboard anzeigen

Verknüpfe die Datenquelle mit Controls, um die Werte anzuzeigen. Jedes Control bindest du dazu an die Datenquelle [RoomController] (1). Im Beispiel zeigen mehrere Kacheln oben die wichtigsten Werte an – Innen- und Außentemperatur, Sollwert, Betriebsmodus und Lüfterstufe (2) –, und eine [Table] listet darunter alle abonnierten Objekte mit Name, Wert, Einheit und Beschreibung auf (3). Alle Controls aktualisieren sich im eingestellten Reload-Intervall automatisch.

![BACnet-Room-Controller-Dashboard im Peakboard Designer](/assets/images/data-sources/bacnet/bacnet-06-dashboard-designer.png)

Klicke auf [Preview], um das Projekt in der Peakboard Runtime abzuspielen. Die Werte werden nun im eingestellten Intervall aktualisiert und genau so dargestellt, wie sie später auf einer Peakboard Box oder einem BYOD Gerät erscheinen.

![Das Beispiel-Dashboard in der Peakboard Runtime](/assets/images/data-sources/bacnet/bacnet-07-runtime.png)

## BACnet mit Building Blocks erweitern

Eine BACnet-Datenquelle ist nicht auf reines Lesen beschränkt. Mit den [Building Blocks], dem visuellen Skripteditor von Peakboard, kannst du auf die Daten reagieren und sogar Werte an das BACnet-Gerät zurückschreiben. Mache dazu einen Rechtsklick auf die Datenquelle und wähle [Edit reloaded script] – das Script läuft nach jedem Nachladen der Daten.

Im Block-Katalog stehen dir dabei zwei Dinge zur Verfügung:

* Unter [DATA] findest du die Datenquelle [RoomController] mit ihren Feldern [ObjectName], [Value], [Units], [Description] und weiteren (1). So kannst du gelesene Werte in deiner Logik weiterverwenden – etwa um bei einer zu hohen Temperatur eine Warnung auszulösen.
* Unter [Functions] → [Publish to external systems] → [BACnet] liegt der Block [Write data] (2). Damit schreibst du einen Wert zurück auf ein BACnet-Objekt, zum Beispiel um einen neuen Sollwert zu setzen oder den Betriebsmodus umzuschalten. BACnet wird dadurch bidirektional nutzbar: Lesen über die Subscriptions, Schreiben über die Building Blocks.

![BACnet in den Building Blocks](/assets/images/data-sources/bacnet/bacnet-08-buildingblocks.png)

Du kannst das fertige Beispielprojekt herunterladen und im Peakboard Designer öffnen, um die BACnet-Datenquelle, die Subscriptions und die Table-Bindung zu erkunden. Da BACnet Live-Daten liefert, benötigst du zum Anzeigen von Werten ein erreichbares BACnet-Gerät (oder einen Simulator) in deinem Netzwerk: [Room-Controller-Dashboard (.pbmx)](/assets/files/examples/bacnet-room-controller.pbmx).
