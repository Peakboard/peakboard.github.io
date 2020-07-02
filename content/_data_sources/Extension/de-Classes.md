---
layout: article
title: Hauptklasse ExtensionBase
menu_title: Hauptklasse ExtensionBase
description: Informationen über die Hauptklasse ExtensionBase
lang: de
weight: 2610
ref: dat-2610
redirect_from:
---

Die folgenden Erklärungen beziehen sich auf ein Beispiel, dass [hier](https://github.com/Peakboard/PeakboardExtensions/tree/master/Samples/AirportConditions) heruntergeladen werden kann.

Innerhalb der Extension erbt die Hauptklasse von der Vaterklasse ExtensionBase und repräsentiert die Extension selbst, inbesondere die Metadaten.
Die zu überschreibende Methode GetDefinitionOverride liefert die Metadaten zurück:
```
        protected override ExtensionDefinition GetDefinitionOverride()
        {
            // Create the extension definition
            return new ExtensionDefinition
            {
                ID = "AirportCondition", // Must be unqiue over all extensions, so may use a namespace notation
                Name = "Airport Weather Condition",
                Description = "This is a sample implementation for using UI in a Peakboard Extension",
                Version = "1.0",
                Author = "Gustavo Fring",
                Company = "Los Pollos Hermanos, Inc.",
                Copyright = "Copyright © Los Pollos Hermanos, Inc",
            };
        }
```

Die Methode GetCustomListsOverride liefert Referenzen auf alle einzelnen Datenquellen der Extension. In den meisten Fällen ist das genau Eine, es könnte aber auch mehrere Datenquellen pro Extension geben:
```
        protected override CustomListCollection GetCustomListsOverride()
        {
            return new CustomListCollection
            {
                new AirportConditionCustomList(),
            };
        }
```

Falls gewünscht kann über ein Attribut der Verweis auf eine Bild-Datei angeben werden, die im Designer-Menü als Icon genutzt wird:
```
    [ExtensionIcon("PeakboardExtensionAirportConditions.airplane.png")]
    public class AirportConditionExtension : ExtensionBase
```



