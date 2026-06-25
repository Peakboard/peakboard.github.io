---
layout: article
title: Extension Basics
menu_title: Extension Basics
description: Grundlegende Informationen zum Peakboard Extension Kit und zur Entwicklung von Extensions auf .NET 8
lang: de
weight: 700
ref: dat-700
redirect_from:
---

## Die Idee hinter dem Extension Kit

Peakboard bietet umfangreiche Möglichkeiten, um sich mit den verschiedensten Datenquellen zu verbinden. Trotzdem kann es im Einzelfall vorkommen, dass die Verbindung zur gewünschten Quelle gar nicht oder nur mit unangenehm hohem Skriptaufwand möglich ist. Genau dafür bietet Peakboard das sogenannte Extension Kit – eine Möglichkeit, eigene Datenquellen zu entwickeln. Extensions können entweder direkt vom Endkunden genutzt werden oder von Herstellern proprietärer Softwarelösungen, die ihren Kunden einen einfachen Zugriff auf ihre Systeme ermöglichen möchten, obwohl der Peakboard Designer diese Datenquelle nativ nicht unterstützt.

## Architektur

Eine Extension ist immer eine **C#-Klassenbibliothek**, die eine `.dll` erzeugt. Alle Schnittstellen und Basisklassen, die du implementierst, befinden sich im Paket `Peakboard.ExtensionKit`. Am einfachsten bindest du es über das NuGet-Paket [Peakboard.ExtensionKit](https://www.nuget.org/packages/Peakboard.ExtensionKit/) ein.

<div class="box-warning" markdown="1">
**Wichtig – nur noch .NET 8**

Ab Peakboard Version 4.0.0.0 laufen der Peakboard Designer und die Peakboard Runtime auf **.NET 8**. Das klassische **.NET Framework wird nicht mehr unterstützt**. Erstelle deine Extension als Klassenbibliothek mit dem Zielframework `net8.0` und referenziere `Peakboard.ExtensionKit` in Version `4.0.0` oder höher.
</div>

<div class="box-tip" markdown="1">
**Hinweis!**

Es empfiehlt sich, eines der Beispiele aus unserem [GitHub-Repository](https://github.com/Peakboard/PeakboardExtensions) als Vorlage zu verwenden und nach den eigenen Wünschen anzupassen, anstatt ein Projekt komplett von Grund auf neu zu bauen.
</div>

## Projektdatei (.csproj)

Der folgende Ausschnitt zeigt die minimal erforderliche Konfiguration der Projektdatei, damit der Peakboard Designer die kompilierte Assembly dynamisch laden kann:

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

| Eigenschaft / Item | Zweck |
|---|---|
| `<TargetFramework>net8.0</TargetFramework>` | Zielframework .NET 8. Muss zum Framework des Peakboard Designers und der Peakboard Box passen. |
| `<Platforms>x64</Platforms>` / `<PlatformTarget>x64</PlatformTarget>` | Peakboard läuft als 64-Bit-Anwendung. |
| `<EnableDynamicLoading>true</EnableDynamicLoading>` | Entscheidend, damit Peakboard die kompilierte `.dll` dynamisch laden kann. |
| `Content Include="Extension.xml"` | Stellt sicher, dass die erforderliche Manifestdatei neben der Ausgabe-DLL landet. |
| Paket `Peakboard.ExtensionKit` | Liefert die Basisklassen (`ExtensionBase`, `CustomListBase`, …). `<Private>false</Private>` und `<ExcludeAssets>runtime</ExcludeAssets>` halten die DLLs des Kits aus der Build-Ausgabe heraus – sie sind in der Peakboard-Umgebung bereits vorhanden. Es wird nur deine eigene Extension-DLL ausgeliefert. |

## Die Manifestdatei Extension.xml

`Extension.xml` ist das verpflichtende Manifest, das der Peakboard Designer liest, um die Extension zu finden und zu laden. Es muss im Ausgabeverzeichnis des Projekts liegen (das übernimmt der `Content`-Eintrag oben):

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

| Attribut | Beschreibung | Beispiel |
|---|---|---|
| `ID` | Eindeutiger Bezeichner der Extension (sprechender Name ohne Sonderzeichen). | `HubSpot` |
| `Version` | Versionsnummer der Extension. | `1.0` |
| `Path` | Dateiname der kompilierten Assembly. | `HubSpot.dll` |
| `Class` | **Wichtig:** der voll qualifizierte Name der Hauptklasse, `Namespace.Klassenname`. | `HubSpot.HubSpotExtension` |

## Klassenarchitektur

Für eine Extension müssen mindestens zwei Klassen implementiert werden:

- eine, die von [`ExtensionBase`](/data_sources/Extension/de-Classes.html) erbt – der in der `Extension.xml` referenzierte Einstiegspunkt,
- eine oder mehrere, die von [`CustomListBase`](/data_sources/Extension/de-DatasourceNoUI.html) erben – jede repräsentiert eine Datenquelle.

## Build und Auslieferung

Baue das Projekt in der Konfiguration **Release**. Die Ausgabe liegt anschließend in `bin/Release/net8.0/`.

Zum Ausliefern komprimierst du den relevanten Inhalt dieses Ausgabeordners in eine **ZIP-Datei** – genau diese importiert der Peakboard Designer. Die ZIP-Datei muss enthalten:

- deine kompilierte Assembly (z.B. `HubSpot.dll`),
- das Manifest `Extension.xml`,
- alle Fremd-Abhängigkeiten, die **nicht** Teil des Extension Kits sind (z.B. `Newtonsoft.Json.dll`).

Die `Peakboard.ExtensionKit.dll` selbst darf **nicht** in der ZIP-Datei enthalten sein. Erstelle nach jeder Änderung und jedem erfolgreichen Build ein neues Archiv, um die aktualisierte Version auszuliefern. Wie du die ZIP-Datei in den Designer importierst, beschreibt der Artikel [Extensions verwalten](/data_sources/Extension/de-ManageExtension.html).

<div class="box-warning" markdown="1">
**Achtung!**

An der Peakboard Box muss nichts angepasst werden. Die Extension wird zusammen mit dem Dashboard automatisch auf die Peakboard Box ausgerollt.
</div>
