---
layout: article
title: Die erste Visualisierung  
menu_title: Die erste Visualisierung  
description: Die erste Visualisierung  
lang: de
weight: 150
ref: start-150
redirect_from:
---

Da du den Peakboard Designer nun kennst, ist es Zeit deine erste Visualisierung zu erstellen. 
Füge zunächst per Drag and Drop ein [Text] Control hinzu und definiere in den Attributen verschiedene Einstellungen sowie das Aussehen dieses Controls.
Wähle zum Beispiel die gewünschte Schriftart, die Ausrichtung, sowie einen Text, der angezeigt werden soll. Dieser wird später durch einen Datensatz ersetzt.
Füge als dein zweites Control ein [Gauge-Diagramm Rund] aus der Gruppe [Diagramm] hinzu und passe auch hier im Bereich [Aussehen] Attribute wie Balkenbreite, Werteausrichtung oder Wert-Schriftart an (1).

![Peakboard Designer – Controls](/assets/images/get_started/Visualization_controls_de.png)

## 1.1 Ressourcen und Bilder verwenden

Verwende in deiner Visualisierung unterschiedliche Dateitypen wie zum Beispiel Bilddateien (JPG oder PNG), PDFs oder binde Excel Dateien an.
Ziehe zum Beispiel dein Logo als Bilddatei auf den Explorer oder rufe das Ordnermenü des Ressourcen Ordners auf und füge eine lokale Ressource hinzu.
Anschließend kannst du die Datei per Drag and Drop aus dem Explorer auf eine freie Fläche des Arbeitsbereichs ziehen und Größe und Position bestimmen.
Für andere Datenformate funktioniert der Vorgang sehr ähnlich.

![Peakboard Designer – Drag&Drop](/assets/images/get_started/Visualization_resources_de.gif)

## 1.2 Datenquelle verbinden

