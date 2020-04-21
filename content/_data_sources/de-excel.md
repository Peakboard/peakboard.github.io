---
layout: article
title: Excel
menu_title: Excel
description: Informationen über Excel-Daten in Peakboard
lang: de
weight: 1500
ref: dat-1500
redirect_from:
  - /excel/
  - /data_sources/13-de-excel.html
---
Diese Seite erklärt die einzelnen Features beim Zugriff auf eine Excel-Datenquelle von Peakboard aus. Unter dem folgenden Link finden Sie ein Tutorial, wie generell externe Datenquellen konfiguriert und an Peakboard-Elemente gekoppelt werden:

[Erste Schritte mit externen Datenquellen am Beispiel einer XML-Datenquelle](/tutorials/03-de-xml-daten.html)

Nachdem Sie auf Add Excel Data geklickt haben, öffnet sich ein Fenster. In diesem müssen Sie einen Namen eingeben und einen Speicherort (z.B. Dropbox) auswählen. Derzeit werden folgende Speicherorte unterstützt:

*    **File** – Die Excel-Datei wurde zuvor dem Peakboard-Package als Ressource hinzugefügt und ist Teil des Packages
*    **Dropbox**
*    **GoogleDrive**
*    **OneDrive** – Microsoft OneDrive (sowohl das kostenfreie Angebot, als auch als Teil von Office 365)
*    **NetworkShareFile** –  Die Datei wird über die Peakboard-Bridge von einem Netzlaufwerk gezogen. Weitere Informationen über die Peakboard-Bridge finden Sie [hier.](/administration/01-de-install.html)
*    **NetworkShareFileDirect** – Die Datei wird direkt von einem Netzlaufwerk gezogen. Achtung! Das funktioniert nur, wenn das Netzlaufwerk keinerlei Sicherheitsbeschänkungen hat und für den anonymen Zugriff konfiguriert ist.

Anschließend melden Sie sich über den Authorize Button bei dem Cloudanbieter an und wählen über den …-Button eine Datei aus – sofern Sie einen Cloud-Anbieter als Quelle gewählt haben.

Unter Worksheet wählen Sie aus der Liste das gewünschte Tabellenblatt. „Column names in 1st row“ bedeutet, dass die Spaltenüberschriften direkt in den Tabellenzellen stehen. Ansonsten werden generische Spaltenüberschriften gebildet (Column1, Column2, etc.). Standardmäßig stehen die Daten im jeweiligen Tabellenblatt einfach ab der ersten Zelle oben links (Select All). Sollte das bei Ihnen nicht so sein, können Sie im Feld Range einen Bereich eingeben, in dem Peakboard nach den Daten suchen soll (z.B. von Zelle B2 bis H23, dann wäre hier B2:H23 einzutragen).

 ![Add Excel Data Dialog](/assets/images/data-sources/excel/add-excel-data.png)

 Klicken Sie final auf Load Data. Die Daten werden dann gemäß den Angaben aus der Excel-Datei geladen und im Preview-Fenster angezeigt. Darüber hinaus werden die Metadaten (also die Liste an Spalten) erneuert und in der Columns-Tabelle angezeigt. Ab jetzt kann die Quelle verwendet werden.
