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

In der Kategorie **Spalten und Tabelle bearbeiten** des Auswahldialogs für Dataflow-Schritte findest du alle Schritte, mit denen du die Struktur deiner Tabelle anpasst: Spalten hinzufügen, umbenennen, umsortieren, ihren Datentyp ändern, Zeilen und Spalten tauschen oder Spalten entfernen. Wie du grundsätzlich einen Dataflow anlegst und Schritte hinzufügst, erfährst du in den [ersten Schritten mit Dataflows](/dataflows/de-erste-schritte.html).

![Schritte zum Bearbeiten von Spalten und Tabelle](/assets/images/dataflows/edit-columns/edit-columns-01-step-picker.png)

## Spalte hinzufügen

Mit diesem Schritt fügst du der Tabelle eine neue Spalte hinzu, deren Werte durch eine in einem Skript definierte Logik erstellt werden. Vergib im Feld [Name] (1) einen Spaltennamen und wähle den passenden [Datentyp] (2). Im Skript-Editor (3) hinterlegst du die Logik – über `item.Spaltenname` greifst du auf die Werte der anderen Spalten derselben Zeile zu. Mit dem Button [Skript testen] (4) prüfst du die Gültigkeit des Skripts. In der Vorschau ist die neue Spalte sofort sichtbar, die Logik zur Bildung wird ebenfalls direkt ausgeführt.

![Spalte hinzufügen](/assets/images/dataflows/edit-columns/edit-columns-02-add-column.png)

## Spalte umbenennen

Mit diesem Schritt benennst du Spalten um. Suche in der linken Spalte die gewünschte Spalte (1) und trage rechts daneben den neuen Namen ein (2). Nutze diesen Schritt, um den Inhalt der Spalten so präzise wie möglich zu beschreiben. Oft kommen die Spalten schlecht benannt aus der Datenquelle (z. B. aus SAP). Benutze keine Unterstriche. Benutze stattdessen lieber eine klassische Camel-Case-Notation mit Groß-/Kleinschreibung, z. B. MaxCustomerRevenue, MinCustomerRevenue, etc.

![Spalte umbenennen](/assets/images/dataflows/edit-columns/edit-columns-03-rename-column.png)

## Spaltenreihenfolge ändern

Mit diesem Schritt änderst du die Reihenfolge der Spalten, um besser die Übersicht zu behalten. Ziehe eine Spalte am Anfasser (1) per Drag-and-drop an die gewünschte Position. Nutze diesen Schritt, um Wichtiges von Unwichtigem zu trennen.

![Spaltenreihenfolge ändern](/assets/images/dataflows/edit-columns/edit-columns-04-reorder-columns.png)

## Spaltentyp ändern

Mit diesem Schritt änderst du den Datentyp einzelner Spalten. Wähle in der Zeile der gewünschten Spalte (1) den neuen Datentyp aus (2). Typische Szenarien für diesen Schritt sind Zahlen, die als Zeichenfolge importiert werden, aber in echte numerische Typen umgewandelt werden, damit sie zum Beispiel in Aggregationen oder in Charts verwendet werden können.

![Spaltentyp ändern](/assets/images/dataflows/edit-columns/edit-columns-05-change-data-type.png)

## Zeilen/Spalten tauschen

Mit diesem Schritt vertauschst du die Spalten und Zeilen der Tabelle und drehst diese somit. Die erste Spalte wird dabei zur Benennung der neuen Spalten herangezogen.

![Zeilen/Spalten tauschen](/assets/images/dataflows/edit-columns/edit-columns-06-switch-rows-columns.png)

## Spalten entfernen

Mit diesem Schritt entfernst du Spalten. Kreuze alle Spalten an, die entfernt werden sollen (1); mit [Alle auswählen] und [Alle abwählen] (2) wählst du alle Spalten auf einmal aus oder ab. Alle angekreuzten Spalten werden entfernt und ab sofort nicht mehr angezeigt. Wir empfehlen konsequent alle nicht benötigten Spalten zu entfernen um alles möglichst übersichtlich zu halten.

![Spalten entfernen](/assets/images/dataflows/edit-columns/edit-columns-07-remove-columns.png)
