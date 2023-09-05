---
layout: article
title: Werte, Typen und Indexierung
menu_title: Werte, Typen & Indexierung
description: Informationen über Werte, Typen und Indexierung in der Lua Skripterstellung
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

### Numerische Indizierung

In Lua kannst du numerische Indizes verwenden, um auf Elemente in einer Tabelle zuzugreifen, so dass sie sich wie ein Array oder eine Liste verhält. Indizes in Lua beginnen bei 1, nicht bei 0.

```lua
local fruits = {"apple", "banana", "orange"}
log(fruits[1])  -- Ausgabe: "apple"
log(fruits[2])  -- Ausgabe: "banana"
log(fruits[3])  -- Ausgabe: "orange"
```

### String-Indizierung

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
