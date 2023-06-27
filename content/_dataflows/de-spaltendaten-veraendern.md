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
## Spalte aktualisieren

Mit diesem Schritt veränderst du die Daten einer Spalte mittels einer in einem Skript definierten Logik.

![Spalte aktualisieren](/assets/images/dataflows/dataflows_update-column.gif)

## Spaltentext ersetzen

Mit diesem Schritt ersetzt du ähnlich einer Suchen und Ersetzen-Funktion bestimmte Zeichen einer Spalte durch andere. Dieser Schritt funktioniert auch mit einem leeren String. Voraussetzung für diesen Schritt ist der Spaltentyp String.

![Spaltentext ersetzen](/assets/images/dataflows/dataflows_replace-column-text.gif)

## Zahlenformat festlegen (als String)

Mit diesem Schritt weist du numerischen Werten in einer Spalte mit dem Datentyp [String] ein bestimmtes Format zu.
Voraussetzung für diessen Schritt ist eine Spalte mit dem Datentyp String, die numerische Werte enthält. Bitte beachte: Es macht keinen Sinn, rein numerische Felder (Datentyp Number) mit diesem Schritt zu formatieren. Nutze hierfür besser die Attribute direkt bei der Ausgabe, zum Beispiel im jeweiligen Textfeld.

![Zahlenformat festlegen](/assets/images/dataflows/dataflows_set-format-for-number.gif)

## Datumsformat festlegen (als String)

Mit diesem Schritt wandelst du Datums- und Zeitwerte einer Spalte in ein anderes Format um. Voraussetzung für diesen Schritt sind Spalten mit dem Datentyp String, die Zeit-/Datumswerte enthalten.

![Datumsformat festlegen](/assets/images/dataflows/dataflows_set-date-format.gif)

## In Großbuchstaben umwandeln

Mit diesem Schritt konvertierst du alle Kleinbuchstaben einer Spalte zu Großbuchstaben. Voraussetzung für diesen Schritt sind Spalten mit dem Datentyp String.

![In Großbuchstaben umwandeln](/assets/images/dataflows/dataflows_uppercase-lowercase.gif)

## In Kleinbuchstaben umwandeln

Mit diesem Schritt konvertierst du alle Großbuchstaben einer Spalte zu Kleinbuchstaben. Voraussetzung für diesen Schritt sind Spalten mit dem Datentyp String.

![In Kleinbuchstaben umwandeln](/assets/images/dataflows/dataflows_uppercase-lowercase.gif)
