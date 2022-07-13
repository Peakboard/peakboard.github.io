---
layout: article
title: Externe dynamische Datenquellen am Beispiel einer XML-Datenquelle
menu_title: Externe dynamische Datenquellen
description: Externe dynamische Datenquellen am Beispiel einer XML-Datenquelle
lang: de
weight: 0
ref: dat-0
image: /assets/images/Tutorial/Overview/Tutorial_External_Data_Source_Small.png
redirect_from:
  - /tutorials/03-de-xml-daten.html
  - /tutorials/de-xml-daten.html
---
Grundsätzlich unterscheidet man bei Peakboard zwischen zwei wesentlichen Konzepten, wie dynamische Inhalte eingebettet werden:

1. Die Daten kommen schon fertig aufbereitet aus der externen Quelle und brauchen nur noch in ein Panel eingebunden werden. Das ist zum Beispiel der Fall, wenn du eine externe Webseite komplett oder in Teilen einbindest. Oder auch wenn du ein BI-Tool wie Power BI, QlikView, Tableau oder ähnliches nutzt und das Aufbereiten der Daten diesem BI-Tool überlässt. Peakboard fungiert dann als eine Art Anzeigeprogramm und das jeweilige Vorsystem sorgt für die visuelle Aufbereitung.

2. Die Daten kommen als Rohdaten aus einer externen Quelle. Solche Quellen können zum Beispiel XML, JSon, eine Datenbank oder ein Social Media Feed sein. Hier werden nur die reinen Daten transportiert und die Visualisierung findet dann direkt auf Peakboard statt. Für diesen Zweck stehen visuelle Controls zur Verfügung, um die Daten hübsch anzuzeigen, z.B. Charts, Tabellen usw.

Diese Anleitung behandelt ausschließlich die zweite Option. Basis soll eine XML-Datenquelle sein. Schau dir dazu einmal die folgende XML-Datei an. Sie enthält alle aktuellen Abfahrten vom Stuttgarter Hauptbahnhof in Echtzeit und wird von der Deutschen Bahn zur Verfügung gestellt:

[https://open-api.bahn.de/bin/rest.exe/departureBoard?authKey=DBhackFrankfurt0316&lang=de&id=008000096](https://open-api.bahn.de/bin/rest.exe/departureBoard?authKey=DBhackFrankfurt0316&lang=de&id=008000096)

Öffne jetzt den Peakboard Designer und wähle unter [Datenquelle hinzufügen] die Datenquelle [XML] aus (1).

![XML Datenquelle hinzufügen](/assets/images/Tutorial/XML/XML_add_de.png)

Im Dialog für die Konfiguration der XML-Datenquelle musst du zunächst einen eindeutigen Namen für die Datenquelle vergeben (z.B. Abfahrt) (2) und dann per Copy & Paste die URL von oben in das Feld [Basis Url] (3) übernehmen. Peakboard teilt die URL automatisch auf (4). Durch einen Klick auf die drei Punkte im Bereich [Details angeben] (5) kannst du die gewünschten Elemente der XML Datei auswählen. 

![XML Datenquelle konfigurieren](/assets/images/Tutorial/XML/XML_config-01_de.png)

Bestimmte Elemente werden nicht benötigt. Hier kannst du die Markierung entfernen (6), dann tauchen sie im weiteren Verlauf nicht auf. Vor allem bei sehr komplexen XML-Files ist es ratsam frühzeitig alle Elemente wegzulassen, für die du keine Verwendung hast.

![XML Datenquelle konfigurieren](/assets/images/Tutorial/XML/XML_config-02_de.png)

Ein Klick auf OK übernimmt alle Werte in den Datenquellen-Dialog. Die korrekte Konfiguration kannst du durch einen Klick auf [Daten laden] überprüfen. Im Bereich Vorschau (7) kannst du dann auch die Plausibilität der Daten noch einmal kurz überprüfen.

![XML Datenquelle konfigurieren](/assets/images/Tutorial/XML/XML_config-03_de.png)

Als nächstes erstellst du die Visualisierung. Die Daten sollen einfach nur in einer Tabelle angezeigt werden. Ziehe dazu ein Table-Grid-Control [Tabelle] von der Toolbox auf die Arbeitsfläche und wähle die in den vorangegangenen Schritten erstellte Datenquelle aus (8).

![Control hinzufügen](/assets/images/Tutorial/XML/XML_add-control-01_de.png)

Bestätige mit einem Klick auf [OK] und justiere die Größe des Tabellenelements durch Klicken und Ziehen an deren Rändern möglichst flächenfüllend (9).

![Control hinzufügen](/assets/images/Tutorial/XML/XML_add-control-02_de.png)

Das Tabellenelement zeigt auf dem Panel jetzt schon alle Spalten der Datenquelle an. Allerdings noch nicht besonders hübsch, deshalb öffnest du mit einem Klick auf die drei Punkte im Bereich [Allgemein] - [Spalten] den nachfolgenden Konfigurationsdialog. Dort sind alle Spalten der Datenquelle gelistet. 

Vergib in der Spalte [Legende] (10) nun bessere, sprechende Namen für die jeweiligen Spalten, z.B. „Zugtyp“ statt „type“ oder „Abfahrt“ statt „time“ usw. In der Spalte [Breite] (11) steht standardmäßig „Fill“. Stelle hier alle Spalten außer die Fahrtrichtung auf „Cut“ um. Das bedeutet, dass die Spalte so breit gerendert wird, wie das breiteste Datenelement, also auf eine optimale Breite. Die [Ausrichtung] (12) änderst du ebenfalls überall bis auf die der Fahrtrichtung auf „Center“. Klicke dann auf [OK].

![Control konfigurieren](/assets/images/Tutorial/XML/XML_control-config-01_de.png)

Zurück im Hauptfenster änderst du beispielsweise folgende Werte im Bereich [Aussehen] (13) der Tabelle:

- Schriftart Header: header2, Schriftgröße auf 45 und bold ändern
- Schriftart Body: default, Schriftgröße auf 30 ändern
- Hintergrund Header: #FFFFAA00
- Rahmendicke: 0
- Zellenabstand: 30,15,30,15

Nun klickst du auf [Vorschau] (14).

![Control konfigurieren](/assets/images/Tutorial/XML/XML_control-config-02_de.png)

Das Ergebnis sollte nun ungefähr so aussehen wie der nachfolgende Screenshot. Die Tabelle wird dynamisch gefüllt und gemäß den Angaben in der Datenquelle alle 90 Sekunden aufgefrischt.

![Ergebnis](/assets/images/Tutorial/XML/XML_result_de.png)
