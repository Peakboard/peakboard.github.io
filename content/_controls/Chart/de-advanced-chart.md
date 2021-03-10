---
layout: article
title: Erweitertes Diagramm
menu_title: Erweitertes Diagramm
description: Information über das Control erweitertes Diagramm.
lang: de
weight: 600
ref: con-600
redirect_from:
---

Unter [Advanced Chart / Erweitertes Diagramm] findest du eine große Auswahl an Diagrammen, die du auch als Serie anlegen kannst. 
Stelle so zum Beispiel Daten aus unterschiedlichen Datenquellen ganz einfach in Form von Diagrammen dar und richte sie an einer gemeinsamen Achse aus.

![image_0](/assets/images/Controls/advanced-chart/advancedchart-00.png)

Um mehrere unterschiedliche Diagramme übereinander zu legen und jeweils mit einer Datenquelle zu verknüpfen, klickst du zunächst auf [Add / Hinzufügen].


### ERWEITERTES DIAGRAMM BEARBEITEN 

Nachdem du dein erstes Chart angelegt hast, kannst du über [Add Series / Serie hinzufügen] ein weiteres Chart hinzufügen [1].  

Hier bearbeitest du sowohl die allgemeinen Eigenschaften [2] deines zuvor gewählten Diagramms als auch sein Aussehen [3].  

Da sich die verschiedenen Diagramme in Ihrer Optik unterscheiden, unterscheiden sich auch ihre Eigenschaften.
Da jeder Charttyp ein kleines bisschen anders ist, sind auch die Eigenschaften nicht alle gleich und unterscheiden sich von Diagramm zu Diagramm. 
Es sollte aber kein Problem sein, die Spezifika einzelner Charttypen anhand der Eigenschaftennamen selbst herauszufinden.  

[4] Verknüpfe das Diagramm unter [Source / Datenquelle] zunächst mit einer Datenquelle deiner Wahl und bestimme einen Wert für die [X axis / X-Achse] und die [Y axis/ Y-Achse]. 
Die X-Achse beschreibt in der Regel die Beschriftung eines Datenpunkts, die Y-Achse seinen Wert. 
Im Beispiel des Tortendiagramms steuert die Y-Achse die Breite eines Tortenstücks, die X-Achse seine Beschriftung. 
Die konkrete Funktion von X- und Y-Achse ist für jedes Diagramm anders definiert.
[5] Unter [Sorting / Sortierung] legst du die Anordnung fest und unter [6] findest du die Möglichkeit Diagramm-spezifische allgemeine Eigenschaften anzupassen. 

Im rechten Teil des Dialogs wird eine Vorschau deines Diagramms angezeigt [7]. 

![image_1](/assets/images/Controls/advanced-chart/advancedchart-01.png)

Unter [Appearance] (3) finden sich weitere Einstellungsmöglichkeiten.

![image_2](/assets/images/Controls/advanced-chart/advancedchart-02.png)

### Eigenschaften
In den Eigenschaften des Advanced Chart lassen sich neben den [Allgemeinen Eigenschaften](https://help.peakboard.com/controls/de-allgemeine-eigenschaften.html) noch weitere wichtige Einstellungen vornehmen:

* [Show Gridline / Gitterlinien anzeigen]: Aktiviert bzw. deaktiviert die Gitterlinien für eine Achse
* [Label Intersect Action/ Label Schnittpunkt-Aktion]: Regelt wie vorgegangen werden soll wenn sich Beschriftungen überschneiden, hier stehen drei Modi zur Verfügung:
	* [Auto]: Bestimmt automatisch eine optimale Vorgehensweise
	* [Hide]: Lässt in regelmäßigen Abständen Beschriftungen aus
	* [Multiple Rows]: Erstellt mehrere Ebenen um alle Beschriftungen anzuzeigen
* [Label Rotation / Label-Drehung]: Dreht die Beschriftungen um den gewünschten Winkel
* [Striplines / Linie]: Gibt die Möglichkeit statische Linien zu bestimmten Werten zu erstellen die sich auch in regelmäßigen Abständen wiederholen können
* [Plot Offset]: Rückt die Tabelle um den gewünschten Wert ein
* [Opposed Position / Gegenläufige Position]: Tauscht die Position der Beschriftung von Links nach Rechts bzw. von Oben nach Unten
* [Show Label / Label anzeigen]: Ist diese Eigenschaft aktiviert wird die Legende angezeigt


![image_3](/assets/images/Controls/advanced-chart/advancedchart-03.png)