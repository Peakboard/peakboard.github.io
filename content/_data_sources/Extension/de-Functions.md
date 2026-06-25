---
layout: article
title: Custom-List-Funktionen (Lua)
menu_title: Custom-List-Funktionen
description: Funktionen in einer Extension definieren, die aus Peakboard-Lua-Skripten aufgerufen werden können
lang: de
weight: 740
ref: dat-740
redirect_from:
---

Zusätzlich zum Definieren von Spalten und zum Abrufen von Daten kann eine `CustomListBase` auch **aufrufbare Funktionen** definieren, die direkt aus den Lua-Skripten des Peakboard Designers ausgeführt werden. Diese Funktionen ermöglichen Berechnungen, Transformationen oder Aktionen im laufenden Betrieb (z.B. das Senden von Daten an eine API oder das Durchführen von Berechnungen), die innerhalb einer Peakboard-Visualisierung ausgelöst werden.

## Eine Funktion definieren

Funktionen werden innerhalb der Methode `GetDefinitionOverride` der `CustomListBase`-Klasse deklariert. Jede Funktion ist ein `CustomListFunctionDefinition`, das der Collection `Functions` der zurückgegebenen `CustomListDefinition` hinzugefügt wird. Eine Funktionsdefinition beschreibt ihren Namen (so wie er aus Lua aufgerufen wird), ihre Eingabeparameter und ihre Rückgabeparameter:

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

| Eigenschaft | Typ | Beschreibung |
|---|---|---|
| `Name` | `string` | Der aus Lua aufrufbare Name der Funktion. |
| `Description` | `string` | Tooltip / Beschreibung, die im Designer angezeigt wird. |
| `InputParameters` | `CustomListFunctionInputParameterDefinitionCollection` | Die von der Funktion akzeptierten Parameter. |
| `ReturnParameters` | `CustomListFunctionReturnParameterDefinitionCollection` | Einer oder mehrere Werte, die die Funktion zurückgibt. |
| `Type` | `CustomListFunctionParameterTypes` | Unterstützte Typen: `Number`, `String`, `Boolean`. |
| `Optional` | `bool` | Ob ein Eingabeparameter optional ist. |

## Eine Funktion ausführen

Wenn ein Lua-Skript innerhalb von Peakboard eine Funktion aufruft (z.B. `Data.CalcDemoList:calc(10, 5, "+")`), ruft das Framework `ExecuteFunctionOverride` in deiner `CustomListBase`-Klasse auf. Lies die Eingabeparameter aus der Collection `context.Values` (in der Reihenfolge, in der sie definiert wurden) und gib Ergebnisse über einen `CustomListExecuteReturnContext` zurück:

```csharp
protected override CustomListExecuteReturnContext ExecuteFunctionOverride(CustomListData data, CustomListExecuteParameterContext context)
{
    // Zugriff auf die Parameter in derselben Reihenfolge, in der sie in GetDefinitionOverride() definiert wurden
    double varA = double.Parse(context.Values[0].StringValue); // erster Parameter: "a"
    double varB = double.Parse(context.Values[1].StringValue); // zweiter Parameter: "b"
    string op   = context.Values[2].StringValue;               // dritter Parameter: "op"

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

Wie die anderen Overrides muss `ExecuteFunctionOverride` `protected` sein, darf nicht `async` sein und sollte vollständig mit `try/catch` umschlossen werden (siehe [Implementierungsregeln](/data_sources/Extension/de-DatasourceNoUI.html)).
