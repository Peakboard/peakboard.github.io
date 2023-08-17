---
layout: article
title: Regex - Regular expressions
menu_title: Regex - Regular expressions
description: Information about regular expressions in Lua scripting
lang: en
weight: 340
ref: scr-340
redirect_from:
---

Regular expressions, commonly called RegEx, are powerful tools for pattern matching and text manipulation. In the Peakboard Designer, you can use RegEx in Lua scripts to extract, validate, or manipulate data from data sources or user input.

## Loading the Lua pattern library

Lua provides a pattern matching library that allows the use of RegEx-like patterns for string manipulation. This library is loaded by default, so you don't need to install any additional packages to work with RegEx in Lua.

To use the pattern library, you can directly call the pattern matching functions provided by Lua.

You can find a quick reference for regular expressions online for example at [regular-expressions.info](https://www.regular-expressions.info/refquick.html) or many other similar sites.

## Pattern matching with `string.match()`

The `string.match()` function allows you to find the first occurrence of a pattern in a string. It returns the matching substring as the result.

**Syntax:**

```lua
local matchedText = string.match(inputString, pattern)
```

**Example:**

```lua
local text = "Hello, Lua!"
local pattern = "Hello"
local matchedText = string.match(text, pattern)
print(matchedText) -- Output: "Hello"
```

In this example, the pattern `Hello` is matched in the string, and the matched text `Hello` is returned.

## Find all matches with `string.gmatch()`

You can use the `string.gmatch()` function to iterate through all occurrences of a pattern in a string. It returns an iterator function that you can use in a loop to find all matches.

**Syntax:**

```lua
for matchedText in string.gmatch(inputString, pattern) do
    -- code block to be executed for each match
end
```

**Example:**

```lua
local text = "1, 2, 3, 4, 5"
local pattern = "%d+"
for matchedNumber in string.gmatch(text, pattern) do
    print(matchedNumber)
end
```

The output will be:

```lua
1
2
3
4
5
```

In this example, the pattern `%d+` matches one or more digits (`%d`) in the string, and each matched number is printed in the loop.

## Replace pattern with `string.gsub()`

The `string.gsub()` function allows you to replace all occurrences of a pattern in a string with a specified replacement.

**Syntax:**

```lua
local replacedText = string.gsub(inputString, pattern, replacement)
```

**Example:**

```lua
local text = "The quick brown fox"
local pattern = "fox"
local replacement = "dog
local replacedText = string.gsub(text, pattern, replacement)
print(replacedText) -- Output: "The quick brown dog".
```

In this example, all occurrences of the pattern `fox` are replaced with the replacement text `dog`.

## Using capture groups

Capture groups are a powerful feature of RegEx that allow you to extract specific parts of a matching pattern. You can use parentheses `()` to create capture groups in your patterns.

**Example:**

```lua
local text = "Name: John, Age: 30"
local pattern = "Name: (%a+), Age: (%d+)"
local name, age = string.match(text, pattern)
print("Name: " .. name)  -- Output: "Name: John"
print("Age: " .. age)    -- Output: "Age: 30"
```

In this example, the pattern `"Name: (%a+), Age: (%d+)"` captures the name and age from the input text.

## Escaping special characters

When working with RegEx, some characters have special meanings. If you need to match those characters literally, you must escape them with a backslash `\\`.

**Example:**

```lua
local text = "The price is $10"
local pattern = "%$%d+"
local matchedPrice = string.match(text, pattern)
print(matchedPrice)  -- Output: "$10"
```

In this example, the dollar sign `$` is a special character in RegEx, so you need escape it with a backslash `\\` to match it literally.
