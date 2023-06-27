---
layout: article
title: Zeilen begrenzen
menu_title: Zeilen begrenzen
description: Zeilen begrenzen
lang: de
weight: 5000
ref: flow-5000
redirect_from:
  - /dataflows/60-de-zeilen-begrenzen.html
---
Du kannst mit diesem Schritt die Anzahl der Zeilen einer Tabelle auf drei Unterschiedliche Arten begrenzen:

* **Erste Zeilen auswählen** begrenzt die Tabelle auf die gewählte Anzahl der Zeilen von oben
* **Bereich auswählen** begrenzt die Tabelle auf die gewählte Anzahl der Zeilen ab einem definierten Index
* **Letzte Zeilen auswählen** begrenzt die Tabelle auf die gewählte Anzahl der Zeilen von unten

<div class="box-tip" markdown="1">
**Achtung**
Wenn du beispielsweise aus einer Tabelle von Artikeln und Umsatzdaten die drei umsatzstärksten Artikel filtern möchtest, dann musst du **VOR** dem Zeilenbegrenzungsschritt die korrekte Sortierung anwenden damit die gewünschten drei Zeilen ausgewählt werden.
</div>

![Bereich auswählen](/assets/images/dataflows/dataflows_select-range.gif)
