---
layout: article
title: Animationen in Skripten
menu_title: Animationen in Skripten
description: Information über geskriptete Animierung von Controls
lang: de
weight: 120
ref: scr-120
redirect_from:
---

Peakboard ermöglicht es dir, verschiedene Controls in einer Anwendung zu animieren.

### Controls animieren

Damit ein Control animiert werden kann, muss es entsprechend vorbereitet werden. Dies bedeutet, dass die Verwendung im Skript aktiviert und ein Name vergeben werden muss. Anschließend wird ein Skript im Skript-Editor geöffnet. Um ein Control zu animieren, können sowohl die Peakboard Building Blocks als auch das normale Lua-Scripting verwendet werden. Dazu im Skript-Editor auf der rechten Seite unter "Controls" den entsprechenden Screen und das gewünschte Control auswählen und den Punkt "Animieren" nutzen.

Folgende Animationen stehen zur Verfügung:
- Drehen
- Blinken
- Zoom
- Fade Out
- Vertikaler Schüttler
- Horizontaler Schüttler
- Zickzack-Sprung

Zusätzlich ist es möglich, zwischen 1 und 5 oder unendlich vielen Wiederholungen der Animation zu wählen.

![Building Block](/assets/images/scripting/Scripting_Beispiele/script-with-animations/de-script-editor-animation-block.png)

### Lua Skript

Der entsprechende Lua-Befehl kann im unteren Teil des vorherigen Screenshots gesehen werden. Über 

`screen['<screen-name>'].<control-name>`

 wird das richtige Control ausgewählt. Zum Animieren folgt anschließend 
 
 `.animate("<animation-name>", <anzahl>)`.

 Dabei gilt:

- `<animation-name>` - der Name der Animation in Großbuchstaben: `ROTATE`, `BLINK`, `ZOOM`, `FADEOUT`, `VERTICALSHAKE`, `HORIZONTALSHAKE`, `ZIGZAGBOUNCE`
- `<anzahl>` - die ganzzahlige Anzahl der Wiederholungen. In diesem Kontext steht `-1` für unendlich.
