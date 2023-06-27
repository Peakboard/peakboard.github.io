---
layout: article
title: Filtern und sortieren
menu_title: Filtern und sortieren
description: Filtern und sortieren
lang: de
weight: 3000
ref: flow-3000
redirect_from:
  - /dataflows/30-de-daten-filtern.html
  - /dataflows/de-daten-filtern.html
---
## Filter

Mit diesem Schritt filterst du die Tabelle mittels einer in einem Skript definierten Logik.

Wenn du beispielsweise Lagertransaktionsdaten aus einem Vorsystem für zwei Lagerbereiche bekommst, aber beide Bereiche separat betrachten willst (zum Beispiel mit einer Auslastungskennzahl für den einen und den anderen Bereich), legst du zwei Dataflows an und entfernst gleich zu Beginn die Daten des jeweils anderen Bereichs per Filter. So machst du aus einer gemischten Datenquelle zwei Separate.

![Filter](/assets/images/dataflows/dataflows_filter.gif)

## Sortieren

Mit diesem Schritt sortierst du die Tabelle anhand einer oder mehreren Spalten.

![Sortieren](/assets/images/dataflows/dataflows_sort.gif)

## Filter nach Datums-/Zeitspalten

Mit diesem Schritt filterst du die Tabelle nach einer Zeitdatenquelle, vorausgesetzt die Tabelle verfügt über eine Spalte mit Datums- oder Zeitwerten. Voraussetzung für diesen Schritt ist außerdem der Spaltentyp String.

![Filter nach Datums-/Zeitspalten](/assets/images/dataflows/dataflows_filter-date-time.gif)

## Duplikate entfernen

Mit diesem Schritt entfernst du Duplikate anhand einer Spalte.

![Duplikate entfernen](/assets/images/dataflows/dataflows_remove-duplicates.gif)
