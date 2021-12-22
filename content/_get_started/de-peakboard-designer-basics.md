---
layout: article
title: Der Peakboard Designer  
menu_title: Der Peakboard Designer  
description: Der Peakboard Designer  
lang: de
weight: 100
ref: start-100
redirect_from:
  - /tutorials/01-de-peakboard-designer-basics.html
  - /tutorials/de-peakboard-designer-basics.html
---

Der Peakboard Designer ist eine Desktop-Anwendung für Windows Computer, die du hier [herunterladen](https://peakboard.com/peakboard-designer/?utm_source=HelpCenter&utm_medium=Link&utm_campaign=GetStarted_Article) kannst.
Eventuell brauchst du Installationsberechtigungen von deinem System-Administrator, um ihn zu installieren.

In diesem Artikel erklären wir dir deine ersten Schritte mit dem Peakboard Designer und zeigen dir, wie du deine erste Visualisierung erstellst.
Weitere Hilfestellung bieten dir auch unsere [Video-Tutorials](https://help.peakboard.com/tutorials/de-video-overview.html), klick dich einfach mal durch.

# 1. Willkommen im Peakboard Designer

Nach dem ersten Öffnen des Peakboard Designers befindest du dich im Start-Dialog.
Hier findest du nützliche Links zu den Peakboard Hilfeseiten (1) oder den Videotutorials und einige Templates (2), die den Einstieg so einfach wie möglich machen sollen.
Die Templates dienen als Beispiel und können als Basis für deine individuelle Visualisierung verwendet werden.
Über den Button [Mehr anzeigen…] (3) erhältst du Zugriff auf Templates zu den verschiedensten Anwendungsfällen und Beispieldateien, die dir das Arbeiten mit Skripten erklären.
Um deine Visualisierung ohne ein Template zu beginnen, wähle [Start from scratch] (4). 

![Peakboard Get Started Dialog](/assets/images/Tutorial/Get_Started/Peakboard_Get_Started_DE_01.png)

# 2. Die Struktur des Peakboard Designers

Nun bist du richtig im Peakboard Designer angekommen. 
Der Peakboard Designer ist in fünf Hauptbereiche aufgeteilt. 
Ganz oben ist die Menüleiste (1), links der Peakboard Explorer (2), der Arbeitsbereich – auch Canvas genannt – ist in der Mitte (3), die verschiedenen Controls auf der rechten Seite (4) und darunter die Attribute (5). 

![Peakboard Designer Overview](/assets/images/Tutorial/Get_Started/Peakboard_Get_Started_DE_02.png)

## 2.1 Die Menüleiste 

In der Menüleiste findest du Grundfunktionen des Peakboard Designers.
Öffne hier eine Vorschau deiner Visualisierung (1) und lade sie auf eine Peakboard Box (2). 
Über [Einstellungen] (3) nimmst du grundlegende Einstellungen zu deiner Visualisierung vor oder führst ein Software Update aus. 

![Peakboard Designer Ribbon Bar](/assets/images/Tutorial/Get_Started/Peakboard_Get_Started_DE_03.png)

## 2.2 Der Explorer

Im Explorer links sind alle Controls, die in der Visualisierung verwendet werden aufgelistet. 
In der Ordnerstruktur des Explorers werden alle Datenquellen, Dataflows, Variablen, Skripte und Ressourcen angezeigt. 
Unter dem letzten Punkt [Bildschirme] findest du eine Auflistung aller vorhandenen optischen Controls auf deinem Arbeitsbereich. 
Da wir noch keine Controls hinzugefügt haben sind die Ordner im Moment noch leer. 

Mit einem Rechtsklick auf die Ordner kannst du verschiedene Aktionen durchführen – alternativ funktioniert das ebenso mit einem Klick auf […].
Öffne zum Beispiel den Menüpunkt [Bildschirmgröße bearbeiten] mit einem Rechtsklick auf [Bildschirme], um die Größe der Visualisierung zu definieren.
Für unser Beispiel belässt du sie am besten bei 1920x1080 (Full HD).
Die Visualisierung wird automatisch auf die Auflösung des angeschlossenen Bildschirms skaliert, das Seitenverhältnis sollte allerdings stimmen. 

![Peakboard Designer Explorer](/assets/images/Tutorial/Get_Started/Peakboard_Get_Started_DE_04.png)

## 2.3 Die Controls 

Für die verschiedenen Anwendungsfälle findest du vorgefertigte Oberflächenelemente, die wir Controls nennen. Sie lassen sich verwenden und anpassen, um deine Daten zu visualisieren. 
Von einfachen Textfeldern, Tabellen, über simple Diagramme wie Balken- oder Tortendiagramme, bis hin zu anspruchsvollen, kombinierbaren Diagrammen (Erweiterte Diagramme) und wiederholbaren Oberflächenpatterns wie die Listen- oder Tileansicht ist alles für dich dabei.
Ziehe die Elemente entweder per Drag and Drop auf den Arbeitsbereich oder füge sie mit einem Doppelklick hinzu. 

![Peakboard Designer – Controls](/assets/images/Tutorial/Get_Started/Peakboard_Get_Started_DE_05.gif)

## 2.4 Die Attribute

Unterhalb der Controls ist die Attributübersicht.
Hier werden für das aktuell aktive Control die jeweiligen einstellbaren Parameter und Attribute aufgelistet. 
Diese Parameter sind für jedes Control unterschiedlich. 
Probiere zum Beispiel aus, mit einem Rechtsklick auf [Bildschirme] im Explorer einen weiteren Bildschirm hinzuzufügen. 
Klicke nun auf einen der Bildschirme und lege in den Attributen die Bildschirmdauer fest. 
Diese Bildschirmdauer definiert, wie lange der jeweilige Bildschirm sichtbar bleibt, bevor der darauffolgende angezeigt wird. 

![Peakboard Designer – Attribute](/assets/images/Tutorial/Get_Started/Peakboard_Get_Started_DE_06.png)

# 3. Deine Visualisierung erstellen

Da du den Peakboard Designer nun kennst, ist es Zeit deine erste Visualisierung zu erstellen. 
Füge zunächst per Drag and Drop eine Textbox aus den Controls rechts hinzu und definiere in den Attributen verschiedene Einstellungen sowie das Aussehen dieses Controls. 
Definiere außerdem die gewünschte Schriftart, die Ausrichtung oder den Hintergrund, sowie einen Text, der angezeigt werden soll. 
Dieser wird später durch einen Datensatz ersetzt. 
Füge als dein zweites Control ein Gauge-Diagramm in der Gruppe [Diagramm] hinzu und passe auch hier Eigenschaften wie Größe oder Farbe an. 

![Peakboard Designer – Controls](/assets/images/Tutorial/Get_Started/Peakboard_Get_Started_DE_05b.gif)

## 3.1 Ressourcen und Bilder verwenden

Verwende in deiner Visualisierung unterschiedliche Dateitypen wie zum Beispiel Bilddateien (JPG oder PNG), PDFs oder binde Excel Dateien an. 
Ziehe zum Beispiel dein Logo als Bilddatei auf den Explorer oder rufe das Ordnermenü des Ressourcen Ordners auf und fügen eine lokale Ressource hinzu. 
Anschließend kannst du die Datei per Drag and Drop aus dem Explorer auf eine freie Fläche des Arbeitsbereichs ziehen und Größe und Position bestimmen. 
Für andere Datenformate funktioniert der Vorgang sehr ähnlich. 

![Peakboard Designer – Drag&Drop](/assets/images/Tutorial/Get_Started/Peakboard_Get_Started_DE_07.gif)

## 3.2 Datenquelle verbinden

Binde mit Peakboard ganz einfach die unterschiedlichsten Datenquellen an. 
Von Datenformaten wie CSV, JSON und XML, Datenbanken und SAP über Social Media bis hin zu Maschinen-, Förderanlagen- und Sensoren-Informationen wie Siemens S7 und OPC UA. 
Einen Überblick über die verschiedenen Datenquellen findest du [hier](https://peakboard.com/datenanbindungen/?utm_source=HelpCenter&utm_medium=Link&utm_campaign=GetStarted_Article).

In diesem Beispiel verwenden wir eine Microsoft Excel Datei und laden sie direkt in das Paket. 
Die Excel Datei enthält vier Produkte mit fünf Eigenschaften: Titel, Produktnummer, Lagermenge, Mindestbestand und Lagerkapazität. 
[Lade dir unsere Beispieldatei herunter](/assets/files/examples/Peakboard_Example_Date.xlsx) und füge sie, genau wie das Bild zuvor, per Drag and Drop hinzu. 
Nun liegt die Datei als Ressource im Paket. Wenn du später Excel Dateien von anderen Speicherorten einbinden willst, erfährst du [hier](/data_sources/Excel/de-excel.html), wie das geht. 

![Peakboard Designer – Excel Added](/assets/images/Tutorial/Get_Started/Peakboard_Get_Started_DE_08.png)
Füge die Ressource nun als Datenquelle hinzu. 
Klicke dazu links den Ordner [Daten] mit Rechtsklick an oder klicke auf […] und wähle im Menü [Datenquelle hinzufügen] und [Excel] aus. 
Vergib nun einen Namen für die Datenquelle Excel_File und wähle unter [Dokument] die hochgeladene Excel Datei aus. 
Definiere nun welches Arbeitsblatt verwendet werden soll und ob wie hier Überschriften in der ersten Zeile vorhanden sind. 
Mit [Ok] speicherst du. 
Voilà, du hast soeben deine erste Datenquelle angebunden. 

![Peakboard Designer – Add Data Source](/assets/images/Tutorial/Get_Started/Peakboard_Get_Started_DE_09.gif)

## 3.3 Daten und Control verbinden

Im letzten Schritt wird die Datenquelle mit einem Control verbunden. 
Rechts wählst du ein Control aus, in diesem Fall das Textfeld. 
Darunter, bei den Attributen findest du das Attribut [Text]. 
Klicke in dieser Zeile auf […] (1).  

![Peakboard Designer – Add Data Source](/assets/images/Tutorial/Get_Started/Peakboard_Get_Started_DE_10.png)

Wähle nun die Datenquelle sowie die gewünschte Spalte (Title) und Zeile (1) aus, in diesem Fall die Zeile 0 und die Spalte [Title] für die Überschrift. 
Beachte, dass in der Informationstechnik bei 0 angefangen wird zu zählen, daher ist Zeile 0 die erste Zeile. 
Die Zeile mit den Überschriften wird nicht beachtet. 
Bestätige mit [OK] und wird der Inhalt dieser Zelle deiner Datenquelle innerhalb der Textbox angezeigt. 

![Peakboard Designer – Add Data Source](/assets/images/Tutorial/Get_Started/Peakboard_Get_Started_DE_11.png)

Nun verbindest du noch die Datenquelle mit dem Gauge-Diagramm. 
Klicke dazu in der jeweiligen Spalte in den Attributen auf […] und wähle jeweils die Excel Datenquelle aus.
Definiere dann für das Feld [Daten / Wert] (1) die Spalte [Stock_Quantity], für das Feld [Minimum] (2) die Spalte [Min_Quantity] und für [Maximum] (3) die Spalte [Storage_Capacity]. 

![Peakboard Designer – Filled Gauge](/assets/images/Tutorial/Get_Started/Peakboard_Get_Started_DE_12.png)
# 4. Preview
Geschafft! 
Deine erste Visualisierung mit Peakboard ist fertig. 
Klicke in der Menüleiste unter dem Punkt [Startseite] auf [Vorschau] (1) um sie dir anzusehen. 

![Peakboard Designer – Preview Button](/assets/images/Tutorial/Get_Started/Peakboard_Get_Started_DE_13.png)

Es öffnet sich ein neuer Dialog, der dir das Ergebnis zeigt. Diese Visualisierung kann nun auf deine Peakboard Box übertragen werden.

# 5. Nächster Schritt

Wenn du bereits eine Peakboard Box besitzt, hilft dir der Artikel [Anschließen und die erste Visualisierung übertragen](https://help.peakboard.com/get_started/de-anschliessen-und-die-erste-visualisierung.html) bei deinen nächsten Schritten. 
Solltest du Probleme mit dem Peakboard Designer haben, zögere nicht mit uns in [Kontakt](mailto: support@peakboard.com) zu treten. 
Alle wichtigen Informationen dazu findest du unter [www.peakboard.com/academy](https://peakboard.com/academy/). 
Wir wünschen dir viel Spaß und Erfolg mit Peakboard!
