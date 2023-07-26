---
layout: article
title: Lua Skripting-Grundlagen
menu_title: Lua Skripting-Grundlagen
description: Informationen über die Grundlagen der Lua Skripterstellung
lang: de
weight: 300
ref: scr-300
redirect_from:
---

## Werte und Typen

In Lua stellen Werte die Daten dar, mit denen dein Programm arbeitet, und Typen kategorisieren diese Werte auf der Grundlage ihrer Eigenschaften in verschiedene Kategorien. Das Verständnis der grundlegenden Werte und Typen von Lua ist für das Schreiben von korrektem und effektivem Code unerlässlich.

In Lua gibt es acht Grundtypen: Nil, Boolean, Number, String, Function, Userdata, Thread und Table.
Im Peakboard Designer kann Lua die Datentypen Boolean, Number und String verwenden.

* Der Typ Boolean hat zwei Werte, `false` und `true`.
* Der Typ Number repräsentiert sowohl ganze Zahlen als auch reelle (Gleitkomma-)Zahlen.
* Der Typ String stellt eine Folge von Zeichen dar, z. B. `Hallo` oder `Lua-Scripting`.

In Lua sind Tabellen die primäre Datenstruktur und dienen als assoziative Arrays, Listen und andere zusammengesetzte Datenstrukturen. Sie sind vergleichbar mit Wörterbüchern oder Hashmaps in anderen Programmiersprachen.

## Indexierung

Die grundlegende Syntax für die Indizierung in Lua lautet wie folgt:

```lua
value = myTable[key]
```

Dabei ist myTable die Tabelle, auf die du zugreifen möchtest, und key ist der Index oder Schlüssel, den du verwendest, um den entsprechenden Wert aus der Tabelle zu erhalten. Der Index kann einen beliebigen Datentyp haben, einschließlich Zahlen, Zeichenketten oder sogar andere Tabellen.

Es gibt zwei Hauptmethoden, um Tabellen in Lua zu indizieren:

### Numerische Indizierung:

In Lua kannst du numerische Indizes verwenden, um auf Elemente in einer Tabelle zuzugreifen, so dass sie sich wie ein Array oder eine Liste verhält. Indizes in Lua beginnen bei 1, nicht bei 0.

```lua
local fruits = {"apple", "banana", "orange"}
log(fruits[1])  -- Ausgabe: "apple"
log(fruits[2])  -- Ausgabe: "banana"
log(fruits[3])  -- Ausgabe: "orange"
```

### String-Indizierung:

In Lua kannst du auch Zeichenketten als Schlüssel für den Zugriff auf Elemente in einer Tabelle verwenden. Dadurch verhalten sich Tabellen wie Wörterbücher oder Hashmaps, in denen du Werte mit bestimmten String-Schlüsseln verknüpfen kannst.

```lua
local person = {name = "John", age = 30, occupation = "Engineer"}
log(person["name"])        -- Ausgabe: "John"
log(person["age"])         -- Ausgabe: 30
log(person["occupation"])  -- Ausgabe: "Engineer"
```

Alternativ kannst du auch Punktnotation für die Indizierung von Strings verwenden:

```lua
log(person.name)           -- Ausgabe: "John"
log(person.age)            -- Ausgabe: 30
log(person.occupation)     -- Ausgabe: "Engineer"
```

Es ist wichtig zu wissen, dass Lua-Tabellen dynamisch und flexibel sind. Du kannst Elemente zum Projekt hinzufügen oder ändern, unabhängig davon, ob sie ursprünglich definiert wurden. Um ein neues Element zu einer Tabelle hinzuzufügen, kannst du einfach einen Wert einem neuen Index/Schlüssel zuweisen:

```lua
fruits[4] = "grapes"        -- Hinzufügen eines neuen Elements über den numerischen Index
person.gender = "Male"      -- Hinzufügen eines neuen Elements über den String-Index
```

Die Indexierung in Lua ist eine leistungsstarke Funktion, mit der du komplexe Datenstrukturen aufbauen und verschiedene Operationen effizient durchführen kannst.

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
