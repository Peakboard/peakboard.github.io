---
layout: article
title: Processing Numeric Values
menu_title: Processing Numeric Values
description: Processing numeric values
lang: en
weight: 160
ref: scr-160
redirect_from:
---

With Peakboard, you can manipulate numbers in various ways. This template provides the following operations and functions:

1. Floating-point random number
2. Integer random number
3. Addition
4. Rounding

### Floating-point Random Number

To generate a random floating-point number, use the following code:

![Random](/assets/images/scripting/Scripting_Beispiele/working-with-numbers/en-script-random.png)

```lua
data.Number = math.random(0, 99) + math.random()
```

### Integer Random Number

To generate a random integer, use this code:

![Int_random](/assets/images/scripting/Scripting_Beispiele/working-with-numbers/en-script-int-random.png)

```lua
data.Number = math.random(-100, 100)
```

### Addition

Addition can be performed as follows:

![Addition](/assets/images/scripting/Scripting_Beispiele/working-with-numbers/en-script-addition.png)

```lua
data.Number = data.Number + 2.65
```

### Rounding

When rounding, you can choose between rounding to a whole number and rounding with decimal places.

To round to a whole number, use the following code:

![Round](/assets/images/scripting/Scripting_Beispiele/working-with-numbers/en-script-round.png)

```lua
data.Number = math.ceil(data.Number)
```

To round with decimal places, use this code:

![Double_round](/assets/images/scripting/Scripting_Beispiele/working-with-numbers/en-script-doublerround.png)

```lua
data.Number = math.roundwithdecimals(data.Number, 1)
```