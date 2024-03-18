---
layout: article
title: Excel-Diagramm
menu_title: Excel-Diagramm
description: Information über Peakboard Designer Excel-Diagramm Control.
lang: de
weight: 680
ref: con-680
redirect_from:
 - /controls/12-de-excel-viewer.html
 - /controls/de-excel-viewer.html
---

Der Peakboard Designer bietet dir mit den [Diagrammen](/controls/Chart/de-chart.html), den [Gauge-Diagrammen](/controls/Chart/de-gauge.html), der [Signalleuchte](/controls/Chart/de-signal-lamp.html) und der [Zeitachse](/controls/Chart/de-timeline.html) zahlreiche Möglichkeiten, deine Daten in deine Anwendung einzubinden und darzustellen. Trotzdem kann es in manchen Fällen sinnvoll sein, anstelle der reinen Daten die gesamte Visualisierung zu importieren. Genau diese Möglichkeit bietet das Excel-Diagramm Control. Mit diesem Control kannst du ein bestehendes Diagramm aus einer Excel-Datei in deine Anwendung einbinden.

<div class="box-warning" markdown="1">
**Achtung!**

Prüfe vorab, ob es wirklich Sinn macht, Excel als Diagramm-Generator zu verwenden! Die technisch bessere Alternative ist es, die Rohdaten zu importieren und die Möglichkeiten des Peakboard Designers für die Darstellung zu nutzen.
</div>

## Excel-Diagramm hinzufügen

Ziehe das Control (1) per Drag-and-Drop auf die Arbeitsfläche und positioniere und skaliere es grob.
Mache dann einen Doppelklick auf das leere Control, um den Dialog zur Konfiguration zu öffnen.

![Control hinzufügen](/assets/images/Controls/Excel-Viewer/de-excel-viewer-01.png)

## Excel Ressource verknüpfen

Klicke auf den [Auswählen] (1) Button, um eine Excel [Ressource](/resources/de-resources-intro.html) auszuwählen. Hast du noch keine Ressource in deiner Anwendung, kannst du an dieser Stelle eine Ressource hinzufügen. Die ausgewählte Ressource muss die Daten für das Diagramm sowie das Diagramm selbst enthalten. Sind mehrere Diagramme enthalten, ist es wichtig zu wissen, welchen Namen das gewünschte Diagramm in der Excel Datei hat. Alternativ kannst du die Ressource schon vor dem Hinzufügen des Controls in deine Anwendung einbinden.

![Ressource auswählen](/assets/images/Controls/Excel-Viewer/de-excel-viewer-02.png)

Wähle mit dem Drop-down-Menü das gewünschte Arbeitsblatt (1) sowie das Diagramm (2) anhand seines Namens aus.
Definiere dann ein Nachladeintervall (3) für das Control.

![Diagramm auswählen](/assets/images/Controls/Excel-Viewer/de-excel-viewer-03.png)

<div class="box-tip" markdown="1">
**Hinweis:**

Das Diagramm entspricht aus technischen Gründen optisch nicht immer 1:1 der Vorlage aus der Excel-Datei.
</div>

## Attribute des Excel-Diagramm Controls

In den Attributen kannst du im Bereich [Daten] (1), alternativ zum Doppelklick auf das Control, erneut auf den Einstellungsdialog des Controls zugreifen. Im Bereich [Aussehen] kannst du definieren, wie der Hintergrund des Controls aussehen soll (2) und einen Schatten hinzufügen (3). Außerdem kannst du im Bereich [Text] (4) das Erscheinungsbild der Diagrammbeschriftungen anpassen. Standardmäßig werden diese von Excel festgelegt. Aktiviere die Checkbox [Standardwerte überschreiben] um selbst festzulegen welche Schriftarten im Diagramm für edie einzelnen Bereiche genutzt werden.

![Aussehen des Diagramms anpassen](/assets/images/Controls/Excel-Viewer/de-excel-viewer-04.png)
