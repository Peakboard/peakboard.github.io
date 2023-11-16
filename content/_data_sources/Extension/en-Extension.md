---
layout: article
title: Extension Basics
menu_title: Extension Basics
description: Basic information about the Peakboard Extension Kit
lang: en
weight: 700
ref: dat-700
redirect_from:
---

## The idea behind the Extension Kit

Peakboard offers extensive possibilities to connect to all possible data sources. However, it could still be that in one case or another the connection to the desired source is not possible or only possible with an unpleasantly large scripting effort. For this reason Peakboard offers the so-called Extension-Kit. This is a possibility to develop own data sources. This can be used either by the end customer directly, or by manufacturers of proprietary software solutions, who in turn want to give their customers an easy way to access their systems, although the native Peakboard designer does not support this data source.

## Architecture

The basis for an extension is always a C# .NET project that generates a classic .NET Dll. All interfaces to be implemented are located in the Dll Peakboard.ExtensionKit.Dll. The easiest way for referencing is by downloading the corresponding NuGet package in Visual Studio, or [here](https://www.nuget.org/packages/Peakboard.ExtensionKit/)
The project type in Visual Studio should be "Classic Library" with .NET Framework 4.6.2 or higher.

<div class="box-tip" markdown="1">
**Note!**

It is recommended at this point to rather use one of the examples as a template and modify it according to your own wishes than to build a Project from Scratch.
</div>

To actually use the extension you have to create a zip-file. This zip-file will be given to the user of the extension and must contain the following files:

- compiled Dll, which contains the extension code
- All referenced dependencies. This also applies to Win32 dlls if they are used in the project
- The Peakboard.ExtensionKit.dll must NOT be in the zip file
- All additional resources such as images etc.
- The extension.xml file that describes the extension

## Class architecture

To build an extension, at least two classes must be implemented. One that inherits from ExtensionBase and one that inherits from CustomListBase. The ExtensionBase class must then also reappear in the Extension.xml as an entry point.

## The Extension.xml file

It describes the metadata of the extension. The unique ID of the extension is important (simply meaningful name without special characters), the path is the name of the extension dll, and the extension class in the project with preceding namespace. Please copy an Extension.xml file from the examples and modify them accordingly. It makes no sense to write the xml by hand.
