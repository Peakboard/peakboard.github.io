---
layout: article
title: Deine ersten Schritte mit Dataflows
menu_title: Basics
description: Dataflows - Erste Schritte
lang: de
weight: 100
ref: flow-100
redirect_from:
  - /dataflows/01-de-erste-schritte.html
---

Unterschiedliche Datenquellen kommunizieren mit Quellsystemen aller Art und liefern die Daten meist in Form einer Tabelle.
Um diese Daten anzuzeigen, greifst du entweder mit den Controls darauf zu oder benutzt zunächst ein Skript, um sie aufzubereiten.
Wie du [Daten per Skript weiterverarbeitest](/scripting/de-tabellen-daten.html) oder wie du [Tabellendaten manipulieren](/scripting/de-manipulieren.html) kannst, erfährst du in den entsprechenden Artikeln.
In diesem Artikel zeigen wir dir, wie du verschiedene Daten mithilfe von Dataflows nachbearbeitest, auch ohne tiefgehende Skripting Kenntnisse.
Mit Dataflows lassen sich zum Beispiel:  

* [Unnötige Spalten entfernen](/dataflows/de-spalten-bearbeiten.html#spalten-entfernen) und [Spalten umbenennen.](/dataflows/de-spalten-bearbeiten.html#spalte-umbenennen)
* [Datentypen anpassen.](/dataflows/de-spalten-bearbeiten.html#spaltentyp-%C3%A4ndern)
* [Neue Spalten hinzufügen und sie mit Inhalten nach einer bestimmten Logik befüllen.](/dataflows/de-spalten-bearbeiten.html)
* [Mehrere Datenquellen, auch aus unterschiedlichen Vorsystemen, mithilfe von Joins verknüpfen und zu einer einzelnen Tabelle verbinden.](/dataflows/de-tabellen-vereinen.html)

Dataflows ermöglichen es dir ausgehend von einer einzelnen Tabelle schrittweise den Datenbestand anzupassen, bis das Ergebnis deinen Wünschen entspricht.
Die einzelnen Schritte kannst du im Peakboard Designer für jeden Dataflow einsehen, ändern und ergänzen.
So kannst du leicht kontrollieren, ob die Sequenz auch den gewünschten Effekt hat und das Ergebnis erscheint.

## Einen neuen Dataflow anlegen

Um einen neuen Dataflow anzulegen, klicke auf [...] neben [Daten] oder führe einen Rechtsklick darauf aus und wähle [Dataflow hinzufügen] (1).

![Dataflow anlegen](/assets/images/dataflows/getting-started/de_dataflows_create-01.png)

Nun musst du deine Basis-Tabelle auswählen (2) und mit [OK] (3) bestätigen.

![Basis-Tabelle auswählen](/assets/images/dataflows/getting-started/de_dataflows_create-02.png)

Dieser Schritt wird ausgelassen wenn du um den Dataflow anzulegen auf [...] direkt neben deiner Datenquelle die du als Basis-Tabelle nutzen möchtest klickst oder einen Rechtsklick darauf machst und [Daten mit einem Dataflow verarbeiten] (4) auswählst.

![Dataflow alternativ anlegen](/assets/images/dataflows/getting-started/de_dataflows_create-03.png)

Selbst wenn am Ende mehrere Tabellen an der Datentransformation beteiligt sind, startet der Dataflow immer mit genau einer Tabelle.
Im Textfeld (5) vergibst du einen eindeutigen Namen zur leichteren Identifikation des Dataflows.
Über das [+] Symbol (6) kannst du nun weitere Transformationsschritte auf die Tabelle anwenden. Es stehen außerdem einige häufig genutzte Schritte zur Schnellauswahl zur Verfügung (7).

![Schritt hinzufügen](/assets/images/dataflows/getting-started/de_dataflows_create-04.png)

In dem sich öffnenden Auswahldialog kannst du alle verfügbaren Schritte einsehen. Wenn du einen der Schritte anklickst werden dir weitere Informationen zum jeweiligen Schritt angezeigt um die die Auswahl des richtigen Schrittes so einfach wie möglich zu machen.

![Schritt hinzufügen Dialog](/assets/images/dataflows/getting-started/de_dataflows_create-05.png)

Im linken Bereich des Dialogs sind alle bereits angewendeten Schritte aufgelistet.
Diese kannst du auch nachträglich verändern oder löschen. Du kannst die Schritte jederzeit umbenennen und auch nachträglich deren Reihenfolge ändern. Außerdem kannst du einzelne Schritte deaktivieren oder wieder aktivieren.
Klicke auf einen der Schritte und lass dir im Dialogbereich rechts den Zustands der Daten **NACH** diesem Schritt anzeigen.

![Ergebnis](/assets/images/dataflows/getting-started/de_dataflows_create-01.gif)

Eine weitere Alternative zum Hinzufügen der Schritte über den Auswahldialog ist das Kontextmenü direkt in der Datenvorschau.
Durch einen Rechtsklick auf den Bereich den du verändern möchtest werden dir passende Schritte für diesen Bereich angezeigt.

![Kontextmenü](/assets/images/dataflows/getting-started/de_dataflows_create-02.gif)

Zuletzt kannst du unter [Nachlade-Status] noch einstellen, ob der Dataflow beim Start der Visualisierung, in einem gewählten Intervall, von einem Reload Flow oder zusammen mit seiner Quelle aktualisiert werden soll (8).

![Nachlade-Status](/assets/images/dataflows/getting-started/de_dataflows_create-06.png)
