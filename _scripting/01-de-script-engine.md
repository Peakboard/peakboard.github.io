---
layout: article
title: Die Peakboard-Script-Engine
menu_title: Die Peakboard-Script-Engine
description: Informatinon über die Peakboard Script Engine
lang: de
ref: scr-01
---
Eine der Grundideen hinter Peakboard ist, dass der Enduser eben kein Programmierer sein muss, wie es bei vielen anderen Lösungen der Fall ist. So viele Funktionen wie möglich sollten also dadurch zu erledigen sein, ohne ein Script zu nutzen. Scripte kommen in der Regel zum Einsatz, wenn

* Interaktivität gefordert ist (z.B. bei einem Touchbildschirm)
* Daten aufbereitet werden sollen oder müssen (z.B. Filter oder Aggregation)
* Texte nach bestimmten Regeln formatiert werden sollen

Die grundlegende Scriptsprache ist LUA, dazu gibt es im Internet zahlreiche Dokumentationen und Tutorials. Eine sehr schöne Dokumentation finden Sie auf [dieser](http://lua.coders-online.net/1) Internetseite. Neben den Standardfunktionalitäten von LUA bietet der Peakboard-Designer jedoch noch einige Erweiterungen dieser Sprache. Diese lassen sich auf der linken Seite des Scripteditors finden.

## Scripte in Events

Wir gehen von einer einfachen Datenquelle aus, wie sie zum Beispiel in [diesem](/tutorials/03-de-xml-daten.html) Artikel genutzt wird. Ziel soll es sein, bei jedem Refresh der Datenquelle (z.B. alle 90 Sekunden, wenn es so eingestellt ist), nicht nur das verbundene TableGrid-Control mit neuen Daten anzuzeigen, sondern auch die Anzahl der Datensätze in einem Textfeld auszugeben. Dazu brauchen wir neben dem TableGrid-Control ein Textfeld auf dem Panel. Dieses Textfeld muss einen Namen bekommen, dafür gibt es eine Name-Eigenschaft wie im folgenden Screenshot gezeigt.

![image_1](/assets/images/scripting/engine/TutorialScripting01.png)

Das TableGrid-Control wird einfach an die Datenquelle gebunden, dadurch wird es automatisch mitaktualisiert (so wie im oben bereits erwähnten [Artikel](/tutorials/03-de-xml-daten.html) gezeigt). Es ist also nichts zu tun mit dem TableGrid-Control. Um die Anzahl der Datensätze zu ermitteln brauchen wir jetzt allerdings ein Script, das jedes mal dann ausgeführt wird, wenn die Datenquelle aktualisiert wird. Mit der rechten Maustaste auf die Datenquelle und dann auf Edit Events öffnet den Script-Editor.

![image_1](/assets/images/scripting/engine/TutorialScripting02.png)

Auf der linken Seite findet sich eine Auflistung aller möglichen Datenelemente, die angesteuert werden können. Dazu gehören z.B. die Datenquellen und alle Steuerelemente, die auf Panels platziert sind und einen Namen haben (ohne Namen können die Controls nicht über das Script angesteuert werden). Die Datenquelle lässt sich über ihren Namen Data.Abfahrt ansteuern. Die Eigenschaft für die Anzahl der Datensätze ist Count. Das Textfeld muss über die Angabe des Screens adressiert werden. Das Textfeld hat etliche Eigenschaften, z.B.  die Schriftart oder die Sichtbarkeit oder eben die Eigenschaft Text, um den Inhalt zu setzen. Daraus ergibt sich die `Codezeile Screens[0].MeinTextfeld.Text = Data.Abfahrt.Count` wie im Screenshot gezeigt.

![image_1](/assets/images/scripting/engine/TutorialScripting03.png)

Und damit wird das Textfeld jedes Mal gesetzt, wenn die Datenquelle aktualisiert wird. Der nächste Screenshot zeigt den Preview.

![image_1](/assets/images/scripting/engine/TutorialScripting04.png)
