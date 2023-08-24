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

Dieser Artikel erklärt die Handhabung der Datenquelle für Daten im XML-Format. Die genaue Spezifikation und weitere Infos zu XML findest du [beispielsweise in diesem Wikipedia Artikel](https://de.wikipedia.org/wiki/Extensible_Markup_Language)

Ein schönes Beispiel für XML-Daten findest du unter [dieser XML-Datei](http://mysafeinfo.com/api/data?list=presidents&format=xml).
Sie enthält einen Beispieldatensatz über die ersten 5 US-Präsidenten.

Öffne den Peakboard-Designer, legen Sie ein neues Projekt an, und klicke links im Explorer unter Daten auf den [...]-Button oder führe alternativ einen Rechtsklick darauf aus.
Wähle dann unter [Datenquelle hinzufügen] XML (1) als Datenquelle aus.

![XML Datenquelle hinzufügen](/assets/images/data-sources/xml/de_xml-01.png)

In der Maske für die Konfiguration der XML-Datenquelle vergibst du zunächst einen eindeutigen Namen (1) für die Datenquelle (z.B. XMLtest).
Als [Quelltyp] (2) wählst du [URL] und fügst dann per Copy & Paste die URL von oben aus deinem Browser ein (3).
Hier stehen aktuell folgende Quellsysteme zur Verfügung:

* **URL**
* **Lokales Netzwerk**
* **Datei**
* **OneDrive**
* **SharePoint**

In diesem Fall benötigst du keine Authentifizierung und wählst daher unter [Authentication Type] den Typ [None] (4).
Bei der Authentifizierung unterstützt die XML-Datenquelle aktuell folgende Typen:

* **None**
* **Basic**
* **Bearer**
* **OAuth**

Im Bereich [Request] (5) kannst du falls nötig die gewünschte Methode wählen und mit dem Button [Request Header oder Body editieren] den Header und Body (Nur bei PUT oder POST Requests) nach deinen Vorstellungen anpassen.

Im Bereich [Details angeben] legst du den Pfad durch einen Klick auf den [...]-Button hinter dem Textfeld (6) fest.

![XML Dialog](/assets/images/data-sources/xml/de_xml-02.png)

Peakboard analysiert hierzu die Struktur der XML-Datei und zeigt den Baum der XML-Elemente an.
Je nachdem welches Element du ausgewählt hast, werden unten alle Attribute angezeigt, die an oder unter dem gewählten Element liegen.
Bestimmte Elemente brauchst du später gar nicht.
Hier kannst du den Haken entfernen, dann tauchen sie im weiteren Verlauf gar nicht erst auf.
Vor allem bei sehr komplexen XML-Files ist es ratsam frühzeitig alle Elemente wegzulassen, für die du keine Verwendung hast.

![XML Pfad Dialog](/assets/images/data-sources/xml/de_xml-03.png)

Mit einem Klick auf OK übernimmst du alle Werte in die Hauptmaske. Die korrekte Konfiguration kannst du durch einen Klick auf [Daten laden] überprüfen. In der Vorschau kannst du dann auch die Plausibilität der Daten noch einmal kurz überprüfen sowie den Datentyp gegebenenfalls ändern (1).

![Daten prüfen](/assets/images/data-sources/xml/de_xml-04.png)
