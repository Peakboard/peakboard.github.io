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

Die Zeitdatenquelle bietet neben der Anzeige von Datum und Uhrzeit auch die Möglichkeit, Daten anhand eines aktuellen Zeitstempels anzuzeigen. Damit die Zeitdatenquelle funktioniert, musst du zunächst einen Zeitserver als Referenz für die Datenquelle hinterlegen.

<div class="box-tip" markdown="1">**Hinweis**
Aktuell gibt es zwei Orte, an denen ein Zeitserver hinterlegt werden muss!
</div>


## Zeitserver Peakboard Projekt (Zeitserver für die Visualisierung)

Standardmäßig greift die Zeitdatenquelle auf den Windows-Zeitserver im Internet zu (konkret auf time.windows.com). 
Sollte das nicht gewünscht sein oder die Peakboard Box in einem Netz ohne Internetzugang betrieben werden, kann sich die Datenquelle die Zeit auch von einem netzinternen Zeitserver holen. 
Dafür klickst du im Tab [Start] auf [Projekt] und wählst [Projektinfos] (1) aus. 

![Projektinfos](/assets/images/data-sources/date-and-time/de_projectinfo.png)

Im geöffneten Dialogfeld [Projekt bearbeiten] gibst du die IP-Adresse oder den Host-Namen des Zeitservers in das entsprechende Textfeld (2) ein.

![Zeitserver](/assets/images/data-sources/date-and-time/de_timeserver.png)


## Zeitserver Peakboard Box (Zeitserver für die Peakboard Box)

Beim erstmaligen Hinzufügen einer Peakboard Box zum Peakboard Designer, wirst du aufgefordert einen Zeitserver zu hinterlegen. Dieser Zeitserver ist für den Validierungsprozess der Zertifikate auf der Peakboard Box zuständig. 

<div class="box-tip" markdown="1">**Tipp**
Findest du im Log deiner Peakboard Box den Eintrag:
[Could not connect to timeserver times.windows.com], so wurde der Zeitserver für das Peakboard Projekt nicht gesetzt!
</div>

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

![Zeitdatenquelle](/assets/images/data-sources/date-and-time/de_timedatasource_05.png)

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