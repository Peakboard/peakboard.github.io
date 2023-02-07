---
layout: article
title: Datum und Uhrzeit
menu_title: Datum und Uhrzeit
description: Informationen über Zeit- und Datumsangaben in Peakboard
lang: de
weight: 300
ref: dat-300
redirect_from:
  - /data_sources/02-de-datum-und-uhrzeit.html
---

Im Peakboard Designer hast du die Möglichkeit, Datum und Uhrzeit als Datenquelle einzubinden.
Diese Datenquelle ist nicht tabellarisch, sondern nur ein skalarer Einzelwert.

Über die Format-Angabe wird definiert, wie die Zeit bzw. das Datum oder eine Kombination daraus dargestellt werden soll.
Die einzelnen Formatkomponenten kannst du der Tabelle unten entnehmen.
Für den Fall, dass du eine andere Zeitzone als CET zur Zeitberechnung nutzen möchtest, steht die entsprechende Combo-Box zur Verfügung.

Die Zeitdatenquelle bietet neben der Anzeige von Datum und Uhrzeit auch die Möglichkeit, Daten anhand eines aktuellen Zeitstempels anzuzeigen.

## Zeitserver Peakboard Box (Zeitserver für die Peakboard Box)

Beim erstmaligen Hinzufügen einer Peakboard Box zum Peakboard Designer, wirst du aufgefordert einen Zeitserver zu hinterlegen. Dieser Zeitserver ist unter anderem für den Validierungsprozess der Zertifikate auf der Peakboard Box zuständig.

Den Zeitserver kannst du in den Peakboard Box-Einstellungen ändern.
Im Reiter [Peakboard Box Prüfung] (1) deiner Peakboard Box findest du im Bereich System den Eintrag [Zeitserver].
Durch einen Klick auf das Zahnrad-Symbol (2) öffnest du den Dialog zur Auswahl von Zeitserver und Zeitzone.

![Zeitserver](/assets/images/data-sources/date-and-time/de_timeserver.png)

Die Zeitdatenquelle lässt sich wie jede andere Datenquelle über [Datenquelle hinzufügen] und anschließend [Zeit] (3) anlegen.

![Zeitdatenquelle](/assets/images/data-sources/date-and-time/de_timedatasource_01.png)

Zeitsprünge (Addition oder Subtraktion) können direkt in der Zeitdatenquelle ausgeführt werden (4). Dies ist beispielsweise dann hilfreich, wenn immer die Daten der letzten 8 Stunden angezeigt werden sollen.

![Zeitdatenquelle](/assets/images/data-sources/date-and-time/de_timedatasource_02.png)

Die folgende Animation zeigt, wie die Zeit per Drag and Drop auf dem Screen verwendet werden kann. 

![Zeitdatenquelle](/assets/images/data-sources/date-and-time/de_timedatasource_03.gif)

Alternativ lässt sich die Datenquelle, wie jede andere Datenquelle auch, an Controls binden oder per Skript nutzen.
Im Control-Editor kann über Format das Anzeigeformat für ein deutsch- oder englischsprachiges Layout angepasst oder ein eigenes Format (5) angelegt werden.

![Zeitdatenquelle](/assets/images/data-sources/date-and-time/de_timedatasource_04.png)

In der Preview werden jetzt das aktuelle Datum und die Uhrzeit angezeigt.

![Zeitdatenquelle](/assets/images/data-sources/date-and-time/timedatasource_05.png)

Platzhalter für den Format-String:

```
HH: Stunde (00 – 24)
hh: Stunde (00 – 12)
mm: Minute
ss: Sekunde
dd: Tag
MM: Monat (Zahl) z.B. 11
MMMM: Monat (Text) z.B. November
yy: zweistelliges Jahr z.B. 89
yyyy: vierstelliges Jahr z.B. 1989
```