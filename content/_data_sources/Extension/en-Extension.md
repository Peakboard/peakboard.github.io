---
layout: article
title: Extension Basics
menu_title: Extension Basics
description: Basic information about the Peakboard Extension Kit and building extensions on .NET 8
lang: en
weight: 700
ref: dat-700
redirect_from:
---

## The idea behind the Extension Kit

Peakboard offers extensive possibilities to connect to all kinds of data sources. Still, in one case or another a connection to the desired source might not be possible out of the box, or only with an unpleasantly large scripting effort. For exactly this reason Peakboard offers the so-called Extension Kit – a way to develop your own data sources. Extensions can be used either by the end customer directly, or by manufacturers of proprietary software solutions who want to give their customers an easy way to access their systems, even though the native Peakboard Designer does not support that data source.

## Architecture

An extension is always a **C# class library** that produces a `.dll`. All interfaces and base classes you implement live in the `Peakboard.ExtensionKit` package. The easiest way to reference it is the NuGet package [Peakboard.ExtensionKit](https://www.nuget.org/packages/Peakboard.ExtensionKit/).

<div class="box-warning" markdown="1">
**Important – .NET 8 only**

As of Peakboard version 4.0.0.0, the Peakboard Designer and the Peakboard Runtime run on **.NET 8**. The classic **.NET Framework is no longer supported**. Build your extension as a class library targeting `net8.0` and reference `Peakboard.ExtensionKit` version `4.0.0` or higher.
</div>

<div class="box-tip" markdown="1">
**Note!**

It is recommended to use one of the examples from our [GitHub repository](https://github.com/Peakboard/PeakboardExtensions) as a template and modify it to your needs, rather than building a project from scratch.
</div>

## Project file (.csproj)

The following snippet is the minimum required configuration for the project file so that the Peakboard Designer can load the compiled assembly dynamically:

```xml
<Project Sdk="Microsoft.NET.Sdk">

  <PropertyGroup>
    <TargetFramework>net8.0</TargetFramework>
    <Platforms>x64</Platforms>
    <PlatformTarget>x64</PlatformTarget>
    <ImplicitUsings>enable</ImplicitUsings>
    <EnableDynamicLoading>true</EnableDynamicLoading>
  </PropertyGroup>

  <ItemGroup>
    <Content Include="Extension.xml" CopyToOutputDirectory="PreserveNewest" />
  </ItemGroup>

  <ItemGroup>
    <PackageReference Include="Newtonsoft.Json" Version="13.0.3" />
    <PackageReference Include="Peakboard.ExtensionKit" Version="4.0.0">
      <Private>false</Private>
      <ExcludeAssets>runtime</ExcludeAssets>
    </PackageReference>
  </ItemGroup>

</Project>
```

| Property / Item | Purpose |
|---|---|
| `<TargetFramework>net8.0</TargetFramework>` | Targets .NET 8. Must match the framework supported by the Peakboard Designer and Peakboard Box. |
| `<Platforms>x64</Platforms>` / `<PlatformTarget>x64</PlatformTarget>` | Peakboard runs as a 64-bit application. |
| `<EnableDynamicLoading>true</EnableDynamicLoading>` | Crucial so Peakboard can load the compiled `.dll` dynamically. |
| `Content Include="Extension.xml"` | Ensures the required manifest is placed next to the output DLL. |
| `Peakboard.ExtensionKit` package | Provides the base classes (`ExtensionBase`, `CustomListBase`, …). `<Private>false</Private>` and `<ExcludeAssets>runtime</ExcludeAssets>` keep the kit's DLLs out of your build output – they already exist in the Peakboard environment. Only your own extension DLL is deployed. |

## The Extension.xml manifest

`Extension.xml` is the mandatory manifest that the Peakboard Designer reads to locate and load the extension. It must end up in the project's output directory (handled by the `Content` entry above):

```xml
<?xml version="1.0" encoding="utf-8" ?>
<ExtensionCatalog xmlns="http://schemas.peakboard.com/pbmx/2020/extensions">
  <Extensions>
    <Extension
        ID="HubSpot"
        Version="1.0"
        Path="HubSpot.dll"
        Class="HubSpot.HubSpotExtension"
        Parameters="" />
  </Extensions>
</ExtensionCatalog>
```

| Attribute | Description | Example |
|---|---|---|
| `ID` | A unique identifier for the extension (a meaningful name without special characters). | `HubSpot` |
| `Version` | The version number of the extension. | `1.0` |
| `Path` | The filename of the compiled assembly. | `HubSpot.dll` |
| `Class` | **Critical:** the fully qualified name of the main extension class, `Namespace.ClassName`. | `HubSpot.HubSpotExtension` |

## Class architecture

To build an extension, at least two classes must be implemented:

- one that inherits from [`ExtensionBase`](/data_sources/Extension/en-Classes.html) – the entry point referenced in `Extension.xml`,
- one or more that inherit from [`CustomListBase`](/data_sources/Extension/en-DatasourceNoUI.html) – each representing one data source.

## Build and deployment

Build the project in **Release** configuration. The output is placed in `bin/Release/net8.0/`.

To deploy the extension, compress the relevant contents of that output folder into a **ZIP file**, which is what the Peakboard Designer imports. The ZIP must contain:

- your compiled assembly (e.g. `HubSpot.dll`),
- the `Extension.xml` manifest,
- any third-party dependencies that are **not** part of the Extension Kit (e.g. `Newtonsoft.Json.dll`).

The `Peakboard.ExtensionKit.dll` itself must **not** be included in the ZIP. After every change and successful build, create a new archive to deploy the updated version. How to import the ZIP into the Designer is described under [Manage extensions](/data_sources/Extension/en-ManageExtension.html).

<div class="box-warning" markdown="1">
**Caution!**

It is not necessary to modify the Peakboard Box in any way. The extension is automatically deployed onto the Peakboard Box together with the dashboard.
</div>
