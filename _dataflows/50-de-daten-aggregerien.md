---
layout: article
title: Daten aggregieren und verdichten
menu_title: Daten aggregieren und verdichten
description: Daten aggregieren und verdichten
lang: de
ref: flow-50
---
Daten zu aggregieren (bzw. zu verdichten, was dasselbe ist) ist ein absolut gängiger Anwendungsfall bei der Datenaufbereitung. Typische Beispiele sind Verkaufsdaten mit einzelnen Transaktionen. Die sind aber einzeln langweilig. Was den Betrachter später interessiert sind einzelne, komprimierte Zahlen wie der gesamte Umsatz über alle Transaktionen oder die drei umsatzstärksten Kunden. Genau solche Verdichtungen kann man mit dem Aggregate-Schritt machen.
Der folgende Dialog zeigt ein typisches Beispiel. Im oberen Bereich werden ein oder mehrere Aggregationsgruppen angeklickt. Das ist die Ebene, auf der die Aggregation erfolgen soll. Im Beispiel sind das die Spalten Material und Kunde. Wir werden später also Kennzahlen auf der Ebene von allen Kunde/Material-Kombinationen erhalten. Jede Kombination aus Kunde und Material ist im Ergebnis eindeutig.
Im unteren Bereich werden die Aggregationsfunktionen definiert. Das besteht in der Regel aus einer mathematischen Funktion und einer numerischen Spalte. Folgende Funktionen sind möglich:

* Min liefert den kleinsten Wert innerhalb der Aggregationsgruppe
* Max liefert den größten Wert innerhalb der Aggregationsgruppe
* sum summiert alle Elemente der Grupe
* Average errechnet den Durchschnitt
* Count zählt alle Zeilen in einer Gruppe (und ist unabhängig einer bestimmten numerischen Spalte)
* Count Distinct zählt die distinkte Anzahl von Elementen. Wenn Sie beispielsweise die Kundennummern 4711,4711,4712,4711 haben, liefert die distinkte Zählung 2 zurück, da es zwei unterschiedliche Kundennummern gibt.

![Join Data](/assets/images/dataflows/dataflows-join01.png)

Das Beispiel liefert uns also pro Material und Kunde jeweils die Summe aller verkauften Artikel, sowie den kleinsten und größten Umsatz der mit der jeweiligen Material/Kunden-Kombination in einer Einzeltransaktion gemacht wurde.

![Join Data](/assets/images/dataflows/dataflows-join02.png)

Achtung!! Es ist natürlich legitim, auch keine Gruppe anzugeben. In diesem Fall bekommen Sie genau eine Zeile zurück, die jeweils die Aggregation komplett über alle Daten enthält. Genauso ist es legitim, keine Aggregationsfunktion anzugeben. In diesem Fall erhalten Sie einfach nur die eindeutigen Kombinationen aus allen Elementen der gewählten Gruppe. Beide Fälle können in der Praxis Sinn ergeben.
