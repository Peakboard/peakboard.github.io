---
layout: article
title: Spalteninhalte verändern
menu_title: Spalteninhalte verändern
description: Spalteninhalte verändern
lang: de
weight: 2000
ref: flow-2000
redirect_from:
  - /dataflows/20-de-spalteninhalte-aendern.html
---
Dieser Abschnitt beschreibt die möglichen Schritte, um den Inhalt von Spalten zu manipulieren.

## Lowercase Column - Inhalt in Kleinbuchstaben umwandeln

Dieser Schritt konvertiert alle Großbuchstaben einer Datenzelle in Kleinbuchstaben.

![Lowercase Column](/assets/images/dataflows/dataflows-lowercase01.png)

## Uppercase Column - Inhalt in Großbuchstaben umwandeln

Dieser Schritt konvertiert alle Kleinbuchstaben einer Datenzelle in Großbuchstaben.

![Uppercase Column](/assets/images/dataflows/dataflows-uppercase01.png)

## Replace Column Text - Text ersetzen

Dieser Schritt wandelt alle Vorkommnisse eines bestimmten Texts in einen anderen Text um. Das funktioniert auch mit einer leeren Zeichenfolge. Im folgenden Beispiel werden alle leeren Spalten gegen "N/A" ersetzt.

![Replace Column](/assets/images/dataflows/dataflows-replace-text01.png)

## Set Number Format - Zahlen formatieren

Dieser Schritt dient dazu, Zahlen, die als String abgelegt sind, ein anderes Format zuzuweisen. Dabei kommt diesselbe Format-Technik zum Einsatz, wie wir sie auch schon für Textfelder oder Tablegrids benutzen. Infos dazu finden sich [hier](https://help.peakboard.com/misc/03-de-formatieren-von-Werten.html). Bitte beachten Sie: Es macht keinen Sinn, rein numerische Felder (Datentyp Number) hier zu formatieren. Das machen Sie am besten direkt bei der Ausgabe (z.B. im jeweiligen Textfeld).

![Replace Column](/assets/images/dataflows/dataflows-set-number-format01.png)

## Set Date/Time Format - Datumswerte formatieren

Dieser Schritt dient dazu, Datumswerte in ein anderes Format umzuwandeln. Dabei kommt diesselbe Format-Technik zum Einsatz, wie wir sie auch schon für Textfelder oder Tablegrids benutzen. Infos dazu finden sich [hier](https://help.peakboard.com/misc/03-de-formatieren-von-Werten.html). 

![Replace Column](/assets/images/dataflows/dataflows-set-date-format01.png)

## Update Column - Daten ändern

Dieser Schritt dient dazu, Daten nach einer gewissen Logik zu ändern. Die gewünschte Logik wird wie bei "Create Column" mit einem Lua-Ausdruck gesetzt. Das folgende Beispiel zeigt die Manipulation der Spalte Material. Sobald "4711" als Wert enthalten ist, wird der Inhalt auf "N/A" gesetzt. Die Logik kann beliebig kompliziert werden. Andere Spalte können natürlich genauso Teil der Logik sein wie andere Datenquellen oder Variablen. 

![Replace Column](/assets/images/dataflows/dataflows-update-column01.png)