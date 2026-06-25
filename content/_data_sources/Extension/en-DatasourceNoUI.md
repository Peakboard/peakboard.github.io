---
layout: article
title: Creating a data source (Custom List)
menu_title: Create a data source
description: Information about creating a data source for a Peakboard Extension via CustomListBase
lang: en
weight: 730
ref: dat-730
redirect_from:
---

A class that inherits from `Peakboard.ExtensionKit.CustomListBase` represents a single data source – internally called a **Custom List**. It defines the configurable inputs, the output columns and the row-retrieval logic.

<div class="box-warning" markdown="1">
**Important**

Every class that inherits from `CustomListBase` must be marked with the `[Serializable]` attribute. This is required for proper serialization and compatibility within Peakboard.
</div>

```csharp
using Peakboard.ExtensionKit;

namespace HubSpot;

[Serializable]
internal class HubSpotCustomList : CustomListBase
{
    // overrides (see below)
}
```

## Metadata and user input: GetDefinitionOverride

`GetDefinitionOverride` returns a `CustomListDefinition` with the metadata of the data source. The `PropertyInputDefaults` collection represents the settings the end user configures in the Peakboard Designer:

```csharp
protected override CustomListDefinition GetDefinitionOverride()
{
    return new CustomListDefinition
    {
        ID = "CatFactsCustomList",
        Name = "Cat Facts",
        Description = "Random cute stuff about cats",
        PropertyInputPossible = true,
        PropertyInputDefaults =
        {
            new CustomListPropertyDefinition() { Name = "MaxLength", Value = "140" },
            new CustomListPropertyDefinition() { Name = "Token", Value = "Enter your API token here", Masked = true }
        }
    };
}
```

The properties defined here appear as input fields in the Designer:

![User property in the Designer](/assets/images/data-sources/extension/PeakboardExtension_user_property.png)

A property (`CustomListPropertyDefinition`) can have the following attributes:

| Attribute | Description |
|---|---|
| `Name` | The name of the property. |
| `Value` | The default value. |
| `MultiLine` | Gives the user a large text field (e.g. for SQL statements). |
| `Masked` | Hides the value from the user (e.g. for passwords or API tokens). |

The values entered by the user are read in `GetColumnsOverride` and `GetItemsOverride` via the `data.Properties` dictionary:

```csharp
string token = data.Properties["Token"];
```

## Output columns: GetColumnsOverride

`GetColumnsOverride` is called when the Designer needs the schema (columns) of the data source. It returns a `CustomListColumnCollection`. Typically you perform a small pre-flight request here to determine the available columns and their types dynamically:

```csharp
protected override CustomListColumnCollection GetColumnsOverride(CustomListData data)
{
    return
    [
        new CustomListColumn("Fact", CustomListColumnTypes.String),
        new CustomListColumn("Length", CustomListColumnTypes.Number),
    ];
}
```

External data types must be mapped to the Peakboard `CustomListColumnTypes`:

| Peakboard type (`CustomListColumnTypes`) | Common .NET / JSON mapping |
|---|---|
| `String` | `string`, `JTokenType.String` |
| `Number` | `int`, `float`, `JTokenType.Integer`, `JTokenType.Float` |
| `Boolean` | `bool`, `JTokenType.Boolean` |

## Retrieving data: GetItemsOverride

`GetItemsOverride` is called when the actual data exchange takes place. It returns a `CustomListObjectElementCollection`. Each `CustomListObjectElement` consists of the column names and the actual values:

```csharp
protected override CustomListObjectElementCollection GetItemsOverride(CustomListData data)
{
    int maxLength = int.Parse(data.Properties["MaxLength"]);
    CatFact myFact = GetRandomCatfact(maxLength).Result;

    var items = new CustomListObjectElementCollection();
    items.Add(new CustomListObjectElement { { "Fact", myFact.Fact }, { "Length", myFact.Length } });
    return items;
}
```

## Critical implementation rules

<div class="box-warning" markdown="1">
**Caution!**

- **No `async` overrides.** All override methods (`GetDefinitionOverride`, `GetColumnsOverride`, `GetItemsOverride`, `SetupOverride`, `ExecuteFunctionOverride`) must be declared `protected` and **cannot** be `async`. Resolve asynchronous work synchronously within them (e.g. by using `.Result` on the `Task`). External calls can live in private `async` helper methods as long as their `Task` is resolved synchronously in the override.
- **No unhandled exceptions.** Wrap `GetColumnsOverride`, `GetItemsOverride`, `SetupOverride` and `ExecuteFunctionOverride` completely in `try/catch`. Never rethrow inside the `catch` – instead return a safe fallback value and additionally use `Log.Error`.
- **Only serializable values.** In a `CustomListObjectElement`, use only simple types (`String`, `Number`, `Boolean`) that match the declared `CustomListColumnTypes`. Do not put complex objects (`JToken`/`JObject`/`JArray`/`Exception`) into cells, and avoid `null` for strings – use an empty string `""` instead.
</div>
