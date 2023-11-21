---
layout: article
title: JSON
menu_title: JSON
description: Information über JSON Daten in Peakboard
lang: de
weight: 1100
ref: dat-1100
redirect_from:
  - /data_sources/06-de-json.html
---

JSON ist ein hierarchisches Format. Es wird zur Übertragung und Speicherung strukturierter Daten eingesetzt.

Da Peakboard-Datenquellen immer tabellarisch sind, musst du unter Umständen einen Ausschnitt aus dem JSON-File auswählen.

Es ist möglich, innerhalb der JSON-Quelle entweder auf ein Array zu verweisen oder auf ein komplexes Objekt. Im Fall eines Arrays hat die Zieltabelle in Peakboard beliebig viele, im Fall des Objekts genau eine Zeile mit allen Elementen des Objekts als Spalten.

Um die JSON-Datenquelle zu konfigurieren, gibst du ihr einen Namen (1) und gibst im Bereich [Connection] die URL zur Quelle an (2).
Wenn deine Quelle eine Authentifizierung erfordert, kannst du dort auch die Authentifizierungsart wählen (3) und die entsprechenden Daten eingeben.

![JSON Datenquelle konfigurieren](/assets/images/data-sources/json/de_JSON-datasource-01.png)

Falls du keine eigene URL zu einer JSON-Datenquelle zur Hand hast, kannst du unsere Beispiel-URL nutzen, um den Einsatz von JSON zu testen:

[http://templates.peakboard.rocks:8888/api/RestView](http://templates.peakboard.rocks:8888/api/RestView)

Die Beispiel-Datenquelle enthält Bestelldaten. Sie liefert Bestellnummer, Bestelldatum, Produktionsziel (Anzahl der bestellten Produkte), Produktname und Produktnummer.

Im Bereich [Request] kannst du, falls nötig über den Button [Request Header oder Body editieren] (4) einen eigenen Header oder Body (nur für POST und PUT-Requests) definieren. Für den Body kannst du dann auch ein Skript anlegen.

Wenn du nur einen Teil des JSON-Inhalts nutzen willst, musst du im Bereich [Details angeben] im Textfeld [Pfad] (5) eine JSONPath Expression formulieren, die auf das Start-Element zeigt. Eine leere JSONPath Expression nimmt das Wurzelelement als Start.

Das Feld [Max. Zeilen] (6) begrenzt die Anzahl der Zeilen auf einen bestimmten Wert.

Wenn alle Einstellungen gemacht sind, kannst du dir mit [Daten laden] (7) eine Vorschau der Daten anzeigen lassen.

![JSON Datenquelle konfigurieren](/assets/images/data-sources/json/de_JSON-datasource-02.png)

In der Vorschau hast du die Möglichkeit, den Datentyp der jeweiligen Spalten noch zu ändern (8).

![JSON Datenquelle konfigurieren](/assets/images/data-sources/json/de_JSON-datasource-03.png)

Unter folgendem Link findest du ein Tutorial, wie generell externe Datenquellen konfiguriert und an Peakboard-Elemente gekoppelt werden:

[Erste Schritte mit externen Datenquellen am Beispiel einer XML-Datenquelle](/tutorials/03-de-xml-daten.html)
