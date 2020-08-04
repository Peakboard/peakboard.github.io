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
Diese Seite erklärt die einzelnen Features beim Zugriff auf eine Excel-Datenquelle von Peakboard aus. 
Unter dem folgenden Link finden Sie ein Tutorial, wie generell externe Datenquellen konfiguriert und an Peakboard-Elemente gekoppelt werden:

[Erste Schritte mit externen Datenquellen am Beispiel einer XML-Datenquelle](/tutorials/03-de-xml-daten.html)

Nachdem Sie auf Add Excel Data geklickt haben, öffnet sich ein Fenster. 
Der Dialog ist in drei Bereiche - General, Specify und Preview - aufgeteilt.

Unter General müssen Sie der Datenquelle einen Namen geben sowie den Speicherort (z.B. Dropbox) auswählen, wo Ihre Excel-Datei zu finden ist. 
Derzeit werden folgende Speicherorte unterstützt:

*    **File** – Die Excel-Datei wurde zuvor dem Peakboard-Package als Ressource hinzugefügt und ist Teil des Packages
*    **Dropbox**
*    **GoogleDrive**
*    **OneDrive** – Microsoft OneDrive (sowohl das kostenfreie Angebot, als auch als Teil von Office 365)
*	 **SharePoint** 
*    **PeakboardBridge** –  Die Datei wird über die Peakboard-Bridge von einem Netzlaufwerk gezogen. Weitere Informationen über die Peakboard-Bridge finden Sie [hier.](/administration/01-de-install.html)
*    **LocalNetwork** – Nur Peakboard 2 Boxen - Die Datei kann direkt von einem Netzlaufwerk unter Eingabe eines Domänen-User und Passwort eingebunden werden. Achten Sie hierbei darauf, dass die UNC-Laufwerkspfade verwendet werden müssen.

> ## WICHTIG!
>
> Excel-Dateien, welche als **File** angelegt wurden, enthalten lediglich den Datensatz, welcher beim Hinzufügen der Datei zu den Ressourcen aktuell war.
> Um Echtzeitdaten anzuzeigen, sollten Sie eine der anderen Möglichkeiten wählen!

Für die Cloud-Anbindung müssen Sie sich zunächst über den "Authorize Button" bei dem Cloudanbieter anmelden und anschließend über den …-Button unter Dokument die entsprechende Excel-Datei auswählen.

Im Eingabefenster "Reload Interval" wird die Zeit in Sekunden eingetragen, in der die Datenquelle prüfen soll ob neue Daten vorhanden sind.

Unter "Specify" wählen Sie über das Dropdown-Menü das gewünschte Tabellenblatt aus.
Standardmäßig stehen die Daten im jeweiligen Tabellenblatt einfach ab der ersten Zelle oben links (Select All). 
Sollte das bei Ihnen nicht so sein, können Sie im Feld "Range" einen Bereich eingeben, in dem Peakboard nach den Daten suchen soll (z.B. von Zelle B2 bis H23, dann wäre hier B2:H23 einzutragen).
„Column names in first row“ bedeutet, dass die erste Zeile der Excel-Datei für die Benennung der Spalten verwendet wird.
Ansonsten werden generische Spaltenüberschriften gebildet (Column0, Column1, etc.). 
"Switch Rows and Columns" ermöglicht es, die Excel-Daten mit nur einem Klick zu transponieren.
Über "Max. rows" lässt sich die Zahl der geladenen Zeilen begrenzen.

 ![Add Excel Data Dialog](/assets/images/data-sources/excel/add-excel-data.png)

 Klicken Sie final unter Preview auf die Schaltfläche "Load Data". 
 Die Daten werden dann gemäß den Angaben aus der Excel-Datei geladen und im Preview-Fenster angezeigt. 
 Standardmäßig werden alle Daten aus Excel mit dem Datentyp "String" geladen.
 Im Preview-Fenster können Sie diesen Datentyp nun auf den gewünschten Datentyp "Number" oder "Boolean" ändern.