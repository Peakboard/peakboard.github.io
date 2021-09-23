---
layout: article
title: Deine ersten Schritte mit Dataflows
menu_title: Erste Schritte
description: Dataflows - Erste Schritte
lang: de
weight: 100
ref: flow-100
redirect_from:
  - /dataflows/01-de-erste-schritte.html
---
Datenquellen oder Data Sources kommunizieren mit Quellsystemen aller Art und liefern die Daten meist in Form einer Tabelle.
Um diese Daten anzuzeigen, greift man entweder mit den [Controls](/controls/de-allgemeine-eigenschaften.html) darauf zu oder benutzt zunächst ein [Script](/scripting/de-script-engine.html), um sie aufzubereiten.
Wie du [Daten per Skript weiterverarbeitest](/scripting/de-manipulieren.html) oder wie man [Tabellendaten manipuliert](/scripting/de-tabellen-daten.html), erfährst du in den beiden Artikeln.
In diesem Artikel zeigen wir dir, wie du verschiedene Daten mithilfe von Dataflows nachbearbeitest, auch ohne tiefgehende Scripting Kenntnisse. 
Mit Dataflows lassen sich zum Beispiel:  

* [Spalten umbenennen und unnötige Spalten löschen.](https://help.peakboard.com/dataflows/de-spalten-hinzufuegen-loeschen-aendern.html#:~:text=Remove%20Columns%20-%20Spalten%20l%C3%B6schen)
* [Datentypen anpassen.](https://help.peakboard.com/dataflows/de-spalten-hinzufuegen-loeschen-aendern.html#:~:text=Change%20data%20Type%20-%20Datentyp%20%C3%A4ndern)
* [Neue Spalten hinzufügen und sie mit Inhalten nach einer bestimmten Logik befüllen.](/dataflows/de-spalten-hinzufuegen-loeschen-aendern.html)
* [Mehrere Datenquellen, auch aus unterschiedlichen Vorsystemen, miteinander verknüpfen und zu einer einzelnen neuen Tabelle verbinden.](/dataflows/de-daten-joinen.html) 

Dataflows ermöglichen es ausgehend von einer einzelnen Tabelle schrittweise den Datenbestand anzupassen, bis das Ergebnis deinen Wünschen entspricht. 
Die einzelnen Schritte kannst du im Peakboard Designer für jeden Dataflow einsehen, ändern und ergänzen. 
So lässt sich leicht kontrollieren, ob die Sequenz auch den gewünschten Effekt hat und das Ergebnis erscheint. 

## Einen neuen Dataflow anlegen

Klicke im Explorer auf […] neben [Dataflows] oder neben deiner [Datenquelle] um einen neuen Dataflow anzulegen. 

![Einen neuen Dataflow anlegen](/assets/images/dataflows/getting-started/dataflows-create.png)

Wähle nun deine Basis-Tabelle aus (1) und bestätige diese mit [OK] (2). 
Selbst wenn am Ende mehrere Tabellen an der Datentransformation beteiligt sind, startet der Dataflow immer mit genau einer Tabelle.
Im Textfeld (3) kannst du einen eindeutigen Namen zur leichteren Identifikation des Dataflows vergeben.

![Haupttabelle auswählen](/assets/images/dataflows/getting-started/dataflows-maindialog-01.png)

Jetzt sind alle Vorbereitungen getroffen. 
Über [Add Step] (4) können nun weitere Transformationsschritte auf die Tabelle angewendet werden. 
Im rechten Bereich des Dialogs sind alle bereits angewendeten Schritte aufgelistet. 
Sie können nachträglich natürlich verändert oder gelöscht werden. 
Klicke auf einen der Schritte und lass dir im Dialogbereich links des Zustands der Daten **NACH** diesem Schritt anzeigen. 
Der Datenbestand in diesem Beispiel ist, wie du im Screenshot unten sehen kannst, noch in seinem Ausgangszustand.  

Zuletzt kann noch eingestellt werden, ob der Dataflow zusammen mit seiner Quelle aktualisiert werden soll oder einem eigenen Intervall folgt (5).

![Haupttabelle auswählen](/assets/images/dataflows/getting-started/dataflows-maindialog-02.png)
