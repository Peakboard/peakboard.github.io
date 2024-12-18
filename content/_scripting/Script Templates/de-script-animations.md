---
layout: article
title: Animationen in Skripten
menu_title: Animationen in Skripten
description: Information über geskriptete Animierung von Controls
lang: de
weight: 159
ref: scr-159
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

```Lua
screen['<screen-name>'].<control-name>.animate('<animation-name>', <anzahl>)
```

 wird das richtige Control ausgewählt und animiert. Dabei gilt:

- `<screen-name>` - der Name des Screens auf welchem das Control zu finden ist
- `<control-name>` - der Name des gewählten Controls
- `<animation-name>` - der Name der Animation in Großbuchstaben: `ROTATE`, `BLINK`, `ZOOM`, `FADEOUT`, `VERTICALSHAKE`, `HORIZONTALSHAKE`, `ZIGZAGBOUNCE`
- `<anzahl>` - die ganzzahlige Anzahl der Wiederholungen. In diesem Kontext steht `-1` für unendlich.
