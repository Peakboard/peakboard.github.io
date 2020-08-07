---
layout: article
title: Signal Block
menu_title: Signal Block
description: Information über Peakboard Designer Signal Block Control.
lang: de
weight: 690
ref: con-690
redirect_from:
---


Der Signal Block kann wie alle anderen Controls per Drag-and-Drop auf der Zeichenfläche platziert werden.
Neben den [Allgemeinen Eigenschaften]( https://help.peakboard.com/controls/de-allgemeine-eigenschaften.html) können in den Eigenschaften des Signal Blocks noch weitere Designmerkmale angepasst werden.


![image_1](/assets/images/Controls/Signal-Block/signalblock1.png)


Der eigentliche Nutzen des Signal Blocks liegt in den einfach zu erstellenden *Signal Rules*. Dafür muss der Signal Block zuerst durch einen Klick auf das Verkettungssymbol mit einer Datenquelle verbunden werden.

![image_1](/assets/images/Controls/Signal-Block/signalblock2.gif)

Anschließend kann über die *Signal Rules* die *Edit Signals* Maske geöffnet werden. (1)
In dieser können Regeln für die Signalschaltung hinzugefügt und verändert werden.
Neben der Farbe des Signals (2) kann der Grundzustand des Signals festgelegt werden. Hier besteht eine Auswahl zwischen An, Aus und Blinkend. (3) 


![image_1](/assets/images/Controls/Signal-Block/signalblock3.png)

 
Ein Klick auf das Zahnrad (4) öffnet die Maske in der die Regeln für die jeweilige Farbe eingestellt werden können.
Die zur verfügung stehenden Daten sind dabei die, die zuvor als Datenquelle ausgewählt wurden.  
Je nach Typ der Daten muss nun zuerst zwischen String, Number und Boolean ausgewählt werden. (5)
Anschließend kann dieser Wert mit einer eigenen Eingabe und Vergleichsoperatoren verglichen werden. (6)  
Dann muss noch ausgewählt werden was passieren soll, wenn die Regel zutrifft. Hier kann wieder zwischen Farbe Ein, Aus und Blinkend gewählt werden. (7)  
Über die Mülltonne und die Pfeile kann eine Regel gelöscht bzw. in ihrer Priorität verschoben werden. (8)  


![image_1](/assets/images/Controls/Signal-Block/signalblock4.png)


Die folgende Abbildung zeigt eine Regelschaltung für die Farbe Rot einer Ampel bei der zuvor über einen [Dataflow](https://help.peakboard.com/dataflows/de-erste-schritte.html) die Farbe in eine Spalte geschrieben wird.


![image_1](/assets/images/Controls/Signal-Block/signalblock6.png)


Nach bestätigung der Regeln gelangt man wieder in die *Edit Signals* Maske. Hier können abschließend auch noch einzelne Farben gelöscht bzw. verschoben werden.


![image_1](/assets/images/Controls/Signal-Block/signalblock7.png)


Die Folgende Abbildung soll die verschiedenen Arten zeigen wie der Signal Block gestaltet werden kann:


![image_1](/assets/images/Controls/Signal-Block/signalblock5.png)