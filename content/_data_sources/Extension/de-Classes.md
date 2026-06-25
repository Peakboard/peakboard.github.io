---
layout: article
title: Hauptklasse ExtensionBase
menu_title: Hauptklasse ExtensionBase
description: Informationen zur Hauptklasse ExtensionBase einer Extension
lang: de
weight: 720
ref: dat-720
redirect_from:
---

Innerhalb einer Extension erbt die Hauptklasse von `Peakboard.ExtensionKit.ExtensionBase`. Sie repräsentiert die Extension selbst – vor allem deren Metadaten – und registriert die angebotenen Datenquellen. Genau diese Klasse wird im Attribut `Class` der [Extension.xml](/data_sources/Extension/de-Extension.html) referenziert.

## Erforderliche Konstruktoren

Damit die Extension vom Peakboard Designer korrekt geladen wird, muss die Hauptklasse die folgenden beiden öffentlichen Konstruktoren bereitstellen, die jeweils den passenden Basiskonstruktor aufrufen:

```csharp
using Peakboard.ExtensionKit;

namespace HubSpot;

// Dieser Klassenname wird im Attribut 'Class' der Extension.xml referenziert
public class HubSpotExtension : ExtensionBase
{
    // 1. Parameterloser Konstruktor
    public HubSpotExtension()
        : base()
    {
    }

    // 2. Konstruktor mit IExtensionHost
    public HubSpotExtension(IExtensionHost host)
        : base(host)
    {
    }

    // ... Overrides (siehe unten)
}
```

## Metadaten: GetDefinitionOverride

Die überschriebene Methode `GetDefinitionOverride` liefert die Metadaten der Extension als `ExtensionDefinition` zurück:

```csharp
protected override ExtensionDefinition GetDefinitionOverride()
{
    return new ExtensionDefinition
    {
        ID = "HubSpot",   // muss über alle Extensions hinweg eindeutig sein
        Name = "HubSpot API Extension",
        Description = "Interface with the HubSpot API to get all tickets",
        Version = "1.0",
        Author = "Makhsum",
        Company = "Peakboard"
    };
}
```

## Datenquellen registrieren: GetCustomListsOverride

Die Methode `GetCustomListsOverride` liefert Referenzen auf alle einzelnen Datenquellen ([Custom Lists](/data_sources/Extension/de-DatasourceNoUI.html)) der Extension zurück. In den meisten Fällen ist das genau eine, eine Extension kann aber auch mehrere Datenquellen bereitstellen:

```csharp
protected override CustomListCollection GetCustomListsOverride()
{
    return
    [
        new HubSpotCustomList(),
    ];
}
```
