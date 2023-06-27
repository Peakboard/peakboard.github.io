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
## Aggregieren

Mit diesem Schritt aggregierst du die Werte einer oder mehrerer Spalten.

Daten zu aggregieren ist ein gängiger Anwendungsfall bei der Datenaufbereitung. Ein typisches Beispiel sind Verkaufsdaten mit einzelnen Transaktionen. Meist interessieren dich dabei einzelne, komprimierte Zahlen wie der gesamte Umsatz über alle Transaktionen oder die drei umsatzstärksten Kunden. Solche Verdichtungen kannst du mit dem Aggregieren-Schritt ausführen.

Im Dialog des Aggregieren-Schritts definierst du verschiedene Aggregierungsschritte mithilfe von Aggregierungsfunktionen. Dazu wählst du die mathematische Funktion die du ausführen möchtest sowie die Spalte mit der sie ausgeführt werden soll und gibst der Ergebnisspalte einen Namen.
Um eine weitere Funktion hinzuzufügen klickst du auf das Plus-Symbol.
Du kannst außerdem Aggregierungsgruppen bilden. Dazu wählst du optional Spalten aus um die Aggregation nach identischen Werten dieser Spalte zu gruppieren.

Folgende mathematische Funktionen sind möglich:

* **Min** - liefert den kleinsten Wert innerhalb der Aggregationsgruppe
* **Max** - liefert den größten Wert innerhalb der Aggregationsgruppe
* **Sum** - summiert alle Elemente der Grupe
* **Average** - errechnet den Durchschnitt
* **Count** - zählt alle Zeilen in einer Gruppe (und ist unabhängig einer bestimmten numerischen Spalte)
* **Distinct count** - zählt die distinkte Anzahl von Elementen. Wenn beispielsweise die Kundennummern 4711,4711,4712,4711 vorliegen, liefert die distinkte Zählung 2 zurück, da es zwei unterschiedliche Kundennummern gibt.

![Aggregieren](/assets/images/dataflows/dataflows_aggregate.gif)

## Akkumulieren

Mit diesem Schritt fügst du der Tabelle eine neue Spalte mit den kumulierten Werten einer zuvor gewählten Spalte hinzu.
Voraussetzung für diesen Schritt sind Spalten mit dem Datentyp [Number].

![Akkumulieren](/assets/images/dataflows/dataflows_accumulate.gif)
