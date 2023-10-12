---
layout: article
product: hub
title: MQTT Server
menu_title: MQTT Server
description: MQTT Server 
lang: de
weight: 120
ref: hub-120
redirect_from:
 - /hub/de-hub_mqtt.html
---

In Peakboard Hub on premise ist ein MQTT Server integriert, den du zur Kommunikation zwischen deinen Peakboard Boxen nutzen kannst.
Aktiviere ihn dazu unter [Settings] (1).

![MQTT aktivieren](/assets/images/hub/de_hub_mqtt-01.png)

<div class="box-warning" markdown="1"> **Beachte:**
Achte darauf, dass der Port auf dem Peakboard Hub Server freigegeben ist. Dieser ist standardmäßig 1883.
</div>

Ist der MQTT Server einmal aktiviert und der Peakboard Designer mit Peakboard Hub on premise verbunden, so kannst du eine Variable ganz einfach mit anderen Peakboard Boxen teilen, die dann für diese Variable den selben Wert haben.

<div class="box-warning" markdown="1"> **Beachte:**
Variablen können nur in Projekten mit dem selben Group Key geteilt werden.
</div>

Ändert eine Peakboard Box den Wert einer geteilten Variablen, so ändert sich dieser bei allen Peakboard Boxen.

![MQTT Server](/assets/images/hub/de_hub_mqtt-02.png)

<div class="box-warning" markdown="1"> **Beachte:**
Der MQTT Server des Peakboard Hub on premise kann aus Sicherheitsgründen nur für die beschriebene Anwendung genutzt werden.
</div>
