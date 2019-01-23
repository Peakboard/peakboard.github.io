---
layout: article
title: Google Spreadsheets
menu_title: Google Spreadsheets
description: Google Spreadsheets
lang: de
ref: dat-30
---
Die Google Spreadsheets Datenquelle dient dazu, tabellarische Daten aus Google Spreadsheets abzugreifen, um sie dann in Peakboard weiterzuverwenden wie jede andere Datenquelle auch.

## Authorisieren des Zugriffs auf Google

Neben dem obligatorischen Namen der Datenquelle ist zunächst eine Verbindung zu einem Google Account herzustellen. Das geschieht über den Authorize Knopf. Es öffnet sich ein Anmeldefenster, in dem der Google Account angegeben werden muss. Peakboard als Applikation muss dann das Recht erhalten, auf Spreadsheets lesend zuzugreifen. Das funktioniert exakt so, wie bei jedem anderen Drittanbieter-Zugriff auch. Username und Passwort haben eigentlich gar keine Berührung mit dem Peakboard-Designer. Es wird nur ein Token generiert, ins Paket abgelegt und später mit auf die Box übertragen. Sie können diese Genehmigung für den Zugriff auch wieder innerhalb Ihres Google-Kontos widerrufen, falls das notwendig wäre.

![image_1](/assets/images/Data_Sources/GoogleSpreadsheets/SpeadsheetsSource01.png)

## Einrichten des Spreadsheets-Zugriffs

Der Knopf mit den drei Punkten erlaubt das Browsen durch die Google-Drive-Ordnerstruktur, die die Spreadsheets enthalten. Nach der Auswahl mit dem Doppelklick wird der Pfad und Dateiname ins entsprechende Textfeld übernommen und das gewünschte Sheet kann gewählt werden.
Um nun den richtigen Abschnitt aus den Tabellenblättern als Datengrundlage zu wählen, sind folgende Einstellungen möglich:

*    **Column Names in 1st Row** bedeutet, dass die Spalteninhalte der ersten Zeile als Überschriften für die Ausgabespalten verwendet werden.
*    **Switch Rows and Columns** behandelt die Zeilen und Spalten jeweils umgekehrt, so wie eine Pivottabelle.
*    **Select all** bedeutet, dass alle Daten eines Sheets selektiert werden (und nicht nur ein bestimmter Abschnitt).
*    **Range:** Dieser Wert kann angegeben werden, falls nur ein bestimmter Abschnitt des Sheets gelesen werden soll. Die Notation ist wie üblich in Excel z.B. A5:C26.
*    **Max Items** definiert, wieviele Zeilen maximal gelesen werden (unter der Voraussetzungen, dass KEINE Range angegeben ist).
*    **Reload Interval** ist der übliche Zeitabschnitt für das automatische Nachladen der Daten in Sekunden.

Ein Klick auf Load Data zeigt im Preview die Daten gemäß den Einstellungen an und aktualisiert die Metadaten in der Spalten-Liste.

![image_1](/assets/images/Data_Sources/GoogleSpreadsheets/SpeadsheetsSource02.png)