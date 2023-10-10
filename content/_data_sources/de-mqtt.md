---
layout: article
title: MQTT
menu_title: MQTT
description: Information über MQTT Daten in Peakboard
lang: de
weight: 2300
ref: dat-2300
redirect_from:
 - /data_sources/18-de-mqtt-broker.html
 - /data_sources/de-mqtt-broker.html
---

Die Datenquelle MQTT bietet dir den Zugang zum Subscription-Modell eines MQTT-Servers (siehe [https://de.wikipedia.org/wiki/MQTT](https://de.wikipedia.org/wiki/MQTT)).
MQTT (Message Queue Telemetry Transport) ist ein leichtgewichtiges Messaging-Protokoll, das für Szenarien mit geringer Bandbreite und instabilen Netzwerken konzipiert ist. Es basiert auf einem Publish-Subscribe-Modell, wobei ein Broker als Mittler dient, der Nachrichten von Publishern empfängt und an Subscriber weiterleitet, die sich auf spezifische Topics abonniert haben.

Um die Datenquelle hinzuzufügen, mache einen Rechtsklick auf [Daten] oder klicke alternativ auf den [...]-Button und wähle dann [Datenquelle hinzufügen] und [MQTT] (1).

![MQTT hinzufügen](/assets/images/data-sources/mqtt-broker/de_mqtt-01.png)

Gib der Datenquelle einen Namen (1). Um die Datenquelle zu verbinden, musst du den Server unter [MQTT Broker] (2) angeben. Die Angabe des MQTT Brokerports (3) ist optional, genauso wie die Authentifizierung (4).

Falls du keinen MQTT-Server zur Verfügung hast, kannst du [test.mosquitto.org](http://test.mosquitto.org/) verwenden. Er ist öffentlich zugänglich. Alternativ kannst du auch unseren Test-Broker [templates.peakboard.rocks] nutzen.

Um Daten zu empfangen, musst du eine oder mehrere Subscriptions (5) hinzufügen. Durch einen Klick auf den entsprechenden Button fügst du eine neue Subscription hinzu. Wenn du den Peakboard Test-Broker benutzt, kannst du folgende Topic Filter hinzufügen:

* shopfloor/counter/
* shopfloor/station1/
* shopfloor/station2/
* shopfloor/station3/
* shopfloor/station4/
* shopfloor/station5/

Für jede der 5 verschiedenen Stationen wechselt die Datenquelle zwischen den Statuscodes 100, 200, 300. Der Produktionszähler zählt hoch und wird nach einer Weile zurückgesetzt.

Unter [Quality of Service] (6) kannst du einstellen, wie Nachrichten zwischen Publisher und Subscriber übertragen werden.
Es gibt drei Stufen:

* At most once: Die Nachricht wird einmal gesendet, und es gibt keine Bestätigung vom Empfänger.
* At least once: Die Nachricht wird mindestens einmal gesendet, und der Empfänger sendet eine Bestätigung zurück. Wenn die Bestätigung nicht empfangen wird, wird die Nachricht erneut gesendet.
* Exactly once: Dies ist die sicherste, aber auch die langsamste QoS-Stufe. Sie stellt sicher, dass die Nachricht genau einmal zugestellt wird, indem ein Vier-Wege-Handshake zwischen Sender und Empfänger verwendet wird.

Die Auswahl der richtigen QoS-Stufe hängt von den spezifischen Anforderungen deiner MQTT-Anwendung ab. Es ist ein Kompromiss zwischen Geschwindigkeit und Zuverlässigkeit der Nachrichtenübermittlung.

Um dir eine Vorschau der hinzugefügten Topic Filter anzeigen zu lassen, klicke auf [Empfänger starten] (7).

![MQTT konfigurieren](/assets/images/data-sources/mqtt-broker/de_mqtt-02.png)
