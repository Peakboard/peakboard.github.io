---
layout: article
title: Values, types and indexing
menu_title: Values, types & indexing
description: Information on values, types and indexing in Lua scripting
lang: en
weight: 300
ref: scr-300
redirect_from:
---

## Values and types

In Lua, values represent the data your program works with, and types categorize these values into different categories based on their properties. Understanding Lua's basic values and types is essential to writing correct and effective code.

There are eight basic types in Lua: nil, boolean, number, string, function, userdata, thread, and table.
In the Peakboard Designer, Lua can use the boolean, number, and string data types.

* The boolean type has two values, `false` and `true`.
* The number type represents both integers and real (floating point) numbers.
* The string type represents a sequence of characters, e.g. `hello` or `Lua-Scripting`.

In Lua, tables are the primary data structure and serve as associative arrays, lists, and other composite data structures. They are similar to dictionaries or hashmaps in other programming languages.

## Indexing

The basic syntax for indexing in Lua is as follows:

```lua
value = myTable[key]
```

Where myTable is the table you want to access, and key is the index or key you use to get the corresponding value from the table. The index can be of any data type, including numbers, strings, or even other tables.

There are two main methods to index tables in Lua:

### Numeric indexing

In Lua, you can use numeric indexes to access elements in a table so that it behaves like an array or list. Indexes in Lua start at 1, not 0.

```lua
local fruits = {"apple", "banana", "orange"}
log(fruits[1]) -- Output: "apple"
log(fruits[2]) -- Output: "banana
log(fruits[3]) -- Output: "orange
```

### String indexing

In Lua, you can also use strings as keys to access elements in a table. This makes tables behave like dictionaries or hashmaps, where you can associate values with specific string keys.

```lua
local person = {name = "John", age = 30, occupation = "Engineer"}
log(person["name"]) -- Output: "John"
log(person["age"]) -- Output: 30
log(person["occupation"]) -- Output: "Engineer"
```

Alternatively, you can use dot notation for indexing strings:

```lua
log(person.name) -- Output: "John"
log(person.age) -- Output: 30
log(person.occupation) -- Output: "Engineer"
```

It is important to know that Lua tables are dynamic and flexible. You can add or change elements to the project regardless of whether they were originally defined. To add a new element to a table, you can simply assign a value to a new index/key:

```lua
fruits[4] = "grapes" -- add a new element using the numeric index
person.gender = "Male" -- adding a new element using the string index
```

Indexing in Lua is a powerful feature that lets you build complex data structures and perform various operations efficiently.
