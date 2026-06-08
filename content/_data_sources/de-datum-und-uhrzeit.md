---
layout: article
title: Datum und Uhrzeit
menu_title: Datum und Uhrzeit
description: Informationen über Zeit- und Datumsangaben in Peakboard
lang: de
weight: 400
ref: dat-400
redirect_from:
  - /data_sources/02-de-datum-und-uhrzeit.html
---

Im Peakboard Designer steht dir Datum und Uhrzeit als eigene Datenquelle zur Verfügung. Die Datenquelle ist nicht tabellarisch, sondern ein skalarer Einzelwert, dessen Format und Zeitzone du selbst festlegen kannst.

## Standard-Datenquelle DateTime

Jedes neue Peakboard Projekt enthält bereits eine Datenquelle [DateTime] (1) unter dem Knoten [Data] im Explorer. Du musst also keine eigene Datenquelle anlegen, wenn du nur die aktuelle Uhrzeit oder das aktuelle Datum anzeigen möchtest – du kannst diese Datenquelle direkt per Drag-and-drop auf den Screen ziehen oder im Skript verwenden.

![Standard-Datenquelle DateTime im Explorer](/assets/images/data-sources/date-and-time/datetime-01-default-explorer.png)

Bei Bedarf kannst du zusätzliche Zeitdatenquellen anlegen – etwa um parallel ein anderes Format, eine andere Zeitzone oder einen Zeitversatz (zum Beispiel "vor 8 Stunden") zu verwenden. In den meisten Anwendungsfällen reicht aber die vorhandene Standard-Datenquelle aus.

## Weitere Zeitdatenquelle hinzufügen

Möchtest du eine zusätzliche Zeitdatenquelle anlegen, klickst du mit der rechten Maustaste auf [Data] und wählst [Add data source]. Im folgenden Dialog wählst du die Datenquelle [Time] (1) aus.

![Time Datenquelle hinzufügen](/assets/images/data-sources/date-and-time/datetime-02-add.png)

## Datenquelle konfigurieren

Im Dialog [Add time data] vergibst du der Datenquelle einen Namen (1). Über das Feld [Format] (2) legst du fest, wie Datum und Uhrzeit dargestellt werden sollen – du kannst aus den vordefinierten Formaten wählen oder ein eigenes Format eingeben. Im Feld [Timezone] (3) wählst du die gewünschte Zeitzone aus, sofern du eine andere als die Standard-Zeitzone des Systems verwenden möchtest.

Mit der Checkbox [Add or subtract time] (4) aktivierst du den Zeitversatz. Im Raster darunter trägst du je Spalte Jahre, Monate, Tage, Stunden, Minuten oder Sekunden ein. Negative Werte verschieben den Zeitwert in die Vergangenheit – `Hours = -8` liefert beispielsweise immer den Zeitpunkt vor 8 Stunden.

![Time Datenquelle konfigurieren](/assets/images/data-sources/date-and-time/datetime-03-config.png)

## Format wählen

Die Combo-Box [Format] enthält die gängigen Datums- und Uhrzeitformate (1). Über die Schreibweise im Feld kannst du auch ein eigenes Format eingeben, das aus den unten aufgeführten Platzhaltern zusammengesetzt ist.

![Format-Auswahl der Time Datenquelle](/assets/images/data-sources/date-and-time/datetime-04-format.png)

Platzhalter für den Format-String:

```html
HH: Stunde (00 – 24)
hh: Stunde (00 – 12)
mm: Minute
ss: Sekunde
dd: Tag
MM: Monat (Zahl) z.B. 11
MMMM: Monat (Text) z.B. November
yy: zweistelliges Jahr z.B. 89
yyyy: vierstelliges Jahr z.B. 1989
tt: AM/PM Kennzeichner
```

Mit einem Klick auf [OK] legst du die zusätzliche Zeitdatenquelle an. Sie erscheint anschließend wie die Standard-Datenquelle im Explorer unter [Data] und kann wie jede andere Datenquelle per Drag-and-drop auf Controls gezogen oder per Skript verwendet werden.

## Zeitserver Peakboard Box

Beim erstmaligen Hinzufügen einer Peakboard Box zum Peakboard Designer wirst du aufgefordert, einen Zeitserver zu hinterlegen. Dieser Zeitserver ist unter anderem für den Validierungsprozess der Zertifikate auf der Peakboard Box zuständig.

Den Zeitserver kannst du in den Peakboard Box Einstellungen ändern. Im Reiter [Peakboard Box Prüfung] (1) deiner Peakboard Box findest du im Bereich System den Eintrag [Zeitserver]. Durch einen Klick auf das Zahnrad-Symbol (2) öffnest du den Dialog zur Auswahl von Zeitserver und Zeitzone.

![Zeitserver](/assets/images/data-sources/date-and-time/de_timeserver.png)

### Fix für Zeit-Synchronisationsfehler

Manchmal kann es vorkommen, dass sich die Zeit nicht korrekt synchronisieren lässt. Um dieses Problem zu beheben, musst du die Art der Kommunikation zwischen Windows und dem NTP (Network Time Protocol) in den Client-Mode umstellen.

Um diese Änderung vorzunehmen, musst du beim Einrichten in den Peakboard Box Einstellungen hinter der URL oder IP des Zeitservers den folgenden Parameter hinzufügen: `,0x8`

![Client-Mode Parameter](/assets/images/data-sources/date-and-time/de_timedatasource_06.png)
