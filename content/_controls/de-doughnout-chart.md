---
layout: article
title: Donut Chart
menu_title: Donut Chart
description: Information über Peakboard Designer Donut Chart Control.
lang: de
weight: 620
ref: con-620
redirect_from:
---

Das Donut Chart eignet sich für die Darstellung von Verteilungen und Anteilen.
Hierbei empfiehlt es sich, die Anzahl der Teile auf maximal 7 zu begrenzen, da das Diagramm sonst schnell unübersichtlich und die Teilbereiche zu klein werden.

Neben den [Allgemeinen Eigenschaften](https://help.peakboard.com/controls/de-allgemeine-eigenschaften.html) verfügt das Donut Chart Control über weitere Eigenschaften.

Unter **Source** wird dem Chart eine Datenquelle zugewiesen.
Der **X axis** können Sie nun die für die Kategorie zuständige Spalte der Datenquelle zuweisen.
Die Daten hierfür müssen vom Datentyp *String* sein, während die Daten für die **Y axis** - die Zahlenwerte - vom Datentyp *Number* vorliegen müssen.

> ## Hinweis:
>
> Für die Y-Achse können nur Daten vom Typ **Number** verwendet werden!

![Donut Chart](/assets/images/Controls/doughnutchart/doughnutchart01.png)

Nachdem die Daten zugewiesen wurden, kann unter **Colors** über die Schaltfläche **Select** das Farbschema angepasst werden.

![Donut Chart Color](/assets/images/Controls/doughnutchart/doughnutchart02.png)

Hierbei können Sie entweder aus einer vordefiniereten Farbpalette auswählen oder eigene Farben vergeben.

**Show Legend** blendet die Legende ein bzw. aus.
Über [Conditional Formatting](/controls/de-cf.html) kann das Control regelbasiert angepasst werden.

