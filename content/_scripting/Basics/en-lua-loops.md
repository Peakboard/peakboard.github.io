---
layout: article
title: Loops
menu_title: Loops
description: Information about loops in Lua scripting
lang: en
weight: 320
ref: scr-320
redirect_from:
---

Loops allow you to repeat a block of code multiple times based on a specific condition. Below you will find the different types of loops in Lua and how they are used in the Peakboard Designer.

## `while` loop

The `while` loop executes a block of code as long as a specific condition is met. The syntax for the `while` loop is as follows:

```lua
while condition do
    -- code block to be executed while the condition is true
end
```

**Example:**

```lua
local counter = 1
while counter <= 5 do
    print("Counter value: " .. counter)
    counter = counter + 1
end
```

In this example, the loop will be executed as long as the variable counter is less than or equal to 5. The output will be:

```lua
Counter value: 1
Counter value: 2
Counter value: 3
Counter value: 4
Counter value: 5
```

## `repeat...until` loop

The `repeat...until` loop is similar to the `while` loop, but evaluates the condition after the code block has been executed. This ensures that the code block is executed at least once regardless of the initial condition. The syntax is as follows:

```lua
repeat
    -- code block to be executed
until condition
```

**Example:**

```lua
local counter = 1
repeat
    print("Counter value: " .. counter)
    counter = counter + 1
until counter > 5
```

This loop produces the same output as the previous example.

## `for` loop

The `for` loop allows you to iterate over a range of values. You usually use it when the number of iterations is known in advance. There are two types of `for` loops in Lua: numeric and generic. You use the numeric `for` loop to iterate over a sequence of numbers, while you can use the generic `for` loop to iterate over other types of sequences.

### Numeric `for` loop

```lua
for startValue, endValue, stepValue do
    -- code block to be executed for each iteration
end
```

**Example:**

```lua
for i = 1, 5, 1 do
    print("Iteration: " .. i)
end
```

The output will be:

```lua
Iteration: 1
Iteration: 2
Iteration: 3
Iteration: 4
Iteration: 5
```

### Generic `for` loop

```lua
for index, value in ipairs(sequence) do
    -- code block to be executed for each iteration
end
```

**Example:**

```lua
local fruits = {"apple", "banana", "orange"}
for index, fruit in ipairs(fruits) do
    print("Fruit at index " .. index .. ": " .. fruit)
end
```

The output will be:

```lua
Fruit at index 1: apple
Fruit at index 2: banana
Fruit at index 3: orange
```

## Control statements for loops

In Lua, you can use control statements to change the flow of loops. These statements include:

### `break` statement

Ends the loop prematurely when a certain condition is met. Once `break` is executed, the program flow jumps out of the loop and continues with the next line of code after the loop.

**Example:**

```lua
for i = 1, 10 do
    if i == 5 then
        break
    end
    print(i)
end
-- This will print numbers from 1 to 4. The loop terminates when i equals 5.
```

The output will be:

```lua
1
2
3
4
```

### Mimicking the `continue` statement

Lua doesn't have a continue statement like some other languages. The basic idea of `continue` is to skip the current iteration and move on to the next one.

In Lua, you can achieve this effect using a combination of `goto` and labels.

**Example:**

```lua
for i = 1, 10 do
    if i % 2 == 0 then
        goto continue
    end
    print(i)  -- Will print only odd numbers between 1 and 10.
    ::continue::
end
```

The output will be:

```lua
1
3
5
7
9
```

Here, when `i` is an even number, the program flow jumps to the label `::continue::`, effectively skipping the `print(i)` statement for even numbers.

It's important to be careful when using control statements, as they can make your code more complex and harder to maintain.

Don't forget to test your loops thoroughly to make sure they behave as expected and to avoid potential pitfalls like infinite loops.
