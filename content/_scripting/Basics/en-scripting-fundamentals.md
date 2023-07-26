---
layout: article
title: Lua scripting fundamentals
menu_title: Lua scripting fundamentals
description: Information on the fundamentals of Lua scripting
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

## Operators

In Lua, operators are symbols or special keywords used to perform operations on variables, values or expressions. You can use them to perform arithmetic, logical, relational and other operations in your scripts.

### Arithmetic operators

Arithmetic operators perform basic arithmetic calculations with numeric values.

* `+` (Addition): Adds two values together.
* `-` (Subtraction): Subtracts the right operand from the left operand.
* `*` (Multiplication): Multiplies two values.
* `/` (Division): Divides the left operand by the right operand.
* `%` (Modulus): Returns the remainder of the division of the left operand by the right operand.
* `^` (Exponentiation): Raises the left operand to the power of the right operand.

**Example:**

```lua
local a = 10
local b = 3

log(a + b) -- Output: 13
log(a - b) -- Output: 7
log(a * b) -- Output: 30
log(a / b) -- Output: 3.33333333333
log(a % b) -- Output: 1
log(a ^ b) -- Output: 1000
```

### Relational operators

Relational operators are used to compare values and determine the relationship between them. They return boolean values (true or false).

* `==` (Equal): Checks if two values are equal.
* `~=`, [~=] (Not equal): Checks if two values are not equal.
* `<` (Less than): Checks if the left operand is smaller than the right operand.
* `>` (Greater than): Checks if the left operand is greater than the right operand.
* `<=` (Less than or equal to): Checks if the left operand is less than or equal to the right operand.
* `>=` (Greater than or equal to): Checks if the left operand is greater than or equal to the right operand.

**Example:**

```lua
local x = 5
local y = 10

log(x == y) -- Output: false
log(x ~= y) -- Output: true
log(x < y) -- Output: true
log(x > y) -- Output: false
log(x <= y) -- Output: true
log(x >= y) -- Output: false
```

### Logical operators

Logical operators are used to perform logical operations and return boolean results.

* `and`: Returns true if both operands are true, otherwise returns false.
* `or`: Returns true if at least one of the operands is true, otherwise it returns false.
* `not`: Returns the logical negation of the operand. If the operand is true, it returns false and vice versa.

**Example:**

```lua
local a = true
local b = false

log(a and b) -- Output: false
log(a or b) -- Output: true
log(not a) -- Output: false
```

### Concatenation operator

The concatenation operator `..` is used to join (concatenate) two strings.

**Example:**

```lua
local first_name = "John
local last_name = "Doe"

local full_name = first_name .. " " .. last_name

log(full_name) -- Output: "John Doe".
```

### Length operator

The length operator `#` is used to specify the length of a string or the number of elements in a table.

**Example:**

```lua
local str = "Hello, Lua!"
local table_data = {1, 2, 3, 4, 5}

log(#str) -- Output: 12 (length of the string)
log(#table_data) -- Output: 5 (number of elements in the table)
```

### Other operators

There are a few other operators in Lua that are used for special purposes such as assignment, indexing, and type checking. These include:

* `=` (Assignment): Assigns a value to a variable.
* `[]` (Indexing): Accesses elements in a table by their keys.
* `:` (Method invocation): Calls a method on an object.
* `type()` (Type check): Returns the data type of a value.

Operators are important tools in Lua programming, and if you know how to use them properly, you can perform a variety of operations in your Peakboard projects or other Lua-based applications.
