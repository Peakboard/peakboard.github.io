---
layout: article
title: Operatoren
menu_title: Operatoren
description: Informationen über Operatoren in der Lua Skripterstellung
lang: de
weight: 310
ref: scr-310
redirect_from:
---

## Operatoren

In Lua sind Operatoren Symbole oder spezielle Schlüsselwörter, die verwendet werden, um Operationen mit Variablen, Werten oder Ausdrücken durchzuführen. Mit ihnen kannst du arithmetische, logische, relationale und andere Operationen in deinen Skripten durchführen.

### Arithmetische Operatoren

Arithmetische Operatoren führen grundlegende arithmetische Berechnungen mit numerischen Werten durch.

* `+` (Addition): Addiert zwei Werte zusammen.
* `-` (Subtraktion): Subtrahiert den rechten Operanden vom linken Operanden.
* `*` (Multiplikation): Multipliziert zwei Werte.
* `/` (Division): Dividiert den linken Operanden durch den rechten Operanden.
* `%` (Modulus): Gibt den Rest der Division des linken Operanden durch den rechten Operanden zurück.
* `^` (Potenzierung): Erhöht den linken Operanden auf die Potenz des rechten Operanden.

**Beispiel:**

```lua
local a = 10
local b = 3

log(a + b) -- Ausgabe: 13
log(a - b) -- Ausgabe: 7
log(a * b) -- Ausgabe: 30
log(a / b) -- Ausgabe: 3.3333333333333
log(a % b) -- Ausgabe: 1
log(a ^ b) -- Ausgabe: 1000
```

### Relationale Operatoren

Relationale Operatoren werden verwendet, um Werte zu vergleichen und die Beziehung zwischen ihnen zu bestimmen. Sie geben boolesche Werte zurück (true oder false).

* `==` (Gleich): Prüft, ob zwei Werte gleich sind.
* `~=`, [~=] (Nicht gleich): Prüft, ob zwei Werte nicht gleich sind.
* `<` (Kleiner als): Prüft, ob der linke Operand kleiner als der rechte Operand ist.
* `>` (Größer als): Prüft, ob der linke Operand größer als der rechte Operand ist.
* `<=` (Kleiner als oder gleich): Prüft, ob der linke Operand kleiner oder gleich dem rechten Operanden ist.
* `>=` (Größer als oder gleich): Prüft, ob der linke Operand größer oder gleich dem rechten Operanden ist.

**Beispiel:**

```lua
local x = 5
local y = 10

log(x == y) -- Ausgabe: false
log(x ~= y) -- Ausgabe: true
log(x < y) -- Ausgabe: true
log(x > y) -- Ausgabe: false
log(x <= y) -- Ausgabe: true
log(x >= y) -- Ausgabe: false
```

### Logische Operatoren

Logische Operatoren werden verwendet, um logische Operationen auszuführen und boolesche Ergebnisse zurückzugeben.

* `and`: Gibt wahr zurück, wenn beide Operanden wahr sind, andernfalls gibt er falsch zurück.
* `or`: Gibt wahr zurück, wenn mindestens einer der Operanden wahr ist, andernfalls gibt er falsch zurück.
* `not`: Gibt die logische Negation des Operanden zurück. Wenn der Operand wahr ist, wird falsch zurückgegeben und umgekehrt.

**Beispiel:**

```lua
local a = true
local b = false

log(a and b) -- Ausgabe: false
log(a or b) -- Ausgabe: true
log(not a) -- Ausgabe: false
```

### Verkettungsoperator

Der Verkettungsoperator `..` wird verwendet, um zwei Zeichenketten miteinander zu verbinden (zu verketten).

**Beispiel:**

```lua
local first_name = "John"
local last_name = "Doe"

local full_name = first_name .. " " .. last_name

log(full_name) -- Ausgabe: "John Doe"
```

### Längenoperator

Der Längenoperator `#` wird verwendet, um die Länge einer Zeichenkette oder die Anzahl der Elemente in einer Tabelle zu bestimmen.

**Beispiel:**

```lua
local str = "Hello, Lua!"
local table_data = {1, 2, 3, 4, 5}

log(#str) -- Ausgabe: 12 (Länge des Strings)
log(#table_data) -- Ausgabe: 5 (Anzahl der Elemente in der Tabelle)
```

### Andere Operatoren

Es gibt noch ein paar weitere Operatoren in Lua, die für spezielle Zwecke wie Zuweisung, Indexierung und Typüberprüfung verwendet werden. Dazu gehören:

* `=` (Zuweisung): Weist einer Variablen einen Wert zu.
* `[]` (Indizierung): Greift auf Elemente in einer Tabelle über deren Schlüssel zu.
* `:` (Methodenaufruf): Ruft eine Methode für ein Objekt auf.
* `type()` (Typprüfung): Gibt den Datentyp eines Wertes zurück.

Operatoren sind wichtige Werkzeuge in der Lua-Programmierung, und wenn du weißt, wie man sie richtig einsetzt, kannst du eine Vielzahl von Operationen in deinen Peakboard-Projekten oder anderen Lua-basierten Anwendungen durchführen.
