---
layout: article
title: XML
menu_title: XML
description: Information über XML Daten in Peakboard
lang: de
weight: 800
ref: dat-800
redirect_from:
  - /data_sources/08-de-xml.html
---
Dieser Artikel erklärt die Handhabung der Datenquelle für Daten im XML-Format. Die genaue Spezifikation und weitere Infos zu XML finden Sie [hier](https://de.wikipedia.org/wiki/Extensible_Markup_Language)

Ein schönes Beispiel für XML-Daten finden sich unter [diese XML-Datei](http://mysafeinfo.com/api/data?list=presidents&format=xml). 
Sie enthält einen Beispieldatensatz über die ersten 5 US-Präsidenten.

Gehen Sie nun in den Peakboard-Designer, legen Sie ein neues Board an, und klicken Sie links im Explorer unter Daten auf die [...]-Schaltfläche (1). 
Unter "Add Data Source" (2) wählen Sie anschließend XML als Datenquelle aus.

![image_1](/assets/images/data-sources/xml/xml-01.png)

In der Maske für die Konfiguration der XML-Datenquelle muss zunächst ein eindeutiger Name für die Datenquelle vergeben werden (z.B. Presidents).
Als "Source Type" wählen Sie **URL** und fügen dann per Copy & Paste die URL von oben aus ihrem Browser ein (1). 
Hier stehen aktuell folgende Quellsysteme zur Verfügung:
* **URL**
* **NetworkShareFile**
* **NetworkShareFileDirect**
* **File**

In diesem Fall benötigen Sie keine Authentifizierung und wählen daher unter "Authentication" den Typ **None**.
Bei der Authentifizierung unterstütz die XML-Datenquelle aktuell folgende Typen:
* **None**
* **Basic**
* **Bearer**
* **OAuth**

Unter "Specify" legen Sie über die [...]-Schaltfläche den Pfad fest (2).
Peakboard analysiert hierzu die Struktur der XML-Datei und zeigt den Baum der XML-Elemente an. 
Je nachdem welches Element man ausgewählt hat, werden unten alle Attribute angezeigt, die an oder unter dem gewählten Element liegen. 
Bestimmte Elemente brauchen wir später gar nicht. 
Hier kann man den Haken entfernen, dann tauchen sie im weiteren Verlauf gar nicht erst auf. 
Vor allem bei sehr komplexen XML-Files ist es ratsam frühzeitig alle Elemente wegzulassen, für die man keine Verwendung hat (3).

![image_1](/assets/images/data-sources/xml/xml-02.png)

Ein Klick auf OK übernimmt alle Werte in die Hauptmaske. Die korrekte Konfiguration lässt sich durch einen Klick auf Preview überprüfen. Hier kann auch die Plausibilität der Daten noch einmal kurz überprüft werden sowie der Datentyp gegebenenfalls geändert werden.

![image_1](/assets/images/data-sources/xml/xml-03.png)

