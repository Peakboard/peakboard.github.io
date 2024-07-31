---
layout: article
title: Drucken per Skript
menu_title: Drucken per Skript
description: Anleitung zum Drucken von Bildschirminhalten per  Skript.
lang: de
weight: 169
ref: scr-169
redirect_from:
---

Wenn der Inhalt oder Teile des Bildschirms gedruckt werden sollen, kann dafür die Druckfunktion per Skript aufgerufen werden.

Es gibt zwei Möglichkeiten: das Drucken des gesamten Bildschirminhalts oder das Drucken einer spezifischen Gruppe von Elementen.

## Drucken des gesamten Bildschirminhalts
Um den gesamten Bildschirminhalt zu drucken, kann die Methode `printscreenshot` verwendet werden. Alternativ steht auch der entsprechende Building Block zur Verfügung.

![Ganzen Bildschirminhalt drucken](/assets/images/scripting/Scripting_Beispiele/print/en-script-print-full-screen.png)

Der Aufruf der Methode im Skript sieht wie folgt aus:

```lua
runtime.printscreenshot()
```

## Drucken einer Gruppe von Elementen
Um nur bestimmte Elemente zu drucken, müssen diese zunächst in einer Gruppe zusammengefasst werden. Im Building Block kann dann die gewünschte Gruppe über das Dropdown-Menü ausgewählt werden.

![Gruppe drucken](/assets/images/scripting/Scripting_Beispiele/print/en-script-print-group.png)

Wird das Drucken per Skript realisiert, wird die Methode `print` der Gruppe aufgerufen. Das folgende Skript zeigt, wie die Gruppe `Group2` des Bildschirms `Screen1` gedruckt wird.

```lua
screens['Screen1'].groups['Group2'].print()
```