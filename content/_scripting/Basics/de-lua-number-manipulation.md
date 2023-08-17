---
layout: article
title: Zahlenmanipulation
menu_title: Zahlenmanipulation
description: Informationen über Zahlenmanipulation in der Lua Skripterstellung
lang: de
weight: 330
ref: scr-330
redirect_from:
---

Mit Lua kannst du verschiedene Operationen und Manipulationen mit numerischen Werten durchführen. Egal ob du grundlegende arithmetische Berechnungen vornehmen, Zahlen runden, Zufallszahlen generieren oder zwischen verschiedenen numerischen Darstellungen konvertieren möchtest, Lua bietet dir dafür eine Vielzahl von Funktionen und Operatoren, mit denen du Zahlen effektiv manipulieren kannst.

## Grundlegende arithmetische Operationen

Lua unterstützt arithmetische Standardoperationen wie Addition, Subtraktion, Multiplikation und Division mit den bekannten arithmetischen Operatoren: `+`, `-`, `*`, und `/`.

**Beispiel:**

```lua
local num1 = 10
local num2 = 5

local sum = num1 + num2 -- die Summe ist 15
local difference = num1 - num2 -- die Differenz beträgt 5
local product = num1 * num2 -- das Produkt ist 50
local quotient = num1 / num2 -- der Quotient ist 2
```

## Potenzierung

Um eine Zahl auf eine Potenz zu erhöhen, kannst du den Potenzierungsoperator `^` verwenden.

**Beispiel:**

```lua
local base = 2
local exponent = 3

local result = base ^ exponent -- das Ergebnis ist 8
```

## Modulus

Der Modulus-Operator `%` berechnet den Rest nach der Division.

**Beispiel:**

```lua
local num1 = 10
local num2 = 3

local remainder = num1 % num2 -- der Rest ist 1
```

## Rundungsfunktionen

Lua bietet eingebaute Funktionen zum Runden von Zahlen:

* `math.floor()`: Rundet eine Zahl abwärts auf die nächste Ganzzahl.
* `math.ceil()`: Rundet eine Zahl aufwärts auf die nächste Ganzzahl.
* `math.round()`: Rundet eine Zahl auf die nächstliegende Ganzzahl.

**Beispiel:**

```lua
local num = 3.6

local rounded_down = math.floor(num) -- rounded_down ist 3
local rounded_up = math.ceil(num) -- rounded_up ist 4
local rounded_nearest = math.round(num) -- rounded_nearest ist 4
```

## Konvertierung von Zahlen in Strings

Um eine Zahl in einen String umzuwandeln, kannst du die Funktion `tostring()` verwenden.

**Beispiel:**

```lua
local num = 42

local str = tostring(num) -- str ist "42"
```

## Konvertierung von Strings in Zahlen

Um einen String in eine Zahl umzuwandeln, kannst du die Funktion `tonumber()` verwenden.

**Beispiel:**

```lua
local str = "123"

local num = tonumber(str) -- num ist 123 (eine Zahl, kein String)
```

## Zahlenformatierung

Mit der Funktion `string.format()` kannst du Zahlen als Strings mit bestimmter Genauigkeit formatieren.

**Beispiel:**

```lua
local pi = 3.14159

local formatted_pi = string.format("%.2f", pi) -- formatted_pi ist "3.14"
```

## Erzeugen von Zufallszahlen

Lua bietet die Funktion `math.random()`, um Pseudo-Zufallszahlen zu erzeugen.

**Syntax:**

`local random_number = math.random([min], max)`

**Beispiel:**

```lua
local random_num1 = math.random() -- Zufallszahl zwischen 0 und 1
local random_num2 = math.random(1, 100) -- Zufallszahl zwischen 1 und 100
```

Beachte, dass `math.random()` Zahlen zwischen 0 und 1 erzeugt, wenn du keine Argumente angibst. Um eine Zufallszahl innerhalb eines bestimmten Bereichs zu erhalten, gibst du die Argumente `min` und `max` an.
