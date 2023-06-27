---
layout: article
title: Spalten und Tabelle bearbeiten
menu_title: Spalten und Tabelle bearbeiten
description: Spalten und Tabelle bearbeiten
lang: de
weight: 1000
ref: flow-1000
redirect_from:
  - /dataflows/10-de-spalten-hinzufuegen-loeschen-aendern.html
  - /dataflows/de-spalten-hinzufuegen-loeschen-aendern.html
---
## Spalte hinzufügen

Mit diesem Schritt fügst du der Tabelle eine neue Spalte hinzu, deren Werte / Daten / Inhalte durch eine in einem Skript definierte Logik erstellt werden.

![Spalte hinzufügen](/assets/images/dataflows/dataflows_add-column.gif)

Mit dem Button [Validieren] kannst du die Gültigkeit des Scripts überprüfen. In der Voransicht ist die neue Spalte sofort sichtbar. Die Logik zur Bildung wird ebenfalls direkt ausgeführt.

## Spalte umbenennen

Mit diesem Schritt benennst du Spalten um. Nutze diesen Schritt, um den Inhalt der Spalten so präzise wie möglich zu beschreiben. Oft kommen die Spalten schlecht benannt aus der Datenquelle (z.B. aus SAP). Benutze keine Unterstriche. Benutze stattdessen lieber eine klassische Camel-Case-Notation mit Groß-/Kleinschreibung, z.B. MaxCustomerRevenue, MinCustomerRevenue, etc.

![Spalte umbenennen](/assets/images/dataflows/dataflows_rename-column.gif)

## Spaltenreihenfolge ändern

Mit diesem Schritt änderst du die Reihenfolge der Spalten, um besser die Übersicht zu behalten. Nutze diesen Schritt, um Wichtiges von Unwichtigem zu trennen.

![Spaltenreihenfolge ändern](/assets/images/dataflows/dataflows_reorder-column.gif)

## Spaltentyp ändern

Mit diesem Schritt änderst du den Datentyp einzelner Spalten. Typische Szenarien für diesen Schritt sind Zahlen, die als Zeichenfolge importiert werden, aber in echte numerische Typen umgewandelt werden, damit sie zum Beispiel in Aggregationen oder in Charts verwendet werden können.

![Spaltentyp ändern](/assets/images/dataflows/dataflows_change-datatype.gif)

## Zeilen/Spalten tauschen

Mit diesem Schritt vertauschst du die Spalten und Zeilen der Tabelle und drehst diese somit. Die erste Spalte wird dabei zur Benennung der neuen Spalten herangezogen.

![Zeilen/Spalten tauschen](/assets/images/dataflows/dataflows_switch-rows-columns.gif)

## Spalten entfernen

Mit diesem Schritt entfernst du Spalten. Alle angekreuzten Spalten werden entfernt und ab sofort nicht mehr angezeigt. Wir empfehlen konsequent alle nicht benötigten Spalten zu entfernen um alles möglichst übersichtlich zu halten.

![Spalten entfernen](/assets/images/dataflows/dataflows_remove-columns.gif)
