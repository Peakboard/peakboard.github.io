---
layout: article
title: MQTT Server
menu_title: MQTT Server
description: MQTT Server 
lang: de
weight: 400
ref: hub-400
redirect_from:
---
In Peakboard Hub ist ein MQTT Server integriert, den du zur Kommunikation zwischen deinen Peakboard Boxen nutzen kannst.

Aktiviere ihn dazu einfach unter [Einstellungen]

<div class="box-warning" markdown="1"> **Beachte:**
Achte darauf, dass der Port auf dem Peakboard Hub Server freigegeben ist. Dieser ist standardmäßig 1883.
</div>

Ist der MQTT Server einmal aktiviert und der Peakboard Designer mit Peakboard Hub verbunden, so kannst du eine Variable ganz einfach mit anderen Peakboard Boxen teilen, die dann für diese Variable den selben Wert haben. 
Ändert eine Peakboard Box den Wert einer geteilten Variablen, so ändert sich dieser bei allen Peakboard Boxen.

![MQTT Server](/assets/images/hub/hub_mqtt1.png) 
