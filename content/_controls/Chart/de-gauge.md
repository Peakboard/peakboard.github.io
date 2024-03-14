---
layout: article
title: Gauge-Diagramme Linear und Rund
menu_title: Gauge-Diagramme
description: Information über die Peakboard Designer Controls Gauge-Diagramm Linear und Gauge-Diagramm Rund.
lang: de
weight: 660
ref: con-660
redirect_from:
 - /controls/de-linear-gauge.html
 - /controls/de-circular-gauge.html
 - /controls/Chart/de-linear-gauge.html
 - /controls/Chart/de-circular-gauge.html
---

Mit den linearen und runden Gauge-Diagrammen kannst du einen Fortschritt, eine Auslastung oder ähnliche Zustände darstellen.

## Gauge Diagramm hinzufügen

Um eines der Gauge Diagramme zu deiner Anwendung hinzuzufügen, ziehe das Control (1) per Drag-and-drop auf die Arbeitsfläche. Der Dialog zur Konfiguration des Controls wird automatisch geöffnet.

![Control hinzufügen](/assets/images/Controls/gauge/de-gauge-01.png)

## Gauge Diagramm konfigurieren

Im geöffneten Dialog des Controls kannst du die ersten Grundeinstellungen vornehmen. Im linken Bereich des Dialogs (1) findest du die verfügbaren Tabs. Rechts kannst du die entsprechenden Einstellungen vornehmen (2). Der Tab Daten/Wert wird automatisch geöffnet.

![Dialog](/assets/images/Controls/gauge/de-gauge-02.png)

### Datenquelle mit Control verbinden

Im Tab Daten/Wert kannst du manuell einen Wert eintragen (1) oder eine Datenquelle mit Daten vom Datentyp Number mit dem Control verknüpfen. Dieser Wert wird dann live angezeigt.
Um die Datenquelle zu verknüpfen, wählst du sie aus dem Drop-down Menü [Name der Datenquelle] (2) aus. Wenn es sich um eine tabellarische Datenquelle handelt, wählst du die gewünschte Spalte (3) und Zeile (4) aus.

![Datenquelle verbinden](/assets/images/Controls/gauge/de-gauge-03.png)

### Minimum und/oder Maximum definieren

Um einen Fortschritt oder eine Auslastung darstellen zu können, benötigt das Control noch einen Minimal- und Maximalwert. Standardmäßig ist der Wert [0] für das Minimum definiert, der Wert [100] für das Maximum. Du kannst beide Werte über den jeweiligen Tab (1) entweder manuell ändern (2) oder eine Datenquelle verbinden (3). So kannst du beispielsweise den Soll-Wert einer Produktionsanlage als Variable für das Maximum verbinden und den Ist-Wert der Maschine als aktuellen Wert, um den Tagesfortschritt darzustellen.

![Minimum und Maximum](/assets/images/Controls/gauge/de-gauge-04.png)

### Titel und Untertitel vergeben

In den Tabs [Titel] (1) und [Untertitel] (2) kannst du dem Control entweder manuell oder durch Verknüpfen einer Datenquelle einen Titel und Untertitel geben.

![Titel und Untertitel](/assets/images/Controls/gauge/de-gauge-05.png)

## Aussehen des Controls in den Attributen anpassen

Um das Aussehen deines Gauge-Diagramms anzupassen, verlässt du den Konfigurationsdialog.
Du kannst die Größe des Diagramms durch Ziehen an den Ecken oder Seiten (1) des Controls oder in den Attributen im Bereich [Allgemeines] (2) anpassen. Dort kannst du auch Abstände für das Control festlegen und den zuvor im Dialog vergebenen Titel und Untertitel erneut anpassen. Alternativ kannst du einen Doppelklick auf das Diagramm machen, um den Dialog erneut zu öffnen.

Im Bereich [Daten] (3) kannst du die zuvor im Dialog vorgenommenen Einstellungen für [Daten/Wert] sowie das Minimum und Maximum anpassen.

![Allgemeines und Daten](/assets/images/Controls/gauge/de-gauge-06.png)

Im Bereich [Aussehen] kannst du dann die weiteren optischen Aspekte anpassen, wie beispielsweise das Aussehen des Balkens (1). Du kannst festlegen, ob und wie der Wert angezeigt werden soll (2) und wie der Hintergrund des Controls (3) gestaltet sein soll.
Beim Gauge-Diagramm Rund kannst du zusätzlich einen Zeiger einfügen und dessen Aussehen festlegen (4).

![Aussehen](/assets/images/Controls/gauge/de-gauge-07.png)

Im Bereich Logik kannst du das Control für Skripte verfügbar machen (1) und mit der bedingten Formatierung (2) die Eigenschaften des Controls regelbasiert anpassen, um beispielsweise Änderungen des Aussehens beim Erreichen von Schwellenwerten zu realisieren.

![Logik](/assets/images/Controls/gauge/de-gauge-08.png)
