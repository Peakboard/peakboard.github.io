---
layout: article
title: Berechnungen
menu_title: Berechnungen
description: Berechnungen
lang: de
weight: 6000
ref: flow-6000
redirect_from:
  - /dataflows/50-de-daten-aggregerien.html
  - /dataflows/de-daten-aggregerien.html
---

In der Kategorie **Berechnungen** des Auswahldialogs für Dataflow-Schritte findest du die Schritte, mit denen du Werte verdichtest und fortlaufend berechnest: Daten aggregieren oder eine Spalte kumulieren. Wie du grundsätzlich einen Dataflow anlegst und Schritte hinzufügst, erfährst du in den [ersten Schritten mit Dataflows](/dataflows/de-erste-schritte.html).

## Aggregieren

Mit diesem Schritt aggregierst du die Werte einer oder mehrerer Spalten. Daten zu aggregieren ist ein gängiger Anwendungsfall bei der Datenaufbereitung. Ein typisches Beispiel sind Verkaufsdaten mit einzelnen Transaktionen. Meist interessieren dich dabei einzelne, komprimierte Zahlen wie der gesamte Umsatz über alle Transaktionen oder die drei umsatzstärksten Kunden.

Wähle pro Aggregierung im Feld [Aggregation] (1) die mathematische Funktion, im Feld [Column] (2) die Spalte, auf die sie angewendet wird, und vergib unter [New column name] (3) einen Namen für die Ergebnisspalte. Über den Button [+] (4) fügst du eine weitere Aggregierung hinzu. Mit [Group aggregation] (5) wählst du optional eine oder mehrere Spalten, um die Aggregation nach identischen Werten dieser Spalten zu gruppieren. Enthält die Datenquelle eine Spalte mit Zeitstempeln, aktivierst du [Time based aggregation] (6) und aggregierst die Daten nach einem definierten Zeitintervall.

![Aggregieren](/assets/images/dataflows/calculations/calculations-01-aggregate.png)

Folgende mathematische Funktionen sind möglich:

* **Min** - liefert den kleinsten Wert innerhalb der Aggregationsgruppe
* **Max** - liefert den größten Wert innerhalb der Aggregationsgruppe
* **Sum** - summiert alle Elemente der Gruppe
* **Average** - errechnet den Durchschnitt
* **Count** - zählt alle Zeilen in einer Gruppe (und ist unabhängig von einer bestimmten numerischen Spalte)
* **Distinct count** - zählt die distinkte Anzahl von Elementen. Wenn beispielsweise die Kundennummern 4711, 4711, 4712, 4711 vorliegen, liefert die distinkte Zählung 2 zurück, da es zwei unterschiedliche Kundennummern gibt.

## Akkumulieren

Mit diesem Schritt fügst du der Tabelle eine neue Spalte mit den kumulierten (fortlaufend aufsummierten) Werten einer zuvor gewählten Spalte hinzu. Wähle im Feld [Columns] (1) die zu kumulierende Spalte und vergib unter [New column name] (2) einen Namen für die Ergebnisspalte. Voraussetzung für diesen Schritt sind Spalten mit dem Datentyp Number.

![Akkumulieren](/assets/images/dataflows/calculations/calculations-02-accumulate.png)
