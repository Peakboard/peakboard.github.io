---
layout: article
title: Creating a simple data source without UI
menu_title: Create a simple data source without UI
description: Information about creating a simple data source without UI
lang: en
weight: 730
ref: dat-730
redirect_from:
---


The following explanations refer to an example that can be downloaded [here](https://github.com/Peakboard/PeakboardExtensions/tree/master/Samples/AirportConditions).

Classes that inherit from CustomListBase represent a data source. The individual functions to be overwritten are explained below:

```C#
GetDefinitionOverride returns the metadata for the data source.
        protected override CustomListDefinition GetDefinitionOverride()
        {
            return new CustomListDefinition
            {
                ID = $"CatFactsCustomList"
                Name = "Cat Facts",
                Description = "Random cute stuff about cats", 
                PropertyInputPossible = true,
                PropertyInputDefaults = {
                    new CustomListPropertyDefinition(){ Name = "MaxLength", Value = "140"}
                }
            };
        }
```

Properties are particularly important in this respect. The collection of properties represents the settings that the end user can make later in the UI of the Designer. The code from above looks as follows later in the UI:
![img01](/assets/images/data-sources/extension/PeakboardExtension_user_property.png)

A property can have the following attributes:

- Name
- Value - the default value
- MultiLine - Gives the user a large text field (e.g. for SQL statements)
- Masked - hides the value from the user (e.g. for passwords)
CheckDataOverride is called if the end user has entered data that should be checked for plausibility.

```C#
        protected override void CheckDataOverride(CustomListData data)
        {
            if ( data.Properties.TryGetValue("MaxLength", StringComparison.OrdinalIgnoreCase, out var MaxLength))
            {
                throw new InvalidOperationException("The property MaxLength is not defined");
            }
        }
```

GetColumnsOverride is called when the designer needs metadata to react to the columns in the visualization or UI.

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

GetItemsOverride is called when the actual data exchange is to take place. As in the following example, a collection is returned from CustomListObjectElement. Each CustomListObjectElement consists of the column names and the actual values.

```C#
        protected override CustomListObjectElementCollection GetItemsOverride(CustomListData data)
        {
            Int32 maxLength = CheckAndGetMaxLengthProperty(data);
            CatFact myfact = GetRandomCatfact(maxLength).result;
            var items = new CustomListObjectElementCollection();
            items.add(new CustomListObjectElement { { "Fact", myfact.fact }, { "Length", myfact.length }, });
            return items;
        }
```
