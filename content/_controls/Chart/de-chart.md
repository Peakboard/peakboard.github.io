---
layout: article
title: Diagramm
menu_title: Diagramm
description: Information über das Diagramm Control.
lang: de
weight: 600
ref: con-600
redirect_from:
 - /controls/Chart/de-advanced-chart.html
---

Im Bereich Diagramme findest du verschiedene Arten von Diagrammen, die du für deine Anwendungen nutzen kannst.

* **Diagramm** - Eine Auswahl verschiedener Diagrammtypen, die in diesem Artikel beschrieben werden.
* **[Gauge-Diagramm Linear](/controls/Chart/de-linear-gauge.html)** - Ein Diagramm, mit dem du beispielsweise einen Fortschritt in linearer Form darstellen kannst
* **[Gauge-Diagramm Rund](/controls/Chart/de-circular-gauge.html)** - Ein Diagramm, mit dem du beispielsweise Auslastung in Kreisform darstellen kannst
* **[Signalleuchte](/controls/Chart/de-signal-block.html)** - Ein Signal, das mit einfachen Signalregeln gesteuert werden kann
* **[Zeitachse](/controls/Chart/de-timeline.html)** - Mit der Zeitachse kannst du verschiedene Zustände in einem Zeitverlauf darstellen
* **[Excel-Diagramm](/controls/Chart/de-excel-viewer.html)** - Mit dem Excel-Diagramm Control kannst du bestehende Diagramme aus Excel-Dateien direkt einbinden

## Ein Diagramm-Control zu deiner Anwendung hinzufügen

Um ein Diagramm hinzuzufügen, ziehst du das Control (1) per Drag-and-drop auf die Arbeitsfläche. Durch Ziehen an den Ecken und Seiten (2) kannst du die Positionierung bestimmen. Mache dann einen Doppelklick auf das Control, um in das Auswahlmenü für die verschiedenen Diagrammtypen zu gelangen. Alternativ klickst du auf den [Diagramm bearbeiten] Button (3) in den Attributen um in den Dialog zu gelangen.

![Diagramm-Control hinzufügen](/assets/images/Controls/Diagramm/de-diagramm_01.png)

## Einen Diagrammtyp auswählen

Im Auswahlfenster des Diagramm-Controls wählst du nun den ersten Diagrammtyp aus, den du hinzufügen möchtest.

![Diagrammtyp auswählen](/assets/images/Controls/Diagramm/de-diagramm_02.png)

