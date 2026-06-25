---
layout: article
title: Erstellen einer Datenquelle (Custom List)
menu_title: Datenquelle erstellen
description: Informationen zum Erstellen einer Datenquelle für eine Peakboard Extension über CustomListBase
lang: de
weight: 730
ref: dat-730
redirect_from:
---

Eine Klasse, die von `Peakboard.ExtensionKit.CustomListBase` erbt, repräsentiert eine einzelne Datenquelle – intern **Custom List** genannt. Sie definiert die konfigurierbaren Eingaben, die Ausgabespalten und die Logik zum Abruf der Datenzeilen.

<div class="box-warning" markdown="1">
**Wichtig**

Jede Klasse, die von `CustomListBase` erbt, muss mit dem Attribut `[Serializable]` versehen sein. Das ist für die korrekte Serialisierung und Kompatibilität innerhalb von Peakboard erforderlich.
</div>

```csharp
using Peakboard.ExtensionKit;

namespace HubSpot;

[Serializable]
internal class HubSpotCustomList : CustomListBase
{
    // Overrides (siehe unten)
}
```

## Metadaten und Benutzereingaben: GetDefinitionOverride

`GetDefinitionOverride` liefert eine `CustomListDefinition` mit den Metadaten der Datenquelle. Die Collection `PropertyInputDefaults` repräsentiert die Einstellungen, die der Endbenutzer im Peakboard Designer vornimmt:

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

Die hier definierten Properties erscheinen als Eingabefelder im Designer:

![Benutzer-Property im Designer](/assets/images/data-sources/extension/PeakboardExtension_user_property.png)

Eine Property (`CustomListPropertyDefinition`) kann die folgenden Attribute haben:

| Attribut | Beschreibung |
|---|---|
| `Name` | Der Name der Property. |
| `Value` | Der Standardwert. |
| `MultiLine` | Gibt dem Benutzer ein großes Textfeld (z.B. für SQL-Statements). |
| `Masked` | Verbirgt den Wert vor dem Benutzer (z.B. für Passwörter oder API-Tokens). |

Die vom Benutzer eingegebenen Werte werden in `GetColumnsOverride` und `GetItemsOverride` über das Dictionary `data.Properties` ausgelesen:

```csharp
string token = data.Properties["Token"];
```

## Ausgabespalten: GetColumnsOverride

`GetColumnsOverride` wird aufgerufen, wenn der Designer das Schema (die Spalten) der Datenquelle benötigt. Die Methode liefert eine `CustomListColumnCollection`. Üblicherweise führst du hier einen kleinen Vorab-Request aus, um die verfügbaren Spalten und deren Typen dynamisch zu ermitteln:

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

Externe Datentypen müssen auf die Peakboard-Typen `CustomListColumnTypes` abgebildet werden:

| Peakboard-Typ (`CustomListColumnTypes`) | Übliche .NET-/JSON-Entsprechung |
|---|---|
| `String` | `string`, `JTokenType.String` |
| `Number` | `int`, `float`, `JTokenType.Integer`, `JTokenType.Float` |
| `Boolean` | `bool`, `JTokenType.Boolean` |

## Daten abrufen: GetItemsOverride

`GetItemsOverride` wird aufgerufen, wenn der eigentliche Datenaustausch stattfindet. Die Methode liefert eine `CustomListObjectElementCollection`. Jedes `CustomListObjectElement` besteht aus den Spaltennamen und den tatsächlichen Werten:

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

## Wichtige Implementierungsregeln

<div class="box-warning" markdown="1">
**Achtung!**

- **Keine `async`-Overrides.** Alle Override-Methoden (`GetDefinitionOverride`, `GetColumnsOverride`, `GetItemsOverride`, `SetupOverride`, `ExecuteFunctionOverride`) müssen `protected` sein und dürfen **nicht** `async` sein. Asynchrone Arbeit muss innerhalb der Methode synchron aufgelöst werden (z.B. über `.Result` auf dem `Task`). Externe Aufrufe können in privaten `async`-Hilfsmethoden liegen, solange deren `Task` im Override synchron aufgelöst wird.
- **Keine unbehandelten Exceptions.** Umschließe `GetColumnsOverride`, `GetItemsOverride`, `SetupOverride` und `ExecuteFunctionOverride` vollständig mit `try/catch`. Wirf im `catch` niemals erneut (kein rethrow) – gib stattdessen einen sicheren Fallback-Wert zurück und nutze zusätzlich `Log.Error`.
- **Nur serialisierbare Werte.** Verwende in einem `CustomListObjectElement` ausschließlich einfache Typen (`String`, `Number`, `Boolean`), die zu den deklarierten `CustomListColumnTypes` passen. Lege keine komplexen Objekte (`JToken`/`JObject`/`JArray`/`Exception`) in die Zellen und vermeide `null` bei Strings – nutze stattdessen einen leeren String `""`.
</div>
