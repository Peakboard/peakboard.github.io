---
layout: article
title: Advanced Chart
menu_title: Advanced Chart
description: Information über Peakboard Designer Advanced Chart Control.
lang: de
weight: 600
ref: con-600
redirect_from:
---

Das Advanced Chart bietet eine große Auswahl an Charts an.
Hierbei ist es auch möglich, mehrere Charts in einer Serie anzulegen, sprich beispielsweise zwei oder mehr Balkendiagramme.
Dies ermöglicht es Daten aus unterschiedlichen Datenquellen anhand einer gemeinsamen Achse zu darzustellen.

![image_0](/assets/images/Controls/advanced-chart/advancedchart-00.png)

Die wichtigste Eigenschaft für die Steuerung der Charts ist hier die eingangs erwähnte Data-Series-Eigenschaft.
Sie erlaubt es, mehrere unterschiedliche Charts übereinander zu legen und jeweils mit einer Datenquelle zu verknüpfen.
Klicken Sie auf [Add](1) um eine neue Serie hinzuzufügen. Generell lassen sich nicht alle Chart-Typen miteinander kombinieren. 
Es macht zum Beispiel keinen Sinn, ein Pie-Chart und ein Linienchart übereinander zu legen. 


### Edit Advanced Chart Series
Im folgenden ist die allgemeine Konfiguration (2) eines einzelnen Charts erklärt. 
Da jeder Charttyp ein kleines bisschen anders ist, sind auch die Eigenschaften nicht alle gleich und unterscheiden sich von Diagramm zu Diagramm.
Es sollte aber kein Problem sein, die Spezifika einzelner Charttypen anhand der Eigenschaftennamen selbst herauszufinden.
Nach dem Hinzufügen eines neuen Chart-Typs muss dieses zunächst unter [Data] mit einer Datenquelle verknüpft werden (4).
Nahezu alle Charttypen haben eine X-Achse und eine Y-Achse. Die X-Achse ist in der Regel die Beschriftung eine Datenpunkts, die Y-Achse der Wert.
Im Beispiel kann man einen Pie-Chart sehen. 
Hier steuert die Y-Achse die Breite eines Küchenstücks, die X-Achse seine Beschriftung. 
Die konkrete Funktion von X und Y-Achse ist in jedem Charttyp anders definiert.
Unter [Sortierung] lässt sich die Anordnung festlegen (5).
Im weiteren Teil finden sich Chart spezifische allgemeine Eigenschaften (6).

Im rechten Teil des Dialogs wird eine Vorschau des generierten Charts zur Verfügung gestellt (7).


![image_1](/assets/images/Controls/advanced-chart/advancedchart-01.png)

Unter [Appearance] (3) finden sich weitere Einstellungsmöglichkeiten.

![image_2](/assets/images/Controls/advanced-chart/advancedchart-02.png)


### Eigenschaften
In den Eigenschaften des Advanced Chart lassen sich neben den [Allgemeinen Eigenschaften](https://help.peakboard.com/controls/de-allgemeine-eigenschaften.html) noch weitere wichtige Einstellungen vornehmen:

* Gridline: Aktiviert bzw. deaktiviert die Gitterlinien für eine Achse
* Intersect: Regelt wie vorgegangen werden soll wenn sich Beschriftungen überschneiden, hier stehen drei Modi zur Verfügung:
	* Auto: Bestimmt automatisch eine optimale Vorgehensweise
	* Hide: Lässt in regelmäßigen Abständen Beschriftungen aus
	* Multiple Rows: Erstellt mehrere Ebenen um alle Beschriftungen anzuzeigen
* Rotation: Dreht die Beschriftungen um den gewünschten Winkel
* Striplines: Gibt die Möglichkeit statische Linien zu bestimmten Werten zu erstellen die sich auch in regelmäßigen Abständen wiederholen können
* Plot Offset: Rückt die Tabelle um den gewünschten Wert ein
* Gegenläufige Werte: Tauscht die Position der Beschriftung von Links nach Rechts bzw. von Oben nach Unten
* Label: Ist diese Eigenschaft aktiviert wird die Legende angezeigt


![image_3](/assets/images/Controls/advanced-chart/advancedchart-03.png)