---
layout: article
title: Über MQTT senden
menu_title: Über MQTT senden
description: Beschreibt, wie Nachrichten über MQTT gesendet werden können.
lang: de
weight: 172
ref: scr-172
redirect_from:
---

Über MQTT können Nachrichten mit einem definierten Topic an einen Broker gesendet werden. Dieser verteilt die Nachrichten dann an die Abonnenten des jeweiligen Topics.

## Senden von MQTT-Nachrichten
Es gibt zwei Möglichkeiten: Default Messages und Retained Messages. Der Unterschied besteht darin, dass bei Default Messages nur die aktuellen Abonnenten die Nachricht erhalten. Retained Messages werden auch dann versendet, wenn zum Sendezeitpunkt der Nachricht noch keine Subscription für das Topic bestand.

<div class="box-tip" markdown="1">
**Hinweis:**

Falls bereits eine geteilte MQTT Verbindung vorhanden ist, kann der nächste Schritt übersprungen und die vorhandene Verbindung verwendet werden.
</div>

Um MQTT-Nachrichten zu senden, muss eine MQTT-Datenquelle angelegt werden. Hierfür wird der Hostname des MQTT-Brokers und dessen Port (standardmäßig 1883) benötigt. Beachte, dass gegebenenfalls eine Authentifizierung per Zertifikat oder Benutzername und Passwort notwendig ist.

Anschließend kann zum Beispiel ein Button in der Anwendung erstellt und diesem ein Tapped-Event zugewiesen werden. In diesem Tapped-Event können dann die folgenden Blöcke oder folgendes Skript hinterlegt werden:

### Building Blocks
Im Blockmodus kann der `MQTT Veröffentlichen`-Block verwendet werden. Dieser befindet sich unter: `Funktionen` -> `In externen Systemen veröffentlichen` -> `MQTT`. In diesem Block muss eine MQTT-Datenquelle und der Nachrichtentyp (default oder retained) gewählt werden. Weiterhin ist es notwendig, Topic und Nachricht in Form von Text oder einer Stringvariablen an den Block anzufügen.

![Senden einer MQTT Nachricht](/assets/images/scripting/Scripting_Beispiele/mqtt/de-mqtt-example.png)

### Lua-Skript
Das Versenden von Default Messages ist im Skriptmodus wie folgt möglich:

```lua
connections.getfromid('{Deine Verbindungs-ID}').publish('{Topic}', '{Nachricht}')
```

Für das Versenden von Retained Messages kannst du dieses Skript verwenden:

```lua
connections.getfromid('{Deine Verbindungs-ID}').publishretain('{Topic}', '{Nachricht}')
```