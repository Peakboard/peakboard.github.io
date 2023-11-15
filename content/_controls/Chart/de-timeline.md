---
layout: article
title: Zeitachse
menu_title: Zeitachse
description: Information über das Peakboard Designer Zeitachse Control
lang: de
weight: 695
ref: con-695
redirect_from:
 - /controls/de-timeline-grid.html
 - /controls/Chart/de-timeline-grid.html
---

Die Idee der Zeitachse ist es, verschiedene Zustände in einem Zeitverlauf darzustellen. Du kannst dazu Daten nutzen, die entweder Zeitstempel oder eine Dauer enthalten.

Die Zeitachse kann beispielsweise für eine Maschine benutzt werden, die die Zustände *Rüsten* (01), *Produzieren* (02) und *Fehler* (03) hat.
Es soll eine Darstellung über die Zeit erfolgen, die die einzelnen Zustände übersichtlich zeigt.

## Datengrundlage

Als Datengrundlage dienen im folgenden Beispiel zwei statische Listen. Im realen Einsatz kann aber auch jede dynamische Datenquelle genutzt werden, deren Daten alle nötigen Informationen enthalten oder passend vorbereitet wurden.

Im Beispiel enthält die Liste [Timestamp] eine Spalte vom Datentyp Number mit den Zeitstempeln im Format HHmm. Die zweite Spalte vom Datentyp String enthält den jeweiligen Status (01-03) der an diesem Zeitstempel begonnen hat.

![Statische Liste Timestamp](/assets/images/Controls/TimelineGrid/de_timelinegrid-01.png)

Die Liste [Duration] enthält ebenfalls eine Spalte vom Datentyp Number. Diese enthält die Dauer wie lange die jeweiligen Status angehalten haben. Die zweite Spalte in dieser Liste vom Typ String enthält wie bei der ersten Liste wieder den jeweils zugehörigen Status (01-03).

![Statische Liste Duration](/assets/images/Controls/TimelineGrid/de_timelinegrid-02.png)

## Control hinzufügen und vorbereiten

Um die Zeitachse zu deinem Projekt hinzuzufügen, ziehst du sie per Drag-and-drop auf den Arbeitsbereich. Du findest die Zeitachse (1) im Bereich [Diagramme].

![Zeitachse hinzufügen](/assets/images/Controls/TimelineGrid/de_timelinegrid-03.png)

Wie du bereits an der Leer-Grafik des Controls erkennen kannst, benötigst du für die Verwendung der Zeitachse [eine Zeit-Datenquelle](/data_sources/de-datum-und-uhrzeit.html). Sie dient dazu, die aktuelle Zeit anzeigen zu können.
Im Bereich [Daten] kannst du sie unter [Aktuelle Zeit anzeigen] durch einen Klick auf das Verknüpfungs-Symbol (1) mit dem Zeitachse Control verknüpfen. Lege dort auch dein [Nachladeintervall] (2) in Sekunden fest.
Als Nächstes definierst du dann den Eingabetyp (3), den du für die Zeitachse verwenden möchtest.

![Zeitdatenquelle verknüpfen](/assets/images/Controls/TimelineGrid/de_timelinegrid-04.png)

## Eingabetyp: Timestamp

Hierbei handelt es sich um den Eingabetyp, der häufiger benutzt wird. Voraussetzung für die Nutzung ist eine Spalte mit Zeitstempeln in der Datenquelle. Mit dem Timestamp-Eingabetyp hast du die Möglichkeit, die Zeitachse zu begrenzen. So lassen sich beispielsweise Arbeitsschichten zwischen festgelegten Uhrzeiten darstellen.

Als erstes verknüpft du die Datenquelle mit dem Verknüpfen-Symbol (1) im Bereich [Zeitstempel Spalte] und wählst die Spalte aus, die die Zeitstempel enthält (2).

![Datenquelle Timestamp verknüpfen](/assets/images/Controls/TimelineGrid/de_timelinegrid-05.png)

