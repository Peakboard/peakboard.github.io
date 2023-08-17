---
layout: article
title: Regex - Reguläre Ausdrücke
menu_title: Regex - Reguläre Ausdrücke
description: Informationen über reguläre Ausdrücke in der Lua Skripterstellung
lang: de
weight: 340
ref: scr-340
redirect_from:
---

Reguläre Ausdrücke, allgemein als RegEx (Englisch: Regular Expression)bezeichnet, sind leistungsstarke Werkzeuge für den Pattern-Vergleich und die Textmanipulation. Im Peakboard Designer kannst du RegEx in Lua-Skripten verwenden, um Daten aus Datenquellen oder Benutzereingaben zu extrahieren, zu validieren oder zu manipulieren.

## Laden der Lua-Patterns-Bibliothek

Lua bietet eine Pattern-Matching-Bibliothek, die die Verwendung von RegEx-ähnlichen Pattern zur Stringmanipulation ermöglicht. Diese Bibliothek ist standardmäßig geladen, so dass du keine zusätzlichen Pakete installieren musst, um mit RegEx in Lua zu arbeiten.

Um die Pattern-Bibliothek zu verwenden, kannst du direkt die von Lua bereitgestellten Pattern-Matching-Funktionen aufrufen.

Eine Schnellreferenz für reguläre Ausdrücke findest du online beispielsweise auf [regular-expressions.info](https://www.regular-expressions.info/refquick.html) oder vielen weiteren, ähnlichen Seiten.

## Musterabgleich mit `string.match()`

Die Funktion `string.match()` ermöglicht es dir, das erste Vorkommen eines Pattern in einem String zu finden. Sie gibt den übereinstimmenden Teilstring als Ergebnis zurück.

**Syntax:**

```lua
local matchedText = string.match(inputString, pattern)
```

**Beispiel:**

```lua
local text = "Hello, Lua!"
local pattern = "Hello"
local matchedText = string.match(text, pattern)
print(matchedText) -- Ausgabe: "Hello"
```

In diesem Beispiel wird das Pattern `Hello` in der Zeichenkette gefunden, und der gefundene Text `Hello` wird zurückgegeben.

## Alle Übereinstimmungen mit `string.gmatch()` finden

Die Funktion `string.gmatch()` kannst du verwenden, um durch alle Vorkommen eines Pattern in einem String zu iterieren. Sie gibt eine Iteratorfunktion zurück, die du in einer Schleife verwenden kannst, um alle Übereinstimmungen zu finden.

**Syntax:**

```lua
for matchedText in string.gmatch(inputString, pattern) do
    -- Codeblock, der für jede Übereinstimmung ausgeführt wird
end
```

**Beispiel:**

```lua
local text = "1, 2, 3, 4, 5"
local pattern = "%d+"
for matchedNumber in string.gmatch(text, pattern) do
    print(matchedNumber)
end
```

Die Ausgabe wird sein:

```lua
1
2
3
4
5
```

In diesem Beispiel stimmt das Pattern `%d+` mit einer oder mehreren Ziffern (`%d`) in dem String überein, und jede übereinstimmende Zahl wird in der Schleife ausgegeben.

## Ersetzen von Pattern mit `string.gsub()`

Mit der Funktion `string.gsub()` kannst du alle Vorkommen eines Pattern in einem String durch eine von dir bestimmten Ersatztext austauschen.

**Syntax:**

```lua
local replacedText = string.gsub(inputString, pattern, replacement)
```

**Beispiel:**

```lua
local text = "The quick brown fox"
local muster = "fox"
local ersatz = "dog"
local replacedText = string.gsub(text, pattern, replacement)
print(replacedText) -- Ausgabe: "The quick brown dog"
```

In diesem Beispiel werden alle Vorkommen des Patterns `fox` durch den Ersatztext `dog` ersetzt.

## Verwendung von Erfassungsgruppen

Erfassungsgruppen sind eine leistungsstarke Funktion von RegEx, mit der du bestimmte Teile eines übereinstimmenden Musters extrahieren kannst. Du kannst Klammern `()` verwenden, um Erfassungsgruppen in deinen Patterns zu erstellen.

**Beispiel:**

```lua
local text = "Name: John, Age: 30"
local pattern = "Name: (%a+), Age: (%d+)"
local name, age = string.match(text, pattern)
print("Name: " .. name) -- Ausgabe: "Name: John"
print("Age: " .. Age) -- Ausgabe: "Age: 30"
```

In diesem Beispiel erfasst das Pattern "Name: (%a+), Age: (%d+)" den Namen und das Alter aus dem Eingabetext.

## Auskommentieren von Sonderzeichen

Bei der Arbeit mit RegEx haben einige Zeichen eine besondere Bedeutung. Wenn du diese Zeichen wörtlich abgleichen willst, musst du sie mit einem Backslash `\\` auskommentieren.

**Beispiel:**

```lua
local text = "The price is $10"
local pattern = "%$%d+"
local matchedPrice = string.match(text, pattern)
print(matchedPrice) -- Ausgabe: "$10"
```

In diesem Beispiel ist das Dollarzeichen `$` ein Sonderzeichen in RegEx, so dass du es mit einem Backslash `\\` auskommentieren musst, damit es wörtlich übereinstimmt.
