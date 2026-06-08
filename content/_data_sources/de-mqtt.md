---
layout: article
title: MQTT
menu_title: MQTT
description: Information über MQTT Daten in Peakboard
lang: de
weight: 1600
ref: dat-1600
redirect_from:
 - /data_sources/18-de-mqtt-broker.html
 - /data_sources/de-mqtt-broker.html
---

Die Datenquelle MQTT bietet dir den Zugang zum Subscription-Modell eines MQTT-Servers (siehe [https://de.wikipedia.org/wiki/MQTT](https://de.wikipedia.org/wiki/MQTT)). MQTT (Message Queue Telemetry Transport) ist ein leichtgewichtiges Messaging-Protokoll, das für Szenarien mit geringer Bandbreite und instabilen Netzwerken konzipiert ist. Es basiert auf einem Publish-Subscribe-Modell, wobei ein Broker als Mittler dient, der Nachrichten von Publishern empfängt und an Subscriber weiterleitet, die sich auf spezifische Topics abonniert haben.

## Datenquelle hinzufügen

Mache einen Rechtsklick auf [Data] und wähle [Add data source]. Im folgenden Dialog wählst du die Datenquelle [MQTT] (1) aus.

![MQTT Datenquelle hinzufügen](/assets/images/data-sources/mqtt-broker/mqtt-01-add.png)

## Verbindung konfigurieren

Im folgenden Dialog vergibst du im Bereich [General] zunächst einen Namen für die Datenquelle (1). Im Bereich [Connection] gibst du den Server unter [MQTT broker] (2) ein. Die Angabe von [MQTT broker port] (3) ist optional – der Standardwert für unverschlüsselte Verbindungen ist `1883`. Falls dein Broker eine Authentifizierung verlangt, wählst du das passende Verfahren im Feld [Authentication] (4).

Im Beispiel dieses Artikels wird der öffentliche Broker [test.mosquitto.org](http://test.mosquitto.org/) verwendet. Mosquitto ist ein weit verbreiteter, quelloffener MQTT-Broker. Der Anbieter Eclipse betreibt unter diesem Hostnamen einen frei zugänglichen Test-Server, der sich dafür eignet, eine MQTT-Anbindung ohne eigene Infrastruktur auszuprobieren.

Über den Button [Add Subscription] (5) fügst du je eine Zeile pro Topic Filter hinzu, das die Datenquelle abonnieren soll. Mit einem Klick auf [Enable listener] (6) startet der MQTT Tester, in dem du die eingehenden Nachrichten direkt verfolgen kannst.

![MQTT Datenquelle konfigurieren](/assets/images/data-sources/mqtt-broker/mqtt-02-config.png)

Als Beispiel zeigt der Screenshot eine MQTT-Anbindung an einen Shelly Plug – eine smarte Steckdose, die ihren Zustand und ihren Energieverbrauch per MQTT veröffentlicht. Die beiden hinterlegten Topics sind:

* `shellies/TheosShellyPlug/relay/0` – aktueller Schaltzustand (`on` / `off`).
* `shellies/TheosShellyPlug/relay/0/energy` – aktuell verbrauchte Energie in Wattminuten.

## Quality of Service

Pro Subscription kannst du in der Spalte [Quality of service] festlegen, wie eine Nachricht zwischen Publisher und Subscriber übertragen wird. Es gibt drei Stufen:

* **AtMostOnce** – Die Nachricht wird einmal gesendet, und es gibt keine Bestätigung vom Empfänger.
* **AtLeastOnce** – Die Nachricht wird mindestens einmal gesendet, und der Empfänger sendet eine Bestätigung zurück. Wenn die Bestätigung nicht empfangen wird, wird die Nachricht erneut gesendet.
* **ExactlyOnce** – Die sicherste, aber auch die langsamste QoS-Stufe. Sie stellt sicher, dass die Nachricht genau einmal zugestellt wird, indem ein Vier-Wege-Handshake zwischen Sender und Empfänger verwendet wird.

Die Auswahl der richtigen QoS-Stufe hängt von den spezifischen Anforderungen deiner MQTT-Anwendung ab. Es ist ein Kompromiss zwischen Geschwindigkeit und Zuverlässigkeit der Nachrichtenübermittlung.

## Message Type

Über das Feld [Message type] (1) legst du fest, wie Peakboard die ankommenden Nachrichten in einer Tabelle darstellt:

![MQTT Message Type wählen](/assets/images/data-sources/mqtt-broker/mqtt-03-message-types.png)

* **Last message (simple)** – Pro abonniertem Topic wird ausschließlich die jeweils letzte empfangene Nachricht vorgehalten. Die Datenquelle besteht aus genau einer Zeile mit einer Spalte pro Subscription. Geeignet für klassische Live-Anzeigen wie Sensorwerte oder Schaltzustände.
* **Nodes per row (dynamic)** – Pro Knoten im Topic-Pfad wird eine Zeile angelegt. Sinnvoll, wenn Topics dynamisch wachsen, zum Beispiel `shellies/<Geräte-ID>/relay/0`, und du alle Geräte in einer Tabelle nebeneinander darstellen möchtest.
* **All messages (advanced)** – Jede einzelne empfangene Nachricht wird als eigene Zeile in die Datenquelle übernommen. Auf diese Weise erhältst du einen Verlauf der Nachrichten und kannst zum Beispiel über die Zeit auswerten.

## Use data paths

Häufig liefern MQTT-Topics keine einfachen Skalarwerte wie `on` oder `2778`, sondern einen JSON-String mit mehreren Eigenschaften. In dem Fall aktivierst du im Bereich [Specify details] die Checkbox [Use data paths] (1). In der Subscriptions-Tabelle erscheint anschließend eine zusätzliche Spalte [Data path] (2), in der du pro Subscription den Pfad zum gewünschten Wert innerhalb des JSON-Strings angibst.

![MQTT Use data paths](/assets/images/data-sources/mqtt-broker/mqtt-04-data-paths.png)

Erhältst du zum Beispiel die Nachricht `{ "power": 23.5, "voltage": 230 }`, trägst du als Data path `power` ein, um aus dem JSON-Inhalt nur den Wert `23.5` zu extrahieren. Ohne aktivierte Option würde Peakboard den vollständigen JSON-Text als einen einzelnen String in die Datenquelle übernehmen.
