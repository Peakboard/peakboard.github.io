---
layout: article
title: Spaltendaten verändern
menu_title: Spaltendaten verändern
description: Spaltendaten verändern
lang: de
weight: 2000
ref: flow-2000
redirect_from:
  - /dataflows/20-de-spalteninhalte-aendern.html
  - /dataflows/de-spalteninhalte-aendern.html
---

In der Kategorie **Spaltendaten verändern** des Auswahldialogs für Dataflow-Schritte findest du alle Schritte, mit denen du die Werte innerhalb einer Spalte umformst: per Skript neu berechnen, Textteile ersetzen, Zahlen und Datumswerte formatieren oder Texte in Groß- bzw. Kleinbuchstaben umwandeln. Wie du grundsätzlich einen Dataflow anlegst und Schritte hinzufügst, erfährst du in den [ersten Schritten mit Dataflows](/dataflows/de-erste-schritte.html).

## Spalte aktualisieren

Mit diesem Schritt veränderst du die Werte einer Spalte mittels einer in einem Skript definierten Logik. Wähle im Feld [Column] (1) die zu aktualisierende Spalte. Im Skript-Editor (2) hinterlegst du die Logik – über `item.Spaltenname` greifst du auf die Werte der anderen Spalten derselben Zeile zu, der Rückgabewert muss zum Datentyp der gewählten Spalte passen. Mit dem Button [Skript testen] (3) prüfst du die Gültigkeit des Skripts. Über den Umschalter [Script]/[Blocks] (4) wechselst du bei Bedarf in den visuellen Building-Blocks-Editor.

![Spalte aktualisieren](/assets/images/dataflows/manipulate-column-data/manipulate-column-data-01-update-column.png)

## Spaltentext ersetzen

Mit diesem Schritt ersetzt du ähnlich einer Suchen-und-Ersetzen-Funktion bestimmte Zeichen einer Spalte durch andere. Wähle die gewünschte [String column] (1), trage den zu ersetzenden Text in [Old text part] (2) ein und den neuen Text in [New text part] (3). Dieser Schritt funktioniert auch mit einem leeren String. Voraussetzung ist eine Spalte mit dem Datentyp String.

![Spaltentext ersetzen](/assets/images/dataflows/manipulate-column-data/manipulate-column-data-02-replace-column-text.png)

## Zahlenformat festlegen (als String)

Mit diesem Schritt weist du numerischen Werten in einer Spalte ein bestimmtes Format zu. Wähle die [String column] (1) und im Feld [Format] (2) das gewünschte Format, zum Beispiel [Currency]. Über den Button [...] (3) öffnest du den erweiterten Format-Editor für ein individuelles Format. Voraussetzung ist eine Spalte mit dem Datentyp String, die numerische Werte enthält. Bitte beachte: Es macht keinen Sinn, rein numerische Felder (Datentyp Number) mit diesem Schritt zu formatieren. Nutze hierfür besser die Attribute direkt bei der Ausgabe, zum Beispiel im jeweiligen Textfeld.

![Zahlenformat festlegen](/assets/images/dataflows/manipulate-column-data/manipulate-column-data-03-set-format-number.png)

## Datumsformat festlegen (als String)

Mit diesem Schritt wandelst du Datums- und Zeitwerte einer Spalte in ein anderes Format um. Wähle die [String column] (1) und im Feld [Format] (2) das gewünschte Datums- bzw. Zeitformat. Über den Button [...] (3) öffnest du den erweiterten Format-Editor. Voraussetzung ist eine Spalte mit dem Datentyp String, die Zeit- bzw. Datumswerte enthält.

![Datumsformat festlegen](/assets/images/dataflows/manipulate-column-data/manipulate-column-data-04-set-format-date.png)

## In Groß- oder Kleinbuchstaben umwandeln

Mit diesem Schritt konvertierst du den Inhalt einer Spalte komplett in Groß- oder Kleinbuchstaben. Wähle die [String column] (1) und stelle über die Auswahl [UPPER and lowercase] (2) ein, ob der Text in [UPPERCASE] (Großbuchstaben) oder [lowercase] (Kleinbuchstaben) umgewandelt werden soll. Voraussetzung ist eine Spalte mit dem Datentyp String.

![In Groß- oder Kleinbuchstaben umwandeln](/assets/images/dataflows/manipulate-column-data/manipulate-column-data-05-uppercase-lowercase.png)
