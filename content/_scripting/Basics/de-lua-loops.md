---
layout: article
title: Lua Schleifen
menu_title: Lua Schleifen
description: Informationen über Schleifen in der Lua Skripterstellung
lang: de
weight: 320
ref: scr-320
redirect_from:
---

Schleifen ermöglichen es dir, einen Codeblock auf der Grundlage einer bestimmten Bedingung mehrfach zu wiederholen. Im Folgenden findest du die verschiedenen Arten von Schleifen in Lua und deren Verwendung im Peakboard Designer.

## while-Schleife

Die while-Schleife führt einen Codeblock so lange aus, wie eine bestimmte Bedingung erfüllt ist. Die Syntax für die while-Schleife lautet wie folgt:

```lua
while Bedingung do
    -- Codeblock, der ausgeführt wird, solange die Bedingung erfüllt ist
end
```

**Beispiel:**

```lua
local counter = 1
while counter <= 5 do
    print("Counter value: " .. counter)
    counter = counter + 1
end
```

In diesem Beispiel wird die Schleife so lange ausgeführt, wie die Variable counter kleiner oder gleich 5 ist. Die Ausgabe wird sein:

```lua
Counter value: 1
Counter value: 2
Counter value: 3
Counter value: 4
Counter value: 5
```

## repeat...until-Schleife

Die repeat...until-Schleife ähnelt der while-Schleife, wertet aber die Bedingung aus, nachdem der Codeblock ausgeführt wurde. Dadurch wird sichergestellt, dass der Codeblock unabhängig von der Ausgangsbedingung mindestens einmal ausgeführt wird. Die Syntax lautet wie folgt:

```lua
repeat
    -- auszuführender Code-Block
until Bedingung
```

**Beispiel:**

```lua
lokaler counter = 1
repeat
    print("Counter value: " .. counter)
    counter = counter + 1
until counter > 5
```

Diese Schleife erzeugt die gleiche Ausgabe wie das vorherige Beispiel.

## for-Schleife

Mit der for-Schleife kannst du über einen bestimmten Wertebereich iterieren. Du verwendest sie normalerweise, wenn die Anzahl der Iterationen im Voraus bekannt ist. Es gibt zwei Arten von for-Schleifen in Lua: numerische und generische. Die numerische for-Schleife verwendest du für die Iteration über eine Folge von Zahlen, während du mit der generischen for-Schleife über andere Arten von Folgen iterieren kannst.

### Numerische for-Schleife

```lua
for startValue, endValue, stepValue do
    -- Codeblock, der für jede Iteration ausgeführt wird
end
```

**Beispiel:**

```lua
for i = 1, 5, 1 do
    print("Iteration: " .. i)
end
```

Die Ausgabe wird sein:

```lua
Iteration: 1
Iteration: 2
Iteration: 3
Iteration: 4
Iteration: 5
```

### Generische for-Schleife

```lua
for index, value in ipairs(sequence) do
    -- Codeblock, der für jede Iteration ausgeführt wird
end
```

**Beispiel:**

```lua
local fruits = {"apple", "banana", "orange"}
for index, fruit in ipairs(fruits) do
    print("Fruit at index " .. index .. ": " .. fruit)
end
```

Die Ausgabe wird sein:

```lua
Fruit at index 1: apple
Fruit at index 2: banana
Fruit at index 3: orange
```

## Kontrollanweisungen für Schleifen

In Lua kannst du Steueranweisungen verwenden, um den Ablauf von Schleifen zu verändern. Diese Anweisungen umfassen:

* break: Beendet die Schleife vorzeitig, wenn eine bestimmte Bedingung erfüllt ist.

* continue (nicht Lua-eigen): Überspringt den Rest der aktuellen Iteration und fährt mit der nächsten Iteration fort.

Es ist wichtig, dass du bei der Verwendung von Steueranweisungen vorsichtig bist, da sie deinen Code komplexer und schwieriger zu pflegen machen können.

## Fazit

Schleifen sind entscheidend für die Automatisierung sich wiederholender Aufgaben und die Verarbeitung von Daten in deinen Peakboard-Visualisierungen. Wenn du while-, repeat...until- und for-Schleifen verstehst und effektiv einsetzt, kannst du effizientere und dynamischere Skripte zur Verbesserung deiner Peakboard-Projekte erstellen.

Vergiss nicht, deine Schleifen gründlich zu testen, um sicherzustellen, dass sie sich wie erwartet verhalten, und um mögliche Fallstricke wie Endlosschleifen zu vermeiden.
