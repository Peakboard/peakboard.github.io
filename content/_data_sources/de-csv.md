---
layout: article
title: CSV
menu_title: CSV
description: Information über CSV Daten in Peakboard
lang: de
weight: 500
ref: dat-500

---
Dieser Artikel erklärt die Handhabung der Datenquelle für Daten im CSV-Format. 
Die genaue Spezifikation und weitere Infos zu CSV finden Sie [hier.](https://de.wikipedia.org/wiki/CSV_(Dateiformat))

Ein schönes Beispiel für CSV-Daten findet sich unter dieser URL: [http://mysafeinfo.com/api/data?list=presidents&format=csv](http://mysafeinfo.com/api/data?list=presidents&format=csv). 
Sie listet alle amerikanischen Präsidenten.
Neben der Anbindung über eine URL können CSV-Datein auch als Datei über ein Netzlaufwerk eingebunden werden. Der Zugriff auf ein Netzwerkshare erfolgt entweder direkt (unter Angabe des gewünschten Domänen-Users und Passworts) oder über die Peakboard-Bridge. 
Darüber hinaus können CSV-Dateien auch als Ressource direkt im Paket hinterlegt werden. 
Das kann zum Beispiel sinnvoll sein, wenn man einfach zu Beginn eines Projektes offline mit den Daten "spielen" will, oder sich noch nicht auf die konkrete Zugriffsmethode festlegen will. 
Stellen Sie die Eigenschaft **Source Type** auf den entsprechend gewünschten Zugriffstyp ein.

Im Falle des Zugriffs über eine URL lassen sich die klassischen Web-Authentifizierungsmethoden verwenden, um auf geschützte Dateien Zugriff zu erhalten. 
Nutzen Sie Eigenschaft **Authentication** um die gewünschte Methode zu wählen.

Üblicherweise werden Spalten bei CSV mit einem Komma getrennt. 
Sollte eine anderes Trennzeichen gewünscht sein, stellen Sie den **Delimter** entsprechend ein.
 **Skip Rows** erlaubt es, am Anfang der Datei eine bestimmte Zahl von Zeilen zu überspringen (z.B. weil die Datei einen zu ignorierenden Header mitbringt). 
 **Max Rows** limitiert die Zahl der Zeilen.

Abschließend klicken Sie auf **Load Data** um einen Preview aufzurufen und die Metadaten anzuzeigen. 
Falls gewünscht, kann der Datentyp jeder einzelnen Spalte gleich noch angepasst werden (z.B. von String auf Number bei numerischen Zahlen).

![CSV Data Dialog](/assets/images/data-sources/csv/csv-add-data-dialog.png)

