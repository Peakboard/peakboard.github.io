---
layout: article
title: Custom List functions (Lua)
menu_title: Custom List functions
description: Define functions in an extension that can be called from Peakboard Lua scripts
lang: en
weight: 740
ref: dat-740
redirect_from:
---

In addition to defining columns and retrieving data, a `CustomListBase` can define **callable functions** that are executed directly from Peakboard Designer Lua scripts. These functions enable computations, transformations or actions (for example sending data to an API or performing calculations) triggered live inside a Peakboard visualization.

## Defining a function

Functions are declared within the `GetDefinitionOverride` method of the `CustomListBase` class. Each function is a `CustomListFunctionDefinition` added to the `Functions` collection of the returned `CustomListDefinition`. A function definition describes its name (as called from Lua), its input parameters and its return parameters:

```csharp
using Peakboard.ExtensionKit;

namespace CalcDemo;

[Serializable]
class CalcDemoCustomList : CustomListBase
{
    protected override CustomListDefinition GetDefinitionOverride()
    {
        return new CustomListDefinition
        {
            ID = "CalcDemoList",
            Name = "Calculation demo",
            PropertyInputPossible = false,
            Functions =
            {
                new CustomListFunctionDefinition()
                {
                    Name = "calc",
                    Description = "Performs basic arithmetic operations on two numbers.",
                    InputParameters = new CustomListFunctionInputParameterDefinitionCollection
                    {
                        new CustomListFunctionInputParameterDefinition
                        {
                            Name = "a",
                            Description = "The first numeric operand.",
                            Optional = false,
                            Type = CustomListFunctionParameterTypes.Number
                        },
                        new CustomListFunctionInputParameterDefinition
                        {
                            Name = "b",
                            Description = "The second numeric operand.",
                            Optional = false,
                            Type = CustomListFunctionParameterTypes.Number
                        },
                        new CustomListFunctionInputParameterDefinition
                        {
                            Name = "op",
                            Description = "Arithmetic operator (+, -, *, /).",
                            Optional = false,
                            Type = CustomListFunctionParameterTypes.String
                        }
                    },
                    ReturnParameters = new CustomListFunctionReturnParameterDefinitionCollection
                    {
                        new CustomListFunctionReturnParameterDefinition
                        {
                            Name = "result",
                            Description = "The result of the arithmetic operation.",
                            Type = CustomListFunctionParameterTypes.Number
                        }
                    }
                }
            }
        };
    }
}
```

| Property | Type | Description |
|---|---|---|
| `Name` | `string` | The Lua-accessible name of the function. |
| `Description` | `string` | Tooltip / description shown in the Designer. |
| `InputParameters` | `CustomListFunctionInputParameterDefinitionCollection` | The parameters accepted by the function. |
| `ReturnParameters` | `CustomListFunctionReturnParameterDefinitionCollection` | One or more values the function returns. |
| `Type` | `CustomListFunctionParameterTypes` | Supported types: `Number`, `String`, `Boolean`. |
| `Optional` | `bool` | Whether an input parameter is optional. |

## Executing a function

When a Lua script inside Peakboard calls a function (e.g. `Data.CalcDemoList:calc(10, 5, "+")`), the framework invokes `ExecuteFunctionOverride` in your `CustomListBase` class. Read the input parameters from the `context.Values` collection (in the same order they were defined) and return results via a `CustomListExecuteReturnContext`:

```csharp
protected override CustomListExecuteReturnContext ExecuteFunctionOverride(CustomListData data, CustomListExecuteParameterContext context)
{
    // Access parameters in the same order they were defined in GetDefinitionOverride()
    double varA = double.Parse(context.Values[0].StringValue); // first parameter: "a"
    double varB = double.Parse(context.Values[1].StringValue); // second parameter: "b"
    string op   = context.Values[2].StringValue;               // third parameter: "op"

    var result = new CustomListExecuteReturnContext();

    switch (op)
    {
        case "+": result.Add(varA + varB); break;
        case "-": result.Add(varA - varB); break;
        case "*": result.Add(varA * varB); break;
        case "/": result.Add(varA / varB); break;
    }

    return result;
}
```

Like the other overrides, `ExecuteFunctionOverride` must be `protected`, must not be `async`, and should be wrapped completely in `try/catch` (see the [implementation rules](/data_sources/Extension/en-DatasourceNoUI.html)).
