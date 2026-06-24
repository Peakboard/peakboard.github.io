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

In der Kategorie **Zeilen begrenzen** des Auswahldialogs für Dataflow-Schritte findest du den Schritt, mit dem du die Anzahl der Zeilen einer Tabelle einschränkst. Wie du grundsätzlich einen Dataflow anlegst und Schritte hinzufügst, erfährst du in den [ersten Schritten mit Dataflows](/dataflows/de-erste-schritte.html).

Wähle im Feld [Select rows from] (1), von wo aus die Zeilen ausgewählt werden, und gib unter [Amount of rows] (2) die gewünschte Anzahl an. Es stehen drei Modi zur Verfügung:

* **Top** begrenzt die Tabelle auf die gewählte Anzahl der Zeilen von oben.
* **Range** begrenzt die Tabelle auf die gewählte Anzahl der Zeilen ab einem definierten Startpunkt.
* **Last** begrenzt die Tabelle auf die gewählte Anzahl der Zeilen von unten.

![Zeilen begrenzen](/assets/images/dataflows/limit-rows/limit-rows-01-select-rows.png)

<div class="box-tip" markdown="1">
**Achtung**
Wenn du beispielsweise aus einer Tabelle von Artikeln und Umsatzdaten die drei umsatzstärksten Artikel filtern möchtest, dann musst du **VOR** dem Zeilenbegrenzungsschritt die korrekte Sortierung anwenden, damit die gewünschten drei Zeilen ausgewählt werden.
</div>
