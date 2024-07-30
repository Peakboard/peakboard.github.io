---
layout: article
title: Numerische Werte verarbeiten
menu_title: Numerische Werte verarbeiten
description: Numerische Werte verarbeiten
lang: de
weight: 160
ref: scr-160
redirect_from:
---

Mit Peakboard kannst du verschiedene Arten der Manipulation von Zahlen nutzen. In diesem Template sind folgende Operationen und Funktionen verfügbar:

1. Gleitkomma-Zufallszahl
2. Ganzzahl-Zufallszahl
3. Addition
4. Runden

### Gleitkomma-Zufallszahl

Um eine zufällige Gleitkommazahl zu generieren, kann folgender Code verwendet werden:

![Random](/assets/images/scripting/Scripting_Beispiele/working-with-numbers/en-script-random.png)

```lua
data.Number = math.random(0, 99) + math.random()
```

### Ganzzahl-Zufallszahl

Eine zufällige Ganzzahl lässt sich mit diesem Code erzeugen:

![Int_random](/assets/images/scripting/Scripting_Beispiele/working-with-numbers/en-script-int-random.png)

```lua
data.Number = math.random(-100, 100)
```

### Addition

Die Addition kann wie folgt durchgeführt werden:

![Addition](/assets/images/scripting/Scripting_Beispiele/working-with-numbers/en-script-addition.png)

```lua
data.Number = data.Number + 2.65
```

### Runden

Beim Runden kann zwischen dem Runden auf eine ganze Zahl und dem Runden mit Nachkommastellen gewählt werden.

Für eine Rundung ohne Nachkommastellen wird folgender Code verwendet:

![Round](/assets/images/scripting/Scripting_Beispiele/working-with-numbers/en-script-round.png)

```lua
data.Number = math.ceil(data.Number)
```

Wenn mit Nachkommastellen gerundet werden soll, ist dieser Code zu verwenden:

![Double_round](/assets/images/scripting/Scripting_Beispiele/working-with-numbers/en-script-doublerround.png)

```lua
data.Number = math.roundwithdecimals(data.Number, 1)
```