---
layout: article
title: Tabelle parsen
menu_title: Tabelle parsen
description: Tabelle parsen
lang: de
weight: 7000
ref: flow-7000
---

In der Kategorie **Tabelle parsen** des Auswahldialogs für Dataflow-Schritte findest du die Schritte, mit denen du strukturierte Inhalte aus einer einzelnen Zelle in eine eigene Tabelle umwandelst – aus JSON oder aus XML. Wie du grundsätzlich einen Dataflow anlegst und Schritte hinzufügst, erfährst du in den [ersten Schritten mit Dataflows](/dataflows/de-erste-schritte.html).

## Tabelle aus JSON erstellen

Mit diesem Schritt erzeugst du basierend auf einem JSON-Array in einem bestimmten Tabellenfeld eine neue Tabelle. Voraussetzung für diesen Schritt sind Zellen, die ein JSON-Array enthalten.

Wähle unter [Selected Column] (1) die Spalte, die das JSON enthält, und unter [Selected Row] (2) die Zeile, deren Inhalt geparst werden soll. Im Feld [Path] (3) gibst du optional einen JSON-Pfad an, um gezielt in das JSON-Dokument hineinzunavigieren. Über die weiteren Optionen begrenzt du bei Bedarf die maximale Zeilenzahl, überspringst Zeilen oder verwendest den vollständigen Pfad als Spaltennamen.

![Tabelle aus JSON erstellen](/assets/images/dataflows/parse-table/parse-table-01-parse-json.png)

## Tabelle aus XML erstellen

Mit diesem Schritt erzeugst du basierend auf einem XML-String in einem bestimmten Tabellenfeld eine neue Tabelle. Voraussetzung für diesen Schritt sind Zellen, die einen XML-String enthalten.

Wähle unter [Selected Column] (1) die Spalte, die das XML enthält, und unter [Selected Row] (2) die zu parsende Zeile. Im Feld [Path] (3) gibst du optional einen Pfad an, um gezielt in das XML-Dokument hineinzunavigieren.

![Tabelle aus XML erstellen](/assets/images/dataflows/parse-table/parse-table-02-parse-xml.png)
