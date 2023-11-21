---
layout: article
title: Google Tabellen
menu_title: Google Tabellen
description: Google Tabellen
lang: de
weight: 1000
ref: dat-1000
redirect_from:
  - /data_sources/30-de-google-spreadsheets.html
---

Die Google Tabellen Datenquelle dient dazu, tabellarische Daten aus Google Tabellen abzugreifen, um sie dann in Peakboard weiterzuverwenden.

Um die Datenquelle hinzuzufügen, mache einen Rechtsklick auf [Daten] oder klicke alternativ auf den [...]-Button und wähle dann [Datenquelle hinzufügen] und [Google Tabellen] (1).

![Datenquelle hinzufügen](/assets/images/data-sources/google/de_google-01.png)

## Autorisieren des Zugriffs auf Google

Gib der Datenquelle einen Namen (1). Danach musst du eine Verbindung zu einem Google Account herzustellen.
Klicke dazu den [Autorisieren]-Button (2).

![Google autorisieren](/assets/images/data-sources/google/de_google-02.png)

Es öffnet sich ein Anmeldefenster, in dem du deine Google Zugangsdaten eingeben musst. Der Peakboard Designer erhält damit das Recht als Applikation auf Tabellen lesend zuzugreifen. Username und Passwort werden nicht im Peakboard Designer gespeichert. Es wird ein Token generiert den du ins Projekt ablegst und der später mit auf die Peakboard Box übertragen wird. Du kannst diesen Token für den Zugriff jederzeit innerhalb deines Google-Kontos widerrufen. Kopiere den erzeugten Token (1).

![Token kopieren](/assets/images/data-sources/google/de_google-03.png)

Füge den Token im Peakboard Designer ein und bestätige die Autorisierung (1).

![Token einfügen](/assets/images/data-sources/google/de_google-04.png)

## Einrichten des Tabellen-Zugriffs

Der [...]-Button (1) erlaubt das Browsen durch die Google-Drive-Ordnerstruktur, die die Tabellen enthält.
Nach der Auswahl mit einem Doppelklick wird der Pfad und Dateiname in das entsprechende Textfeld übernommen.

Um nun den richtigen Abschnitt aus den Tabellenblättern als Datengrundlage zu wählen, sind folgende Einstellungen möglich:

* **Arbeitsblatt** (2) hiermit definierst du welches Arbeitsblatt aus dem gewählten Dokument verwendet werden soll wenn mehrere vorhanden sind.
* **Alle auswählen** (3) bedeutet, dass alle Daten eines Arbeitsblattes selektiert werden und nicht nur ein bestimmter Abschnitt.
* **Bereich** (4) Diesen Wert kannst du angeben, wenn nur ein bestimmter Abschnitt des Arbeitsblattes gelesen werden soll. Die Notation ist wie üblich in Excel z.B. A5:C26.
* **Max. Zeilen** (5) definiert, wieviele Zeilen maximal gelesen werden, unter der Voraussetzungen, dass **kein** Bereich angegeben ist.
* **Spaltennamen in der ersten Zeile** (6) bedeutet, dass die Spalteninhalte der ersten Zeile als Überschriften für die Ausgabespalten verwendet werden.
* **Zeilen und Spalten tauschen** (7) behandelt die Zeilen und Spalten jeweils umgekehrt, so wie eine Pivottabelle.

Mit dem [Nachladeintervall] (8) legst du den Zeitabschnitt für das automatische Nachladen der Daten in Sekunden fest.
Ein Klick auf [Daten laden] (9) zeigt dir eine Vorschau der Daten gemäß den Einstellungen an und aktualisiert die Metadaten in der Spalten-Liste.

![Zugriff einrichten](/assets/images/data-sources/google/de_google-05.png)