Du kannst in einem Control [mehrere gleiche oder unterschiedliche Diagrammtypen überlagern](#serien) und an einer gemeinsamen Achse ausrichten. Die Daten, die du für das Diagramm nutzen möchtest, müssen zum gewählten Diagrammtyp passen. Du kannst deine Daten falls nötig [mit einem Dataflow vorbereiten](/dataflows/de-erste-schritte.html).

## Allgemeine Einstellungen für alle Diagrammtypen

Der Einstellungs-Dialog der verschiedenen Diagrammtypen ist zu großen Teilen identisch und unterscheidet sich nur durch einzelne, spezifische Einstellungsoptionen der Diagrammtypen.

Im linken Bereich des Dialogs findest du Menüpunkte zum Erstellen einer Legende (1) für das Diagramm-Control, sowie, falls für den Diagrammtyp anwendbar, die Menüpunkte für die Einstellung der Primär- (2) und Sekundärachse (3). Du kannst dort eine weitere Serie hinzufügen (4) und die bereits hinzugefügten Serien auswählen (5).

Im mittleren Bereich nimmst du die Einstellungen für die jeweils ausgewählte Serie vor. Es stehen die Tabs [Daten](#daten) (6), [Stil](#stil) (7), [Beschriftungen](#beschriftungen) (8) und [Erweitert](#erweitert) (9) zur Auswahl.

Im rechten Bereich siehst du eine Vorschau mit den vorliegenden Daten und gewählten Einstellungen. Dort kannst du mit der Checkbox (10) zwischen hellem und dunklem Hintergrund wechseln, um den Kontrast in deiner Anwendung besser einschätzen zu können.

![Einstellungs-Dialog](/assets/images/Controls/Diagramm/de-diagramm_03.png)

### Daten - Die Datenquelle für das Diagramm verknüpfen {#daten}

Verknüpfe im ersten Schritt im Tab [Daten] deine Datenquelle mit deiner gewählten Diagrammserie. Wähle dazu die Datenquelle über das Drop-down-Menü [Quelle] (1) aus. Die Inhalte der Datenquelle werden automatisch erkannt und du kannst diese über die weiteren Drop-down-Menüs (2) im Bereich [Daten] auswählen. Die Möglichkeiten unterscheiden sich je nach Diagrammtyp und erfordern eine entsprechende Struktur der Datenquelle.

<div class="box-tip" markdown="1">
**Hinweis:**

Für die x-Achse sind Werte mit dem Datentyp Number und String zulässig, für die y-Achse nur Werte vom Datentyp Number! Nutze [Dataflows](/dataflows/de-erste-schritte.html) um die gewünschte Spalte in den benötigten Datentyp zu ändern.
</div>

Im Bereich [Sortierung] kannst du festlegen, ob (3) und wie (4) die verknüpften Daten sortiert werden sollen.

Im Bereich [Legende] vergibst du einen Legende Namen (5) und legst das Legenden-Icon (6) fest. Je nach gewähltem Diagrammtyp kannst du in diesem Bereich auch weitere Einstellungen (7) wie Trendlinien und Schwellenwerte festlegen.

![Daten](/assets/images/Controls/Diagramm/de-diagramm_04.png)

### Stil - Farbliche Einstellungen für dein Diagramm vornehmen {#stil}

Im Tab [Stil] legst du die Farben, die in deinem Diagramm verwendet werden, fest.
Klicke dazu im Bereich [Diagrammfarben] den [Auswählen]-Button (1). Im nun geöffneten Dialog kannst du entweder aus vorgefertigten Farbpaletten auswählen, oder deine eigenen Wunschfarben definieren.
Mit der Checkbox (2) legst du fest, ob die Farben als Verläufe dargestellt werden sollen.

![Stil](/assets/images/Controls/Diagramm/de-diagramm_05.png)

Je nach gewähltem Diagrammtyp gibt es im Tab [Stil] noch weitere spezifische Einstellungsmöglichkeiten (3). So kannst du Beispielsweise Abstände zwischen Balken und Eckenradien für Balken erstellen, oder die gewählte Serie explodieren und so das Aussehen deines Diagramms weiter verfeinern.

### Beschriftungen - Label und Marker gestalten {#beschriftungen}

Im Tab [Beschriftungen] kannst du mit den Checkboxen wählen, ob [Label] (1) und [Marker] (2) für das aktuelle Diagramm angezeigt werden sollen.

Wird eine Checkbox aktiviert, werden die weiteren Einstellungsmöglichkeiten angezeigt.
Im Bereich [Label] kannst du Einstellungen für den Text (3), wie die verwendete Schriftart und das Format vornehmen. Hier stehen verschiedene Standard-Formate zur Auswahl, beispielsweise Währung oder Prozentzahlen. Du kannst die Position der Label definieren (4) und Konturen (5) und Verbindungslinien (6) hinzufügen. Im Bereich [Marker] legst du fest, wie die Markierungen von Werten im Diagramm aussehen sollen.

![Label und Marker](/assets/images/Controls/Diagramm/de-diagramm_06.png)

### Erweitert - Das Diagramm animieren {#erweitert}

Im Bereich erweitert kannst du die Animation des Diagramms per Checkbox (1) aktivieren oder deaktivieren und die Länge der Animation in Millisekunden festlegen (2).

![Animation](/assets/images/Controls/Diagramm/de-diagramm_07.png)

## Diagramme mit mehreren Serien {#serien}

Du kannst mehrere Serien in einem Diagramm kombinieren. Dabei kannst du sowohl gleiche Diagrammtypen, als auch teilweise unterschiedliche Diagrammtypen nutzen. Voraussetzung für die Kombination von mehreren Serien in einem Diagramm, sind gemeinsame Achsen. Dabei muss eine Achse identisch sein und die Werte der zweiten Achse sich in einem ähnlichen Bereich bewegen um eine sinnvolle Darstellung zu erreichen.

![Jahresvergleich](/assets/images/Controls/Diagramm/de-diagramm_08.png)

Bei diesem ersten Beispiel wurden mehrere Linien-Diagramme als Serien kombiniert um die Werte über mehrere Jahre zu vergleichen.
Die gemeinsame Achse sind die Monate, jedes Linien-Diagramm Serie entspricht den Werten eines Jahres und die Werte bewegen sich in einem ähnlichen Bereich.

Ein weiteres Beispiel für die Kombination von mehreren Serien sind die gestapelten Säulen und ähnliche gestapelte Diagramme.
Mit ihnen kannst du beispielsweise die Gesamtproduktion eines Tages anzeigen und gleichzeitig die Aufteilung auf mehrere Maschinen.

![Wochenproduktion](/assets/images/Controls/Diagramm/de-diagramm_09.png)

Die gemeinsame Achse sind dabei die Wochentage. Die Anteile der einzelnen Maschinen sind die verwendeten Serien. Diese werden aufeinander gestapelt und zeigen somit auf einen Blick sowohl die gesamte produzierte Menge, als auch die Aufteilung auf die unterschiedlichen Maschinen.