Jetzt legst du im Bereich [Daten] unter [Datenformat] (1) fest, in welchem Format die Zeitstempel in der entsprechenden Spalte der Datenquelle vorliegen. Unter [Anzeigeformat] (2) legst du fest, in welchem Format die Daten später in der Zeitachse angezeigt werden sollen.

![Datentyp Timestamp](/assets/images/Controls/TimelineGrid/de_timelinegrid-06.png)

### Zeitachse begrenzen

Aktiviere nun die Option [Zeitachse begrenzen] (1) und wähle [Beginn] (2) und [Ende] (3) des Zeitintervalls, das angezeigt werden soll. Achte hierbei darauf, dass diese Angaben im gleichen Format wie das [Datenformat] erfolgen müssen, in unserem Fall also im Format HHmm.

Alternativ kannst du für den realen Einsatz mit einer dynamischen Datenquelle auch eine Variable vom Datentyp Number mit Berginn und Ende des Zeitintervalls verknüpfen.

![Zeitachse begrenzen](/assets/images/Controls/TimelineGrid/de_timelinegrid-07.png)

### Aussehen der Zeitachse festlegen

Um die verschiedenen Zustände darstellen zu können, legst du im Bereich [Aussehen] mit dem Button [Zeitachsenfarben bearbeiten] (1) fest, welche Farbe dem jeweiligen Zustand zugeordnet wird. Du kannst außerdem die [Leerfarbe] (2) definieren, falls diese nicht den Standardeinstellungen deines verwendeten Themes entsprechen soll.

Um im Dialog der Zeitachsenfarben deine Wunschfarben festzulegen, legst du dir für jeden Zustand mit dem Button [Neu] (3) eine neue Farbe (4) an und weist diese dem entsprechenden Zustand zu (5).

![Zeitachsenfarben festlegen](/assets/images/Controls/TimelineGrid/de_timelinegrid-08.png)

Neben den Zeitachsenfarben selbst kannst du im Bereich [Beschriftung] (1) noch festlegen, wie die Labels aussehen sollen und im Bereich [Hintergrund] (2) optische Optionen für den Hintergrund auswählen.

![Label und Hintergrund](/assets/images/Controls/TimelineGrid/de_timelinegrid-09.png)

## Eingabetyp: Duration

Die zweite Möglichkeit die Zeitachse darzustellen ist der Eingabetyp Duration. Für die Nutzung dessen benötigst du eine Spalte in der Datenquelle, die die Dauer des jeweiligen Zustands enthält. Dieser Eingabetyp kann in der Darstellung nicht begrenzt werden, es werden also alle erfassten Daten aus der Datenquelle in einer Gesamtdarstellung gezeigt. Die einzelnen Zeitabschnitte werden dabei ihrem Anteil an der Gesamtdauer aller Zeitabschnitte nach in der Zeitachse dargestellt. So lassen sich die prozentualen Verhältnisse der Zustände über die Gesamtdauer visuell darstellen.

Mit dem Verknüpfen-Symbol (1) im Bereich [Datenquelle] verbindest du die Datenquelle und wählst die Spalte aus, die die Dauer der Zustände enthält (2).

![Datenquelle Duration verknüpfen](/assets/images/Controls/TimelineGrid/de_timelinegrid-10.png)

Wechsle auf den Eingabetyp Duration (1). Wähle dann unter [Label] (2) aus, welche Spalte für die Beschriftung der Zustände genutzt werden soll.

Damit sind die Vorbereitungen für den Eingabetyp Duration abgeschlossen.

![Eingabetyp Duration](/assets/images/Controls/TimelineGrid/de_timelinegrid-11.png)

Gehe für das Aussehen der Zeitachse so vor wie beim Eingabetyp Timestamp beschrieben.

## Die fertigen Zeitachsen

Damit hast du die Einrichtung der Zeitachse abgeschlossen und kannst mit dem [Vorschau]-Button (1) die Anzeige der Zeitachse testen. Je nach gewähltem Datentyp und zugrunde liegender Datenquelle kann diese unterschiedlich aussehen.

![Vorschau](/assets/images/Controls/TimelineGrid/de_timelinegrid-12.png)
