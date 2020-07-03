---
layout: article
title: Main class ExtensionBase
menu_title: Main class ExtensionBase
description: Information about the main class ExtensionBase
lang: en
weight: 2610
ref: dat-2610
redirect_from:
---

The following explanations refer to an example that can be downloaded [here](https://github.com/Peakboard/PeakboardExtensions/tree/master/Samples/AirportConditions).

Within the extension, the main class inherits from the parent class ExtensionBase and represents the extension itself, especially the metadata.
The method GetDefinitionOverride to be overwritten returns the metadata:

``cs
        protected override ExtensionDefinition GetDefinitionOverride()
        {
            // Create the extension definition
            return new ExtensionDefinition
            {
                ID = "AirportCondition", // Must be unqiue over all extensions, so may use a namespace notation
                Name = "Airport Weather Condition",
                Description = "This is a sample implementation for using UI in a Peakboard Extension
                Version = "1.0",
                Author = "Gustavo Fring"
                Company = "Los Pollos Hermanos, Inc."
                Copyright = "Copyright © Los Pollos Hermanos, Inc."
            };
        }
```

The GetCustomListsOverride method returns references to all individual data sources of the extension. In most cases, this is exactly one, but there could also be multiple data sources per extension:
``cs
        protected override CustomListCollection GetCustomListsOverride()
        {
            return new CustomListCollection
            {
                new AirportConditionCustomList(),
            };
        }
```

If desired, an attribute can be used to specify the reference to an image file that is used as an icon in the Designer menu:
``cs
    [ExtensionIcon("PeakboardExtensionAirportConditions.airplane.png")]
    public class AirportConditionExtension : ExtensionBase
```
