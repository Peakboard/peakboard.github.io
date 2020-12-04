---
layout: article
title: Dataflows - Erste Schritte
menu_title: Erste Schritte
description: Dataflows - Erste Schritte
lang: de
weight: 100
ref: flow-100
redirect_from:
  - /dataflows/01-de-erste-schritte.html
---
In Peakboard sind Datenquellen (Data Sources) für die Datenbeschaffung zuständig. Sie kommunzieren mit Quellsystemen aller Art und liefern (bis auf wenige Ausnahmen) die Daten in Form einer Tabelle ab. Entweder man greift dann von den Steuerelementen (Controls) auf diese tabellenartigen Daten zu und zeigt sie direkt an oder man benutzt ein Script, das die Daten aufbereitet. Beispiele dafür gibt es [hier](/scripting/de-tabellen-daten.html) oder [hier](/scripting/de-manipulieren.html). Mit den Dataflows, die in diesem Abschnitt besprochen werden, lassen sich unterschiedlichste Daten nachbearbeiten und zwar auf ein Weise, dass keine oder fast keine Kenntnisse im Scripting nötig sind. Typische Dinge, die man mit Dataflows macht sind

* Spalten sauber benennen und nicht benötigte Spalten löschen
* Datentypen anpassen
* Neue Spalten hinzufügen und sie mit Inhalten nach einer bestimmten Logik befüllen
* Mehrere Datenquellen miteinander verknüpfen - auch aus unterschiedlichen Vorsystemen - und zu einer einzelnen neuen Tabelle verschmelzen

Die Idee hinter den Dataflows ist, dass man ausgehend von einer einzelnen Tabelle nach und nach den Datenbestand in einzelnen Schritten verändert und zwar so lange, bis das Ergebnis den Wünschen entspricht. Die einzelnen Schritte kann der Benutzer im Peakboard-Designer für jeden Dataflow sehen, ändern und ergänzen. Anhand von Testdaten kann direkt jeder einzelne Schritt beobachtet werden. So lässt sich leicht kontrollieren, ob die Sequenz auch den gewünschten Effekt hat und am Ende das herauskommt, was man sich vorgestellt hat.

# Einen neuen Dataflow anlegen

Im Package Explorer finden Sie Dataflows als eine der Hauptartefakte eines jeden Pakets. Klicken Sie auf den entsprechenden Button, um einen neuen Dataflow anzulegen.

![Einen neuen Flow anlegen](/assets/images/dataflows/dataflows-create.png)

Im Hauptfenster muss dann die initiale Basis-Tabelle ausgewählt werden. Selbst wenn am Ende mehrere Tabellen an der Datentransformation beteiligt sind, startet der Dataflow immer mit genau einer Tabelle.

![Haupttabelle auswählen](/assets/images/dataflows/dataflows-maindialog-01.png)

Jetzt sind alle Vorbereitungen erledigt. Über den Add Step Button können nun weitere Transformationsschritte auf die Tabelle angewendet werden. Im rechten Bereich des Dialogs sind alle bereits angewendeten Schritte gelistet. Sie können im Nachhinein natürlich verändert oder gelöscht werden, falls das nötig sein sollte. Je nachdem, auf welchen Schritt man klickt, zeigt der linke Dialogbereich den Zustand der Daten NACH diesem Schritt. Im folgenden Bild ist das wenig spektakulär, weil der Datenbestand ja noch initial ist. Die Daten sind noch unverändert.

![Haupttabelle auswählen](/assets/images/dataflows/dataflows-maindialog-02.png)