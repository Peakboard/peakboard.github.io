---
layout: article
title: CSV
menu_title: CSV
description: Information über CSV Daten in Peakboard
lang: de
weight: 500
ref: dat-500
redirect_from:
  - /data_sources/05-de-csv.html
---
Dieser Artikel erklärt die Handhabung der Datenquelle für Daten im CSV-Format. Die genaue Spezifikation und weitere Infos zu CSV finden Sie [hier.](https://de.wikipedia.org/wiki/CSV_(Dateiformat))

Ein schönes Beispiel für CSV-Daten findet sich unter dieser URL: [http://mysafeinfo.com/api/data?list=presidents&format=csv](http://mysafeinfo.com/api/data?list=presidents&format=csv). Sie listet alle amerikanischen Präsidenten.
Neben der Anbindung über eine URL können auch CSV-Datein, analog zu Excel Dateien, auch als File oder NetworkShareFile eingebunden werden. 

Die Handhabung des Dialogs ist nahezu selbsterklärend. Schreiben Sie die gewünschte URL in das entsprechende Textfeld. Falls eine explizite Authentifizierung nötig ist, kann dies mit dem entsprechenden Attribut eingestellt werden. Genauso wie die maximale Anzahl an Datensätzen, sowie das Reload-Intervall. Um die Spalten der Datenquelle zu laden, klicken Sie auf Load. Sind die Metadaten geladen steht die Datenquelle wie jede andere Quelle für die Weiterverarbeitung zur Verfügung.

![CSV Add Data Dialog](/assets/images/data-sources/csv/csv-add-data-dialog.png)

