---
layout: article
title: Webseitentabelle
menu_title: Webseitentabelle
description: Eine HTML-Tabelle von einer Webseite als Datenquelle in Peakboard einlesen (Web Scraping)
lang: de
weight: 2700
ref: dat-2700
redirect_from:
  - /data_sources/09-de-webpage.html
---

Mit der Datenquelle [Webpage table] liest du eine HTML-Tabelle, die auf einer Webseite enthalten ist, als Tabelle in Peakboard ein (Web Scraping). Eine allgemeine Einführung, wie du externe Datenquellen konfigurierst und an Controls koppelst, findest du im folgenden Tutorial:

[Erste Schritte mit externen Datenquellen am Beispiel einer XML-Datenquelle](/tutorials/03-de-xml-daten.html)

## Datenquelle hinzufügen

Füge die Datenquelle über einen Rechtsklick auf [Daten] und [Datenquelle hinzufügen] hinzu. Wähle die Kachel [Webpage table] (1) aus – du findest sie in der Kategorie [Web] oder über das Suchfeld.

![Webseitentabelle hinzufügen](/assets/images/data-sources/webpage/webpage-01-add.png)

Falls du keine passende Webseite zur Hand hast, sondern die Sache einfach nur einmal ausprobieren möchtest, kannst du die folgende Beispiel-URL verwenden. Sie enthält eine große Tabelle mit der Einwohnerzahl aller Länder:

[https://www.worldometers.info/world-population/population-by-country/](https://www.worldometers.info/world-population/population-by-country/)

Peakboard durchsucht die jeweilige Webseite nach HTML-Tabellen. Das funktioniert besonders gut, wenn das HTML syntaktisch korrekt ist. Werden die Daten auf einer Webseite nicht korrekt oder nur unvollständig erkannt, prüfe die HTML-Syntax der Seite.

## Verbindung und Tabelle konfigurieren

Vergib der Datenquelle einen eindeutigen Namen (1) und trage die URL der Webseite (2) ein. Falls die Webseite eine Authentifizierung verlangt, wählst du die Methode unter [Authentication Type] (3) – für die Beispiel-URL bleibt sie auf [None].

Mit einem Klick auf das Ladesymbol (4) durchsucht Peakboard die Seite nach HTML-Tabellen. Anschließend wählst du im Drop-down [Table on this page] (5) die gewünschte Tabelle aus – diese Beispielseite enthält nur eine Tabelle ([Table 0]).

Hat eine Tabelle keine echten HTML-Überschriften (`<th>`-Tag), heißen die Spalten zunächst `Column0`, `Column1`, … und die eigentlichen Überschriften stehen in der ersten Tabellenzeile. Aktiviere in diesem Fall die Checkbox [Use first row as header] (6), damit die erste Zeile als Spaltenüberschriften übernommen wird. Mit einem Klick auf [Load data] wird rechts eine Vorschau der gewählten Tabelle angezeigt – hier die Länder mit ihrer Einwohnerzahl. Bestätige anschließend mit [OK].

![Webseitentabelle konfigurieren](/assets/images/data-sources/webpage/webpage-02-configure.png)

Die Metadaten (Spalten und deren Datentyp) werden übernommen. Über den Bereich [Reload] legst du das Intervall für das automatische Auffrischen in Sekunden fest und beschränkst bei Bedarf die maximale Anzahl der Zeilen. Sollte sich die Quelle ändern, kannst du das Ermitteln der Tabellen über das Ladesymbol jederzeit erneut anstoßen.
