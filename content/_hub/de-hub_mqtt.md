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
Diesen kannst du ganz einfach unter den Settings im Peakboard Hub aktivieren. 
Dabei musst du darauf achten, dass auf dem Peakboard Hub Server der Port freigegeben ist. 
Dieser ist standardmäßig 1883. 

Ist der MQTT Server einmal aktiviert und der Peakboard Designer mit dem Peakboard Hub verbunden, so kannst du eine Variable in Peakboard ganz einfach mit anderen Boxen teilen. 
Alle Boxen haben dann für so eine Variable denselben Wert. 
Ändert eine Box einen Wert einer geteilten Variablen, so ändert sich dieser bei allen Boxen. 

![Tokens for Shared Connections](/assets/images/hub/hub_mqtt1.png) 
