---
layout: article
title: Main class ExtensionBase
menu_title: Main class ExtensionBase
description: Information about the main extension class ExtensionBase
lang: en
weight: 720
ref: dat-720
redirect_from:
---

Within an extension, the main class inherits from `Peakboard.ExtensionKit.ExtensionBase`. It represents the extension itself – above all its metadata – and registers the data sources it offers. This is the class that is referenced in the `Class` attribute of the [Extension.xml](/data_sources/Extension/en-Extension.html).

## Required constructors

For the extension to be loaded correctly by the Peakboard Designer, the main class must provide the following two public constructors that call the corresponding base constructors:

```csharp
using Peakboard.ExtensionKit;

namespace HubSpot;

// This class name is referenced in the Extension.xml 'Class' attribute
public class HubSpotExtension : ExtensionBase
{
    // 1. Parameterless constructor
    public HubSpotExtension()
        : base()
    {
    }

    // 2. Constructor with IExtensionHost
    public HubSpotExtension(IExtensionHost host)
        : base(host)
    {
    }

    // ... overrides (see below)
}
```

## Metadata: GetDefinitionOverride

The overridden `GetDefinitionOverride` method returns the metadata of the extension as an `ExtensionDefinition`:

```csharp
protected override ExtensionDefinition GetDefinitionOverride()
{
    return new ExtensionDefinition
    {
        ID = "HubSpot",   // must be unique across all extensions
        Name = "HubSpot API Extension",
        Description = "Interface with the HubSpot API to get all tickets",
        Version = "1.0",
        Author = "Makhsum",
        Company = "Peakboard"
    };
}
```

## Registering data sources: GetCustomListsOverride

The `GetCustomListsOverride` method returns references to all individual data sources ([Custom Lists](/data_sources/Extension/en-DatasourceNoUI.html)) of the extension. In most cases this is exactly one, but an extension can also provide several data sources:

```csharp
protected override CustomListCollection GetCustomListsOverride()
{
    return
    [
        new HubSpotCustomList(),
    ];
}
```

## Extension icon (optional)

Optionally you can give the extension an icon that the Peakboard Designer displays in its menu. The image must be **embedded into the assembly as a resource**, and the `[ExtensionIcon]` attribute on the main class references it by its **fully qualified manifest resource name** – the project's default namespace followed by the file path, separated by dots:

```csharp
[ExtensionIcon("HubSpot.icon.png")]
public class HubSpotExtension : ExtensionBase
{
    // ... constructors and overrides
}
```

For this to work, include the image as an embedded resource in your `.csproj`:

```xml
<ItemGroup>
  <EmbeddedResource Include="icon.png" />
</ItemGroup>
```

In this example the default namespace is `HubSpot` and `icon.png` lies in the project root, so the resource name is `HubSpot.icon.png`. If the image is placed in a sub-folder (e.g. `Resources/icon.png`), the folder becomes part of the resource name (`HubSpot.Resources.icon.png`).
