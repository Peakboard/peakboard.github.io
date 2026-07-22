---
layout: article
title: CSV
menu_title: CSV
description: Anbindung einer CSV-Datenquelle im Peakboard Designer
lang: de
weight: 300
ref: dat-300
redirect_from:
  - /data_sources/05-de-csv.html

---

Dieser Artikel erklärt, wie du Daten im CSV-Format als Datenquelle in Peakboard einbindest. CSV (Comma-Separated Values) ist ein einfaches, textbasiertes Tabellenformat, bei dem jede Zeile einem Datensatz entspricht und die Spalten durch ein Trennzeichen – üblicherweise ein Komma – getrennt sind. Die genaue Spezifikation und weitere Infos zu CSV findest du [hier.](https://de.wikipedia.org/wiki/CSV_(Dateiformat))

Als durchgängiges Beispiel dient in diesem Artikel die Datei `shipments.csv`. Sie listet die ausgehenden Lieferungen eines Lagers mit den Spalten Auftragsnummer, Kunde, Zielort, Anzahl Artikel und Status.

## Datenquelle hinzufügen

Mache im Explorer einen Rechtsklick auf [Data] und wähle [Add data source]. Wähle im folgenden Dialog die Datenquelle [CSV] (1) aus – über das Suchfeld oben rechts findest du sie am schnellsten.

![CSV Datenquelle hinzufügen](/assets/images/data-sources/csv/csv-01-add.png)

## CSV-Datenquelle konfigurieren

Im Dialog [Add CSV data] vergibst du im Bereich [General] zunächst einen Namen für die Datenquelle (1).

Im Bereich [Reload] (2) legst du fest, ob und in welchem Intervall (in Sekunden) die Daten automatisch nachgeladen werden. Über [Reload state] wählst du zwischen [Startup] (einmalig beim Start), [Periodic] (zyklisch im angegebenen Intervall) und [Manual] (nur, wenn du das Neuladen per Script auslöst).

Im Bereich [Connection] bestimmst du über [Source type] (3), woher die Datei stammt:

* **URL** – Abruf über eine Web-Adresse. Für geschützte Dateien lassen sich über [Authentication Type] die klassischen Web-Authentifizierungsmethoden nutzen.
* **NetworkShareFileDirect** – direkter Zugriff auf eine Datei in einem Netzlaufwerk unter Angabe des gewünschten Domänen-Users und Passworts.
* **File** – eine lokale Datei, die als Ressource ins Projekt übernommen wird. Das ist praktisch, wenn du zu Beginn eines Projektes offline mit den Daten arbeiten möchtest.
* **Office365** / **Hub** – eine Datei aus SharePoint bzw. OneDrive oder aus dem Peakboard Hub.

Im Beispiel wählen wir [File] und die Datei `shipments.csv`.

Im Bereich [Specify details] legst du fest, wie die Datei interpretiert wird:

* [Delimiter] (4) – das Trennzeichen zwischen den Spalten (Standard: Komma). Um den Tabulator als Trennzeichen zu nutzen, gibst du `\t` in das Feld ein.
* [Skip rows] (5) – überspringt am Anfang der Datei eine bestimmte Anzahl von Zeilen (zum Beispiel einen mitgelieferten Header, der ignoriert werden soll). Über die Option [All] bzw. das Feld [Max. rows] daneben begrenzt du bei Bedarf die Zahl der eingelesenen Zeilen.
* [First row contains column titles] (6) – ist diese Option aktiv, wird die erste Zeile als Spaltenüberschrift interpretiert. Andernfalls erhalten die Spalten generische Namen.

![CSV Datenquelle konfigurieren](/assets/images/data-sources/csv/csv-02-config.png)

## Daten laden und Vorschau prüfen

Klicke auf [Load data] (1), um die Datei einzulesen. Im rechten Bereich erscheint daraufhin eine Vorschau mit den erkannten Spalten und den ersten Zeilen (2). So kannst du direkt prüfen, ob Trennzeichen und Überschriften korrekt erkannt wurden.

Den Datentyp einer Spalte kannst du im CSV-Dialog nicht ändern – CSV-Daten werden zunächst immer als Zeichenfolge eingelesen. Das erkennst du am Zusatz „(String)" in den Spaltenköpfen. Falls du eine Spalte zum Beispiel in einen numerischen Typ umwandeln möchtest, legst du dafür einen [Dataflow](/dataflows/de-spalten-bearbeiten.html) an und nutzt dort den Schritt [Spaltentyp ändern].

![CSV Vorschaudaten laden](/assets/images/data-sources/csv/csv-03-preview.png)

## Datenquelle verwenden

Mit einem Klick auf [OK] legst du die Datenquelle an. Sie erscheint anschließend im Explorer unter [Data] (1). Die lokale Datei wurde dabei als Ressource ins Projekt übernommen und ist unter [Resources] (2) zu finden.

Ab jetzt kannst du die Datenquelle wie jede andere mit Controls (zum Beispiel einer Tabelle, einem Chart oder einer Styled List) verknüpfen und die Lieferdaten auf einem Dashboard darstellen.

![CSV Datenquelle im Explorer](/assets/images/data-sources/csv/csv-04-explorer.png)
