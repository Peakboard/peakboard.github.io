---
layout: article
title: Peakboard Building Blocks
menu_title: Peakboard Building Blocks
description: Informatinon über die Peakboard Building Blocks
lang: de
weight: 104
ref: scr-104
redirect_from:
---

Die Visualisierungen oder interaktiven Boards, die man mit Peakboard bauen kann, können eine enorme Komplexität annehmen. 
Eine der größten Visionen, die Peakboard verfolgt ist diese Komplexität auch für nicht-Programmierer beherrschbar zu machen. 
Mit Scripting lassen sich zwar praktisch alle Anforderungen umsetzen, aber eben nur für Benutzer, die Scripting beherrschen und dies auch benutzen möchten. 
Für alle anderen bietet Peakboard unterschiedliche, alternative Ansätze. 
Dazu zählen die bedingte Formatierung für datenabhängige Anzeigelogik und die Dataflows für die Aufbereitung von eingehenden Daten. 
Anforderungen, die sich mit diesen beiden Features nicht erledigen lassen, erfordern doch wieder den Scripting-Ansatz. 
Mit den Peakboard Building Blocks allerdings können auch Scripting-unerfahrene Anwender diese Anforderung beherrschen, in dem sie grafisch angeleitet werden und keinen Code zu schreiben brauchen.

Öffnet man den [Script-Editor](/scripting/de-script-editor.html) (z.B. aus einem Button-Tapped-Event heraus oder einfach über den entsprechenden Knopf der Hautmaske) bietet sich dem Anwender die Möglichkeit, zwischen traditionellem Scripting (Code von Hand schreiben) und den Building Blocks (Programmablauf grafisch zusammenklicken) hin und her zu schalten (siehe Screenshot). 
Bitte beachten Sie, dass grafische Blöcke in Scripting Code zu konvertieren zwar möglich ist, aber die andere Richtung (Code existiert aber keine Blöcke) nicht machbar ist. 
Je nach Modus ändert sich der [Kommando-Baum](/scripting/de-script-tree.html) auf der rechten Seite. 
Über diesen Kommando-Baum können im Code-Modus einzelnen Befehle in Form von geschriebenen Snippets und im Block-Modus einzelne grafische Elemente per Drag & Drop in den Editor gezogen werden.
Die einzelnen Blöcke bilden einen logischen Programmablauf, der später zur Laufzeit von oben nach unten ausgeführt wird. 
Jeder Block entspricht einem Befehl und lässt sich an den vorherigen Block anfügen und leicht durch Drag & Drop so gestalten und ändern, wie es die Ablauflogik erfordert. 
Nicht mehr benötigte Blöcke können per Drag & Drop in den Mülleimer unten rechts entsorgt werden.

![BuildingBlocks01.png](/assets/images/scripting/buildingblocks/BuildingBlocks01.png)

Der Kommando-Block auf der rechten Seite ist so gestaltet, dass er weitestgehend selbsterklärend ist und zum selbst-Ausprobieren einlädt. 
Im oberen Bereich sind zunächst die Elemente aufgeführt, die in der aktuellen Visualisierung vorhanden sind. 
Sie sind hierarchisch angeordnet. 
Über die einzelnen Screens und die Steuerelemente der Screens kann bis zu einzelnen Eigenschaft eines Steuerelements heruntergedrillt werden. 
Der Screenshot zeigt zum Beispiel die Eigenschaft Text (also der tatsächliche Text) eine Textbox auf dem Haupt-Screen. 
Dieser Text-Knoten repräsentiert den eigentlich Text. 
Um den Text zu setzen (also schreibend auf die Eigenschaft zuzugreifen) muss noch ein Hierarchieleven weiter nach unten gedrillt werden. 
Dort finden wir das Element "Set Value".

![BuildingBlocks02.png](/assets/images/scripting/buildingblocks/BuildingBlocks02.png) 

Weiter unten im Kommando-Baum finden wir das Handling von so genannten Variablen. 
Variablen sind einfach nur Container, in die der Benutzer Werte (z.B. Texte, Zahlen, Listen) ablegen kann. 
Um eine neue Variable anzulegen, klicken Sie auf das Plus-Symbol.

![BuildingBlocks03.png](/assets/images/scripting/buildingblocks/BuildingBlocks03.png)

Der folgende Screenshot zeigt jetzt einen kleinen Programmablauf. 
In der ersten "Zeile" wird der Variablen "Outputtext" ein Text zugewiesen. 
Dieser Text setzt sich zusammen aus einem statischen Text-Block und dem dem Inhalt des bereits bekannten Textbox-Controls. 
In der zweiten Zeile wird dem Text durch den Block "Append Text" ein weiterer Text hinzugefügt. 
Die dritte Zeile zeigt die Ausgabe der Variable in einer Push-Notification.

![BuildingBlocks04.png](/assets/images/scripting/buildingblocks/BuildingBlocks04.png)

Das vorangegangene Beispiel zeigt alle wesentlichen Aspekte, die zum Bauen einfacher Programmlogik mit den Building Blocks nötig ist. 
Durch eine entsprechende Gruppierung sollte das Auffinden der gewünschten Logik im Kommando-Baum nahezu selbsterklärend sein. 
Ein gewisses Augenmerk liegt auf der Programmablauflogik. 
Der Ablauf muss nicht zwingend linear sein. 
Es kann auch Verzweigungen geben (if...then...) oder Schleifen. 
Das folgende Beispiel ist schon wesentlich komplexer als das Vorangegangene. 
Es soll eine Schleife über die Daten eine Datenquelle gebaut werden. 
Wenn in dieser Liste aus Produkten die Produktkategorie "Bikes" ist, soll das Gewicht aufsummiert werden. 
Zunächst wird die Variable "WeightAggregation" auf 0 gesetzt. 
Danach wird ein Loop-Block genutzt, um von 0 bis zur Anzahl der Datensätze in der Datenquelle zu iterieren. 
Dafür nutzen wir die Variable n. 
Über den Befehl "in list.... get string column" wird die Kategorie des Datensätze mit der Ordnungszahl n gecheckt, ob er "Bikes" lautet. 
Ist das der Fall, wird das Gewicht "Weight" des Datensatze zur Variablen "WeightAggregation" hinzuaddiert. 
Am Ende der Schleife wird der Wert in der Protokollkonsole ausgegeben.

![BuildingBlocks05.png](/assets/images/scripting/buildingblocks/BuildingBlocks05.png)