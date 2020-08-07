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


Data / Series Eigenschaft - Charttypen und Daten verknüpfen:
Die wichtigste Eigenschaft für die Steuerung der Charts ist die Data-Series-Eigenschaft.
Sie erlaubt es, mehrere unterschiedliche Charts übereinander zu legen und jeweils mit einer Datenquelle zu verknüpfen.
Klicken Sie auf *Add* um eine neue Serie hinzuzufügen. Generell lassen sich nicht alle Chart-Typen miteinander kombinieren. 
Es macht zum Beispiel keinen Sinn, ein Pie-Chart und ein Linienchart übereinander zu legen. Im folgenden ist die Konfiguration eines einzelnen Charts erklärt. 
Da jeder Charttyp ein kleines bisschen anders ist, sind auch die Eigenschaften nicht alle gleich.
Es sollte aber kein Problem sein, die Spezifika einzelner Charttypen anhand der Eigenschaftennamen selbst herauszufinden.
Nach dem Hinzufügen eines neuen Chart-Typs muss zunächst die Bindung zu einer Datenquelle hergestellt werden (Bereich *Binding*).
Nahezu alle Charttypen haben eine X-Achse und eine Y-Achse. Die X-Achse ist in der Regel die Beschriftung eine Datenpunkts, die Y-Achse der Wert.
Im Beispiel kann man einen Pie-Chart sehen. Hier steuert die Y-Achse die Breite eines Küchenstücks, die X-Achse seine Beschriftung. Die konkrete Funktion von X und Y-Achse ist in jedem Charttyp anders definiert.
Im Bereich *Appearance* und *General* lassen sich weitere sehr detaillierte Attribute für jeden Chart-Typ einstellen. Die jeweilige Funktion sollte weitesgehend selbsterklärend sein.


![image_1](/assets/images/Controls/advanced-chart/advancedchart-01.png)


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


![image_1](/assets/images/Controls/advanced-chart/advancedchart-02.png)