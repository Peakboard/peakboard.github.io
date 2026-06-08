---
layout: article
title: CSV
menu_title: CSV
description: Information über CSV Daten in Peakboard
lang: de
weight: 300
ref: dat-300
redirect_from:
  - /data_sources/05-de-csv.html

---

Dieser Artikel erklärt die Handhabung der Datenquelle für Daten im CSV-Format. Die genaue Spezifikation und weitere Infos zu CSV findest du [hier.](https://de.wikipedia.org/wiki/CSV_(Dateiformat))

Ein schönes Beispiel für CSV-Daten findet sich unter dieser URL: [https://mysafeinfo.com/api/data?list=presidents&format=csv](https://mysafeinfo.com/api/data?list=presidents&format=csv). Sie listet alle amerikanischen Präsidenten.

## Datenquelle hinzufügen

Mache einen Rechtsklick auf [Daten] und wähle [Datenquelle hinzufügen]. Im folgenden Dialog wählst du die Datenquelle [CSV] (1) aus.

![CSV Datenquelle hinzufügen](/assets/images/data-sources/csv/csv-01-add.png)

## CSV-Datenquelle konfigurieren

Neben der Anbindung über eine URL können CSV-Daten auch als Datei über ein Netzlaufwerk eingebunden werden. Der Zugriff auf ein Netzwerkshare erfolgt direkt unter Angabe des gewünschten Domänen-Users und Passworts. Darüber hinaus können CSV-Dateien auch als Ressource direkt im Projekt hinterlegt werden. Das kann zum Beispiel sinnvoll sein, wenn man einfach zu Beginn eines Projektes offline mit den Daten "spielen" will, oder sich noch nicht auf die konkrete Zugriffsmethode festlegen will.

Stelle die Eigenschaft [Source type] auf den entsprechend gewünschten Zugriffstyp ein (1). Im Falle des Zugriffs über eine URL lassen sich die klassischen Web-Authentifizierungsmethoden verwenden, um auf geschützte Dateien Zugriff zu erhalten. Nutze die Eigenschaft [Authentication Type], um die gewünschte Methode zu wählen (2).

Üblicherweise werden Spalten bei CSV mit einem Komma getrennt. Sollte ein anderes Trennzeichen gewünscht sein, stelle die Eigenschaft [Delimiter] entsprechend ein (3). Um den Tabulator als Trennzeichen zu nutzen, gibst du `\t` in das Feld ein.

[Skip rows] (4) erlaubt es, am Anfang der Datei eine bestimmte Zahl von Zeilen zu überspringen (zum Beispiel weil die Datei einen zu ignorierenden Header mitbringt). [Max rows] (5) limitiert die Zahl der gelesenen Zeilen.

Abschließend klickst du auf [Load data] im rechten Bereich, um eine Vorschau aufzurufen und die Metadaten anzuzeigen. Falls gewünscht, kann der Datentyp jeder einzelnen Spalte gleich noch angepasst werden (zum Beispiel von String auf Number bei numerischen Werten).

![CSV Datenquelle konfigurieren](/assets/images/data-sources/csv/csv-02-config.png)
