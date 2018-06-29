---
layout: article
title: Peakboard.io Table
menu_title:  Peakboard.io Table
description: Information über Peakbaord.io Table Daten in Peakboard
lang: de
ref: dat-23
---
Innerhalb des [Peakboard.io-Portals](http://peakboard.io/) haben Sie die Möglichkeit, Tabellenobjekte zu pflegen. Diese Tabellen können dann ganz normal im Designer wie andere Datenquellen eingebunden werden. Bitte beachten Sie die [Einführung zur Benutzung des Portals](/peakboardio/01-de-einfuehrung-und-ubersicht.html) und den API-Key, um auf Peaboard.io-Objekte zuzugreifen.

Um eine Peakboard.io-Tabelle zu nutzen, legen Sie bitte eine entsprechende Datenquelle an (ggfs. muss zuerst noch der Benutzername und der API-Key eingegeben werden). Sie muss wie üblich mit einem eindeutigen Namen benannt werden. Die Auswahlbox zeigt alle Tabellen, die mit dem angegebenen API-Key (und dessen Account) verknüpft sind. Max Items ist die maximale Anzahl der Zeilen, die geholt werden. Reload Interval gibt das Zeitintervall in Sekunden an, wie oft die Daten auf Aktualität geprüft werden.

Klicken Sie abschließend auf Load Data. Es öffnet sich das Preview-Fenster und zeigt die Daten an. Nach dem Schließen des Preview-Fensters ist die Tabelle mit den Spaltenangaben gefüllt und die Datenquelle kann ab sofort benutzt werden. Bitte beachten Sie, dass die Datentypen (also zum Beispiel String als Zeichenfolge oder Integer als Nummer) in die entsprechenden Datentypen in Peakboard umgesetzt werden. Die Typinformation bleibt also erhalten.

![Add Peakboard.io Table Data Dialog](/assets/images/data-sources/peakboard-io/datasource-peakboardio-table-01.png)
