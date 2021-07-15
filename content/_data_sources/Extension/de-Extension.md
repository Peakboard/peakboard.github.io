---
layout: article
title: Extension Basics
menu_title: Extension Basics
description: Grundlagen für das Extension Kit
lang: de
weight: 2600
ref: dat-2600
redirect_from:
---

### Die Idee hinter dem Extension Kit
Peakboard bietet umfangreiche Möglichkeiten die verschiedensten Datenquellen anzubinden. 
Sollte deine Datenquelle nicht dabei sein oder wäre der Skritping Aufwand zu groß, dann bietet dir das Extension-Kit eine einfache Möglichkeit, eigene Datenquellen zu entwickeln. 
Sowohl für den Endkunden als auch für Hersteller von proprietären Software-Lösungen, die wiederum ihren Kunden eine einfache Möglichkeit bieten wollen, auf ihre Systeme zuzugreifen.

### Architektur
Basis für eine Extension ist immer ein C#-.NET-Projekt, das eine klassische .NET-Dll erzeugt. Alle zu implementierenden Schnittstellen befinden sich in der Dll Peakboard.ExtensionKit.Dll. Die einfachste Möglichkeit für das Referenzieren, ist durch das Herunterladen des entsprechenden NuGet-Packages in Visual Studio, oder [unter diesem Link](https://www.nuget.org/packages/Peakboard.ExtensionKit/).
Der Projekttyp in Visual Studio sollte “Classic Library” sein mit .NET Framework 4.6.2 oder höher. 

<div class="box-tip" markdown="1">
**Tipp:**

Wir empfehlen eines der Beispiele als Vorlage zu verwenden und nach deinen Wünschen zu modifizieren.
</div>

Erstelle nun ein zip-File, das an den Benutzer der Extension weitergegeben wird und folgende Dateien enthält, dabei darf die Peakboard.ExtensionKit.dll **NICHT** in der zip-File enthalten sein.:
* Kompilierte Dll, die den Extension-Code enthält
* Alle referenzierten Abhängigkeiten. Das gilt auch für Win32-Dlls, falls sie im Projekt verwendet werden
* Die Peakboard.ExtensionKit.dll darf NICHT in der zip-File sein
* Alle zusätzlichen Ressourcen wie Bilder u.Ä.
* Die Extension.xml-Datei, die die Extension beschreibt

### Klassenarchitektur
Um eine Extension zu bauen, sind mindestens zwei Klassen zu implementieren. 
Eine, die von ExtensionBase erbt und eine, die von CustomListBase erbt. 
Die ExtensionBase-Klasse bildet somit den Einstiegspunkt in der Extension.xml. 

### Die Extension.xml-Datei
Sie beschreibt die Metadaten der Extension. 
Wähle dazu am besten einen aussagekräftigen Namen ohne Sonderzeichen. 
Trage bei [Pfad / Path] den Namen der Extension-Dll und im Projekt die [Extension Class] mit vorangestelltem Namespace ein.

<div class="box-tip" markdown="1">
**Tipp:**

Am besten kopierst du dir einfach eine Extension.xml-Datei aus unseren Beispielen und modifizierst sie.
</div>

