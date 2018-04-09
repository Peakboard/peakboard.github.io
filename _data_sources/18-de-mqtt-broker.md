---
layout: article
title: MQTT-Broker
menu_title: MQTT-Broker
description: Information über MQTT-Broker Daten in Peakboard
lang: de
ref: dat-18
---
Die Datenquelle MQTT-Broker bietet den Zugang zum Subscription-Modell eines MQTT-Servers (siehe [https://de.wikipedia.org/wiki/MQTT](https://de.wikipedia.org/wiki/MQTT)). Wie das Protokoll selbst ist auch die Konfiguration recht einfach und wird im folgenden Screenshot dargestellt. Im Wesentlichen ist nur der Server anzugeben. Die Angabe des Ports ist optional genauso wie die Angabe von User-Name und Passwort (zu erreichen über den kleinen Button mit den drei Punkten). Falls Sie keinen MQTT-Server zur Verfügung haben, nehmen Sie einfach [test.mosquitto.org](test.mosquitto.org). Er ist öffentlich zugänglich.

![image_1](/assets/images/Data_Sources/MQTT-Broker/DatenquellenMQTT01.png)

Es gibt zwei Modelle, MQTT-Messages mit dieser Datenquelle zu verarbeiten. Die einfachste Option ist über die klassische Abwicklung einer Datenquelle, also über ein tabellenartiges Datenobjekt. Jede neue Nachricht wird als Eintrag dieser Tabelle hinzugefügt. Um eine Subscription auf ein MQTT-Topic zu setzen, muss sie entsprechend angelegt werden. Eine Subscription kann über mehrere Topics laufen. Der folgende Screenshot zeigt diesen Zusammenhang. Das tabellenartige Datenobjekt hat drei Spalten: Timestamp, Topic und Message. Message enthält in der Regel einfach einen JSON-String.

![image_1](/assets/images/Data_Sources/MQTT-Broker/DatenquellenMQTT02.png)

Die zweite Möglichkeit auf eingehende Nachrichten zu reagieren ist über ein Script. Dazu kann für jede Subscription jeweils ein Script hinterlegt werden. Die Nutzdaten der MQTT-Nachricht stehen innerhalb des Scripts mit message.timestamp, message.topic und message.text zur Verfügung (siehe auch Objekt-Baum auf der linken Seite). Falls Sie den reinen Nachrichtentext zunächst parsen müssen, nutzen Sie einfach json.parse(…).
![image_1](/assets/images/Data_Sources/MQTT-Broker/DatenquellenMQTT03.png)

## Sending Messages

Jede MQTT-Quelle kann auch dazu genutzt werden, um Nachrichten von Peakboard an den MQTT-Server zu senden. Der folgende Screenshot zeigt wie es geht. Die Funktion des Datenobjekts lautet einfach nur


```
Data.MeinMQTTObjekt.Publish(MeinTopic, MeineNachricht)
```

![image_1](/assets/images/Data_Sources/MQTT-Broker/DatenquellenMQTT04.png)
