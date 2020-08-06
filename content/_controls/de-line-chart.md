---
layout: article
title: Liniendiagramm
menu_title: Liniendiagramm
description: Information über Peakboard Designer Liniendiagramm Control.
lang: de
weight: 630
ref: con-630
redirect_from:
---

Das Liniendiagramm eignet sich um den funktionellen Zusammenhang zwischen zwei Werten abzubilden.

Neben den [Allgemeinen Eigenschaften](https://help.peakboard.com/controls/de-allgemeine-eigenschaften.html) verfügt das Liniendiagramm Control über weitere Eigenschaften.

Unter **Source** wird dem Chart eine Datenquelle zugewiesen.
Der **X axis** können Sie nun die für die Kategorie zuständige Spalte der Datenquelle zuweisen.
Die Daten hierfür müssen vom Datentyp *String* sein, während die Daten für die **Y axis** - die Zahlenwerte - vom Datentyp *Number* vorliegen müssen.

> ## Hinweis:
>
> Für die Y-Achse können nur Daten vom Typ **Number** verwendet werden!

![Line Chart](/assets/images/Controls/linechart/linechart01.png)

Nachdem die Daten zugewiesen wurden, kann unter **Colors** über die Schaltfläche **Select** das Farbschema angepasst werden.

![Line Chart Color](/assets/images/Controls/linechart/linechart02.png)

Hierbei können Sie entweder aus einer vordefiniereten Farbpalette auswählen oder eigene Farben vergeben.

**Show Legend** blendet die Legende ein bzw. aus.
**Show Label** blendet die Labels ein bzw. aus.
Über [Conditional Formatting](/controls/de-cf.html) kann das Control regelbasiert angepasst werden.
