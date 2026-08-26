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

Mit der Option [Referenzspalte] wird pro Gruppe von Zeilen mit demselben Wert in dieser Spalte separat aufsummiert – zum Beispiel eine laufende Summe je Maschine. Ohne sie wird eine einzige laufende Summe über die gesamte Tabelle gebildet.

## Dauer

Dieser Schritt berechnet, wie lange jede Zeile gedauert hat – also die Zeit vom eigenen Zeitstempel bis zum Zeitstempel der folgenden Zeile. Das ist der übliche Weg, um aus einem Protokoll von Statuswechseln eine Tabelle mit Dauern zu machen, etwa um herauszufinden, wie lange eine Maschine stillstand.

Wähle unter [Zeitstempelspalte] die Spalte mit den Zeitstempeln und gib unter [Eingabeformat] an, wie die Werte geschrieben sind, falls sie nicht automatisch erkannt werden. Unter [Neuer Spaltenname] benennst du die berechnete Spalte.

Zwei Optionen verfeinern die Berechnung:

* **Referenzspalte:** Die Dauer wird separat je Gruppe von Zeilen mit demselben Wert in dieser Spalte gemessen – zum Beispiel je Maschine. Ohne sie wird die gesamte Tabelle als eine einzige Folge behandelt.
* **Offene Dauer bis jetzt:** Die letzte Zeile einer Gruppe hat keinen Nachfolger, ihre Dauer bliebe also leer. Aktivierst du diese Option und wählst eine Zeitdatenquelle, wird die Dauer dieser Zeile stattdessen bis zur aktuellen Zeit gemessen. Genau das hält einen noch laufenden Zustand auf einem Dashboard sichtbar.

Die Dauer wird immer von Zeile zu Zeile gemessen, die Zeilen müssen also nach Zeitstempel sortiert sein. Ist das nicht der Fall, warnt der Peakboard Designer und schlägt vor, davor einen Sortierschritt einzufügen.
