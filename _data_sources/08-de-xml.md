---
layout: article
title: External Data Sources Using XML Data Source Example
menu_title: XML
description: Information über XML Daten in Peakboard
lang: de
ref: dat-08
---
In den beiden Einführungstutorials wurden lediglich statische Inhalte in der Visualisierung genutzt. Richtig spannend wird das alles aber erst, wenn das Design dynamische Daten anzeigt. Grundsätzlich unterscheidet man bei Peakboard zwischen zwei wesentlichen Konzepten, wie dynamische Inhalte eingebettet werden:

1. Die Daten kommen schon fertig aufbereitet aus der externen Quelle und brauchen nur noch in ein Panel eingebunden werden. Das ist zum Beispiel der Fall, wenn Sie eine externe Webseite komplett oder in Teilen einbinden. Oder auch ein BI-Tool wie Power BI, QlikView, Tableau oder ähnliches nutzen und das Aufbereiten der Daten diesem BI-Tool überlassen. Peakboard fungiert dann als eine Art Anzeigeprogramm und das jeweilige Vorsystem sorgt für die visuelle Aufbereitung.

2. Die Daten kommen als Rohdaten aus einer externen Quelle. Solche Quellen können zum Beispiel XML, JSon, eine Datenbank oder ein Social Media Feed sein. Hier werden nur die reinen Daten transportiert und die Visualisierung findet dann direkt auf Peakboard statt. Für diesen Zweck stehen visuelle Controls zur Verfügung, um die Daten hübsch anzuzeigen, z.B. Charts, Tabellen usw.

Dieses Tutorial behandelt ausschließlich die zweite Option. Basis soll eine XML-Datenquelle sein. Schauen Sie sich dazu einmal die folgende XML-Datei an. Sie enthält alle aktuellen Abfahrten vom Stuttgarter Hauptbahnhof in Echtzeit und wird von der Deutschen Bahn zur Verfügung gestellt:

[https://open-api.bahn.de/bin/rest.exe/departureBoard?authKey=DBhackFrankfurt0316&lang=de&id=008000096](https://open-api.bahn.de/bin/rest.exe/departureBoard?authKey=DBhackFrankfurt0316&lang=de&id=008000096)

Gehen Sie nun in den Peakboard-Designer, legen Sie ein neues Board an, und klicken Sie mit der rechten Maustaste oben links auf den Data-Knoten des Package-Explorers. Im Menü wählen Sie dann XML als Datenquelle aus.

![image_1](/assets/images/Data_Sources/XML/XML01.png)

In der Maske für die Konfiguration der XML-Datenquelle muss zunächst ein eindeutiger Name für die Datenquelle vergeben werden (z.B. Abfahrt), dann per Copy & Paste die URL von oben als URL übernehmen und auf Load klicken. Peakboard analysiert die Struktur der XML-Datei und zeigt den Baum der XML-Elemente an. Je nachdem welches Element man ausgewählt hat, werden unten alle Attribute angezeigt, die an oder unter dem gewählten Element liegen. Bestimmte Elemente brauchen wir später gar nicht. Hier kann man den Haken entfernen, dann tauchen sie im weiteren Verlauf gar nicht erst auf. Vor allem bei sehr komplexen XML-Files ist es ratsam frühzeitig alle Elemente wegzulassen, für die man keine Verwendung hat.

![image_1](/assets/images/Data_Sources/XML/XML02.png)

Ein Klick auf OK übernimmt alle Werte in die Hauptmaske. Die korrekte Konfiguration lässt sich durch einen Klick auf Preview überprüfen. Hier kann auch die Plausibilität der Daten noch einmal kurz überprüft werden.

![image_1](/assets/images/Data_Sources/XML/XML03.png)

Zurück auf dem Hauptfenster des Designer können wir uns jetzt um die Visualisierung kümmern. Die Daten sollen einfach nur in einer Tabelle angezeigt werden. Ziehen Sie dazu ein Table-Grid-Control von der Toolbox auf das Panel und justieren Sie die Größe des Tabellenelements mit Hilfe der Hilfslinien so, dass es das komplette Panel bis auf einen gebührenden Abstand zum Rand ausfüllt.

![image_1](/assets/images/Data_Sources/XML/XML04.png)

Als nächstes müssen wir nun das Tabellenelement mit der Datenquelle verbinden. Dazu gibt es die Eigenschaft „Source“ im Attribute-Fenster unten rechts. Ein Klick auf die drei Punkte bringt uns in den Dialog zur Auswahl der Datenquelle. Es gibt im Moment nur eine Datenquelle, nämlich unsere XML-Datei namens Abfahrt. Die wählen wir aus und bestätigen mit OK.

![image_1](/assets/images/Data_Sources/XML/XML05.png)

Das Tabellenelement zeigt auf dem Panel jetzt schon alle Spalten an, die unsere Datenquelle hat. Allerdings noch nicht besonders hübsch, deshalb öffnen wir mit einem Doppelklick auf die Tabelle den nachfolgenden Konfigurationsdialog. Dort sind alle Spalten der Datenquelle gelistet. Bitte vergeben Sie in der Spalte Caption nun bessere, sprechende Namen für die jeweiligen Spalten, z.B. „Zugtyp“ statt „type“ oder „Zeit“ statt „time“ usw. In der Spalte Width steht standardmäßig ein Sternchen. Sternchen bedeutet, dass die zur Verfügung stehende Gesamtbreite einer Tabelle auf alle Sternchen-Spalten gleichmäßig verteilt werden. Man könnte nun eine festes Zahl dort hineinschreiben (z.B 50 für eine fixe Breite von 50 Pixeln) oder das Schlüsselwort „Auto“. Das bedeutet, dass die Spalte so breit gerendert wird, wie das breiteste Datenelement, also eine optimale Breite.

![image_1](/assets/images/Data_Sources/XML/XML06.png)

Zurück im Designer klicken Sie nun bitte mal auf Preview. Das Ergebnis sollte so aussehen wie der nachfolgende Screenshot. Die Tabelle wird dynamisch gefüllt und gemäß den Angaben in der Datenquelle alle 90 Sekunden aufgefrischt.

![image_1](/assets/images/Data_Sources/XML/XML07.png)
