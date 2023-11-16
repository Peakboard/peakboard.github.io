---
layout: article
title: Erstellen einer einfachen Datenquelle ohne UI
menu_title: Erstellen einer einfachen Datenquelle ohne UI
description: Informationen über das Erstellen einer einfachen Datenquelle ohne UI
lang: de
weight: 730
ref: dat-730
redirect_from:
---


Die folgenden Erklärungen beziehen sich auf ein Beispiel, dass [hier](https://github.com/Peakboard/PeakboardExtensions/tree/master/Samples/AirportConditions) heruntergeladen werden kann.

Klassen, die von CustomListBase erben, repräsentieren eine Datenquelle. Im Folgenden werden die einzelnen, zu überschreibenden Funktionen erklärt:

```C#
GetDefinitionOverride liefert die Metadaten für die Datenquelle.
        protected override CustomListDefinition GetDefinitionOverride()
        {
            return new CustomListDefinition
            {
                ID = $"CatFactsCustomList",
                Name = "Cat Facts",
                Description = "Random cute stuff about cats", 
                PropertyInputPossible = true,
                PropertyInputDefaults = {
                    new CustomListPropertyDefinition(){ Name = "MaxLength", Value = "140"}
                }
            };
        }
```

Dabei sind insbesondere die Properties wichtig. Die Collection an Properties repräsentiert die Einstellungen, die der Enduser später in der UI des Designers vornehmen kann. Der Code von oben sieht später in der UI wie folgt aus:
![img01](/assets/images/data-sources/extension/PeakboardExtension_user_property.png)

Folgende Attribute kann eine Property haben:

- Name
- Value - der Defaultwert
- MultiLine - Gibt dem User ein großes Textfeld (z.B. für SQL-Statements)
- Masked - verbirgt dem User den Wert (z.B. für Passwörter)
CheckDataOverride wird aufgerufen, wenn der Enduser Daten eingeben hat, die auf Plausibilität geprüft werden sollen.

```C#
        protected override void CheckDataOverride(CustomListData data)
        {
            if (!data.Properties.TryGetValue("MaxLength", StringComparison.OrdinalIgnoreCase, out var MaxLength))
            {
                throw new InvalidOperationException("The property MaxLength is not defined");
            }
        }
```

GetColumnsOverride wird gerufen, wenn der Designer Metadaten benötigt, um in der Visualisierung oder der UI auf die Spalten zu reagieren.

```C#
        protected override CustomListColumnCollection GetColumnsOverride(CustomListData data)
        {
            return new CustomListColumnCollection
            {
                new CustomListColumn("Fact", CustomListColumnTypes.String),
                new CustomListColumn("Length", CustomListColumnTypes.Number),
            };
        }
```

GetItemsOverride wird aufgerufen, wenn der tatsächliche Datenaustausch stattfinden soll. Wie im folgenden Beispiel wird eine Collection aus CustomListObjectElement zurückgegeben. Jedes CustomListObjectElement besteht aus den Spaltennamen und den tatsächlichen Werten.

```C#
        protected override CustomListObjectElementCollection GetItemsOverride(CustomListData data)
        {
            Int32 maxLength = CheckAndGetMaxLengthProperty(data);
            CatFact myfact = GetRandomCatfact(maxLength).Result;
            var items = new CustomListObjectElementCollection();
            items.Add(new CustomListObjectElement { { "Fact", myfact.fact }, { "Length", myfact.length }, });
            return items;
        }
```
