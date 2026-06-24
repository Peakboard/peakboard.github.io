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

In der Kategorie **Filtern und sortieren** des Auswahldialogs für Dataflow-Schritte findest du alle Schritte, mit denen du die Zeilen deiner Tabelle einschränkst und ordnest: nach Bedingungen filtern, nach Spalten sortieren, nach Datums- und Zeitwerten filtern oder Duplikate entfernen. Wie du grundsätzlich einen Dataflow anlegst und Schritte hinzufügst, erfährst du in den [ersten Schritten mit Dataflows](/dataflows/de-erste-schritte.html).

## Filter

Mit diesem Schritt filterst du die Tabelle anhand einer oder mehrerer Bedingungen. Wähle über [Add first filter] die zu prüfende Spalte (1), dann den Operator (2) und gib den Vergleichswert (3) an. Über [Add AND condition] und [Add OR block] verknüpfst du mehrere Bedingungen miteinander. Möchtest du eine komplexere Logik formulieren, wechselst du über [Use script editor] (4) in den Skript-Editor und definierst die Filterlogik per Skript.

Wenn du beispielsweise Lagertransaktionsdaten aus einem Vorsystem für zwei Lagerbereiche bekommst, aber beide Bereiche separat betrachten willst (zum Beispiel mit einer Auslastungskennzahl für den einen und den anderen Bereich), legst du zwei Dataflows an und entfernst gleich zu Beginn die Daten des jeweils anderen Bereichs per Filter. So machst du aus einer gemischten Datenquelle zwei separate.

![Filter](/assets/images/dataflows/filter-and-sort/filter-and-sort-01-filter.png)

## Sortieren

Mit diesem Schritt sortierst du die Tabelle anhand einer oder mehrerer Spalten. Kreuze in der Liste [Columns] (1) die Spalten an, nach denen sortiert werden soll. Jede ausgewählte Spalte erscheint im Bereich [Column sort order], wo du über das Auswahlfeld (2) zwischen [Ascending] (aufsteigend) und [Descending] (absteigend) wählst. Die Reihenfolge mehrerer Sortierspalten änderst du per Drag-and-drop.

![Sortieren](/assets/images/dataflows/filter-and-sort/filter-and-sort-02-sort.png)

## Filter nach Datums-/Zeitspalten

Mit diesem Schritt filterst du die Tabelle nach Datums- oder Zeitwerten. Wähle die [Date/time column] (1), die gefiltert werden soll, und gib im [Input format] (2) an, in welchem Format die Werte als Zeichenfolge vorliegen, damit sie korrekt interpretiert werden. Lege anschließend den Operator (3) und den Vergleichswert (4) fest – dieser kann eine andere Spalte oder ein fixer Wert sein. Mit der Option [Ignore time] (5) berücksichtigst du nur den Datums- und nicht den Zeitanteil. Voraussetzung für diesen Schritt ist der Spaltentyp String.

![Filter nach Datums-/Zeitspalten](/assets/images/dataflows/filter-and-sort/filter-and-sort-03-filter-date-time.png)

## Duplikate entfernen

Mit diesem Schritt entfernst du Duplikate aus der Tabelle. Wähle im Feld [Columns] (1) die Spalte, anhand derer Duplikate erkannt werden sollen. Von Zeilen mit identischem Wert in dieser Spalte bleibt jeweils nur die erste erhalten.

![Duplikate entfernen](/assets/images/dataflows/filter-and-sort/filter-and-sort-04-remove-duplicates.png)
