---
layout: article
title: Spalten hinzufügen, löschen und ändern
menu_title: Spalten hinzufügen, löschen und ändern
description: Spalten hinzufügen, löschen und ändern
lang: de
ref: flow-10
---
Dieser Abschnitt beschreibt die Schritte zum Erzeugen neuer Spalten, Löschen und Ändern der Metadaten (wie zum Beispiel der Datentyp).

## Add Column - Eine neue Spalte hinzufügen

Mit Add Column wird eine neue Spalte hinzugefügt. Mit welchem Inhalt genau die neue Spalte gefüllt wird entscheidet ein Lua-Ausdruck, der in das Texxtfeld geschrieben wird. Jeder gültige Lua-Ausdruck muss der Wert mit return zurückgeben. Für einen festen Wert könnte zum Beispiel einfach return "Hallo" angeben. Im nachfolgenden Beispiel wird eine neue Spalte mit Name TopCustomer angelegt. Je nach dem, ob in der Daten in der Spalte Umsatz ein Wert größer 10 enthalten ist, gibt der Ausdruck "Ja" zurück, ansonsten "Nein".

![Add Column](/assets/images/dataflows/dataflows-add-column01.png)

Mit dem Validate-Button kann die Gültigkeit des Scripts überprüft werden. In der Voransicht ist die neue Spalte sofort sichtbar. Die Logik zur Bildung wird ebenfalls direkt ausgeführt.

![Add Column](/assets/images/dataflows/dataflows-add-column02.png)

Es ist zu beachten, dass die Lua-Ausdrücke praktisch beliebig kompliziert werden können. Alle anderen Daten-Artefakte stehen im Script zur Verfügung, z.B. andere Datenquelle oder Variablen.

## Add Lookup Column - Ein neue Spalte mit Verweise auf eine andere Datenquelle hinzufügen

Mit Add Lookup Column wird eine neue Spalte hinzugefügt, die aus einer anderen Datenquelle stammt. Das folgende Beispiel zeigt das Prinzip. Basiswert ist die Spalte Kunde, die den Kundennamen enthält. Der Lookup ist so konfiguriert, dass dieser Wert mit der Spalte einer anderen Datenquelle verglichen wird (Lookup Data Source und Look Up Target Column). Wird eine passende Zeile gefunden, wird der Inhalt der Spalte Lookup Return Column zurückgegeben.

![Add Lookup Columns](/assets/images/dataflows/dataflows-add-lookup-column01.png)

Das folgende Bild zeigt das Ergebnis. Für jeden Kunden in der Transaktionstabelle wird der Wohnort aus der Datenquelle "kunden" herausgesucht. Es ist zu beachten, dass die Spalte einfach leerbleibt, wenn für einen Eintrag kein Wert gefunden werden kann. So lässt sich problemlos auch einmal die Anforderung realisieren, um Daten zu finden, die gerade KEINE Entsprechung in einer anderen Datenquelle haben. Man müsste in so einer Konstelletion dann einfach nur alle Zeile rausfiltern, die in der ergänzenden Spalte leer sind.

![Add Lookup Columns](/assets/images/dataflows/dataflows-add-lookup-column02.png)

## Remove Columns - Spalten löschen

Dieser Schritt ist im wesentlichen selbsterklärend. Alle angekreuzten Spalten werden entfernt und ab sofort nicht mehr angezeigt. Es sei an dieser Stelle allen Benutzern empfohlen, konsequent alle nicht benötigten Spalten zu eliminieren. Das macht die Datenflüsse und das ganze Board einfacher und schlanker.

![Remove Columns](/assets/images/dataflows/dataflows-remove-column01.png)

## Rename Columns - Spalten umbennen

Die Bedienung ist selbsterklärend. Nutzen Sie diesen Schritt um den Inhalt der Spalten so präzise wie möglich zu beschreiben. Oft kommen die Spalten schlecht benannt aus der Datenquelle (z.B. aus SAP). Benutzen Sie keine Unterstriche, denn sie sind hässlich. Benutzen Sie statt dessen lieber eine klassische Camel-Case-Notation mit Groß-/Kleinschreibung, z.B. MaxCustomerRevenue, MinCustomerRevenue, etc...

![Reorder Columns](/assets/images/dataflows/dataflows-rename-column01.png)

## Reorder Columns - Spalten umarrangieren

Mit Hilfe dieses Schritts können sie die Reihenfolge der Spalten ändern, um besser die Übersicht zu behalten. Nutzen Sie dieses Feature um Wichtiges von Unwichtigem zu trennen. Die Bedienung des Dialogs ist selbsterklärend.

![Reorder Columns](/assets/images/dataflows/dataflows-reorder-column01.png)

## Change data Type - Datentyp ändern

Mit Hilfe dieses Schritts können Sie die den Datentyp einer Spalte ändern. Typische Szenario für diesen Vorgang sind Zahlen, die als Zeichenfolge importiert werden, aber in echte numerische Typen umgewandelt werden, damit sie zum Beispiel in Aggregationen oder in Charts verwendet werden können.

![Change Data Type](/assets/images/dataflows/dataflows-change-datatype01.png)

## Sort Columns - Daten sortieren

Mit Hilfe dieses Schritts können Sie die Reihenfolge der Zeilen ändern. Es ist möglich, nach mehreren Spalten zu sortieren. Der Dialog ist selbsterklärend.

![Reorder Columns](/assets/images/dataflows/dataflows-sort-column01.png)




