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

Dieser Artikel erklärt die Handhabung der Datenquelle für Daten im CSV-Format.
Die genaue Spezifikation und weitere Infos zu CSV findest du [hier.](https://de.wikipedia.org/wiki/CSV_(Dateiformat))

Ein schönes Beispiel für CSV-Daten findet sich unter dieser URL: [http://mysafeinfo.com/api/data?list=presidents&format=csv](http://mysafeinfo.com/api/data?list=presidents&format=csv).
Sie listet alle amerikanischen Präsidenten.

Neben der Anbindung über eine URL können CSV-Daten auch als Datei über ein Netzlaufwerk eingebunden werden. Der Zugriff auf ein Netzwerkshare erfolgt direkt unter Angabe des gewünschten Domänen-Users und Passworts. Darüber hinaus können CSV-Dateien auch als Ressource direkt im Projekt hinterlegt werden. Das kann zum Beispiel sinnvoll sein, wenn man einfach zu Beginn eines Projektes offline mit den Daten "spielen" will, oder sich noch nicht auf die konkrete Zugriffsmethode festlegen will.

Stelle die Eigenschaft **Quelltyp** auf den entsprechend gewünschten Zugriffstyp ein (1).
Im Falle des Zugriffs über eine URL lassen sich die klassischen Web-Authentifizierungsmethoden verwenden, um auf geschützte Dateien Zugriff zu erhalten. Nutze die Eigenschaft **Authentication Type** um die gewünschte Methode zu wählen (2).

Üblicherweise werden Spalten bei CSV mit einem Komma getrennt.
Sollte eine anderes Trennzeichen gewünscht sein, stelle die Eigenschaft **Trennzeichen** entsprechend ein (3). Um den Tabulator als Trennezeichen zu nutzen gibst du `\t` in das Feld ein.
**Zeilen überspringen** (4) erlaubt es, am Anfang der Datei eine bestimmte Zahl von Zeilen zu überspringen (z.B. weil die Datei einen zu ignorierenden Header mitbringt). **Max. Zeilen** (5) limitiert die Zahl der Zeilen.

Abschließend klickst du auf **Daten laden** im rechten Bereich um einen Preview aufzurufen und die Metadaten anzuzeigen.
Falls gewünscht, kann der Datentyp jeder einzelnen Spalte gleich noch angepasst werden (z.B. von String auf Number bei numerischen Zahlen).

![CSV Data Dialog](/assets/images/data-sources/csv/csv_add-data-dialog_de.png)
