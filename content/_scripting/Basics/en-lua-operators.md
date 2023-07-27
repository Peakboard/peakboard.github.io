---
layout: article
title: Lua operators
menu_title: Lua operators
description: Information on operators in Lua scripting
lang: en
weight: 310
ref: scr-310
redirect_from:
---

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
