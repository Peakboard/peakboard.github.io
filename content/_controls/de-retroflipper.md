---
layout: article
title: Retro Flipper
menu_title: Retro Flipper
description: Information about Peakboard Designer Retro Flipper Control.
lang: en
weight: 203
ref: con-203
redirect_from:
---

Das Retro Flipper Control soll eine alte Anzeigetafel nachstellen. 
Es erinnert dabei an die Anzeigetafelen an Flughäfen oder Bahnhöfen.
Das Control verhält sich dabei sehr analog zu einem Textfeld.
Der Inhalt des Retro Fliper Controls können Zahlen wie auch Buchstaben sein.
Die Anzahl der verfügbaren Zeichen wird im vorraus unter den Properties des jeweiligen Retro Fliper Controls bestimmt. 
Dort kann außerdem die Geschwindigkeit bestimmt werden mit welcher die Zeichen bei Ändern des Texts umklappen.

Die Schreibweise erfolgt dabei von links nach rechts.
Bei Elementen mit variabler Zeichenlänge, beispielsweise einem Zähler oder Countdown, kann die Zeichenlänge mittels Skript künstlich auf den eingestellten Wert verlängert werden.
Hierzu wird einer Variablen, welche mit dem Control verknüpft ist führende Nullen angehängt.

```Lua
-- Zähler in String konvertieren und führende 0 hinzufügen bis länge von 3 Digets erreicht ist.
data.Ticker = string.addleadingcharacters(string.tostring(data.Count),'0',3)
```

![image_1](/assets/images/Controls/RetroFlipper/retro01.png)
