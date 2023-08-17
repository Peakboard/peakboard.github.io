---
layout: article
title: Number manipulation
menu_title: Number manipulation
description: Information about number manipulation in Lua scripting
lang: en
weight: 330
ref: scr-330
redirect_from:
---

With Lua you can perform various operations and manipulations on numeric values. Whether you want to perform basic arithmetic calculations, round numbers, generate random numbers or convert between different numeric representations, Lua provides you with a variety of functions and operators to effectively manipulate numbers.

## Basic arithmetic operations

Lua supports standard arithmetic operations such as addition, subtraction, multiplication, and division using the well-known arithmetic operators: `+`, `-`, `*`, and `/`.

**Example:**

```lua
local num1 = 10
local num2 = 5

local sum = num1 + num2   -- sum will be 15
local difference = num1 - num2   -- difference will be 5
local product = num1 * num2   -- product will be 50
local quotient = num1 / num2   -- quotient will be 2
```

## Exponentiation

To raise a number to a power, you can use the exponentiation operator `^`.

**Example:**

```lua
local base = 2
local exponent = 3

local result = base ^ exponent   -- result will be 8
```

## Modulus

The modulus operator `%` calculates the remainder after division.

**Example:**

```lua
local num1 = 10
local num2 = 3

local remainder = num1 % num2   -- remainder will be 1
```

## Rounding functions

Lua provides built-in functions for rounding numbers:

* `math.floor()`: Rounds a number downwards to the nearest integer.
* `math.ceil()`: Rounds a number upwards to the nearest integer.
* `math.round()`: Rounds a number to the nearest integer.

**Example:**

```lua
local num = 3.6

local rounded_down = math.floor(num)   -- rounded_down will be 3
local rounded_up = math.ceil(num)      -- rounded_up will be 4
local rounded_nearest = math.round(num)   -- rounded_nearest will be 4
```

## Converting numbers to strings

To convert a number to a string, you can use the function `tostring()`.

**Example:**

```lua
local num = 42

local str = tostring(num)   -- str will be "42"
```

## Converting strings to numbers

To convert a string to a number, you can use the function `tonumber()`.

**Example:**

```lua
local str = "123"

local num = tonumber(str)   -- num will be 123 (a number, not a string)
```

## Number formatting

With the function `string.format()` you can format numbers as strings with certain precision.

**Example:**

```lua
local pi = 3.14159

local formatted_pi = string.format("%.2f", pi)   -- formatted_pi will be "3.14"
```

## Generating random numbers

Lua provides the function `math.random()` to generate pseudo-random numbers.

**Syntax:**

`local random_number = math.random([min], max)`

**Example:**

```lua
local random_num1 = math.random()          -- Random number between 0 and 1
local random_num2 = math.random(1, 100)    -- Random number between 1 and 100
```

Note that `math.random()` generates numbers between 0 and 1 if no arguments are provided. To get a random integer within a specific range, you can specify the `min` and `max` arguments.