Binde mit Peakboard ganz einfach die unterschiedlichsten Datenquellen an.
Von Datenformaten wie CSV, JSON und XML, Datenbanken und SAP über Social Media bis hin zu Maschinen-, Förderanlagen- und Sensoren-Informationen wie Siemens S7 und OPC UA.
Einen Überblick über die verschiedenen Datenquellen findest du [hier](https://peakboard.com/schnittstellen/?utm_source=HelpCenter&utm_medium=Link&utm_campaign=GetStarted_Article).

In diesem Beispiel verwenden wir eine Microsoft Excel Datei und laden sie direkt in das Projekt. 
Die Excel Datei enthält vier Produkte mit fünf Eigenschaften: Titel, Produktnummer, Lagermenge, Mindestbestand und Lagerkapazität.
[Lade dir unsere Beispieldatei herunter](/assets/files/examples/Peakboard_Example_Date.xlsx) und füge sie, genau wie das Bild zuvor, per Drag and Drop hinzu.
Nun liegt die Datei als Ressource im Explorer (1). Wenn du später Excel Dateien von anderen Speicherorten einbinden willst, erfährst du [hier](/data_sources/Excel/de-excel.html), wie das geht.

![Peakboard Designer – Excel Ressource](/assets/images/get_started/Visualization_excel-01_de.png)

Füge die Ressource nun als Datenquelle hinzu.
Klicke dazu links den Ordner [Daten] mit Rechtsklick an oder klicke auf […] und wähle im Menü [Datenquelle hinzufügen] und [Excel] (1) aus.

![Peakboard Designer – Excel Datenquelle](/assets/images/get_started/Visualization_excel-02_de.png)

Vergib nun einen Namen für die Datenquelle z.B. [Excel_File] (1) und wähle im Bereich [Connection] durch einen Klick auf die drei Punkte hinter dem Eingabefeld [Datei] die hochgeladene Excel Datei aus (2). 
Definiere nun unter [Details angeben] nach einem Klick auf [Load Worksheets] (3) welches Arbeitsblatt verwendet werden soll und ob wie hier Überschriften in der ersten Zeile vorhanden sind. Mit [Daten laden] (4) kannst du die Daten auf Plausibilität prüfen. 

![Peakboard Designer – Excel Datenquelle](/assets/images/get_started/Visualization_excel-03_de.png)

Für die nächsten Schritte stellst du im Vorschaubereich die letzten drei Spalten der Tabelle von [String] auf [Number] (1) um. Dann speicherst du mit [OK] (2).
Voilà, du hast soeben deine erste Datenquelle angebunden.

![Peakboard Designer – Excel Datenquelle](/assets/images/get_started/Visualization_excel-04_de.png)

## 1.3 Daten und Control verbinden

Im letzten Schritt wird die Datenquelle mit einem Control verbunden.
Wähle ein Control im Explorer oder durch Anklicken auf der Arbeitsfläche aus, in diesem Fall das Textfeld.
Auf der rechten Seite bei den Attributen findest du das Attribut [Text].
Klicke in dieser Zeile auf das Klammern-Symbol (1).

![Peakboard Designer – Text Datenquelle](/assets/images/get_started/Visualization_excel-05_de.png)

Wähle nun die Datenquelle sowie die gewünschte Spalte (Title) und Zeile (1) aus, in diesem Fall die Zeile 0 und die Spalte [Title] für die Überschrift.
Beachte, dass in der Informationstechnik bei 0 angefangen wird zu zählen, daher ist Zeile 0 die erste Zeile. 
Die Zeile mit den Überschriften wird nicht beachtet.
Bestätige mit [OK] (2), dann wird der Inhalt dieser Zelle deiner Datenquelle innerhalb der Textbox angezeigt.

![Peakboard Designer – Text Datenquelle Einstellungen](/assets/images/get_started/Visualization_excel-06_de.png)

Nun verbindest du noch die Datenquelle mit dem Gauge-Diagramm.
Klicke dazu in der jeweiligen Zeile in den Attributen (1) auf das Klammern-Symbol und wähle jeweils die Excel Datenquelle aus.
Definiere dann für das Feld [Daten / Wert] (2) die Spalte [Stock_Quantity], für das Feld [Minimum] (3) die Spalte [Min_Quantity] und für [Maximum] (4) die Spalte [Storage_Capacity].

![Peakboard Designer – Gauge-Diagramm](/assets/images/get_started/Visualization_excel-07_de.png)

# 1.4. Preview

Geschafft!
Deine erste Visualisierung mit Peakboard ist fertig.
Klicke in der Menüleiste auf [Vorschau] (1) um sie dir anzusehen.

![Peakboard Designer – Preview Button](/assets/images/get_started/Visualization_excel-08_de.png)

Es öffnet sich ein neuer Dialog, der dir das Ergebnis zeigt. Diese Visualisierung kann nun auf deine Peakboard Box übertragen werden.

# 1.5. Projektfarben

Sollte dir die fertige Visualisierung farblich nicht gefallen oder geänderte Arbeitsbedingungen erfordern beispielsweise eine andere Farbgebung, dann kannst du die Farben ganz einfach und zentral in der Projektfarben-Verwaltung anpassen.
Klicke dazu auf den Button Projektfarben in der Menüleiste und suche dir dann ein neues passendes Theme aus. Alternativ kannst du dort auch nur einzelne Aspekte deiner Visualisierung zentral abändern.

![Peakboard Designer – Projektfarben](/assets/images/get_started/Visualization_projectcolors_de.gif)

# 2. Nächster Schritt

Wenn du bereits eine Peakboard Box besitzt, hilft dir der Artikel [Die Peakboard Box](https://help.peakboard.com/get_started/de-peakboard-box.html) bei deinen nächsten Schritten.

Solltest du Probleme mit dem Peakboard Designer haben, zögere nicht mit uns in [Kontakt](mailto: support@peakboard.com) zu treten.
Alle wichtigen Informationen dazu findest du unter [www.peakboard.com/academy](https://peakboard.com/academy/). 
Wir wünschen dir viel Spaß und Erfolg mit Peakboard!