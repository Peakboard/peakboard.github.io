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

Um das Erstellen von Visualisierungen und interaktiven Dashboards zu vereinfachen, bietet Peakboard bereits mehrere Ansätze. 
Zum einen gibt es die [bedingte Formatierung](/controls/de-cf.html) für datenabhängige Darstellungslogik, zum anderen unterstzützen [Dataflows](/dataflows/de-erste-schritte.html) dabei, eingehende Daten für die Visualisierung aufzubereiten. 
Anforderungen, die mit diesen beiden Features nicht erfüllt werden können, erfordern hingegen oft Programmierkenntnisse. 
Mit den Peakboard Building Blocks können nun auch Skripting-unerfahrene Anwender und Anwenderinnen durch simples Zusammenklicken grafischer Blöcke diese Anforderungen erfüllen, und zwar ganz ohne dabei selbst Code schreiben zu müssen.

### Peakboard Building Blocks im Skript-Editor
Im [Skript-Editor](/scripting/de-script-editor.html) hast du die Möglichkeit über den Regler oben Rechts auszuwählen, ob du den benötigten Code selbst schreiben oder mithilfe der Peakboard Building Blocks zusammenklicken möchtest.

<div class="box-warning" markdown="1">
Es ist möglich, durch Betätigen des Reglers von der grafischen Ansicht der Buidling Blocks zum geschriebenen Code zu wechseln, andersherum funktioniert dies jedoch nicht.
</div>

Je nach ausgewähltem Modus, ändert sich der [Skript-Baum](/scripting/de-script-tree.html) auf der rechten Seite. 
Wähle also [Block Mode] um mit den Peakboard Building Blocks zu arbeiten. 
Jeder Building Block entspricht einem Befehl und lässt sich an den vorherigen per Drag & Drop anfügen und so gestalten, wie es die Ablauflogik erfordert. 
Die zusammengesetzten Building Blocks bilden einen logischen Programmablauf, der später von oben nach unten ausgeführt wird. 
Nicht mehr benötigte Building Blocks können per Drag & Drop in den Mülleimer gelöscht werden. 

![BuildingBlocks01.png](/assets/images/scripting/buildingblocks/BuildingBlocks01.png)

### Der Skript-Baum

Im oberen Bereich des [Skript-Baums](/scripting/de-script-tree.html) findest du alle Elemente aufgeführt, die in deiner aktuellen Visualisierung verwendet wurden. 
Hast du in deiner Visualisierung zum Beispiel einen [Text](/controls/Common/de-text-block.html) platziert und dem Control einen Namen gegeben, so kannst du eine Hierarchieebene unter [Text] auf [Set Value] klicken und so seine Eigenschaften anpassen. 

### Variablen anlegen

Weiter unten im Skript-Baum findest du die sogenannten Variablen. 
Variablen sind Container, in die du Werte wie Texte, Zahlen oder Listen ablegen kannst. 
Um eine neue Variable anzulegen, klicke einfach auf [+]. 

![BuildingBlocks03.png](/assets/images/scripting/buildingblocks/BuildingBlocks03.png)

### Beispiel für einen Porgramm-Ablauf

Der folgende Screenshot zeigt einen Programmablauf, mit dem ein Text dynamisch angepasst werden kann, zum Beispiel, um zu einer bestimmten Uhrzeit eine bestimmte Nachricht auf deinem Dashboard anzuzeigen. 
Lege also zunächst das Control [Text](/controls/Common/de-text-block.html) an und gib ihm einen Namen. 
Wie das geht, siehst du in unserem Helpartikel zum Thema. 
Anschließend öffnest du den Skript-Editor und wechselst in den [Building Blocks Mode].  
In der ersten Zeile des Programmablaufs wird der Variablen [Outputtext] ein Text zugewiesen. 
Dieser Text setzt sich zusammen aus dem Control [Text] und dem Inhalt des Controls [Textblock]. 
In der zweiten Zeile wird dem Text durch den Building Block [Append Text] ein weiterer Text hinzugefügt. 
Die dritte Zeile zeigt die Ausgabe der Variable in einer Push-Notification. 

![BuildingBlocks04.png](/assets/images/scripting/buildingblocks/BuildingBlocks04.png)

Der Ablauf muss dabei nicht zwingend linear sein und lässt auch Verzweigungen wie „if… then…“ sowie Schleifen zu. 

Im nächsten Beispiel siehst du, wie du eine Schleife über die Daten einer Datenquelle anlegst. 
Wenn in der Liste aus Produkten die Produktkategorie “Bikes” ist, soll das Gewicht aufsummiert werden. 
Zunächst wird die Variable “WeightAggregation” auf 0 gesetzt. 
Danach wird ein Loop Building Block genutzt, um von 0 bis zur Anzahl der Datensätze in der Datenquelle zu iterieren. 
Dafür nutzen wir die Variable "n". 
Über den Befehl “in list…. get string column” wird die Kategorie des Datensätze mit der Ordnungszahl "n" gecheckt, ob er “Bikes” lautet. 
Ist das der Fall, wird das Gewicht “Weight” des Datensatzes zur Variablen “WeightAggregation” addiert. 
Am Ende der Schleife wird der Wert in der Protokollkonsole ausgegeben. 

![BuildingBlocks05.png](/assets/images/scripting/buildingblocks/BuildingBlocks05.png)
